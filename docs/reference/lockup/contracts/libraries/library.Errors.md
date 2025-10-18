# Errors

[Git Source](https://github.com/sablier-labs/lockup/blob/58eaac45c20c57a93b73d887c714e68f061ec3e6/src/libraries/Errors.sol)

Library containing all custom errors the protocol may revert with.

## Errors

### SablierBatchLockup_BatchSizeZero

```solidity
error SablierBatchLockup_BatchSizeZero();
```

### SablierHelpers_CliffTimeNotLessThanEndTime

Thrown when trying to create a linear stream with a cliff time not strictly less than the end time.

```solidity
error SablierHelpers_CliffTimeNotLessThanEndTime(uint40 cliffTime, uint40 endTime);
```

### SablierHelpers_CliffTimeZeroUnlockAmountNotZero

Thrown when trying to create a stream with a non zero cliff unlock amount when the cliff time is zero.

```solidity
error SablierHelpers_CliffTimeZeroUnlockAmountNotZero(uint128 cliffUnlockAmount);
```

### SablierHelpers_CreateNativeToken

Thrown when trying to create a stream with the native token.

```solidity
error SablierHelpers_CreateNativeToken(address nativeToken);
```

### SablierHelpers_DepositAmountNotEqualToSegmentAmountsSum

Thrown when trying to create a dynamic stream with a deposit amount not equal to the sum of the segment amounts.

```solidity
error SablierHelpers_DepositAmountNotEqualToSegmentAmountsSum(uint128 depositAmount, uint128 segmentAmountsSum);
```

### SablierHelpers_DepositAmountNotEqualToTrancheAmountsSum

Thrown when trying to create a tranched stream with a deposit amount not equal to the sum of the tranche amounts.

```solidity
error SablierHelpers_DepositAmountNotEqualToTrancheAmountsSum(uint128 depositAmount, uint128 trancheAmountsSum);
```

### SablierHelpers_DepositAmountZero

Thrown when trying to create a stream with a zero deposit amount.

```solidity
error SablierHelpers_DepositAmountZero();
```

### SablierHelpers_EndTimeNotEqualToLastSegmentTimestamp

Thrown when trying to create a dynamic stream with end time not equal to the last segment's timestamp.

```solidity
error SablierHelpers_EndTimeNotEqualToLastSegmentTimestamp(uint40 endTime, uint40 lastSegmentTimestamp);
```

### SablierHelpers_EndTimeNotEqualToLastTrancheTimestamp

Thrown when trying to create a tranched stream with end time not equal to the last tranche's timestamp.

```solidity
error SablierHelpers_EndTimeNotEqualToLastTrancheTimestamp(uint40 endTime, uint40 lastTrancheTimestamp);
```

### SablierHelpers_SegmentCountZero

Thrown when trying to create a dynamic stream with no segments.

```solidity
error SablierHelpers_SegmentCountZero();
```

### SablierHelpers_SegmentTimestampsNotOrdered

Thrown when trying to create a dynamic stream with unordered segment timestamps.

```solidity
error SablierHelpers_SegmentTimestampsNotOrdered(uint256 index, uint40 previousTimestamp, uint40 currentTimestamp);
```

### SablierHelpers_SenderZeroAddress

Thrown when trying to create a stream with the sender as the zero address.

```solidity
error SablierHelpers_SenderZeroAddress();
```

### SablierHelpers_ShapeExceeds32Bytes

Thrown when trying to create a stream with a shape string exceeding 32 bytes.

```solidity
error SablierHelpers_ShapeExceeds32Bytes(uint256 shapeLength);
```

### SablierHelpers_StartTimeNotLessThanCliffTime

Thrown when trying to create a linear stream with a start time not strictly less than the cliff time, when the cliff
time does not have a zero value.

```solidity
error SablierHelpers_StartTimeNotLessThanCliffTime(uint40 startTime, uint40 cliffTime);
```

### SablierHelpers_StartTimeNotLessThanEndTime

Thrown when trying to create a linear stream with a start time not strictly less than the end time.

```solidity
error SablierHelpers_StartTimeNotLessThanEndTime(uint40 startTime, uint40 endTime);
```

### SablierHelpers_StartTimeNotLessThanFirstSegmentTimestamp

Thrown when trying to create a dynamic stream with a start time not strictly less than the first segment timestamp.

```solidity
error SablierHelpers_StartTimeNotLessThanFirstSegmentTimestamp(uint40 startTime, uint40 firstSegmentTimestamp);
```

### SablierHelpers_StartTimeNotLessThanFirstTrancheTimestamp

Thrown when trying to create a tranched stream with a start time not strictly less than the first tranche timestamp.

```solidity
error SablierHelpers_StartTimeNotLessThanFirstTrancheTimestamp(uint40 startTime, uint40 firstTrancheTimestamp);
```

### SablierHelpers_StartTimeZero

Thrown when trying to create a stream with a zero start time.

```solidity
error SablierHelpers_StartTimeZero();
```

### SablierHelpers_TrancheCountZero

Thrown when trying to create a tranched stream with no tranches.

```solidity
error SablierHelpers_TrancheCountZero();
```

### SablierHelpers_TrancheTimestampsNotOrdered

Thrown when trying to create a tranched stream with unordered tranche timestamps.

```solidity
error SablierHelpers_TrancheTimestampsNotOrdered(uint256 index, uint40 previousTimestamp, uint40 currentTimestamp);
```

### SablierHelpers_UnlockAmountsSumTooHigh

Thrown when trying to create a stream with the sum of the unlock amounts greater than the deposit amount.

```solidity
error SablierHelpers_UnlockAmountsSumTooHigh(
    uint128 depositAmount, uint128 startUnlockAmount, uint128 cliffUnlockAmount
);
```

### SablierLockup_AllowToHookUnsupportedInterface

Thrown when trying to allow to hook a contract that doesn't implement the interface correctly.

```solidity
error SablierLockup_AllowToHookUnsupportedInterface(address recipient);
```

### SablierLockup_AllowToHookZeroCodeSize

Thrown when trying to allow to hook an address with no code.

```solidity
error SablierLockup_AllowToHookZeroCodeSize(address recipient);
```

### SablierLockup_InsufficientFeePayment

Thrown when trying to withdraw with a fee amount less than the minimum fee.

```solidity
error SablierLockup_InsufficientFeePayment(uint256 feePaid, uint256 minFeeWei);
```

### SablierLockup_FeeTransferFailed

Thrown when the fee transfer fails.

```solidity
error SablierLockup_FeeTransferFailed(address comptroller, uint256 feeAmount);
```

### SablierLockup_InvalidHookSelector

Thrown when the hook does not return the correct selector.

```solidity
error SablierLockup_InvalidHookSelector(address recipient);
```

### SablierLockup_NativeTokenAlreadySet

Thrown when trying to set the native token address when it is already set.

```solidity
error SablierLockup_NativeTokenAlreadySet(address nativeToken);
```

### SablierLockup_NotTransferable

Thrown when trying to transfer Stream NFT when transferability is disabled.

```solidity
error SablierLockup_NotTransferable(uint256 tokenId);
```

### SablierLockup_Overdraw

Thrown when trying to withdraw an amount greater than the withdrawable amount.

```solidity
error SablierLockup_Overdraw(uint256 streamId, uint128 amount, uint128 withdrawableAmount);
```

### SablierLockup_StreamCanceled

Thrown when trying to cancel or renounce a canceled stream.

```solidity
error SablierLockup_StreamCanceled(uint256 streamId);
```

### SablierLockup_StreamDepleted

Thrown when trying to cancel, renounce, or withdraw from a depleted stream.

```solidity
error SablierLockup_StreamDepleted(uint256 streamId);
```

### SablierLockup_StreamNotCancelable

Thrown when trying to cancel or renounce a stream that is not cancelable.

```solidity
error SablierLockup_StreamNotCancelable(uint256 streamId);
```

### SablierLockup_StreamNotDepleted

Thrown when trying to burn a stream that is not depleted.

```solidity
error SablierLockup_StreamNotDepleted(uint256 streamId);
```

### SablierLockup_StreamSettled

Thrown when trying to cancel or renounce a settled stream.

```solidity
error SablierLockup_StreamSettled(uint256 streamId);
```

### SablierLockup_Unauthorized

Thrown when `msg.sender` lacks authorization to perform an action.

```solidity
error SablierLockup_Unauthorized(uint256 streamId, address caller);
```

### SablierLockup_WithdrawalAddressNotRecipient

Thrown when trying to withdraw to an address other than the recipient's.

```solidity
error SablierLockup_WithdrawalAddressNotRecipient(uint256 streamId, address caller, address to);
```

### SablierLockup_WithdrawAmountZero

Thrown when trying to withdraw zero tokens from a stream.

```solidity
error SablierLockup_WithdrawAmountZero(uint256 streamId);
```

### SablierLockup_WithdrawArrayCountsNotEqual

Thrown when trying to withdraw from multiple streams and the number of stream IDs does not match the number of withdraw
amounts.

```solidity
error SablierLockup_WithdrawArrayCountsNotEqual(uint256 streamIdsCount, uint256 amountsCount);
```

### SablierLockup_WithdrawToZeroAddress

Thrown when trying to withdraw to the zero address.

```solidity
error SablierLockup_WithdrawToZeroAddress(uint256 streamId);
```

### SablierLockupState_NotExpectedModel

Thrown when a function is called on a stream that does not use the expected Lockup model.

```solidity
error SablierLockupState_NotExpectedModel(Lockup.Model actualLockupModel, Lockup.Model expectedLockupModel);
```

### SablierLockupState_Null

Thrown when the ID references a null stream.

```solidity
error SablierLockupState_Null(uint256 streamId);
```
