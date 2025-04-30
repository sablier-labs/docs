import { type Sablier, getChain, getChainName, indexers } from "@sablier/deployments";
import path from "node:path";
import { log, writeFileWithOverride } from "./utils";

function generateSubgraphTable(indexers: Sablier.IndexerSubgraph[]): string | null {
  let markdown = `| Chain | Explorer | Production Node | Testing Node |\n`;
  markdown += `| -------- | -------- | --------------- | ------------ |\n`;

  for (const indexer of indexers) {
    const chain = getChain(indexer.chainId);
    if (!chain) continue;

    let prodNodeName = "";
    let prodNameURL = "";
    let testNodeURL = "";

    if (indexer.subgraph.kind === "custom") {
      prodNodeName = "Custom Node";
      prodNameURL = indexer.subgraph.customURL;
    } else {
      prodNodeName = "The Graph Network";
      prodNameURL = indexer.subgraph.info.url("API_KEY");
      testNodeURL = indexer.subgraph.studio || "";
    }

    const explorerUrl = indexer.subgraph.explorer || "";
    const subgraphPrefix = `sablier-${indexer.protocol}`;
    const subgraphName = `${subgraphPrefix}-${chain.key.toLowerCase()}`;

    const explorerCell = explorerUrl ? `[${subgraphName}](${explorerUrl})` : subgraphName;
    const prodCell = prodNameURL ? `[${prodNodeName}](${prodNameURL})` : prodNodeName;
    const testCell = testNodeURL ? `[Studio](${testNodeURL})` : "N/A";

    markdown += `| ${chain.name} | ${explorerCell} | ${prodCell} | ${testCell} |\n`;
  }

  return markdown;
}

function generateEnvioTable(indexers: Sablier.IndexerEnvio[]): string | null {
  let markdown = `| Chain | Endpoint |\n`;
  markdown += `| -------- | --------- |\n`;

  for (const indexer of indexers) {
    const chainName = getChainName(indexer.chainId);
    if (!chainName) continue;
    markdown += `| ${chainName} | ${indexer.envio} |\n`;
  }

  return markdown;
}

function generateTables(
  protocol: Sablier.Protocol,
  envios: Sablier.IndexerEnvio[],
  subgraphs: Sablier.IndexerSubgraph[],
): void {
  const envioTable = generateEnvioTable(envios);
  const subgraphTable = generateSubgraphTable(subgraphs);
  if (!envioTable && !subgraphTable) return;

  const outputDir = path.join(__dirname, "..", "src", "autogen", protocol);

  if (envioTable) {
    const envioFilePath = path.join(outputDir, "envios.mdx");
    if (writeFileWithOverride({ filePath: envioFilePath, content: envioTable })) {
      log(`✅ Generated table with envio endpoints for ${protocol}`);
    }
  }

  if (subgraphTable) {
    const subgraphFilePath = path.join(outputDir, "subgraphs.mdx");
    if (writeFileWithOverride({ filePath: subgraphFilePath, content: subgraphTable })) {
      log(`✅ Generated table with subgraphs for ${protocol}`);
    }
  }
}

function autogenEndpoints(): void {
  generateTables("airdrops", indexers.airdrops.envios, indexers.airdrops.subgraphs);
  generateTables("flow", indexers.flow.envios, indexers.flow.subgraphs);
  generateTables("lockup", indexers.lockup.envios, indexers.lockup.subgraphs);
}

autogenEndpoints();
