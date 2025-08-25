import { Algolia } from "../src/constants";

export const headTags = [
  {
    attributes: {
      href: "https://cdn.jsdelivr.net/npm/@docsearch/css@beta",
      rel: "stylesheet",
    },
    tagName: "link",
  },
  {
    attributes: {
      crossorigin: "true",
      href: `https://${Algolia.APP_ID}-dsn.algolia.net`,
      rel: "preconnect",
    },
    tagName: "link",
  },
];
