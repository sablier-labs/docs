# ISablierLockupTranched

[Git Source](https://github.com/sablier-labs/lockup/blob/58eaac45c20c57a93b73d887c714e68f061ec3e6/src/interfaces/ISablierLockupTranched.sol)

**Inherits:** [ISablierLockupState](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupState.md)

Creates Lockup streams with tranched distribution model.

## Functions

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
| `params`               | `Lockup.CreateWithDurations`           | Struct encapsulating the function parameters, which are documented in {Lockup} type.                                                                                                         |
| `tranchesWithDuration` | `LockupTranched.TrancheWithDuration[]` | Tranches with durations used to compose the tranched distribution function. Timestamps are calculated by starting from `block.timestamp` and adding each duration to the previous timestamp. |

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
- `params.depositAmount` must be greater than zero.
- `params.timestamps.start` must be greater than zero and less than the first tranche's timestamp.
- `tranches` must have at least one tranche.
- The tranche timestamps must be arranged in ascending order.
- `params.timestamps.end` must be equal to the last tranche's timestamp.
- The sum of the tranche amounts must equal the deposit amount.
- `params.recipient` must not be the zero address.
- `params.sender` must not be the zero address.
- `msg.sender` must have allowed this contract to spend at least `params.depositAmount` tokens.
- `params.token` must not be the native token.
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

| Name       | Type                          | Description                                                                          |
| ---------- | ----------------------------- | ------------------------------------------------------------------------------------ |
| `params`   | `Lockup.CreateWithTimestamps` | Struct encapsulating the function parameters, which are documented in {Lockup} type. |
| `tranches` | `LockupTranched.Tranche[]`    | Tranches used to compose the tranched distribution function.                         |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

## Events

### CreateLockupTranchedStream

Emitted when an LT stream is created.

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
