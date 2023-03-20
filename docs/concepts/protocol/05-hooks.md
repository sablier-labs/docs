---
id: "hooks"
sidebar_position: 5
title: "Hooks"
---

In Sablier V2, hooks are arbitrary functions that get automatically executed by the protocol in response to specific
events. Their purpose is to programmatically notify some users when specific actions are taken by other users.

Hooks can only be written in a smart contract, so typical EOAs cannot implement them. However, hooks are optional, so
you can use Sablier V2 without implementing any hooks.

:::info

Hooks in smart contracts are analogous to callback functions in web2.

:::

## Visual Representation

Here's a diagram that shows how hooks work in Sablier V2:

:::note

This section is a stub.

:::

## Example Scenario

Suppose you have created an NFT lending marketplace and wish to integrate Sablier V2. As a first step, you would
typically ask your users to deposit their Sablier NFTs into your contracts, so that they can be used as collateral.

In such a scenario, you are naturally interested to know what's happening to the stream. For instance, you might want to
know whether the stream has been canceled or if funds have been withdrawn from it. Hooks enable your protocol to
programmatically react to these events.

## Next Steps

Looking to incorporate a hook in your Sablier V2 integration? Refer to this
[guide](/docs/contracts/v2/guides/04-hooks.md).
