---
id: "hooks"
sidebar_position: 4
title: "Implement Hooks"
---

In this guide, we will explain how to implement [hooks](/concepts/protocol/hooks) in your on-chain integration of
Sablier.

### Overview

### Recipient

These are the hooks that can be implemented by a recipient contract:

| Hook                | Arguments                                 | Description                                                                      |
| ------------------- | ----------------------------------------- | -------------------------------------------------------------------------------- |
| `onStreamCanceled`  | `(streamId,senderAmount,recipientAmount)` | Called when the stream is cancelled by the sender.                               |
| `onStreamRenounced` | `(streamId)`                              | Called when the stream is renounced by the sender.                               |
| `onStreamWithdrawn` | `(streamId,caller,to,amount)`             | Called when the sender or an an approved NFT operator withdraws from the stream. |

The recipient need not implement all hooks.

### Sender

And these are the hooks that can be implemented by a sender contract:

| Hook               | Arguments                                 | Description                                        |
| ------------------ | ----------------------------------------- | -------------------------------------------------- |
| `onStreamCanceled` | `(streamId,senderAmount,recipientAmount)` | Called when the stream is cancelled by the sender. |

### Sample Implementations

#### Recipient

```solidity reference title="Sablier Recipient Hooks"
https://github.com/sablier-labs/examples/blob/main/v2/core/RecipientHooks.sol
```

#### Sender

```solidity reference title="Sablier Sender Hooks"
https://github.com/sablier-labs/examples/blob/main/v2/core/SenderHooks.sol
```

## Error Management

:::danger

Reverts in your hooks will NOT be picked up by Sablier. If your hook reverts, the original transaction will go through,
but any state changes made by your hook will be reverted.

:::
