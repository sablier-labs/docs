import { type PluginOptions } from "@docusaurus/plugin-client-redirects";

export const redirects: PluginOptions["redirects"] = [
  /* -------------------------------------------------------------------------- */
  /*                                  AIRDROPS                                  */
  /* -------------------------------------------------------------------------- */
  {
    from: "/concepts/merkle-airdrops",
    to: "/concepts/airdrops",
  },
  /* -------------------------------------------------------------------------- */
  /*                                     API                                    */
  /* -------------------------------------------------------------------------- */
  {
    from: "/api",
    to: "/api/overview",
  },
  {
    from: "/api/airdrops/the-graph",
    to: "/api/overview",
  },
  {
    from: "/api/indexers/protocol",
    to: "/api/overview",
  },
  {
    from: "/api/lockup/the-graph",
    to: "/api/overview",
  },
  {
    from: "/api/merkle-api/intro",
    to: "/api/airdrops/merkle-api/overview",
  },
  {
    from: "/api/subgraphs/endpoints",
    to: "/api/lockup/indexers",
  },
  {
    from: "/api/subgraphs/merkle",
    to: "/api/overview",
  },
  {
    from: "/api/subgraphs/overview",
    to: "/api/overview",
  },
  {
    from: "/api/subgraphs/protocol",
    to: "/api/overview",
  },
  /* -------------------------------------------------------------------------- */
  /*                                    APPS                                    */
  /* -------------------------------------------------------------------------- */
  {
    from: "/apps",
    to: "/apps/features/overview",
  },
  {
    from: "/apps/csv-support",
    to: "/apps/guides/csv-support",
  },
  {
    from: "/apps/features",
    to: "/apps/features/vesting",
  },
  {
    from: "/apps/features/airstreams",
    to: "/apps/features/airdrops",
  },
  {
    from: "/apps/features/general",
    to: "/apps/features/overview",
  },
  {
    from: "/apps/features/streams",
    to: "/apps/features/vesting",
  },
  {
    from: "/apps/overview",
    to: "/apps/features/overview",
  },
  {
    from: "/apps/support/how-to",
    to: "/support/how-to",
  },
  {
    from: "/apps/url-schemes",
    to: "/apps/guides/url-schemes",
  },
  /* -------------------------------------------------------------------------- */
  /*                                  INDEXERS                                  */
  /* -------------------------------------------------------------------------- */
  {
    from: "/api/airdrops/endpoints",
    to: "/api/airdrops/indexers",
  },
  {
    from: "/api/flow/endpoints",
    to: "/api/flow/indexers",
  },
  {
    from: "/api/lockup/endpoints",
    to: "/api/lockup/indexers",
  },
  /* -------------------------------------------------------------------------- */
  /*                          LOCKUP: 2024 and Earlier                          */
  /* -------------------------------------------------------------------------- */
  {
    from: "/concepts/protocol/fees",
    to: "/concepts/fees",
  },
  {
    from: "/concepts/protocol/nft",
    to: "/concepts/nft",
  },
  {
    from: "/concepts/protocol/stream-types",
    to: "/concepts/lockup/stream-shapes",
  },
  {
    from: "/concepts/protocol/streaming",
    to: "/concepts/streaming",
  },
  {
    from: "/concepts/protocol/transferability",
    to: "/concepts/transferability",
  },
  {
    from: "/concepts/sablier-protocol",
    to: "/concepts/what-is-sablier",
  },
  {
    from: "/contracts/v2/deployments/v2.0",
    to: "/guides/lockup/previous-deployments/v1.0",
  },
  {
    from: "/contracts/v2/deployments/v2.1",
    to: "/guides/lockup/previous-deployments/v1.1",
  },
  {
    from: "/contracts/v2/guides",
    to: "/guides/lockup/overview",
  },
  {
    from: "/contracts/v2/reference/overview",
    to: "/reference/overview",
  },
  {
    from: "/contracts/v2/security",
    to: "/concepts/security",
  },
  {
    from: "/csv",
    to: "/apps/guides/csv-support",
  },
  /* -------------------------------------------------------------------------- */
  /*                                   LEGACY                                   */
  /* -------------------------------------------------------------------------- */
  {
    from: "/protocol/faq/basics",
    to: "/concepts/what-is-sablier",
  },
  {
    from: "/protocol/guides/chains",
    to: "/guides/legacy/overview",
  },
  {
    from: "/protocol/guides/getting-started",
    to: "/guides/legacy/overview",
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
    from: "/contracts/v1/deployments",
    to: "/guides/legacy/deployments",
  },
  {
    from: "/contracts/v1/guides/getting-started",
    to: "/guides/legacy/overview",
  },
  {
    from: "/contracts/v1/overview",
    to: "/guides/legacy/overview",
  },
];

export function createRedirects(existingPath: string) {
  const redirects = [];
  // Redirect /concepts/protocol/** to /concepts/lockup/**
  if (existingPath.startsWith("/concepts/lockup/")) {
    redirects.push(existingPath.replace("/concepts/lockup/", "/concepts/protocol/"));
  }
  // Redirect /contracts/v1/guides/** to /guides/legacy/**
  else if (existingPath.startsWith("/guides/legacy/")) {
    redirects.push(existingPath.replace("/guides/legacy/", "/contracts/v1/guides/"));
  }
  // Redirect /contracts/v2/reference/** to /reference/lockup/**
  else if (existingPath.startsWith("/reference/lockup/")) {
    redirects.push(existingPath.replace("/reference/lockup/", "/contracts/v2/reference/"));
  }
  // Redirect /contracts/v1/** to /reference/legacy/**
  else if (existingPath.startsWith("/reference/legacy/")) {
    redirects.push(existingPath.replace("/reference/legacy/", "/contracts/v1/"));
  }
  // Redirect /contracts/v2/guides/** to /guides/lockup/examples/**
  else if (existingPath.startsWith("/guides/lockup/examples/")) {
    redirects.push(existingPath.replace("/guides/lockup/examples/", "/contracts/v2/guides/"));
  }

  return redirects;
}
