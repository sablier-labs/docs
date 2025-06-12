#!/usr/bin/env node
import { Command } from "commander";

async function main() {
  const program = new Command();

  program.name("sablier-docs-cli").description("CLI tool for auto-generating Markdown content");

  // Global options
  program.option("-o, --override", "override existing files", false);
  program.option("-v, --verbose", "enable verbose logging", false);

  // Create deployment command
  const { createDeploymentsCommand, generateDeployments } = await import("./commands/deployments.js");
  program.addCommand(createDeploymentsCommand());

  // // Create indexers command
  const { createIndexersCommand, generateIndexers } = await import("./commands/indexers.js");
  program.addCommand(createIndexersCommand());

  // Add a generate command that runs all generators
  program
    .command("generate")
    .description("generate all documentation tables")
    .action(async (_options, command) => {
      const globalOptions = command.parent?.opts() || {};

      console.log("🚀 Generating all documentation tables...");

      // Run deployments generation
      await generateDeployments(globalOptions);

      // Run indexers generation
      await generateIndexers(globalOptions);

      console.log("✅ All documentation tables generated successfully!");
    });

  program.parse();
}

main().catch(console.error);
