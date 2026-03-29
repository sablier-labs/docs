---
id: "overview"
sidebar_position: 1
title: "Overview"
---

Unlike Lockup which unlocks tokens at a specific time, Bob is designed to unlock tokens when a specific price is
reached. It allows you to deposit ERC-20 tokens into vaults that unlock when either a target price is reached or a
specified time period elapses. In some cases such as ETH, the locked tokens also earn yield via Lido.

Let's take an example. Imagine Alice believes ETH will reach $5,000 within the next 12 months.

1. Alice finds an existing vault with WETH as the underlying token that has a target price set to $5,000, and an expiry
   12 months from now.
2. Alice deposits 10 ETH into this vault and receives 10 [shares](./03-shares.md) in return.
3. When ETH reaches $5,000, the vault enters into the settled state which means Alice can redeem her shares for ETH.
4. If ETH does not reach $5,000 in the next 12 month, Alice can still redeem her shares because the vault has expired.
5. For some tokens such as ETH, because of the [yield adapters](./04-lido-adapter.md), Alice's ETH would also earn while
   they are locked in the vault.

## Key Features

1. **Price-gated unlocking:** Unlock token when the target price is reached or the expiry is reached (note that a vault
   can be set to never expire).
2. **Yield generation:** Some tokens such as ETH, WETH allows locked tokens to earn yield automatically.
3. **ERC-20 share tokens:** Each vault issues transferable share tokens that represent a depositor's claim on the
   vault's underlying tokens including any accrued yield.
4. **Immutability:** Vault's target price and expiry cannot be changed once the vault is created.

If you are looking for token vesting or airdrop distributions, please refer to our [Lockup](../lockup/overview) and
[Airdrops](../airdrops) protocols.
