# Helpers
[Git Source](https://github.com/sablierhq/v2-core/blob/cc0ad3978d3901ec331d3c24fbc36ee2b5a297c0/src/libraries/Helpers.sol)

Library with helper functions needed across the Sablier V2 contracts.


## Functions
### checkAndCalculateFees

*Checks that neither fee is greater than `MAX_FEE`, and then calculates the protocol fee amount, the
broker fee amount, and the net deposit amount.*


```solidity
function checkAndCalculateFees(uint128 grossDepositAmount, UD60x18 protocolFee, UD60x18 brokerFee, UD60x18 maxFee)
    internal
    pure
    returns (CreateLockupAmounts memory amounts);
```

### checkCreateLinearParams

*Checks the arguments of the `SablierV2LockupLinear-_createWithRange` unction.*


```solidity
function checkCreateLinearParams(uint128 netDepositAmount, Range memory range) internal pure;
```

### checkCreateProParams

*Checks the arguments of the `SablierV2LockupPro-_createWithRange` unction.*


```solidity
function checkCreateProParams(
    uint128 netDepositAmount,
    Segment[] memory segments,
    uint256 maxSegmentCount,
    uint40 startTime
) internal pure;
```

### checkDeltasAndAdjustSegments

*Checks that the segment array counts match, and then adjusts the segments by calculating the milestones.*


```solidity
function checkDeltasAndAdjustSegments(Segment[] memory segments, uint40[] memory deltas) internal view;
```

### _checkProSegments

:::note

Checks that:
1. The first milestone is greater than or equal to the start time.
2. The milestones are ordered chronologically.
3. There are no duplicate milestones.
4. The net deposit amount is equal to the segment amounts summed up.

:::



```solidity
function _checkProSegments(Segment[] memory segments, uint128 netDepositAmount, uint40 startTime) private pure;
```

