import { Algolia } from "../constants";
import "@docsearch/css";
import { DocSearch } from "@docsearch/react";

export default function SearchBarWrapper() {
  return (
    <DocSearch
      appId={Algolia.APP_ID}
      apiKey={Algolia.SEARCH_API_KEY}
      askAi={{
        apiKey: Algolia.SEARCH_API_KEY,
        appId: Algolia.APP_ID,
        assistantId: Algolia.ASSISTANT_ID,
        indexName: Algolia.MARKDOWN_INDEX_NAME,
      }}
      indexName={Algolia.INDEX_NAME}
    />
  );
}
