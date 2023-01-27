# ISablierV2LockupLinear
[Git Source](https://github.com/sablierhq/v2-core/blob/cc0ad3978d3901ec331d3c24fbc36ee2b5a297c0/protocol/technical-reference-v2/interfaces)

**Inherits:**
[ISablierV2Lockup](/protocol/technical-reference-v2/interfaces/contract.ISablierV2Lockup.md)

Creates streams whose streaming function is:
`
f(x) = x * d + c
`
Where:
- `x` is the elapsed time divided by the total duration of the stream.
- `d` is the deposit amount.
- `c` is the cliff amount.


## Functions
### getCliffTime

Queries the cliff time of the stream.


```solidity
function getCliffTime(uint256 streamId) external view returns (uint40 cliffTime);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getRange

Queries the range of the stream, a struct that encapsulates (i) the start time of the stream,


```solidity
function getRange(uint256 streamId) external view returns (Range memory range);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getStream

Queries the stream struct entity.


```solidity
function getStream(uint256 streamId) external view returns (LockupLinearStream memory stream);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### createWithDurations

Creates a stream funded by `msg.sender` wrapped in an ERC-721 NFT, setting the start time to
`block.timestamp` and the stop time to `block.timestamp + duration`.

:::note

Emits a `CreateLockupLinearStream` nd a `Transfer` vent.
Requirements:
- All from `createWithRange}.

:::



```solidity
function createWithDurations(
    address sender,
    address recipient,
    uint128 grossDepositAmount,
    IERC20 asset,
    bool cancelable,
    Durations calldata durations,
    Broker calldata broker
) external returns (uint256 streamId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|The address from which to stream the assets, which will have the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.|
|`recipient`|`address`|The address toward which to stream the assets.|
|`grossDepositAmount`|`uint128`|The gross amount of assets to be deposited, inclusive of fees, in units of the asset's decimals.|
|`asset`|`IERC20`|The contract address of the ERC-20 asset to use for streaming.|
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

:::note

Emits a `CreateLockupLinearStream` nd a `Transfer` vent.
Notes:
- As long as they are ordered, it is not an error to set a range in the past.
Requirements:
- `recipient` must not be the zero address.
- `grossDepositAmount` must not be zero.
- `range.start` must not be greater than `range.cliff`.
- `range.cliff` must not be greater than `range.stop`.
- `msg.sender` must have allowed this contract to spend at least `grossDepositAmount` assets.
- If set, `broker.fee` must not be greater than `MAX_FEE`.

:::



```solidity
function createWithRange(
    address sender,
    address recipient,
    uint128 grossDepositAmount,
    IERC20 asset,
    bool cancelable,
    Range calldata range,
    Broker calldata broker
) external returns (uint256 streamId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|The address from which to stream the assets, which will have the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.|
|`recipient`|`address`|The address toward which to stream the assets.|
|`grossDepositAmount`|`uint128`|The gross amount of assets to deposit, inclusive of fees, in units of the asset's decimals.|
|`asset`|`IERC20`|The contract address of the ERC-20 asset to use for streaming.|
|`cancelable`|`bool`|A boolean that indicates whether the stream will be cancelable or not.|
|`range`|`Range`|A struct that encapsulates (i) the start time of the stream, (ii) the cliff time of the stream, and (iii) the stop time of the stream, all as Unix timestamps.|
|`broker`|`Broker`|An optional struct that encapsulates (i) the address of the broker that has helped create the stream and (ii) the percentage fee that the broker is paid from the deposit amount, as an UD60x18 number.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the newly created stream.|


