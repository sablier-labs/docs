/**
 * @type {import("lint-staged").Configuration}
 */
module.exports = {
  "*.{css,js,json,jsonc,jsx,ts,tsx}": "bun biome check --write",
  "*.{js,jsx,ts,tsx}": "bun biome lint --write --only correctness/noUnusedImports",
  "*.{md,mdx,yaml,yml}": "bun prettier --cache --write",
  "*.{md,mdx}": "bun eslint --cache --fix",
};
