# Errors

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/libraries/Errors.sol)

**Title:** Errors

Library containing all custom errors emitted by the Sablier Bob protocol.

## Errors

### BobVaultShare_OnlySablierBob

Thrown when a function is called by an address other than SablierBob.

```solidity
error BobVaultShare_OnlySablierBob(address caller, address expectedCaller);
```

### BobVaultShare_VaultIdMismatch

Thrown when the provided vault ID does not match the share token's vault ID.

```solidity
error BobVaultShare_VaultIdMismatch(uint256 providedVaultId, uint256 expectedVaultId);
```

### SablierBob_CallerNotShareToken

Thrown when `onShareTransfer` is called by an address other than the share token.

```solidity
error SablierBob_CallerNotShareToken(uint256 vaultId, address caller);
```

### SablierBob_DepositAmountZero

Thrown when depositing zero amount in a vault.

```solidity
error SablierBob_DepositAmountZero(uint256 vaultId, address user);
```

### SablierBob_ExpiryNotInFuture

Thrown when trying to create a vault with an expiry timestamp not in the future.

```solidity
error SablierBob_ExpiryNotInFuture(uint40 expiry, uint40 currentTime);
```

### SablierBob_ForbidNativeToken

Thrown when trying to create a vault with the native token.

```solidity
error SablierBob_ForbidNativeToken(address nativeToken);
```

### SablierBob_InsufficientFeePayment

Thrown when trying to redeem with `msg.value` less than the minimum fee required.

```solidity
error SablierBob_InsufficientFeePayment(uint256 feePaid, uint256 feeRequired);
```

### SablierBob_MsgValueNotZero

Thrown when trying to pay a fee in the native token from a vault that uses the adapter.

```solidity
error SablierBob_MsgValueNotZero(uint256 vaultId);
```

### SablierBob_NativeFeeTransferFailed

Thrown when the native token fee transfer to the comptroller fails.

```solidity
error SablierBob_NativeFeeTransferFailed();
```

### SablierBob_NativeTokenAlreadySet

Thrown when trying to set the native token address when it is already set.

```solidity
error SablierBob_NativeTokenAlreadySet(address nativeToken);
```

### SablierBob_NativeTokenZeroAddress

Thrown when trying to set zero address as native token.

```solidity
error SablierBob_NativeTokenZeroAddress();
```

### SablierBob_NewAdapterMissesInterface

Thrown when the new adapter does not implement the required interface.

```solidity
error SablierBob_NewAdapterMissesInterface(address adapter);
```

### SablierBob_NoSharesToRedeem

Thrown when trying to exit or redeem with zero share balance.

```solidity
error SablierBob_NoSharesToRedeem(uint256 vaultId, address user);
```

### SablierBob_TargetPriceZero

Thrown when trying to create a vault with a zero target price.

```solidity
error SablierBob_TargetPriceZero();
```

### SablierBob_TargetPriceTooLow

Thrown when trying to create a vault with a target price that is not greater than the latest price returned by the
oracle.

```solidity
error SablierBob_TargetPriceTooLow(uint128 targetPrice, uint128 currentPrice);
```

### SablierBob_TokenAddressZero

Thrown when trying to create a vault with a zero token address.

```solidity
error SablierBob_TokenAddressZero();
```

### SablierBob_UnstakeAmountZero

Thrown when trying to unstake vault tokens using the adapter but the amount staked is zero.

```solidity
error SablierBob_UnstakeAmountZero(uint256 vaultId);
```

### SablierBob_VaultAlreadyUnstaked

Thrown when trying to unstake vault tokens using the adapter but the vault has already been unstaked.

```solidity
error SablierBob_VaultAlreadyUnstaked(uint256 vaultId);
```

### SablierBob_VaultHasNoAdapter

Thrown when trying to unstake from a vault that has no adapter configured.

```solidity
error SablierBob_VaultHasNoAdapter(uint256 vaultId);
```

### SablierBob_VaultNotActive

Thrown when trying to perform an unauthorized action on a non-active vault.

```solidity
error SablierBob_VaultNotActive(uint256 vaultId);
```

### SablierBob_VaultStillActive

Thrown when trying to perform an unauthorized action on an active vault.

```solidity
error SablierBob_VaultStillActive(uint256 vaultId);
```

### SablierBobState_Null

Thrown when trying to interact with a non-existent vault.

```solidity
error SablierBobState_Null(uint256 vaultId);
```

### SablierEscrow_BuyTokenZero

Thrown when trying to create an order with a zero address for the buy token.

```solidity
error SablierEscrow_BuyTokenZero();
```

### SablierEscrow_CallerNotAuthorized

Thrown when the caller is not authorized to perform an action on an order.

```solidity
error SablierEscrow_CallerNotAuthorized(uint256 orderId, address caller, address expectedCaller);
```

### SablierEscrow_ExpiryTimeInPast

Thrown when trying to create an order with an expiration timestamp in the past.

```solidity
error SablierEscrow_ExpiryTimeInPast(uint40 expiryTime, uint40 currentTime);
```

### SablierEscrow_ForbidNativeToken

Thrown when trying to create an order with the native token.

```solidity
error SablierEscrow_ForbidNativeToken(address nativeToken);
```

### SablierEscrow_InsufficientBuyAmount

Thrown when trying to accept an order with a buy amount that is below the minimum amount required.

```solidity
error SablierEscrow_InsufficientBuyAmount(uint128 buyAmount, uint128 minBuyAmount);
```

### SablierEscrow_MinBuyAmountZero

Thrown when trying to create an order with a zero buy amount.

```solidity
error SablierEscrow_MinBuyAmountZero();
```

### SablierEscrow_NativeTokenAlreadySet

Thrown when trying to set the native token address when it is already set.

```solidity
error SablierEscrow_NativeTokenAlreadySet(address nativeToken);
```

### SablierEscrow_NativeTokenZeroAddress

Thrown when trying to set zero address as native token.

```solidity
error SablierEscrow_NativeTokenZeroAddress();
```

### SablierEscrow_OrderCancelled

Thrown when trying to cancel an order that has already been canceled.

```solidity
error SablierEscrow_OrderCancelled(uint256 orderId);
```

### SablierEscrow_OrderFilled

Thrown when trying to cancel an order that has already been filled.

```solidity
error SablierEscrow_OrderFilled(uint256 orderId);
```

### SablierEscrow_OrderNotOpen

Thrown when trying to fill an order that has either been completed or canceled.

```solidity
error SablierEscrow_OrderNotOpen(uint256 orderId, Escrow.Status status);
```

### SablierEscrow_SameToken

Thrown when trying to create an order with the same sell and buy tokens.

```solidity
error SablierEscrow_SameToken(IERC20 token);
```

### SablierEscrow_SellAmountZero

Thrown when trying to create an order with a zero sell amount.

```solidity
error SablierEscrow_SellAmountZero();
```

### SablierEscrow_SellTokenZero

Thrown when trying to create an order with a zero address for the sell token.

```solidity
error SablierEscrow_SellTokenZero();
```

### SablierEscrowState_NewTradeFeeTooHigh

Thrown when trying to set a trade fee that exceeds the maximum allowed.

```solidity
error SablierEscrowState_NewTradeFeeTooHigh(UD60x18 newTradeFee, UD60x18 maxTradeFee);
```

### SablierEscrowState_Null

Thrown when trying to interact with a non-existent order.

```solidity
error SablierEscrowState_Null(uint256 orderId);
```

### SablierLidoAdapter_LidoWithdrawalAlreadyRequested

Thrown when trying to request a Lido withdrawal for a vault that has already requested one.

```solidity
error SablierLidoAdapter_LidoWithdrawalAlreadyRequested(uint256 vaultId);
```

### SablierLidoAdapter_NoWstETHToWithdraw

Thrown when trying to request a Lido withdrawal for a vault with no wstETH.

```solidity
error SablierLidoAdapter_NoWstETHToWithdraw(uint256 vaultId);
```

### SablierLidoAdapter_OnlySablierBob

Thrown when a function is called by an address other than SablierBob.

```solidity
error SablierLidoAdapter_OnlySablierBob(address caller, address expectedCaller);
```

### SablierLidoAdapter_OraclePriceZero

Thrown when the stETH/ETH oracle returns a zero price.

```solidity
error SablierLidoAdapter_OraclePriceZero();
```

### SablierLidoAdapter_SlippageExceeded

Thrown when the Curve swap output is below the minimum acceptable amount.

```solidity
error SablierLidoAdapter_SlippageExceeded(uint256 expected, uint256 actual);
```

### SablierLidoAdapter_SlippageToleranceTooHigh

Thrown when trying to set a slippage that exceeds the maximum allowed.

```solidity
error SablierLidoAdapter_SlippageToleranceTooHigh(UD60x18 tolerance, UD60x18 maxTolerance);
```

### SablierLidoAdapter_UserBalanceZero

Thrown when trying to update staked token balance but the user's balance is zero.

```solidity
error SablierLidoAdapter_UserBalanceZero(uint256 vaultId, address user);
```

### SablierLidoAdapter_VaultActive

Thrown when trying to request a Lido withdrawal for a vault that is active.

```solidity
error SablierLidoAdapter_VaultActive(uint256 vaultId);
```

### SablierLidoAdapter_VaultAlreadyUnstaked

Thrown when trying to request a Lido withdrawal for a vault that has already been unstaked.

```solidity
error SablierLidoAdapter_VaultAlreadyUnstaked(uint256 vaultId);
```

### SablierLidoAdapter_WstETHTransferAmountZero

Thrown when the calculated wstETH transfer amount rounds down to zero due to floor division.

```solidity
error SablierLidoAdapter_WstETHTransferAmountZero(uint256 vaultId, address from, address to);
```

### SablierLidoAdapter_WithdrawalAmountBelowMinimum

Thrown when the total amount to withdraw is below the minimum amount per request.

```solidity
error SablierLidoAdapter_WithdrawalAmountBelowMinimum(
    uint256 vaultId,
    uint256 totalAmount,
    uint256 minimumAmountPerRequest
);
```

### SablierLidoAdapter_YieldFeeTooHigh

Thrown when trying to set a yield fee that exceeds the maximum allowed.

```solidity
error SablierLidoAdapter_YieldFeeTooHigh(UD60x18 fee, UD60x18 maxFee);
```
