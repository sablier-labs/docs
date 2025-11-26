---
id: "sablier-on-solana"
sidebar_position: 1
title: "Sablier on Solana"
---

:::note

This part of the documentation is in its early stages and will be continuously improved over time. We're actively
working on the content to include more guides, examples, and detailed explanations.

:::

## Introduction

Welcome to the Sablier on Solana documentation.

This section assumes you are familiar with the Sablier Protocol and its Ethereum high level concepts. Here, we focus on
what's specific to the Solana blockchain and how it differs from Ethereum.

For more information on the original Sablier Protocol, refer to the
[main documentation](../concepts/01-what-is-sablier.mdx). You can also find information about
[Streaming](../concepts/02-streaming.md) and [Airdrops](../concepts/05-merkle-airdrops.mdx) in the Concepts section.

## App

Start exploring at [solana.sablier.com](https://solana.sablier.com) or continue reading below to learn more about the
available features on Solana.

## SolSab

[SolSab](https://github.com/sablier-labs/solsab) is a collection of Solana protocols currently featuring two programs:
**Sablier Lockup** and **Sablier Merkle Instant**. While not all of our Ethereum protocols are also available on Solana,
we aim to bridge this gap in the future.

### Lockup

Sablier Lockup is a token distribution protocol that enables onchain vesting and payments. Our flagship model is the
linear stream, which distributes tokens on a continuous, by-the-second basis.

The way it works is that the stream creator first deposits a specific amount of SPL/Token2022 tokens. The program, then,
progressively transfers the ownership of the funds to the recipient (who can withdraw them as they're streamed). The
streaming rate is influenced by various factors, such as the start and end times, the total amount of tokens deposited,
etc.

#### Key differences from the Ethereum [Lockup](../concepts/lockup/01-overview.md) protocol

- On Solana, we currently support all shapes from the
  [Lockup Linear](../concepts/lockup/02-stream-shapes.mdx#lockup-linear) category, as well as the
  [Timelock](../concepts/lockup/02-stream-shapes.mdx#timelock) shape (also implemented via the Linear program).
- Due to the limitations of the [Token Metadata](https://developers.metaplex.com/token-metadata) NFT standard, we don't
  support non-transferable Streams on Solana.
- Instead of the tokens from all of the streams being stored at a single address, on Solana, they're kept in dedicated
  stream ATAs ([Associated Token Account](https://www.alchemy.com/overviews/associated-token-account)).
- Due to how Solana's VM works, we do not support hooks for the `cancel` and `withdraw` functionalities.

### Merkle Instant

The Merkle Instant program enables the creation of Merkle Tree-based token airdrop campaigns that allow users to claim
their entire allocation at once after the campaign starts.

#### Key differences from the Ethereum [Airdrops](../concepts/05-merkle-airdrops.mdx) protocols

- The Solana protocol only includes the Instant airdrop model, for now. The Vesting airdrop models are coming in the
  future.
- Due to Solana’s account architecture, a single program handles both creation and claiming. In contrast to Ethereum,
  where a factory contract deploys a stand-alone contract for each airdrop campaign, and claiming is performed on that
  contract.
