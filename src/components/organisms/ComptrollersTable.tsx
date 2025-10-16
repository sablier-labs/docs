import _ from "lodash";
import { useMemo } from "react";
import { sablier } from "sablier";
import GFMContent from "../atoms/GFMContent";

// Hardcoded comptroller addresses
const DEFAULT_COMPTROLLER = "0x0000008ABbFf7a84a2fE09f9A9b74D3BC2072399";
const LINEA_COMPTROLLER = "0xF21b304A08993f98A79C7Eb841f812CCeab49B8b";
const LINEA_CHAIN_ID = 59144;

export function ComptrollersTable() {
  const content = useMemo(() => {
    // Get the v3.0 lockup release
    const release = sablier.releases.get({
      protocol: "lockup",
      version: "v3.0",
    });

    // Get all chains that have v3.0 lockup contracts
    const allContracts = sablier.contracts.getAll({
      release: release,
    });

    // Get unique chains from the contracts
    const chainIds = _.uniq(allContracts.map((c) => c.chainId));

    // Get chain details and filter for mainnets supported by UI
    const chains = chainIds
      .map((chainId) => sablier.chains.get(chainId))
      .filter((chain) => chain && !chain.isTestnet && chain.isSupportedByUI)
      .sort((a, b) => a.name.localeCompare(b.name));

    let content = "| Chain | Address |\n";
    content += "| :---- | :------ |\n";

    for (const chain of chains) {
      // Use special address for Linea, default for all others
      const comptrollerAddress = chain.id === LINEA_CHAIN_ID ? LINEA_COMPTROLLER : DEFAULT_COMPTROLLER;

      const explorerBaseUrl = chain.blockExplorers.default.url;
      const addressLink = `[${comptrollerAddress}](${explorerBaseUrl}/address/${comptrollerAddress})`;
      content += `| ${chain.name} | ${addressLink} |\n`;
    }

    return content;
  }, []);

  return <GFMContent content={content} />;
}

export default ComptrollersTable;
