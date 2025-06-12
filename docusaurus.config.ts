import { themes as prismThemes } from "prism-react-renderer";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { createRedirects, redirects } from "./src/redirects";

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
          editUrl: "https://github.com/sablier-labs/docs/blob/main/",
          rehypePlugins: [rehypeKatex],
          remarkPlugins: [remarkGfm, remarkMath],
          routeBasePath: "/", // Serve the docs at the site's root
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
        id: "default",
        redirects: redirects,
        createRedirects,
      },
    ],
    [
      "vercel-analytics",
      {
        mode: "auto",
      },
    ],
  ],
  scripts: [
    {
      async: false,
      src: "/js/crisp-chat.js",
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
  themes: ["docusaurus-theme-github-codeblock", "@docusaurus/theme-mermaid"],
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
              label: "Lockup Contracts",
              href: "https://github.com/sablier-labs/lockup",
            },
            {
              label: "Lockup Integration Template",
              href: "https://github.com/sablier-labs/lockup-integration-template",
            },
            {
              label: "Flow Contracts",
              href: "https://github.com/sablier-labs/flow",
            },
            {
              label: "Flow Integration Template",
              href: "https://github.com/sablier-labs/flow-integration-template",
            },
            {
              label: "Indexers",
              href: "https://github.com/sablier-labs/indexers",
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
          label: "Guides",
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
