# ISablierV2ProxyTarget

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/05c331e79e05886c7837dfda1bc21197c1c3c748/docs/contracts/v2/reference/periphery/interfaces)

Proxy target with stateless scripts for interacting with Sablier V2, designed to be used by stream senders.

_Intended for use with an instance of PRBProxy through delegate calls. Any standard calls will be reverted._

## Functions

### batchCancelMultiple

Cancels multiple streams across different lockup contracts.

Notes:

- All refunded assets are forwarded to the proxy owner.
- It is assumed that `assets` includes only the assets associated with the stream ids in `batch`. If any asset is
  missing, the refunded amount will be left in the proxy. Requirements:
- Must be delegate called.
- There must be at least one element in `batch`.

```solidity
function batchCancelMultiple(Batch.CancelMultiple[] calldata batch, IERC20[] calldata assets) external;
```

**Parameters**

| Name     | Type                     | Description                                                                                        |
| -------- | ------------------------ | -------------------------------------------------------------------------------------------------- |
| `batch`  | `Batch.CancelMultiple[]` | An array of structs, each encapsulating the lockup contract's address and the stream id to cancel. |
| `assets` | `IERC20[]`               | The contract addresses of the ERC-20 assets used for streaming.                                    |

### burn

Mirror for {ISablierV2Lockup.burn}.

_Must be delegate called._

```solidity
function burn(ISablierV2Lockup lockup, uint256 streamId) external;
```

### cancel

Mirror for {ISablierV2Lockup.cancel}.

Notes:

- All refunded assets are forwarded to the proxy owner. Requirements:
- Must be delegate called.

```solidity
function cancel(ISablierV2Lockup lockup, uint256 streamId) external;
```

### cancelMultiple

Mirror for {ISablierV2Lockup.cancelMultiple}.

Notes:

- All refunded assets are forwarded to the proxy owner.
- It is assumed that `assets` includes only the assets associated with `streamIds`. If any asset is missing, the
  refunded amount will be left in the proxy. Requirements:
- Must be delegate called.

```solidity
function cancelMultiple(ISablierV2Lockup lockup, IERC20[] calldata assets, uint256[] calldata streamIds) external;
```

**Parameters**

| Name        | Type               | Description                                                     |
| ----------- | ------------------ | --------------------------------------------------------------- |
| `lockup`    | `ISablierV2Lockup` | The address of the Lockup streaming contract.                   |
| `assets`    | `IERC20[]`         | The contract addresses of the ERC-20 assets used for streaming. |
| `streamIds` | `uint256[]`        | The stream ids to cancel.                                       |

### renounce

Mirror for {ISablierV2Lockup.renounce}.

_Must be delegate called._

```solidity
function renounce(ISablierV2Lockup lockup, uint256 streamId) external;
```

### withdraw

Mirror for {ISablierV2Lockup.withdraw}.

_Must be delegate called._

```solidity
function withdraw(ISablierV2Lockup lockup, uint256 streamId, address to, uint128 amount) external;
```

### withdrawMax

Mirror for {ISablierV2Lockup.withdrawMax}.

_Must be delegate called._

```solidity
function withdrawMax(ISablierV2Lockup lockup, uint256 streamId, address to) external;
```

### withdrawMaxAndTransfer

Mirror for {ISablierV2Lockup.withdrawMaxAndTransfer}.

_Must be delegate called._

```solidity
function withdrawMaxAndTransfer(ISablierV2Lockup lockup, uint256 streamId, address newRecipient) external;
```

### batchCreateWithDurations

Creates a batch of Lockup Linear streams using `createWithDurations`. Assets are transferred to the proxy via Permit2.

Requirements:

- Must be delegate called.
- There must be at least one element in `batch`.
- All requirements from {ISablierV2LockupLinear.createWithDurations} must be met for each stream.

```solidity
function batchCreateWithDurations(
    ISablierV2LockupLinear lockupLinear,
    IERC20 asset,
    Batch.CreateWithDurations[] calldata batch,
    Permit2Params calldata permit2Params
)
    external
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name            | Type                          | Description                                                                                                              |
| --------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `lockupLinear`  | `ISablierV2LockupLinear`      | The address of the [SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) contract. |
| `asset`         | `IERC20`                      | The contract address of the ERC-20 asset used for streaming.                                                             |
| `batch`         | `Batch.CreateWithDurations[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupLinear.createWithDurations}.       |
| `permit2Params` | `Permit2Params`               | A struct encapsulating the parameters needed for Permit2, most importantly the signature.                                |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### batchCreateWithRange

Creates a batch of Lockup Linear streams using `createWithRange`. Assets are transferred to the proxy via Permit2.

Requirements:

- Must be delegate called.
- There must be at least one element in `batch`.
- All requirements from {ISablierV2LockupLinear.createWithRange} must be met for each stream.

```solidity
function batchCreateWithRange(
    ISablierV2LockupLinear lockupLinear,
    IERC20 asset,
    Batch.CreateWithRange[] calldata batch,
    Permit2Params calldata permit2Params
)
    external
    returns (uint256[] memory streamIds);
```

**Parameters**

| Name            | Type                      | Description                                                                                                              |
| --------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `lockupLinear`  | `ISablierV2LockupLinear`  | The address of the [SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) contract. |
| `asset`         | `IERC20`                  | The contract address of the ERC-20 asset used for streaming.                                                             |
| `batch`         | `Batch.CreateWithRange[]` | An array of structs, each encapsulating a subset of the parameters of {SablierV2LockupLinear.createWithRange}.           |
| `permit2Params` | `Permit2Params`           | A struct encapsulating the parameters needed for Permit2, most importantly the signature.                                |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### cancelAndCreateWithDurations

Cancels a Lockup stream and creates a new Lockup Linear stream using `createWithDurations`. Assets are transferred to
the proxy via Permit2.

Notes:

- `streamId` can reference either a Lockup Linear or a Lockup Dynamic stream.
- See {ISablierV2Lockup.cancel} and {ISablierV2LockupLinear.createWithDurations} for full documentation. Requirements:
- Must be delegate called.

```solidity
function cancelAndCreateWithDurations(
    ISablierV2Lockup lockup,
    uint256 streamId,
    ISablierV2LockupLinear lockupLinear,
    LockupLinear.CreateWithDurations calldata createParams,
    Permit2Params calldata permit2Params
)
    external
    returns (uint256 newStreamId);
```

**Parameters**

| Name            | Type                               | Description                                                                                                                                                 |
| --------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lockup`        | `ISablierV2Lockup`                 | The address of the Lockup streaming contract where the stream to cancel is.                                                                                 |
| `streamId`      | `uint256`                          | The id of the stream to cancel.                                                                                                                             |
| `lockupLinear`  | `ISablierV2LockupLinear`           | The address of the [SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) contract to use for creating the new stream. |
| `createParams`  | `LockupLinear.CreateWithDurations` |                                                                                                                                                             |
| `permit2Params` | `Permit2Params`                    | A struct encapsulating the parameters needed for Permit2, most importantly the signature.                                                                   |

**Returns**

| Name          | Type      | Description                         |
| ------------- | --------- | ----------------------------------- |
| `newStreamId` | `uint256` | The id of the newly created stream. |

### cancelAndCreateWithRange

Cancels a Lockup stream and creates a new Lockup Linear stream using `createWithRange`. Assets are transferred to the
proxy via Permit2.

Notes:

- `streamId` can reference either a Lockup Linear or a Lockup Dynamic stream.
- See {ISablierV2Lockup.cancel} and {ISablierV2LockupLinear.createWithRange} for full documentation. Requirements:
- Must be delegate called.

```solidity
function cancelAndCreateWithRange(
    ISablierV2Lockup lockup,
    uint256 streamId,
    ISablierV2LockupLinear lockupLinear,
    LockupLinear.CreateWithRange calldata createParams,
    Permit2Params calldata permit2Params
)
    external
    returns (uint256 newStreamId);
```

**Parameters**

| Name            | Type                           | Description                                                                                                                                                 |
| --------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lockup`        | `ISablierV2Lockup`             | The address of the Lockup streaming contract where the stream to cancel is.                                                                                 |
| `streamId`      | `uint256`                      | The id of the stream to cancel.                                                                                                                             |
| `lockupLinear`  | `ISablierV2LockupLinear`       | The address of the [SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) contract to use for creating the new stream. |
| `createParams`  | `LockupLinear.CreateWithRange` |                                                                                                                                                             |
| `permit2Params` | `Permit2Params`                | A struct encapsulating the parameters needed for Permit2, most importantly the signature.                                                                   |

**Returns**

| Name          | Type      | Description                         |
| ------------- | --------- | ----------------------------------- |
| `newStreamId` | `uint256` | The id of the newly created stream. |

### createWithDurations

Mirror for {SablierV2LockupLinear.createWithDurations}. Assets are transferred to the proxy via Permit2.

_Must be delegate called._

```solidity
function createWithDurations(
    ISablierV2LockupLinear lockupLinear,
    LockupLinear.CreateWithDurations calldata createParams,
    Permit2Params calldata permit2Params
)
    external
    returns (uint256 streamId);
```

**Parameters**

| Name            | Type                               | Description                                                                                                              |
| --------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `lockupLinear`  | `ISablierV2LockupLinear`           | The address of the [SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) contract. |
| `createParams`  | `LockupLinear.CreateWithDurations` | Struct encapsulating the function parameters, which are documented in V2 Core.                                           |
| `permit2Params` | `Permit2Params`                    | A struct encapsulating the parameters needed for Permit2, most importantly the signature.                                |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The id of the newly created stream. |

### createWithRange

Mirror for {SablierV2LockupLinear.createWithRange}. Assets are transferred to the proxy via Permit2.

_Must be delegate called._

```solidity
function createWithRange(
    ISablierV2LockupLinear lockupLinear,
    LockupLinear.CreateWithRange calldata createParams,
    Permit2Params calldata permit2Params
)
    external
    returns (uint256 streamId);
```

**Parameters**

| Name            | Type                           | Description                                                                                                              |
| --------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `lockupLinear`  | `ISablierV2LockupLinear`       | The address of the [SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) contract. |
| `createParams`  | `LockupLinear.CreateWithRange` | Struct encapsulating the function parameters, which are documented in V2 Core.                                           |
| `permit2Params` | `Permit2Params`                | A struct encapsulating the parameters needed for Permit2, most importantly the signature.                                |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The id of the newly created stream. |

### wrapAndCreateWithDurations

Wraps the native asset payment in ERC-20 form and creates a Lockup Linear stream using `createWithDurations`.

Notes:

- `createParams.totalAmount` is overwritten with `msg.value`.
- See {ISablierV2LockupLinear.createWithDurations} for full documentation. Requirements:
- Must be delegate called.
- The ERC-20 amount credited by the wrapper contract must be equal to `msg.value`.

```solidity
function wrapAndCreateWithDurations(
    ISablierV2LockupLinear lockupLinear,
    LockupLinear.CreateWithDurations memory createParams
)
    external
    payable
    returns (uint256 streamId);
```

**Parameters**

| Name           | Type                               | Description                                                                                                              |
| -------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `lockupLinear` | `ISablierV2LockupLinear`           | The address of the [SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) contract. |
| `createParams` | `LockupLinear.CreateWithDurations` | Struct encapsulating the function parameters, which are documented in V2 Core.                                           |

### wrapAndCreateWithRange

Wraps the native asset payment in ERC-20 form and creates a Lockup Linear stream using `createWithRange`.

Notes:

- `createParams.totalAmount` is overwritten with `msg.value`.
- See {ISablierV2LockupLinear.createWithRange} for full documentation. Requirements:
- Must be delegate called.
- The ERC-20 amount credited by the wrapper contract must be equal to `msg.value`.

```solidity
function wrapAndCreateWithRange(
    ISablierV2LockupLinear lockupLinear,
    LockupLinear.CreateWithRange memory createParams
)
    external
    payable
    returns (uint256 streamId);
```

**Parameters**

| Name           | Type                           | Description                                                                                                              |
| -------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `lockupLinear` | `ISablierV2LockupLinear`       | The address of the [SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) contract. |
| `createParams` | `LockupLinear.CreateWithRange` | Struct encapsulating the function parameters, which are documented in V2 Core.                                           |

### batchCreateWithDeltas

Creates a batch of Lockup Dynamic streams using `createWithDeltas`. Assets are transferred to the proxy via Permit2.

Requirements:

- Must be delegate called.
- There must be at least one element in `batch`.
- All requirements from {ISablierV2LockupDynamic.createWithDeltas} must be met for each stream.

```solidity
function batchCreateWithDeltas(
    ISablierV2LockupDynamic lockupDynamic,
    IERC20 asset,
    Batch.CreateWithDeltas[] calldata batch,
    Permit2Params calldata permit2Params
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
| `permit2Params` | `Permit2Params`            | A struct encapsulating the parameters needed for Permit2, most importantly the signature.                                  |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### batchCreateWithMilestones

Creates a batch of Lockup Dynamic streams using `createWithMilestones`. Assets are transferred to the proxy via Permit2.

Requirements:

- Must be delegate called.
- There must be at least one element in `batch`.
- All requirements from {ISablierV2LockupDynamic.createWithMilestones} must be met for each stream.

```solidity
function batchCreateWithMilestones(
    ISablierV2LockupDynamic lockupDynamic,
    IERC20 asset,
    Batch.CreateWithMilestones[] calldata batch,
    Permit2Params calldata permit2Params
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
| `permit2Params` | `Permit2Params`                | A struct encapsulating the parameters needed for Permit2, most importantly the signature.                                  |

**Returns**

| Name        | Type        | Description                           |
| ----------- | ----------- | ------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the newly created streams. |

### cancelAndCreateWithDeltas

Cancels a Lockup stream and creates a new Lockup Dynamic stream using `createWithDeltas`. Assets are transferred to the
proxy via Permit2.

Notes:

- `streamId` can reference either a Lockup Linear or a Lockup Dynamic stream.
- See {ISablierV2Lockup.cancel} and {ISablierV2LockupDynamic.createWithDeltas} for full documentation. Requirements:
- Must be delegate called.

```solidity
function cancelAndCreateWithDeltas(
    ISablierV2Lockup lockup,
    uint256 streamId,
    ISablierV2LockupDynamic lockupDynamic,
    LockupDynamic.CreateWithDeltas calldata createParams,
    Permit2Params calldata permit2Params
)
    external
    returns (uint256 newStreamId);
```

**Parameters**

| Name            | Type                             | Description                                                                                                                                                   |
| --------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lockup`        | `ISablierV2Lockup`               | The address of the Lockup streaming contract where the stream to cancel is.                                                                                   |
| `streamId`      | `uint256`                        | The id of the stream to cancel.                                                                                                                               |
| `lockupDynamic` | `ISablierV2LockupDynamic`        | The address of the [SablierV2LockupDynamic](docs/contracts/v2/reference/core/contract.SablierV2LockupDynamic.md) contract to use for creating the new stream. |
| `createParams`  | `LockupDynamic.CreateWithDeltas` | A struct encapsulating the create function parameters, which are documented in V2 Core.                                                                       |
| `permit2Params` | `Permit2Params`                  | A struct encapsulating the parameters needed for Permit2, most importantly the signature.                                                                     |

**Returns**

| Name          | Type      | Description                         |
| ------------- | --------- | ----------------------------------- |
| `newStreamId` | `uint256` | The id of the newly created stream. |

### cancelAndCreateWithMilestones

Cancels a Lockup stream and creates a new Lockup Dynamic stream using `createWithMilestones`. Assets are transferred to
the proxy via Permit2.

Notes:

- `streamId` can reference either a Lockup Linear or a Lockup Dynamic stream.
- See {ISablierV2Lockup.cancel} and {ISablierV2LockupDynamic.createWithMilestones} for full documentation. Requirements:
- Must be delegate called.

```solidity
function cancelAndCreateWithMilestones(
    ISablierV2Lockup lockup,
    uint256 streamId,
    ISablierV2LockupDynamic lockupDynamic,
    LockupDynamic.CreateWithMilestones calldata createParams,
    Permit2Params calldata permit2Params
)
    external
    returns (uint256 newStreamId);
```

**Parameters**

| Name            | Type                                 | Description                                                                                                                                                   |
| --------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lockup`        | `ISablierV2Lockup`                   | The address of the Lockup streaming contract where the stream to cancel is.                                                                                   |
| `streamId`      | `uint256`                            | The id of the stream to cancel.                                                                                                                               |
| `lockupDynamic` | `ISablierV2LockupDynamic`            | The address of the [SablierV2LockupDynamic](docs/contracts/v2/reference/core/contract.SablierV2LockupDynamic.md) contract to use for creating the new stream. |
| `createParams`  | `LockupDynamic.CreateWithMilestones` | A struct encapsulating the create function parameters, which are documented in V2 Core.                                                                       |
| `permit2Params` | `Permit2Params`                      | A struct encapsulating the parameters needed for Permit2, most importantly the signature.                                                                     |

**Returns**

| Name          | Type      | Description                         |
| ------------- | --------- | ----------------------------------- |
| `newStreamId` | `uint256` | The id of the newly created stream. |

### createWithDeltas

Mirror for {SablierV2LockupDynamic.createWithDeltas}. Assets are transferred to the proxy via Permit2.

_Must be delegate called._

```solidity
function createWithDeltas(
    ISablierV2LockupDynamic lockupDynamic,
    LockupDynamic.CreateWithDeltas calldata createParams,
    Permit2Params calldata permit2Params
)
    external
    returns (uint256 streamId);
```

**Parameters**

| Name            | Type                             | Description                                                                                                                |
| --------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `lockupDynamic` | `ISablierV2LockupDynamic`        | The address of the [SablierV2LockupDynamic](docs/contracts/v2/reference/core/contract.SablierV2LockupDynamic.md) contract. |
| `createParams`  | `LockupDynamic.CreateWithDeltas` | A struct encapsulating the create function parameters, which are documented in V2 Core.                                    |
| `permit2Params` | `Permit2Params`                  | A struct encapsulating the parameters needed for Permit2, most importantly the signature.                                  |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The id of the newly created stream. |

### createWithMilestones

Mirror for {SablierV2LockupDynamic.createWithMilestones}. Assets are transferred to the proxy via Permit2.

_Must be delegate called._

```solidity
function createWithMilestones(
    ISablierV2LockupDynamic lockupDynamic,
    LockupDynamic.CreateWithMilestones calldata createParams,
    Permit2Params calldata permit2Params
)
    external
    returns (uint256 streamId);
```

**Parameters**

| Name            | Type                                 | Description                                                                                                                |
| --------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `lockupDynamic` | `ISablierV2LockupDynamic`            | The address of the [SablierV2LockupDynamic](docs/contracts/v2/reference/core/contract.SablierV2LockupDynamic.md) contract. |
| `createParams`  | `LockupDynamic.CreateWithMilestones` | Struct encapsulating the function parameters, which are documented in V2 Core.                                             |
| `permit2Params` | `Permit2Params`                      | A struct encapsulating the parameters needed for Permit2, most importantly the signature.                                  |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The id of the newly created stream. |

### wrapAndCreateWithDeltas

Wraps the native asset payment in ERC-20 form and creates a Lockup Dynamic stream using `createWithDeltas`.

Notes:

- `createParams.totalAmount` is overwritten with `msg.value`.
- See {ISablierV2LockupDynamic.createWithDeltas} for full documentation. Requirements:
- Must be delegate called.
- The ERC-20 amount credited by the wrapper contract must be equal to `msg.value`.

```solidity
function wrapAndCreateWithDeltas(
    ISablierV2LockupDynamic lockupDynamic,
    LockupDynamic.CreateWithDeltas memory createParams
)
    external
    payable
    returns (uint256 streamId);
```

**Parameters**

| Name            | Type                             | Description                                                                                                                |
| --------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `lockupDynamic` | `ISablierV2LockupDynamic`        | The address of the [SablierV2LockupDynamic](docs/contracts/v2/reference/core/contract.SablierV2LockupDynamic.md) contract. |
| `createParams`  | `LockupDynamic.CreateWithDeltas` | Struct encapsulating the function parameters, which are documented in V2 Core.                                             |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The id of the newly created stream. |

### wrapAndCreateWithMilestones

Wraps the native asset payment in ERC-20 form and creates a Lockup Dynamic stream using `createWithMilestones`.

Notes:

- `createParams.totalAmount` is overwritten with `msg.value`.
- See {ISablierV2LockupDynamic.createWithMilestones} for full documentation. Requirements:
- Must be delegate called.
- The ERC-20 amount credited by the wrapper contract must be equal to `msg.value`.

```solidity
function wrapAndCreateWithMilestones(
    ISablierV2LockupDynamic lockupDynamic,
    LockupDynamic.CreateWithMilestones memory createParams
)
    external
    payable
    returns (uint256 streamId);
```

**Parameters**

| Name            | Type                                 | Description                                                                                                                |
| --------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `lockupDynamic` | `ISablierV2LockupDynamic`            | The address of the [SablierV2LockupDynamic](docs/contracts/v2/reference/core/contract.SablierV2LockupDynamic.md) contract. |
| `createParams`  | `LockupDynamic.CreateWithMilestones` | Struct encapsulating the function parameters, which are documented in V2 Core.                                             |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The id of the newly created stream. |
