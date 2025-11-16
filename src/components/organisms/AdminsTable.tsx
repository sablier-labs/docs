import _ from "lodash";
import { useMemo } from "react";
import { sablier } from "sablier";
import GFMContent from "../atoms/GFMContent";

// Hardcoded admin addresses per chain
const DEFAULT_SABLIER_ADMIN = "0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F";

const ADMIN_ADDRESSES: Record<number, string> = {
  1: "0x79Fb3e81aAc012c08501f41296CCC145a1E15844", // Ethereum
  10: "0x43c76FE8Aec91F63EbEfb4f5d2a4ba88ef880350", // Optimism
  56: "0x6666cA940D2f4B65883b454b7Bc7EEB039f64fa3", // BSC
  100: "0x72ACB57fa6a8fa768bE44Db453B1CDBa8B12A399", // Gnosis
  137: "0x40A518C5B9c1d3D6d62Ba789501CE4D526C9d9C6", // Polygon
  324: "0xaFeA787Ef04E280ad5Bb907363f214E4BAB9e288", // zkSync
  8453: "0x83A6fA8c04420B3F9C7A4CF1c040b63Fbbc89B66", // Base
  42161: "0xF34E41a6f6Ce5A45559B1D3Ee92E141a3De96376", // Arbitrum
  43114: "0x4735517616373c5137dE8bcCDc887637B8ac85Ce", // Avalanche
  59144: "0x72dCfa0483d5Ef91562817C6f20E8Ce07A81319D", // Linea
  88888: "0x74A234DcAdFCB395b37C8c2B3Edf7A13Be78c935", // Chiliz
  534352: "0x0F7Ad835235Ede685180A5c611111610813457a9", // Scroll
};

function getAdminAddress(chainId: number): string {
  return ADMIN_ADDRESSES[chainId] ?? DEFAULT_SABLIER_ADMIN;
}

export function AdminsTable() {
  const content = useMemo(() => {
    // Get the v2.0 lockup release
    const release = sablier.releases.get({
      protocol: "lockup",
      version: "v3.0",
    });

    // Get all chains that have v2.0 lockup contracts
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
      const adminAddress = getAdminAddress(chain.id);

      const explorerBaseUrl = chain.blockExplorers.default.url;
      const addressLink = `[${adminAddress}](${explorerBaseUrl}/address/${adminAddress})`;
      content += `| ${chain.name} | ${addressLink} |\n`;
    }

    return content;
  }, []);

  return <GFMContent content={content} />;
}

export default AdminsTable;
