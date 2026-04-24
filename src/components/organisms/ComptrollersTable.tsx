import { useMemo } from "react";
import { sablier } from "sablier";
import GFMContent from "../atoms/GFMContent";

export function ComptrollersTable() {
  const content = useMemo(() => {
    // The comptroller catalog covers every chain where a Sablier protocol
    // (Lockup, Airdrops, Flow, Bob) that uses the comptroller is deployed, so
    // iterating it keeps the table in sync automatically without coupling to
    // a specific Lockup release.
    const rows = sablier.comptroller
      .getAll()
      .flatMap((comptroller) => {
        const chain = sablier.chains.get(comptroller.chainId);
        if (!chain || chain.isTestnet || !chain.isSupportedByUI) {
          return [];
        }
        return [{ address: comptroller.address, chain }];
      })
      .sort((a, b) => a.chain.name.localeCompare(b.chain.name));

    let content = "| Chain | Address |\n";
    content += "| :---- | :------ |\n";

    for (const { chain, address } of rows) {
      const explorerBaseUrl = chain.blockExplorers.default.url;
      const addressLink = `[${address}](${explorerBaseUrl}/address/${address})`;
      content += `| ${chain.name} | ${addressLink} |\n`;
    }

    return content;
  }, []);

  return <GFMContent content={content} />;
}

export default ComptrollersTable;
