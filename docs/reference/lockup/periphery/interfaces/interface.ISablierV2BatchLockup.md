# ISablierV2BatchLockup

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/ed3be5dc823dd81219f8060a6e6b32ead6c8de84/src/interfaces/ISablierV2BatchLockup.sol)

Helper to batch create Sablier V2 Lockup streams.

## Functions

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
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name           | Type                                  | Description                                                                                                        |
| -------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `lockupLinear` | `ISablierV2LockupLinear`              | The address of the [SablierV2LockupLinear](docs/reference/lockup/core/contract.SablierV2LockupLinear.md) contract. |
| `asset`        | `IERC20`                              | The contract address of the ERC-20 asset to be distributed.                                                        |
| `batch`        | `BatchLockup.CreateWithDurationsLL[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupLinear.createWithDurations}. |

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
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name           | Type                                   | Description                                                                                                         |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `lockupLinear` | `ISablierV2LockupLinear`               | The address of the [SablierV2LockupLinear](docs/reference/lockup/core/contract.SablierV2LockupLinear.md) contract.  |
| `asset`        | `IERC20`                               | The contract address of the ERC-20 asset to be distributed.                                                         |
| `batch`        | `BatchLockup.CreateWithTimestampsLL[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupLinear.createWithTimestamps}. |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

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
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name            | Type                                  | Description                                                                                                          |
| --------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `lockupDynamic` | `ISablierV2LockupDynamic`             | The address of the [SablierV2LockupDynamic](docs/reference/lockup/core/contract.SablierV2LockupDynamic.md) contract. |
| `asset`         | `IERC20`                              | The contract address of the ERC-20 asset to be distributed.                                                          |
| `batch`         | `BatchLockup.CreateWithDurationsLD[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupDynamic.createWithDurations}.  |

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
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name            | Type                                   | Description                                                                                                          |
| --------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `lockupDynamic` | `ISablierV2LockupDynamic`              | The address of the [SablierV2LockupDynamic](docs/reference/lockup/core/contract.SablierV2LockupDynamic.md) contract. |
| `asset`         | `IERC20`                               | The contract address of the ERC-20 asset to be distributed.                                                          |
| `batch`         | `BatchLockup.CreateWithTimestampsLD[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupDynamic.createWithTimestamps}. |

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
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name             | Type                                  | Description                                                                                                            |
| ---------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `lockupTranched` | `ISablierV2LockupTranched`            | The address of the [SablierV2LockupTranched](docs/reference/lockup/core/contract.SablierV2LockupTranched.md) contract. |
| `asset`          | `IERC20`                              | The contract address of the ERC-20 asset to be distributed.                                                            |
| `batch`          | `BatchLockup.CreateWithDurationsLT[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupTranched.createWithDurations}.   |

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
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name             | Type                                   | Description                                                                                                            |
| ---------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `lockupTranched` | `ISablierV2LockupTranched`             | The address of the [SablierV2LockupTranched](docs/reference/lockup/core/contract.SablierV2LockupTranched.md) contract. |
| `asset`          | `IERC20`                               | The contract address of the ERC-20 asset to be distributed.                                                            |
| `batch`          | `BatchLockup.CreateWithTimestampsLT[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupTranched.createWithTimestamps}.  |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |
