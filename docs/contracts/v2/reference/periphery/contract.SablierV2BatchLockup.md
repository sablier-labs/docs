---
sidebar_position: 1
---

# SablierV2BatchLockup

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/c10978dd4cdb54301b9c2d63c7e0af41da9110f3/src/SablierV2BatchLockup.sol)

**Inherits:**
[ISablierV2BatchLockup](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2BatchLockup.md)

See the documentation in
[ISablierV2BatchLockup](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2BatchLockup.md).

## Functions

### createWithDurationsLD

Creates a batch of Lockup Dynamic streams using `createWithDurations`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from {ISablierV2LockupDynamic.createWithDurations} must be met for each stream.

```solidity
function createWithDurationsLD(
    ISablierV2LockupDynamic lockupDynamic,
    IERC20 asset,
    BatchLockup.CreateWithDurationsLD[] calldata batch
)
    external
    override
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name            | Type                                  | Description                                                                                                                |
| --------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `lockupDynamic` | `ISablierV2LockupDynamic`             | The address of the [SablierV2LockupDynamic](docs/contracts/v2/reference/core/contract.SablierV2LockupDynamic.md) contract. |
| `asset`         | `IERC20`                              | The contract address of the ERC-20 asset to be distributed.                                                                |
| `batch`         | `BatchLockup.CreateWithDurationsLD[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupDynamic.createWithDurations}.        |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### createWithTimestampsLD

Creates a batch of Lockup Dynamic streams using `createWithTimestamps`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from {ISablierV2LockupDynamic.createWithTimestamps} must be met for each stream.

```solidity
function createWithTimestampsLD(
    ISablierV2LockupDynamic lockupDynamic,
    IERC20 asset,
    BatchLockup.CreateWithTimestampsLD[] calldata batch
)
    external
    override
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name            | Type                                   | Description                                                                                                                |
| --------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `lockupDynamic` | `ISablierV2LockupDynamic`              | The address of the [SablierV2LockupDynamic](docs/contracts/v2/reference/core/contract.SablierV2LockupDynamic.md) contract. |
| `asset`         | `IERC20`                               | The contract address of the ERC-20 asset to be distributed.                                                                |
| `batch`         | `BatchLockup.CreateWithTimestampsLD[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupDynamic.createWithTimestamps}.       |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### createWithDurationsLL

Creates a batch of LockupLinear streams using `createWithDurations`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from {ISablierV2LockupLinear.createWithDurations} must be met for each stream.

```solidity
function createWithDurationsLL(
    ISablierV2LockupLinear lockupLinear,
    IERC20 asset,
    BatchLockup.CreateWithDurationsLL[] calldata batch
)
    external
    override
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name           | Type                                  | Description                                                                                                              |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `lockupLinear` | `ISablierV2LockupLinear`              | The address of the [SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) contract. |
| `asset`        | `IERC20`                              | The contract address of the ERC-20 asset to be distributed.                                                              |
| `batch`        | `BatchLockup.CreateWithDurationsLL[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupLinear.createWithDurations}.       |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### createWithTimestampsLL

Creates a batch of LockupLinear streams using `createWithTimestamps`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from {ISablierV2LockupLinear.createWithTimestamps} must be met for each stream.

```solidity
function createWithTimestampsLL(
    ISablierV2LockupLinear lockupLinear,
    IERC20 asset,
    BatchLockup.CreateWithTimestampsLL[] calldata batch
)
    external
    override
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name           | Type                                   | Description                                                                                                              |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `lockupLinear` | `ISablierV2LockupLinear`               | The address of the [SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) contract. |
| `asset`        | `IERC20`                               | The contract address of the ERC-20 asset to be distributed.                                                              |
| `batch`        | `BatchLockup.CreateWithTimestampsLL[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupLinear.createWithTimestamps}.      |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### createWithDurationsLT

Creates a batch of LockupTranched streams using `createWithDurations`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from {ISablierV2LockupTranched.createWithDurations} must be met for each stream.

```solidity
function createWithDurationsLT(
    ISablierV2LockupTranched lockupTranched,
    IERC20 asset,
    BatchLockup.CreateWithDurationsLT[] calldata batch
)
    external
    override
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name             | Type                                  | Description                                                                                                                  |
| ---------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `lockupTranched` | `ISablierV2LockupTranched`            | The address of the [SablierV2LockupTranched](docs/contracts/v2/reference/core/contract.SablierV2LockupTranched.md) contract. |
| `asset`          | `IERC20`                              | The contract address of the ERC-20 asset to be distributed.                                                                  |
| `batch`          | `BatchLockup.CreateWithDurationsLT[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupTranched.createWithDurations}.         |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### createWithTimestampsLT

Creates a batch of LockupTranched streams using `createWithTimestamps`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from {ISablierV2LockupTranched.createWithTimestamps} must be met for each stream.

```solidity
function createWithTimestampsLT(
    ISablierV2LockupTranched lockupTranched,
    IERC20 asset,
    BatchLockup.CreateWithTimestampsLT[] calldata batch
)
    external
    override
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name             | Type                                   | Description                                                                                                                  |
| ---------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `lockupTranched` | `ISablierV2LockupTranched`             | The address of the [SablierV2LockupTranched](docs/contracts/v2/reference/core/contract.SablierV2LockupTranched.md) contract. |
| `asset`          | `IERC20`                               | The contract address of the ERC-20 asset to be distributed.                                                                  |
| `batch`          | `BatchLockup.CreateWithTimestampsLT[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupTranched.createWithTimestamps}.        |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### \_approve

_Helper function to approve a Sablier contract to spend funds from the batchLockup. If the current allowance is
insufficient, this function approves Sablier to spend the exact `amount`. The {SafeERC20.forceApprove} function is used
to handle special ERC-20 assets (e.g. USDT) that require the current allowance to be zero before setting it to a
non-zero value._

```solidity
function _approve(address sablierContract, IERC20 asset, uint256 amount) internal;
```

### \_handleTransfer

_Helper function to transfer assets from the caller to the batchLockup contract and approve the Sablier contract._

```solidity
function _handleTransfer(address sablierContract, IERC20 asset, uint256 amount) internal;
```
