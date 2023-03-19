# ISablierV2LockupDynamic

[Git Source](https://github.com/sablierhq/v2-core/blob/6223a7bce69cdec996b0a95cb95d0f04cdb809be/docs/contracts/v2/reference/core/interfaces)

**Inherits:** [ISablierV2Lockup](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Lockup.md)

Creates and manages lockup streams with custom streaming curves.

## Functions

### MAX_SEGMENT_COUNT

The maximum number of segments permitted in a lockup dynamic stream.

_This is initialized at construction time and cannot be changed later._

```solidity
function MAX_SEGMENT_COUNT() external view returns (uint256);
```

### getRange

Queries the range of the lockup dynamic stream, a struct that encapsulates (i) the start time of the stream, and (ii)
the end time of of the stream, both as Unix timestamps.

```solidity
function getRange(uint256 streamId) external view returns (LockupDynamic.Range memory range);
```

**Parameters**

| Name       | Type      | Description                                                |
| ---------- | --------- | ---------------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup dynamic stream to make the query for. |

### getSegments

Queries the segments the protocol uses to compose the custom streaming curve.

```solidity
function getSegments(uint256 streamId) external view returns (LockupDynamic.Segment[] memory segments);
```

**Parameters**

| Name       | Type      | Description                                                |
| ---------- | --------- | ---------------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup dynamic stream to make the query for. |

### getStream

Queries the lockup dynamic stream struct entity.

```solidity
function getStream(uint256 streamId) external view returns (LockupDynamic.Stream memory stream);
```

**Parameters**

| Name       | Type      | Description                                                |
| ---------- | --------- | ---------------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup dynamic stream to make the query for. |

### streamedAmountOf

Calculates the amount that has been streamed to the recipient, in units of the asset's decimals.

The streaming function is:

$$
f(x) = x^{exp} * csa + \Sigma(esa)
$$

Where:

- $x$ is the elapsed time divided by the total time in the current segment.
- $exp$ is the current segment exponent.
- $csa$ is the current segment amount.
- $\Sigma(esa)$ is the sum of all elapsed segments' amounts.

```solidity
function streamedAmountOf(uint256 streamId) external view returns (uint128 streamedAmount);
```

**Parameters**

| Name       | Type      | Description                                                |
| ---------- | --------- | ---------------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup dynamic stream to make the query for. |

### createWithDeltas

Creates a lockup dynamic stream by setting the start time to `block.timestamp` and the end time to the sum of
`block.timestamp` and all segment deltas. The stream is funded by `msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {CreateLockupDynamicStream} and a {Transfer} event. Requirements:

- All from {createWithMilestones}.

```solidity
function createWithDeltas(LockupDynamic.CreateWithDeltas calldata params) external returns (uint256 streamId);
```

**Parameters**

| Name     | Type                             | Description                                       |
| -------- | -------------------------------- | ------------------------------------------------- |
| `params` | `CreateWithDeltas.LockupDynamic` | Struct that encapsulates the function parameters. |

**Returns**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the newly created lockup dynamic stream. |

### createWithMilestones

Creates a lockup dynamic stream with the provided milestones, implying the end time from the last segment's milestone.
The stream is funded by `msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {CreateLockupDynamicStream} and a {Transfer} event. Notes:

- As long as the milestones are ordered, it is not an error to set the `params.startTime` and the milestones to a range
  that is in the past. Requirements:
- `params.recipient` must not be the zero address.
- `params.totalAmount` must not be zero.
- `params.segments` must hold at least one segment, but not more than `MAX_SEGMENT_COUNT`.
- The sum of the segment amounts must be equal to the deposit amount.
- The first segment's milestone must be greater than or equal to `params.startTime`.
- `params.startTime` must not be greater than the milestone of the last segment.
- `msg.sender` must have allowed this contract to spend at least `params.totalAmount` assets.
- If set, `params.broker.fee` must not be greater than `MAX_FEE`.
- The call must not be a delegate call.

```solidity
function createWithMilestones(LockupDynamic.CreateWithMilestones calldata params) external returns (uint256 streamId);
```

**Parameters**

| Name     | Type                                 | Description                                       |
| -------- | ------------------------------------ | ------------------------------------------------- |
| `params` | `CreateWithMilestones.LockupDynamic` | Struct that encapsulates the function parameters. |

**Returns**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the newly created lockup dynamic stream. |

## Events

### CreateLockupDynamicStream

Emitted when a lockup dynamic stream is created.

```solidity
event CreateLockupDynamicStream(
    uint256 streamId,
    address indexed funder,
    address indexed sender,
    address indexed recipient,
    Lockup.CreateAmounts amounts,
    IERC20 asset,
    bool cancelable,
    LockupDynamic.Segment[] segments,
    LockupDynamic.Range range,
    address broker
);
```
