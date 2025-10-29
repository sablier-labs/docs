# IComptrollerable

[Git Source](https://github.com/sablier-labs/evm-utils/blob/0b3bc38ab8badd135fc178b757afaf6902f1f63c/src/interfaces/IComptrollerable.sol)

Contract module that provides a setter and getter for the Sablier Comptroller.

## Functions

### comptroller

Retrieves the address of the comptroller contract.

```solidity
function comptroller() external view returns (ISablierComptroller);
```

### setComptroller

Sets the comptroller to a new address.

_Emits a {SetComptroller} event. Requirements:_

- `msg.sender` must be the current comptroller.
- The new comptroller must return `true` from {supportsInterface} with the comptroller's minimal interface ID which is
  defined as the XOR of the following function selectors:

1. {calculateMinFeeWeiFor}
2. {convertUSDFeeToWei}
3. {execute}
4. {getMinFeeUSDFor}

```solidity
function setComptroller(ISablierComptroller newComptroller) external;
```

**Parameters**

| Name             | Type                  | Description                                  |
| ---------------- | --------------------- | -------------------------------------------- |
| `newComptroller` | `ISablierComptroller` | The address of the new comptroller contract. |

### transferFeesToComptroller

Transfers the fees to the comptroller contract.

_Emits a TransferFeesToComptroller event._

```solidity
function transferFeesToComptroller() external;
```

## Events

### SetComptroller

Emitted when the comptroller address is set by the admin.

```solidity
event SetComptroller(ISablierComptroller oldComptroller, ISablierComptroller newComptroller);
```

### TransferFeesToComptroller

Emitted when the fees are transferred to the comptroller contract.

```solidity
event TransferFeesToComptroller(ISablierComptroller indexed comptroller, uint256 feeAmount);
```
