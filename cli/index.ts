#!/usr/bin/env node
import { Command } from "commander";

import { autogenCmd } from "./commands/autogen";

async function main(): Promise<void> {
  const program = new Command();

  program.name("sablier-docs-cli").description("CLI tool for auto-generating Markdown content");

  // Global options
  program.option("-o, --overwrite", "overwrite existing files", false);

  // Add the autogen command to the main program
  program.addCommand(autogenCmd);

  await program.parseAsync();
}

main().catch(console.error);
