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
  title: "Sablier Docs | Sablier",
  url: "https://docs.sablier.com",
  presets: [
    [
      "classic",
      {
        docs: {
          editUrl: "https://github.com/sablier-labs/docs/tree/main/",
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
      {
        redirects: [
          // V1 redirects
          {
            from: "/protocol/faq/basics",
            to: "/concepts/what-is-sablier",
          },
          {
            from: "/protocol/guides/getting-started",
            to: "/reference/lockup/v1/guides/getting-started",
          },
          {
            from: "/protocol/guides/chains",
            to: "/guides/lockup/versions/v1",
          },
          {
            from: "/protocol/introduction",
            to: "/concepts/what-is-sablier",
          },
          {
            from: "/protocol/subgraphs/endpoints",
            to: "/api/overview",
          },
          {
            from: "/api/subgraphs/overview",
            to: "/api/overview",
          },
          {
            from: "/api",
            to: "/api/overview",
          },
          {
            from: "/apps/features",
            to: "/apps/features/vesting",
          },
          {
            from: "/apps",
            to: "/apps/features/overview",
          },
          {
            from: "/apps/features/general",
            to: "/apps/features/overview",
          },
          {
            from: "/apps/overview",
            to: "/apps/features/overview",
          },
          {
            from: "/apps/features/airstreams",
            to: "/apps/features/drops",
          },
          {
            from: "/apps/url-schemes",
            to: "/apps/guides/url-schemes",
          },
          {
            from: "/apps/guides/how-to",
            to: "/support/how-to",
          },
          {
            from: "/apps/csv-support",
            to: "/apps/guides/csv-support",
          },
          {
            from: "/csv",
            to: "/apps/guides/csv-support",
          },
          // Lockup redirects from old docs to new docs
          {
            from: "/concepts/sablier-protocol",
            to: "/concepts/what-is-sablier",
          },
          {
            from: "/concepts/protocol/streaming",
            to: "/concepts/streaming",
          },
          {
            from: "/concepts/protocol/nft",
            to: "/concepts/nft",
          },
          {
            from: "/concepts/protocol/fees",
            to: "/concepts/fees",
          },
          {
            from: "/concepts/protocol/transferability",
            to: "/concepts/transferability",
          },
          {
            from: "/contracts/v2/security",
            to: "/concepts/security",
          },
          {
            from: "/contracts/v2/deployments/v2.1",
            to: "/guides/lockup/versions/v2.1",
          },
          {
            from: "/contracts/v2/deployments/v2.0",
            to: "/guides/lockup/versions/v2.0",
          },
          {
            from: "/contracts/v1/deployments",
            to: "/guides/lockup/versions/v1",
          },
          {
            from: "/apps/features/streams",
            to: "/apps/features/vesting",
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes("/community")) {
            return [
              existingPath.replace("/concepts/protocol", "/concepts/lockup"),
              existingPath.replace("/contracts/v2", "/guides/lockup"),
              existingPath.replace("/contracts/v1", "/reference/lockup/v1"),
              existingPath.replace("/contracts/v2/reference", "/reference/lockup"),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
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
              href: "https://files.sablier.com/risk-notice.pdf",
            },
            {
              label: "Terms of Service",
              href: "https://files.sablier.com/terms-of-service.pdf",
            },
            {
              label: "Privacy Policy",
              href: "https://files.sablier.com/privacy-policy.pdf",
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
              href: "https://discord.sablier.com",
            },
            {
              label: "Blog",
              href: "https://blog.sablier.com",
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
              label: "Lockup Core",
              href: "https://github.com/sablier-labs/v2-core",
            },
            {
              label: "Lockup Periphery",
              href: "https://github.com/sablier-labs/v2-periphery",
            },
            {
              label: "Lockup Integration Template",
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
          label: "Developer Guides",
          position: "left",
          to: "/guides/lockup/overview",
          activeBasePath: "/guides",
        },
        {
          label: "References",
          position: "left",
          to: "/reference/overview",
          activeBasePath: "/reference",
        },
        {
          label: "APIs",
          position: "left",
          to: "/api/overview",
          activeBasePath: "/api",
        },
        {
          label: "Apps",
          position: "left",
          to: "/apps/features/overview",
          activeBasePath: "/apps",
        },

        {
          label: "Support",
          position: "left",
          to: "/support/faq",
          activeBasePath: "/support",
        },
        {
          label: "Discord",
          position: "right",
          to: "https://discord.sablier.com",
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
