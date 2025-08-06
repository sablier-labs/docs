import "@docsearch/css";
import { DocSearch } from "@docsearch/react";
import { useColorMode } from "@docusaurus/theme-common";
import React from "react";

export default function SearchBarWrapper(props) {
  const { colorMode } = useColorMode();

  return (
    <DocSearch
      appId="9L7N2RKHWE"
      indexName="sablierdocs"
      apiKey="4fc960889335dad720b725a02667d46a"
      askAi="vZ3Iz7SRYcv1"
      insights={true}
      placeholder="Search docs..."
      translations={{
        button: {
          buttonText: "Search",
          buttonAriaLabel: "Search",
        },
        modal: {
          searchBox: {
            resetButtonTitle: "Clear the query",
            resetButtonAriaLabel: "Clear the query",
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "Cancel",
          },
          startScreen: {
            recentSearchesTitle: "Recent",
            noRecentSearchesText: "No recent searches",
            saveRecentSearchButtonTitle: "Save this search",
            removeRecentSearchButtonTitle: "Remove this search from history",
            favoriteSearchesTitle: "Favorite",
            removeFavoriteSearchButtonTitle: "Remove this search from favorites",
          },
          errorScreen: {
            titleText: "Unable to fetch results",
            helpText: "You might want to check your network connection.",
          },
          footer: {
            selectText: "to select",
            selectKeyAriaLabel: "Enter key",
            navigateText: "to navigate",
            navigateUpKeyAriaLabel: "Arrow up",
            navigateDownKeyAriaLabel: "Arrow down",
            closeText: "to close",
            closeKeyAriaLabel: "Escape key",
            searchByText: "Search by",
          },
          noResultsScreen: {
            noResultsText: "No results for",
            suggestedQueryText: "Try searching for",
            reportMissingResultsText: "Believe this query should return results?",
            reportMissingResultsLinkText: "Let us know.",
          },
        },
      }}
    />
  );
}
