---
id: "hooks"
sidebar_position: 8
title: "Hooks"
---

In Sablier, hooks are arbitrary functions that get automatically executed by the protocol in response to specific
events. Their purpose is to programmatically notify some users when specific actions are taken by other users.

Hooks can only be written in a smart contract, so typical EOAs cannot implement them. However, hooks are optional, so
you can interact with the Sablier Protocol without implementing any hooks.

:::info

Hooks in smart contracts are analogous to callback functions in web2.

:::

## Visual representation

Here's a diagram that shows how hooks work:

:::note

This section is a stub.

:::

## Example scenario

Suppose you have created an NFT lending marketplace and wish to integrate Sablier. As a first step, you would typically
ask your users to deposit their Sablier NFTs into your contracts, so that they can be used as collateral.

In such a scenario, you are naturally interested to know what's happening to the stream. For instance, you might want to
know whether the stream has been canceled or if funds have been withdrawn from it. Hooks enable your protocol to
programmatically react to these events.

## Next steps

Looking to incorporate a hook in your Sablier integration? Refer to this [guide](/contracts/v2/guides/hooks).
