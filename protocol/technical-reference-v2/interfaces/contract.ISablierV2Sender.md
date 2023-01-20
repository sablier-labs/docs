# ISablierV2Sender
[Git Source](https://github.com/sablierhq/v2-core/blob/4918aca82c552a62619e2c71f2241abf1e877f72/protocol/technical-reference-v2/interfaces)

Interface for Sablier V2 sender contracts that can react to cancellations.

*Implementing this interface is entirely optional. If a sender contract does not implement this interface,
the function execution will not revert.*


## Functions
### onStreamCanceled

Reacts to the cancellation of a stream. Sablier V2 invokes this function on the sender after a
cancellation triggered by the recipient.

*Notes:
- This function may revert, but Sablier V2 will always ignore the revert.

:::



```solidity
function onStreamCanceled(uint256 streamId, address caller, uint128 recipientAmount, uint128 senderAmount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream that was canceled.|
|`caller`|`address`|The address of the original `msg.sender` address that triggered the cancellation.|
|`recipientAmount`|`uint128`|The amount of tokens withdrawn to the recipient, in units of the token's decimals.|
|`senderAmount`|`uint128`|The amount of tokens returned to the sender, in units of the token's decimals.|


