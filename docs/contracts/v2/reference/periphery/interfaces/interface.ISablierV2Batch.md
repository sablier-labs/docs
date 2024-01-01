# ISablierV2Batch

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/53e259087984ff748fca6fb932fdb9c663c2b365/src/interfaces/ISablierV2Batch.sol)

Helper to batch create Sablier V2 Lockup streams.

## Functions

### createWithDurations

Creates a batch of Lockup Linear streams using `createWithDurations`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from {ISablierV2LockupLinear.createWithDurations} must be met for each stream.

```solidity
function createWithDurations(
    ISablierV2LockupLinear lockupLinear,
    IERC20 asset,
    Batch.CreateWithDurations[] calldata batch
)
    external
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name           | Type                          | Description                                                                                                              |
| -------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `lockupLinear` | `ISablierV2LockupLinear`      | The address of the [SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) contract. |
| `asset`        | `IERC20`                      | The contract address of the ERC-20 asset used for streaming.                                                             |
| `batch`        | `Batch.CreateWithDurations[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupLinear.createWithDurations}.       |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### createWithRange

Creates a batch of Lockup Linear streams using `createWithRange`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from {ISablierV2LockupLinear.createWithRange} must be met for each stream.

```solidity
function createWithRange(
    ISablierV2LockupLinear lockupLinear,
    IERC20 asset,
    Batch.CreateWithRange[] calldata batch
)
    external
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name           | Type                      | Description                                                                                                              |
| -------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `lockupLinear` | `ISablierV2LockupLinear`  | The address of the [SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) contract. |
| `asset`        | `IERC20`                  | The contract address of the ERC-20 asset used for streaming.                                                             |
| `batch`        | `Batch.CreateWithRange[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupLinear.createWithRange}.           |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### createWithDeltas

Creates a batch of Lockup Dynamic streams using `createWithDeltas`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from {ISablierV2LockupDynamic.createWithDeltas} must be met for each stream.

```solidity
function createWithDeltas(
    ISablierV2LockupDynamic lockupDynamic,
    IERC20 asset,
    Batch.CreateWithDeltas[] calldata batch
)
    external
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name            | Type                       | Description                                                                                                                |
| --------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `lockupDynamic` | `ISablierV2LockupDynamic`  | The address of the [SablierV2LockupDynamic](docs/contracts/v2/reference/core/contract.SablierV2LockupDynamic.md) contract. |
| `asset`         | `IERC20`                   | The contract address of the ERC-20 asset used for streaming.                                                               |
| `batch`         | `Batch.CreateWithDeltas[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupDynamic.createWithDeltas}.           |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### createWithMilestones

Creates a batch of Lockup Dynamic streams using `createWithMilestones`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from {ISablierV2LockupDynamic.createWithMilestones} must be met for each stream.

```solidity
function createWithMilestones(
    ISablierV2LockupDynamic lockupDynamic,
    IERC20 asset,
    Batch.CreateWithMilestones[] calldata batch
)
    external
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name            | Type                           | Description                                                                                                                |
| --------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `lockupDynamic` | `ISablierV2LockupDynamic`      | The address of the [SablierV2LockupDynamic](docs/contracts/v2/reference/core/contract.SablierV2LockupDynamic.md) contract. |
| `asset`         | `IERC20`                       | The contract address of the ERC-20 asset used for streaming.                                                               |
| `batch`         | `Batch.CreateWithMilestones[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupDynamic.createWithMilestones}.       |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |
