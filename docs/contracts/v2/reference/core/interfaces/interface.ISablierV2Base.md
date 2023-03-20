# ISablierV2Base

[Git Source](https://github.com/sablierhq/v2-core/blob/8bd57ebb31fddf6ef262477e5a378027db8b85d8/docs/contracts/v2/reference/core/interfaces)

**Inherits:** [IAdminable](/docs/contracts/v2/reference/core/interfaces/interface.IAdminable.md)

Common base between all Sablier V2 streaming contracts.

## Functions

### MAX_FEE

The maximum fee that can be charged by either the protocol or a broker, as an UD60x18 number where 100% = 1e18.

_This is initialized at construction time and cannot be changed later._

```solidity
function MAX_FEE() external view returns (UD60x18);
```

### comptroller

The address of the comptroller contract, which is in charge of the Sablier V2 protocol configuration, handling such
values as the protocol fees.

```solidity
function comptroller() external view returns (ISablierV2Comptroller);
```

### protocolRevenues

The protocol revenues accrued for the provided ERC-20 asset, in units of the asset's decimals.

```solidity
function protocolRevenues(IERC20 asset) external view returns (uint128 revenues);
```

**Parameters**

| Name    | Type     | Description                                                     |
| ------- | -------- | --------------------------------------------------------------- |
| `asset` | `IERC20` | The contract address of the ERC-20 asset to make the query for. |

### claimProtocolRevenues

Claims all protocol revenues accrued for the provided ERC-20 asset.

Emits a {ClaimProtocolRevenues} event. Requirements:

- The caller must be the contract admin.

```solidity
function claimProtocolRevenues(IERC20 asset) external;
```

**Parameters**

| Name    | Type     | Description                                                                  |
| ------- | -------- | ---------------------------------------------------------------------------- |
| `asset` | `IERC20` | The contract address of the ERC-20 asset to claim the protocol revenues for. |

### setComptroller

Sets a new comptroller contract. The comptroller is in charge of the protocol configuration, handling such values as the
protocol fees.

Emits a {SetComptroller} event. Notes:

- Does not revert if the comptroller is the same. Requirements:
- The caller must be the contract admin.

```solidity
function setComptroller(ISablierV2Comptroller newComptroller) external;
```

**Parameters**

| Name             | Type                    | Description                                  |
| ---------------- | ----------------------- | -------------------------------------------- |
| `newComptroller` | `ISablierV2Comptroller` | The address of the new comptroller contract. |

## Events

### ClaimProtocolRevenues

Emitted when the contract admin claims all protocol revenues accrued for the provided ERC-20 asset.

```solidity
event ClaimProtocolRevenues(address indexed admin, IERC20 indexed asset, uint128 protocolRevenues);
```

### SetComptroller

Emitted when the contract admin sets a new comptroller contract.

```solidity
event SetComptroller(address indexed admin, ISablierV2Comptroller oldComptroller, ISablierV2Comptroller newComptroller);
```
