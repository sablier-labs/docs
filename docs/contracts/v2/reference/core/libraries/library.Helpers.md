# Helpers
[Git Source](https://github.com/sablierhq/v2-core/blob/8b6a851f4185bd5af0e89a0f6a6eb2fed069cd10/docs/contracts/v2/reference/core/abstracts)

Library with helper functions needed across the Sablier V2 contracts.


## Functions
### checkAndCalculateFees

*Checks that neither fee is greater than `maxFee`, and then calculates the protocol fee amount, the
broker fee amount, and the deposit amount from the total amount.*


```solidity
function checkAndCalculateFees(uint128 totalAmount, UD60x18 protocolFee, UD60x18 brokerFee, UD60x18 maxFee)
    internal
    pure
    returns (Lockup.CreateAmounts memory amounts);
```

### checkCreateLinearParams

*Checks the arguments of the {SablierV2LockupLinear-_createWithRange} function.*


```solidity
function checkCreateLinearParams(uint128 depositAmount, LockupLinear.Range memory range) internal pure;
```

### checkCreateProParams

*Checks the arguments of the {SablierV2LockupPro-_createWithRange} function.*


```solidity
function checkCreateProParams(
    uint128 depositAmount,
    LockupPro.Segment[] memory segments,
    uint256 maxSegmentCount,
    uint40 startTime
) internal pure;
```

### checkDeltasAndCalculateMilestones

*Checks that the segment array counts match, and then adjusts the segments by calculating the milestones.*


```solidity
function checkDeltasAndCalculateMilestones(LockupPro.SegmentWithDelta[] memory segments)
    internal
    view
    returns (LockupPro.Segment[] memory segmentsWithMilestones);
```

### _checkProSegments

*Checks that:
1. The first milestone is greater than or equal to the start time.
2. The milestones are ordered chronologically.
3. There are no duplicate milestones.
4. The deposit amount is equal to the segment amounts summed up.*


```solidity
function _checkProSegments(LockupPro.Segment[] memory segments, uint128 depositAmount, uint40 startTime) private pure;
```

