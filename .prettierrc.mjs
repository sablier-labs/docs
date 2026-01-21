import baseConfig from "@sablier/devkit/prettier";

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...baseConfig,
  overrides: [
    ...(baseConfig.overrides || []),
    {
      files: ["*.md", "*.mdx"],
      options: {
        proseWrap: "always",
      },
    },
  ],
};

export default config;
