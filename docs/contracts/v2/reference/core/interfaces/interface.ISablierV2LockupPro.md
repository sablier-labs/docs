# ISablierV2LockupPro

[Git Source](https://github.com/sablierhq/v2-core/blob/87a0a16c835ea8e88ddf6a8387898c91c62ab9d1/docs/contracts/v2/reference/core/interfaces)

**Inherits:** [ISablierV2Lockup](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Lockup.md)

Creates and manages lockup streams with custom streaming curves.

## Functions

### MAX_SEGMENT_COUNT

The maximum number of segments permitted in a lockup pro stream.

_This is initialized at construction time and cannot be changed later._

```solidity
function MAX_SEGMENT_COUNT() external view returns (uint256);
```

### getRange

Queries the range of the lockup pro stream, a struct that encapsulates (i) the start time of the stream, and (ii) the
end time of of the stream, both as Unix timestamps.

```solidity
function getRange(uint256 streamId) external view returns (LockupPro.Range memory range);
```

**Parameters**

| Name       | Type      | Description                                            |
| ---------- | --------- | ------------------------------------------------------ |
| `streamId` | `uint256` | The id of the lockup pro stream to make the query for. |

### getSegments

Queries the segments the protocol uses to compose the custom streaming curve.

```solidity
function getSegments(uint256 streamId) external view returns (LockupPro.Segment[] memory segments);
```

**Parameters**

| Name       | Type      | Description                                            |
| ---------- | --------- | ------------------------------------------------------ |
| `streamId` | `uint256` | The id of the lockup pro stream to make the query for. |

### getStream

Queries the lockup pro stream struct entity.

```solidity
function getStream(uint256 streamId) external view returns (LockupPro.Stream memory stream);
```

**Parameters**

| Name       | Type      | Description                                            |
| ---------- | --------- | ------------------------------------------------------ |
| `streamId` | `uint256` | The id of the lockup pro stream to make the query for. |

### streamedAmountOf

Calculates the amount that has been streamed to the recipient, in units of the asset's decimals.

\*The streaming function is:

$$
f(x) = x^{exp} * csa + esas
$$

Where:

- $x$ is the elapsed time divided by the total time in the current segment.
- $exp$ is the current segment exponent.
- $csa$ is the current segment amount.
- $esas$ are the elapsed segments' amounts summed up.\*

```solidity
function streamedAmountOf(uint256 streamId) external view returns (uint128 streamedAmount);
```

**Parameters**

| Name       | Type      | Description                                            |
| ---------- | --------- | ------------------------------------------------------ |
| `streamId` | `uint256` | The id of the lockup pro stream to make the query for. |

### createWithDeltas

Create a lockup pro stream by setting the start time to `block.timestamp` and the end time to the sum of
`block.timestamp` and all segment deltas. The stream is funded by `msg.sender` and is wrapped in an ERC-721 NFT.

\*Emits a {CreateLockupProStream} and a {Transfer} event. Requirements:

- All from {createWithMilestones}.\*

```solidity
function createWithDeltas(LockupPro.CreateWithDeltas calldata params) external returns (uint256 streamId);
```

**Parameters**

| Name     | Type                         | Description                                       |
| -------- | ---------------------------- | ------------------------------------------------- |
| `params` | `CreateWithDeltas.LockupPro` | Struct that encapsulates the function parameters. |

**Returns**

| Name       | Type      | Description                                    |
| ---------- | --------- | ---------------------------------------------- |
| `streamId` | `uint256` | The id of the newly created lockup pro stream. |

### createWithMilestones

Create a lockup pro stream with the provided milestones, implying the end time from the last segment's milestone. The
stream is funded by `msg.sender` and is wrapped in an ERC-721 NFT.

\*Emits a {CreateLockupProStream} and a {Transfer} event. Notes:

- As long as the milestones are ordered, it is not an error to set the `params.startTime` and the milestones to a range
  that is in the past. Requirements:
- `params.recipient` must not be the zero address.
- `params.totalAmount` must not be zero.
- `params.segments` must hold at least one segment, but not more than `MAX_SEGMENT_COUNT`.
- The sum of the segment amounts must be equal to the deposit amount.
- The first segment's milestone must be greater than or equal to `params.startTime`.
- `params.startTime` must not be greater than the milestone of the last segment.
- `msg.sender` must have allowed this contract to spend at least `params.totalAmount` assets.
- If set, `params.broker.fee` must not be greater than `MAX_FEE`.\*

```solidity
function createWithMilestones(LockupPro.CreateWithMilestones calldata params) external returns (uint256 streamId);
```

**Parameters**

| Name     | Type                             | Description                                       |
| -------- | -------------------------------- | ------------------------------------------------- |
| `params` | `CreateWithMilestones.LockupPro` | Struct that encapsulates the function parameters. |

**Returns**

| Name       | Type      | Description                                    |
| ---------- | --------- | ---------------------------------------------- |
| `streamId` | `uint256` | The id of the newly created lockup pro stream. |

## Events

### CreateLockupProStream

Emitted when a lockup pro stream is created.

```solidity
event CreateLockupProStream(
    uint256 streamId,
    address indexed funder,
    address indexed sender,
    address indexed recipient,
    Lockup.CreateAmounts amounts,
    IERC20 asset,
    bool cancelable,
    LockupPro.Segment[] segments,
    LockupPro.Range range,
    address broker
);
```
