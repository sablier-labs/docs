# Helpers

[Git Source](https://github.com/sablier-labs/lockup/blob/58eaac45c20c57a93b73d887c714e68f061ec3e6/src/libraries/Helpers.sol)

Library with functions needed to validate input parameters across Lockup streams.

## Functions

### calculateSegmentTimestamps

_Calculate the timestamps and return the segments._

```solidity
function calculateSegmentTimestamps(
    LockupDynamic.SegmentWithDuration[] memory segmentsWithDuration,
    uint40 startTime
)
    public
    pure
    returns (LockupDynamic.Segment[] memory segmentsWithTimestamps);
```

### calculateTrancheTimestamps

_Calculate the timestamps and return the tranches._

```solidity
function calculateTrancheTimestamps(
    LockupTranched.TrancheWithDuration[] memory tranchesWithDuration,
    uint40 startTime
)
    public
    pure
    returns (LockupTranched.Tranche[] memory tranchesWithTimestamps);
```

### checkCreateLD

_Checks the parameters of the
[SablierLockup-\_createLD](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupDynamic.md#_createld)
function._

```solidity
function checkCreateLD(
    address sender,
    Lockup.Timestamps memory timestamps,
    uint128 depositAmount,
    LockupDynamic.Segment[] memory segments,
    address token,
    address nativeToken,
    string memory shape
)
    public
    pure;
```

### checkCreateLL

_Checks the parameters of the
[SablierLockup-\_createLL](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupLinear.md#_createll)
function._

```solidity
function checkCreateLL(
    address sender,
    Lockup.Timestamps memory timestamps,
    uint40 cliffTime,
    uint128 depositAmount,
    LockupLinear.UnlockAmounts memory unlockAmounts,
    address token,
    address nativeToken,
    string memory shape
)
    public
    pure;
```

### checkCreateLT

_Checks the parameters of the
[SablierLockup-\_createLT](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupTranched.md#_createlt)
function._

```solidity
function checkCreateLT(
    address sender,
    Lockup.Timestamps memory timestamps,
    uint128 depositAmount,
    LockupTranched.Tranche[] memory tranches,
    address token,
    address nativeToken,
    string memory shape
)
    public
    pure;
```

### \_checkTimestampsAndUnlockAmounts

_Checks the user-provided cliff, end times, and unlock amounts of an LL stream._

```solidity
function _checkTimestampsAndUnlockAmounts(
    uint128 depositAmount,
    Lockup.Timestamps memory timestamps,
    uint40 cliffTime,
    LockupLinear.UnlockAmounts memory unlockAmounts
)
    private
    pure;
```

### \_checkCreateStream

_Checks the user-provided common parameters across Lockup streams._

```solidity
function _checkCreateStream(
    address sender,
    uint128 depositAmount,
    uint40 startTime,
    address token,
    address nativeToken,
    string memory shape
)
    private
    pure;
```

### \_checkSegments

Checks:

1. The first timestamp is strictly greater than the start time.
2. The timestamps are ordered chronologically.
3. There are no duplicate timestamps.
4. The deposit amount is equal to the sum of all segment amounts.
5. The end time equals the last segment's timestamp.

```solidity
function _checkSegments(
    LockupDynamic.Segment[] memory segments,
    uint128 depositAmount,
    Lockup.Timestamps memory timestamps
)
    private
    pure;
```

### \_checkTranches

Checks:

1. The first timestamp is strictly greater than the start time.
2. The timestamps are ordered chronologically.
3. There are no duplicate timestamps.
4. The deposit amount is equal to the sum of all tranche amounts.
5. The end time equals the last tranche's timestamp.

```solidity
function _checkTranches(
    LockupTranched.Tranche[] memory tranches,
    uint128 depositAmount,
    Lockup.Timestamps memory timestamps
)
    private
    pure;
```
