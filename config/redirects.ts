import type { RedirectOption } from "@docusaurus/plugin-client-redirects/lib/options";

function redirect(from: string, to: string): RedirectOption {
  return { from, to };
}

/**
 * The slugs and IDs used in the Docusaurus site have evolved over time.
 * This file contains the redirects for the old slugs and IDs to the new ones.
 */
export const redirects: RedirectOption[] = [
  /* -------------------------------------------------------------------------- */
  /*                                  AIRDROPS                                  */
  /* -------------------------------------------------------------------------- */
  redirect("/concepts/merkle-airdrops", "/concepts/airdrops"),
  /* -------------------------------------------------------------------------- */
  /*                                    APIs                                    */
  /* -------------------------------------------------------------------------- */
  redirect("/api/airdrops/endpoints", "/api/airdrops/indexers"),
  redirect("/api/flow/endpoints", "/api/flow/indexers"),
  redirect("/api/lockup/endpoints", "/api/lockup/indexers"),
  /* -------------------------------------------------------------------------- */
  /*                                    APPS                                    */
  /* -------------------------------------------------------------------------- */
  redirect("/apps", "/apps/features/overview"),
  redirect("/apps/csv-support", "/apps/guides/csv-support"),
  redirect("/apps/features", "/apps/features/vesting"),
  redirect("/apps/features/airstreams", "/apps/features/airdrops"),
  redirect("/apps/features/general", "/apps/features/overview"),
  redirect("/apps/features/streams", "/apps/features/vesting"),
  redirect("/apps/overview", "/apps/features/overview"),
  redirect("/apps/support/how-to", "/support/how-to"),
  redirect("/apps/url-schemes", "/apps/guides/url-schemes"),
  /* -------------------------------------------------------------------------- */
  /*                              LEGACY: 2019-2021                             */
  /* -------------------------------------------------------------------------- */
  redirect("/protocol/faq/basics", "/concepts/what-is-sablier"),
  redirect("/protocol/guides/chains", "/guides/legacy/overview"),
  redirect("/protocol/guides/getting-started", "/guides/legacy/overview"),
  redirect("/protocol/introduction", "/concepts/what-is-sablier"),
  redirect("/protocol/subgraphs/endpoints", "/api/overview"),
  redirect("/contracts/v1/deployments", "/guides/legacy/deployments"),
  redirect("/contracts/v1/guides/getting-started", "/guides/legacy/overview"),
  redirect("/contracts/v1/overview", "/guides/legacy/overview"),
  /* -------------------------------------------------------------------------- */
  /*                          LOCKUP: 2024 and Earlier                          */
  /* -------------------------------------------------------------------------- */
  redirect("/concepts/protocol/fees", "/concepts/fees"),
  redirect("/concepts/protocol/nft", "/concepts/nft"),
  redirect("/concepts/protocol/stream-types", "/concepts/lockup/stream-shapes"),
  redirect("/concepts/protocol/streaming", "/concepts/streaming"),
  redirect("/concepts/protocol/transferability", "/concepts/transferability"),
  redirect("/concepts/sablier-protocol", "/concepts/what-is-sablier"),
  redirect("/contracts/v2/deployments/v2.0", "/guides/lockup/previous-deployments/v1.0"),
  redirect("/contracts/v2/deployments/v2.1", "/guides/lockup/previous-deployments/v1.1"),
  redirect("/contracts/v2/guides", "/guides/lockup/overview"),
  redirect("/contracts/v2/reference/overview", "/reference/overview"),
  redirect("/contracts/v2/security", "/concepts/security"),
  redirect("/csv", "/apps/guides/csv-support"),
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
