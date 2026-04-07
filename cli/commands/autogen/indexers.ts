import type { Indexer } from "@sablier/indexers";
import { indexers } from "@sablier/indexers";
import { Command } from "commander";
import _ from "lodash";
import { sablier } from "sablier";
import { autogenFilePaths, getRelative, writeFileWithOverwrite } from "../../helpers";
import type { CliOptions } from "../../types";

export function createIndexersCommand() {
  return new Command("indexers")
    .description("Generate indexer endpoint tables for all Sablier indexers")
    .action(async function () {
      const options = this.parent ? this.parent.opts() : {};
      await generateIndexers(options);
    });
}

export const indexersCmd = createIndexersCommand();

export function generateIndexers(options: CliOptions = {}): void {
  generateTables("airdrops", options);
  generateTables("streams", options);
}

function generateTables(indexerKey: Indexer.IndexerKey, options: CliOptions): void {
  const envioTable = generateEnvioTable(indexers.envio[indexerKey]);
  const graphTable = generateGraphTable(indexers.graph[indexerKey]);

  const envioFilePath = autogenFilePaths.envio(indexerKey);
  if (writeFileWithOverwrite({ content: envioTable, filePath: envioFilePath, options })) {
    console.log(
      `✔️  Generated ${_.capitalize(indexerKey)} endpoints table for Envio at: ${getRelative(envioFilePath)}`
    );
  }

  const graphFilePath = autogenFilePaths.graph(indexerKey);
  if (writeFileWithOverwrite({ content: graphTable, filePath: graphFilePath, options })) {
    console.log(
      `✔️  Generated ${_.capitalize(indexerKey)} endpoints table for The Graph at: ${getRelative(graphFilePath)}`
    );
  }
}

function generateEnvioTable(indexers: Indexer[]): string {
  let markdown = "| Chain | Production URL | Playground URL | Explorer URL |\n";
  markdown += "| -------- | -------------- | ----------- | ------------ |\n";

  for (const indexer of indexers) {
    const chain = sablier.chains.get(indexer.chainId);
    if (!chain?.name) {
      continue;
    }

    const productionURL = indexer.endpoint.url;
    const playgroundURL = indexer.testingURL;
    const explorerURL = indexer.explorerURL;

    const playgroundCell = playgroundURL ? `[Playground](${playgroundURL})` : "N/A";
    const explorerCell = explorerURL ? `[Explorer](${explorerURL})` : "N/A";

    markdown += `| ${chain.name} | ${productionURL} | ${playgroundCell} | ${explorerCell} |\n`;
  }

  return markdown;
}

function generateGraphTable(indexers: Indexer[]): string {
  let markdown = "| Chain | Production URL | Testing URL | Explorer URL |\n";
  markdown += "| -------- | -------------- | ----------- | ------------ |\n";

  for (const indexer of indexers) {
    const chain = sablier.chains.getOrThrow(indexer.chainId);

    const productionURL = indexer.endpoint.url;
    const testingURL = indexer.testingURL;
    const explorerURL = indexer.explorerURL;

    const productionCell = `[${indexer.name}](${productionURL})`;
    const testingCell = testingURL ? `[Testing](${testingURL})` : "N/A";
    const explorerCell = explorerURL ? `[Explorer](${explorerURL})` : "N/A";

    markdown += `| ${chain.name} | ${productionCell} | ${testingCell} | ${explorerCell} |\n`;
  }

  return markdown;
}
