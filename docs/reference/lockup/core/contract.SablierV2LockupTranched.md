---
sidebar_position: 2
---

# SablierV2LockupTranched

[Git Source](https://github.com/sablier-labs/v2-core/blob/73356945b53e8dd4112f34f3e2c63c278c4a5239/src/SablierV2LockupTranched.sol)

**Inherits:** [ISablierV2LockupTranched](/docs/reference/lockup/core/interfaces/interface.ISablierV2LockupTranched.md),
[SablierV2Lockup](/docs/reference/lockup/core/abstracts/abstract.SablierV2Lockup.md)

See the documentation in
[ISablierV2LockupTranched](/docs/reference/lockup/core/interfaces/interface.ISablierV2LockupTranched.md).

## State Variables

### MAX_TRANCHE_COUNT

The maximum number of tranches allowed in a stream.

_This is initialized at construction time and cannot be changed later._

```solidity
uint256 public immutable override MAX_TRANCHE_COUNT;
```

### \_tranches

_Stream tranches mapped by stream IDs. This complements the `_streams` mapping in
[SablierV2Lockup](docs/reference/lockup/core/abstracts/abstract.SablierV2Lockup.md)._

```solidity
mapping(uint256 id => LockupTranched.Tranche[] tranches) internal _tranches;
```

## Functions

### constructor

_Emits a {TransferAdmin} event._

```solidity
constructor(
    address initialAdmin,
    ISablierV2NFTDescriptor initialNFTDescriptor,
    uint256 maxTrancheCount
)
    ERC721("Sablier V2 Lockup Tranched NFT", "SAB-V2-LOCKUP-TRA")
    SablierV2Lockup(initialAdmin, initialNFTDescriptor);
```

**Parameters**

| Name                   | Type                      | Description                                         |
| ---------------------- | ------------------------- | --------------------------------------------------- |
| `initialAdmin`         | `address`                 | The address of the initial contract admin.          |
| `initialNFTDescriptor` | `ISablierV2NFTDescriptor` | The address of the NFT descriptor contract.         |
| `maxTrancheCount`      | `uint256`                 | The maximum number of tranches allowed in a stream. |

### getStream

Retrieves the full stream details.

_Reverts if `streamId` references a null stream._

```solidity
function getStream(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (LockupTranched.StreamLT memory stream);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

**Returns**

| Name     | Type                      | Description                           |
| -------- | ------------------------- | ------------------------------------- |
| `stream` | `LockupTranched.StreamLT` | See the documentation in {DataTypes}. |

### getTimestamps

Retrieves the stream's start and end timestamps.

_Reverts if `streamId` references a null stream._

```solidity
function getTimestamps(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (LockupTranched.Timestamps memory timestamps);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

**Returns**

| Name         | Type                        | Description                           |
| ------------ | --------------------------- | ------------------------------------- |
| `timestamps` | `LockupTranched.Timestamps` | See the documentation in {DataTypes}. |

### getTranches

Retrieves the tranches used to compose the tranched distribution function.

_Reverts if `streamId` references a null stream._

```solidity
function getTranches(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (LockupTranched.Tranche[] memory tranches);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### createWithDurations

Creates a stream by setting the start time to `block.timestamp`, and the end time to the sum of `block.timestamp` and
all specified time durations. The tranche timestamps are derived from these durations. The stream is funded by
`msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {Transfer} and {CreateLockupTrancheStream} event. Requirements:

- All requirements in {createWithTimestamps} must be met for the calculated parameters.

```solidity
function createWithDurations(LockupTranched.CreateWithDurations calldata params)
    external
    override
    noDelegateCall
    returns (uint256 streamId);
```

**Parameters**

| Name     | Type                                 | Description                                                                        |
| -------- | ------------------------------------ | ---------------------------------------------------------------------------------- |
| `params` | `LockupTranched.CreateWithDurations` | Struct encapsulating the function parameters, which are documented in {DataTypes}. |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

### createWithTimestamps

Creates a stream with the provided tranche timestamps, implying the end time from the last timestamp. The stream is
funded by `msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {Transfer} and {CreateLockupTrancheStream} event. Notes:

- As long as the tranche timestamps are arranged in ascending order, it is not an error for some of them to be in the
  past. Requirements:
- Must not be delegate called.
- `params.totalAmount` must be greater than zero.
- If set, `params.broker.fee` must not be greater than `MAX_BROKER_FEE`.
- `params.startTime` must be greater than zero and less than the first tranche's timestamp.
- `params.tranches` must have at least one tranche, but not more than `MAX_TRANCHE_COUNT`.
- The tranche timestamps must be arranged in ascending order.
- The last tranche timestamp (i.e. the stream's end time) must be in the future.
- The sum of the tranche amounts must equal the deposit amount.
- `params.recipient` must not be the zero address.
- `msg.sender` must have allowed this contract to spend at least `params.totalAmount` assets.

```solidity
function createWithTimestamps(LockupTranched.CreateWithTimestamps calldata params)
    external
    override
    noDelegateCall
    returns (uint256 streamId);
```

**Parameters**

| Name     | Type                                  | Description                                                                        |
| -------- | ------------------------------------- | ---------------------------------------------------------------------------------- |
| `params` | `LockupTranched.CreateWithTimestamps` | Struct encapsulating the function parameters, which are documented in {DataTypes}. |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

### \_calculateStreamedAmount

Calculates the streamed amount of the stream without looking up the stream's status.

The distribution function is:

$$
f(x) = \Sigma(eta)
$$

Where:

- $\Sigma(eta)$ is the sum of all vested tranches' amounts.

```solidity
function _calculateStreamedAmount(uint256 streamId) internal view override returns (uint128);
```

### \_create

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _create(LockupTranched.CreateWithTimestamps memory params) internal returns (uint256 streamId);
```
