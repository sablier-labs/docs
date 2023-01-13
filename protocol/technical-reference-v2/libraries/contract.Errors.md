# Errors
[Git Source](https://github.com/sablierhq/v2-core/blob/71a38f2401905d2762c14a7b36c2334909bdb760/src/libraries/Errors.sol)

Library with custom errors used across the core contracts.


## Errors
### SablierV2_BrokerFeeTooHigh
Emitted when the broker fee is greater than the maximum fee permitted.


```solidity
error SablierV2_BrokerFeeTooHigh(UD60x18 brokerFee, UD60x18 maxFee);
```

### SablierV2_ClaimZeroProtocolRevenues
Emitted when attempting to claim protocol revenues for a token that did not accrue any revenues.


```solidity
error SablierV2_ClaimZeroProtocolRevenues(IERC20 token);
```

### SablierV2_NetDepositAmountZero
Emitted when attempting to create a stream with a zero deposit amount.


```solidity
error SablierV2_NetDepositAmountZero();
```

### SablierV2_NewGlobalFeeGreaterThanMaxPermitted
Emitted when the new global fee is greater than the maximum permitted.


```solidity
error SablierV2_NewGlobalFeeGreaterThanMaxPermitted(UD60x18 newGlobalFee, UD60x18 maxGlobalFee);
```

### SablierV2_ProtocolFeeTooHigh
Emitted when the protocol fee is greater than the maximum fee permitted.


```solidity
error SablierV2_ProtocolFeeTooHigh(UD60x18 protocolFee, UD60x18 maxFee);
```

### SablierV2_RenounceNonCancelableStream
Emitted when attempting to renounce an already non-cancelable stream.


```solidity
error SablierV2_RenounceNonCancelableStream(uint256 streamId);
```

### SablierV2_StreamExistent
Emitted when the stream id points to an existent stream.


```solidity
error SablierV2_StreamExistent(uint256 streamId);
```

### SablierV2_StreamNonCancelable
Emitted when attempting to cancel a stream that is already non-cancelable.


```solidity
error SablierV2_StreamNonCancelable(uint256 streamId);
```

### SablierV2_StreamNonExistent
Emitted when the stream id points to a nonexistent stream.


```solidity
error SablierV2_StreamNonExistent(uint256 streamId);
```

### SablierV2_Unauthorized
Emitted when the `msg.sender` is not authorized to perform some action.


```solidity
error SablierV2_Unauthorized(uint256 streamId, address caller);
```

### SablierV2_WithdrawArraysNotEqual
Emitted when attempting to withdraw from multiple streams and the count of the stream ids does
not match the count of the amounts.


```solidity
error SablierV2_WithdrawArraysNotEqual(uint256 streamIdsCount, uint256 amountsCount);
```

### SablierV2_WithdrawAmountGreaterThanWithdrawableAmount
Emitted when attempting to withdraw more than can be withdrawn.


```solidity
error SablierV2_WithdrawAmountGreaterThanWithdrawableAmount(
    uint256 streamId, uint128 amount, uint128 withdrawableAmount
);
```

### SablierV2_WithdrawAmountZero
Emitted when attempting to withdraw zero tokens from a stream.

The id of the stream.


```solidity
error SablierV2_WithdrawAmountZero(uint256 streamId);
```

### SablierV2_WithdrawSenderUnauthorized
Emitted when the sender of the stream attempts to withdraw to some address other than the recipient.


```solidity
error SablierV2_WithdrawSenderUnauthorized(uint256 streamId, address sender, address to);
```

### SablierV2_WithdrawToZeroAddress
Emitted when attempting to withdraw to a zero address.


```solidity
error SablierV2_WithdrawToZeroAddress();
```

### SablierV2Linear_CliffTimeGreaterThanStopTime
Emitted when attempting to create a stream with a cliff time greater than stop time;


```solidity
error SablierV2Linear_CliffTimeGreaterThanStopTime(uint40 cliffTime, uint40 stopTime);
```

### SablierV2Linear_StartTimeGreaterThanCliffTime
Emitted when attempting to create a stream with a start time greater than cliff time;


```solidity
error SablierV2Linear_StartTimeGreaterThanCliffTime(uint40 startTime, uint40 cliffTime);
```

### SablierV2Pro_SegmentArraysNotEqual
Emitted when attempting to create a stream and the count of the segments does not match the
count of the deltas.


```solidity
error SablierV2Pro_SegmentArraysNotEqual(uint256 segmentCount, uint256 deltaCount);
```

### SablierV2Pro_NetDepositAmountNotEqualToSegmentAmountsSum
Emitted when attempting to create a stream with a net deposit amount that does not equal the segment
amounts sum.


```solidity
error SablierV2Pro_NetDepositAmountNotEqualToSegmentAmountsSum(uint128 netDepositAmount, uint128 segmentAmountsSum);
```

### SablierV2Pro_SegmentCountTooHigh
Emitted when attempting to create a stream with one or more segment counts greater than the maximum
permitted.


```solidity
error SablierV2Pro_SegmentCountTooHigh(uint256 count);
```

### SablierV2Pro_SegmentCountZero
Emitted when attempting to create a stream with zero segments.


```solidity
error SablierV2Pro_SegmentCountZero();
```

### SablierV2Pro_SegmentMilestonesNotOrdered
Emitted when attempting to create a stream with segment milestones that are not ordered.


```solidity
error SablierV2Pro_SegmentMilestonesNotOrdered(uint256 index, uint40 previousMilestone, uint40 currentMilestone);
```

### SablierV2Pro_StartTimeGreaterThanFirstMilestone
Emitted when attempting to create a stream with the start time greater than the first segment milestone.


```solidity
error SablierV2Pro_StartTimeGreaterThanFirstMilestone(uint40 startTime, uint40 segmentMilestone);
```

