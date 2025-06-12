import { type Indexer, indexers } from "@sablier/indexers";
import { Command } from "commander";
import { sablier } from "sablier";
import type { CliOptions } from "../types";
import * as helpers from "../helpers";

export function createIndexersCommand(): Command {
  return new Command("indexers")
    .description("Generate indexer endpoint tables for all Sablier protocols")
    .action(async (_options, command) => {
      const globalOptions = command.parent?.opts() || {};
      await generateIndexers(globalOptions);
    });
}

export async function generateIndexers(options: CliOptions = {}): Promise<void> {
  generateTables("airdrops", options);
  generateTables("flow", options);
  generateTables("lockup", options);
}

function generateTables(protocol: Indexer.Protocol, options: CliOptions): void {
  const graphTable = generateGraphTable(indexers.graph[protocol]);
  const envioTable = generateEnvioTable(indexers.envio[protocol]);

  const graphFilePath = helpers.getAutogenFilePath(protocol, helpers.autogenFileNames.theGraph);
  if (helpers.writeFileWithOverride({ filePath: graphFilePath, content: graphTable, options })) {
    helpers.log(`✅ Generated table with The Graph subgraphs for ${protocol}`, options);
  }

  const envioFilePath = helpers.getAutogenFilePath(protocol, helpers.autogenFileNames.envio);
  if (helpers.writeFileWithOverride({ filePath: envioFilePath, content: envioTable, options })) {
    helpers.log(`✅ Generated table with Envio endpoints for ${protocol}`, options);
  }
}

function generateGraphTable(indexers: Indexer[]): string {
  let markdown = `| Chain | Production URL | Studio URL | Playground URL |\n`;
  markdown += `| -------- | -------------- | ---------- | -------------- |\n`;

  for (const indexer of indexers) {
    const chain = sablier.chains.getOrThrow(indexer.chainId);

    const productionURL = indexer.endpoint.url;
    const studioURL = indexer.explorerURL;
    const playgroundURL = indexer.playgroundURL;

    const productionCell = `[${indexer.name}](${productionURL})`;
    const studioCell = studioURL ? `[Studio](${studioURL})` : "N/A";
    const playgroundCell = playgroundURL ? `[GraphiQL Playground](${playgroundURL})` : "N/A";

    markdown += `| ${chain.name} | ${productionCell} | ${studioCell} | ${playgroundCell} |\n`;
  }

  return markdown;
}

function generateEnvioTable(indexers: Indexer[]): string {
  let markdown = `| Chain | Endpoint |\n`;
  markdown += `| -------- | -------- |\n`;

  for (const indexer of indexers) {
    const chain = sablier.chains.get(indexer.chainId);
    if (!chain || !chain.name) {
      continue;
    }
    markdown += `| ${chain.name} | ${indexer.endpoint.url} |\n`;
  }

  return markdown;
}
