---
id: "hooks"
sidebar_position: 5
title: "Implement Hooks"
---

In this guide, we will explain how to implement [hooks](/concepts/protocol/hooks) in your on-chain integration of
Sablier.

### Overview

### Recipient

These are the hooks that can be implemented by a recipient contract:

| Hook                | Arguments                                        | Description                                                                   |
| ------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------- |
| `onStreamCanceled`  | `(streamId,sender,senderAmount,recipientAmount)` | Called when the stream is canceled by the sender.                             |
| `onStreamRenounced` | `(streamId)`                                     | Called when the stream is renounced by the sender.                            |
| `onStreamWithdrawn` | `(streamId,caller,to,amount)`                    | Called when the sender or an approved NFT operator withdraws from the stream. |

:::caution

While it isn't mandatory, we highly recommend implementing the `onStreamCanceled` and the `onStreamWithdrawn` hooks.
Doing so enables your contract to keep its internal accounting updated accurately.

:::

### Sample Implementations

#### Recipient

```solidity reference title="Sablier Recipient Hooks"
https://github.com/sablier-labs/examples/blob/main/v2/core/RecipientHooks.sol
```

## Error Management

:::danger

Reverts in your hooks will NOT be picked up by Sablier. If your hook reverts, the original transaction will go through,
but any state changes made by your hook will be reverted.

:::
