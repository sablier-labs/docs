# Helpers

[Git Source](https://github.com/sablier-labs/v2-core/blob/b048c0e28a5120b396c3eb3cdd0bc4e8784dc155/docs/contracts/v2/reference/core)

Library with helper functions needed across the Sablier V2 contracts.

## Functions

### checkAndCalculateFees

_Checks that neither fee is greater than `maxFee`, and then calculates the protocol fee amount, the broker fee amount,
and the deposit amount from the total amount._

```solidity
function checkAndCalculateFees(
    uint128 totalAmount,
    UD60x18 protocolFee,
    UD60x18 brokerFee,
    UD60x18 maxFee
)
    internal
    pure
    returns (Lockup.CreateAmounts memory amounts);
```

### checkCreateDynamicParams

_Checks the parameters of the {SablierV2LockupDynamic-\_createWithMilestones} function._

```solidity
function checkCreateDynamicParams(
    uint128 depositAmount,
    LockupDynamic.Segment[] memory segments,
    uint256 maxSegmentCount,
    uint40 startTime
)
    internal
    view;
```

### checkCreateLinearParams

_Checks the parameters of the {SablierV2LockupLinear-\_createWithRange} function._

```solidity
function checkCreateLinearParams(uint128 depositAmount, LockupLinear.Range memory range) internal view;
```

### checkDeltasAndCalculateMilestones

_Checks that the segment array counts match, and then adjusts the segments by calculating the milestones._

```solidity
function checkDeltasAndCalculateMilestones(LockupDynamic.SegmentWithDelta[] memory segments)
    internal
    view
    returns (LockupDynamic.Segment[] memory segmentsWithMilestones);
```

### \_checkSegments

Checks that:

1. The first milestone is strictly greater than the start time.
2. The milestones are ordered chronologically.
3. There are no duplicate milestones.
4. The deposit amount is equal to the sum of all segment amounts.

```solidity
function _checkSegments(
    LockupDynamic.Segment[] memory segments,
    uint128 depositAmount,
    uint40 startTime
)
    private
    view;
```
