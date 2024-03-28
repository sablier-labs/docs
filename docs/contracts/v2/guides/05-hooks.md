---
id: "hooks"
sidebar_position: 6
title: "Implement Hooks"
---

In this guide, we will explain how to implement [hooks](/concepts/protocol/hooks) in your on-chain integration of
Sablier.

### Overview

### Recipient

These are the hooks that can be implemented by a recipient contract:

| Hook                      | Arguments                                        | Description                                         |
| ------------------------- | ------------------------------------------------ | --------------------------------------------------- |
| `onLockupStreamCanceled`  | `(streamId,sender,senderAmount,recipientAmount)` | Called when the stream is canceled by the sender.   |
| `onLockupStreamRenounced` | `(streamId)`                                     | Called when the stream is renounced by the sender.  |
| `onLockupStreamWithdrawn` | `(streamId,caller,to,amount)`                    | Called when an amount is withdrawn from the stream. |

### Sender

These are the hooks that can be implemented by a sender contract:

| Hook                      | Arguments                     | Description                                         |
| ------------------------- | ----------------------------- | --------------------------------------------------- |
| `onLockupStreamWithdrawn` | `(streamId,caller,to,amount)` | Called when an amount is withdrawn from the stream. |

:::caution

While it isn't mandatory, we highly recommend implementing the `onLockupStreamCanceled` and the
`onLockupStreamWithdrawn` hooks. Doing so enables your contract to keep its internal accounting updated accurately.

:::

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
