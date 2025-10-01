---
id: "fees"
sidebar_position: 3
title: "Fees"
---

### Interface Fees

The Sablier Interface charges a flat fee for certain operations. This fee is paid in the native gas token, i.e. in SOL.

:::info

Fees are calculated based on market prices. For example, when SOL is \$200, a \$1 fee equals 0.005 SOL.

:::

| Operation              | Fee    |
| ---------------------- | ------ |
| Withdraw from a stream | **$1** |
| Claim an airdrop       | **$2** |

These are interface fees, not program-level fees. The Solana programs themselves don't charge these fees.

### Transaction Fees

Each operation on the blockchain also has a gas fee, which is independent of the Sablier fee, this is for network and
rent of the accounts created. For more information, refer to [Solana docs](https://solana.com/docs/core/fees).

These fees are an approximation, as each transaction might have a different cost.

| Operation                  | Fee         |
| -------------------------- | ----------- |
| Create a stream            | **~$5**     |
| Withdraw from a stream     | **~$0.004** |
| Create an airdrop campaign | **~$0.1**   |
| Claim an airdrop           | **~$0.2**   |
