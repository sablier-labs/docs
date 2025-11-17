import { useMemo } from "react";
import { sablier } from "sablier";
import { comptroller } from "sablier/evm";
import { getLatestLockupChainIds } from "../../helpers";
import GFMContent from "../atoms/GFMContent";

export function ComptrollersTable() {
  const content = useMemo(() => {
    // Get chain IDs that have the latest Lockup v3.0 release deployed
    const chainIds = getLatestLockupChainIds();

    // Get chain details and filter for mainnets supported by UI
    const chains = chainIds
      .map((chainId) => sablier.chains.get(chainId))
      .filter((chain) => chain && !chain.isTestnet && chain.isSupportedByUI)
      .sort((a, b) => a.name.localeCompare(b.name));

    let content = "| Chain | Address |\n";
    content += "| :---- | :------ |\n";

    for (const chain of chains) {
      // Get comptroller address from sablier package
      const comptrollerAddress = comptroller.get(chain.id).address;

      const explorerBaseUrl = chain.blockExplorers.default.url;
      const addressLink = `[${comptrollerAddress}](${explorerBaseUrl}/address/${comptrollerAddress})`;
      content += `| ${chain.name} | ${addressLink} |\n`;
    }

    return content;
  }, []);

  return <GFMContent content={content} />;
}

export default ComptrollersTable;
