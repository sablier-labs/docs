import type { Options as ClientRedirectsOptions } from "@docusaurus/plugin-client-redirects";
import type { Options as VercelAnalyticsOptions } from "@docusaurus/plugin-vercel-analytics";
import type { DocusaurusConfig, PluginOptions } from "@docusaurus/types";
import type { ConfigOptions, GraphQLMarkdownCliOptions, LoaderOption } from "@graphql-markdown/types";
import type { PluginOptions as LlmPluginOptions } from "docusaurus-plugin-llms";
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
/*                                 LLM PLUGIN                                 */
/* -------------------------------------------------------------------------- */

/**
 * The plugin follows llmstxt.org standards and generates the following files during the build process:
 * - llms.txt: Contains links to the markdown files of all sections.
 * - llms-airdrops.txt: Contains full content relevant to the Merkle Airdrops protocol.
 * - llms-flow.txt: Contains full content relevant to the Flow protocol.
 * - llms-lockup.txt: Contains full content relevant to the Lockup protocol.
 * - llms-training-data.txt: Contains full content of all markdown files.
 *
 * @see https://llmstxt.org
 * @see https://github.com/rachfop/docusaurus-plugin-llms
 */
const llmPlugin: [string, LlmPluginOptions & { [key: string]: unknown }] = [
  "docusaurus-plugin-llms",
  {
    // Protocol specific LLM files.
    customLLMFiles: [
      {
        description: "Merkle Airdrops is useful to distribute tokens to a large number of users efficiently.",
        filename: "llms-airdrops.txt",
        // Create a single markdown file with the full content of the section.
        fullContent: true,
        includePatterns: [
          "**/airdrops/**/*.md",
          "**/airdrops/**/*.mdx",
          "apps/features/01-airdrops.mdx",
          "apps/guides/*.md",
          "apps/guides/*.mdx",
          "concepts/05-merkle-airdrops.mdx",
          "support/*.md",
          "support/*.mdx",
        ],
        title: "Sablier Merkle Airdrops Documentation",
      },
      {
        description: "Sablier Flow is useful for payroll, grants, insurance premiums, loans interest and ESOPs.",
        filename: "llms-flow.txt",
        // Create a single markdown file with the full content of the section.
        fullContent: true,
        includePatterns: [
          "**/flow/**/*.md",
          "**/flow/**/*.mdx",
          "apps/features/03-payments.mdx",
          "apps/guides/*.md",
          "apps/guides/*.mdx",
          "support/*.md",
          "support/*.mdx",
        ],
        title: "Sablier Flow Documentation",
      },
      {
        description: "Sablier Lockup is useful for token vesting and airdrops.",
        filename: "llms-lockup.txt",
        // Create a single markdown file with the full content of the section.
        fullContent: true,
        includePatterns: [
          "**/lockup/**/*.md",
          "**/lockup/**/*.mdx",
          "apps/features/02-vesting.mdx",
          "apps/guides/*.md",
          "apps/guides/*.mdx",
          "support/*.md",
          "support/*.mdx",
        ],
        title: "Sablier Lockup Documentation",
      },
      {
        // Useful to train or fine-tune an LLM on Sablier docs.
        filename: "llms-training-data.txt",
        fullContent: true,
        includePatterns: ["**/*.md", "**/*.mdx"],
      },
    ],
    docsDir: "docs",
    // Remove imports from mdx files.
    excludeImports: true,
    generateLLMsFullTxt: false,
    // Generate index file linking to markdown files.
    generateLLMsTxt: true,
    // Generates individual markdown files and adds them to llms.txt.
    generateMarkdownFiles: true,
    // Ignore snippet files since they're already included via imports.
    ignoreFiles: ["snippets/**/*"],
    // Section ordering in the index file.
    includeOrder: ["concepts/*", "guides/*", "reference/*", "api/*", "apps/*", "support/*"],
    // Remove duplicate content matching headings.
    removeDuplicateHeadings: true,
    rootContent: `Sablier docs is optimized for LLMs and AI assistants. Navigation tips:
      - For subgraph APIs or Merkle APIs, use the "API" section.
      - For deployment addresses and examples on using the contracts, use the "Guides" section.
      - For contracts, use the "References" section.
      - For FAQs, use the "Support" section.
      `,
    title: "Sablier Docs",
  },
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

export const plugins: DocusaurusConfig["plugins"] = [clientRedirects, graphqlMarkdown, llmPlugin, vercelAnalytics];
