import type { Options as ClientRedirectsOptions } from "@docusaurus/plugin-client-redirects";
import type { Options as VercelAnalyticsOptions } from "@docusaurus/plugin-vercel-analytics";
import { type DocusaurusConfig, type PluginOptions } from "@docusaurus/types";
import type { ConfigOptions, GraphQLMarkdownCliOptions, LoaderOption } from "@graphql-markdown/types";
import { createRedirects, redirects } from "./redirects";

const clientRedirects: [string, ClientRedirectsOptions] = [
  "@docusaurus/plugin-client-redirects",
  {
    createRedirects,
    id: "default",
    redirects: redirects,
  },
];

type GraphQLMarkdownOptions = GraphQLMarkdownCliOptions & Partial<PluginOptions>;

const graphqlMarkdown: [string, GraphQLMarkdownOptions] = [
  "@graphql-markdown/docusaurus",
  {
    baseURL: ".",
    loaders: {
      UrlLoader: {
        module: "@graphql-tools/url-loader",
        options: {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
          },
        },
      },
    } as LoaderOption,
    pretty: true,
    rootPath: "./schema",
    schema: "https://indexer.hyperindex.xyz/3b4ea6b/v1/graphql",
  } satisfies ConfigOptions,
];

const vercelAnalytics: [string, VercelAnalyticsOptions] = [
  "vercel-analytics",
  {
    mode: "auto",
  },
];

export const plugins: DocusaurusConfig["plugins"] = [clientRedirects, graphqlMarkdown, vercelAnalytics];
