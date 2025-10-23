# Errors

[Git Source](https://github.com/sablier-labs/flow/blob/a4143de45478f508bca8305fec2bd81b7ad25fe9/src/libraries/Errors.sol)

Library with custom errors used across the Flow contract.

## Errors

### SablierFlow_CreateNativeToken

Thrown when trying to create a stream with the native token.

```solidity
error SablierFlow_CreateNativeToken(address nativeToken);
```

### SablierFlow_CreateRatePerSecondZero

Thrown when trying to create a pending stream with zero rate per second.

```solidity
error SablierFlow_CreateRatePerSecondZero();
```

### SablierFlow_DepositAmountZero

Thrown when trying to create a stream with a zero deposit amount.

```solidity
error SablierFlow_DepositAmountZero(uint256 streamId);
```

### SablierFlow_InsufficientFeePayment

Thrown when trying to withdraw with a fee amount less than the minimum fee.

```solidity
error SablierFlow_InsufficientFeePayment(uint256 feePaid, uint256 minFeeWei);
```

### SablierFlow_InvalidCalculation

Thrown when an unexpected error occurs during the calculation of an amount.

```solidity
error SablierFlow_InvalidCalculation(uint256 streamId, uint128 availableAmount, uint128 amount);
```

### SablierFlow_InvalidTokenDecimals

Thrown when trying to create a stream with a token with decimals greater than 18.

```solidity
error SablierFlow_InvalidTokenDecimals(address token);
```

### SablierFlow_NativeTokenAlreadySet

Thrown when trying to set the native token address when it is already set.

```solidity
error SablierFlow_NativeTokenAlreadySet(address nativeToken);
```

### SablierFlow_NativeTokenZeroAddress

Thrown when trying to set zero address as native token.

```solidity
error SablierFlow_NativeTokenZeroAddress();
```

### SablierFlow_NewRatePerSecondZero

Thrown when trying to adjust the rate per second to zero.

```solidity
error SablierFlow_NewRatePerSecondZero(uint256 streamId);
```

### SablierFlow_NotStreamRecipient

Thrown when the recipient address does not match the stream's recipient.

```solidity
error SablierFlow_NotStreamRecipient(address recipient, address streamRecipient);
```

### SablierFlow_NotStreamSender

Thrown when the sender address does not match the stream's sender.

```solidity
error SablierFlow_NotStreamSender(address sender, address streamSender);
```

### SablierFlow_NotTransferable

Thrown when trying to transfer Stream NFT when transferability is disabled.

```solidity
error SablierFlow_NotTransferable(uint256 streamId);
```

### SablierFlow_Overdraw

Thrown when trying to withdraw an amount greater than the withdrawable amount.

```solidity
error SablierFlow_Overdraw(uint256 streamId, uint128 amount, uint128 withdrawableAmount);
```

### SablierFlow_RatePerSecondNotDifferent

Thrown when trying to change the rate per second with the same rate per second.

```solidity
error SablierFlow_RatePerSecondNotDifferent(uint256 streamId, UD21x18 ratePerSecond);
```

### SablierFlow_RefundAmountZero

Thrown when trying to refund zero tokens from a stream.

```solidity
error SablierFlow_RefundAmountZero(uint256 streamId);
```

### SablierFlow_RefundOverflow

Thrown when trying to refund an amount greater than the refundable amount.

```solidity
error SablierFlow_RefundOverflow(uint256 streamId, uint128 refundAmount, uint128 refundableAmount);
```

### SablierFlow_SenderZeroAddress

Thrown when trying to create a stream with the sender as the zero address.

```solidity
error SablierFlow_SenderZeroAddress();
```

### SablierFlow_StreamBalanceZero

Thrown when trying to get depletion time of a stream with zero balance.

```solidity
error SablierFlow_StreamBalanceZero(uint256 streamId);
```

### SablierFlow_StreamNotPaused

Thrown when trying to perform a disallowed action on a non-paused stream.

```solidity
error SablierFlow_StreamNotPaused(uint256 streamId);
```

### SablierFlow_StreamPending

Thrown when trying to perform a disallowed action on a pending stream.

```solidity
error SablierFlow_StreamPending(uint256 streamId, uint40 snapshotTime);
```

### SablierFlow_SurplusZero

Thrown when trying to recover for a token with zero surplus.

```solidity
error SablierFlow_SurplusZero(address token);
```

### SablierFlow_Unauthorized

Thrown when `msg.sender` lacks authorization to perform an action.

```solidity
error SablierFlow_Unauthorized(uint256 streamId, address caller);
```

### SablierFlow_WithdrawalAddressNotRecipient

Thrown when trying to withdraw to an address other than the recipient's.

```solidity
error SablierFlow_WithdrawalAddressNotRecipient(uint256 streamId, address caller, address to);
```

### SablierFlow_WithdrawAmountZero

Thrown when trying to withdraw zero tokens from a stream.

```solidity
error SablierFlow_WithdrawAmountZero(uint256 streamId);
```

### SablierFlow_WithdrawToZeroAddress

Thrown when trying to withdraw to the zero address.

```solidity
error SablierFlow_WithdrawToZeroAddress(uint256 streamId);
```

### SablierFlowState_Null

Thrown when the ID references a null stream.

```solidity
error SablierFlowState_Null(uint256 streamId);
```

### SablierFlowState_StreamPaused

Thrown when trying to perform a disallowed action on a paused stream.

```solidity
error SablierFlowState_StreamPaused(uint256 streamId);
```

### SablierFlowState_StreamVoided

Thrown when trying to perform a disallowed action on a voided stream.

```solidity
error SablierFlowState_StreamVoided(uint256 streamId);
```

### SablierFlowState_Unauthorized

Thrown when `msg.sender` lacks authorization to perform an action.

```solidity
error SablierFlowState_Unauthorized(uint256 streamId, address caller);
```
