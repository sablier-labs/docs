---
sidebar_position: 4
---

# SablierEscrow

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/SablierEscrow.sol)

**Inherits:** [Comptrollerable](/docs/reference/bob/contracts/abstracts/abstract.Comptrollerable.md),
[ISablierEscrow](/docs/reference/bob/contracts/interfaces/interface.ISablierEscrow.md),
[SablierEscrowState](/docs/reference/bob/contracts/abstracts/abstract.SablierEscrowState.md)

**Title:** SablierEscrow

See the documentation in [ISablierEscrow](/docs/reference/bob/contracts/interfaces/interface.ISablierEscrow.md).

## Functions

### constructor

```solidity
constructor(
    address initialComptroller,
    UD60x18 initialTradeFee
)
    [Comptrollerable](/docs/reference/bob/contracts/abstracts/abstract.Comptrollerable.md)(initialComptroller)
    SablierEscrowState(initialTradeFee);
```

**Parameters**

| Name                 | Type      | Description                                      |
| -------------------- | --------- | ------------------------------------------------ |
| `initialComptroller` | `address` | The address of the initial comptroller contract. |
| `initialTradeFee`    | `UD60x18` | The initial trade fee percentage.                |

### cancelOrder

Cancels an order and returns the escrowed tokens to the caller.

Emits a {CancelOrder} event. Requirements:

- The order must exist.
- The order status must either be OPEN or EXPIRED.
- The caller must be the seller of the order.

```solidity
function cancelOrder(uint256 orderId) external override notNull(orderId);
```

**Parameters**

| Name      | Type      | Description             |
| --------- | --------- | ----------------------- |
| `orderId` | `uint256` | The order ID to cancel. |

### createOrder

Creates a new order for a peer-to-peer token swap.

Emits a {CreateOrder} event. Requirements:

- `sellToken` must not be the zero address.
- `buyToken` must not be the zero address.
- `sellToken` and `buyToken` must not be the same token.
- `sellAmount` must be greater than zero.
- `minBuyAmount` must be greater than zero.
- If `expiryTime` is non-zero, it must be in the future. Zero is sentinel for orders that never expire.
- The caller must have approved this contract to transfer at least `sellAmount` of `sellToken`.

```solidity
function createOrder(
    IERC20 sellToken,
    uint128 sellAmount,
    IERC20 buyToken,
    uint128 minBuyAmount,
    address buyer,
    uint40 expiryTime
)
    external
    override
    returns (uint256 orderId);
```

**Parameters**

| Name           | Type      | Description                                                                                                          |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------- |
| `sellToken`    | `IERC20`  | The address of the ERC-20 token to sell.                                                                             |
| `sellAmount`   | `uint128` | The amount of sell token to exchange.                                                                                |
| `buyToken`     | `IERC20`  | The address of the ERC-20 token to receive.                                                                          |
| `minBuyAmount` | `uint128` | The minimum amount of buy token to fill this trade.                                                                  |
| `buyer`        | `address` | The designated counterparty address specified by the seller. If its zero address, the order can be filled by anyone. |
| `expiryTime`   | `uint40`  | The Unix timestamp when the order expires. Zero is sentinel for orders that never expire.                            |

**Returns**

| Name      | Type      | Description                              |
| --------- | --------- | ---------------------------------------- |
| `orderId` | `uint256` | The order ID of the newly created order. |

### fillOrder

Fill an open order.

Emits an {FillOrder} event. Requirements:

- The order must exist.
- The order must be in OPEN status.
- If the order has buyer specified, the caller must be the buyer.
- `buyAmount` must be greater than or equal to the `minBuyAmount`.
- The caller must have approved this contract to transfer at least `buyAmount` of `buyToken`.

```solidity
function fillOrder(
    uint256 orderId,
    uint128 buyAmount
)
    external
    override
    notNull(orderId)
    returns (
        uint128 amountToTransferToSeller,
        uint128 amountToTransferToBuyer,
        uint128 feeDeductedFromBuyerAmount,
        uint128 feeDeductedFromSellerAmount
    );
```

**Parameters**

| Name        | Type      | Description                          |
| ----------- | --------- | ------------------------------------ |
| `orderId`   | `uint256` | The order ID to fill.                |
| `buyAmount` | `uint128` | The amount of buy token to exchange. |

**Returns**

| Name                          | Type      | Description                                                             |
| ----------------------------- | --------- | ----------------------------------------------------------------------- |
| `amountToTransferToSeller`    | `uint128` | The amount of buy token to transfer to the seller after deducting fees. |
| `amountToTransferToBuyer`     | `uint128` | The amount of sell token to transfer to the buyer after deducting fees. |
| `feeDeductedFromBuyerAmount`  | `uint128` | The amount of sell token deducted from the buyer's amount as fees.      |
| `feeDeductedFromSellerAmount` | `uint128` | The amount of buy token deducted from the seller's amount as fees.      |

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

### setTradeFee

Sets the fee to apply on each trade.

Emits a {SetTradeFee} event. Requirements:

- The caller must be the comptroller.
- `newTradeFee` must not exceed the maximum trade fee.

```solidity
function setTradeFee(UD60x18 newTradeFee) external override onlyComptroller;
```

**Parameters**

| Name          | Type      | Description                                                          |
| ------------- | --------- | -------------------------------------------------------------------- |
| `newTradeFee` | `UD60x18` | The new trade fee to set, denominated in UD60x18, where 1e18 = 100%. |
