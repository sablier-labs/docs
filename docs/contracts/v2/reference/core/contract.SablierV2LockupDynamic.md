---
sidebar_position: 2
---

# SablierV2LockupDynamic

[Git Source](https://github.com/sablier-labs/v2-core/blob/412ec3d3998a766507de96afdb26c797d2ae491d/docs/contracts/v2/reference/core)

**Inherits:**
[ISablierV2LockupDynamic](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupDynamic.md),
[SablierV2Lockup](/docs/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup.md)

See the documentation in
[ISablierV2LockupDynamic](docs/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupDynamic.md).

## State Variables

### MAX_SEGMENT_COUNT

The maximum number of segments allowed in a stream.

_This is initialized at construction time and cannot be changed later._

```solidity
uint256 public immutable override MAX_SEGMENT_COUNT;
```

### \_streams

_Sablier V2 Lockup Dynamic streams mapped by unsigned integer ids._

```solidity
mapping(uint256 id => LockupDynamic.Stream stream) private _streams;
```

## Functions

### constructor

_Emits a {TransferAdmin} event._

```solidity
constructor(
    address initialAdmin,
    ISablierV2Comptroller initialComptroller,
    ISablierV2NFTDescriptor initialNFTDescriptor,
    uint256 maxSegmentCount
)
    ERC721("Sablier V2 Lockup Dynamic NFT", "SAB-V2-LOCKUP-DYN")
    SablierV2Lockup(initialAdmin, initialComptroller, initialNFTDescriptor);
```

**Parameters**

| Name                   | Type                      | Description                                         |
| ---------------------- | ------------------------- | --------------------------------------------------- |
| `initialAdmin`         | `address`                 | The address of the initial contract admin.          |
| `initialComptroller`   | `ISablierV2Comptroller`   | The address of the initial comptroller.             |
| `initialNFTDescriptor` | `ISablierV2NFTDescriptor` | The address of the NFT descriptor contract.         |
| `maxSegmentCount`      | `uint256`                 | The maximum number of segments allowed in a stream. |

### getAsset

Retrieves the address of the ERC-20 asset used for streaming.

_Reverts if `streamId` references a null stream._

```solidity
function getAsset(uint256 streamId) external view override notNull(streamId) returns (IERC20 asset);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### getDepositedAmount

Retrieves the amount deposited in the stream, denoted in units of the asset's decimals.

_Reverts if `streamId` references a null stream._

```solidity
function getDepositedAmount(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (uint128 depositedAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### getEndTime

Retrieves the stream's end time, which is a Unix timestamp.

_Reverts if `streamId` references a null stream._

```solidity
function getEndTime(uint256 streamId) external view override notNull(streamId) returns (uint40 endTime);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### getRange

Retrieves the stream's range, which is a struct containing (i) the stream's start time and (ii) end time, both as Unix
timestamps.

_Reverts if `streamId` references a null stream._

```solidity
function getRange(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (LockupDynamic.Range memory range);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### getRefundedAmount

Retrieves the amount refunded to the sender after a cancellation, denoted in units of the asset's decimals. This amount
is always zero unless the stream was canceled.

_Reverts if `streamId` references a null stream._

```solidity
function getRefundedAmount(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (uint128 refundedAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### getSegments

Retrieves the segments the protocol uses to compose the custom streaming curve.

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
| `streamId` | `uint256` | The stream id for the query. |

### getSender

Retrieves the stream's sender.

_Reverts if `streamId` references a null stream._

```solidity
function getSender(uint256 streamId) external view override notNull(streamId) returns (address sender);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### getStartTime

Retrieves the stream's start time, which is a Unix timestamp.

_Reverts if `streamId` references a null stream._

```solidity
function getStartTime(uint256 streamId) external view override notNull(streamId) returns (uint40 startTime);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### getStream

Retrieves the stream entity.

_Reverts if `streamId` references a null stream._

```solidity
function getStream(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (LockupDynamic.Stream memory stream);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### getWithdrawnAmount

Retrieves the amount withdrawn from the stream, denoted in units of the asset's decimals.

_Reverts if `streamId` references a null stream._

```solidity
function getWithdrawnAmount(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (uint128 withdrawnAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### isCancelable

Retrieves a flag indicating whether the stream can be canceled. When the stream is cold, this flag is always `false`.

_Reverts if `streamId` references a null stream._

```solidity
function isCancelable(uint256 streamId) external view override notNull(streamId) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### isCold

Retrieves a flag indicating whether the stream is cold, i.e. settled, canceled, or depleted.

_Reverts if `streamId` references a null stream._

```solidity
function isCold(uint256 streamId) external view override notNull(streamId) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### isDepleted

Retrieves a flag indicating whether the stream is depleted.

_Reverts if `streamId` references a null stream._

```solidity
function isDepleted(uint256 streamId)
    public
    view
    override(ISablierV2Lockup, SablierV2Lockup)
    notNull(streamId)
    returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### isStream

Retrieves a flag indicating whether the stream exists.

_Does not revert if `streamId` references a null stream._

```solidity
function isStream(uint256 streamId) public view override(ISablierV2Lockup, SablierV2Lockup) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### isWarm

Retrieves a flag indicating whether the stream is warm, i.e. either pending or streaming.

_Reverts if `streamId` references a null stream._

```solidity
function isWarm(uint256 streamId) external view override notNull(streamId) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### refundableAmountOf

Calculates the amount that the sender would be refunded if the stream were canceled, denoted in units of the asset's
decimals.

_Reverts if `streamId` references a null stream._

```solidity
function refundableAmountOf(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (uint128 refundableAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### statusOf

Retrieves the stream's status.

```solidity
function statusOf(uint256 streamId) external view override notNull(streamId) returns (Lockup.Status status);
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
function streamedAmountOf(uint256 streamId)
    public
    view
    override(ISablierV2Lockup, ISablierV2LockupDynamic)
    notNull(streamId)
    returns (uint128 streamedAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### wasCanceled

Retrieves a flag indicating whether the stream was canceled.

_Reverts if `streamId` references a null stream._

```solidity
function wasCanceled(uint256 streamId)
    public
    view
    override(ISablierV2Lockup, SablierV2Lockup)
    notNull(streamId)
    returns (bool result);
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
function createWithDeltas(LockupDynamic.CreateWithDeltas calldata params)
    external
    override
    noDelegateCall
    returns (uint256 streamId);
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
function createWithMilestones(LockupDynamic.CreateWithMilestones calldata params)
    external
    override
    noDelegateCall
    returns (uint256 streamId);
```

**Parameters**

| Name     | Type                                 | Description                                                                        |
| -------- | ------------------------------------ | ---------------------------------------------------------------------------------- |
| `params` | `LockupDynamic.CreateWithMilestones` | Struct encapsulating the function parameters, which are documented in {DataTypes}. |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The id of the newly created stream. |

### \_calculateStreamedAmount

_Calculates the streamed amount without looking up the stream's status._

```solidity
function _calculateStreamedAmount(uint256 streamId) internal view returns (uint128);
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

_Calculates the streamed amount for a a stream with one segment. Normalization to 18 decimals is not needed because
there is no mix of amounts with different decimals._

```solidity
function _calculateStreamedAmountForOneSegment(uint256 streamId) internal view returns (uint128);
```

### \_isCallerStreamSender

Checks whether `msg.sender` is the stream's sender.

```solidity
function _isCallerStreamSender(uint256 streamId) internal view override returns (bool);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### \_statusOf

_Retrieves the stream's status without performing a null check._

```solidity
function _statusOf(uint256 streamId) internal view override returns (Lockup.Status);
```

### \_streamedAmountOf

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _streamedAmountOf(uint256 streamId) internal view returns (uint128);
```

### \_withdrawableAmountOf

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _withdrawableAmountOf(uint256 streamId) internal view override returns (uint128);
```

### \_cancel

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _cancel(uint256 streamId) internal override;
```

### \_createWithMilestones

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _createWithMilestones(LockupDynamic.CreateWithMilestones memory params) internal returns (uint256 streamId);
```

### \_renounce

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _renounce(uint256 streamId) internal override;
```

### \_withdraw

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _withdraw(uint256 streamId, address to, uint128 amount) internal override;
```
