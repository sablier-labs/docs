import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
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
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        createRedirects,
        id: "default",
        redirects: redirects,
      },
    ],
    [
      "vercel-analytics",
      {
        mode: "auto",
      },
    ],
  ],
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
  projectName: "sablier-docs",
  scripts: [
    {
      async: false,
      src: "/js/crisp-chat.js",
    },
  ],
  staticDirectories: ["static"],
  stylesheets: [
    {
      crossorigin: "anonymous",
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      type: "text/css",
    },
  ],
  tagline: "Documentation and guides for Sablier",
  themeConfig: {
    algolia: {
      apiKey: "4fc960889335dad720b725a02667d46a",
      appId: "9L7N2RKHWE",
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
          items: [
            {
              href: "https://sablierlabs.co.uk",
              label: "About",
            },
            {
              href: "https://files.sablier.com/risk-notice.pdf",
              label: "Risk Notice",
            },
            {
              href: "https://files.sablier.com/terms-of-service.pdf",
              label: "Terms of Service",
            },
            {
              href: "https://files.sablier.com/privacy-policy.pdf",
              label: "Privacy Policy",
            },
          ],
          title: "Company",
        },
        {
          items: [
            {
              href: "https://twitter.com/Sablier",
              label: "Twitter",
            },
            {
              href: "https://discord.sablier.com",
              label: "Discord",
            },
            {
              href: "https://blog.sablier.com",
              label: "Blog",
            },
            {
              href: "https://github.com/sablier-labs/branding",
              label: "Branding",
            },
          ],
          title: "Community",
        },
        {
          items: [
            {
              href: "https://github.com/sablier-labs/lockup",
              label: "Lockup Contracts",
            },
            {
              href: "https://github.com/sablier-labs/lockup-integration-template",
              label: "Lockup Integration Template",
            },
            {
              href: "https://github.com/sablier-labs/flow",
              label: "Flow Contracts",
            },
            {
              href: "https://github.com/sablier-labs/flow-integration-template",
              label: "Flow Integration Template",
            },
            {
              href: "https://github.com/sablier-labs/indexers",
              label: "Indexers",
            },
          ],
          title: "Developers",
        },
      ],
      style: "dark",
    },
    image: "img/open-graph.png",
    mermaid: {
      theme: { dark: "dark", light: "neutral" },
    },
    metadata: [
      {
        content:
          "blockchain, DAO, decentralized finance, defi, docs, Ethereum, foundry, money streaming, NFT, open source, payments, payroll, Sablier, Safe, smart contracts, solidity, token distribution, token streaming, vesting, web3",
        name: "keywords",
      },
    ],
    navbar: {
      items: [
        {
          activeBasePath: "/concepts",
          label: "Concepts",
          position: "left",
          to: "/concepts/what-is-sablier",
        },
        {
          activeBasePath: "/guides",
          label: "Guides",
          position: "left",
          to: "/guides/lockup/overview",
        },
        {
          activeBasePath: "/reference",
          label: "References",
          position: "left",
          to: "/reference/overview",
        },
        {
          activeBasePath: "/api",
          label: "APIs",
          position: "left",
          to: "/api/overview",
        },
        {
          activeBasePath: "/apps",
          label: "Apps",
          position: "left",
          to: "/apps/features/overview",
        },

        {
          activeBasePath: "/support",
          label: "Support",
          position: "left",
          to: "/support/faq",
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
  themes: ["docusaurus-theme-github-codeblock", "@docusaurus/theme-mermaid"],
  title: "Sablier Docs | Sablier",
  url: "https://docs.sablier.com",
};

export default config;
