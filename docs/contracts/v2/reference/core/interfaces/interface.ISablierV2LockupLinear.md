# ISablierV2LockupLinear

[Git Source](https://github.com/sablier-labs/v2-core/blob/63113dc3fbe43438eb305663e0d6b74eefc15857/src/interfaces/ISablierV2LockupLinear.sol)

**Inherits:** [ISablierV2Lockup](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Lockup.md)

Creates and manages Lockup streams with linear streaming functions.

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
| `streamId` | `uint256` | The stream id for the query. |

### getRange

Retrieves the stream's range, which is a struct documented in {DataTypes}.

_Reverts if `streamId` references a null stream._

```solidity
function getRange(uint256 streamId) external view returns (LockupLinear.Range memory range);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### getStream

Retrieves the stream details, which is a struct documented in {DataTypes}.

_Reverts if `streamId` references a null stream._

```solidity
function getStream(uint256 streamId) external view returns (LockupLinear.StreamLL memory stream);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

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
| `streamId` | `uint256` | The id of the newly created stream. |

### createWithTimestamps

Creates a stream with the provided start time and end time as the range. The stream is funded by `msg.sender` and is
wrapped in an ERC-721 NFT.

Emits a {Transfer} and {CreateLockupLinearStream} event. Notes:

- A cliff time of zero means there is no cliff.
- As long as the times are ordered, it is not an error for the start or the cliff time to be in the past. Requirements:
- Must not be delegate called.
- `params.totalAmount` must be greater than zero.
- If set, `params.broker.fee` must not be greater than `MAX_BROKER_FEE`.
- `params.range.start` must be greater than zero and less than `params.range.end`.
- If set, `params.range.cliff` must be greater than `params.range.start` and less than `params.range.end`.
- `params.range.end` must be in the future.
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
| `streamId` | `uint256` | The id of the newly created stream. |

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
    LockupLinear.Range range,
    address broker
);
```

**Parameters**

| Name           | Type                   | Description                                                                                                              |
| -------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `streamId`     | `uint256`              | The id of the newly created stream.                                                                                      |
| `funder`       | `address`              | The address which funded the stream.                                                                                     |
| `sender`       | `address`              | The address streaming the assets, with the ability to cancel the stream.                                                 |
| `recipient`    | `address`              | The address receiving the assets.                                                                                        |
| `amounts`      | `Lockup.CreateAmounts` | Struct containing (i) the deposit amount, and (ii) the broker fee amount, both denoted in units of the asset's decimals. |
| `asset`        | `IERC20`               | The contract address of the ERC-20 asset used for streaming.                                                             |
| `cancelable`   | `bool`                 | Boolean indicating whether the stream will be cancelable or not.                                                         |
| `transferable` | `bool`                 | Boolean indicating whether the stream NFT is transferable or not.                                                        |
| `range`        | `LockupLinear.Range`   | Struct containing (i) the stream's start time, (ii) cliff time, and (iii) end time, all as Unix timestamps.              |
| `broker`       | `address`              | The address of the broker who has helped create the stream, e.g. a front-end website.                                    |
