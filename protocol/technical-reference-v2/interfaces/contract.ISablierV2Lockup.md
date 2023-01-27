# ISablierV2Lockup
[Git Source](https://github.com/sablierhq/v2-core/blob/cc0ad3978d3901ec331d3c24fbc36ee2b5a297c0/protocol/technical-reference-v2/interfaces)

**Inherits:**
[ISablierV2](/protocol/technical-reference-v2/interfaces/contract.ISablierV2.md), IERC721Metadata

The common interface between all Sablier V2 lockup streaming contracts.


## Functions
### getAsset

Queries the address of the ERC-20 asset used for streaming.


```solidity
function getAsset(uint256 streamId) external view returns (IERC20 asset);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`IERC20`|The contract address of the ERC-20 asset used for streaming.|


### getDepositAmount

Queries the amount deposited in the stream, in units of the asset's decimals.


```solidity
function getDepositAmount(uint256 streamId) external view returns (uint128 depositAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getRecipient

Queries the recipient of the stream.


```solidity
function getRecipient(uint256 streamId) external view returns (address recipient);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getReturnableAmount

Calculates the amount that the sender would be returned if the stream was canceled, in units of the
asset's decimals.


```solidity
function getReturnableAmount(uint256 streamId) external view returns (uint128 returnableAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getSender

Queries the sender of the stream.


```solidity
function getSender(uint256 streamId) external view returns (address sender);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getStartTime

Queries the start time of the stream.


```solidity
function getStartTime(uint256 streamId) external view returns (uint40 startTime);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getStatus

Queries the status of the stream.


```solidity
function getStatus(uint256 streamId) external view returns (Status status);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getStopTime

Queries the stop time of the stream.


```solidity
function getStopTime(uint256 streamId) external view returns (uint40 stopTime);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getStreamedAmount

Calculates the amount that has been streamed to the recipient, in units of the asset's decimals.


```solidity
function getStreamedAmount(uint256 streamId) external view returns (uint128 streamedAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getWithdrawableAmount

Calculates the amount that the recipient can withdraw from the stream, in units of the asset's decimals.


```solidity
function getWithdrawableAmount(uint256 streamId) external view returns (uint128 withdrawableAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getWithdrawnAmount

Queries the amount withdrawn from the stream, in units of the asset's decimals.


```solidity
function getWithdrawnAmount(uint256 streamId) external view returns (uint128 withdrawnAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### isCancelable

Checks whether the stream is cancelable or not.
Notes:
- Always returns `false` if the stream is not active.


```solidity
function isCancelable(uint256 streamId) external view returns (bool result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### burn

Burns the NFT associated with the stream.

:::note

Emits a `Transfer` vent.
Notes:
- The purpose of this function is to make the integration of Sablier V2 easier. Third-party contracts don't
have to constantly check for the existence of the NFT. They can decide to burn the NFT themselves, or not.
Requirements:
- `streamId` must point to a stream that is either canceled or depleted.
- The NFT must exist.
- `msg.sender` must be either an approved operator or the owner of the NFT.

:::



```solidity
function burn(uint256 streamId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream NFT to burn.|


### cancel

Cancels multiple streams and. for each stream, transfers any remaining assets to the sender and
the recipient.

:::note

Emits a `CancelLockupStream` vent.
Notes:
- This function will attempt to call a hook on either the sender or the recipient, depending upon who the
`msg.sender` is, and if the sender and the recipient are contracts.
Requirements:
- `streamId` must point to an active stream.
- `msg.sender` must be either the sender of the stream or the recipient of the stream (also known as the
the owner of the NFT).
- The stream must be cancelable.

:::



```solidity
function cancel(uint256 streamId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to cancel.|


### cancelMultiple

Cancels multiple streams and transfers any remaining assets to the sender and the recipient.

:::note

Emits multiple `CancelLockupStream` vents.
Notes:
- It is not an error if one of the stream ids points to a stream that is not active or is active but
is not cancelable.
- This function will attempt to call a hook on either the sender or the recipient of each stream.
Requirements:
- Each stream id in `streamIds` must point to an active stream.
- `msg.sender` must be either the sender of the stream or the recipient of the stream (also known as the
owner of the NFT) of every stream.
- Each stream must be cancelable.

:::



```solidity
function cancelMultiple(uint256[] calldata streamIds) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamIds`|`uint256[]`|The ids of the streams to cancel.|


### nextStreamId

Counter for stream ids.


```solidity
function nextStreamId() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The next stream id.|


### renounce

Makes the stream non-cancelable. This is an irreversible operation.

:::note

Emits a `RenounceLockupStream` vent.
Requirements:
- `streamId` must point to an active stream.
- `msg.sender` must be the sender.
- The stream must not be already non-cancelable.

:::



```solidity
function renounce(uint256 streamId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to renounce.|


### withdraw

Withdraws the provided amount of assets from the stream to the provided address `to`.

:::note

Emits a `WithdrawFromLockupStream` nd a `Transfer` vent.
Notes:
- This function will attempt to call a hook on the recipient of the stream, if the recipient is a contract.
Requirements:
- `streamId` must point to an active stream.
- `msg.sender` must be the sender of the stream, an approved operator, or the owner of the NFT (also known
as the recipient of the stream).
- `to` must be the recipient if `msg.sender` is the sender of the stream.
- `amount` must not be zero and must not exceed the withdrawable amount.

:::



```solidity
function withdraw(uint256 streamId, address to, uint128 amount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to withdraw.|
|`to`|`address`|The address that receives the withdrawn assets.|
|`amount`|`uint128`|The amount to withdraw, in units of the asset's decimals.|


### withdrawMax

Withdraws the maximum withdrawable amount from the stream to the provided address `to`.

:::note

Emits a `WithdrawFromLockupStream` nd a `Transfer` vent.
Notes:
- All from `withdraw}.
Requirements:
- All from `withdraw}.

:::



```solidity
function withdrawMax(uint256 streamId, address to) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to withdraw.|
|`to`|`address`|The address that receives the withdrawn assets.|


### withdrawMultiple

Withdraws assets from multiple streams to the provided address `to`.

:::note

Emits multiple `WithdrawFromLockupStream` nd `Transfer` vents.
Notes:
- It is not an error if one of the stream ids points to a stream that is not active.
- This function will attempt to call a hook on the recipient of each stream.
Requirements:
- The count of `streamIds` must match the count of `amounts`.
- `msg.sender` must be either the recipient of the stream (a.k.a the owner of the NFT) or an approved operator.
- Each amount in `amounts` must not be zero and must not exceed the withdrawable amount.

:::



```solidity
function withdrawMultiple(uint256[] calldata streamIds, address to, uint128[] calldata amounts) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamIds`|`uint256[]`|The ids of the streams to withdraw.|
|`to`|`address`|The address that receives the withdrawn assets, if the `msg.sender` is not the stream sender.|
|`amounts`|`uint128[]`|The amounts to withdraw, in units of the asset's decimals.|


