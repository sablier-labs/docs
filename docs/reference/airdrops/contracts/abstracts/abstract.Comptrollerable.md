# Comptrollerable

[Git Source](https://github.com/sablier-labs/evm-utils/blob/0b3bc38ab8badd135fc178b757afaf6902f1f63c/src/Comptrollerable.sol)

**Inherits:** [IComptrollerable](/reference/airdrops/contracts/interfaces/interface.IComptrollerable.md)

See the documentation in [IComptrollerable](/reference/airdrops/contracts/interfaces/interface.IComptrollerable.md).

## State Variables

### comptroller

Retrieves the address of the comptroller contract.

```solidity
ISablierComptroller public override comptroller;
```

## Functions

### onlyComptroller

Reverts if called by any account other than the comptroller.

```solidity
modifier onlyComptroller();
```

### constructor

```solidity
constructor(address initialComptroller);
```

**Parameters**

| Name                 | Type      | Description                                      |
| -------------------- | --------- | ------------------------------------------------ |
| `initialComptroller` | `address` | The address of the initial comptroller contract. |

### setComptroller

Sets the comptroller to a new address.

Emits a {SetComptroller} event. Requirements:

- `msg.sender` must be the current comptroller.
- The new comptroller must return `true` from {supportsInterface} with the comptroller's minimal interface ID which is
  defined as the XOR of the following function selectors:

1. {calculateMinFeeWeiFor}
2. {convertUSDFeeToWei}
3. {execute}
4. {getMinFeeUSDFor}

```solidity
function setComptroller(ISablierComptroller newComptroller) external override onlyComptroller;
```

**Parameters**

| Name             | Type                  | Description                                  |
| ---------------- | --------------------- | -------------------------------------------- |
| `newComptroller` | `ISablierComptroller` | The address of the new comptroller contract. |

### transferFeesToComptroller

Transfers the fees to the comptroller contract.

Emits a {TransferFeesToComptroller} event.

```solidity
function transferFeesToComptroller() external override;
```

### \_checkComptroller

_See the documentation for the user-facing functions that call this private function._

```solidity
function _checkComptroller() private view;
```

### \_setComptroller

_See the documentation for the user-facing functions that call this private function._

```solidity
function _setComptroller(
    ISablierComptroller previousComptroller,
    ISablierComptroller newComptroller,
    bytes4 minimalInterfaceId
)
    private;
```
