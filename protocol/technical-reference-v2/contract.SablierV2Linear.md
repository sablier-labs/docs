# SablierV2Linear
[Git Source](https://github.com/sablierhq/v2-core/blob/71a38f2401905d2762c14a7b36c2334909bdb760/src/SablierV2Linear.sol)

**Inherits:**
[ISablierV2Linear](/protocol/technical-reference-v2/interfaces/contract.ISablierV2Linear.md), [SablierV2](/protocol/technical-reference-v2/contract.SablierV2.md), ERC721

*This contract implements the ISablierV2Linear interface.*


## State Variables
### _streams
*Sablier V2 linear streams mapped by unsigned integers.*


```solidity
mapping(uint256 => LinearStream) internal _streams;
```


## Functions
### constructor


```solidity
constructor(ISablierV2Comptroller initialComptroller, UD60x18 maxFee) SablierV2(initialComptroller, maxFee);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`initialComptroller`|`ISablierV2Comptroller`|The address of the SablierV2Comptroller contract.|
|`maxFee`|`UD60x18`|The maximum fee that can be charged by either the protocol or a broker, as an UD60x18 number where 100% = 1e18.|


### getCliffTime

Queries the cliff time of the stream.


```solidity
function getCliffTime(uint256 streamId) external view override returns (uint40 cliffTime);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getDepositAmount

Queries the amount deposited in the stream, in units of the token's decimals.


```solidity
function getDepositAmount(uint256 streamId) external view override returns (uint128 depositAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getERC20Token

Queries the ERC-20 token used for streaming.


```solidity
function getERC20Token(uint256 streamId) external view override returns (IERC20 token);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`token`|`IERC20`|The ERC-20 token used for streaming.|


### getRange

Queries the range of the stream, a struct that encapsulates (i) the start time of the stream,


```solidity
function getRange(uint256 streamId) external view returns (Range memory range);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getRecipient

Queries the recipient of the stream.


```solidity
function getRecipient(uint256 streamId) public view override(ISablierV2, SablierV2) returns (address recipient);
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
function getSender(uint256 streamId) external view override returns (address sender);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getStartTime

Queries the start time of the stream.


```solidity
function getStartTime(uint256 streamId) external view override returns (uint40 startTime);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getStopTime

Queries the stop time of the stream.


```solidity
function getStopTime(uint256 streamId) external view override returns (uint40 stopTime);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getStream

Queries the stream struct entity.


```solidity
function getStream(uint256 streamId) external view override returns (LinearStream memory stream);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getWithdrawableAmount

Calculates the amount that the recipient can withdraw from the stream, in units of the token's decimals.


```solidity
function getWithdrawableAmount(uint256 streamId) public view returns (uint128 withdrawableAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getWithdrawnAmount

Queries the amount withdrawn from the stream, in units of the token's decimals.


```solidity
function getWithdrawnAmount(uint256 streamId) external view override returns (uint128 withdrawnAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### isCancelable

Checks whether the stream is cancelable or not.


```solidity
function isCancelable(uint256 streamId) public view override(ISablierV2, SablierV2) returns (bool result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### isEntity

Checks whether the stream entity exists or not.


```solidity
function isEntity(uint256 streamId) public view override(ISablierV2, SablierV2) returns (bool result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### tokenURI


```solidity
function tokenURI(uint256 streamId) public view override streamExists(streamId) returns (string memory uri);
```

### createWithDurations

Creates a stream funded by `msg.sender` wrapped in an ERC-721 NFT, setting the start time to
`block.timestamp` and the stop time to `block.timestamp + duration`.

*Emits a {CreateLinearStream} and a {Transfer} event.
Requirements:
- All from `createWithRange`.*


```solidity
function createWithDurations(
    address sender,
    address recipient,
    uint128 grossDepositAmount,
    IERC20 token,
    bool cancelable,
    Durations calldata durations,
    Broker calldata broker
) external returns (uint256 streamId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|The address from which to stream the tokens with a cliff period, which will have the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.|
|`recipient`|`address`|The address toward which to stream the tokens.|
|`grossDepositAmount`|`uint128`|The gross amount of tokens to be deposited, inclusive of fees, in units of the token's decimals.|
|`token`|`IERC20`|The address of the ERC-20 token to use for streaming.|
|`cancelable`|`bool`|A boolean that indicates whether the stream will be cancelable or not.|
|`durations`|`Durations`|A struct that encapsulates (i) the duration of the cliff period and (ii) the total duration of the stream, both in seconds.|
|`broker`|`Broker`|An optional struct that encapsulates (i) the address of the broker that has helped create the stream and (ii) the percentage fee that the broker is paid from the gross deposit amount, as an UD60x18 number.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the newly created stream.|


### createWithRange

Creates a new stream funded by `msg.sender` wrapped in an ERC-721 NFT, setting the start time and the
stop time to the provided values.

*Emits a {CreateLinearStream} and a {Transfer} event.
Notes:
- As long as they are ordered, it is not an error to set a range in the past.
Requirements:
- `recipient` must not be the zero address.
- `grossDepositAmount` must not be zero.
- `range.start` must not be greater than `range.cliff`.
- `range.cliff` must not be greater than `range.stop`.
- `msg.sender` must have allowed this contract to spend at least `grossDepositAmount` tokens.
- If set, `broker.fee` must not be greater than `MAX_FEE`.*


```solidity
function createWithRange(
    address sender,
    address recipient,
    uint128 grossDepositAmount,
    IERC20 token,
    bool cancelable,
    Range calldata range,
    Broker calldata broker
) external returns (uint256 streamId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|The address from which to stream the tokens, which will have the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.|
|`recipient`|`address`|The address toward which to stream the tokens.|
|`grossDepositAmount`|`uint128`|The gross amount of tokens to deposit, inclusive of fees, in units of the token's decimals.|
|`token`|`IERC20`|The address of the ERC-20 token to use for streaming.|
|`cancelable`|`bool`|A boolean that indicates whether the stream will be cancelable or not.|
|`range`|`Range`|A struct that encapsulates (i) the start time of the stream, (ii) the cliff time of the stream, and (iii) the stop time of the stream, all as Unix timestamps.|
|`broker`|`Broker`|An optional struct that encapsulates (i) the address of the broker that has helped create the stream and (ii) the percentage fee that the broker is paid from the deposit amount, as an UD60x18 number.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the newly created stream.|


### _isApprovedOrOwner

Checks whether the spender is authorized to interact with the stream.

*Unlike the ERC-721 implementation, this function does not check whether the owner is the zero address.*


```solidity
function _isApprovedOrOwner(uint256 streamId, address spender)
    internal
    view
    override
    returns (bool isApprovedOrOwner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|
|`spender`|`address`|The spender to make the query for.|


### _isCallerStreamSender

Checks whether the `msg.sender` is the sender of the stream or not.


```solidity
function _isCallerStreamSender(uint256 streamId) internal view override returns (bool result);
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
function _burn(uint256 tokenId) internal override(ERC721, SablierV2);
```

### _cancel

*See the documentation for the public functions that call this internal function.*


```solidity
function _cancel(uint256 streamId) internal override onlySenderOrRecipient(streamId);
```

### _createWithRange

*See the documentation for the public functions that call this internal function.*


```solidity
function _createWithRange(CreateWithRangeParams memory params) internal returns (uint256 streamId);
```

### _renounce

*See the documentation for the public functions that call this internal function.*


```solidity
function _renounce(uint256 streamId) internal override;
```

### _withdraw

*See the documentation for the public functions that call this internal function.*


```solidity
function _withdraw(uint256 streamId, address to, uint128 amount) internal override;
```

## Structs
### CreateWithRangeParams
*This struct is needed to avoid the "Stack Too Deep" error.*


```solidity
struct CreateWithRangeParams {
    CreateAmounts amounts;
    Range range;
    address sender;
    bool cancelable;
    address recipient;
    IERC20 token;
    address broker;
}
```

