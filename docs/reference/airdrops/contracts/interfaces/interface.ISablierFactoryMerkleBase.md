# ISablierFactoryMerkleBase

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/7cb361717fd2f0289ad8d69469a3c00804b21657/src/interfaces/ISablierFactoryMerkleBase.sol)

**Inherits:** IComptrollerable

**Title:** ISablierFactoryMerkleBase

Common interface between factories that deploy campaign contracts. The contracts are deployed using CREATE2.

## Functions

### nativeToken

Retrieves the address of the ERC-20 interface of the native token, if it exists.

The native tokens on some chains have a dual interface as ERC-20. For example, on Polygon the $POL token is the native
token and has an ERC-20 version at 0x0000000000000000000000000000000000001010. This means that `address(this).balance`
returns the same value as `balanceOf(address(this))`. To avoid any unintended behavior, these tokens cannot be used in
Sablier. As an alternative, users can use the Wrapped version of the token, i.e. WMATIC, which is a standard ERC-20
token.

```solidity
function nativeToken() external view returns (address);
```

### setNativeToken

Sets the native token address. Once set, it cannot be changed.

For more information, see the documentation for
[nativeToken](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleBase.md#nativetoken). Emits a
[SetNativeToken](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleBase.md#setnativetoken)
event. Requirements:

- `msg.sender` must be the comptroller.
- `newNativeToken` must not be zero address.
- The native token must not be already set.

```solidity
function setNativeToken(address newNativeToken) external;
```

**Parameters**

| Name             | Type      | Description                      |
| ---------------- | --------- | -------------------------------- |
| `newNativeToken` | `address` | The address of the native token. |

## Events

### SetNativeToken

Emitted when the native token address is set by the comptroller.

```solidity
event SetNativeToken(address indexed comptroller, address nativeToken);
```
