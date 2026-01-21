import { Command } from "commander";
import $ from "execa";
import type { CliOptions } from "../../types";

/* -------------------------------------------------------------------------- */
/*                                   COMMAND                                  */
/* -------------------------------------------------------------------------- */

export function createMerkleCommand() {
  return new Command("merkle").description("Generate Merkle API documentation from OpenAPI spec").action(async function () {
    const parentOptions = this.parent ? this.parent.opts() : {};
    await generateMerkle(parentOptions);
  });
}

export const merkleCmd = createMerkleCommand();

export async function generateMerkle(options: CliOptions): Promise<void> {
  console.log("🚀 Generating Merkle API documentation from OpenAPI spec...\n");

  const docsPath = "./docs/api/airdrops/merkle-api";

  try {
    // Generate docs from OpenAPI spec using docusaurus-plugin-openapi-docs
    await $("npx", ["docusaurus", "gen-api-docs", "merkle-api"], { stdio: "inherit" });

    console.log();
    await runPrettier(docsPath);

    console.log("✔️  Generated Merkle API docs from OpenAPI spec\n");
  } catch (error) {
    console.error("❌ Failed to generate Merkle API docs:", error);
    throw error;
  }
}

async function runPrettier(targetPath: string): Promise<void> {
  await $("npx", ["prettier", "--cache", "--write", `${targetPath}/**/*.{md,mdx,yml,yaml}`]);
}
