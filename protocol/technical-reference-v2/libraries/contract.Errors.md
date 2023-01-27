# Errors
[Git Source](https://github.com/sablierhq/v2-core/blob/cc0ad3978d3901ec331d3c24fbc36ee2b5a297c0/src/libraries/Errors.sol)

Library with custom errors used across the core contracts.


## Errors
### SablierV2FlashLoan_AmountTooHigh
Emitted when attempting to flash loan an amount that is greater than or equal to 2^128.


```solidity
error SablierV2FlashLoan_AmountTooHigh(uint256 amount);
```

### SablierV2FlashLoan_AssetNotFlashLoanable
Emitted when attempting to flash loan an asset that is not supported.


```solidity
error SablierV2FlashLoan_AssetNotFlashLoanable(IERC20 asset);
```

### SablierV2FlashLoan_CalculatedFeeTooHigh
Emitted when during a flash loan the calculated fee is greater than or equal to 2^128.


```solidity
error SablierV2FlashLoan_CalculatedFeeTooHigh(uint256 amount);
```

### SablierV2FlashLoan_FlashBorrowFail
Emitted when the callback to the flash borrower failed.


```solidity
error SablierV2FlashLoan_FlashBorrowFail();
```

### SablierV2FlashLoan_InsufficientAssetLiquidity
Emitted when attempting to flash loan more than is available for lending.


```solidity
error SablierV2FlashLoan_InsufficientAssetLiquidity(IERC20 asset, uint256 amountAvailable, uint256 amountRequested);
```

### SablierV2Lockup_BrokerFeeTooHigh
Emitted when the broker fee is greater than the maximum fee permitted.


```solidity
error SablierV2Lockup_BrokerFeeTooHigh(UD60x18 brokerFee, UD60x18 maxFee);
```

### SablierV2Lockup_NetDepositAmountZero
Emitted when attempting to create a stream with a zero deposit amount.


```solidity
error SablierV2Lockup_NetDepositAmountZero();
```

### SablierV2Lockup_NoProtocolRevenues
Emitted when attempting to claim protocol revenues for an asset that did not accrue any revenues.


```solidity
error SablierV2Lockup_NoProtocolRevenues(IERC20 asset);
```

### SablierV2Lockup_ProtocolFeeTooHigh
Emitted when the protocol fee is greater than the maximum fee permitted.


```solidity
error SablierV2Lockup_ProtocolFeeTooHigh(UD60x18 protocolFee, UD60x18 maxFee);
```

### SablierV2Lockup_RenounceNonCancelableStream
Emitted when attempting to renounce an already non-cancelable stream.


```solidity
error SablierV2Lockup_RenounceNonCancelableStream(uint256 streamId);
```

### SablierV2Lockup_StreamNonCancelable
Emitted when attempting to cancel a stream that is already non-cancelable.


```solidity
error SablierV2Lockup_StreamNonCancelable(uint256 streamId);
```

### SablierV2Lockup_StreamNotActive
Emitted when the stream id points to a stream that is not active.


```solidity
error SablierV2Lockup_StreamNotActive(uint256 streamId);
```

### SablierV2Lockup_StreamNotCanceledOrDepleted
Emitted when the stream id points to a stream that is not canceled or depleted.


```solidity
error SablierV2Lockup_StreamNotCanceledOrDepleted(uint256 streamId);
```

### SablierV2Lockup_Unauthorized
Emitted when the `msg.sender` is not authorized to perform some action.


```solidity
error SablierV2Lockup_Unauthorized(uint256 streamId, address caller);
```

### SablierV2Lockup_WithdrawAmountGreaterThanWithdrawableAmount
Emitted when attempting to withdraw more than can be withdrawn.


```solidity
error SablierV2Lockup_WithdrawAmountGreaterThanWithdrawableAmount(
    uint256 streamId, uint128 amount, uint128 withdrawableAmount
);
```

### SablierV2Lockup_WithdrawAmountZero
Emitted when attempting to withdraw zero assets from a stream.

The id of the stream.


```solidity
error SablierV2Lockup_WithdrawAmountZero(uint256 streamId);
```

### SablierV2Lockup_WithdrawArraysNotEqual
Emitted when attempting to withdraw from multiple streams and the count of the stream ids does
not match the count of the amounts.


```solidity
error SablierV2Lockup_WithdrawArraysNotEqual(uint256 streamIdsCount, uint256 amountsCount);
```

### SablierV2Lockup_WithdrawSenderUnauthorized
Emitted when the sender of the stream attempts to withdraw to some address other than the recipient.


```solidity
error SablierV2Lockup_WithdrawSenderUnauthorized(uint256 streamId, address sender, address to);
```

### SablierV2Lockup_WithdrawToZeroAddress
Emitted when attempting to withdraw to a zero address.


```solidity
error SablierV2Lockup_WithdrawToZeroAddress();
```

### SablierV2LockupLinear_CliffTimeGreaterThanStopTime
Emitted when attempting to create a stream with a cliff time greater than stop time;


```solidity
error SablierV2LockupLinear_CliffTimeGreaterThanStopTime(uint40 cliffTime, uint40 stopTime);
```

### SablierV2LockupLinear_StartTimeGreaterThanCliffTime
Emitted when attempting to create a stream with a start time greater than cliff time;


```solidity
error SablierV2LockupLinear_StartTimeGreaterThanCliffTime(uint40 startTime, uint40 cliffTime);
```

### SablierV2LockupPro_SegmentArraysNotEqual
Emitted when attempting to create a stream and the count of the segments does not match the
count of the deltas.


```solidity
error SablierV2LockupPro_SegmentArraysNotEqual(uint256 segmentCount, uint256 deltaCount);
```

### SablierV2LockupPro_NetDepositAmountNotEqualToSegmentAmountsSum
Emitted when attempting to create a stream with a net deposit amount that does not equal the segment
amounts sum.


```solidity
error SablierV2LockupPro_NetDepositAmountNotEqualToSegmentAmountsSum(
    uint128 netDepositAmount, uint128 segmentAmountsSum
);
```

### SablierV2LockupPro_SegmentCountTooHigh
Emitted when attempting to create a stream with one or more segment counts greater than the maximum
permitted.


```solidity
error SablierV2LockupPro_SegmentCountTooHigh(uint256 count);
```

### SablierV2LockupPro_SegmentCountZero
Emitted when attempting to create a stream with zero segments.


```solidity
error SablierV2LockupPro_SegmentCountZero();
```

### SablierV2LockupPro_SegmentMilestonesNotOrdered
Emitted when attempting to create a stream with segment milestones that are not ordered.


```solidity
error SablierV2LockupPro_SegmentMilestonesNotOrdered(uint256 index, uint40 previousMilestone, uint40 currentMilestone);
```

### SablierV2LockupPro_StartTimeGreaterThanFirstMilestone
Emitted when attempting to create a stream with the start time greater than the first segment milestone.


```solidity
error SablierV2LockupPro_StartTimeGreaterThanFirstMilestone(uint40 startTime, uint40 segmentMilestone);
```

