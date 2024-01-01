---
sidebar_position: 1
---

# SablierV2Batch

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/53e259087984ff748fca6fb932fdb9c663c2b365/src/SablierV2Batch.sol)

**Inherits:** [ISablierV2Batch](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2Batch.md)

See the documentation in
[ISablierV2Batch](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2Batch.md).

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
    override
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
    override
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
    override
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
    override
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

### \_approve

_Helper function to approve a Sablier contract to spend funds from the batch. If the current allowance is insufficient,
this function approves Sablier to spend the exact `amount`. The {SafeERC20.forceApprove} function is used to handle
special ERC-20 assets (e.g. USDT) that require the current allowance to be zero before setting it to a non-zero value._

```solidity
function _approve(address sablierContract, IERC20 asset, uint256 amount) internal;
```

### \_handleTransfer

_Helper function to transfer assets from the caller to the batch contract and approve the Sablier contract._

```solidity
function _handleTransfer(address sablierContract, IERC20 asset, uint256 amount) internal;
```
