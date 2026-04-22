import _ from "lodash";
import { useMemo } from "react";
import { sablier } from "sablier";
import GFMContent from "../atoms/GFMContent";

// Hardcoded admin addresses per chain.
// - 0x58290bbdb51A4c6B022A81e9cDeD24BE19Ca57fd: Safe multisig, deployed at the same address across chains.
// - 0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F: EOA.
const ADMIN_ADDRESSES: Record<number, string> = {
  1: "0x58290bbdb51A4c6B022A81e9cDeD24BE19Ca57fd", // Ethereum
  10: "0x58290bbdb51A4c6B022A81e9cDeD24BE19Ca57fd", // OP Mainnet
  50: "0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F", // XDC
  56: "0x58290bbdb51A4c6B022A81e9cDeD24BE19Ca57fd", // BNB Chain
  100: "0x58290bbdb51A4c6B022A81e9cDeD24BE19Ca57fd", // Gnosis
  130: "0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F", // Unichain
  137: "0x58290bbdb51A4c6B022A81e9cDeD24BE19Ca57fd", // Polygon
  143: "0x58290bbdb51A4c6B022A81e9cDeD24BE19Ca57fd", // Monad
  146: "0x58290bbdb51A4c6B022A81e9cDeD24BE19Ca57fd", // Sonic
  324: "0x58290bbdb51A4c6B022A81e9cDeD24BE19Ca57fd", // ZKsync Era
  999: "0x58290bbdb51A4c6B022A81e9cDeD24BE19Ca57fd", // HyperEVM
  1890: "0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F", // Lightlink
  2741: "0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F", // Abstract
  2818: "0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F", // Morph
  5330: "0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F", // Superseed
  8453: "0x58290bbdb51A4c6B022A81e9cDeD24BE19Ca57fd", // Base
  34443: "0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F", // Mode
  42161: "0x58290bbdb51A4c6B022A81e9cDeD24BE19Ca57fd", // Arbitrum
  43114: "0x58290bbdb51A4c6B022A81e9cDeD24BE19Ca57fd", // Avalanche
  59144: "0x58290bbdb51A4c6B022A81e9cDeD24BE19Ca57fd", // Linea
  80094: "0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F", // Berachain
  88888: "0x74A234DcAdFCB395b37C8c2B3Edf7A13Be78c935", // Chiliz
  369369: "0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F", // Denergy
  534352: "0x58290bbdb51A4c6B022A81e9cDeD24BE19Ca57fd", // Scroll
};

function getAdminAddress(chainId: number): string {
  const address = ADMIN_ADDRESSES[chainId];
  if (!address) {
    throw new Error(`Sablier admin address missing for chain ${chainId}.`);
  }
  return address;
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
      release,
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
