import type * as Preset from "@docusaurus/preset-classic";
import type { DocusaurusConfig } from "@docusaurus/types";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

const classic: [string, Preset.Options] = [
  "classic",
  {
    docs: {
      editUrl: "https://github.com/sablier-labs/docs/blob/main/",
      rehypePlugins: [rehypeKatex],
      remarkPlugins: [remarkGfm, remarkMath],
      routeBasePath: "/", // Serve the docs at the site's root
      sidebarPath: "./config/sidebars.ts",
    },
    theme: {
      customCss: ["./src/css/sablier.css", "./src/css/custom.css"],
    },
  },
];

export const presets: DocusaurusConfig["presets"] = [classic];
