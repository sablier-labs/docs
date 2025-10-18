# ISablierBatchLockup

[Git Source](https://github.com/sablier-labs/lockup/blob/58eaac45c20c57a93b73d887c714e68f061ec3e6/src/interfaces/ISablierBatchLockup.sol)

Helper to batch create Lockup streams.

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

## Events

### CreateLockupBatch

Emitted when a batch of Lockup streams are created.

```solidity
event CreateLockupBatch(address indexed funder, ISablierLockup indexed lockup, uint256[] streamIds);
```

**Parameters**

| Name        | Type             | Description                                                                                                                         |
| ----------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `funder`    | `address`        | The address funding the streams.                                                                                                    |
| `lockup`    | `ISablierLockup` | The address of the [SablierLockup](/docs/reference/lockup/contracts/contract.SablierLockup.md) contract used to create the streams. |
| `streamIds` | `uint256[]`      | The ids of the newly created streams, the ones that were successfully created.                                                      |
