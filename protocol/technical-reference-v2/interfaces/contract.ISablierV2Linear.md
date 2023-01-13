# ISablierV2Linear
[Git Source](https://github.com/sablierhq/v2-core/blob/71a38f2401905d2762c14a7b36c2334909bdb760/src/interfaces/ISablierV2Linear.sol)

**Inherits:**
[ISablierV2](/src/interfaces/ISablierV2.sol/contract.ISablierV2.md)

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
function getStream(uint256 streamId) external view returns (LinearStream memory stream);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### createWithDurations

Creates a stream funded by `msg.sender` wrapped in an ERC-721 NFT, setting the start time to
`block.timestamp` and the stop time to `block.timestamp + duration`.

 :::note

Emits a `CreateLinearStream` nd a `Transfer` vent.
Requirements:
- All from `createWithRange`.

:::



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

 :::note

Emits a `CreateLinearStream` nd a `Transfer` vent.
Notes:
- As long as they are ordered, it is not an error to set a range in the past.
Requirements:
- `recipient` must not be the zero address.
- `grossDepositAmount` must not be zero.
- `range.start` must not be greater than `range.cliff`.
- `range.cliff` must not be greater than `range.stop`.
- `msg.sender` must have allowed this contract to spend at least `grossDepositAmount` tokens.
- If set, `broker.fee` must not be greater than `MAX_FEE`.

:::



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


