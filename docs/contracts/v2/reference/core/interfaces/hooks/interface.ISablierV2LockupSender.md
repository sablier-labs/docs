# ISablierV2LockupSender

[Git Source](https://github.com/sablierhq/v2-core/blob/8bfc7785e498ccde9a6d39ad2fc8998d9077f979/docs/contracts/v2/reference/core/interfaces)

Interface for Sablier V2 sender contracts that can react to cancellations.

_Implementing this interface is entirely optional. If a sender contract does not implement this interface, the function
execution will not revert._

## Functions

### onStreamCanceled

Reacts to the cancellation of a stream. Sablier V2 invokes this function on the sender after a cancellation triggered by
the recipient.

\*Notes:

- This function may revert, but the {SablierV2Lockup} contract will always ignore the revert.\*

```solidity
function onStreamCanceled(uint256 streamId, uint128 senderAmount, uint128 recipientAmount) external;
```

**Parameters**

| Name              | Type      | Description                                                                        |
| ----------------- | --------- | ---------------------------------------------------------------------------------- |
| `streamId`        | `uint256` | The id of the stream that has been canceled.                                       |
| `senderAmount`    | `uint128` | The amount of assets returned to the sender, in units of the asset's decimals.     |
| `recipientAmount` | `uint128` | The amount of assets withdrawn to the recipient, in units of the asset's decimals. |
