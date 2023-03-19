# Errors

[Git Source](https://github.com/sablierhq/v2-core/blob/e69c450f9b8808e324f31933450818ca28d0800b/docs/contracts/v2/reference/core)

Library that contains all the custom errors that the protocol may revert with.

## Errors

### CallerNotAdmin

Thrown when the caller is not the admin.

```solidity
error CallerNotAdmin(address admin, address caller);
```

### DelegateCall

Thrown when attempting to delegate call to a function that does not allow delegate calls.

```solidity
error DelegateCall();
```

### SablierV2Base_NoProtocolRevenues

Thrown when attempting to claim protocol revenues for an asset that did not accrue any revenues.

```solidity
error SablierV2Base_NoProtocolRevenues(IERC20 asset);
```

### SablierV2FlashLoan_AmountTooHigh

Thrown when attempting to flash loan an amount that is greater than or equal to 2^128.

```solidity
error SablierV2FlashLoan_AmountTooHigh(uint256 amount);
```

### SablierV2FlashLoan_AssetNotFlashLoanable

Thrown when attempting to flash loan an asset that is not supported.

```solidity
error SablierV2FlashLoan_AssetNotFlashLoanable(IERC20 asset);
```

### SablierV2FlashLoan_CalculatedFeeTooHigh

Thrown when during a flash loan the calculated fee is greater than or equal to 2^128.

```solidity
error SablierV2FlashLoan_CalculatedFeeTooHigh(uint256 amount);
```

### SablierV2FlashLoan_FlashBorrowFail

Thrown when the callback to the flash borrower failed.

```solidity
error SablierV2FlashLoan_FlashBorrowFail();
```

### SablierV2FlashLoan_InsufficientAssetLiquidity

Thrown when attempting to flash loan more than is available for lending.

```solidity
error SablierV2FlashLoan_InsufficientAssetLiquidity(IERC20 asset, uint256 amountAvailable, uint256 amountRequested);
```

### SablierV2Lockup_BrokerFeeTooHigh

Thrown when the broker fee is greater than the maximum fee permitted.

```solidity
error SablierV2Lockup_BrokerFeeTooHigh(UD60x18 brokerFee, UD60x18 maxFee);
```

### SablierV2Lockup_DepositAmountZero

Thrown when attempting to create a stream with a zero deposit amount.

```solidity
error SablierV2Lockup_DepositAmountZero();
```

### SablierV2Lockup_ProtocolFeeTooHigh

Thrown when the protocol fee is greater than the maximum fee permitted.

```solidity
error SablierV2Lockup_ProtocolFeeTooHigh(UD60x18 protocolFee, UD60x18 maxFee);
```

### SablierV2Lockup_RenounceNonCancelableStream

Thrown when attempting to renounce an already non-cancelable stream.

```solidity
error SablierV2Lockup_RenounceNonCancelableStream(uint256 streamId);
```

### SablierV2Lockup_StreamNonCancelable

Thrown when attempting to cancel a stream that is already non-cancelable.

```solidity
error SablierV2Lockup_StreamNonCancelable(uint256 streamId);
```

### SablierV2Lockup_StreamNotActive

Thrown when the stream id points to a stream that is not active.

```solidity
error SablierV2Lockup_StreamNotActive(uint256 streamId);
```

### SablierV2Lockup_StreamNotCanceledOrDepleted

Thrown when the stream id points to a stream that is not canceled or depleted.

```solidity
error SablierV2Lockup_StreamNotCanceledOrDepleted(uint256 streamId);
```

### SablierV2Lockup_Unauthorized

Thrown when the `msg.sender` is not authorized to perform some action.

```solidity
error SablierV2Lockup_Unauthorized(uint256 streamId, address caller);
```

### SablierV2Lockup_WithdrawAmountGreaterThanWithdrawableAmount

Thrown when attempting to withdraw more than can be withdrawn.

```solidity
error SablierV2Lockup_WithdrawAmountGreaterThanWithdrawableAmount(
    uint256 streamId, uint128 amount, uint128 withdrawableAmount
);
```

### SablierV2Lockup_WithdrawAmountZero

Thrown when attempting to withdraw zero assets from a stream.

The id of the stream.

```solidity
error SablierV2Lockup_WithdrawAmountZero(uint256 streamId);
```

### SablierV2Lockup_WithdrawArrayCountsNotEqual

Thrown when attempting to withdraw from multiple streams and the count of the stream ids does not match the count of the
amounts.

```solidity
error SablierV2Lockup_WithdrawArrayCountsNotEqual(uint256 streamIdsCount, uint256 amountsCount);
```

### SablierV2Lockup_WithdrawSenderUnauthorized

Thrown when the sender of the stream attempts to withdraw to some address other than the recipient.

```solidity
error SablierV2Lockup_WithdrawSenderUnauthorized(uint256 streamId, address sender, address to);
```

### SablierV2Lockup_WithdrawToZeroAddress

Thrown when attempting to withdraw to a zero address.

```solidity
error SablierV2Lockup_WithdrawToZeroAddress();
```

### SablierV2LockupLinear_CliffTimeNotLessThanEndTime

Thrown when attempting to create a stream with a cliff time that is not strictly less than the end time.

```solidity
error SablierV2LockupLinear_CliffTimeNotLessThanEndTime(uint40 cliffTime, uint40 endTime);
```

### SablierV2LockupLinear_StartTimeGreaterThanCliffTime

Thrown when attempting to create a stream with a start time greater than the cliff time.

```solidity
error SablierV2LockupLinear_StartTimeGreaterThanCliffTime(uint40 startTime, uint40 cliffTime);
```

### SablierV2LockupDynamic_DepositAmountNotEqualToSegmentAmountsSum

Thrown when attempting to create a stream with a deposit amount that does not equal the segment amounts sum.

```solidity
error SablierV2LockupDynamic_DepositAmountNotEqualToSegmentAmountsSum(uint128 depositAmount, uint128 segmentAmountsSum);
```

### SablierV2LockupDynamic_SegmentCountTooHigh

Thrown when attempting to create a stream with more segments than the maximum permitted.

```solidity
error SablierV2LockupDynamic_SegmentCountTooHigh(uint256 count);
```

### SablierV2LockupDynamic_SegmentCountZero

Thrown when attempting to create a stream with zero segments.

```solidity
error SablierV2LockupDynamic_SegmentCountZero();
```

### SablierV2LockupDynamic_SegmentMilestonesNotOrdered

Thrown when attempting to create a stream with segment milestones that are not ordered.

```solidity
error SablierV2LockupDynamic_SegmentMilestonesNotOrdered(
    uint256 index, uint40 previousMilestone, uint40 currentMilestone
);
```

### SablierV2LockupDynamic_StartTimeNotLessThanFirstSegmentMilestone

Thrown when attempting to create a stream with a start time that is not strictly less than the first segment milestone.

```solidity
error SablierV2LockupDynamic_StartTimeNotLessThanFirstSegmentMilestone(uint40 startTime, uint40 firstSegmentMilestone);
```
