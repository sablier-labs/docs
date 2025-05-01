import { type Sablier, getChain, releases } from "@sablier/deployments";
import { Links } from "../../src/constants";
import { autogenFileNames, getAutogenFilePath, log, writeFileWithOverride } from "./utils";

function generateDeploymentTable(deployment: Sablier.Deployment, protocol: string, version: string): string {
  let table = `| Contract | Address | Deployment |\n`;
  table += `| :------- | :------ | :--------- |\n`;

  for (const contract of deployment.contracts) {
    let address: string;
    if (contract.explorerURL) {
      address = `[\`${contract.address}\`](${contract.explorerURL})`;
    } else {
      address = `\`${contract.address}\``;
    }
    const link = `[\`${protocol}-${version}\`](${Links.GitHub.DEPLOYMENTS}/blob/main/data/${protocol}/${version})`;
    table += `| ${contract.name} | ${address} | ${link} |\n`;
  }

  return table;
}

function generateTables(release: Sablier.Release) {
  const mainnetDeployments = release.deployments.filter((d) => {
    const chain = getChain(d.chainId);
    return !chain.isTestnet;
  });
  const testnetDeployments = release.deployments.filter((d) => {
    const chain = getChain(d.chainId);
    return chain.isTestnet;
  });

  let content = "## Mainnets\n\n";
  for (const deployment of mainnetDeployments) {
    const chain = getChain(deployment.chainId);
    content += `### ${chain.name}\n\n`;
    content += generateDeploymentTable(deployment, release.protocol, release.version);
    content += "\n";
  }

  content += "## Testnets\n\n";
  for (const deployment of testnetDeployments) {
    const chain = getChain(deployment.chainId);
    content += `### ${chain.name}\n\n`;
    content += generateDeploymentTable(deployment, release.protocol, release.version);
    content += "\n";
  }

  return content;
}

function autogenDeployments(): void {
  for (const release of releases) {
    if (release.protocol === "legacy") continue;

    const tables = generateTables(release);
    if (!tables) continue;

    const fileName = autogenFileNames.deployments(release.version);
    const filePath = getAutogenFilePath(release.protocol, fileName);

    if (writeFileWithOverride({ filePath, content: tables })) {
      log(`✅ Generated table with deployments for ${release.protocol} ${release.version}`);
    }
  }
}

autogenDeployments();
