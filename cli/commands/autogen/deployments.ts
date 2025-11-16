import { Command } from "commander";
import _ from "lodash";
import type { Sablier } from "sablier";
import { sablier } from "sablier";
import { Protocol } from "sablier/evm";
import { Links } from "../../../src/constants";
import { autogenFilePaths, getRelative, writeFileWithOverwrite } from "../../helpers";
import type { CliOptions } from "../../types";

export function createDeploymentsCommand() {
  return new Command("deployments")
    .description("Generate deployment tables for all Sablier releases")
    .action(async function () {
      const options = this.parent ? this.parent.opts() : {};
      await generateDeployments(options);
    });
}

export const deploymentsCmd = createDeploymentsCommand();

export async function generateDeployments(options: CliOptions = {}): Promise<void> {
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
      console.log(`✔️  Generated deployments table for ${protocol} ${version} at: ${getRelative(filePath)}`);
    }
  }
}

function generateTables(release: Sablier.Release) {
  const mainnetDeployments = release.deployments.filter((d) => {
    const chain = sablier.chains.get(d.chainId);
    return !chain.isTestnet;
  });
  const testnetDeployments = release.deployments.filter((d) => {
    const chain = sablier.chains.get(d.chainId);
    return chain.isTestnet;
  });

  let content = "## Mainnets\n\n";
  for (const deployment of mainnetDeployments) {
    const chain = sablier.chains.get(deployment.chainId);
    content += `### ${chain.name}\n\n`;
    content += generateDeploymentTable(deployment, release);
    content += "\n";
  }

  content += "## Testnets\n\n";
  for (const deployment of testnetDeployments) {
    const chain = sablier.chains.get(deployment.chainId);
    content += `### ${chain.name}\n\n`;
    content += generateDeploymentTable(deployment, release);
    content += "\n";
  }

  return content;
}

function generateDeploymentTable(deployment: Sablier.Deployment, release: Sablier.Release): string {
  let table = `| Contract | Address | Deployment |\n`;
  table += `| :-------- | :-------- | :--------- |\n`;

  for (const contract of deployment.contracts) {
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
