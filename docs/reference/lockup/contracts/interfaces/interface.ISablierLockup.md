# ISablierLockup

[Git Source](https://github.com/sablier-labs/lockup/blob/463278dbb461b1733d6424cf0aeee3b8d6bc036a/src/interfaces/ISablierLockup.sol)

**Inherits:** [ISablierLockupBase](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupBase.md)

Creates and manages Lockup streams with various distribution models.

## Functions

### MAX_COUNT

The maximum number of segments and tranches allowed in Dynamic and Tranched streams respectively.

_This is initialized at construction time and cannot be changed later._

```solidity
function MAX_COUNT() external view returns (uint256);
```

### getCliffTime

Retrieves the stream's cliff time, which is a Unix timestamp. A value of zero means there is no cliff.

_Reverts if `streamId` references a null stream or a non Lockup Linear stream._

```solidity
function getCliffTime(uint256 streamId) external view returns (uint40 cliffTime);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getSegments

Retrieves the segments used to compose the dynamic distribution function.

_Reverts if `streamId` references a null stream or a non Lockup Dynamic stream._

```solidity
function getSegments(uint256 streamId) external view returns (LockupDynamic.Segment[] memory segments);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

**Returns**

| Name       | Type                      | Description                           |
| ---------- | ------------------------- | ------------------------------------- |
| `segments` | `LockupDynamic.Segment[]` | See the documentation in {DataTypes}. |

### getTranches

Retrieves the tranches used to compose the tranched distribution function.

_Reverts if `streamId` references a null stream or a non Lockup Tranched stream._

```solidity
function getTranches(uint256 streamId) external view returns (LockupTranched.Tranche[] memory tranches);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

**Returns**

| Name       | Type                       | Description                           |
| ---------- | -------------------------- | ------------------------------------- |
| `tranches` | `LockupTranched.Tranche[]` | See the documentation in {DataTypes}. |

### getUnlockAmounts

Retrieves the unlock amounts used to compose the linear distribution function.

_Reverts if `streamId` references a null stream or a non Lockup Linear stream._

```solidity
function getUnlockAmounts(uint256 streamId) external view returns (LockupLinear.UnlockAmounts memory unlockAmounts);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

**Returns**

| Name            | Type                         | Description                           |
| --------------- | ---------------------------- | ------------------------------------- |
| `unlockAmounts` | `LockupLinear.UnlockAmounts` | See the documentation in {DataTypes}. |

### createWithDurationsLD

Creates a stream by setting the start time to `block.timestamp`, and the end time to the sum of `block.timestamp` and
all specified time durations. The segment timestamps are derived from these durations. The stream is funded by
`msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {Transfer}, {CreateLockupDynamicStream} and {MetadataUpdate} event. Requirements:

- All requirements in {createWithTimestampsLD} must be met for the calculated parameters.

```solidity
function createWithDurationsLD(
    Lockup.CreateWithDurations calldata params,
    LockupDynamic.SegmentWithDuration[] calldata segmentsWithDuration
)
    external
    payable
    returns (uint256 streamId);
```

**Parameters**

| Name                   | Type                                  | Description                                                                                                                                                                                 |
| ---------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `params`               | `Lockup.CreateWithDurations`          | Struct encapsulating the function parameters, which are documented in {DataTypes}.                                                                                                          |
| `segmentsWithDuration` | `LockupDynamic.SegmentWithDuration[]` | Segments with durations used to compose the dynamic distribution function. Timestamps are calculated by starting from `block.timestamp` and adding each duration to the previous timestamp. |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

### createWithDurationsLL

Creates a stream by setting the start time to `block.timestamp`, and the end time to the sum of `block.timestamp` and
`durations.total`. The stream is funded by `msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {Transfer}, {CreateLockupLinearStream} and {MetadataUpdate} event. Requirements:

- All requirements in {createWithTimestampsLL} must be met for the calculated parameters.

```solidity
function createWithDurationsLL(
    Lockup.CreateWithDurations calldata params,
    LockupLinear.UnlockAmounts calldata unlockAmounts,
    LockupLinear.Durations calldata durations
)
    external
    payable
    returns (uint256 streamId);
```

**Parameters**

| Name            | Type                         | Description                                                                                                      |
| --------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `params`        | `Lockup.CreateWithDurations` | Struct encapsulating the function parameters, which are documented in {DataTypes}.                               |
| `unlockAmounts` | `LockupLinear.UnlockAmounts` | Struct encapsulating (i) the amount to unlock at the start time and (ii) the amount to unlock at the cliff time. |
| `durations`     | `LockupLinear.Durations`     | Struct encapsulating (i) cliff period duration and (ii) total stream duration, both in seconds.                  |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

### createWithDurationsLT

Creates a stream by setting the start time to `block.timestamp`, and the end time to the sum of `block.timestamp` and
all specified time durations. The tranche timestamps are derived from these durations. The stream is funded by
`msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {Transfer}, {CreateLockupTrancheStream} and {MetadataUpdate} event. Requirements:

- All requirements in {createWithTimestampsLT} must be met for the calculated parameters.

```solidity
function createWithDurationsLT(
    Lockup.CreateWithDurations calldata params,
    LockupTranched.TrancheWithDuration[] calldata tranchesWithDuration
)
    external
    payable
    returns (uint256 streamId);
```

**Parameters**

| Name                   | Type                                   | Description                                                                                                                                                                                  |
| ---------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `params`               | `Lockup.CreateWithDurations`           | Struct encapsulating the function parameters, which are documented in {DataTypes}.                                                                                                           |
| `tranchesWithDuration` | `LockupTranched.TrancheWithDuration[]` | Tranches with durations used to compose the tranched distribution function. Timestamps are calculated by starting from `block.timestamp` and adding each duration to the previous timestamp. |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

### createWithTimestampsLD

Creates a stream with the provided segment timestamps, implying the end time from the last timestamp. The stream is
funded by `msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {Transfer}, {CreateLockupDynamicStream} and {MetadataUpdate} event. Notes:

- As long as the segment timestamps are arranged in ascending order, it is not an error for some of them to be in the
  past. Requirements:
- Must not be delegate called.
- `params.totalAmount` must be greater than zero.
- If set, `params.broker.fee` must not be greater than `MAX_BROKER_FEE`.
- `params.timestamps.start` must be greater than zero and less than the first segment's timestamp.
- `segments` must have at least one segment, but not more than `MAX_COUNT`.
- The segment timestamps must be arranged in ascending order.
- `params.timestamps.end` must be equal to the last segment's timestamp.
- The sum of the segment amounts must equal the deposit amount.
- `params.recipient` must not be the zero address.
- `params.sender` must not be the zero address.
- `msg.sender` must have allowed this contract to spend at least `params.totalAmount` tokens.
- `params.shape.length` must not be greater than 32 characters.

```solidity
function createWithTimestampsLD(
    Lockup.CreateWithTimestamps calldata params,
    LockupDynamic.Segment[] calldata segments
)
    external
    payable
    returns (uint256 streamId);
```

**Parameters**

| Name       | Type                          | Description                                                                        |
| ---------- | ----------------------------- | ---------------------------------------------------------------------------------- |
| `params`   | `Lockup.CreateWithTimestamps` | Struct encapsulating the function parameters, which are documented in {DataTypes}. |
| `segments` | `LockupDynamic.Segment[]`     | Segments used to compose the dynamic distribution function.                        |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

### createWithTimestampsLL

Creates a stream with the provided start time and end time. The stream is funded by `msg.sender` and is wrapped in an
ERC-721 NFT.

Emits a {Transfer}, {CreateLockupLinearStream} and {MetadataUpdate} event. Notes:

- A cliff time of zero means there is no cliff.
- As long as the times are ordered, it is not an error for the start or the cliff time to be in the past. Requirements:
- Must not be delegate called.
- `params.totalAmount` must be greater than zero.
- If set, `params.broker.fee` must not be greater than `MAX_BROKER_FEE`.
- `params.timestamps.start` must be greater than zero and less than `params.timestamps.end`.
- If set, `cliffTime` must be greater than `params.timestamps.start` and less than `params.timestamps.end`.
- `params.recipient` must not be the zero address.
- `params.sender` must not be the zero address.
- The sum of `params.unlockAmounts.start` and `params.unlockAmounts.cliff` must be less than or equal to deposit amount.
- If `params.timestamps.cliff` not set, the `params.unlockAmounts.cliff` must be zero.
- `msg.sender` must have allowed this contract to spend at least `params.totalAmount` tokens.
- `params.shape.length` must not be greater than 32 characters.

```solidity
function createWithTimestampsLL(
    Lockup.CreateWithTimestamps calldata params,
    LockupLinear.UnlockAmounts calldata unlockAmounts,
    uint40 cliffTime
)
    external
    payable
    returns (uint256 streamId);
```

**Parameters**

| Name            | Type                          | Description                                                                                                      |
| --------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `params`        | `Lockup.CreateWithTimestamps` | Struct encapsulating the function parameters, which are documented in {DataTypes}.                               |
| `unlockAmounts` | `LockupLinear.UnlockAmounts`  | Struct encapsulating (i) the amount to unlock at the start time and (ii) the amount to unlock at the cliff time. |
| `cliffTime`     | `uint40`                      | The Unix timestamp for the cliff period's end. A value of zero means there is no cliff.                          |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

### createWithTimestampsLT

Creates a stream with the provided tranche timestamps, implying the end time from the last timestamp. The stream is
funded by `msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {Transfer}, {CreateLockupTrancheStream} and {MetadataUpdate} event. Notes:

- As long as the tranche timestamps are arranged in ascending order, it is not an error for some of them to be in the
  past. Requirements:
- Must not be delegate called.
- `params.totalAmount` must be greater than zero.
- If set, `params.broker.fee` must not be greater than `MAX_BROKER_FEE`.
- `params.timestamps.start` must be greater than zero and less than the first tranche's timestamp.
- `tranches` must have at least one tranche, but not more than `MAX_COUNT`.
- The tranche timestamps must be arranged in ascending order.
- `params.timestamps.end` must be equal to the last tranche's timestamp.
- The sum of the tranche amounts must equal the deposit amount.
- `params.recipient` must not be the zero address.
- `params.sender` must not be the zero address.
- `msg.sender` must have allowed this contract to spend at least `params.totalAmount` tokens.
- `params.shape.length` must not be greater than 32 characters.

```solidity
function createWithTimestampsLT(
    Lockup.CreateWithTimestamps calldata params,
    LockupTranched.Tranche[] calldata tranches
)
    external
    payable
    returns (uint256 streamId);
```

**Parameters**

| Name       | Type                          | Description                                                                        |
| ---------- | ----------------------------- | ---------------------------------------------------------------------------------- |
| `params`   | `Lockup.CreateWithTimestamps` | Struct encapsulating the function parameters, which are documented in {DataTypes}. |
| `tranches` | `LockupTranched.Tranche[]`    | Tranches used to compose the tranched distribution function.                       |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

## Events

### CreateLockupDynamicStream

Emitted when a stream is created using Lockup dynamic model.

```solidity
event CreateLockupDynamicStream(
    uint256 indexed streamId, Lockup.CreateEventCommon commonParams, LockupDynamic.Segment[] segments
);
```

**Parameters**

| Name           | Type                       | Description                                                                  |
| -------------- | -------------------------- | ---------------------------------------------------------------------------- |
| `streamId`     | `uint256`                  | The ID of the newly created stream.                                          |
| `commonParams` | `Lockup.CreateEventCommon` | Common parameters emitted in Create events across all Lockup models.         |
| `segments`     | `LockupDynamic.Segment[]`  | The segments the protocol uses to compose the dynamic distribution function. |

### CreateLockupLinearStream

Emitted when a stream is created using Lockup linear model.

```solidity
event CreateLockupLinearStream(
    uint256 indexed streamId,
    Lockup.CreateEventCommon commonParams,
    uint40 cliffTime,
    LockupLinear.UnlockAmounts unlockAmounts
);
```

**Parameters**

| Name            | Type                         | Description                                                                                                      |
| --------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `streamId`      | `uint256`                    | The ID of the newly created stream.                                                                              |
| `commonParams`  | `Lockup.CreateEventCommon`   | Common parameters emitted in Create events across all Lockup models.                                             |
| `cliffTime`     | `uint40`                     | The Unix timestamp for the cliff period's end. A value of zero means there is no cliff.                          |
| `unlockAmounts` | `LockupLinear.UnlockAmounts` | Struct encapsulating (i) the amount to unlock at the start time and (ii) the amount to unlock at the cliff time. |

### CreateLockupTranchedStream

Emitted when a stream is created using Lockup tranched model.

```solidity
event CreateLockupTranchedStream(
    uint256 indexed streamId, Lockup.CreateEventCommon commonParams, LockupTranched.Tranche[] tranches
);
```

**Parameters**

| Name           | Type                       | Description                                                                   |
| -------------- | -------------------------- | ----------------------------------------------------------------------------- |
| `streamId`     | `uint256`                  | The ID of the newly created stream.                                           |
| `commonParams` | `Lockup.CreateEventCommon` | Common parameters emitted in Create events across all Lockup models.          |
| `tranches`     | `LockupTranched.Tranche[]` | The tranches the protocol uses to compose the tranched distribution function. |
