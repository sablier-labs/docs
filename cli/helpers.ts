import _ from "lodash";
import * as fs from "node:fs";
import * as path from "node:path";
import type { CliOptions } from "./types";
import type { Sablier } from "sablier";

const ROOT_DIR = path.join(__dirname, "..");
if (!fs.existsSync(path.join(ROOT_DIR, "package.json"))) {
  throw new Error("ROOT_DIR is not set correctly");
}

export const autogenFilePaths = {
  deployments: (release: Sablier.Release) =>
    path.join(ROOT_DIR, "src", "autogen", release.protocol, `TableDeployments${_.capitalize(release.version)}.mdx`),
  graph: (protocol: Sablier.Protocol) => path.join(ROOT_DIR, "src", "autogen", protocol, "TableTheGraph.mdx"),
  envio: (protocol: Sablier.Protocol) => path.join(ROOT_DIR, "src", "autogen", protocol, "TableEnvio.mdx"),
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

export function writeFileWithOverwrite(params: FileWriteParams): boolean {
  const { filePath, content, encoding = "utf8", options } = params;

  if (fs.existsSync(filePath) && !options.overwrite) {
    const relativePath = path.relative(process.cwd(), filePath);
    console.log(`⚠️  Deployment table already exists at: ${relativePath}. Use --overwrite flag to overwrite.`);
    return false;
  }

  fs.writeFileSync(filePath, content, encoding);
  return true;
}
