import type { Indexer } from "@sablier/indexers";
import { indexers } from "@sablier/indexers";
import { Command } from "commander";
import _ from "lodash";
import { sablier } from "sablier";
import { autogenFilePaths, getRelative, writeFileWithOverwrite } from "../../helpers";
import type { CliOptions } from "../../types";

export function createIndexersCommand(): Command {
  return new Command("indexers")
    .description("Generate indexer endpoint tables for all Sablier protocols")
    .action(async (_options, command: Command) => {
      const mergedOptions = command.optsWithGlobals();
      await generateIndexers(mergedOptions);
    });
}

export const indexersCmd = createIndexersCommand();

export async function generateIndexers(options: CliOptions = {}): Promise<void> {
  generateTables("airdrops", options);
  generateTables("flow", options);
  generateTables("lockup", options);
}

function generateTables(protocol: Indexer.Protocol, options: CliOptions): void {
  const envioTable = generateEnvioTable(indexers.envio[protocol]);
  const graphTable = generateGraphTable(indexers.graph[protocol]);

  const envioFilePath = autogenFilePaths.envio(protocol);
  if (writeFileWithOverwrite({ content: envioTable, filePath: envioFilePath, options })) {
    console.log(`✔️  Generated ${_.capitalize(protocol)} endpoints table for Envio at: ${getRelative(envioFilePath)}`);
  }

  const graphFilePath = autogenFilePaths.graph(protocol);
  if (writeFileWithOverwrite({ content: graphTable, filePath: graphFilePath, options })) {
    console.log(
      `✔️  Generated ${_.capitalize(protocol)} endpoints table for The Graph at: ${getRelative(graphFilePath)}`,
    );
  }
}

function generateEnvioTable(indexers: Indexer[]): string {
  let markdown = `| Chain | Production URL | Playground URL | Explorer URL |\n`;
  markdown += `| -------- | -------------- | ----------- | ------------ |\n`;

  for (const indexer of indexers) {
    const chain = sablier.chains.get(indexer.chainId);
    if (!chain || !chain.name) {
      continue;
    }

    const productionURL = indexer.endpoint.url;
    const playgroundURL = indexer.testingURL;
    const explorerURL = indexer.explorerURL;

    const productionCell = `${productionURL}`;
    const playgroundCell = playgroundURL ? `[Playground](${playgroundURL})` : "N/A";
    const explorerCell = explorerURL ? `[Explorer](${explorerURL})` : "N/A";

    markdown += `| ${chain.name} | ${productionCell} | ${playgroundCell} | ${explorerCell} |\n`;
  }

  return markdown;
}

function generateGraphTable(indexers: Indexer[]): string {
  let markdown = `| Chain | Production URL | Testing URL | Explorer URL |\n`;
  markdown += `| -------- | -------------- | ----------- | ------------ |\n`;

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
