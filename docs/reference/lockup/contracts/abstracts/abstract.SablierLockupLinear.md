# SablierLockupLinear

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/7cb361717fd2f0289ad8d69469a3c00804b21657/src/abstracts/SablierLockupLinear.sol)

**Inherits:** [ISablierLockupLinear](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupLinear.md),
[NoDelegateCall](/docs/reference/lockup/contracts/abstracts/abstract.NoDelegateCall.md),
[SablierLockupState](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupState.md)

**Title:** SablierLockupLinear

See the documentation in
[ISablierLockupLinear](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupLinear.md).

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
    uint40 granularity,
    LockupLinear.Durations calldata durations
)
    external
    payable
    override
    noDelegateCall
    returns (uint256 streamId);
```

**Parameters**

| Name            | Type                         | Description                                                                                                      |
| --------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `params`        | `Lockup.CreateWithDurations` | Struct encapsulating the function parameters, which are documented in {Lockup} type.                             |
| `unlockAmounts` | `LockupLinear.UnlockAmounts` | Struct encapsulating (i) the amount to unlock at the start time and (ii) the amount to unlock at the cliff time. |
| `granularity`   | `uint40`                     | The smallest step in time between two consecutive token unlocks. Zero is a sentinel value for 1 second.          |
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
- If `params.timestamps.cliff` is not set, the `params.unlockAmounts.cliff` must be zero.
- `granularity` must not exceed the streamable range which is `params.timestamps.end - cliffTime` if cliff is set,
  `params.timestamps.end - params.timestamps.start` otherwise.
- `msg.sender` must have allowed this contract to spend at least `params.depositAmount` tokens.
- `params.token` must not be the native token.
- `params.shape.length` must not be greater than 32 characters.

```solidity
function createWithTimestampsLL(
    Lockup.CreateWithTimestamps calldata params,
    LockupLinear.UnlockAmounts calldata unlockAmounts,
    uint40 granularity,
    uint40 cliffTime
)
    external
    payable
    override
    noDelegateCall
    returns (uint256 streamId);
```

**Parameters**

| Name            | Type                          | Description                                                                                                      |
| --------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `params`        | `Lockup.CreateWithTimestamps` | Struct encapsulating the function parameters, which are documented in {Lockup} type.                             |
| `unlockAmounts` | `LockupLinear.UnlockAmounts`  | Struct encapsulating (i) the amount to unlock at the start time and (ii) the amount to unlock at the cliff time. |
| `granularity`   | `uint40`                      | The smallest step in time between two consecutive token unlocks. Zero is a sentinel value for 1 second.          |
| `cliffTime`     | `uint40`                      | The Unix timestamp for the cliff period's end. A value of zero means there is no cliff.                          |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

### \_createLL

See the documentation for the user-facing functions that call this private function.

```solidity
function _createLL(
    bool cancelable,
    uint40 cliffTime,
    uint128 depositAmount,
    address recipient,
    address sender,
    string memory shape,
    Lockup.Timestamps memory timestamps,
    IERC20 token,
    bool transferable,
    LockupLinear.UnlockAmounts memory unlockAmounts,
    uint40 granularity
)
    private
    returns (uint256 streamId);
```
