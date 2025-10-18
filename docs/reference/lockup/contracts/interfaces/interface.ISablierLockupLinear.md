# ISablierLockupLinear

[Git Source](https://github.com/sablier-labs/lockup/blob/58eaac45c20c57a93b73d887c714e68f061ec3e6/src/interfaces/ISablierLockupLinear.sol)

**Inherits:** [ISablierLockupState](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupState.md)

Creates Lockup streams with linear distribution model.

## Functions

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
| `params`        | `Lockup.CreateWithDurations` | Struct encapsulating the function parameters, which are documented in {Lockup} type.                             |
| `unlockAmounts` | `LockupLinear.UnlockAmounts` | Struct encapsulating (i) the amount to unlock at the start time and (ii) the amount to unlock at the cliff time. |
| `durations`     | `LockupLinear.Durations`     | Struct encapsulating (i) cliff period duration and (ii) total stream duration, both in seconds.                  |

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
- `params.depositAmount` must be greater than zero.
- `params.timestamps.start` must be greater than zero and less than `params.timestamps.end`.
- If set, `cliffTime` must be greater than `params.timestamps.start` and less than `params.timestamps.end`.
- `params.recipient` must not be the zero address.
- `params.sender` must not be the zero address.
- The sum of `params.unlockAmounts.start` and `params.unlockAmounts.cliff` must be less than or equal to deposit amount.
- If `params.timestamps.cliff` not set, the `params.unlockAmounts.cliff` must be zero.
- `msg.sender` must have allowed this contract to spend at least `params.depositAmount` tokens.
- `params.token` must not be the native token.
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
| `params`        | `Lockup.CreateWithTimestamps` | Struct encapsulating the function parameters, which are documented in {Lockup} type.                             |
| `unlockAmounts` | `LockupLinear.UnlockAmounts`  | Struct encapsulating (i) the amount to unlock at the start time and (ii) the amount to unlock at the cliff time. |
| `cliffTime`     | `uint40`                      | The Unix timestamp for the cliff period's end. A value of zero means there is no cliff.                          |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

## Events

### CreateLockupLinearStream

Emitted when an LL stream is created.

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
