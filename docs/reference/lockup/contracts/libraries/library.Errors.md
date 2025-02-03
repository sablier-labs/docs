# Errors

[Git Source](https://github.com/sablier-labs/lockup/blob/463278dbb461b1733d6424cf0aeee3b8d6bc036a/src/libraries/Errors.sol)

Library containing all custom errors the protocol may revert with.

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

### SablierBatchLockup_BatchSizeZero

```solidity
error SablierBatchLockup_BatchSizeZero();
```

### LockupNFTDescriptor_UnknownNFT

Thrown when trying to generate the token URI for an unknown ERC-721 NFT contract.

```solidity
error LockupNFTDescriptor_UnknownNFT(IERC721Metadata nft, string symbol);
```

### SablierHelpers_BrokerFeeTooHigh

Thrown when the broker fee exceeds the maximum allowed fee.

```solidity
error SablierHelpers_BrokerFeeTooHigh(UD60x18 brokerFee, UD60x18 maxBrokerFee);
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

### SablierHelpers_SegmentCountTooHigh

Thrown when trying to create a dynamic stream with more segments than the maximum allowed.

```solidity
error SablierHelpers_SegmentCountTooHigh(uint256 count);
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

### SablierHelpers_TrancheCountTooHigh

Thrown when trying to create a tranched stream with more tranches than the maximum allowed.

```solidity
error SablierHelpers_TrancheCountTooHigh(uint256 count);
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

### SablierLockupBase_AllowToHookUnsupportedInterface

Thrown when trying to allow to hook a contract that doesn't implement the interface correctly.

```solidity
error SablierLockupBase_AllowToHookUnsupportedInterface(address recipient);
```

### SablierLockupBase_AllowToHookZeroCodeSize

Thrown when trying to allow to hook an address with no code.

```solidity
error SablierLockupBase_AllowToHookZeroCodeSize(address recipient);
```

### SablierLockupBase_FeeTransferFail

Thrown when the fee transfer fails.

```solidity
error SablierLockupBase_FeeTransferFail(address admin, uint256 feeAmount);
```

### SablierLockupBase_InvalidHookSelector

Thrown when the hook does not return the correct selector.

```solidity
error SablierLockupBase_InvalidHookSelector(address recipient);
```

### SablierLockupBase_NotTransferable

Thrown when trying to transfer Stream NFT when transferability is disabled.

```solidity
error SablierLockupBase_NotTransferable(uint256 tokenId);
```

### SablierLockupBase_Null

Thrown when the ID references a null stream.

```solidity
error SablierLockupBase_Null(uint256 streamId);
```

### SablierLockupBase_Overdraw

Thrown when trying to withdraw an amount greater than the withdrawable amount.

```solidity
error SablierLockupBase_Overdraw(uint256 streamId, uint128 amount, uint128 withdrawableAmount);
```

### SablierLockupBase_StreamCanceled

Thrown when trying to cancel or renounce a canceled stream.

```solidity
error SablierLockupBase_StreamCanceled(uint256 streamId);
```

### SablierLockupBase_StreamDepleted

Thrown when trying to cancel, renounce, or withdraw from a depleted stream.

```solidity
error SablierLockupBase_StreamDepleted(uint256 streamId);
```

### SablierLockupBase_StreamNotCancelable

Thrown when trying to cancel or renounce a stream that is not cancelable.

```solidity
error SablierLockupBase_StreamNotCancelable(uint256 streamId);
```

### SablierLockupBase_StreamNotDepleted

Thrown when trying to burn a stream that is not depleted.

```solidity
error SablierLockupBase_StreamNotDepleted(uint256 streamId);
```

### SablierLockupBase_StreamSettled

Thrown when trying to cancel or renounce a settled stream.

```solidity
error SablierLockupBase_StreamSettled(uint256 streamId);
```

### SablierLockupBase_Unauthorized

Thrown when `msg.sender` lacks authorization to perform an action.

```solidity
error SablierLockupBase_Unauthorized(uint256 streamId, address caller);
```

### SablierLockupBase_WithdrawalAddressNotRecipient

Thrown when trying to withdraw to an address other than the recipient's.

```solidity
error SablierLockupBase_WithdrawalAddressNotRecipient(uint256 streamId, address caller, address to);
```

### SablierLockupBase_WithdrawAmountZero

Thrown when trying to withdraw zero tokens from a stream.

```solidity
error SablierLockupBase_WithdrawAmountZero(uint256 streamId);
```

### SablierLockupBase_WithdrawArrayCountsNotEqual

Thrown when trying to withdraw from multiple streams and the number of stream IDs does not match the number of withdraw
amounts.

```solidity
error SablierLockupBase_WithdrawArrayCountsNotEqual(uint256 streamIdsCount, uint256 amountsCount);
```

### SablierLockupBase_WithdrawToZeroAddress

Thrown when trying to withdraw to the zero address.

```solidity
error SablierLockupBase_WithdrawToZeroAddress(uint256 streamId);
```

### SablierLockup_NotExpectedModel

Thrown when a function is called on a stream that does not use the expected Lockup model.

```solidity
error SablierLockup_NotExpectedModel(Lockup.Model actualLockupModel, Lockup.Model expectedLockupModel);
```
