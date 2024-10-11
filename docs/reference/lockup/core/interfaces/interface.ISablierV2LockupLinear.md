# ISablierV2LockupLinear

[Git Source](https://github.com/sablier-labs/v2-core/blob/36b49d3bf2a396d19083d28247e8e03d7a3a2ee1/src/interfaces/ISablierV2LockupLinear.sol)

**Inherits:** [ISablierV2Lockup](/docs/reference/lockup/core/interfaces/interface.ISablierV2Lockup.md)

Creates and manages Lockup streams with a linear distribution function.

## Functions

### getCliffTime

Retrieves the stream's cliff time, which is a Unix timestamp. A value of zero means there is no cliff.

_Reverts if `streamId` references a null stream._

```solidity
function getCliffTime(uint256 streamId) external view returns (uint40 cliffTime);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getStream

Retrieves the full stream details.

_Reverts if `streamId` references a null stream._

```solidity
function getStream(uint256 streamId) external view returns (LockupLinear.StreamLL memory stream);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

**Returns**

| Name     | Type                    | Description                           |
| -------- | ----------------------- | ------------------------------------- |
| `stream` | `LockupLinear.StreamLL` | See the documentation in {DataTypes}. |

### getTimestamps

Retrieves the stream's start, cliff and end timestamps.

_Reverts if `streamId` references a null stream._

```solidity
function getTimestamps(uint256 streamId) external view returns (LockupLinear.Timestamps memory timestamps);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

**Returns**

| Name         | Type                      | Description                           |
| ------------ | ------------------------- | ------------------------------------- |
| `timestamps` | `LockupLinear.Timestamps` | See the documentation in {DataTypes}. |

### createWithDurations

Creates a stream by setting the start time to `block.timestamp`, and the end time to the sum of `block.timestamp` and
`params.durations.total`. The stream is funded by `msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {Transfer} and {CreateLockupLinearStream} event. Requirements:

- All requirements in {createWithTimestamps} must be met for the calculated parameters.

```solidity
function createWithDurations(LockupLinear.CreateWithDurations calldata params) external returns (uint256 streamId);
```

**Parameters**

| Name     | Type                               | Description                                                                        |
| -------- | ---------------------------------- | ---------------------------------------------------------------------------------- |
| `params` | `LockupLinear.CreateWithDurations` | Struct encapsulating the function parameters, which are documented in {DataTypes}. |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

### createWithTimestamps

Creates a stream with the provided start time and end time. The stream is funded by `msg.sender` and is wrapped in an
ERC-721 NFT.

Emits a {Transfer} and {CreateLockupLinearStream} event. Notes:

- A cliff time of zero means there is no cliff.
- As long as the times are ordered, it is not an error for the start or the cliff time to be in the past. Requirements:
- Must not be delegate called.
- `params.totalAmount` must be greater than zero.
- If set, `params.broker.fee` must not be greater than `MAX_BROKER_FEE`.
- `params.timestamps.start` must be greater than zero and less than `params.timestamps.end`.
- If set, `params.timestamps.cliff` must be greater than `params.timestamps.start` and less than
  `params.timestamps.end`.
- `params.timestamps.end` must be in the future.
- `params.recipient` must not be the zero address.
- `msg.sender` must have allowed this contract to spend at least `params.totalAmount` assets.

```solidity
function createWithTimestamps(LockupLinear.CreateWithTimestamps calldata params) external returns (uint256 streamId);
```

**Parameters**

| Name     | Type                                | Description                                                                        |
| -------- | ----------------------------------- | ---------------------------------------------------------------------------------- |
| `params` | `LockupLinear.CreateWithTimestamps` | Struct encapsulating the function parameters, which are documented in {DataTypes}. |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

## Events

### CreateLockupLinearStream

Emitted when a stream is created.

```solidity
event CreateLockupLinearStream(
    uint256 streamId,
    address funder,
    address indexed sender,
    address indexed recipient,
    Lockup.CreateAmounts amounts,
    IERC20 indexed asset,
    bool cancelable,
    bool transferable,
    LockupLinear.Timestamps timestamps,
    address broker
);
```

**Parameters**

| Name           | Type                      | Description                                                                                                              |
| -------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `streamId`     | `uint256`                 | The ID of the newly created stream.                                                                                      |
| `funder`       | `address`                 | The address which funded the stream.                                                                                     |
| `sender`       | `address`                 | The address distributing the assets, which will have the ability to cancel the stream.                                   |
| `recipient`    | `address`                 | The address receiving the assets.                                                                                        |
| `amounts`      | `Lockup.CreateAmounts`    | Struct containing (i) the deposit amount, and (ii) the broker fee amount, both denoted in units of the asset's decimals. |
| `asset`        | `IERC20`                  | The contract address of the ERC-20 asset to be distributed.                                                              |
| `cancelable`   | `bool`                    | Boolean indicating whether the stream will be cancelable or not.                                                         |
| `transferable` | `bool`                    | Boolean indicating whether the stream NFT is transferable or not.                                                        |
| `timestamps`   | `LockupLinear.Timestamps` | Struct containing (i) the stream's start time, (ii) cliff time, and (iii) end time, all as Unix timestamps.              |
| `broker`       | `address`                 | The address of the broker who has helped create the stream, e.g. a front-end website.                                    |
