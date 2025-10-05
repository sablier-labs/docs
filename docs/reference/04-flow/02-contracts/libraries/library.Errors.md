# Errors

[Git Source](https://github.com/sablier-labs/flow/blob/a0fa33d2843af0817e34970cdc05822ead31daaa/src/libraries/Errors.sol)

Library with custom errors used across the Flow contract.

## Errors

### BatchError

Thrown when an unexpected error occurs during a batch call.

```solidity
error BatchError(bytes errorData);
```

### CallerNotAdmin

Thrown when `msg.sender` is not the admin.

```solidity
error CallerNotAdmin(address admin, address caller);
```

### DelegateCall

Thrown when trying to delegate call to a function that disallows delegate calls.

```solidity
error DelegateCall();
```

### SablierFlow_BrokerAddressZero

Thrown when trying to create a stream with a broker recipient address as zero.

```solidity
error SablierFlow_BrokerAddressZero();
```

### SablierFlow_BrokerFeeTooHigh

Thrown when trying to create a stream with a broker fee more than the allowed.

```solidity
error SablierFlow_BrokerFeeTooHigh(UD60x18 brokerFee, UD60x18 maxFee);
```

### SablierFlow_DepositAmountZero

Thrown when trying to create a stream with a zero deposit amount.

```solidity
error SablierFlow_DepositAmountZero(uint256 streamId);
```

### SablierFlow_InvalidCalculation

Thrown when an unexpected error occurs during the calculation of an amount.

```solidity
error SablierFlow_InvalidCalculation(uint256 streamId, uint128 availableAmount, uint128 amount);
```

### SablierFlow_InvalidTokenDecimals

Thrown when trying to create a stream with an token with no decimals.

```solidity
error SablierFlow_InvalidTokenDecimals(address token);
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

### SablierFlow_Null

Thrown when the ID references a null stream.

```solidity
error SablierFlow_Null(uint256 streamId);
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

### SablierFlow_StreamPaused

Thrown when trying to perform an action with a paused stream.

```solidity
error SablierFlow_StreamPaused(uint256 streamId);
```

### SablierFlow_StreamNotPaused

Thrown when trying to restart a stream that is not paused.

```solidity
error SablierFlow_StreamNotPaused(uint256 streamId);
```

### SablierFlow_StreamVoided

Thrown when trying to perform an action with a voided stream.

```solidity
error SablierFlow_StreamVoided(uint256 streamId);
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

### SablierFlowBase_FeeTransferFail

Thrown when the fee transfer fails.

```solidity
error SablierFlowBase_FeeTransferFail(address admin, uint256 feeAmount);
```

### SablierFlowBase_NoProtocolRevenue

Thrown when trying to claim protocol revenue when the accrued amount is zero.

```solidity
error SablierFlowBase_NoProtocolRevenue(address token);
```

### SablierFlowBase_NotTransferable

Thrown when trying to transfer Stream NFT when transferability is disabled.

```solidity
error SablierFlowBase_NotTransferable(uint256 streamId);
```

### SablierFlowBase_ProtocolFeeTooHigh

Thrown when trying to set protocol fee more than the allowed.

```solidity
error SablierFlowBase_ProtocolFeeTooHigh(UD60x18 newProtocolFee, UD60x18 maxFee);
```

### SablierFlowBase_SurplusZero

Thrown when trying to recover for a token with zero surplus.

```solidity
error SablierFlowBase_SurplusZero(address token);
```
