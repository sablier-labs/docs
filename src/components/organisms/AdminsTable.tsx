import { useMemo } from "react";
import type { Sablier } from "sablier";
import { chains, sablier } from "sablier";
import GFMContent from "../atoms/GFMContent";

type Address = Sablier.Address;
type Chain = Sablier.Chain;

// Safe multisig, deterministically deployed at the same address across most chains.
const MULTISIG: Address = "0x58290bbdb51A4c6B022A81e9cDeD24BE19Ca57fd";
// Sablier-controlled EOA, used on chains that do not yet have the multisig.
const EOA: Address = "0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F";

// Single source of truth for the admin governing each mainnet. Iterating this
// list (rather than the sablier catalog) makes the rendered rows typed: every
// entry is a `[Chain, Address]` tuple, so a missing admin is a compile error
// by construction.
//
// The catalog-coverage invariant below guarantees we don't silently omit a
// mainnet that sablier starts deploying to.
const CHAIN_ADMINS: ReadonlyArray<readonly [Chain, Address]> = [
  [chains.abstract, EOA],
  [chains.arbitrum, MULTISIG],
  [chains.avalanche, EOA],
  [chains.base, MULTISIG],
  [chains.berachain, EOA],
  [chains.blast, EOA],
  [chains.bsc, MULTISIG],
  [chains.chiliz, EOA],
  [chains.denergy, EOA],
  [chains.gnosis, EOA],
  [chains.hyperevm, MULTISIG],
  [chains.lightlink, EOA],
  [chains.linea, MULTISIG],
  [chains.mainnet, MULTISIG],
  [chains.mode, EOA],
  [chains.monad, MULTISIG],
  [chains.morph, EOA],
  [chains.optimism, MULTISIG],
  [chains.polygon, MULTISIG],
  [chains.scroll, EOA],
  [chains.sonic, MULTISIG],
  [chains.superseed, EOA],
  [chains.unichain, EOA],
  [chains.xdc, EOA],
  [chains.zksync, MULTISIG],
];

// Build-start invariant: every UI-supported mainnet with a v3.0 Lockup
// deployment must be represented in CHAIN_ADMINS. If sablier ships a new one,
// throw here (at module load) so the error lands before Docusaurus starts
// SSG, instead of deep inside per-page rendering.
(function assertCoverage(): void {
  const release = sablier.releases.get({ protocol: "lockup", version: "v3.0" });
  const knownIds = new Set(CHAIN_ADMINS.map(([chain]) => chain.id));
  const missingById = new Map<number, Chain>();
  for (const contract of sablier.contracts.getAll({ release })) {
    if (knownIds.has(contract.chainId) || missingById.has(contract.chainId)) {
      continue;
    }
    const chain = sablier.chains.get(contract.chainId);
    if (chain && !chain.isTestnet && chain.isSupportedByUI) {
      missingById.set(chain.id, chain);
    }
  }
  if (missingById.size > 0) {
    const missing = [...missingById.values()].map((chain) => `${chain.name} (${chain.id})`);
    throw new Error(
      `AdminsTable: missing admin entries for chain(s) ${missing.join(", ")}. ` +
        "Add them to CHAIN_ADMINS in src/components/organisms/AdminsTable.tsx."
    );
  }
})();

export function AdminsTable() {
  const content = useMemo(() => {
    const rows = CHAIN_ADMINS.filter(([chain]) => !chain.isTestnet && chain.isSupportedByUI).sort(
      ([a], [b]) => a.name.localeCompare(b.name)
    );

    let content = "| Chain | Address |\n";
    content += "| :---- | :------ |\n";

    for (const [chain, admin] of rows) {
      const explorerBaseUrl = chain.blockExplorers.default.url;
      const addressLink = `[${admin}](${explorerBaseUrl}/address/${admin})`;
      content += `| ${chain.name} | ${addressLink} |\n`;
    }

    return content;
  }, []);

  return <GFMContent content={content} />;
}

export default AdminsTable;
