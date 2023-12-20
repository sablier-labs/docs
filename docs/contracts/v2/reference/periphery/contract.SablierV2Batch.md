# SablierV2Batch

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/release/src/SablierV2Batch.sol)

**Inherits:** [ISablierV2Batch](/contracts/v2/reference/periphery/interfaces/interface.ISablierV2Batch)

_See the documentation in [ISablierV2Batch](/contracts/v2/reference/periphery/interfaces/interface.ISablierV2Batch)._

## User Facing Functions

### createMerkleStreamerLL

Creates a batch of Lockup Linear streams using `createWithDurations`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from
  [ISablierV2LockupLinear.createWithDurations](/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupLinear#createwithdurations)
  must be met for each stream.

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

| Name           | Type                          | Description                                                                                                                                                                                     |
| -------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lockupLinear` | `ISablierV2LockupLinear`      | The address of the {SablierV2LockupLinear} contract.                                                                                                                                            |
| `asset`        | `IERC20`                      | The address of the `ERC-20` asset.                                                                                                                                                              |
| `batch`        | `Batch.CreateWithDurations[]` | An array of structs, each encapsulating a subset of the parameters of [SablierV2LockupLinear.createWithDurations](/contracts/v2/reference/core/types/library.LockupLinear#createwithdurations). |

### createWithRange

Creates a batch of Lockup Linear streams using `createWithRange`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from
  [ISablierV2LockupLinear.createWithRange](/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupLinear#createwithrange)
  must be met for each stream.

```solidity
function createWithRange(
    ISablierV2LockupLinear lockupLinear,
    IERC20 asset,
    Batch.createWithRange[] calldata batch
)
    external
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name           | Type                      | Description                                                                                                                                                                             |
| -------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lockupLinear` | `ISablierV2LockupLinear`  | The address of the {SablierV2LockupLinear} contract.                                                                                                                                    |
| `asset`        | `IERC20`                  | The address of the `ERC-20` asset.                                                                                                                                                      |
| `batch`        | `Batch.CreateWithRange[]` | An array of structs, each encapsulating a subset of the parameters of [SablierV2LockupLinear.createWithRange](/contracts/v2/reference/core/types/library.LockupLinear#createwithrange). |

### createWithDeltas

Creates a batch of Lockup Dynamic streams using `createWithDeltas`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from
  [ISablierV2LockupDynamic.createWithDeltas](/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupDynamic#createwithdeltas)
  must be met for each stream.

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

| Name            | Type                       | Description                                                                                                                                                                                 |
| --------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lockupDynamic` | `ISablierV2LockupDynamic`  | The address of the {SablierV2LockupDynamic} contract.                                                                                                                                       |
| `asset`         | `IERC20`                   | The address of the `ERC-20` asset.                                                                                                                                                          |
| `batch`         | `Batch.CreateWithDeltas[]` | An array of structs, each encapsulating a subset of the parameters of [SablierV2LockupDynamic.createWithDeltas](/contracts/v2/reference/core/types/library.LockupDynamic#createwithdeltas). |

### createWithMilestones

Creates a batch of Lockup Dynamic streams using `createWithMilestones`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from
  [ISablierV2LockupDynamic.createWithMilestones](/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupDynamic#createwithmilestones)
  must be met for each stream.

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

| Name            | Type                           | Description                                                                                                                                                                                         |
| --------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lockupDynamic` | `ISablierV2LockupDynamic`      | The address of the {SablierV2LockupDynamic} contract.                                                                                                                                               |
| `asset`         | `IERC20`                       | The address of the `ERC-20` asset.                                                                                                                                                                  |
| `batch`         | `Batch.CreateWithMilestones[]` | An array of structs, each encapsulating a subset of the parameters of [SablierV2LockupDynamic.createWithMilestones](/contracts/v2/reference/core/types/library.LockupDynamic#createwithmilestones). |

## Internal Functions

### \_approve

Helper function to approve a Sablier contract to spend funds from the batch. If the current allowance is insufficient,
this function approves Sablier to spend the exact `amount`. The {SafeERC20.forceApprove} function is used to handle
special `ERC-20 assets` (e.g. USDT) that require the current allowance to be zero before setting it to a non-zero value.

```solidity
function _approve(address sablierContract, IERC20 asset, uint256 amount) internal;
```

**Parameters**

| Name              | Type      | Description                                     |
| ----------------- | --------- | ----------------------------------------------- |
| `sablierContract` | `address` | The address of the Sablier contract to approve. |
| `asset`           | `IERC20`  | The address of the `ERC-20` asset.              |
| `amount`          | `uint256` | The amount of tokens to approve.                |

### \_handleTransfer

Helper function to transfer assets from the caller to the batch contract and approve the Sablier contract.

```solidity
function _handleTransfer(address sablierContract, IERC20 asset, uint256 amount) internal;
```

**Parameters**

| Name              | Type      | Description                                           |
| ----------------- | --------- | ----------------------------------------------------- |
| `sablierContract` | `address` | The address of the Sablier contract to transfer from. |
| `asset`           | `IERC20`  | The address of the `ERC-20` asset.                    |
| `amount`          | `uint256` | The amount of tokens to transfer.                     |
