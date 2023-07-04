---
sidebar_position: 3
---

# SablierV2Comptroller

[Git Source](https://github.com/sablier-labs/v2-core/blob/159e87a2f5af03967faf292df81fef93c14be2e2/docs/contracts/v2/reference/core)

**Inherits:** [ISablierV2Comptroller](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Comptroller.md),
[Adminable](/docs/contracts/v2/reference/core/abstracts/abstract.Adminable.md)

See the documentation in
[ISablierV2Comptroller](docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Comptroller.md).

## State Variables

### flashFee

Retrieves the global flash fee, denoted as a fixed-point number where 1e18 is 100%.

Notes:

- This fee represents a percentage, not an amount. Do not confuse it with {IERC3156FlashLender.flashFee}, which
  calculates the fee amount for a specified flash loan amount.
- Unlike the protocol fee, this is a global fee applied to all flash loans, not a per-asset fee.

```solidity
UD60x18 public override flashFee;
```

### isFlashAsset

Retrieves a flag indicating whether the provided ERC-20 asset can be flash loaned.

```solidity
mapping(IERC20 asset => bool supported) public override isFlashAsset;
```

### protocolFees

Retrieves the protocol fee for all streams created with the provided ERC-20 asset.

```solidity
mapping(IERC20 asset => UD60x18 fee) public override protocolFees;
```

## Functions

### constructor

_Emits a {TransferAdmin} event._

```solidity
constructor(address initialAdmin);
```

**Parameters**

| Name           | Type      | Description                                |
| -------------- | --------- | ------------------------------------------ |
| `initialAdmin` | `address` | The address of the initial contract admin. |

### setFlashFee

Updates the flash fee charged on all flash loans made with any ERC-20 asset.

Emits a {SetFlashFee} event. Notes:

- Does not revert if the fee is the same. Requirements:
- `msg.sender` must be the contract admin.

```solidity
function setFlashFee(UD60x18 newFlashFee) external override onlyAdmin;
```

**Parameters**

| Name          | Type      | Description                                                                   |
| ------------- | --------- | ----------------------------------------------------------------------------- |
| `newFlashFee` | `UD60x18` | The new flash fee to set, denoted as a fixed-point number where 1e18 is 100%. |

### setProtocolFee

Sets a new protocol fee that will be charged on all streams created with the provided ERC-20 asset.

Emits a {SetProtocolFee} event. Notes:

- The fee is not denoted in units of the asset's decimals; it is a fixed-point number. Refer to the PRBMath
  documentation for more detail on the logic of UD60x18.
- Does not revert if the fee is the same. Requirements:
- `msg.sender` must be the contract admin.

```solidity
function setProtocolFee(IERC20 asset, UD60x18 newProtocolFee) external override onlyAdmin;
```

**Parameters**

| Name             | Type      | Description                                                               |
| ---------------- | --------- | ------------------------------------------------------------------------- |
| `asset`          | `IERC20`  | The contract address of the ERC-20 asset to update the fee for.           |
| `newProtocolFee` | `UD60x18` | The new protocol fee, denoted as a fixed-point number where 1e18 is 100%. |

### toggleFlashAsset

Toggles the flash loanability of an ERC-20 asset.

Emits a {ToggleFlashAsset} event. Requirements:

- `msg.sender` must be the admin.

```solidity
function toggleFlashAsset(IERC20 asset) external override onlyAdmin;
```

**Parameters**

| Name    | Type     | Description                                |
| ------- | -------- | ------------------------------------------ |
| `asset` | `IERC20` | The address of the ERC-20 asset to toggle. |
