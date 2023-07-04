const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: "/",
  favicon: "img/favicon.ico",
  markdown: {
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          editUrl: "https://github.com/sablier-labs/docs/tree/main/",
          rehypePlugins: [katex],
          routeBasePath: "/", // Serve the docs at the site's root
          remarkPlugins: [math],
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: [require.resolve("./src/css/sablier.css"), require.resolve("./src/css/custom.css")],
        },
      },
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
            to: "/contracts/v1/guides/chains",
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
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "K1JLKUW9ML",
        apiKey: "7eab349cad720dd939e06808c4b2d6e9",
        indexName: "sablier-docs",
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
      mermaid: {
        theme: { light: "neutral", dark: "dark" },
      },
      navbar: {
        items: [
          {
            label: "Concepts",
            position: "left",
            to: "/concepts/what-is-sablier",
          },
          {
            label: "Contracts",
            position: "left",
            to: "/contracts/v2/overview",
          },
          {
            label: "APIs",
            position: "left",
            to: "/api/subgraphs/overview",
          },
          {
            label: "Links",
            position: "right",
            to: "https://linktr.ee/SablierLabs",
          },
          {
            label: "GitHub",
            position: "right",
            to: "https://github.com/sablier-labs",
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
        darkTheme: require("prism-react-renderer/themes/palenight"),
        theme: require("prism-react-renderer/themes/github"),
      },
    }),
};

module.exports = config;
