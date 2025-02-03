# Helpers

[Git Source](https://github.com/sablier-labs/lockup/blob/463278dbb461b1733d6424cf0aeee3b8d6bc036a/src/libraries/Helpers.sol)

Library with functions needed to validate input parameters across lockup streams.

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

### checkCreateLockupDynamic

_Checks the parameters of the {SablierLockup-\_createLD} function._

```solidity
function checkCreateLockupDynamic(
    address sender,
    Lockup.Timestamps memory timestamps,
    uint128 totalAmount,
    LockupDynamic.Segment[] memory segments,
    uint256 maxCount,
    UD60x18 brokerFee,
    string memory shape,
    UD60x18 maxBrokerFee
)
    public
    pure
    returns (Lockup.CreateAmounts memory createAmounts);
```

### checkCreateLockupLinear

_Checks the parameters of the {SablierLockup-\_createLL} function._

```solidity
function checkCreateLockupLinear(
    address sender,
    Lockup.Timestamps memory timestamps,
    uint40 cliffTime,
    uint128 totalAmount,
    LockupLinear.UnlockAmounts memory unlockAmounts,
    UD60x18 brokerFee,
    string memory shape,
    UD60x18 maxBrokerFee
)
    public
    pure
    returns (Lockup.CreateAmounts memory createAmounts);
```

### checkCreateLockupTranched

_Checks the parameters of the {SablierLockup-\_createLT} function._

```solidity
function checkCreateLockupTranched(
    address sender,
    Lockup.Timestamps memory timestamps,
    uint128 totalAmount,
    LockupTranched.Tranche[] memory tranches,
    uint256 maxCount,
    UD60x18 brokerFee,
    string memory shape,
    UD60x18 maxBrokerFee
)
    public
    pure
    returns (Lockup.CreateAmounts memory createAmounts);
```

### \_checkAndCalculateBrokerFee

_Checks the broker fee is not greater than `maxBrokerFee`, and then calculates the broker fee amount and the deposit
amount from the total amount._

```solidity
function _checkAndCalculateBrokerFee(
    uint128 totalAmount,
    UD60x18 brokerFee,
    UD60x18 maxBrokerFee
)
    private
    pure
    returns (Lockup.CreateAmounts memory amounts);
```

### \_checkTimestampsAndUnlockAmounts

_Checks the user-provided cliff, end times and unlock amounts of a lockup linear stream._

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

_Checks the user-provided common parameters across lockup streams._

```solidity
function _checkCreateStream(
    address sender,
    uint128 depositAmount,
    uint40 startTime,
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
    Lockup.Timestamps memory timestamps,
    uint256 maxSegmentCount
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
    Lockup.Timestamps memory timestamps,
    uint256 maxTrancheCount
)
    private
    pure;
```
