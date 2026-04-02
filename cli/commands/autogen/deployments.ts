import { Command } from "commander";
import _ from "lodash";
import type { Sablier } from "sablier";
import { Protocol, sablier } from "sablier";
import { Links } from "../../../src/constants";
import { autogenFilePaths, getRelative, writeFileWithOverwrite } from "../../helpers";
import type { CliOptions } from "../../types";

export function createDeploymentsCommand() {
  return new Command("deployments")
    .description("Generate deployment tables for all Sablier releases")
    .action(async function () {
      await generateDeployments(getCommandOptions(this));
    });
}

export const deploymentsCmd = createDeploymentsCommand();

const PRIORITY_CHAIN_NAMES: string[] = ["Ethereum"];
const priorityChainIndexes = new Map(PRIORITY_CHAIN_NAMES.map((name, index) => [name, index]));
type DeploymentOrdering = "alphabetical" | "priority-first";

export function generateDeployments(options: CliOptions = {}): void {
  for (const release of sablier.releases.getAll()) {
    if (release.protocol === Protocol.Legacy) {
      continue;
    }

    const tables = generateTables(release);
    if (!tables) {
      continue;
    }

    const filePath = autogenFilePaths.deployments(release);

    if (writeFileWithOverwrite({ content: tables, filePath, options })) {
      const protocol = _.capitalize(release.protocol);
      const version = _.capitalize(release.version);
      console.log(
        `✔️  Generated deployments table for ${protocol} ${version} at: ${getRelative(filePath)}`
      );
    }
  }
}

function generateTables(release: Sablier.Release) {
  const isLatestRelease =
    sablier.releases.getLatest({ protocol: release.protocol }).version === release.version;

  const [mainnetDeployments, testnetDeployments] = _.partition(
    release.deployments,
    (d) => !sablier.chains.get(d.chainId).isTestnet
  );

  const orderedMainnetDeployments = orderDeployments(
    mainnetDeployments,
    isLatestRelease,
    "priority-first"
  );
  const orderedTestnetDeployments = orderDeployments(
    testnetDeployments,
    isLatestRelease,
    "alphabetical"
  );

  return (
    renderDeploymentSection("Mainnets", orderedMainnetDeployments, release) +
    renderDeploymentSection("Testnets", orderedTestnetDeployments, release)
  );
}

function orderDeployments(
  deployments: Sablier.Deployment[],
  isLatestRelease: boolean,
  ordering: DeploymentOrdering
): Sablier.Deployment[] {
  if (!isLatestRelease) {
    return deployments;
  }

  return [...deployments].sort((left, right) => compareDeployments(left, right, ordering));
}

function compareDeployments(
  left: Sablier.Deployment,
  right: Sablier.Deployment,
  ordering: DeploymentOrdering
): number {
  const leftChain = sablier.chains.get(left.chainId);
  const rightChain = sablier.chains.get(right.chainId);

  if (ordering === "priority-first") {
    const leftPriority = priorityChainIndexes.get(leftChain.name) ?? Number.POSITIVE_INFINITY;
    const rightPriority = priorityChainIndexes.get(rightChain.name) ?? Number.POSITIVE_INFINITY;
    if (leftPriority !== rightPriority) {
      return leftPriority - rightPriority;
    }
  }

  return leftChain.name.localeCompare(rightChain.name);
}

function getCommandOptions(command: Command): CliOptions {
  if (command.parent?.parent) {
    return command.parent.parent.opts() as CliOptions;
  }

  if (command.parent) {
    return command.parent.opts() as CliOptions;
  }

  return {};
}

function renderDeploymentSection(
  title: string,
  deployments: Sablier.Deployment[],
  release: Sablier.Release
): string {
  let section = `## ${title}\n\n`;

  for (const deployment of deployments) {
    const chain = sablier.chains.get(deployment.chainId);
    const uiIndicator = chain.isSupportedByUI
      ? "✅ Supported in Sablier UI"
      : "❌ Not supported in Sablier UI";
    section += `### ${chain.name}\n\n`;
    section += `${uiIndicator}\n\n`;
    section += generateDeploymentTable(deployment, release);
    section += "\n";
  }

  return section;
}

function generateDeploymentTable(deployment: Sablier.Deployment, release: Sablier.Release): string {
  let table = "| Contract | Address | Deployment |\n";
  table += "| :-------- | :-------- | :--------- |\n";

  const priorityNames = ["SablierLockup", "SablierBatchLockup", "SablierFlow"];
  const orderedContracts = [...deployment.contracts].sort((a, b) => {
    const ai = priorityNames.indexOf(a.name);
    const bi = priorityNames.indexOf(b.name);
    return (ai >= 0 ? ai : priorityNames.length) - (bi >= 0 ? bi : priorityNames.length);
  });

  for (const contract of orderedContracts) {
    const addressCell = contract.explorerURL
      ? `[\`${contract.address}\`](${contract.explorerURL})`
      : `\`${contract.address}\``;
    const protocol = release.protocol;
    const version = release.version;
    const linkCell = `[\`${protocol}-${version}\`](${Links.GitHub.SDK}/blob/main/deployments/${protocol}/${version})`;
    table += `| ${contract.name} | ${addressCell} | ${linkCell} |\n`;
  }

  return table;
}
