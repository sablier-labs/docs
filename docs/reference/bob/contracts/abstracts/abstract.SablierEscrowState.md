# SablierEscrowState

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/abstracts/SablierEscrowState.sol)

**Inherits:** [ISablierEscrowState](/docs/reference/bob/contracts/interfaces/interface.ISablierEscrowState.md)

**Title:** SablierEscrowState

See the documentation in
[ISablierEscrowState](/docs/reference/bob/contracts/interfaces/interface.ISablierEscrowState.md).

## State Variables

### MAX_TRADE_FEE

Returns the maximum trade fee that can be applied, denominated in UD60x18, where 1e18 = 100%.

This is a constant state variable.

```solidity
UD60x18 public constant override MAX_TRADE_FEE = UD60x18.wrap(0.02e18)
```

### nativeToken

Retrieves the address of the ERC-20 interface of the native token, if it exists.

The native tokens on some chains have a dual interface as ERC-20. For example, on Polygon the $POL token is the native
token and has an ERC-20 version at 0x0000000000000000000000000000000000001010. This means that `address(this).balance`
returns the same value as `balanceOf(address(this))`. To avoid any unintended behavior, these tokens cannot be used in
Sablier. As an alternative, users can use the Wrapped version of the token, i.e. WMATIC, which is a standard ERC-20
token.

```solidity
address public override nativeToken
```

### nextOrderId

Counter for order IDs. It's incremented every time a new order is created.

```solidity
uint256 public override nextOrderId
```

### tradeFee

Returns the fee percentage, denominated in UD60x18, where 1e18 = 100%.

This trade fee is taken from both the sell and buy amounts in their respective tokens.

```solidity
UD60x18 public override tradeFee
```

### \_orders

Orders mapped by order ID.

```solidity
mapping(uint256 orderId => Escrow.Order order) internal _orders
```

## Functions

### constructor

Initializes the state variables.

```solidity
constructor(UD60x18 initialTradeFee) ;
```

**Parameters**

| Name              | Type      | Description                       |
| ----------------- | --------- | --------------------------------- |
| `initialTradeFee` | `UD60x18` | The initial trade fee percentage. |

### notNull

Checks that `orderId` does not reference a null order.

```solidity
modifier notNull(uint256 orderId) ;
```

### getBuyer

Retrieves the buyer address for the given order. If its zero address, the order can be filled by any address.

Reverts if `orderId` references a null order.

```solidity
function getBuyer(uint256 orderId) external view override notNull(orderId) returns (address buyer);
```

### getBuyToken

Retrieves the address of the ERC-20 token the seller wants to receive.

Reverts if `orderId` references a null order.

```solidity
function getBuyToken(uint256 orderId) external view override notNull(orderId) returns (IERC20 buyToken);
```

### getExpiryTime

Retrieves the time when the order expires and can no longer be filled. Zero is sentinel for orders that never expire.

Reverts if `orderId` references a null order.

```solidity
function getExpiryTime(uint256 orderId) external view override notNull(orderId) returns (uint40 expiryTime);
```

### getMinBuyAmount

Retrieves the minimum amount of buy token required to fill the order.

Reverts if `orderId` references a null order.

```solidity
function getMinBuyAmount(uint256 orderId) external view override notNull(orderId) returns (uint128 minBuyAmount);
```

### getSellAmount

Retrieves the amount of sell token that the seller is willing to sell.

Reverts if `orderId` references a null order.

```solidity
function getSellAmount(uint256 orderId) external view override notNull(orderId) returns (uint128 sellAmount);
```

### getSeller

Retrieves the address of the seller who created the order.

Reverts if `orderId` references a null order.

```solidity
function getSeller(uint256 orderId) external view override notNull(orderId) returns (address seller);
```

### getSellToken

Retrieves the address of the ERC-20 token that the seller is willing to sell.

Reverts if `orderId` references a null order.

```solidity
function getSellToken(uint256 orderId) external view override notNull(orderId) returns (IERC20 sellToken);
```

### statusOf

Returns the status of the order.

Reverts if `orderId` references a null order.

```solidity
function statusOf(uint256 orderId) external view override notNull(orderId) returns (Escrow.Status status);
```

### wasCanceled

Retrieves a flag indicating whether the order was canceled.

Reverts if `orderId` references a null order.

```solidity
function wasCanceled(uint256 orderId) external view override notNull(orderId) returns (bool result);
```

### wasFilled

Retrieves a flag indicating whether the order was filled.

Reverts if `orderId` references a null order.

```solidity
function wasFilled(uint256 orderId) external view override notNull(orderId) returns (bool result);
```

### \_notTooHigh

Reverts if `newTradeFee` is greater than the maximum trade fee.

```solidity
function _notTooHigh(UD60x18 newTradeFee) internal pure;
```

### \_statusOf

Return the order status without performing a null check.

```solidity
function _statusOf(uint256 orderId) internal view returns (Escrow.Status);
```

### \_notNull

Reverts if `orderId` references a null order.

```solidity
function _notNull(uint256 orderId) private view;
```
