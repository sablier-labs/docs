# ISablierV2Base

[Git Source](https://github.com/sablier-labs/v2-core/blob/release/src/interfaces/ISablierV2Base.sol)

**Inherits:** [IAdminable](/docs/contracts/v2/reference/core/interfaces/interface.IAdminable.md)

Base logic for all Sablier V2 streaming contracts.

## Functions

### MAX_FEE

Retrieves the maximum fee that can be charged by the protocol or a broker, denoted as a fixed-point number where 1e18 is
100%.

_This value is hard coded as a constant._

```solidity
function MAX_FEE() external view returns (UD60x18);
```

### comptroller

Retrieves the address of the comptroller contract, responsible for the Sablier V2 protocol configuration.

```solidity
function comptroller() external view returns (ISablierV2Comptroller);
```

### protocolRevenues

Retrieves the protocol revenues accrued for the provided ERC-20 asset, in units of the asset's decimals.

```solidity
function protocolRevenues(IERC20 asset) external view returns (uint128 revenues);
```

**Parameters**

| Name    | Type     | Description                                        |
| ------- | -------- | -------------------------------------------------- |
| `asset` | `IERC20` | The contract address of the ERC-20 asset to query. |

### claimProtocolRevenues

Claims all accumulated protocol revenues for the provided ERC-20 asset.

Emits a {ClaimProtocolRevenues} event. Requirements:

- `msg.sender` must be the contract admin.

```solidity
function claimProtocolRevenues(IERC20 asset) external;
```

**Parameters**

| Name    | Type     | Description                                                                    |
| ------- | -------- | ------------------------------------------------------------------------------ |
| `asset` | `IERC20` | The contract address of the ERC-20 asset for which to claim protocol revenues. |

### setComptroller

Assigns a new comptroller contract responsible for the protocol configuration.

Emits a {SetComptroller} event. Notes:

- Does not revert if the comptroller is the same. Requirements:
- `msg.sender` must be the contract admin.

```solidity
function setComptroller(ISablierV2Comptroller newComptroller) external;
```

**Parameters**

| Name             | Type                    | Description                                  |
| ---------------- | ----------------------- | -------------------------------------------- |
| `newComptroller` | `ISablierV2Comptroller` | The address of the new comptroller contract. |

## Events

### ClaimProtocolRevenues

Emitted when the admin claims all protocol revenues accrued for a particular ERC-20 asset.

```solidity
event ClaimProtocolRevenues(address indexed admin, IERC20 indexed asset, uint128 protocolRevenues);
```

### SetComptroller

Emitted when the admin sets a new comptroller contract.

```solidity
event SetComptroller(address indexed admin, ISablierV2Comptroller oldComptroller, ISablierV2Comptroller newComptroller);
```
