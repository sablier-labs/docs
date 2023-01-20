# ISablierV2Pro
[Git Source](https://github.com/sablierhq/v2-core/blob/4918aca82c552a62619e2c71f2241abf1e877f72/protocol/technical-reference-v2/interfaces)

**Inherits:**
[ISablierV2](/protocol/technical-reference-v2/interfaces/contract.ISablierV2.md)

Creates streams with custom streaming curves, based on the following mathematical model:
`
f(x) = x^{exp} * csa + esas
`
Where:
- `x` is the elapsed time divided by the total time in the current segment.
- `exp` is the current segment exponent.
- `csa` is the current segment amount.
- `esas` are the elapsed segment amounts summed up.


## Functions
### MAX_SEGMENT_COUNT

The maximum number of segments permitted in a stream.

*This is initialized at construction time and cannot be changed later.*


```solidity
function MAX_SEGMENT_COUNT() external view returns (uint256);
```

### getSegments

Queries the segments the protocol uses to compose the custom streaming curve.


```solidity
function getSegments(uint256 streamId) external view returns (Segment[] memory segments);
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
    uint40[] memory deltas,
    Broker calldata broker
) external returns (uint256 streamId);
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
    Segment[] memory segments,
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


