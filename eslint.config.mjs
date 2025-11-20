import { fileURLToPath } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";
import { defineConfig, globalIgnores } from "eslint/config";
import * as mdx from "eslint-plugin-mdx";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

/** @type { import("eslint").Linter.Config[] } */
export default defineConfig([
  globalIgnores(["**/*.{js,jsx,ts,tsx}", "**/graphql/envio/**/*.mdx", "**/graphql/the-graph/**/*.mdx", "repos/**"]),
  includeIgnoreFile(gitignorePath, "Imported .gitignore patterns"),
  {
    ...mdx.flat,
    files: ["**/*.{md,mdx}"],
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
    rules: {
      "no-unused-expressions": "off",
    }
  },
]);
