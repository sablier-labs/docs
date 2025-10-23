# SablierFactoryMerkleBase

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/abstracts/SablierFactoryMerkleBase.sol)

**Inherits:** [Comptrollerable](/docs/reference/airdrops/contracts/abstracts/abstract.Comptrollerable.md),
[ISablierFactoryMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleBase.md)

See the documentation in
[ISablierFactoryMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleBase.md).

## State Variables

### nativeToken

Retrieves the address of the ERC-20 interface of the native token, if it exists.

_The native tokens on some chains have a dual interface as ERC-20. For example, on Polygon the $POL token is the native
token and has an ERC-20 version at 0x0000000000000000000000000000000000001010. This means that `address(this).balance`
returns the same value as `balanceOf(address(this))`. To avoid any unintended behavior, these tokens cannot be used in
Sablier. As an alternative, users can use the Wrapped version of the token, i.e. WMATIC, which is a standard ERC-20
token._

```solidity
address public override nativeToken;
```

## Functions

### constructor

```solidity
constructor(address initialComptroller) [Comptrollerable](/docs/reference/airdrops/contracts/abstracts/abstract.Comptrollerable.md)(initialComptroller);
```

**Parameters**

| Name                 | Type      | Description                                      |
| -------------------- | --------- | ------------------------------------------------ |
| `initialComptroller` | `address` | The address of the initial comptroller contract. |

### setNativeToken

Sets the native token address. Once set, it cannot be changed.

For more information, see the documentation for {nativeToken}. Emits a {SetNativeToken} event. Requirements:

- `msg.sender` must be the comptroller.
- `newNativeToken` must not be zero address.
- The native token must not be already set.

```solidity
function setNativeToken(address newNativeToken) external override onlyComptroller;
```

**Parameters**

| Name             | Type      | Description                      |
| ---------------- | --------- | -------------------------------- |
| `newNativeToken` | `address` | The address of the native token. |

### \_forbidNativeToken

Checks that the provided token is not the native token.

_Reverts if the provided token is the native token._

```solidity
function _forbidNativeToken(address token) internal view;
```
