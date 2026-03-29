# ISablierEscrowState

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/interfaces/ISablierEscrowState.sol)

**Title:** ISablierEscrowState

Interface containing state variables (storage and constants) for the
[SablierEscrow](/docs/reference/bob/contracts/contract.SablierEscrow.md) contract, along with their respective getters.

## Functions

### MAX_TRADE_FEE

Returns the maximum trade fee that can be applied, denominated in UD60x18, where 1e18 = 100%.

This is a constant state variable.

```solidity
function MAX_TRADE_FEE() external view returns (UD60x18);
```

### getBuyer

Retrieves the buyer address for the given order. If its zero address, the order can be filled by any address.

Reverts if `orderId` references a null order.

```solidity
function getBuyer(uint256 orderId) external view returns (address buyer);
```

### getBuyToken

Retrieves the address of the ERC-20 token the seller wants to receive.

Reverts if `orderId` references a null order.

```solidity
function getBuyToken(uint256 orderId) external view returns (IERC20 buyToken);
```

### getExpiryTime

Retrieves the time when the order expires and can no longer be filled. Zero is sentinel for orders that never expire.

Reverts if `orderId` references a null order.

```solidity
function getExpiryTime(uint256 orderId) external view returns (uint40 expiryTime);
```

### getMinBuyAmount

Retrieves the minimum amount of buy token required to fill the order.

Reverts if `orderId` references a null order.

```solidity
function getMinBuyAmount(uint256 orderId) external view returns (uint128 minBuyAmount);
```

### getSellAmount

Retrieves the amount of sell token that the seller is willing to sell.

Reverts if `orderId` references a null order.

```solidity
function getSellAmount(uint256 orderId) external view returns (uint128 sellAmount);
```

### getSeller

Retrieves the address of the seller who created the order.

Reverts if `orderId` references a null order.

```solidity
function getSeller(uint256 orderId) external view returns (address seller);
```

### getSellToken

Retrieves the address of the ERC-20 token that the seller is willing to sell.

Reverts if `orderId` references a null order.

```solidity
function getSellToken(uint256 orderId) external view returns (IERC20 sellToken);
```

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

### nextOrderId

Counter for order IDs. It's incremented every time a new order is created.

```solidity
function nextOrderId() external view returns (uint256);
```

### statusOf

Returns the status of the order.

Reverts if `orderId` references a null order.

```solidity
function statusOf(uint256 orderId) external view returns (Escrow.Status status);
```

### tradeFee

Returns the fee percentage, denominated in UD60x18, where 1e18 = 100%.

This trade fee is taken from both the sell and buy amounts in their respective tokens.

```solidity
function tradeFee() external view returns (UD60x18);
```

### wasCanceled

Retrieves a flag indicating whether the order was canceled.

Reverts if `orderId` references a null order.

```solidity
function wasCanceled(uint256 orderId) external view returns (bool);
```

### wasFilled

Retrieves a flag indicating whether the order was filled.

Reverts if `orderId` references a null order.

```solidity
function wasFilled(uint256 orderId) external view returns (bool);
```
