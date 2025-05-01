import { type Sablier, getChain, getChainName, indexers } from "@sablier/deployments";
import { autogenFileNames, getAutogenFilePath, log, writeFileWithOverride } from "./utils";

function generateTheGraphTable(indexers: Sablier.Indexer.TheGraph[]): string | null {
  let markdown = `| Chain | Explorer | Production Node | Testing Node |\n`;
  markdown += `| -------- | -------- | --------------- | ------------ |\n`;

  for (const indexer of indexers) {
    const chain = getChain(indexer.chainId);
    if (!chain) continue;

    let prodNodeName = "";
    let prodNameURL = "";
    let testNodeURL = "";

    if (indexer.graph.kind === "custom") {
      prodNodeName = "Custom Node";
      prodNameURL = indexer.graph.subgraphURL;
    } else {
      prodNodeName = "The Graph Network";
      prodNameURL = indexer.graph.subgraph.url("API_KEY");
      testNodeURL = indexer.graph.studioURL || "";
    }

    const explorerUrl = indexer.graph.explorerURL || "";
    const subgraphPrefix = `sablier-${indexer.protocol}`;
    const subgraphName = `${subgraphPrefix}-${chain.key.toLowerCase()}`;

    const explorerCell = explorerUrl ? `[${subgraphName}](${explorerUrl})` : subgraphName;
    const prodCell = prodNameURL ? `[${prodNodeName}](${prodNameURL})` : prodNodeName;
    const testCell = testNodeURL ? `[Studio](${testNodeURL})` : "N/A";

    markdown += `| ${chain.name} | ${explorerCell} | ${prodCell} | ${testCell} |\n`;
  }

  return markdown;
}

function generateEnvioTable(indexers: Sablier.Indexer.Envio[]): string | null {
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
  graph: Sablier.Indexer.TheGraph[],
  envio: Sablier.Indexer.Envio[],
): void {
  const graphTable = generateTheGraphTable(graph);
  const envioTable = generateEnvioTable(envio);
  if (!graphTable || !envioTable) return;

  if (graphTable) {
    const graphFilePath = getAutogenFilePath(protocol, autogenFileNames.theGraph);
    if (writeFileWithOverride({ filePath: graphFilePath, content: graphTable })) {
      log(`✅ Generated table with The Graph subgraphs for ${protocol}`);
    }
  }

  if (envioTable) {
    const envioFilePath = getAutogenFilePath(protocol, autogenFileNames.envio);
    if (writeFileWithOverride({ filePath: envioFilePath, content: envioTable })) {
      log(`✅ Generated table with Envio endpoints for ${protocol}`);
    }
  }
}

function autogenEndpoints(): void {
  generateTables("airdrops", indexers.airdrops.graph, indexers.airdrops.envio);
  generateTables("flow", indexers.flow.graph, indexers.flow.envio);
  generateTables("lockup", indexers.lockup.graph, indexers.lockup.envio);
}

autogenEndpoints();
