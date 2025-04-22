import type { Sablier } from "@sablier/deployments";
import { BENCHMARKS_COMMIT, GITHUB_ORG, Links } from "./constants";

export function generateDeploymentTable(deployment: Sablier.Deployment, protocol: string, version: string): string {
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

export function getBenchmarkURL(path: string): string {
  return getRawContentURL("benchmarks", BENCHMARKS_COMMIT, path);
}

export function getRawContentURL(repo: string, ref: string, path: string): string {
  return `https://raw.githubusercontent.com/${GITHUB_ORG}/${repo}/${ref}/${path}`;
}
