---
id: "hooks"
sidebar_position: 6
title: "Implement Hooks"
---

Hooks provide an interface for recipient contracts to react upon cancellations and withdrawals. In order to allow your
contract to be able to hook into Sablier, you must implement this interface and it must have been allowlisted by the
Lockup contract's admin.

:::info

[`allowToHook`](/contracts/v2/reference/core/interfaces/interface.ISablierV2Lockup#allowtohook) is an irreversible
operation, i.e., once a contract has been added to the allowlist, it can never be removed. This is to ensure stronger
immutability and decentralization guarantees. Once a recipient contract is allowlisted, integrators should NOT have to
trust us to keep their contract on the allowlist.

:::

In this guide, we will explain how to implement [hooks](/concepts/protocol/hooks) in your smart contract to allow
interacting with Sablier streams.

### Overview

### Requirements

The recipient contract should implement the `{IERC165-supportsInterface}` method, which MUST return `true` when called
with `0xf8ee98d3`, which is the interface ID for `ISablierLockupRecipient`.

```solidity
function supportsInterface(bytes4 interfaceId)
  public
  view
  override(IERC165, ERC165)
  returns (bool) {
    return interfaceId == 0xf8ee98d3;
}
```

### Hook Functions

These are the hooks that can be implemented by a recipient contract:

| Hook                      | Arguments                                           | Return value      | Description                                         |
| ------------------------- | --------------------------------------------------- | ----------------- | --------------------------------------------------- |
| `onSablierLockupCancel`   | `(streamId, sender, senderAmount, recipientAmount)` | function selector | Called when the stream is canceled by the sender.   |
| `onSablierLockupWithdraw` | `(streamId, caller, to, amount)`                    | function selector | Called when an amount is withdrawn from the stream. |

The complete interface for `ISablierLockupRecipient` can be found
[here](/contracts/v2/reference/core/interfaces/interface.ISablierLockupRecipient).

:::tip

Looking to get on the allowlist? Reach out to us on [Discord](https://discord.gg/bSwRCwWRsT).

:::

### Sample Implementations

#### Recipient

```solidity reference title="Sablier Recipient Hooks"
https://github.com/sablier-labs/examples/blob/main/v2/core/RecipientHooks.sol
```
