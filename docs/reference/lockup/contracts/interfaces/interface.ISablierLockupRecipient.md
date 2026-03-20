# ISablierLockupRecipient

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/003a71932c0e26e767a02c21205a077469406ac8/src/interfaces/ISablierLockupRecipient.sol)

**Inherits:** IERC165

**Title:** ISablierLockupRecipient

Interface for recipient contracts capable of reacting to cancellations and withdrawals. For this to be able to hook into
Sablier, it must fully implement this interface and it must have been allowlisted in the Lockup contract.

See
[IERC165-supportsInterface](/node_modules/@sablier/evm-utils/docs/reference/lockup/contracts/contract.SablierComptroller.md#supportsinterface).
The implementation MUST implement the
[IERC165-supportsInterface](/node_modules/@sablier/evm-utils/docs/reference/lockup/contracts/contract.SablierComptroller.md#supportsinterface)
method, which MUST return `true` when called with `0xf8ee98d3`, i.e. `type(ISablierLockupRecipient).interfaceId`.

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
