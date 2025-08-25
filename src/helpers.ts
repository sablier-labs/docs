import { BENCHMARKS_COMMIT, GITHUB_ORG } from "./constants";

export function getBenchmarkURL(path: string): string {
  return getRawContentURL("benchmarks", BENCHMARKS_COMMIT, path);
}

export function getRawContentURL(repo: string, ref: string, path: string): string {
  return `https://raw.githubusercontent.com/${GITHUB_ORG}/${repo}/${ref}/${path}`;
}
