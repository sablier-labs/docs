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

  const mainnetDeployments = release.deployments.filter((d) => {
    const chain = sablier.chains.get(d.chainId);
    return !chain.isTestnet;
  });
  const testnetDeployments = release.deployments.filter((d) => {
    const chain = sablier.chains.get(d.chainId);
    return chain.isTestnet;
  });

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
  const priorityBuckets = new Map<string, Sablier.Deployment["contracts"]>();
  const otherContracts: Sablier.Deployment["contracts"] = [];

  for (const contract of deployment.contracts) {
    if (priorityNames.includes(contract.name)) {
      const bucket = priorityBuckets.get(contract.name);
      if (bucket) {
        bucket.push(contract);
      } else {
        priorityBuckets.set(contract.name, [contract]);
      }
    } else {
      otherContracts.push(contract);
    }
  }

  const orderedContracts: Sablier.Deployment["contracts"] = [];
  for (const name of priorityNames) {
    const bucket = priorityBuckets.get(name);
    if (bucket) {
      orderedContracts.push(...bucket);
    }
  }
  orderedContracts.push(...otherContracts);

  for (const contract of orderedContracts) {
    let addressCell: string;
    if (contract.explorerURL) {
      addressCell = `[\`${contract.address}\`](${contract.explorerURL})`;
    } else {
      addressCell = `\`${contract.address}\``;
    }
    const protocol = release.protocol;
    const version = release.version;
    const linkCell = `[\`${protocol}-${version}\`](${Links.GitHub.SDK}/blob/main/deployments/${protocol}/${version})`;
    table += `| ${contract.name} | ${addressCell} | ${linkCell} |\n`;
  }

  return table;
}
