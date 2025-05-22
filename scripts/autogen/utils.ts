import type { Sablier } from "@sablier/deployments";
import fs from "node:fs";
import path from "node:path";

export const autogenFileNames = {
  deployments: (version: Sablier.Version) =>
    `TableDeployments${version.charAt(0).toUpperCase() + version.slice(1)}.mdx`,
  envio: "TableEnvio.mdx",
  theGraph: "TableTheGraph.mdx",
};

export const flags = {
  override: process.argv.includes("--override"),
  verbose: process.argv.includes("--verbose"),
};

export function log(message: string): void {
  if (flags.verbose) {
    console.log(message);
  }
}

export function getAutogenFilePath(protocol: string, fileName: string): string {
  return path.join(__dirname, "..", "..", "src", "autogen", protocol, fileName);
}

interface FileWriteOptions {
  filePath: string;
  content: string;
  encoding?: BufferEncoding;
}

export function writeFileWithOverride({ filePath, content, encoding = "utf8" }: FileWriteOptions): boolean {
  if (fs.existsSync(filePath) && !flags.override) {
    const relativePath = path.relative(process.cwd(), filePath);
    log(`❌ File already exists: ${relativePath}. Use --override flag to override.`);
    return false;
  }

  fs.writeFileSync(filePath, content, encoding);
  return true;
}
