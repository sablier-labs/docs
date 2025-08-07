import { AlgoliaSearch } from "../constants";
import "@docsearch/css";
import { DocSearch } from "@docsearch/react";
import React from "react";

export default function SearchBarWrapper() {
  return (
    <DocSearch
      appId={AlgoliaSearch.APP_ID}
      apiKey={AlgoliaSearch.SEARCH_API_KEY}
      askAi={AlgoliaSearch.ASSISTANT_ID}
      indexName={AlgoliaSearch.INDEX_NAME}
    />
  );
}
