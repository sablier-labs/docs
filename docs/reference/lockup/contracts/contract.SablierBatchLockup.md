---
sidebar_position: 1
---

# SablierBatchLockup

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/SablierBatchLockup.sol)

**Inherits:** [ISablierBatchLockup](/docs/reference/lockup/contracts/interfaces/interface.ISablierBatchLockup.md)

**Title:** SablierBatchLockup

See the documentation in
[ISablierBatchLockup](/docs/reference/lockup/contracts/interfaces/interface.ISablierBatchLockup.md).

## Functions

### createWithDurationsLD

Creates a batch of LD streams using `createWithDurationsLD`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from {ISablierLockupDynamic.createWithDurationsLD} must be met for each stream.

```solidity
function createWithDurationsLD(
    ISablierLockup lockup,
    IERC20 token,
    BatchLockup.CreateWithDurationsLD[] calldata batch
)
    external
    override
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name     | Type                                  | Description                                                                                                          |
| -------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `lockup` | `ISablierLockup`                      | The address of the [SablierLockup](/docs/reference/lockup/contracts/contract.SablierLockup.md) contract.             |
| `token`  | `IERC20`                              | The contract address of the ERC-20 token to be distributed.                                                          |
| `batch`  | `BatchLockup.CreateWithDurationsLD[]` | An array of structs, each encapsulating a subset of the parameters of {ISablierLockupDynamic.createWithDurationsLD}. |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### createWithTimestampsLD

Creates a batch of LD streams using `createWithTimestampsLD`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from {ISablierLockupDynamic.createWithTimestampsLD} must be met for each stream.

```solidity
function createWithTimestampsLD(
    ISablierLockup lockup,
    IERC20 token,
    BatchLockup.CreateWithTimestampsLD[] calldata batch
)
    external
    override
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name     | Type                                   | Description                                                                                                           |
| -------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `lockup` | `ISablierLockup`                       | The address of the [SablierLockup](/docs/reference/lockup/contracts/contract.SablierLockup.md) contract.              |
| `token`  | `IERC20`                               | The contract address of the ERC-20 token to be distributed.                                                           |
| `batch`  | `BatchLockup.CreateWithTimestampsLD[]` | An array of structs, each encapsulating a subset of the parameters of {ISablierLockupDynamic.createWithTimestampsLD}. |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### createWithDurationsLL

Creates a batch of LL streams using `createWithDurationsLL`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from {ISablierLockupLinear.createWithDurationsLL} must be met for each stream.

```solidity
function createWithDurationsLL(
    ISablierLockup lockup,
    IERC20 token,
    BatchLockup.CreateWithDurationsLL[] calldata batch
)
    external
    override
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name     | Type                                  | Description                                                                                                         |
| -------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `lockup` | `ISablierLockup`                      | The address of the [SablierLockup](/docs/reference/lockup/contracts/contract.SablierLockup.md) contract.            |
| `token`  | `IERC20`                              | The contract address of the ERC-20 token to be distributed.                                                         |
| `batch`  | `BatchLockup.CreateWithDurationsLL[]` | An array of structs, each encapsulating a subset of the parameters of {ISablierLockupLinear.createWithDurationsLL}. |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### createWithTimestampsLL

Creates a batch of LL streams using `createWithTimestampsLL`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from {ISablierLockupLinear.createWithTimestampsLL} must be met for each stream.

```solidity
function createWithTimestampsLL(
    ISablierLockup lockup,
    IERC20 token,
    BatchLockup.CreateWithTimestampsLL[] calldata batch
)
    external
    override
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name     | Type                                   | Description                                                                                                          |
| -------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `lockup` | `ISablierLockup`                       | The address of the [SablierLockup](/docs/reference/lockup/contracts/contract.SablierLockup.md) contract.             |
| `token`  | `IERC20`                               | The contract address of the ERC-20 token to be distributed.                                                          |
| `batch`  | `BatchLockup.CreateWithTimestampsLL[]` | An array of structs, each encapsulating a subset of the parameters of {ISablierLockupLinear.createWithTimestampsLL}. |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### createWithTimestampsLPG

Creates a batch of LPG streams using `createWithTimestampsLPG`.

Notes:

- The LPG model does not support a "createWithDuration" function because the
  [SablierLockup](/docs/reference/lockup/contracts/contract.SablierLockup.md) contract is at the size limit. If the EVM
  contract size limit is increased in the future, this function will be added. Requirements:
- There must be at least one element in `batch`.
- All requirements from {ISablierLockupPriceGated.createWithTimestampsLPG} must be met for each stream.

```solidity
function createWithTimestampsLPG(
    ISablierLockup lockup,
    IERC20 token,
    BatchLockup.CreateWithTimestampsLPG[] calldata batch
)
    external
    override
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name     | Type                                    | Description                                                                                                               |
| -------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `lockup` | `ISablierLockup`                        | The address of the [SablierLockup](/docs/reference/lockup/contracts/contract.SablierLockup.md) contract.                  |
| `token`  | `IERC20`                                | The contract address of the ERC-20 token to be distributed.                                                               |
| `batch`  | `BatchLockup.CreateWithTimestampsLPG[]` | An array of structs, each encapsulating a subset of the parameters of {ISablierLockupPriceGated.createWithTimestampsLPG}. |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### createWithDurationsLT

Creates a batch of LT streams using `createWithDurationsLT`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from {ISablierLockupTranched.createWithDurationsLT} must be met for each stream.

```solidity
function createWithDurationsLT(
    ISablierLockup lockup,
    IERC20 token,
    BatchLockup.CreateWithDurationsLT[] calldata batch
)
    external
    override
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name     | Type                                  | Description                                                                                                           |
| -------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `lockup` | `ISablierLockup`                      | The address of the [SablierLockup](/docs/reference/lockup/contracts/contract.SablierLockup.md) contract.              |
| `token`  | `IERC20`                              | The contract address of the ERC-20 token to be distributed.                                                           |
| `batch`  | `BatchLockup.CreateWithDurationsLT[]` | An array of structs, each encapsulating a subset of the parameters of {ISablierLockupTranched.createWithDurationsLT}. |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### createWithTimestampsLT

Creates a batch of LT streams using `createWithTimestampsLT`.

Requirements:

- There must be at least one element in `batch`.
- All requirements from {ISablierLockupTranched.createWithTimestampsLT} must be met for each stream.

```solidity
function createWithTimestampsLT(
    ISablierLockup lockup,
    IERC20 token,
    BatchLockup.CreateWithTimestampsLT[] calldata batch
)
    external
    override
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name     | Type                                   | Description                                                                                                            |
| -------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `lockup` | `ISablierLockup`                       | The address of the [SablierLockup](/docs/reference/lockup/contracts/contract.SablierLockup.md) contract.               |
| `token`  | `IERC20`                               | The contract address of the ERC-20 token to be distributed.                                                            |
| `batch`  | `BatchLockup.CreateWithTimestampsLT[]` | An array of structs, each encapsulating a subset of the parameters of {ISablierLockupTranched.createWithTimestampsLT}. |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### \_approve

Helper function to approve a Lockup contract to spend funds from the batchLockup. If the current allowance is
insufficient, this function approves Lockup to spend the exact `amount`. The {SafeERC20.forceApprove} function is used
to handle special ERC-20 tokens (e.g. USDT) that require the current allowance to be zero before setting it to a
non-zero value.

```solidity
function _approve(address lockup, IERC20 token, uint256 amount) internal;
```

### \_handleTransfer

Helper function to transfer tokens from the caller to the batchLockup contract and approve the Lockup contract.

```solidity
function _handleTransfer(address lockup, IERC20 token, uint256 amount) internal;
```
