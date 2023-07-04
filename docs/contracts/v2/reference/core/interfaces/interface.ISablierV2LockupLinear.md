# ISablierV2LockupLinear

[Git Source](https://github.com/sablier-labs/v2-core/blob/159e87a2f5af03967faf292df81fef93c14be2e2/docs/contracts/v2/reference/core/interfaces)

**Inherits:** [ISablierV2Lockup](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Lockup.md)

Creates and manages lockup streams with a linear streaming function.

## Functions

### getCliffTime

Retrieves the stream's cliff time, which is a Unix timestamp.

_Reverts if `streamId` references a null stream._

```solidity
function getCliffTime(uint256 streamId) external view returns (uint40 cliffTime);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### getRange

Retrieves the stream's range, which is a struct containing (i) the stream's start time, (ii) cliff time, and (iii) end
time, all as Unix timestamps.

_Reverts if `streamId` references a null stream._

```solidity
function getRange(uint256 streamId) external view returns (LockupLinear.Range memory range);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### getStream

Retrieves the stream entity.

_Reverts if `streamId` references a null stream._

```solidity
function getStream(uint256 streamId) external view returns (LockupLinear.Stream memory stream);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### streamedAmountOf

Calculates the amount streamed to the recipient, denoted in units of the asset's decimals. When the stream is warm, the
streaming function is:

$$
f(x) = x * d + c
$$

Where:

- $x$ is the elapsed time divided by the stream's total duration.
- $d$ is the deposited amount.
- $c$ is the cliff amount. Upon cancellation of the stream, the amount streamed is calculated as the difference between
  the deposited amount and the refunded amount. Ultimately, when the stream becomes depleted, the streamed amount is
  equivalent to the total amount withdrawn.

_Reverts if `streamId` references a null stream._

```solidity
function streamedAmountOf(uint256 streamId) external view returns (uint128 streamedAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### createWithDurations

Creates a stream by setting the start time to `block.timestamp`, and the end time to the sum of `block.timestamp` and
`params.durations.total. The stream is funded by `msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {Transfer} and {CreateLockupLinearStream} event. Requirements:

- All requirements in {createWithRange} must be met for the calculated parameters.

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

### createWithRange

Creates a stream with the provided start time and end time as the range. The stream is funded by `msg.sender` and is
wrapped in an ERC-721 NFT.

Emits a {Transfer} and {CreateLockupLinearStream} event. Notes:

- As long as the times are ordered, it is not an error for the start or the cliff time to be in the past. Requirements:
- Must not be delegate called.
- `params.totalAmount` must be greater than zero.
- If set, `params.broker.fee` must not be greater than `MAX_FEE`.
- `params.range.start` must be less than or equal to `params.range.cliff`.
- `params.range.cliff` must be less than `params.range.end`.
- `params.range.end` must be in the future.
- `params.recipient` must not be the zero address.
- `msg.sender` must have allowed this contract to spend at least `params.totalAmount` assets.

```solidity
function createWithRange(LockupLinear.CreateWithRange calldata params) external returns (uint256 streamId);
```

**Parameters**

| Name     | Type                           | Description                                                                        |
| -------- | ------------------------------ | ---------------------------------------------------------------------------------- |
| `params` | `LockupLinear.CreateWithRange` | Struct encapsulating the function parameters, which are documented in {DataTypes}. |

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
    LockupLinear.Range range,
    address broker
);
```
