---
id: "fees"
sidebar_position: 3
title: "Fees"
---

### Interface Fees

The Sablier Interface charges a flat USD fee for certain operations. This fee is paid in the native gas token of the
network (i.e. SOL).

:::info

Fees are calculated based on the SOL price at the moment of the tx. For example, if SOL is \$200, a \$1 fee equals 0.005
SOL.

:::

| Operation              | Fee    |
| ---------------------- | ------ |
| Withdraw from a stream | **$1** |
| Claim an airdrop       | **$2** |

These are Interface (and not program-level) fees. The SolSab programs themselves don't charge any fees.

### Metaplex Fees

Each of our Lockup streams has an NFT representation, in the form of a
[Metaplex Token Metadata](https://developers.metaplex.com/token-metadata) NFT. Metaplex
[charges](https://developers.metaplex.com/protocol-fees) a fixed fee, in SOL, for a number of operations with its
protocol. Because of the latter, interacting with SolSab also involves the following fees (that go directly to
Metaplex):

| Operation       | Fee          |
| --------------- | ------------ |
| Create a stream | **0.01 SOL** |

### Transaction/Network Fees

When transacting on the Solana blockchain, you're also required to pay one or more of the following
[network fees](https://solana.com/learn/understanding-solana-transaction-fees#solanas-fee-structure) (depending on what
exactly your tx does):

- Base Fee
- Priority Fee
- Storage Rent

These fees are independent of the Sablier fees - and are used by the Solana network, e.g., to compensate the validators
for processing your tx.

Here are the estimated network fees for some of our program instructions:

| Operation                  | Fee              |
| -------------------------- | ---------------- |
| Create a stream            | **~0.0137 SOL**  |
| Withdraw from a stream     | **~0.00009 SOL** |
| Create an airdrop campaign | **~0.0045 SOL**  |
| Claim an airdrop           | **~0.00003 SOL** |
