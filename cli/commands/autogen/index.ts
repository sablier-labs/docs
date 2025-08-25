import { Command } from "commander";
import { deploymentsCmd, generateDeployments } from "./deployments";
import { graphQLCmd } from "./graphql";
import { generateIndexers, indexersCmd } from "./indexers";

export function createAutogenCommand(): Command {
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
  autogenCommand.addCommand(deploymentsCmd);
  autogenCommand.addCommand(indexersCmd);
  autogenCommand.addCommand(graphQLCmd);

  return autogenCommand;
}

export const autogenCmd = createAutogenCommand();
