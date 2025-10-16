import _ from "lodash";
import { useMemo } from "react";
import { sablier } from "sablier";
import GFMContent from "../atoms/GFMContent";

export interface ChainProps {
  kind: "mainnets" | "testnets";
}

// Cache for chain counts
const chainCounts: { mainnets?: number; testnets?: number } = {};

export function Chains({ kind }: ChainProps) {
  const content = useMemo(() => {
    // Get the v3.0 lockup release
    const lockupV3Release = sablier.releases.get({
      protocol: "lockup",
      version: "v3.0",
    });

    // Get all chains that have v3.0 lockup contracts
    const lockupV3Contracts = sablier.contracts.getAll({
      release: lockupV3Release,
    });

    // Get unique chain IDs that support Lockup v3.0
    const lockupV3ChainIds = new Set(_.uniq(lockupV3Contracts?.map((c) => c.chainId) || []));

    let content: string = "";
    content += `| Name | Chain ID | In UI? | Native Token | Explorer |\n`;
    content += `| :--- | :------- | :----- | :----------- | :------- |\n`;

    let count = 0;
    const getter = kind === "mainnets" ? sablier.chains.getMainnets : sablier.chains.getTestnets;

    // PR NOTE: I believe we should display only the latest chains we deployed on,
    // instead of the entire list of chains where we have ever deployed a specific version.
    for (const chain of getter()) {
      // Only include chains that have Lockup v3.0 deployed
      if (!lockupV3ChainIds.has(chain.id)) {
        continue;
      }

      count++;
      const supportedCell = chain.isSupportedByUI ? "✅" : "❌";
      const symbolCell = chain.nativeCurrency.symbol;
      const explorerURL = chain.blockExplorers.default.url;
      const explorerCell = `[${new URL(explorerURL).host}](${explorerURL})`;
      content += `| ${chain.name} | ${chain.id} | ${supportedCell} | ${symbolCell} | ${explorerCell} |\n`;
    }

    // Store the count for use in MDX
    chainCounts[kind] = count;

    return content;
  }, [kind]);

  return <GFMContent content={content} />;
}

// Helper function to get the count - reads from cache populated by Chains component
export function getChainCount(kind: "mainnets" | "testnets"): number {
  return chainCounts[kind] ?? 0;
}

export default Chains;
