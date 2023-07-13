# ISablierV2LockupDynamic

[Git Source](https://github.com/sablier-labs/v2-core/blob/bca1d9ea0485b065544486bb01f4148d44289644/docs/contracts/v2/reference/core/interfaces)

**Inherits:** [ISablierV2Lockup](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Lockup.md)

Creates and manages lockup streams with dynamic streaming functions.

## Functions

### MAX_SEGMENT_COUNT

The maximum number of segments allowed in a stream.

_This is initialized at construction time and cannot be changed later._

```solidity
function MAX_SEGMENT_COUNT() external view returns (uint256);
```

### getRange

Retrieves the stream's range, which is a struct containing (i) the stream's start time and (ii) end time, both as Unix
timestamps.

_Reverts if `streamId` references a null stream._

```solidity
function getRange(uint256 streamId) external view returns (LockupDynamic.Range memory range);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### getSegments

Retrieves the segments the protocol uses to compose the custom streaming curve.

_Reverts if `streamId` references a null stream._

```solidity
function getSegments(uint256 streamId) external view returns (LockupDynamic.Segment[] memory segments);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### getStream

Retrieves the stream entity.

_Reverts if `streamId` references a null stream._

```solidity
function getStream(uint256 streamId) external view returns (LockupDynamic.Stream memory stream);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### streamedAmountOf

Calculates the amount streamed to the recipient, denoted in units of the asset's decimals. When the stream is warm, the
streaming function is:

$$
f(x) = x^{exp} * csa + \Sigma(esa)
$$

Where:

- $x$ is the elapsed time divided by the total time in the current segment.
- $exp$ is the current segment exponent.
- $csa$ is the current segment amount.
- $\Sigma(esa)$ is the sum of all elapsed segments' amounts. Upon cancellation of the stream, the amount streamed is
  calculated as the difference between the deposited amount and the refunded amount. Ultimately, when the stream becomes
  depleted, the streamed amount is equivalent to the total amount withdrawn.

_Reverts if `streamId` references a null stream._

```solidity
function streamedAmountOf(uint256 streamId) external view returns (uint128 streamedAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### createWithDeltas

Creates a stream by setting the start time to `block.timestamp`, and the end time to the sum of `block.timestamp` and
all specified time deltas. The segment milestones are derived from these deltas. The stream is funded by `msg.sender`
and is wrapped in an ERC-721 NFT.

Emits a {Transfer} and {CreateLockupDynamicStream} event. Requirements:

- All requirements in {createWithMilestones} must be met for the calculated parameters.

```solidity
function createWithDeltas(LockupDynamic.CreateWithDeltas calldata params) external returns (uint256 streamId);
```

**Parameters**

| Name     | Type                             | Description                                                                        |
| -------- | -------------------------------- | ---------------------------------------------------------------------------------- |
| `params` | `LockupDynamic.CreateWithDeltas` | Struct encapsulating the function parameters, which are documented in {DataTypes}. |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The id of the newly created stream. |

### createWithMilestones

Creates a stream with the provided segment milestones, implying the end time from the last milestone. The stream is
funded by `msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {Transfer} and {CreateLockupDynamicStream} event. Notes:

- As long as the segment milestones are arranged in ascending order, it is not an error for some of them to be in the
  past. Requirements:
- Must not be delegate called.
- `params.totalAmount` must be greater than zero.
- If set, `params.broker.fee` must not be greater than `MAX_FEE`.
- `params.segments` must have at least one segment, but not more than `MAX_SEGMENT_COUNT`.
- `params.startTime` must be less than the first segment's milestone.
- The segment milestones must be arranged in ascending order.
- The last segment milestone (i.e. the stream's end time) must be in the future.
- The sum of the segment amounts must equal the deposit amount.
- `params.recipient` must not be the zero address.
- `msg.sender` must have allowed this contract to spend at least `params.totalAmount` assets.

```solidity
function createWithMilestones(LockupDynamic.CreateWithMilestones calldata params) external returns (uint256 streamId);
```

**Parameters**

| Name     | Type                                 | Description                                                                        |
| -------- | ------------------------------------ | ---------------------------------------------------------------------------------- |
| `params` | `LockupDynamic.CreateWithMilestones` | Struct encapsulating the function parameters, which are documented in {DataTypes}. |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The id of the newly created stream. |

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
    LockupDynamic.Segment[] segments,
    LockupDynamic.Range range,
    address broker
);
```
