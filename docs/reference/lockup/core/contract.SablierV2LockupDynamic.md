---
sidebar_position: 2
---

# SablierV2LockupDynamic

[Git Source](https://github.com/sablier-labs/v2-core/blob/36b49d3bf2a396d19083d28247e8e03d7a3a2ee1/src/SablierV2LockupDynamic.sol)

**Inherits:** [ISablierV2LockupDynamic](/docs/reference/lockup/core/interfaces/interface.ISablierV2LockupDynamic.md),
[SablierV2Lockup](/docs/reference/lockup/core/abstracts/abstract.SablierV2Lockup.md)

See the documentation in
[ISablierV2LockupDynamic](/docs/reference/lockup/core/interfaces/interface.ISablierV2LockupDynamic.md).

## State Variables

### MAX_SEGMENT_COUNT

The maximum number of segments allowed in a stream.

_This is initialized at construction time and cannot be changed later._

```solidity
uint256 public immutable override MAX_SEGMENT_COUNT;
```

### \_segments

_Stream segments mapped by stream IDs. This complements the `_streams` mapping in
[SablierV2Lockup](docs/reference/lockup/core/abstracts/abstract.SablierV2Lockup.md)._

```solidity
mapping(uint256 id => LockupDynamic.Segment[] segments) internal _segments;
```

## Functions

### constructor

_Emits a {TransferAdmin} event._

```solidity
constructor(
    address initialAdmin,
    ISablierV2NFTDescriptor initialNFTDescriptor,
    uint256 maxSegmentCount
)
    ERC721("Sablier V2 Lockup Dynamic NFT", "SAB-V2-LOCKUP-DYN")
    SablierV2Lockup(initialAdmin, initialNFTDescriptor);
```

**Parameters**

| Name                   | Type                      | Description                                         |
| ---------------------- | ------------------------- | --------------------------------------------------- |
| `initialAdmin`         | `address`                 | The address of the initial contract admin.          |
| `initialNFTDescriptor` | `ISablierV2NFTDescriptor` | The address of the NFT descriptor contract.         |
| `maxSegmentCount`      | `uint256`                 | The maximum number of segments allowed in a stream. |

### getSegments

Retrieves the segments used to compose the dynamic distribution function.

_Reverts if `streamId` references a null stream._

```solidity
function getSegments(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (LockupDynamic.Segment[] memory segments);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getStream

Retrieves the full stream details.

_Reverts if `streamId` references a null stream._

```solidity
function getStream(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (LockupDynamic.StreamLD memory stream);
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
function getTimestamps(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (LockupDynamic.Timestamps memory timestamps);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

**Returns**

| Name         | Type                       | Description                           |
| ------------ | -------------------------- | ------------------------------------- |
| `timestamps` | `LockupDynamic.Timestamps` | See the documentation in {DataTypes}. |

### createWithDurations

Creates a stream by setting the start time to `block.timestamp`, and the end time to the sum of `block.timestamp` and
all specified time durations. The segment timestamps are derived from these durations. The stream is funded by
`msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {Transfer} and {CreateLockupDynamicStream} event. Requirements:

- All requirements in {createWithTimestamps} must be met for the calculated parameters.

```solidity
function createWithDurations(LockupDynamic.CreateWithDurations calldata params)
    external
    override
    noDelegateCall
    returns (uint256 streamId);
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
function createWithTimestamps(LockupDynamic.CreateWithTimestamps calldata params)
    external
    override
    noDelegateCall
    returns (uint256 streamId);
```

**Parameters**

| Name     | Type                                 | Description                                                                        |
| -------- | ------------------------------------ | ---------------------------------------------------------------------------------- |
| `params` | `LockupDynamic.CreateWithTimestamps` | Struct encapsulating the function parameters, which are documented in {DataTypes}. |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

### \_calculateStreamedAmount

Calculates the streamed amount of the stream without looking up the stream's status.

The distribution function is:

$$
f(x) = x^{exp} * csa + \Sigma(esa)
$$

Where:

- $x$ is the elapsed time divided by the total duration of the current segment.
- $exp$ is the current segment exponent.
- $csa$ is the current segment amount.
- $\Sigma(esa)$ is the sum of all vested segments' amounts.

```solidity
function _calculateStreamedAmount(uint256 streamId) internal view override returns (uint128);
```

### \_calculateStreamedAmountForMultipleSegments

Calculates the streamed amount for a stream with multiple segments. Notes:

1. Normalization to 18 decimals is not needed because there is no mix of amounts with different decimals.
2. The stream's start time must be in the past so that the calculations below do not overflow.
3. The stream's end time must be in the future so that the loop below does not panic with an "index out of bounds"
   error.

```solidity
function _calculateStreamedAmountForMultipleSegments(uint256 streamId) internal view returns (uint128);
```

### \_calculateStreamedAmountForOneSegment

_Calculates the streamed amount for a stream with one segment. Normalization to 18 decimals is not needed because there
is no mix of amounts with different decimals._

```solidity
function _calculateStreamedAmountForOneSegment(uint256 streamId) internal view returns (uint128);
```

### \_create

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _create(LockupDynamic.CreateWithTimestamps memory params) internal returns (uint256 streamId);
```
