# SablierV2Config

[Git Source](https://github.com/sablierhq/v2-core/blob/dd92abb9f3f01149a5be0e13eb517772181c5081/docs/contracts/v2/reference/core/abstracts)

**Inherits:** [ISablierV2Config](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Config.md),
[SablierV2Adminable](/docs/contracts/v2/reference/core/abstracts/abstract.SablierV2Adminable.md)

See the documentation in {ISablierV2Config}.

## State Variables

### MAX_FEE

The maximum fee that can be charged by either the protocol or a broker, as an UD60x18 number where 100% = 1e18.

_This is initialized at construction time and cannot be changed later._

```solidity
UD60x18 public immutable override MAX_FEE;
```

### comptroller

The address of the comptroller contract, which is in charge of the Sablier V2 protocol configuration, handling such
values as the protocol fees.

```solidity
ISablierV2Comptroller public override comptroller;
```

### \_protocolRevenues

_Protocol revenues mapped by ERC-20 asset addresses._

```solidity
mapping(IERC20 asset => uint128 revenues) internal _protocolRevenues;
```

## Functions

### constructor

_Emits a {TransferAdmin} event._

```solidity
constructor(address initialAdmin, ISablierV2Comptroller initialComptroller, UD60x18 maxFee);
```

**Parameters**

| Name                 | Type                    | Description                                                                                                     |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------- |
| `initialAdmin`       | `address`               | The address of the initial contract admin.                                                                      |
| `initialComptroller` | `ISablierV2Comptroller` | The address of the initial comptroller.                                                                         |
| `maxFee`             | `UD60x18`               | The maximum fee that can be charged by either the protocol or a broker, as an UD60x18 number where 100% = 1e18. |

### getProtocolRevenues

Queries the protocol revenues accrued for the provided ERC-20 asset, in units of the asset's decimals.

```solidity
function getProtocolRevenues(IERC20 asset) external view override returns (uint128 protocolRevenues);
```

**Parameters**

| Name    | Type     | Description                                                     |
| ------- | -------- | --------------------------------------------------------------- |
| `asset` | `IERC20` | The contract address of the ERC-20 asset to make the query for. |

### claimProtocolRevenues

Claims all protocol revenues accrued for the provided ERC-20 asset.

\*Emits a {ClaimProtocolRevenues} event. Requirements:

- The caller must be the owner of the contract.\*

```solidity
function claimProtocolRevenues(IERC20 asset) external override onlyAdmin;
```

**Parameters**

| Name    | Type     | Description                                                                  |
| ------- | -------- | ---------------------------------------------------------------------------- |
| `asset` | `IERC20` | The contract address of the ERC-20 asset to claim the protocol revenues for. |

### setComptroller

Sets a new comptroller contract. The comptroller is in charge of the protocol configuration, handling such values as the
protocol fees.

\*Emits a {SetComptroller} event. Notes:

- Does not revert if the comptroller is the same. Requirements:
- The caller must be the contract admin.\*

```solidity
function setComptroller(ISablierV2Comptroller newComptroller) external override onlyAdmin;
```

**Parameters**

| Name             | Type                    | Description                                  |
| ---------------- | ----------------------- | -------------------------------------------- |
| `newComptroller` | `ISablierV2Comptroller` | The address of the new comptroller contract. |
