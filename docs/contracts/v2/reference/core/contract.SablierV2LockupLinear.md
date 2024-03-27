---
sidebar_position: 1
---

# SablierV2LockupLinear

[Git Source](https://github.com/sablier-labs/v2-core/blob/63113dc3fbe43438eb305663e0d6b74eefc15857/src/SablierV2LockupLinear.sol)

**Inherits:**
[ISablierV2LockupLinear](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupLinear.md),
[SablierV2Lockup](/docs/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup.md)

See the documentation in
[ISablierV2LockupLinear](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupLinear.md).

## State Variables

### \_cliffs

_Cliff times mapped by stream ids._

```solidity
mapping(uint256 id => uint40 cliff) internal _cliffs;
```

## Functions

### constructor

_Emits a {TransferAdmin} event._

```solidity
constructor(
    address initialAdmin,
    ISablierV2NFTDescriptor initialNFTDescriptor
)
    ERC721("Sablier V2 Lockup Linear NFT", "SAB-V2-LOCKUP-LIN")
    SablierV2Lockup(initialAdmin, initialNFTDescriptor);
```

**Parameters**

| Name                   | Type                      | Description                                |
| ---------------------- | ------------------------- | ------------------------------------------ |
| `initialAdmin`         | `address`                 | The address of the initial contract admin. |
| `initialNFTDescriptor` | `ISablierV2NFTDescriptor` | The address of the initial NFT descriptor. |

### getCliffTime

Retrieves the stream's cliff time, which is a Unix timestamp. A value of zero means there is no cliff.

_Reverts if `streamId` references a null stream._

```solidity
function getCliffTime(uint256 streamId) external view override notNull(streamId) returns (uint40 cliffTime);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### getRange

Retrieves the stream's range, which is a struct documented in {DataTypes}.

_Reverts if `streamId` references a null stream._

```solidity
function getRange(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (LockupLinear.Range memory range);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### getStream

Retrieves the stream details, which is a struct documented in {DataTypes}.

_Reverts if `streamId` references a null stream._

```solidity
function getStream(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (LockupLinear.StreamLL memory stream);
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
function createWithDurations(LockupLinear.CreateWithDurations calldata params)
    external
    override
    noDelegateCall
    returns (uint256 streamId);
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
function createWithTimestamps(LockupLinear.CreateWithTimestamps calldata params)
    external
    override
    noDelegateCall
    returns (uint256 streamId);
```

**Parameters**

| Name     | Type                                | Description                                                                        |
| -------- | ----------------------------------- | ---------------------------------------------------------------------------------- |
| `params` | `LockupLinear.CreateWithTimestamps` | Struct encapsulating the function parameters, which are documented in {DataTypes}. |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The id of the newly created stream. |

### \_calculateStreamedAmount

Calculates the streamed amount of the stream without looking up the stream's status, which is implemented by child
contracts, it can vary depending on the model.

The streaming function is:

$$
f(x) = x * d + c
$$

Where:

- $x$ is the elapsed time divided by the stream's total duration.
- $d$ is the deposited amount.
- $c$ is the cliff amount.

```solidity
function _calculateStreamedAmount(uint256 streamId) internal view override returns (uint128);
```

### \_createWithTimestamps

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _createWithTimestamps(LockupLinear.CreateWithTimestamps memory params) internal returns (uint256 streamId);
```
