# ISablierV2LockupRecipient

[Git Source](https://github.com/sablierhq/v2-core/blob/8bd57ebb31fddf6ef262477e5a378027db8b85d8/docs/contracts/v2/reference/core/interfaces)

Interface for recipient contracts that can react to cancellations and withdrawals.

_Implementing this interface is entirely optional. If the recipient contract does not implement this interface, the
function execution will not revert. Furthermore, if the recipient contract implements this interface only partially, the
function execution will not revert either._

## Functions

### onStreamCanceled

Reacts to the cancellation of a stream. Sablier V2 invokes this function on the recipient after a cancellation triggered
by the sender.

Notes:

- This function may revert, but the Sablier contract will always ignore the revert.

```solidity
function onStreamCanceled(uint256 streamId, uint128 senderAmount, uint128 recipientAmount) external;
```

**Parameters**

| Name              | Type      | Description                                                                        |
| ----------------- | --------- | ---------------------------------------------------------------------------------- |
| `streamId`        | `uint256` | The id of the stream that has been canceled.                                       |
| `senderAmount`    | `uint128` | The amount of assets returned to the sender, in units of the asset's decimals.     |
| `recipientAmount` | `uint128` | The amount of assets withdrawn to the recipient, in units of the asset's decimals. |

### onStreamRenounced

Reacts to the renouncement of a stream. Sablier V2 invokes this function on the recipient after a renouncement triggered
by the sender.

Notes:

- This function may revert, but the Sablier contract will always ignore the revert.

```solidity
function onStreamRenounced(uint256 streamId) external;
```

**Parameters**

| Name       | Type      | Description                                   |
| ---------- | --------- | --------------------------------------------- |
| `streamId` | `uint256` | The id of the stream that has been renounced. |

### onStreamWithdrawn

Reacts to a withdrawal from a stream.

_Sablier V2 invokes this function on the recipient after a withdrawal triggered by the sender or an approved operator.
This function may revert, but the Sablier contract will always ignore the revert._

```solidity
function onStreamWithdrawn(uint256 streamId, address caller, address to, uint128 amount) external;
```

**Parameters**

| Name       | Type      | Description                                                                        |
| ---------- | --------- | ---------------------------------------------------------------------------------- |
| `streamId` | `uint256` | The id of the stream that has been withdrawn from.                                 |
| `caller`   | `address` | The address of the original `msg.sender` address which triggered the cancellation. |
| `to`       | `address` | The address that has received the withdrawn assets.                                |
| `amount`   | `uint128` | The amount of assets that have been withdrawn, in units of the asset's decimals.   |
