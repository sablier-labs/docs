---
id: "overview"
sidebar_position: 1
title: "Overview"
---

Escrow is a smart contract that allows peer-to-peer swaps of ERC-20 tokens.

Let's take an example to understand how it works. Imagine Alice wants to sell 1 WBTC for 30 WETH.

1. Alice creates an order specifying WBTC as the sell token, WETH as the buy token, and an optional expiry.
2. Her 1 WBTC is transferred to the Escrow contract.
3. Bob fills the order by sending at least 30 WETH to the contract.
4. The contract sends Alice the WETH (minus a [trade fee](/concepts/fees#escrow-trade-fees)) and sends Bob the WBTC
   (minus a trade fee).

If no one fills Alice's order, she can cancel it at any time to get her WBTC back.

Escrow is part of the [Bob](/concepts/bob/overview) deployment package. For deployment addresses, see the
[Bob Deployments](/guides/bob/deployments) page.
