import { useMemo } from "react";
import { sablier } from "sablier";
import { getLatestLockupChainIds } from "../../helpers";
import GFMContent from "../atoms/GFMContent";

export interface ChainProps {
  kind: "mainnets" | "testnets";
}

export function Chains({ kind }: ChainProps) {
  const content = useMemo(() => {
    const latestLockupChainIds = new Set(getLatestLockupChainIds());

    let content: string = "";
    content += `| Name | Chain ID | In UI? | Native Token | Explorer |\n`;
    content += `| :--- | :------- | :----- | :----------- | :------- |\n`;

    const getter = kind === "mainnets" ? sablier.chains.getMainnets : sablier.chains.getTestnets;

    for (const chain of getter()) {
      // Only include chains that have Lockup v3.0 deployed
      if (!latestLockupChainIds.has(chain.id)) {
        continue;
      }

      const supportedCell = chain.isSupportedByUI ? "✅" : "❌";
      const symbolCell = chain.nativeCurrency.symbol;
      const explorerURL = chain.blockExplorers.default.url;
      const explorerCell = `[${new URL(explorerURL).host}](${explorerURL})`;
      content += `| ${chain.name} | ${chain.id} | ${supportedCell} | ${symbolCell} | ${explorerCell} |\n`;
    }

    return content;
  }, [kind]);

  return <GFMContent content={content} />;
}

// Helper function to get the count
export function getChainCount(kind: "mainnets" | "testnets"): number {
  const latestLockupChainIds = new Set(getLatestLockupChainIds());
  const query = kind === "mainnets" ? sablier.chains.getMainnets : sablier.chains.getTestnets;

  let count = 0;
  for (const chain of query()) {
    if (latestLockupChainIds.has(chain.id)) {
      count++;
    }
  }

  return count;
}

export default Chains;
