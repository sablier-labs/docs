# SablierV2Base

[Git Source](https://github.com/sablier-labs/v2-core/blob/6ab33735951a1e93a3236fed3ca9c60f75ab76a7/docs/contracts/v2/reference/core/abstracts)

**Inherits:** [NoDelegateCall](/docs/contracts/v2/reference/core/abstracts/abstract.NoDelegateCall.md),
[ISablierV2Base](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Base.md),
[Adminable](/docs/contracts/v2/reference/core/abstracts/abstract.Adminable.md)

See the documentation in [ISablierV2Base](docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Base.md).

## State Variables

### MAX_FEE

Retrieves the maximum fee that can be charged by the protocol or a broker, denoted as a fixed-point number where 1e18 is
100%.

_This value is hard coded as a constant._

```solidity
UD60x18 public constant override MAX_FEE = UD60x18.wrap(0.1e18);
```

### comptroller

Retrieves the address of the comptroller contract, responsible for the Sablier V2 protocol configuration.

```solidity
ISablierV2Comptroller public override comptroller;
```

### protocolRevenues

Retrieves the protocol revenues accrued for the provided ERC-20 asset, in units of the asset's decimals.

```solidity
mapping(IERC20 asset => uint128 revenues) public override protocolRevenues;
```

## Functions

### constructor

_Emits a {TransferAdmin} event._

```solidity
constructor(address initialAdmin, ISablierV2Comptroller initialComptroller);
```

**Parameters**

| Name                 | Type                    | Description                                |
| -------------------- | ----------------------- | ------------------------------------------ |
| `initialAdmin`       | `address`               | The address of the initial contract admin. |
| `initialComptroller` | `ISablierV2Comptroller` | The address of the initial comptroller.    |

### claimProtocolRevenues

Claims all accumulated protocol revenues for the provided ERC-20 asset.

Emits a {ClaimProtocolRevenues} event. Requirements:

- `msg.sender` must be the contract admin.

```solidity
function claimProtocolRevenues(IERC20 asset) external override onlyAdmin;
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
function setComptroller(ISablierV2Comptroller newComptroller) external override onlyAdmin;
```

**Parameters**

| Name             | Type                    | Description                                  |
| ---------------- | ----------------------- | -------------------------------------------- |
| `newComptroller` | `ISablierV2Comptroller` | The address of the new comptroller contract. |
