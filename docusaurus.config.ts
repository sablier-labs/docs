import type { Config } from "@docusaurus/types";
import { headTags } from "./config/head-tags";
import { plugins } from "./config/plugins";
import { presets } from "./config/presets";
import { themeConfig } from "./config/theme-config";

const config: Config = {
  baseUrl: "/",
  favicon: "img/favicon.ico",
  /** Future flags, @see https://docusaurus.io/docs/api/docusaurus-config#future */
  future: {
    experimental_faster: process.env.VERCEL ? false : true,
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  headTags,
  markdown: {
    format: "detect",
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
    mermaid: true,
  },
  onBrokenLinks: "throw",
  organizationName: "sablier-labs",
  plugins,
  presets,
  projectName: "sablier-docs",
  scripts: [
    {
      async: false,
      src: "/js/crisp-chat.js",
    },
  ],
  staticDirectories: ["static"],
  stylesheets: [
    /** @see https://docusaurus.io/docs/markdown-features/math-equations */
    {
      crossorigin: "anonymous",
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      type: "text/css",
    },
  ],
  tagline: "Documentation and guides for Sablier",
  themeConfig,
  themes: ["@docusaurus/theme-mermaid", "docusaurus-theme-github-codeblock"],
  title: "Sablier Docs",
  url: "https://docs.sablier.com",
};

export default config;
