---
sidebar_position: 1
---

# SablierV2LockupLinear

[Git Source](https://github.com/sablier-labs/v2-core/blob/36b49d3bf2a396d19083d28247e8e03d7a3a2ee1/src/SablierV2LockupLinear.sol)

**Inherits:**
[ISablierV2LockupLinear](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupLinear.md),
[SablierV2Lockup](/docs/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup.md)

See the documentation in
[ISablierV2LockupLinear](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupLinear.md).

## State Variables

### \_cliffs

_Cliff times mapped by stream IDs. This complements the `_streams` mapping in
[SablierV2Lockup](docs/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup.md)._

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
    returns (LockupLinear.StreamLL memory stream);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

**Returns**

| Name     | Type                    | Description                           |
| -------- | ----------------------- | ------------------------------------- |
| `stream` | `LockupLinear.StreamLL` | See the documentation in {DataTypes}. |

### getTimestamps

Retrieves the stream's start, cliff and end timestamps.

_Reverts if `streamId` references a null stream._

```solidity
function getTimestamps(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (LockupLinear.Timestamps memory timestamps);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

**Returns**

| Name         | Type                      | Description                           |
| ------------ | ------------------------- | ------------------------------------- |
| `timestamps` | `LockupLinear.Timestamps` | See the documentation in {DataTypes}. |

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
| `streamId` | `uint256` | The ID of the newly created stream. |

### createWithTimestamps

Creates a stream with the provided start time and end time. The stream is funded by `msg.sender` and is wrapped in an
ERC-721 NFT.

Emits a {Transfer} and {CreateLockupLinearStream} event. Notes:

- A cliff time of zero means there is no cliff.
- As long as the times are ordered, it is not an error for the start or the cliff time to be in the past. Requirements:
- Must not be delegate called.
- `params.totalAmount` must be greater than zero.
- If set, `params.broker.fee` must not be greater than `MAX_BROKER_FEE`.
- `params.timestamps.start` must be greater than zero and less than `params.timestamps.end`.
- If set, `params.timestamps.cliff` must be greater than `params.timestamps.start` and less than
  `params.timestamps.end`.
- `params.timestamps.end` must be in the future.
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
| `streamId` | `uint256` | The ID of the newly created stream. |

### \_calculateStreamedAmount

Calculates the streamed amount of the stream without looking up the stream's status.

The distribution function is:

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

### \_create

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _create(LockupLinear.CreateWithTimestamps memory params) internal returns (uint256 streamId);
```
