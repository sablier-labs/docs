# Sablier Docs

Static documentation site for the Sablier protocols (Lockup, Flow, Airdrops). Built with Docusaurus.

## Stack

- **Docusaurus** 3.10 with `future.v4` and `faster` flags (static site generator)
- **TypeScript** 5.8 (strict, extends `@docusaurus/tsconfig`)
- **React** 18.2 (pinned)
- **Bun** as package manager and runtime (Node >=20 required)
- **Just** as command runner (extends `@sablier/devkit/just/base.just`)
- **MDX** with KaTeX (math), Mermaid (diagrams), `llmfood` (LLM-optimized output)

## Layout

- `cli/` — Bun-executed `commander` CLI (`cli/index.ts`) for autogen tasks
- `cli/commands/autogen/` — generators for `deployments`, `graphql`, `indexers`
- `cli/autogen-reference.sh` — shells out to generate Solidity reference docs
- `config/` — Docusaurus config split: `head-tags`, `plugins`, `presets`, `redirects`, `sidebars`, `theme-config`
- `docs/` — MDX content: `concepts/`, `guides/`, `reference/`, `api/`, `apps/`, `solana/`, `support/`
- `src/components/` — atomic design (`atoms/`, `molecules/`, `organisms/`)
- `src/pages/`, `src/theme/`, `src/css/`, `src/snippets/`
- `src/autogen/` — generated MDX, **never edit by hand** (gitignored, regenerated)
- `static/` — static assets served as-is
- `repos/evm-monorepo` — git submodule used as a source for autogen reference

## Commands

Run via `just` (not raw `bun docusaurus ...`) so autogen runs first.

- `just start` — autogen + dev server on `localhost:3000`
- `just build` — autogen + static build into `build/`
- `just serve` — serve the prebuilt site
- `just clean` — clear Docusaurus cache and `src/autogen/**`
- `just full-check` — Biome + Prettier + ESLint + `tsc --noEmit`
- `just full-write` — apply Biome + Prettier + ESLint fixes
- `just autogen` — regenerate everything with `--overwrite`
- `just autogen-deployments` / `autogen-graphql` / `autogen-indexers` / `autogen-reference`
- `just deploy` — Vercel prod deploy (requires `$VERCEL_TOKEN`)

## Autogen Reference

`cli/autogen-reference.sh` rebuilds `docs/reference/{airdrops,bob,flow,lockup,utils}/contracts/` from the `evm-monorepo`
submodule via `forge doc`, then post-processes the output: rewrites forge-relative paths, resolves `{Symbol}` natspec
refs to docs links, copies evm-utils abstracts/interfaces into each consumer package, and applies targeted content
fixes. Run with `bash cli/autogen-reference.sh` from repo root.

### LockupMath KaTeX fixup

Natspec for `LockupMath.calculateStreamedAmountLD/LL/LPG` in `evm-monorepo` writes math in Unicode-art (`⎧⎨⎩`, `⌊⌋`,
`─`) so the Solidity source reads cleanly. KaTeX can't parse those, so the script does a `perl -i -0pe` pass that
rewrites the four affected `$$...$$` blocks to LaTeX (`\begin{cases}`, `\frac`, `\lfloor`/`\rfloor`, `\cdot`). See the
`if [ "$repo" = "lockup" ]; then` branch in `cli/autogen-reference.sh`.

If natspec adds a new Unicode-art block or changes the text inside an existing one, the substitutions silently no-op and
broken art leaks into the published docs. After autogen, grep
`docs/reference/lockup/contracts/libraries/library.LockupMath.md` for `⎧ ⎨ ⎩ ⌊ ⌋ ─ －` inside `$$...$$` and add a
matching substitution. Long-term fix: rewrite the natspec in `evm-monorepo` as LaTeX directly.

## Authoring

- Content lives in `docs/**/*.{md,mdx}`. Filename numeric prefixes (`01-`, `02-`) drive sidebar order.
- Markdown is **prose-wrapped** (`proseWrap: "always"` in Prettier). Don't reflow paragraphs by hand — let Prettier do
  it.
- `onBrokenLinks: "throw"` and `onBrokenMarkdownLinks: "throw"` — every link must resolve at build time.
- Use Mermaid in fenced ` ```mermaid ` blocks; math via `$...$` / `$$...$$` (remark-math + rehype-katex).
- Redirects go in `config/redirects.ts`; never write client-side redirect hacks in pages.
- `llmfood` plugin emits `llms-{airdrops,flow,lockup,full}.txt`. When adding a top-level docs section, update
  `includePatterns` and `sectionOrder` in `config/plugins.ts`.

## Code Style

- BiomeJS (`ultracite/core` + `@sablier/devkit/biome/base`) is the source of truth for TS/JS/JSON/CSS — run
  `just biome-write` before committing.
- ESLint runs **only** on MD/MDX (see `eslint.config.mjs`). Don't add ESLint rules for TS.
- Prettier handles MD/MDX formatting; Biome handles everything else. Don't fight them.
- TypeScript: prefer functional patterns, explicit return types on exports, no `any`.
- Path imports use `baseUrl: "."`, so reference `src/...` and `config/...` from project root.
- React components follow atomic design — pick the right tier (`atoms` → `molecules` → `organisms`).

## Constraints

- Never edit files under `src/autogen/` — regenerate via `just autogen-*`.
- Never edit files under `repos/` — they are git submodules.
- Don't bump `react`/`react-dom` past 18.2 without checking Docusaurus compatibility.
- `node_modules`, `build`, `.docusaurus`, `repos`, `src/autogen` are excluded from Biome and `tsc`.
- Husky + lint-staged run on commit — don't `--no-verify` to bypass failures; fix the lint issue.

## Git

- Default branch: `main`. Submodules under `repos/` — run `git submodule update --init --recursive` after clone.
- PRs: fork → feature branch → `just full-check` → PR.

@README.md @package.json
