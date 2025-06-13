import _ from "lodash";
import type { Indexer } from "@sablier/indexers";
import { Links } from "../../../constants";
import LinkPreview from "../LinkPreview";

type LinkPreviewIndexersProps =
  | {
      vendor: Indexer.Vendor;
      protocol: Indexer.Protocol;
    }
  | {
      vendor?: undefined;
      protocol?: undefined;
    };

export default function LinkPreviewIndexers({ vendor, protocol }: LinkPreviewIndexersProps = {}) {
  let href: string;
  let subtitle: string;
  let title: string;

  if (!vendor || !protocol) {
    href = Links.GitHub.INDEXERS;
    subtitle = "Data indexers for the Sablier Protocol";
    title = "Sablier Indexers";
  } else {
    href = `${Links.GitHub.INDEXERS}/blob/main/src/${vendor}/${protocol}`;
    subtitle = `src/${vendor}/${protocol}`;
    title = `${_.capitalize(vendor)} indexer for the Sablier ${_.capitalize(protocol)} protocol`;
  }

  return <LinkPreview href={href} icon="github" subtitle={subtitle} title={title} />;
}
