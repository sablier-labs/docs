---
sidebar_position: 1
---

# SablierV2LockupLinear

[Git Source](https://github.com/sablier-labs/v2-core/blob/412ec3d3998a766507de96afdb26c797d2ae491d/docs/contracts/v2/reference/core)

**Inherits:**
[ISablierV2LockupLinear](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupLinear.md),
[SablierV2Lockup](/docs/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup.md)

See the documentation in
[ISablierV2LockupLinear](docs/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupLinear.md).

## State Variables

### \_streams

_Sablier V2 Lockup Linear streams mapped by unsigned integers._

```solidity
mapping(uint256 id => LockupLinear.Stream stream) private _streams;
```

## Functions

### constructor

_Emits a {TransferAdmin} event._

```solidity
constructor(
    address initialAdmin,
    ISablierV2Comptroller initialComptroller,
    ISablierV2NFTDescriptor initialNFTDescriptor
)
    ERC721("Sablier V2 Lockup Linear NFT", "SAB-V2-LOCKUP-LIN")
    SablierV2Lockup(initialAdmin, initialComptroller, initialNFTDescriptor);
```

**Parameters**

| Name                   | Type                      | Description                                |
| ---------------------- | ------------------------- | ------------------------------------------ |
| `initialAdmin`         | `address`                 | The address of the initial contract admin. |
| `initialComptroller`   | `ISablierV2Comptroller`   | The address of the initial comptroller.    |
| `initialNFTDescriptor` | `ISablierV2NFTDescriptor` | The address of the initial NFT descriptor. |

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

### getCliffTime

Retrieves the stream's cliff time, which is a Unix timestamp.

_Reverts if `streamId` references a null stream._

```solidity
function getCliffTime(uint256 streamId) external view override notNull(streamId) returns (uint40 cliffTime);
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

Retrieves the stream's range, which is a struct containing (i) the stream's start time, (ii) cliff time, and (iii) end
time, all as Unix timestamps.

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
    returns (LockupLinear.Stream memory stream);
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
f(x) = x * d + c
$$

Where:

- $x$ is the elapsed time divided by the stream's total duration.
- $d$ is the deposited amount.
- $c$ is the cliff amount. Upon cancellation of the stream, the amount streamed is calculated as the difference between
  the deposited amount and the refunded amount. Ultimately, when the stream becomes depleted, the streamed amount is
  equivalent to the total amount withdrawn.

_Reverts if `streamId` references a null stream._

```solidity
function streamedAmountOf(uint256 streamId)
    public
    view
    override(ISablierV2Lockup, ISablierV2LockupLinear)
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

### createWithDurations

Creates a stream by setting the start time to `block.timestamp`, and the end time to the sum of `block.timestamp` and
`params.durations.total. The stream is funded by `msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {Transfer} and {CreateLockupLinearStream} event. Requirements:

- All requirements in {createWithRange} must be met for the calculated parameters.

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

### createWithRange

Creates a stream with the provided start time and end time as the range. The stream is funded by `msg.sender` and is
wrapped in an ERC-721 NFT.

Emits a {Transfer} and {CreateLockupLinearStream} event. Notes:

- As long as the times are ordered, it is not an error for the start or the cliff time to be in the past. Requirements:
- Must not be delegate called.
- `params.totalAmount` must be greater than zero.
- If set, `params.broker.fee` must not be greater than `MAX_FEE`.
- `params.range.start` must be less than or equal to `params.range.cliff`.
- `params.range.cliff` must be less than `params.range.end`.
- `params.range.end` must be in the future.
- `params.recipient` must not be the zero address.
- `msg.sender` must have allowed this contract to spend at least `params.totalAmount` assets.

```solidity
function createWithRange(LockupLinear.CreateWithRange calldata params)
    external
    override
    noDelegateCall
    returns (uint256 streamId);
```

**Parameters**

| Name     | Type                           | Description                                                                        |
| -------- | ------------------------------ | ---------------------------------------------------------------------------------- |
| `params` | `LockupLinear.CreateWithRange` | Struct encapsulating the function parameters, which are documented in {DataTypes}. |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The id of the newly created stream. |

### \_calculateStreamedAmount

_Calculates the streamed amount without looking up the stream's status._

```solidity
function _calculateStreamedAmount(uint256 streamId) internal view returns (uint128);
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

### \_createWithRange

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _createWithRange(LockupLinear.CreateWithRange memory params) internal returns (uint256 streamId);
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
