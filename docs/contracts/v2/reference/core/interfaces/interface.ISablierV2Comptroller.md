# ISablierV2Comptroller

[Git Source](https://github.com/sablier-labs/v2-core/tree/release/src/interfaces/ISablierV2Comptroller.sol)

**Inherits:** [IAdminable](/docs/contracts/v2/reference/core/interfaces/interface.IAdminable.md)

This contract is in charge of the Sablier V2 protocol configuration, handling such values as the protocol fees.

## Functions

### flashFee

Retrieves the global flash fee, denoted as a fixed-point number where 1e18 is 100%.

Notes:

- This fee represents a percentage, not an amount. Do not confuse it with {IERC3156FlashLender.flashFee}, which
  calculates the fee amount for a specified flash loan amount.
- Unlike the protocol fee, this is a global fee applied to all flash loans, not a per-asset fee.

```solidity
function flashFee() external view returns (UD60x18 fee);
```

### isFlashAsset

Retrieves a flag indicating whether the provided ERC-20 asset can be flash loaned.

```solidity
function isFlashAsset(IERC20 token) external view returns (bool result);
```

**Parameters**

| Name    | Type     | Description                                        |
| ------- | -------- | -------------------------------------------------- |
| `token` | `IERC20` | The contract address of the ERC-20 asset to check. |

### protocolFees

Retrieves the protocol fee for all streams created with the provided ERC-20 asset.

```solidity
function protocolFees(IERC20 asset) external view returns (UD60x18 fee);
```

**Parameters**

| Name    | Type     | Description                                        |
| ------- | -------- | -------------------------------------------------- |
| `asset` | `IERC20` | The contract address of the ERC-20 asset to query. |

**Returns**

| Name  | Type      | Description                                                          |
| ----- | --------- | -------------------------------------------------------------------- |
| `fee` | `UD60x18` | The protocol fee denoted as a fixed-point number where 1e18 is 100%. |

### setFlashFee

Updates the flash fee charged on all flash loans made with any ERC-20 asset.

Emits a {SetFlashFee} event. Notes:

- Does not revert if the fee is the same. Requirements:
- `msg.sender` must be the contract admin.

```solidity
function setFlashFee(UD60x18 newFlashFee) external;
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
function setProtocolFee(IERC20 asset, UD60x18 newProtocolFee) external;
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
function toggleFlashAsset(IERC20 asset) external;
```

**Parameters**

| Name    | Type     | Description                                |
| ------- | -------- | ------------------------------------------ |
| `asset` | `IERC20` | The address of the ERC-20 asset to toggle. |

## Events

### SetFlashFee

Emitted when the admin sets a new flash fee.

```solidity
event SetFlashFee(address indexed admin, UD60x18 oldFlashFee, UD60x18 newFlashFee);
```

### SetProtocolFee

Emitted when the admin sets a new protocol fee for the provided ERC-20 asset.

```solidity
event SetProtocolFee(address indexed admin, IERC20 indexed asset, UD60x18 oldProtocolFee, UD60x18 newProtocolFee);
```

### ToggleFlashAsset

Emitted when the admin enables or disables an ERC-20 asset for flash loaning.

```solidity
event ToggleFlashAsset(address indexed admin, IERC20 indexed asset, bool newFlag);
```
