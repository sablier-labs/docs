import * as fs from "node:fs";
import * as path from "node:path";
import type { CliOptions } from "./types";
import type { Sablier } from "sablier";

const ROOT_DIR = path.join(__dirname, "..");
if (!fs.existsSync(path.join(ROOT_DIR, "package.json"))) {
  throw new Error("ROOT_DIR is not set correctly");
}

export const autogenFileNames = {
  deployments: (version: Sablier.Version) =>
    `TableDeployments${version.charAt(0).toUpperCase() + version.slice(1)}.mdx`,
  envio: "TableEnvio.mdx",
  theGraph: "TableTheGraph.mdx",
};

export function getAutogenFilePath(protocol: string, fileName: string): string {
  return path.join(ROOT_DIR, "src", "autogen", protocol, fileName);
}
export function log(message: string, options: CliOptions): void {
  if (options.verbose) {
    console.log(message);
  }
}

type FileWriteParams = {
  filePath: string;
  content: string;
  encoding?: BufferEncoding;
  options: CliOptions;
};

export function writeFileWithOverride(params: FileWriteParams): boolean {
  const { filePath, content, encoding = "utf8", options } = params;

  if (fs.existsSync(filePath) && !options.override) {
    const relativePath = path.relative(process.cwd(), filePath);
    log(`❌ File already exists: ${relativePath}. Use --override flag to override.`, options);
    return false;
  }

  fs.writeFileSync(filePath, content, encoding);
  return true;
}
