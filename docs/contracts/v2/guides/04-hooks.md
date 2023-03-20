---
id: "hooks"
sidebar_position: 4
title: "Implement Hooks"
---

In this guide, we will go over how to implement [hooks](/docs/concepts/protocol/05-hooks.md) in your integration of
Sablier V2.

### Overview

### Recipient

These are the hooks that can be implemented by a recipient contract:

| Hook                | Arguments                                 | Description                                                                      |
| :------------------ | :---------------------------------------- | :------------------------------------------------------------------------------- |
| `onStreamCanceled`  | `(streamId,senderAmount,recipientAmount)` | Called when the stream is cancelled by the sender.                               |
| `onStreamRenounced` | `(streamId)`                              | Called when the stream is renounced by the sender.                               |
| `onStreamWithdrawn` | `(streamId,caller,to,amount)`             | Called when the sender or an an approved NFT operator withdraws from the stream. |

The recipient need not implement all hooks.

### Sender

And these are the hooks that can be implemented by a sender contract:

| Hook               | Arguments                                 | Description                                        |
| :----------------- | :---------------------------------------- | :------------------------------------------------- |
| `onStreamCanceled` | `(streamId,senderAmount,recipientAmount)` | Called when the stream is cancelled by the sender. |

### Sample Implementation

### Recipient

```solidity reference title="Recipient Hooks Implementation"
https://github.com/sablierhq/examples/blob/28dceb/v2/core/RecipientHooks.sol
```

### Sender

```solidity reference title="Sender Hooks Implementation"
https://github.com/sablierhq/examples/blob/28dceb/v2/core/SenderHooks.sol
```

## Error Management

:::danger

Reverts in your hooks will NOT be bubbled up. If your hook reverts, the original transaction will go through, but any
state changes made by your hook will be reverted.

:::
