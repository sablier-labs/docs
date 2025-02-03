# ISablierLockupRecipient

[Git Source](https://github.com/sablier-labs/lockup/blob/463278dbb461b1733d6424cf0aeee3b8d6bc036a/src/interfaces/ISablierLockupRecipient.sol)

**Inherits:** IERC165

Interface for recipient contracts capable of reacting to cancellations and withdrawals. For this to be able to hook into
Sablier, it must fully implement this interface and it must have been allowlisted by the Lockup contract's admin.

_See [IERC165-supportsInterface](https://eips.ethereum.org/EIPS/eip-165#supportsinterface). The implementation MUST
implement the {IERC165-supportsInterface} method, which MUST return `true` when called with `0xf8ee98d3`, i.e.
`type(ISablierLockupRecipient).interfaceId`._

## Functions

### onSablierLockupCancel

Responds to cancellations.

Notes:

- The function MUST return the selector `ISablierLockupRecipient.onSablierLockupCancel.selector`.
- If this function reverts, the execution in the Lockup contract will revert as well.

```solidity
function onSablierLockupCancel(
    uint256 streamId,
    address sender,
    uint128 senderAmount,
    uint128 recipientAmount
)
    external
    returns (bytes4 selector);
```

**Parameters**

| Name              | Type      | Description                                                                                                 |
| ----------------- | --------- | ----------------------------------------------------------------------------------------------------------- |
| `streamId`        | `uint256` | The ID of the canceled stream.                                                                              |
| `sender`          | `address` | The stream's sender, who canceled the stream.                                                               |
| `senderAmount`    | `uint128` | The amount of tokens refunded to the stream's sender, denoted in units of the token's decimals.             |
| `recipientAmount` | `uint128` | The amount of tokens left for the stream's recipient to withdraw, denoted in units of the token's decimals. |

**Returns**

| Name       | Type     | Description                                                |
| ---------- | -------- | ---------------------------------------------------------- |
| `selector` | `bytes4` | The selector of this function needed to validate the hook. |

### onSablierLockupWithdraw

Responds to withdrawals triggered by any address except the contract implementing this interface.

Notes:

- The function MUST return the selector `ISablierLockupRecipient.onSablierLockupWithdraw.selector`.
- If this function reverts, the execution in the Lockup contract will revert as well.

```solidity
function onSablierLockupWithdraw(
    uint256 streamId,
    address caller,
    address to,
    uint128 amount
)
    external
    returns (bytes4 selector);
```

**Parameters**

| Name       | Type      | Description                                                               |
| ---------- | --------- | ------------------------------------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream being withdrawn from.                                |
| `caller`   | `address` | The original `msg.sender` address that triggered the withdrawal.          |
| `to`       | `address` | The address receiving the withdrawn tokens.                               |
| `amount`   | `uint128` | The amount of tokens withdrawn, denoted in units of the token's decimals. |

**Returns**

| Name       | Type     | Description                                                |
| ---------- | -------- | ---------------------------------------------------------- |
| `selector` | `bytes4` | The selector of this function needed to validate the hook. |
