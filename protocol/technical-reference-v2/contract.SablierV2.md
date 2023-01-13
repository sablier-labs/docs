# SablierV2
[Git Source](https://github.com/sablierhq/v2-core/blob/71a38f2401905d2762c14a7b36c2334909bdb760/src/SablierV2.sol)

**Inherits:**
Adminable, [ISablierV2](/protocol/technical-reference-v2/interfaces/contract.ISablierV2.md)

*Abstract contract implementing common logic. Implements the ISablierV2 interface.*


## State Variables
### MAX_FEE
The maximum fee that can be charged by either the protocol or a broker, as an UD60x18 number
where 100% = 1e18.

*This is initialized at construction time and cannot be changed later.*


```solidity
UD60x18 public immutable override MAX_FEE;
```


### comptroller
Queries the address of the SablierV2Comptroller contract. The comptroller is in charge of the Sablier V2
protocol configuration, handling such values as the protocol fees.


```solidity
ISablierV2Comptroller public override comptroller;
```


### nextStreamId
Counter for stream ids.


```solidity
uint256 public override nextStreamId;
```


### _protocolRevenues
*Protocol revenues mapped by token addresses.*


```solidity
mapping(IERC20 => uint128) internal _protocolRevenues;
```


## Functions
### isAuthorizedForStream

Checks that `msg.sender` is the sender of the stream, the recipient of the stream (also known as
the owner of the NFT), or an approved operator.


```solidity
modifier isAuthorizedForStream(uint256 streamId);
```

### onlySenderOrRecipient

Checks that `msg.sender` is either the sender of the stream or the recipient of the stream (also known
as the owner of the NFT).


```solidity
modifier onlySenderOrRecipient(uint256 streamId);
```

### streamExists

*Checks that `streamId` points to a stream that exists.*


```solidity
modifier streamExists(uint256 streamId);
```

### constructor


```solidity
constructor(ISablierV2Comptroller initialComptroller, UD60x18 maxFee);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`initialComptroller`|`ISablierV2Comptroller`|The address of the SablierV2Comptroller contract.|
|`maxFee`|`UD60x18`|The maximum fee that can be charged by either the protocol or a broker, as an UD60x18 number where 100% = 1e18.|


### getProtocolRevenues

Queries the protocol revenues accrued for the provided token, in units of the token's decimals.


```solidity
function getProtocolRevenues(IERC20 token) external view override returns (uint128 protocolRevenues);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`IERC20`|The address of the token to make the query for.|


### getRecipient

Queries the recipient of the stream.


```solidity
function getRecipient(uint256 streamId) public view virtual override returns (address recipient);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### isCancelable

Checks whether the stream is cancelable or not.


```solidity
function isCancelable(uint256 streamId) public view virtual override returns (bool result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### isEntity

Checks whether the stream entity exists or not.


```solidity
function isEntity(uint256 streamId) public view virtual override returns (bool result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### burn

Burns the NFT associated with the stream.

*Emits a {Transfer} event.
Notes:
- The purpose of this function is to make the integration of Sablier V2 easier. Because the burning of
the NFT is separated from the deletion of the stream entity from the mapping, third-party contracts don't
have to constantly check for the existence of the NFT. They can decide to burn the NFT themselves, or not.
Requirements:
- `streamId` must point to a deleted stream.
- The NFT must exist.
- `msg.sender` must be either an approved operator or the owner of the NFT.*


```solidity
function burn(uint256 streamId) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream NFT to burn.|


### cancel

Cancels the stream and transfers any remaining amounts to the sender and the recipient.

*Emits a {Cancel} event.
Notes:
- This function will attempt to call a hook on either the sender or the recipient, depending upon who the
`msg.sender` is, and if the sender and the recipient are contracts.
Requirements:
- `streamId` must point to an existent stream.
- `msg.sender` must be either the sender of the stream or the recipient of the stream (also known as the
the owner of the NFT).
- The stream must be cancelable.*


```solidity
function cancel(uint256 streamId) external override streamExists(streamId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to cancel.|


### cancelMultiple

Cancels multiple streams and transfers any remaining amounts to the sender and the recipient.

*Emits multiple {Cancel} events.
Requirements:
- Each stream id in `streamIds` must point to an existent stream.
- `msg.sender` must be either the sender of the stream or the recipient of the stream (also known as the
owner of the NFT) of every stream.
- Each stream must be cancelable.*


```solidity
function cancelMultiple(uint256[] calldata streamIds) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamIds`|`uint256[]`|The ids of the streams to cancel.|


### claimProtocolRevenues

Claims all protocol revenues accrued for the provided token.

*Emits a {ClaimProtocolRevenues} event.
Requirements:
- The caller must be the owner of the contract.*


```solidity
function claimProtocolRevenues(IERC20 token) external override onlyAdmin;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`IERC20`|The address of the token to claim the protocol revenues for.|


### renounce

Makes the stream non-cancelable. This is an irreversible operation.

*Emits a {Renounce} event.
Requirements:
- `streamId` must point to an existent stream.
- `msg.sender` must be the sender.
- The stream must not be already non-cancelable.*


```solidity
function renounce(uint256 streamId) external override streamExists(streamId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to renounce.|


### setComptroller

Sets the SablierV2Comptroller contract. The comptroller is in charge of the protocol configuration,
handling such values as the protocol fees.

*Emits a {SetComptroller} event.
Notes:
- It is not an error to set the same comptroller.
Requirements:
- The caller must be the admin of the contract.*


```solidity
function setComptroller(ISablierV2Comptroller newComptroller) external override onlyAdmin;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newComptroller`|`ISablierV2Comptroller`|The address of the new SablierV2Comptroller contract.|


### withdraw

Withdraws tokens from the stream to the recipient's account.

*Emits a {Withdraw} and a {Transfer} event.
Notes:
- This function will attempt to call a hook on the recipient of the stream, if the recipient is a contract.
Requirements:
- `streamId` must point to an existent stream.
- `msg.sender` must be the sender of the stream, an approved operator, or the owner of the NFT (also known
as the recipient of the stream).
- `to` must be the recipient if `msg.sender` is the sender of the stream.
- `amount` must not be zero and must not exceed the withdrawable amount.*


```solidity
function withdraw(uint256 streamId, address to, uint128 amount)
    external
    override
    streamExists(streamId)
    isAuthorizedForStream(streamId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to withdraw.|
|`to`|`address`|The address that receives the withdrawn tokens, if the `msg.sender` is not the stream sender.|
|`amount`|`uint128`|The amount to withdraw, in units of the token's decimals.|


### withdrawMultiple

Withdraws tokens from multiple streams to the provided address `to`.

*Emits multiple {Withdraw} and {Transfer} events.
Notes:
- It is not an error if one of the stream ids points to a non-existent stream.
- This function will attempt to call a hook on the recipient of each stream, if that recipient is a contract.
Requirements:
- The count of `streamIds` must match the count of `amounts`.
- Each stream id in `streamIds` must point to an existent stream.
- `msg.sender` must be either the recipient of the stream (a.k.a the owner of the NFT) or an approved operator.
- Each amount in `amounts` must not be zero and must not exceed the withdrawable amount.*


```solidity
function withdrawMultiple(uint256[] calldata streamIds, address to, uint128[] calldata amounts) external override;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamIds`|`uint256[]`|The ids of the streams to withdraw.|
|`to`|`address`|The address that receives the withdrawn tokens, if the `msg.sender` is not the stream sender.|
|`amounts`|`uint128[]`|The amounts to withdraw, in units of the token's decimals.|


### _isApprovedOrOwner

Checks whether the spender is authorized to interact with the stream.

*Unlike the ERC-721 implementation, this function does not check whether the owner is the zero address.*


```solidity
function _isApprovedOrOwner(uint256 streamId, address spender) internal view virtual returns (bool isApprovedOrOwner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|
|`spender`|`address`|The spender to make the query for.|


### _isCallerStreamSender

Checks whether the `msg.sender` is the sender of the stream or not.


```solidity
function _isCallerStreamSender(uint256 streamId) internal view virtual returns (bool result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`result`|`bool`|Whether the `msg.sender` is the sender of the stream or not.|


### _burn

*See the documentation for the public functions that call this internal function.*


```solidity
function _burn(uint256 tokenId) internal virtual;
```

### _cancel

*See the documentation for the public functions that call this internal function.*


```solidity
function _cancel(uint256 streamId) internal virtual;
```

### _renounce

*See the documentation for the public functions that call this internal function.*


```solidity
function _renounce(uint256 streamId) internal virtual;
```

### _withdraw

*See the documentation for the public functions that call this internal function.*


```solidity
function _withdraw(uint256 streamId, address to, uint128 amount) internal virtual;
```

