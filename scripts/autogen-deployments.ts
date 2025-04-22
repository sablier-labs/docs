import { type Sablier, getChain, getRelease, releases } from "@sablier/deployments";
import fs from "node:fs";
import path from "node:path";
import { Links } from "../src/constants";

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

function generateContent(protocol: Sablier.Protocol, version: Sablier.Version) {
  const release = getRelease(protocol, version);
  if (!release) {
    return null;
  }
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
    content += generateDeploymentTable(deployment, protocol, version);
    content += "\n";
  }

  content += "## Testnets\n\n";
  for (const deployment of testnetDeployments) {
    const chain = getChain(deployment.chainId);
    content += `### ${chain.name}\n\n`;
    content += generateDeploymentTable(deployment, protocol, version);
    content += "\n";
  }

  return content;
}

function main(): void {
  for (const release of releases) {
    const content = generateContent(release.protocol, release.version);
    if (!content) continue;

    // Generates a _deployments-v1.x.mdx file that is imported into the deployment page
    const filePath = path.join(
      "docs",
      "guides",
      release.protocol,
      release.isLatest
        ? `_deployments-${release.version}.mdx`
        : `previous-deployments/_deployments-${release.version}.mdx`,
    );

    fs.writeFileSync(filePath, content);
  }
}

main();
