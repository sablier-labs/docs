import _ from "lodash";
import { sablier } from "sablier";
import { BENCHMARKS_COMMIT, GITHUB_ORG } from "./constants";

export function getBenchmarkURL(path: string): string {
  return getRawContentURL("benchmarks", BENCHMARKS_COMMIT, path);
}

export function getRawContentURL(repo: string, ref: string, path: string): string {
  return `https://raw.githubusercontent.com/${GITHUB_ORG}/${repo}/${ref}/${path}`;
}

/**
 * Get chain IDs that have the latest lockup release deployed
 */
export function getLatestLockupChainIds(): number[] {
  const release = sablier.releases.getLatest({ protocol: "lockup" });
  const contracts = sablier.contracts.getAll({ release });
  return _.uniq(contracts.map((c) => c.chainId));
}
