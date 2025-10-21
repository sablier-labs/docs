# SablierLockupDynamic

[Git Source](https://github.com/sablier-labs/lockup/blob/58eaac45c20c57a93b73d887c714e68f061ec3e6/src/abstracts/SablierLockupDynamic.sol)

**Inherits:** [ISablierLockupDynamic](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupDynamic.md),
[NoDelegateCall](/docs/reference/lockup/contracts/abstracts/abstract.NoDelegateCall.md),
[SablierLockupState](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupState.md)

See the documentation in
[ISablierLockupDynamic](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupDynamic.md).

## Functions

### createWithDurationsLD

Creates a stream by setting the start time to `block.timestamp`, and the end time to the sum of `block.timestamp` and
all specified time durations. The segment timestamps are derived from these durations. The stream is funded by
`msg.sender` and is wrapped in an ERC-721 NFT.

\*Emits a {Transfer}, {CreateLockupDynamicStream} and {MetadataUpdate} event. Requirements:

- All requirements in {createWithTimestampsLD} must be met for the calculated parameters.\*

```solidity
function createWithDurationsLD(
    Lockup.CreateWithDurations calldata params,
    LockupDynamic.SegmentWithDuration[] calldata segmentsWithDuration
)
    external
    payable
    override
    noDelegateCall
    returns (uint256 streamId);
```

**Parameters**

| Name                   | Type                                  | Description                                                                                                                                                                                 |
| ---------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `params`               | `Lockup.CreateWithDurations`          | Struct encapsulating the function parameters, which are documented in {Lockup} type.                                                                                                        |
| `segmentsWithDuration` | `LockupDynamic.SegmentWithDuration[]` | Segments with durations used to compose the dynamic distribution function. Timestamps are calculated by starting from `block.timestamp` and adding each duration to the previous timestamp. |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

### createWithTimestampsLD

Creates a stream with the provided segment timestamps, implying the end time from the last timestamp. The stream is
funded by `msg.sender` and is wrapped in an ERC-721 NFT.

\*Emits a {Transfer}, {CreateLockupDynamicStream} and {MetadataUpdate} event. Notes:

- As long as the segment timestamps are arranged in ascending order, it is not an error for some of them to be in the
  past. Requirements:
- Must not be delegate called.
- `params.depositAmount` must be greater than zero.
- `params.timestamps.start` must be greater than zero and less than the first segment's timestamp.
- `segments` must have at least one segment.
- The segment timestamps must be arranged in ascending order.
- `params.timestamps.end` must be equal to the last segment's timestamp.
- The sum of the segment amounts must equal the deposit amount.
- `params.recipient` must not be the zero address.
- `params.sender` must not be the zero address.
- `msg.sender` must have allowed this contract to spend at least `params.depositAmount` tokens.
- `params.token` must not be the native token.
- `params.shape.length` must not be greater than 32 characters.\*

```solidity
function createWithTimestampsLD(
    Lockup.CreateWithTimestamps calldata params,
    LockupDynamic.Segment[] calldata segments
)
    external
    payable
    override
    noDelegateCall
    returns (uint256 streamId);
```

**Parameters**

| Name       | Type                          | Description                                                                          |
| ---------- | ----------------------------- | ------------------------------------------------------------------------------------ |
| `params`   | `Lockup.CreateWithTimestamps` | Struct encapsulating the function parameters, which are documented in {Lockup} type. |
| `segments` | `LockupDynamic.Segment[]`     | Segments used to compose the dynamic distribution function.                          |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

### \_createLD

_See the documentation for the user-facing functions that call this private function._

```solidity
function _createLD(
    bool cancelable,
    uint128 depositAmount,
    address recipient,
    LockupDynamic.Segment[] memory segments,
    address sender,
    string memory shape,
    Lockup.Timestamps memory timestamps,
    IERC20 token,
    bool transferable
)
    private
    returns (uint256 streamId);
```
