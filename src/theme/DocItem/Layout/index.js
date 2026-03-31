/** biome-ignore-all lint/style/useFilenamingConvention: this is a convention for Docusaurus */

import CopyForLlm from "@site/src/components/molecules/CopyForLlm";
import Layout from "@theme-original/DocItem/Layout";

export default function LayoutWrapper(props) {
  return (
    <>
      <CopyForLlm />
      <Layout {...props} />
    </>
  );
}
