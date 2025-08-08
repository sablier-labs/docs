import { Algolia } from "../constants";
import "@docsearch/css";
import { DocSearch } from "@docsearch/react";

export default function SearchBarWrapper() {
	return (
		<DocSearch
			appId={Algolia.APP_ID}
			apiKey={Algolia.SEARCH_API_KEY}
			askAi={Algolia.ASSISTANT_ID}
			indexName={Algolia.INDEX_NAME}
		/>
	);
}
