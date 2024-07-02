# Errors

[Git Source](https://github.com/sablier-labs/v2-core/blob/36b49d3bf2a396d19083d28247e8e03d7a3a2ee1/src/libraries/Errors.sol)

Library containing all custom errors the protocol may revert with.

## Errors

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

### SablierV2Lockup_AllowToHookUnsupportedInterface

Thrown when trying to allow to hook a contract that doesn't implement the interface correctly.

```solidity
error SablierV2Lockup_AllowToHookUnsupportedInterface(address recipient);
```

### SablierV2Lockup_AllowToHookZeroCodeSize

Thrown when trying to allow to hook an address with no code.

```solidity
error SablierV2Lockup_AllowToHookZeroCodeSize(address recipient);
```

### SablierV2Lockup_BrokerFeeTooHigh

Thrown when the broker fee exceeds the maximum allowed fee.

```solidity
error SablierV2Lockup_BrokerFeeTooHigh(UD60x18 brokerFee, UD60x18 maxBrokerFee);
```

### SablierV2Lockup_DepositAmountZero

Thrown when trying to create a stream with a zero deposit amount.

```solidity
error SablierV2Lockup_DepositAmountZero();
```

### SablierV2Lockup_EndTimeNotInTheFuture

Thrown when trying to create a stream with an end time not in the future.

```solidity
error SablierV2Lockup_EndTimeNotInTheFuture(uint40 blockTimestamp, uint40 endTime);
```

### SablierV2Lockup_InvalidHookSelector

Thrown when the hook does not return the correct selector.

```solidity
error SablierV2Lockup_InvalidHookSelector(address recipient);
```

### SablierV2Lockup_NotTransferable

Thrown when trying to transfer Stream NFT when transferability is disabled.

```solidity
error SablierV2Lockup_NotTransferable(uint256 tokenId);
```

### SablierV2Lockup_Null

Thrown when the ID references a null stream.

```solidity
error SablierV2Lockup_Null(uint256 streamId);
```

### SablierV2Lockup_Overdraw

Thrown when trying to withdraw an amount greater than the withdrawable amount.

```solidity
error SablierV2Lockup_Overdraw(uint256 streamId, uint128 amount, uint128 withdrawableAmount);
```

### SablierV2Lockup_StartTimeZero

Thrown when trying to create a stream with a zero start time.

```solidity
error SablierV2Lockup_StartTimeZero();
```

### SablierV2Lockup_StreamCanceled

Thrown when trying to cancel or renounce a canceled stream.

```solidity
error SablierV2Lockup_StreamCanceled(uint256 streamId);
```

### SablierV2Lockup_StreamDepleted

Thrown when trying to cancel, renounce, or withdraw from a depleted stream.

```solidity
error SablierV2Lockup_StreamDepleted(uint256 streamId);
```

### SablierV2Lockup_StreamNotCancelable

Thrown when trying to cancel or renounce a stream that is not cancelable.

```solidity
error SablierV2Lockup_StreamNotCancelable(uint256 streamId);
```

### SablierV2Lockup_StreamNotDepleted

Thrown when trying to burn a stream that is not depleted.

```solidity
error SablierV2Lockup_StreamNotDepleted(uint256 streamId);
```

### SablierV2Lockup_StreamSettled

Thrown when trying to cancel or renounce a settled stream.

```solidity
error SablierV2Lockup_StreamSettled(uint256 streamId);
```

### SablierV2Lockup_Unauthorized

Thrown when `msg.sender` lacks authorization to perform an action.

```solidity
error SablierV2Lockup_Unauthorized(uint256 streamId, address caller);
```

### SablierV2Lockup_WithdrawalAddressNotRecipient

Thrown when trying to withdraw to an address other than the recipient's.

```solidity
error SablierV2Lockup_WithdrawalAddressNotRecipient(uint256 streamId, address caller, address to);
```

### SablierV2Lockup_WithdrawAmountZero

Thrown when trying to withdraw zero assets from a stream.

```solidity
error SablierV2Lockup_WithdrawAmountZero(uint256 streamId);
```

### SablierV2Lockup_WithdrawArrayCountsNotEqual

Thrown when trying to withdraw from multiple streams and the number of stream IDs does not match the number of withdraw
amounts.

```solidity
error SablierV2Lockup_WithdrawArrayCountsNotEqual(uint256 streamIdsCount, uint256 amountsCount);
```

### SablierV2Lockup_WithdrawToZeroAddress

Thrown when trying to withdraw to the zero address.

```solidity
error SablierV2Lockup_WithdrawToZeroAddress(uint256 streamId);
```

### SablierV2LockupDynamic_DepositAmountNotEqualToSegmentAmountsSum

Thrown when trying to create a stream with a deposit amount not equal to the sum of the segment amounts.

```solidity
error SablierV2LockupDynamic_DepositAmountNotEqualToSegmentAmountsSum(uint128 depositAmount, uint128 segmentAmountsSum);
```

### SablierV2LockupDynamic_SegmentCountTooHigh

Thrown when trying to create a stream with more segments than the maximum allowed.

```solidity
error SablierV2LockupDynamic_SegmentCountTooHigh(uint256 count);
```

### SablierV2LockupDynamic_SegmentCountZero

Thrown when trying to create a stream with no segments.

```solidity
error SablierV2LockupDynamic_SegmentCountZero();
```

### SablierV2LockupDynamic_SegmentTimestampsNotOrdered

Thrown when trying to create a stream with unordered segment timestamps.

```solidity
error SablierV2LockupDynamic_SegmentTimestampsNotOrdered(
    uint256 index, uint40 previousTimestamp, uint40 currentTimestamp
);
```

### SablierV2LockupDynamic_StartTimeNotLessThanFirstSegmentTimestamp

Thrown when trying to create a stream with a start time not strictly less than the first segment timestamp.

```solidity
error SablierV2LockupDynamic_StartTimeNotLessThanFirstSegmentTimestamp(uint40 startTime, uint40 firstSegmentTimestamp);
```

### SablierV2LockupLinear_CliffTimeNotLessThanEndTime

Thrown when trying to create a stream with a cliff time not strictly less than the end time.

```solidity
error SablierV2LockupLinear_CliffTimeNotLessThanEndTime(uint40 cliffTime, uint40 endTime);
```

### SablierV2LockupLinear_StartTimeNotLessThanCliffTime

Thrown when trying to create a stream with a start time not strictly less than the cliff time, when the cliff time does
not have a zero value.

```solidity
error SablierV2LockupLinear_StartTimeNotLessThanCliffTime(uint40 startTime, uint40 cliffTime);
```

### SablierV2LockupLinear_StartTimeNotLessThanEndTime

Thrown when trying to create a stream with a start time not strictly less than the end time.

```solidity
error SablierV2LockupLinear_StartTimeNotLessThanEndTime(uint40 startTime, uint40 endTime);
```

### SablierV2NFTDescriptor_UnknownNFT

Thrown when trying to generate the token URI for an unknown ERC-721 NFT contract.

```solidity
error SablierV2NFTDescriptor_UnknownNFT(IERC721Metadata nft, string symbol);
```

### SablierV2LockupTranched_DepositAmountNotEqualToTrancheAmountsSum

Thrown when trying to create a stream with a deposit amount not equal to the sum of the tranche amounts.

```solidity
error SablierV2LockupTranched_DepositAmountNotEqualToTrancheAmountsSum(uint128 depositAmount, uint128 trancheAmountsSum);
```

### SablierV2LockupTranched_StartTimeNotLessThanFirstTrancheTimestamp

Thrown when trying to create a stream with a start time not strictly less than the first tranche timestamp.

```solidity
error SablierV2LockupTranched_StartTimeNotLessThanFirstTrancheTimestamp(uint40 startTime, uint40 firstTrancheTimestamp);
```

### SablierV2LockupTranched_TrancheCountTooHigh

Thrown when trying to create a stream with more tranches than the maximum allowed.

```solidity
error SablierV2LockupTranched_TrancheCountTooHigh(uint256 count);
```

### SablierV2LockupTranched_TrancheCountZero

Thrown when trying to create a stream with no tranches.

```solidity
error SablierV2LockupTranched_TrancheCountZero();
```

### SablierV2LockupTranched_TrancheTimestampsNotOrdered

Thrown when trying to create a stream with unordered tranche timestamps.

```solidity
error SablierV2LockupTranched_TrancheTimestampsNotOrdered(
    uint256 index, uint40 previousTimestamp, uint40 currentTimestamp
);
```
