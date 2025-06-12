import { Command } from "commander";
import { Protocol, type Sablier, sablier } from "sablier";
import type { CliOptions } from "../types";
import { Links } from "../../src/constants";
import * as helpers from "../helpers";

export function createDeploymentsCommand(): Command {
  return new Command("deployments")
    .description("Generate deployment tables for all Sablier releases")
    .action(async (_options, command) => {
      const globalOptions = command.parent?.opts() || {};
      await generateDeployments(globalOptions);
    });
}

export async function generateDeployments(options: CliOptions = {}): Promise<void> {
  for (const release of sablier.releases.getAll()) {
    if (release.protocol === Protocol.Legacy) {
      continue;
    }

    const tables = generateTables(release);
    if (!tables) {
      continue;
    }

    const fileName = helpers.autogenFileNames.deployments(release.version);
    const filePath = helpers.getAutogenFilePath(release.protocol, fileName);

    if (helpers.writeFileWithOverride({ filePath, content: tables, options })) {
      helpers.log(`✅ Generated table with deployments for ${release.protocol} ${release.version}`, options);
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
    content += generateDeploymentTable(deployment, release.protocol, release.version);
    content += "\n";
  }

  content += "## Testnets\n\n";
  for (const deployment of testnetDeployments) {
    const chain = sablier.chains.get(deployment.chainId);
    content += `### ${chain.name}\n\n`;
    content += generateDeploymentTable(deployment, release.protocol, release.version);
    content += "\n";
  }

  return content;
}

function generateDeploymentTable(deployment: Sablier.Deployment, protocol: Sablier.Protocol, version: string): string {
  let table = `| Contract | Address | Deployment |\n`;
  table += `| :-------- | :-------- | :--------- |\n`;

  for (const contract of deployment.contracts) {
    let address: string;
    if (contract.explorerURL) {
      address = `[\`${contract.address}\`](${contract.explorerURL})`;
    } else {
      address = `\`${contract.address}\``;
    }
    const link = `[\`${protocol}-${version}\`](${Links.GitHub.SDK}/blob/main/deployments/${protocol}/${version})`;
    table += `| ${contract.name} | ${address} | ${link} |\n`;
  }

  return table;
}
