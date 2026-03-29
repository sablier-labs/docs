# Escrow

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/types/Escrow.sol)

Namespace for the structs and enums used in the Sablier Escrow protocol.

## Structs

### Order

Struct encapsulating all the configuration and state of an order.

The fields are arranged for gas optimization via tight variable packing.

```solidity
struct Order {
    // slot 0
    address seller;
    uint40 expiryTime;
    bool wasCanceled;
    bool wasFilled;
    // slot 1
    address buyer;
    // slot 2
    IERC20 sellToken;
    // slot 3
    IERC20 buyToken;
    // slot 4
    uint128 sellAmount;
    uint128 minBuyAmount;
}
```

**Properties**

| Name           | Type      | Description                                                                                                          |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------- |
| `seller`       | `address` | The address that created the order and deposited the sell token.                                                     |
| `expiryTime`   | `uint40`  | The Unix timestamp when the order expires. Zero is sentinel for orders that never expire.                            |
| `wasCanceled`  | `bool`    | Boolean indicating if the order was canceled.                                                                        |
| `wasFilled`    | `bool`    | Boolean indicating if the order was filled.                                                                          |
| `buyer`        | `address` | The designated counterparty address specified by the seller. If its zero address, the order can be filled by anyone. |
| `sellToken`    | `IERC20`  | The ERC-20 token being sold, deposited by the seller when the order is created.                                      |
| `buyToken`     | `IERC20`  | The ERC-20 token the seller wants to receive.                                                                        |
| `sellAmount`   | `uint128` | The amount of sell token that the seller is willing to exchange.                                                     |
| `minBuyAmount` | `uint128` | The minimum amount of buy token required to fill the order.                                                          |

## Enums

### Status

Enum representing the different statuses of an order.

The status is derived at runtime from boolean flags and timestamps, not stored directly.

**Notes:**

- value0: CANCELLED Order has been cancelled by the seller.

- value1: EXPIRED Order has expired without being filled.

- value2: FILLED Order has been successfully filled.

- value3: OPEN Order is open and can be filled or cancelled.

```solidity
enum Status {
    CANCELLED,
    EXPIRED,
    FILLED,
    OPEN
}
```
