# Helpers

[Git Source](https://github.com/sablier-labs/v2-core/blob/73356945b53e8dd4112f34f3e2c63c278c4a5239/src/libraries/Helpers.sol)

Library with helper functions needed across the Sablier V2 contracts.

## Functions

### calculateSegmentTimestamps

_Calculate the timestamps and return the segments._

```solidity
function calculateSegmentTimestamps(LockupDynamic.SegmentWithDuration[] memory segments)
    internal
    view
    returns (LockupDynamic.Segment[] memory segmentsWithTimestamps);
```

### calculateTrancheTimestamps

_Calculate the timestamps and return the tranches._

```solidity
function calculateTrancheTimestamps(LockupTranched.TrancheWithDuration[] memory tranches)
    internal
    view
    returns (LockupTranched.Tranche[] memory tranchesWithTimestamps);
```

### checkAndCalculateBrokerFee

_Checks the broker fee is not greater than `maxBrokerFee`, and then calculates the broker fee amount and the deposit
amount from the total amount._

```solidity
function checkAndCalculateBrokerFee(
    uint128 totalAmount,
    UD60x18 brokerFee,
    UD60x18 maxBrokerFee
)
    internal
    pure
    returns (Lockup.CreateAmounts memory amounts);
```

### checkCreateLockupDynamic

_Checks the parameters of the
[SablierV2LockupDynamic-\_create](/docs/reference/lockup/core/contract.SablierV2LockupLinear.md#_create) function._

```solidity
function checkCreateLockupDynamic(
    uint128 depositAmount,
    LockupDynamic.Segment[] memory segments,
    uint256 maxSegmentCount,
    uint40 startTime
)
    internal
    view;
```

### checkCreateLockupLinear

_Checks the parameters of the
[SablierV2LockupLinear-\_create](/docs/reference/lockup/core/contract.SablierV2LockupLinear.md#_create) function._

```solidity
function checkCreateLockupLinear(uint128 depositAmount, LockupLinear.Timestamps memory timestamps) internal view;
```

### checkCreateLockupTranched

_Checks the parameters of the
[SablierV2LockupTranched-\_create](/docs/reference/lockup/core/contract.SablierV2LockupLinear.md#_create) function._

```solidity
function checkCreateLockupTranched(
    uint128 depositAmount,
    LockupTranched.Tranche[] memory tranches,
    uint256 maxTrancheCount,
    uint40 startTime
)
    internal
    view;
```

### \_checkSegments

Checks that:

1. The first timestamp is strictly greater than the start time.
2. The timestamps are ordered chronologically.
3. There are no duplicate timestamps.
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

### \_checkTranches

Checks that:

1. The first timestamp is strictly greater than the start time.
2. The timestamps are ordered chronologically.
3. There are no duplicate timestamps.
4. The deposit amount is equal to the sum of all tranche amounts.

```solidity
function _checkTranches(
    LockupTranched.Tranche[] memory tranches,
    uint128 depositAmount,
    uint40 startTime
)
    private
    view;
```
