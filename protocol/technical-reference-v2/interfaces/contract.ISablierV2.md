# ISablierV2
[Git Source](https://github.com/sablierhq/v2-core/blob/4918aca82c552a62619e2c71f2241abf1e877f72/protocol/technical-reference-v2/interfaces)

**Inherits:**
IAdminable, IERC721

The common interface between all Sablier V2 streaming contracts.


## Functions
### MAX_FEE

The maximum fee that can be charged by either the protocol or a broker, as an UD60x18 number
where 100% = 1e18.

*This is initialized at construction time and cannot be changed later.*


```solidity
function MAX_FEE() external view returns (UD60x18);
```

### comptroller

Queries the address of the SablierV2Comptroller contract. The comptroller is in charge of the Sablier V2
protocol configuration, handling such values as the protocol fees.


```solidity
function comptroller() external view returns (ISablierV2Comptroller);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`ISablierV2Comptroller`|The address of the SablierV2Comptroller contract.|


### getDepositAmount

Queries the amount deposited in the stream, in units of the token's decimals.


```solidity
function getDepositAmount(uint256 streamId) external view returns (uint128 depositAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getProtocolRevenues

Queries the protocol revenues accrued for the provided token, in units of the token's decimals.


```solidity
function getProtocolRevenues(IERC20 token) external view returns (uint128 protocolRevenues);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`IERC20`|The address of the token to make the query for.|


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
token's decimals.


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


### getStopTime

Queries the stop time of the stream.


```solidity
function getStopTime(uint256 streamId) external view returns (uint40 stopTime);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getERC20Token

Queries the ERC-20 token used for streaming.


```solidity
function getERC20Token(uint256 streamId) external view returns (IERC20 token);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`token`|`IERC20`|The ERC-20 token used for streaming.|


### getStreamedAmount

Calculates the amount that has been streamed to the recipient, in units of the token's decimals.


```solidity
function getStreamedAmount(uint256 streamId) external view returns (uint128 streamedAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getWithdrawableAmount

Calculates the amount that the recipient can withdraw from the stream, in units of the token's decimals.


```solidity
function getWithdrawableAmount(uint256 streamId) external view returns (uint128 withdrawableAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getWithdrawnAmount

Queries the amount withdrawn from the stream, in units of the token's decimals.


```solidity
function getWithdrawnAmount(uint256 streamId) external view returns (uint128 withdrawnAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### isCancelable

Checks whether the stream is cancelable or not.


```solidity
function isCancelable(uint256 streamId) external view returns (bool result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### isEntity

Checks whether the stream entity exists or not.


```solidity
function isEntity(uint256 streamId) external view returns (bool result);
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
- The purpose of this function is to make the integration of Sablier V2 easier. Because the burning of
the NFT is separated from the deletion of the stream entity from the mapping, third-party contracts don't
have to constantly check for the existence of the NFT. They can decide to burn the NFT themselves, or not.
Requirements:
- `streamId` must point to a deleted stream.
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

Cancels the stream and transfers any remaining amounts to the sender and the recipient.

 :::note

Emits a `Cancel` vent.
Notes:
- This function will attempt to call a hook on either the sender or the recipient, depending upon who the
`msg.sender` is, and if the sender and the recipient are contracts.
Requirements:
- `streamId` must point to an existent stream.
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

Cancels multiple streams and transfers any remaining amounts to the sender and the recipient.

 :::note

Emits multiple `Cancel` vents.
Requirements:
- Each stream id in `streamIds` must point to an existent stream.
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


### claimProtocolRevenues

Claims all protocol revenues accrued for the provided token.

 :::note

Emits a `ClaimProtocolRevenues` vent.
Requirements:
- The caller must be the owner of the contract.

:::



```solidity
function claimProtocolRevenues(IERC20 token) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`IERC20`|The address of the token to claim the protocol revenues for.|


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

Emits a `Renounce` vent.
Requirements:
- `streamId` must point to an existent stream.
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


### setComptroller

Sets the SablierV2Comptroller contract. The comptroller is in charge of the protocol configuration,
handling such values as the protocol fees.

 :::note

Emits a `SetComptroller` vent.
Notes:
- It is not an error to set the same comptroller.
Requirements:
- The caller must be the admin of the contract.

:::



```solidity
function setComptroller(ISablierV2Comptroller newComptroller) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newComptroller`|`ISablierV2Comptroller`|The address of the new SablierV2Comptroller contract.|


### withdraw

Withdraws the provided amount of tokens from the stream to the provide address `to`.

 :::note

Emits a `Withdraw` nd a `Transfer` vent.
Notes:
- This function will attempt to call a hook on the recipient of the stream, if the recipient is a contract.
Requirements:
- `streamId` must point to an existent stream.
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
|`to`|`address`|The address that receives the withdrawn tokens.|
|`amount`|`uint128`|The amount to withdraw, in units of the token's decimals.|


### withdrawMax

Withdraws the maximum withdrawable amount from the stream to the provided address `to`.

 :::note

Emits a `Withdraw` nd a `Transfer` vent.
Notes:
- All from `withdraw`.
Requirements:
- All from `withdraw`.

:::



```solidity
function withdrawMax(uint256 streamId, address to) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to withdraw.|
|`to`|`address`|The address that receives the withdrawn tokens.|


### withdrawMultiple

Withdraws tokens from multiple streams to the provided address `to`.

 :::note

Emits multiple `Withdraw` nd `Transfer` vents.
Notes:
- It is not an error if one of the stream ids points to a non-existent stream.
- This function will attempt to call a hook on the recipient of each stream, if that recipient is a contract.
Requirements:
- The count of `streamIds` must match the count of `amounts`.
- Each stream id in `streamIds` must point to an existent stream.
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
|`to`|`address`|The address that receives the withdrawn tokens, if the `msg.sender` is not the stream sender.|
|`amounts`|`uint128[]`|The amounts to withdraw, in units of the token's decimals.|


