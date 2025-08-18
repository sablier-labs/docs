import type { Options as ClientRedirectsOptions } from "@docusaurus/plugin-client-redirects";
import type { Options as VercelAnalyticsOptions } from "@docusaurus/plugin-vercel-analytics";
import type { DocusaurusConfig, PluginOptions } from "@docusaurus/types";
import type { ConfigOptions, GraphQLMarkdownCliOptions, LoaderOption } from "@graphql-markdown/types";
import { createRedirects, redirects } from "./redirects";

/* -------------------------------------------------------------------------- */
/*                              Client Redirects                              */
/* -------------------------------------------------------------------------- */

const clientRedirects: [string, ClientRedirectsOptions] = [
  "@docusaurus/plugin-client-redirects",
  {
    createRedirects,
    id: "default",
    redirects: redirects,
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
    printTypeOptions: {
      hierarchy: "entity",
      relatedTypeSection: false,
    },
    rootPath: ".",
    schema: "https://api.studio.thegraph.com/query/112500/sablier-flow-experimental/version/latest",
  } satisfies ConfigOptions,
];

/* -------------------------------------------------------------------------- */
/*                              VERCEL ANALYTICS                              */
/* -------------------------------------------------------------------------- */

const vercelAnalytics: [string, VercelAnalyticsOptions] = [
  "vercel-analytics",
  {
    mode: "auto",
  },
];

export const plugins: DocusaurusConfig["plugins"] = [clientRedirects, graphqlMarkdown, vercelAnalytics];
