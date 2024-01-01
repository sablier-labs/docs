# ISablierV2LockupRecipient

[Git Source](https://github.com/sablier-labs/v2-core/blob/a4bf69cf7024006b9a324eef433f20b74597eaaf/src/interfaces/hooks/ISablierV2LockupRecipient.sol)

Interface for recipient contracts capable of reacting to cancellations, renouncements, and withdrawals.

_Implementation of this interface is optional. If a recipient contract doesn't implement this interface or implements it
partially, function execution will not revert._

## Functions

### onStreamCanceled

Responds to sender-triggered cancellations.

Notes:

- This function may revert, but the Sablier contract will ignore the revert.

```solidity
function onStreamCanceled(uint256 streamId, address sender, uint128 senderAmount, uint128 recipientAmount) external;
```

**Parameters**

| Name              | Type      | Description                                                                                                 |
| ----------------- | --------- | ----------------------------------------------------------------------------------------------------------- |
| `streamId`        | `uint256` | The id of the canceled stream.                                                                              |
| `sender`          | `address` | The stream's sender, who canceled the stream.                                                               |
| `senderAmount`    | `uint128` | The amount of assets refunded to the stream's sender, denoted in units of the asset's decimals.             |
| `recipientAmount` | `uint128` | The amount of assets left for the stream's recipient to withdraw, denoted in units of the asset's decimals. |

### onStreamRenounced

Responds to renouncements.

Notes:

- This function may revert, but the Sablier contract will ignore the revert.

```solidity
function onStreamRenounced(uint256 streamId) external;
```

**Parameters**

| Name       | Type      | Description                     |
| ---------- | --------- | ------------------------------- |
| `streamId` | `uint256` | The id of the renounced stream. |

### onStreamWithdrawn

Responds to withdrawals triggered by either the stream's sender or an approved third party.

Notes:

- This function may revert, but the Sablier contract will ignore the revert.

```solidity
function onStreamWithdrawn(uint256 streamId, address caller, address to, uint128 amount) external;
```

**Parameters**

| Name       | Type      | Description                                                               |
| ---------- | --------- | ------------------------------------------------------------------------- |
| `streamId` | `uint256` | The id of the stream being withdrawn from.                                |
| `caller`   | `address` | The original `msg.sender` address that triggered the withdrawal.          |
| `to`       | `address` | The address receiving the withdrawn assets.                               |
| `amount`   | `uint128` | The amount of assets withdrawn, denoted in units of the asset's decimals. |
