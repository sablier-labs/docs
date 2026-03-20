# IComptrollerable

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/7cb361717fd2f0289ad8d69469a3c00804b21657/src/interfaces/IComptrollerable.sol)

**Title:** IComptrollerable

Contract module that provides a setter and getter for the Sablier Comptroller.

## Functions

### comptroller

Retrieves the address of the comptroller contract.

```solidity
function comptroller() external view returns (ISablierComptroller);
```

### setComptroller

Sets the comptroller to a new address.

Emits a [SetComptroller](#setcomptroller) event. Requirements:

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

Emits a [TransferFeesToComptroller](#transferfeestocomptroller) event.

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
event TransferFeesToComptroller(address indexed comptroller, uint256 feeAmount);
```
