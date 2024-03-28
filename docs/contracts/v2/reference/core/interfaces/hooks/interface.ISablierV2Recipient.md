# ISablierV2Recipient

[Git Source](https://github.com/sablier-labs/v2-core/blob/e080f20eafef0fc18049bcc77f1694db043860f1/src/interfaces/hooks/ISablierV2Recipient.sol)

Interface for recipient contracts capable of reacting to cancellations, renouncements, and withdrawals.

_Implementation of this interface is optional. If a recipient contract doesn't implement this interface or implements it
partially, function execution will not revert._

## Functions

### onLockupStreamCanceled

Responds to sender-triggered cancellations.

Notes:

- This function may revert, but the Sablier contract will ignore the revert.

```solidity
function onLockupStreamCanceled(
    uint256 streamId,
    address sender,
    uint128 senderAmount,
    uint128 recipientAmount
)
    external;
```

**Parameters**

| Name              | Type      | Description                                                                                                 |
| ----------------- | --------- | ----------------------------------------------------------------------------------------------------------- |
| `streamId`        | `uint256` | The id of the canceled stream.                                                                              |
| `sender`          | `address` | The stream's sender, who canceled the stream.                                                               |
| `senderAmount`    | `uint128` | The amount of assets refunded to the stream's sender, denoted in units of the asset's decimals.             |
| `recipientAmount` | `uint128` | The amount of assets left for the stream's recipient to withdraw, denoted in units of the asset's decimals. |

### onLockupStreamRenounced

Responds to renouncements.

Notes:

- This function may revert, but the Sablier contract will ignore the revert.

```solidity
function onLockupStreamRenounced(uint256 streamId) external;
```

**Parameters**

| Name       | Type      | Description                     |
| ---------- | --------- | ------------------------------- |
| `streamId` | `uint256` | The id of the renounced stream. |

### onLockupStreamWithdrawn

Responds to withdrawals triggered by any address except the contract implementing this interface.

Notes:

- This function may revert, but the Sablier contract will ignore the revert.

```solidity
function onLockupStreamWithdrawn(uint256 streamId, address caller, address to, uint128 amount) external;
```

**Parameters**

| Name       | Type      | Description                                                               |
| ---------- | --------- | ------------------------------------------------------------------------- |
| `streamId` | `uint256` | The id of the stream being withdrawn from.                                |
| `caller`   | `address` | The original `msg.sender` address that triggered the withdrawal.          |
| `to`       | `address` | The address receiving the withdrawn assets.                               |
| `amount`   | `uint128` | The amount of assets withdrawn, denoted in units of the asset's decimals. |
