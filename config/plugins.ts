import type { Options as ClientRedirectsOptions } from "@docusaurus/plugin-client-redirects";
import type { Options as VercelAnalyticsOptions } from "@docusaurus/plugin-vercel-analytics";
import type { DocusaurusConfig, PluginOptions } from "@docusaurus/types";
import type {
  ConfigOptions,
  GraphQLMarkdownCliOptions,
  LoaderOption,
} from "@graphql-markdown/types";
import type { LlmfoodPluginOptions } from "llmfood/docusaurus";
import llmfoodPlugin from "llmfood/docusaurus";

import { BENCHMARKS_COMMIT, GITHUB_ORG } from "../src/constants";
import { createRedirects, redirects } from "./redirects";

/* -------------------------------------------------------------------------- */
/*                              Client Redirects                              */
/* -------------------------------------------------------------------------- */

const clientRedirects: [string, ClientRedirectsOptions] = [
  "@docusaurus/plugin-client-redirects",
  {
    createRedirects,
    id: "default",
    redirects,
  },
];

/* -------------------------------------------------------------------------- */
/*                              GraphQL Markdown                              */
/* -------------------------------------------------------------------------- */
type GraphQLMarkdownOptions = GraphQLMarkdownCliOptions & Partial<PluginOptions>;

const graphqlMarkdown: [string, GraphQLMarkdownOptions] = [
  "@graphql-markdown/docusaurus",
  /**
   * Some settings will be overridden by the CLI.
   * @see https://graphql-markdown.dev/docs/settings
   */
  {
    baseURL: "./docs/api/flow/the-graph",
    homepage: "static/graphql-overview.md",
    loaders: {
      UrlLoader: {
        module: "@graphql-tools/url-loader",
      },
    } as LoaderOption,
    metatags: [{ content: "noindex", name: "robots" }, { charset: "utf-8" }],
    pretty: true,
    rootPath: ".",
    schema: "https://api.studio.thegraph.com/query/112500/sablier-flow-experimental/version/latest",
    printTypeOptions: {
      hierarchy: "entity",
      relatedTypeSection: false,
    },
  } satisfies ConfigOptions,
];

/* -------------------------------------------------------------------------- */
/*                                 LLM PLUGIN                                 */
/* -------------------------------------------------------------------------- */

const BENCHMARK_CALL_PATTERN = /^getBenchmarkURL\(["'](.+?)["']\)$/;

const llmfood: [
  typeof llmfoodPlugin,
  LlmfoodPluginOptions & { resolveRemoteUrl: typeof resolveRemoteUrl },
] = [
  llmfoodPlugin,
  {
    customFiles: [
      {
        description:
          "Merkle Airdrops is useful to distribute tokens to a large number of users efficiently.",
        filename: "llms-airdrops.txt",
        title: "Sablier Merkle Airdrops Documentation",
        includePatterns: [
          /\/airdrops\//,
          /\/apps\/features\/airdrops/,
          /\/apps\/guides\//,
          /\/concepts\/airdrops/,
          /\/support\//,
        ],
      },
      {
        description:
          "Sablier Flow is useful for payroll, grants, insurance premiums, loans interest and ESOPs.",
        filename: "llms-flow.txt",
        title: "Sablier Flow Documentation",
        includePatterns: [
          /\/flow\//,
          /\/apps\/features\/payments/,
          /\/apps\/guides\//,
          /\/support\//,
        ],
      },
      {
        description: "Sablier Lockup is useful for token vesting and airdrops.",
        filename: "llms-lockup.txt",
        title: "Sablier Lockup Documentation",
        includePatterns: [
          /\/lockup\//,
          /\/apps\/features\/vesting/,
          /\/apps\/guides\//,
          /\/support\//,
        ],
      },
      {
        filename: "llms-full.txt",
        includePatterns: [/.*/],
        title: "Sablier Full Documentation",
      },
    ],
    ignorePatterns: [
      /^\/api\/.+\/graphql\/(envio|the-graph)\//,
      /^\/search$/,
      /^\/graphql-overview$/,
    ],
    resolveRemoteUrl,
    rootContent: `Sablier docs is optimized for LLMs and AI assistants. Navigation tips:
- For subgraph APIs or Merkle APIs, use the "API" section.
- For deployment addresses and examples on using the contracts, use the "Guides" section.
- For contracts, use the "References" section.
- For FAQs, use the "Support" section.`,
    sectionLabels: { api: "API" },
    sectionOrder: ["concepts", "guides", "reference", "api", "apps", "solana", "support"],
  },
];

function resolveRemoteUrl(expression: string): string | undefined {
  const match = expression.match(BENCHMARK_CALL_PATTERN);
  if (!match) {
    return undefined;
  }
  return `https://raw.githubusercontent.com/${GITHUB_ORG}/benchmarks/${BENCHMARKS_COMMIT}/${match[1]}`;
}

/* -------------------------------------------------------------------------- */
/*                              VERCEL ANALYTICS                              */
/* -------------------------------------------------------------------------- */

const vercelAnalytics: [string, VercelAnalyticsOptions] = [
  "vercel-analytics",
  {
    mode: "auto",
  },
];

export const plugins: DocusaurusConfig["plugins"] = [
  clientRedirects,
  graphqlMarkdown,
  llmfood,
  vercelAnalytics,
];
