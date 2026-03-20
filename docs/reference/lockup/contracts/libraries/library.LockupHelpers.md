# LockupHelpers

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/7cb361717fd2f0289ad8d69469a3c00804b21657/src/libraries/LockupHelpers.sol)

**Title:** LockupHelpers

Library with functions needed to validate input parameters across Lockup streams.

## Functions

### calculateSegmentTimestamps

Calculate the timestamps and return the segments.

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

Calculate the timestamps and return the tranches.

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

Checks the parameters of the
[SablierLockup-\_createLD](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupDynamic.md#_createld)
function.

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

Checks the parameters of the
[SablierLockup-\_createLL](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupLinear.md#_createll)
function.

```solidity
function checkCreateLL(
    uint40 cliffTime,
    uint128 depositAmount,
    uint40 granularity,
    address nativeToken,
    address sender,
    string memory shape,
    Lockup.Timestamps memory timestamps,
    address token,
    LockupLinear.UnlockAmounts memory unlockAmounts
)
    public
    pure;
```

### checkCreateLPG

Checks the parameters of the
[SablierLockup-\_createLPG](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupPriceGated.md#_createlpg)
function.

```solidity
function checkCreateLPG(
    address sender,
    Lockup.Timestamps memory timestamps,
    uint128 depositAmount,
    address token,
    address nativeToken,
    string memory shape,
    LockupPriceGated.UnlockParams memory unlockParams
)
    public
    view;
```

### checkCreateLT

Checks the parameters of the
[SablierLockup-\_createLT](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupTranched.md#_createlt)
function.

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

Checks the user-provided timestamps of an LL stream.

```solidity
function _checkTimestampsAndUnlockAmounts(
    uint40 cliffTime,
    uint128 depositAmount,
    uint40 granularity,
    Lockup.Timestamps memory timestamps,
    LockupLinear.UnlockAmounts memory unlockAmounts
)
    private
    pure;
```

### \_checkCreateStream

Checks the user-provided common parameters across Lockup streams.

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
