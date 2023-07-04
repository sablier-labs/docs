# Errors

[Git Source](https://github.com/sablier-labs/v2-core/blob/159e87a2f5af03967faf292df81fef93c14be2e2/src/libraries/Errors.sol)

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

### SablierV2Base_NoProtocolRevenues

Thrown when trying to claim protocol revenues for an asset with no accrued revenues.

```solidity
error SablierV2Base_NoProtocolRevenues(IERC20 asset);
```

### SablierV2FlashLoan_AssetNotFlashLoanable

Thrown when trying to flash loan an unsupported asset.

```solidity
error SablierV2FlashLoan_AssetNotFlashLoanable(IERC20 asset);
```

### SablierV2FlashLoan_AmountTooHigh

Thrown when trying to flash loan an amount greater than or equal to 2^128.

```solidity
error SablierV2FlashLoan_AmountTooHigh(uint256 amount);
```

### SablierV2FlashLoan_CalculatedFeeTooHigh

Thrown when the calculated fee during a flash loan is greater than or equal to 2^128.

```solidity
error SablierV2FlashLoan_CalculatedFeeTooHigh(uint256 amount);
```

### SablierV2FlashLoan_FlashBorrowFail

Thrown when the callback to the flash borrower fails.

```solidity
error SablierV2FlashLoan_FlashBorrowFail();
```

### SablierV2Lockup_BrokerFeeTooHigh

Thrown when the broker fee exceeds the maximum allowed fee.

```solidity
error SablierV2Lockup_BrokerFeeTooHigh(UD60x18 brokerFee, UD60x18 maxFee);
```

### SablierV2Lockup_DepositAmountZero

Thrown when trying to create a stream with a zero deposit amount.

```solidity
error SablierV2Lockup_DepositAmountZero();
```

### SablierV2Lockup_EndTimeNotInTheFuture

Thrown when trying to create a stream with an end time not in the future.

```solidity
error SablierV2Lockup_EndTimeNotInTheFuture(uint40 currentTime, uint40 endTime);
```

### SablierV2Lockup_InvalidSenderWithdrawal

Thrown when the stream's sender tries to withdraw to an address other than the recipient's.

```solidity
error SablierV2Lockup_InvalidSenderWithdrawal(uint256 streamId, address sender, address to);
```

### SablierV2Lockup_Null

Thrown when the id references a null stream.

```solidity
error SablierV2Lockup_Null(uint256 streamId);
```

### SablierV2Lockup_Overdraw

Thrown when trying to withdraw an amount greater than the withdrawable amount.

```solidity
error SablierV2Lockup_Overdraw(uint256 streamId, uint128 amount, uint128 withdrawableAmount);
```

### SablierV2Lockup_ProtocolFeeTooHigh

Thrown when the protocol fee exceeds the maximum allowed fee.

```solidity
error SablierV2Lockup_ProtocolFeeTooHigh(UD60x18 protocolFee, UD60x18 maxFee);
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

### SablierV2Lockup_WithdrawAmountZero

Thrown when trying to withdraw zero assets from a stream.

```solidity
error SablierV2Lockup_WithdrawAmountZero(uint256 streamId);
```

### SablierV2Lockup_WithdrawArrayCountsNotEqual

Thrown when trying to withdraw from multiple streams and the number of stream ids does not match the number of withdraw
amounts.

```solidity
error SablierV2Lockup_WithdrawArrayCountsNotEqual(uint256 streamIdsCount, uint256 amountsCount);
```

### SablierV2Lockup_WithdrawToZeroAddress

Thrown when trying to withdraw to the zero address.

```solidity
error SablierV2Lockup_WithdrawToZeroAddress();
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

### SablierV2LockupDynamic_SegmentMilestonesNotOrdered

Thrown when trying to create a stream with unordered segment milestones.

```solidity
error SablierV2LockupDynamic_SegmentMilestonesNotOrdered(
    uint256 index, uint40 previousMilestone, uint40 currentMilestone
);
```

### SablierV2LockupDynamic_StartTimeNotLessThanFirstSegmentMilestone

Thrown when trying to create a stream with a start time not strictly less than the first segment milestone.

```solidity
error SablierV2LockupDynamic_StartTimeNotLessThanFirstSegmentMilestone(uint40 startTime, uint40 firstSegmentMilestone);
```

### SablierV2LockupLinear_CliffTimeNotLessThanEndTime

Thrown when trying to create a stream with a cliff time not strictly less than the end time.

```solidity
error SablierV2LockupLinear_CliffTimeNotLessThanEndTime(uint40 cliffTime, uint40 endTime);
```

### SablierV2LockupLinear_StartTimeGreaterThanCliffTime

Thrown when trying to create a stream with a start time greater than the cliff time.

```solidity
error SablierV2LockupLinear_StartTimeGreaterThanCliffTime(uint40 startTime, uint40 cliffTime);
```

### SablierV2NFTDescriptor_UnknownNFT

Thrown when trying to generate the token URI for an unknown ERC-721 NFT contract.

```solidity
error SablierV2NFTDescriptor_UnknownNFT(IERC721Metadata nft, string symbol);
```
