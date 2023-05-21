# ISablierV2LockupSender

[Git Source](https://github.com/sablier-labs/v2-core/blob/b048c0e28a5120b396c3eb3cdd0bc4e8784dc155/docs/contracts/v2/reference/core/interfaces)

Interface for sender contracts capable of reacting to cancellations.

_Implementation of this interface is optional. If a sender contract doesn't implement this interface, function execution
will not revert._

## Functions

### onStreamCanceled

Responds to recipient-triggered cancellations.

Notes:

- This function may revert, but the Sablier contract will ignore the revert.

```solidity
function onStreamCanceled(
    uint256 streamId,
    address recipient,
    uint128 senderAmount,
    uint128 recipientAmount
)
    external;
```

**Parameters**

| Name              | Type      | Description                                                                                                 |
| ----------------- | --------- | ----------------------------------------------------------------------------------------------------------- |
| `streamId`        | `uint256` | The id of the canceled stream.                                                                              |
| `recipient`       | `address` | The stream's recipient, who canceled the stream.                                                            |
| `senderAmount`    | `uint128` | The amount of assets refunded to the stream's sender, denoted in units of the asset's decimals.             |
| `recipientAmount` | `uint128` | The amount of assets left for the stream's recipient to withdraw, denoted in units of the asset's decimals. |
