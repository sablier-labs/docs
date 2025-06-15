#!/usr/bin/env node
import { Command } from "commander";

async function main() {
  const program = new Command();

  program.name("sablier-docs-cli").description("CLI tool for auto-generating Markdown content");

  // Global options
  program.option("-o, --overwrite", "overwrite existing files", false);

  // Import and create subcommands
  const { createDeploymentsCommand, generateDeployments } = await import("./commands/autogen/deployments.js");
  const { createIndexersCommand, generateIndexers } = await import("./commands/autogen/indexers.js");
  const { createGraphQLCommand } = await import("./commands/autogen/graphql.js");

  // Create autogen parent command
  const autogenCommand = new Command("autogen")
    .description("Auto-generate documentation and indexers tables")
    .action(async (_options, command) => {
      const globalOptions = command.parent?.opts() || {};

      console.log("🚀 Generating all documentation tables...\n");

      // Run deployments generation
      await generateDeployments(globalOptions);

      console.log();

      // Run indexers generation
      await generateIndexers(globalOptions);

      console.log();
      console.log("✅ All documentation tables generated successfully!");
    });

  // Add subcommands to autogen
  autogenCommand.addCommand(createDeploymentsCommand());
  autogenCommand.addCommand(createIndexersCommand());
  autogenCommand.addCommand(createGraphQLCommand());

  // Add the autogen command to the main program
  program.addCommand(autogenCommand);

  program.parse();
}

main().catch(console.error);
