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
| `onSablierLockupCancel`   | `(streamId,sender,senderAmount,recipientAmount)` | Called when the stream is canceled by the sender.   |
| `onSablierLockupWithdraw` | `(streamId,caller,to,amount)`                    | Called when an amount is withdrawn from the stream. |

### Sample Implementations

#### Recipient

```solidity reference title="Sablier Recipient Hooks"
https://github.com/sablier-labs/examples/blob/main/v2/core/RecipientHooks.sol
```
