# ISablierV2LockupLinear

[Git Source](https://github.com/sablierhq/v2-core/blob/8bd57ebb31fddf6ef262477e5a378027db8b85d8/docs/contracts/v2/reference/core/interfaces)

**Inherits:** [ISablierV2Lockup](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Lockup.md)

Creates and manages lockup streams whose streaming function is strictly linear.

## Functions

### getCliffTime

Queries the cliff time of the lockup linear stream.

```solidity
function getCliffTime(uint256 streamId) external view returns (uint40 cliffTime);
```

**Parameters**

| Name       | Type      | Description                                               |
| ---------- | --------- | --------------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup linear stream to make the query for. |

### getRange

Queries the range of the lockup linear stream, a struct that encapsulates (i) the start time of the stream, (ii) the
cliff time of the stream, and (iii) the end time of the stream, all as Unix timestamps.

```solidity
function getRange(uint256 streamId) external view returns (LockupLinear.Range memory range);
```

**Parameters**

| Name       | Type      | Description                                               |
| ---------- | --------- | --------------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup linear stream to make the query for. |

### getStream

Queries the lockup linear stream struct entity.

```solidity
function getStream(uint256 streamId) external view returns (LockupLinear.Stream memory stream);
```

**Parameters**

| Name       | Type      | Description                                               |
| ---------- | --------- | --------------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup linear stream to make the query for. |

### streamedAmountOf

Calculates the amount that has been streamed to the recipient, in units of the asset's decimals.

The streaming function is:

$$
f(x) = x * d + c
$$

Where:

- $x$ is the elapsed time divided by the total duration of the stream.
- $d$ is the deposit amount.
- $c$ is the cliff amount.

```solidity
function streamedAmountOf(uint256 streamId) external view returns (uint128 streamedAmount);
```

**Parameters**

| Name       | Type      | Description                                               |
| ---------- | --------- | --------------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup linear stream to make the query for. |

### createWithDurations

Creates a lockup linear stream with the start time set to `block.timestamp`, and the end time set to
`block.timestamp + params.durations.total`. The stream is funded by `msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {CreateLockupLinearStream} and a {Transfer} event. Requirements:

- All from {createWithRange}.

```solidity
function createWithDurations(LockupLinear.CreateWithDurations calldata params) external returns (uint256 streamId);
```

**Parameters**

| Name     | Type                               | Description                                       |
| -------- | ---------------------------------- | ------------------------------------------------- |
| `params` | `CreateWithDurations.LockupLinear` | Struct that encapsulates the function parameters. |

**Returns**

| Name       | Type      | Description                                       |
| ---------- | --------- | ------------------------------------------------- |
| `streamId` | `uint256` | The id of the newly created lockup linear stream. |

### createWithRange

Creates a lockup linear stream with the provided start time and end time as the range. The stream is funded by
`msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {CreateLockupLinearStream} and a {Transfer} event. Notes:

- As long as the times are ordered, it is not an error to set a range that is in the past. Requirements:
- The call must not be a delegate call.
- `params.totalAmount` must not be zero.
- If set, `params.broker.fee` must not be greater than `MAX_FEE`.
- `params.range.start` must not be greater than `params.range.cliff`.
- `params.range.cliff` must not be greater than `params.range.end`.
- `params.recipient` must not be the zero address.
- `msg.sender` must have allowed this contract to spend at least `params.totalAmount` assets.

```solidity
function createWithRange(LockupLinear.CreateWithRange calldata params) external returns (uint256 streamId);
```

**Parameters**

| Name     | Type                           | Description                                       |
| -------- | ------------------------------ | ------------------------------------------------- |
| `params` | `CreateWithRange.LockupLinear` | Struct that encapsulates the function parameters. |

**Returns**

| Name       | Type      | Description                                       |
| ---------- | --------- | ------------------------------------------------- |
| `streamId` | `uint256` | The id of the newly created lockup linear stream. |

## Events

### CreateLockupLinearStream

Emitted when a lockup linear stream is created.

```solidity
event CreateLockupLinearStream(
    uint256 streamId,
    address indexed funder,
    address indexed sender,
    address indexed recipient,
    Lockup.CreateAmounts amounts,
    IERC20 asset,
    bool cancelable,
    LockupLinear.Range range,
    address broker
);
```
