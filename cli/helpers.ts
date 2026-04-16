import * as fs from "node:fs";
import * as path from "node:path";
import type { Command } from "commander";
import type { Sablier } from "sablier";
import type { CliOptions } from "./types";

const ROOT_DIR = path.join(import.meta.dirname, "..");
if (!fs.existsSync(path.join(ROOT_DIR, "package.json"))) {
  throw new Error("ROOT_DIR is not set correctly");
}

export const autogenFilePaths = {
  deployments: (release: Sablier.Release) =>
    path.join(
      ROOT_DIR,
      "src",
      "autogen",
      release.protocol,
      `_table-deployments-${release.version}.mdx`
    ),
  envio: (key: string) => path.join(ROOT_DIR, "src", "autogen", key, "_table-envio.mdx"),
  graph: (key: string) => path.join(ROOT_DIR, "src", "autogen", key, "_table-graph.mdx"),
};

type FileWriteParams = {
  content: string;
  filePath: string;
  options: CliOptions;
  encoding?: BufferEncoding;
};

export function getRelative(absolutePath: string): string {
  return path.relative(process.cwd(), absolutePath);
}

export function getMergedOpts(command: Command): CliOptions {
  const chain: Command[] = [];
  for (let current: Command | null = command; current; current = current.parent) {
    chain.unshift(current);
  }
  const merged: CliOptions = {};
  for (const cmd of chain) {
    Object.assign(merged, cmd.opts());
  }
  return merged;
}

export function writeFileWithOverwrite(params: FileWriteParams): boolean {
  const { filePath, content, encoding = "utf8", options } = params;

  if (fs.existsSync(filePath) && !options.overwrite) {
    console.log(
      `⚠️  Deployment table already exists at: ${getRelative(filePath)}. Use --overwrite flag to overwrite.`
    );
    return false;
  }

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, encoding);
  return true;
}
