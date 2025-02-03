---
id: "hooks"
sidebar_position: 5
title: "Implement Hooks"
---

Hooks provide an interface for recipient contracts to react upon cancellations and withdrawals. In order to allow your
contract to be able to hook into Lockup, you must implement this interface and it must have been allowlisted by the
Lockup contract's admin.

:::info

[`allowToHook`](/reference/lockup/contracts/interfaces/interface.ISablierLockupBase#allowtohook) is an irreversible
operation, i.e., once a contract has been added to the allowlist, it can never be removed. This is to ensure stronger
immutability and decentralization guarantees. Once a recipient contract is allowlisted, integrators should NOT have to
trust us to keep their contract on the allowlist.

:::

In this guide, we will explain how to implement [hooks](/concepts/lockup/hooks) in your smart contract to allow
interacting with Lockup streams.

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
[here](/reference/lockup/contracts/interfaces/interface.ISablierLockupRecipient).

:::tip

Looking to get on the allowlist? Reach out to us on [Discord](https://discord.sablier.com).

:::

### Sample Implementations

#### Recipient

```solidity reference title="Sablier Lockup Recipient Hooks"
https://github.com/sablier-labs/examples/blob/main/lockup/RecipientHooks.sol
```
