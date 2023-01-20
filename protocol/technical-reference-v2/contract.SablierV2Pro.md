# SablierV2Pro
[Git Source](https://github.com/sablierhq/v2-core/blob/4918aca82c552a62619e2c71f2241abf1e877f72/src/SablierV2Pro.sol)

**Inherits:**
[ISablierV2Pro](/protocol/technical-reference-v2/interfaces/contract.ISablierV2Pro.md), [SablierV2](/protocol/technical-reference-v2/contract.SablierV2.md), ERC721

*This contract implements the ISablierV2Pro interface.*


## State Variables
### MAX_SEGMENT_COUNT
The maximum number of segments permitted in a stream.

*This is initialized at construction time and cannot be changed later.*


```solidity
uint256 public immutable override MAX_SEGMENT_COUNT;
```


### _streams
*Sablier V2 pro streams mapped by unsigned integers.*


```solidity
mapping(uint256 => ProStream) internal _streams;
```


## Functions
### constructor


```solidity
constructor(address initialAdmin, ISablierV2Comptroller initialComptroller, UD60x18 maxFee, uint256 maxSegmentCount)
    SablierV2(initialAdmin, initialComptroller, maxFee);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`initialAdmin`|`address`|The address of the initial contract admin.|
|`initialComptroller`|`ISablierV2Comptroller`|The address of the initial comptroller.|
|`maxFee`|`UD60x18`|The maximum fee that can be charged by either the protocol or a broker, as an UD60x18 number where 100% = 1e18.|
|`maxSegmentCount`|`uint256`|The maximum number of segments permitted in a stream.|


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


### getSegments

Queries the segments the protocol uses to compose the custom streaming curve.


```solidity
function getSegments(uint256 streamId) external view override returns (Segment[] memory segments);
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
function getStream(uint256 streamId) external view returns (ProStream memory stream);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getStreamedAmount

Calculates the amount that has been streamed to the recipient, in units of the token's decimals.


```solidity
function getStreamedAmount(uint256 streamId) public view override returns (uint128 streamedAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getWithdrawableAmount

Calculates the amount that the recipient can withdraw from the stream, in units of the token's decimals.


```solidity
function getWithdrawableAmount(uint256 streamId)
    public
    view
    override(ISablierV2, SablierV2)
    returns (uint128 withdrawableAmount);
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

### createWithDeltas

Create a stream by setting the start time to `block.timestamp` and the stop time to the sum of
`block.timestamp` and all `deltas`. The stream is funded by `msg.sender` and is wrapped in an ERC-721 NFT.

 :::note

Emits a `CreateProStream` nd a `Transfer` vent.
Requirements:
- All from `createWithMilestones`.

:::



```solidity
function createWithDeltas(
    address sender,
    address recipient,
    uint128 grossDepositAmount,
    Segment[] memory segments,
    IERC20 token,
    bool cancelable,
    uint40[] calldata deltas,
    Broker calldata broker
) external override returns (uint256 streamId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|The address from which to stream the tokens, which will have the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.|
|`recipient`|`address`|The address toward which to stream the tokens.|
|`grossDepositAmount`|`uint128`|The gross amount of tokens to be deposited, inclusive of fees, in units of the token's decimals.|
|`segments`|`Segment[]`|The segments the protocol uses to compose the custom streaming curve.|
|`token`|`IERC20`|The address of the ERC-20 token to use for streaming.|
|`cancelable`|`bool`|A boolean that indicates whether the stream is cancelable or not.|
|`deltas`|`uint40[]`|The differences between the Unix timestamp milestones used to compose the custom streaming curve.|
|`broker`|`Broker`|An optional struct that encapsulates (i) the address of the broker that has helped create the stream and (ii) the percentage fee that the broker is paid from the deposit amount, as an UD60x18 number.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the newly created stream.|


### createWithMilestones

Create a stream by using the provided milestones, implying the stop time from the last segment's.
milestone. The stream is funded by `msg.sender` and is wrapped in an ERC-721 NFT.

 :::note

Emits a `CreateProStream` nd a `Transfer` vent.
Notes:
- As long as they are ordered, it is not an error to set the `startTime` and the milestones to a past range.
Requirements:
- `recipient` must not be the zero address.
- `grossDepositAmount` must not be zero.
- `segments` must be non-empty and not greater than `MAX_SEGMENT_COUNT`.
- The segment amounts summed up must be equal to the net deposit amount.
- The first segment's milestone must be greater than or equal to `startTime`.
- `startTime` must not be greater than the milestone of the last segment.
- `msg.sender` must have allowed this contract to spend at least `grossDepositAmount` tokens.
- If set, `broker.fee` must not be greater than `MAX_FEE`.

:::



```solidity
function createWithMilestones(
    address sender,
    address recipient,
    uint128 grossDepositAmount,
    Segment[] calldata segments,
    IERC20 token,
    bool cancelable,
    uint40 startTime,
    Broker calldata broker
) external returns (uint256 streamId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|The address from which to stream the tokens, which will have the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.|
|`recipient`|`address`|The address toward which to stream the tokens.|
|`grossDepositAmount`|`uint128`|The gross amount of tokens to be deposited, inclusive of fees, in units of the token's decimals.|
|`segments`|`Segment[]`| The segments the protocol uses to compose the custom streaming curve.|
|`token`|`IERC20`|The address of the ERC-20 token to use for streaming.|
|`cancelable`|`bool`|A boolean that indicates whether the stream will be cancelable or not.|
|`startTime`|`uint40`|The Unix timestamp for when the stream will start.|
|`broker`|`Broker`||

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the newly created stream.|


### _calculateStreamedAmountForMultipleSegments

*Calculates the withdrawable amount for a stream with multiple segments.*


```solidity
function _calculateStreamedAmountForMultipleSegments(uint256 streamId) internal view returns (uint128 streamedAmount);
```

### _calculateStreamedAmountForOneSegment

*Calculates the withdrawable amount for a stream with one segment.*


```solidity
function _calculateStreamedAmountForOneSegment(uint256 streamId) internal view returns (uint128 streamedAmount);
```

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

### _createWithMilestones

*See the documentation for the public functions that call this internal function.*


```solidity
function _createWithMilestones(CreateWithMilestonesParams memory params) internal returns (uint256 streamId);
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
### CreateWithMilestonesParams
*This struct is needed to avoid the "Stack Too Deep" error.*


```solidity
struct CreateWithMilestonesParams `
    CreateAmounts amounts;
    Segment[] segments;
    address sender;
    uint40 startTime;
    bool cancelable;
    address recipient;
    IERC20 token;
    address broker;
}
```

