/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: "/",
  favicon: "img/favicon.ico",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  organizationName: "sablierhq",
  projectName: "sablier-docs",
  tagline: "Documentation and guides for Sablier",
  title: "Sablier Docs",
  url: "https://docs.sablier.com",
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          editUrl: "https://github.com/sablierhq/docs/tree/main/",
          sidebarPath: require.resolve("./sidebars.js"),

          // Serve the docs at the site's root
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "KF9W3YD3YG",
        apiKey: "7eab349cad720dd939e06808c4b2d6e9",
        indexName: "sablier-docs",
      },
      colorMode: {
        // "light" | "dark"
        defaultMode: "dark",

        // Support multiple color modes.
        disableSwitch: false,

        // Whether we should use the `prefers-color-scheme media-query` using user system preferences, instead of the
        // hardcoded `defaultMode`.
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
                href: "https://github.com/sablierhq/branding",
              },
            ],
          },
          {
            title: "Developers",
            items: [
              {
                label: "V2 Core",
                href: "https://github.com/sablierhq/v2-core",
              },
              {
                label: "V2 Periphery",
                href: "https://github.com/sablierhq/v2-periphery",
              },
              {
                label: "Subgraph",
                href: "https://github.com/sablierhq/subgraph",
              },
            ],
          },
        ],
        style: "dark",
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
            to: "/contracts",
          },
          {
            label: "FAQ",
            position: "left",
            to: "/faq/basics",
          },
          {
            label: "Discord",
            position: "right",
            to: "https://discord.gg/bSwRCwWRsT",
          },
          {
            label: "GitHub",
            position: "right",
            to: "https://github.com/sablierhq",
          },
        ],
        logo: {
          alt: "Sablier Hourglass",
          src: "img/icon.svg",
        },
        title: "Sablier Docs",
      },
      // plugins: [
      //   [
      //     "@docusaurus/plugin-content-docs",
      //     {
      //       id: "concepts",
      //       path: "docs/concepts",
      //       routeBasePath: "concepts",
      //     },
      //   ],
      //   [
      //     "@docusaurus/plugin-content-docs",
      //     {
      //       id: "faq",
      //       path: "docs/faq",
      //       routeBasePath: "faq",
      //     },
      //   ],
      // ],
      prism: {
        additionalLanguages: ["solidity"],
        darkTheme: require("prism-react-renderer/themes/dracula"),
        theme: require("prism-react-renderer/themes/github"),
      },
    }),
};

module.exports = config;
