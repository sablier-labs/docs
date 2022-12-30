/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: "/",
  favicon: "img/favicon.ico",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  organizationName: "sablierhq",
  projectName: "sablier-docs",
  tagline: "Documentation and Guides for Sablier",
  title: "Sablier Docs",
  url: "https://docs.sablier.finance",
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          editUrl: "https://github.com/sablierhq/docs/tree/main/",
          includeCurrentVersion: true,
          path: "protocol",
          routeBasePath: "protocol/",
          sidebarPath: require.resolve("./sidebars.js"),
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
        apiKey: "02ccece2d4178d2816db18726d6d9ba8",
        indexName: "sablier",
      },
      // announcementBar: {
      //   id: 'start_time_banner',
      //   content:
				// 'Please note that a stream creation transaction MUST be processed by the blockchain before the start time of the stream, otherwise it will fail. Learn more about this <a target="_blank" rel="noopener noreferrer" href="/protocol/faq/known-issues">here</a>, or reach out on <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/bSwRCwWRsT">Discord</a>.',
      //   backgroundColor: '#E77B3B',
      //   textColor: '#fff',
      //   isCloseable: true,
      // },
      colorMode: {
        // "light" | "dark"
        defaultMode: "light",

        // Hides the switch in the navbar. Useful if you want to support a single color mode.
        disableSwitch: true,

        // Whether we should use the `prefers-color-scheme media-query` using user system preferences, instead of the
        // hardcoded `defaultMode`.
        respectPrefersColorScheme: true,
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Sablier Labs Ltd.`,
        links: [
          {
            title: "Company",
            items: [
              {
                label: "About",
                href: "https://salbier.finance",
              },
              {
                label: "Branding",
                href: "https://github.com/sablierhq/branding",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/sablierhq",
              },
              {
                label: "Discord",
                href: "https://discord.gg/bSwRCwWRsT",
              },
              {
                label: "Blog",
                href: "https://medium.com/sablier",
              },
            ],
          },
          {
            title: "Developers",
            items: [
              {
                label: "Core Protocol",
                href: "https://github.com/sablierhq/v2-core",
              },
              {
                label: "Periphery Contracts",
                href: "https://github.com/sablierhq/v2-periphery",
              },
              {
                label: "Docs",
                href: "https://github.com/sablierhq/docs",
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
            href: "/protocol/faq/basics",
            label: "FAQ",
            position: "left",
          },
          {
            href: "/protocol/guides/getting-started",
            label: "Guides",
            position: "left",
          },
          {
            href: "/protocol/technical-reference/streams",
            label: "Technical Reference",
            position: "left",
          },
          {
            href: "/protocol/subgraph/endpoints",
            label: "Subgraph",
            position: "left",
          },
          {
            href: "https://discord.gg/bSwRCwWRsT",
            label: "Discord",
            position: "right",
          },
          {
            href: "https://github.com/sablierhq",
            label: "GitHub",
            position: "right",
          },
        ],
        logo: {
          alt: "Sablier Logo",
          src: "img/logo.svg",
        },
        title: "Sablier Docs",
      },
      prism: {
        additionalLanguages: ["solidity"],
        darkTheme: require("prism-react-renderer/themes/dracula"),
        theme: require("prism-react-renderer/themes/github"),
      },
    }),
};

module.exports = config;
