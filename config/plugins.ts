import type { Options as ClientRedirectsOptions } from "@docusaurus/plugin-client-redirects";
import type { Options as VercelAnalyticsOptions } from "@docusaurus/plugin-vercel-analytics";
import { type DocusaurusConfig } from "@docusaurus/types";
import { createRedirects, redirects } from "./redirects";

const clientRedirects: [string, ClientRedirectsOptions] = [
  "@docusaurus/plugin-client-redirects",
  {
    createRedirects,
    id: "default",
    redirects: redirects,
  },
];

const vercelAnalytics: [string, VercelAnalyticsOptions] = [
  "vercel-analytics",
  {
    mode: "auto",
  },
];

export const plugins: DocusaurusConfig["plugins"] = [clientRedirects, vercelAnalytics];
