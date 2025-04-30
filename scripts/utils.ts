import fs from "node:fs";
import path from "node:path";

export const shouldOverride = process.argv.includes("--override");
export const verbose = process.argv.includes("--verbose");

export function log(message: string): void {
  if (verbose) {
    console.log(message);
  }
}

export interface FileWriteOptions {
  filePath: string;
  content: string;
  encoding?: BufferEncoding;
}

export function writeFileWithOverride({ filePath, content, encoding = "utf8" }: FileWriteOptions): boolean {
  if (fs.existsSync(filePath) && !shouldOverride) {
    const relativePath = path.relative(process.cwd(), filePath);
    log(`❌ File already exists: ${relativePath}. Use --override flag to override.`);
    return false;
  }

  fs.writeFileSync(filePath, content, encoding);
  return true;
}
