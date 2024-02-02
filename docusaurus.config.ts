import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const config: Config = {
  baseUrl: "/",
  favicon: "img/favicon.ico",
  markdown: {
    format: "detect",
    mermaid: true,
  },
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  organizationName: "sablier-labs",
  projectName: "sablier-docs",
  tagline: "Documentation and guides for Sablier",
  title: "Sablier Docs",
  url: "https://docs.sablier.com",
  presets: [
    [
      "classic",
      {
        docs: {
          editUrl: "https://github.com/sablier-labs/v2-docs/tree/main/",
          rehypePlugins: [rehypeKatex],
          routeBasePath: "/", // Serve the docs at the site's root
          remarkPlugins: [remarkMath],
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: [require.resolve("./src/css/sablier.css"), require.resolve("./src/css/custom.css")],
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      // V1 redirects
      {
        redirects: [
          {
            from: "/protocol/faq/basics",
            to: "/concepts/what-is-sablier",
          },
          {
            from: "/protocol/guides/getting-started",
            to: "/contracts/v1/guides/getting-started",
          },
          {
            from: "/protocol/guides/chains",
            to: "/contracts/v1/deployments",
          },
          {
            from: "/protocol/introduction",
            to: "/concepts/what-is-sablier",
          },
          {
            from: "/protocol/subgraphs/endpoints",
            to: "/api/subgraphs/overview",
          },
        ],
      },
    ],
  ],
  scripts: [
    {
      src: "/js/crisp-chat.js",
      async: false,
    },
  ],
  stylesheets: [
    {
      crossorigin: "anonymous",
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      type: "text/css",
    },
  ],
  staticDirectories: ["static"],
  themes: ["@docusaurus/theme-mermaid", "docusaurus-theme-github-codeblock"],
  themeConfig: {
    algolia: {
      appId: "9L7N2RKHWE",
      apiKey: "4fc960889335dad720b725a02667d46a",
      indexName: "sablierdocs",
    },
    codeblock: {
      showGithubLink: false,
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: "dark",

      // Support multiple color modes.
      disableSwitch: false,

      // Whether we should use the `prefers-color-scheme media-query` using user system preferences, instead of the
      // hard-coded `defaultMode`.
      respectPrefersColorScheme: true,
    },
    footer: {
      links: [
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "https://sablierlabs.co.uk",
            },
            {
              label: "Risk Notice",
              href: "https://sablier.com/risk-notice",
            },
            {
              label: "Terms of Service",
              href: "https://sablier.com/terms-of-service",
            },
            {
              label: "Privacy Policy",
              href: "https://docs.google.com/document/d/10OgbKJkoLnZ_pJtF6SAfcP7ufOC18K3N39MH538XeiI",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/Sablier",
            },
            {
              label: "Discord",
              href: "https://discord.gg/bSwRCwWRsT",
            },
            {
              label: "Blog",
              href: "https://medium.com/sablier",
            },
            {
              label: "Branding",
              href: "https://github.com/sablier-labs/branding",
            },
          ],
        },
        {
          title: "Developers",
          items: [
            {
              label: "V2 Core",
              href: "https://github.com/sablier-labs/v2-core",
            },
            {
              label: "V2 Periphery",
              href: "https://github.com/sablier-labs/v2-periphery",
            },
            {
              label: "V2 Integration Template",
              href: "https://github.com/sablier-labs/sablier-v2-integration-template",
            },
            {
              label: "Subgraph",
              href: "https://github.com/sablier-labs/subgraph",
            },
          ],
        },
      ],
      style: "dark",
    },
    image: "img/open-graph.png",
    mermaid: {
      theme: { light: "neutral", dark: "dark" },
    },
    metadata: [
      {
        name: "keywords",
        content:
          "blockchain, DAO, decentralized finance, defi, docs, Ethereum, foundry, money streaming, NFT, open source, payments, payroll, Sablier, Safe, smart contracts, solidity, token distribution, token streaming, vesting, web3",
      },
    ],
    navbar: {
      items: [
        {
          label: "Concepts",
          position: "left",
          to: "/concepts/what-is-sablier",
          activeBasePath: "/concepts",
        },
        {
          label: "Contracts",
          position: "left",
          to: "/contracts/v2/overview",
          activeBasePath: "/contracts",
        },
        {
          label: "Apps",
          position: "left",
          to: "/apps/overview",
          activeBasePath: "/apps",
        },
        {
          label: "APIs",
          position: "left",
          to: "/api/overview",
          activeBasePath: "/api",
        },
        {
          label: "Discord",
          position: "right",
          to: "http://discord.sablier.com",
        },
        {
          label: "GitHub",
          position: "right",
          to: "https://github.com/sablier-labs",
        },
        {
          label: "Links",
          position: "right",
          to: "https://linktr.ee/SablierLabs",
        },
      ],
      logo: {
        alt: "Sablier Hourglass",
        height: "20",
        src: "img/icon.svg",
        width: "20",
      },
      title: "Sablier Docs",
    },
    prism: {
      additionalLanguages: ["solidity"],
      darkTheme: prismThemes.palenight,
      theme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
