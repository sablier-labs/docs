import { useMemo } from "react";
import type { Sablier } from "sablier";
import { chains, sablier } from "sablier";
import GFMContent from "../atoms/GFMContent";

type Address = Sablier.Address;
type Chain = Sablier.Chain;

// Sablier-controlled EOA, used on chains that never received a multisig.
const EOA: Address = "0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F";

// Current Safe multisig, deterministically deployed at the same address across
// most chains. Governs Lockup v2.0+, Flow v1.0+ and Airdrops v1.3+ (via the
// Comptroller).
const MULTISIG: Address = "0x58290bbdb51A4c6B022A81e9cDeD24BE19Ca57fd";

// Single source of truth for the current admin governing each mainnet.
// Iterating this list (rather than the sablier catalog) makes the rendered
// rows typed: every entry is a `[Chain, Address]` tuple, so a missing admin is
// a compile error by construction.
//
// The catalog-coverage invariant below guarantees we don't silently omit a
// mainnet that sablier starts deploying to.
const CURRENT_CHAIN_ADMINS: ReadonlyArray<readonly [Chain, Address]> = [
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
  [chains.linea, EOA],
  [chains.mainnet, MULTISIG],
  [chains.mode, EOA],
  [chains.monad, MULTISIG],
  [chains.morph, EOA],
  [chains.optimism, MULTISIG],
  [chains.polygon, MULTISIG],
  [chains.scroll, EOA],
  [chains.sonic, EOA],
  [chains.superseed, EOA],
  [chains.unichain, EOA],
  [chains.xdc, EOA],
  [chains.zksync, MULTISIG],
];

// Old admins that are governing older, pre-Comptroller releases:
// Lockup v1.0/v1.1/v1.2, Flow v1.0, and Airdrops v1.1/v1.2.
// Each entry is either a 1-of-N Safe deployed alongside the original launch,
// or the same Sablier-controlled EOA used on chains that never received a
// multisig. Verified against the on-chain `admin()` getter on every chain in
// the Lockup v2.0 release (the latest direct-admin release).
const OLD_CHAIN_ADMINS: ReadonlyArray<readonly [Chain, Address]> = [
  [chains.abstract, EOA],
  [chains.arbitrum, "0xF34E41a6f6Ce5A45559B1D3Ee92E141a3De96376"],
  [chains.avalanche, "0x4735517616373c5137dE8bcCDc887637B8ac85Ce"],
  [chains.base, "0x83A6fA8c04420B3F9C7A4CF1c040b63Fbbc89B66"],
  [chains.berachain, EOA],
  [chains.blast, EOA],
  [chains.bsc, "0x6666cA940D2f4B65883b454b7Bc7EEB039f64fa3"],
  [chains.chiliz, "0x74A234DcAdFCB395b37C8c2B3Edf7A13Be78c935"],
  [chains.gnosis, "0x72ACB57fa6a8fa768bE44Db453B1CDBa8B12A399"],
  [chains.hyperevm, EOA],
  [chains.lightlink, EOA],
  [chains.linea, "0x72dCfa0483d5Ef91562817C6f20E8Ce07A81319D"],
  [chains.mainnet, "0x79Fb3e81aAc012c08501f41296CCC145a1E15844"],
  [chains.mode, EOA],
  [chains.morph, EOA],
  [chains.optimism, "0x43c76FE8Aec91F63EbEfb4f5d2a4ba88ef880350"],
  [chains.polygon, "0x40A518C5B9c1d3D6d62Ba789501CE4D526C9d9C6"],
  [chains.scroll, "0x0F7Ad835235Ede685180A5c611111610813457a9"],
  [chains.sonic, EOA],
  [chains.superseed, EOA],
  [chains.tangle, EOA],
  [chains.unichain, EOA],
  [chains.xdc, EOA],
  [chains.zksync, "0xaFeA787Ef04E280ad5Bb907363f214E4BAB9e288"],
];

// Build-start invariants: every UI-supported mainnet with a deployment in the
// reference release must be represented in the matching list. If sablier
// ships a new one, throw here (at module load) so the error lands before
// Docusaurus starts SSG, instead of deep inside per-page rendering.
function assertCoverage(
  label: string,
  release: Sablier.Release,
  rows: ReadonlyArray<readonly [Chain, Address]>,
  constName: string
): void {
  const knownIds = new Set(rows.map(([chain]) => chain.id));
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
      `AdminsTable: missing ${label} admin entries for chain(s) ${missing.join(", ")}. ` +
        `Add them to ${constName} in src/components/organisms/AdminsTable.tsx.`
    );
  }
}

assertCoverage(
  "current",
  sablier.releases.get({ protocol: "lockup", version: "v3.0" }),
  CURRENT_CHAIN_ADMINS,
  "CURRENT_CHAIN_ADMINS"
);

// Lockup v2.0 is the latest pre-Comptroller release. Older versions
// (v1.0/v1.1/v1.2) deployed to subsets of v2.0's chains, so this single check
// covers every chain that ever ran with a direct admin.
assertCoverage(
  "old",
  sablier.releases.get({ protocol: "lockup", version: "v2.0" }),
  OLD_CHAIN_ADMINS,
  "OLD_CHAIN_ADMINS"
);

function renderTable(rows: ReadonlyArray<readonly [Chain, Address]>): string {
  const sorted = rows
    .filter(([chain]) => !chain.isTestnet && chain.isSupportedByUI)
    .sort(([a], [b]) => a.name.localeCompare(b.name));

  let content = "| Chain | Address |\n";
  content += "| :---- | :------ |\n";
  for (const [chain, admin] of sorted) {
    const explorerBaseUrl = chain.blockExplorers.default.url;
    content += `| ${chain.name} | [${admin}](${explorerBaseUrl}/address/${admin}) |\n`;
  }
  return content;
}

export function AdminsTable() {
  const content = useMemo(() => renderTable(CURRENT_CHAIN_ADMINS), []);
  return <GFMContent content={content} />;
}

export function OldAdminsTable() {
  const content = useMemo(() => renderTable(OLD_CHAIN_ADMINS), []);
  return <GFMContent content={content} />;
}

export default AdminsTable;
