import type * as Preset from "@docusaurus/preset-classic";
import { themes as prismThemes } from "prism-react-renderer";

/* -------------------------------------------------------------------------- */
/*                                   FOOTER                                   */
/* -------------------------------------------------------------------------- */

const footer: Preset.ThemeConfig["footer"] = {
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
};

/* -------------------------------------------------------------------------- */
/*                                   NAVBAR                                   */
/* -------------------------------------------------------------------------- */

const navbar: Preset.ThemeConfig["navbar"] = {
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
      activeBasePath: "/api",
      label: "APIs",
      position: "left",
      to: "/api/overview",
    },
    {
      activeBasePath: "/reference",
      label: "Reference",
      position: "left",
      to: "/reference/overview",
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
};

/* -------------------------------------------------------------------------- */
/*                                   EXPORT                                   */
/* -------------------------------------------------------------------------- */

export const themeConfig: Preset.ThemeConfig = {
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
  footer,
  image: "img/open-graph.png",
  mermaid: {
    theme: { dark: "dark", light: "neutral" },
  },
  metadata: [
    {
      content:
        "blockchain, dao, decentralized finance, defi, docs, ethereum, evm, foundry, money streaming, nft, open source, payments, payroll, Sablier, Safe, smart contracts, solidity, token distribution, token streaming, vesting, web3",
      name: "keywords",
    },
  ],
  navbar,
  prism: {
    additionalLanguages: ["solidity"],
    darkTheme: prismThemes.palenight,
    theme: prismThemes.github,
  },
};
