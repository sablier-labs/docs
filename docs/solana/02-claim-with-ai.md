---
id: "claim-with-ai"
sidebar_position: 2
title: "Claim with AI"
---

# Claim with AI

Recipients can claim unlocked Sablier vesting streams on Solana from the terminal by asking an AI coding agent in plain
English. The agent discovers claimable streams, previews the transaction, and asks you to sign with your wallet.

This page focuses on [`sablier-withdraw-vesting`](https://github.com/sablier-labs/sablier-skills), the skill for
withdrawing unlocked tokens from Lockup vesting streams. The same skill also covers EVM chains -- see
[Claim with AI](/guides/claim-with-ai-skills) in the Guides section.

:::info[App status]

Sablier on Solana is in maintenance mode. Creating new Solana streams and airdrop campaigns is no longer supported, and
`solana.sablier.com` is the app being deprecated. For Solana claims, use the AI skill or interact with the program
directly. See [Sablier on Solana](/solana/sablier-on-solana) for protocol details.

:::

## Prerequisites

### Agent

- [**Claude Code CLI**](https://docs.claude.com/en/docs/claude-code/overview), the terminal tool.
- [**Codex**](https://github.com/openai/codex), OpenAI's coding agent.

:::caution[Claude Code CLI, not the desktop app]

The skill runs in **Claude Code**, the terminal CLI. The Claude **desktop app** (`claude.ai` chat client) cannot install
skills or sign on-chain transactions on your behalf.

:::

### Tools

- `curl` and `jq`, for talking to the Sablier indexer and parsing transaction receipts.
- A Solana wallet that controls the recipient public key.
- Enough SOL to cover transaction fees, plus the program withdrawal fee when it is nonzero.

## Install

Add the withdraw skill to your agent:

```bash
npx skills add sablier-labs/sablier-skills --skill sablier-withdraw-vesting
```

This pulls the skill from [`sablier-labs/sablier-skills`](https://github.com/sablier-labs/sablier-skills) and registers
it under `~/.claude/skills/sablier-withdraw-vesting` (global install) or `./.claude/skills/sablier-withdraw-vesting`
(project-local). Claude Code auto-discovers it in new sessions.

## Prompt

The skill covers Solana mainnet-beta. Pass `solana` as the chain and provide the recipient public key:

```text
withdraw my Sablier streams on Solana for <my-base58-pubkey>
```

## Discovery and batching

Solana uses a single-stream claim flow. There is no `withdrawMultiple` equivalent that fits Solana's 1232-byte
transaction limit, so re-run the skill once per stream.

The Solana flow is:

1. **Stream discovery**: the skill looks up claimable Solana streams for the recipient public key.
2. **Selection**: you choose one claimable stream.
3. **Preflight**: the skill checks the currently withdrawable amount and the required fee.
4. **Preview**: it shows the stream, token, recipient, and fee before signing.
5. **Broadcast**: you sign one transaction for the selected stream.
6. **Verification**: the skill checks the resulting transaction and prints the outcome.

## Costs

The Solana protocol fee is the program's `WITHDRAWAL_FEE_USD` constant. It is currently `0` on mainnet; otherwise it is
about $1 in SOL via Chainlink.

## Troubleshooting

**"No active Sablier streams were found".** Either the public key is wrong, the connected account is wrong, or the
streams live on a different chain. Re-run without a chain to let the skill scan indexer-wide.

**"Nothing currently unlocked".** Streams exist, but every one has a withdrawable amount of `0` at this block. Wait for
more tokens to vest and retry.

**Multiple streams are claimable.** Re-run the skill once per stream. The Solana transaction size limit prevents one
`withdrawMultiple`-style claim from covering the whole wallet.

**The fee is nonzero.** The Solana program fee follows `WITHDRAWAL_FEE_USD`. Fund the wallet with enough SOL for the
network fee and withdrawal fee, then retry.

**Transaction still pending.** Check the explorer. If it confirms later, you are done; if it gets dropped, re-run the
skill.

## Payments streams

For Sablier Payments (Flow) streams, install the sibling skill:

```bash
npx skills add sablier-labs/sablier-skills --skill sablier-withdraw-open-ended-stream
```

See [AI Agents](/guides/ai-agents) for the full skill catalogue.
