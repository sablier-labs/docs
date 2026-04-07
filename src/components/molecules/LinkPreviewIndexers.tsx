import type { Indexer } from "@sablier/indexers";
import { capitalize } from "lodash";
import { Links } from "../../constants";
import LinkPreview from "./LinkPreview";

type LinkPreviewIndexersProps =
  | {
      vendor: Indexer.Vendor;
      indexer: Indexer.IndexerKey;
    }
  | {
      vendor?: undefined;
      indexer?: undefined;
    };

export default function LinkPreviewIndexers({ vendor, indexer }: LinkPreviewIndexersProps = {}) {
  let href: string;
  let subtitle: string;
  let title: string;

  if (!vendor || !indexer) {
    href = Links.GitHub.INDEXERS;
    subtitle = "Data indexers for the Sablier Protocol";
    title = "Sablier Indexers";
  } else {
    href = `${Links.GitHub.INDEXERS}/blob/main/${vendor}/${indexer}`;
    subtitle = `${vendor}/${indexer}`;
    title = `${capitalize(vendor)} indexer for Sablier ${capitalize(indexer)}`;
  }

  return <LinkPreview href={href} icon="github" subtitle={subtitle} title={title} />;
}
