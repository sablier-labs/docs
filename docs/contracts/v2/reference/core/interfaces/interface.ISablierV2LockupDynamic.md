# ISablierV2LockupDynamic

[Git Source](https://github.com/sablier-labs/v2-core/blob/36b49d3bf2a396d19083d28247e8e03d7a3a2ee1/src/interfaces/ISablierV2LockupDynamic.sol)

**Inherits:** [ISablierV2Lockup](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Lockup.md)

Creates and manages Lockup streams with a dynamic distribution function.

## Functions

### getSegments

Retrieves the segments used to compose the dynamic distribution function.

_Reverts if `streamId` references a null stream._

```solidity
function getSegments(uint256 streamId) external view returns (LockupDynamic.Segment[] memory segments);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getStream

Retrieves the full stream details.

_Reverts if `streamId` references a null stream._

```solidity
function getStream(uint256 streamId) external view returns (LockupDynamic.StreamLD memory stream);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

**Returns**

| Name     | Type                     | Description                           |
| -------- | ------------------------ | ------------------------------------- |
| `stream` | `LockupDynamic.StreamLD` | See the documentation in {DataTypes}. |

### getTimestamps

Retrieves the stream's start and end timestamps.

_Reverts if `streamId` references a null stream._

```solidity
function getTimestamps(uint256 streamId) external view returns (LockupDynamic.Timestamps memory timestamps);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

**Returns**

| Name         | Type                       | Description                           |
| ------------ | -------------------------- | ------------------------------------- |
| `timestamps` | `LockupDynamic.Timestamps` | See the documentation in {DataTypes}. |

### MAX_SEGMENT_COUNT

The maximum number of segments allowed in a stream.

_This is initialized at construction time and cannot be changed later._

```solidity
function MAX_SEGMENT_COUNT() external view returns (uint256);
```

### createWithDurations

Creates a stream by setting the start time to `block.timestamp`, and the end time to the sum of `block.timestamp` and
all specified time durations. The segment timestamps are derived from these durations. The stream is funded by
`msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {Transfer} and {CreateLockupDynamicStream} event. Requirements:

- All requirements in {createWithTimestamps} must be met for the calculated parameters.

```solidity
function createWithDurations(LockupDynamic.CreateWithDurations calldata params) external returns (uint256 streamId);
```

**Parameters**

| Name     | Type                                | Description                                                                        |
| -------- | ----------------------------------- | ---------------------------------------------------------------------------------- |
| `params` | `LockupDynamic.CreateWithDurations` | Struct encapsulating the function parameters, which are documented in {DataTypes}. |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

### createWithTimestamps

Creates a stream with the provided segment timestamps, implying the end time from the last timestamp. The stream is
funded by `msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {Transfer} and {CreateLockupDynamicStream} event. Notes:

- As long as the segment timestamps are arranged in ascending order, it is not an error for some of them to be in the
  past. Requirements:
- Must not be delegate called.
- `params.totalAmount` must be greater than zero.
- If set, `params.broker.fee` must not be greater than `MAX_BROKER_FEE`.
- `params.startTime` must be greater than zero and less than the first segment's timestamp.
- `params.segments` must have at least one segment, but not more than `MAX_SEGMENT_COUNT`.
- The segment timestamps must be arranged in ascending order.
- The last segment timestamp (i.e. the stream's end time) must be in the future.
- The sum of the segment amounts must equal the deposit amount.
- `params.recipient` must not be the zero address.
- `msg.sender` must have allowed this contract to spend at least `params.totalAmount` assets.

```solidity
function createWithTimestamps(LockupDynamic.CreateWithTimestamps calldata params) external returns (uint256 streamId);
```

**Parameters**

| Name     | Type                                 | Description                                                                        |
| -------- | ------------------------------------ | ---------------------------------------------------------------------------------- |
| `params` | `LockupDynamic.CreateWithTimestamps` | Struct encapsulating the function parameters, which are documented in {DataTypes}. |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

## Events

### CreateLockupDynamicStream

Emitted when a stream is created.

```solidity
event CreateLockupDynamicStream(
    uint256 streamId,
    address funder,
    address indexed sender,
    address indexed recipient,
    Lockup.CreateAmounts amounts,
    IERC20 indexed asset,
    bool cancelable,
    bool transferable,
    LockupDynamic.Segment[] segments,
    LockupDynamic.Timestamps timestamps,
    address broker
);
```

**Parameters**

| Name           | Type                       | Description                                                                                                              |
| -------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `streamId`     | `uint256`                  | The ID of the newly created stream.                                                                                      |
| `funder`       | `address`                  | The address which has funded the stream.                                                                                 |
| `sender`       | `address`                  | The address distributing the assets, which will have the ability to cancel the stream.                                   |
| `recipient`    | `address`                  | The address toward which to stream the assets.                                                                           |
| `amounts`      | `Lockup.CreateAmounts`     | Struct containing (i) the deposit amount, and (ii) the broker fee amount, both denoted in units of the asset's decimals. |
| `asset`        | `IERC20`                   | The contract address of the ERC-20 asset to be distributed.                                                              |
| `cancelable`   | `bool`                     | Boolean indicating whether the stream will be cancelable or not.                                                         |
| `transferable` | `bool`                     | Boolean indicating whether the stream NFT is transferable or not.                                                        |
| `segments`     | `LockupDynamic.Segment[]`  | The segments the protocol uses to compose the dynamic distribution function.                                             |
| `timestamps`   | `LockupDynamic.Timestamps` | Struct containing (i) the stream's start time and (ii) end time, both as Unix timestamps.                                |
| `broker`       | `address`                  | The address of the broker who has helped create the stream, e.g. a front-end website.                                    |
