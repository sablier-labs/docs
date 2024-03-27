---
sidebar_position: 2
---

# SablierV2LockupTranched

[Git Source](https://github.com/sablier-labs/v2-core/blob/63113dc3fbe43438eb305663e0d6b74eefc15857/src/SablierV2LockupTranched.sol)

**Inherits:**
[ISablierV2LockupTranched](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupTranched.md),
[SablierV2Lockup](/docs/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup.md)

See the documentation in
[ISablierV2LockupTranched](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupTranched.md).

## State Variables

### MAX_TRANCHE_COUNT

The maximum number of tranches allowed in a stream.

_This is initialized at construction time and cannot be changed later._

```solidity
uint256 public immutable override MAX_TRANCHE_COUNT;
```

### \_tranches

_Stream tranches mapped by stream ids._

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

### getRange

Retrieves the stream's range, which is a struct documented in {DataTypes}.

_Reverts if `streamId` references a null stream._

```solidity
function getRange(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (LockupTranched.Range memory range);
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
    returns (LockupTranched.StreamLT memory stream);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### getTranches

Retrieves the tranches the protocol uses to compose the custom distribution curve.

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
| `streamId` | `uint256` | The stream id for the query. |

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
| `streamId` | `uint256` | The id of the newly created stream. |

### createWithTimestamps

Creates a stream with the provided tranche timestamps, implying the end time from the last timestamp. The stream is
funded by `msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {Transfer} and {CreateLockupTrancheStream} event. Notes:

- As long as the tranche timestamps are arranged in ascending order, it is not an error for some of them to be in the
  past. Requirements:
- Must not be delegate called.
- `params.totalAmount` must be greater than zero.
- If set, `params.broker.fee` must not be greater than `MAX_BROKER_FEE`.
- `params.startTime` must be greater than zero and less than the first tranche's timestamp
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
| `streamId` | `uint256` | The id of the newly created stream. |

### \_calculateStreamedAmount

Calculates the streamed amount of the stream without looking up the stream's status, which is implemented by child
contracts, it can vary depending on the model.

The streaming function is:

$$
f(x) = \Sigma(eta)
$$

Where:

- $\Sigma(eta)$ is the sum of all elapsed tranches' amounts.

```solidity
function _calculateStreamedAmount(uint256 streamId) internal view override returns (uint128);
```

### \_createWithTimestamps

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _createWithTimestamps(LockupTranched.CreateWithTimestamps memory params) internal returns (uint256 streamId);
```
