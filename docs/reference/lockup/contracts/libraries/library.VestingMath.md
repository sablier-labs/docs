# VestingMath

[Git Source](https://github.com/sablier-labs/lockup/blob/463278dbb461b1733d6424cf0aeee3b8d6bc036a/src/libraries/VestingMath.sol)

Library with functions needed to calculate vested amount across lockup streams.

## Functions

### calculateLockupDynamicStreamedAmount

Calculates the streamed amount for a Lockup dynamic stream.

Lockup dynamic model uses the following distribution function:

$$
f(x) = x^{exp} * csa + \Sigma(esa)
$$

Where:

- $x$ is the elapsed time divided by the total duration of the current segment.
- $exp$ is the current segment exponent.
- $csa$ is the current segment amount.
- $\Sigma(esa)$ is the sum of all vested segments' amounts. Notes:

1. Normalization to 18 decimals is not needed because there is no mix of amounts with different decimals.
2. The stream's start time must be in the past so that the calculations below do not overflow.
3. The stream's end time must be in the future so that the loop below does not panic with an "index out of bounds"
   error. Assumptions:
4. The sum of all segment amounts does not overflow uint128 and equals the deposited amount.
5. The first segment's timestamp is greater than the start time.
6. The last segment's timestamp equals the end time.
7. The segment timestamps are arranged in ascending order.

```solidity
function calculateLockupDynamicStreamedAmount(
    uint128 depositedAmount,
    LockupDynamic.Segment[] memory segments,
    uint40 blockTimestamp,
    Lockup.Timestamps memory timestamps,
    uint128 withdrawnAmount
)
    public
    pure
    returns (uint128);
```

### calculateLockupLinearStreamedAmount

Calculates the streamed amount for a Lockup linear stream.

Lockup linear model uses the following distribution function:

$$
( x * sa + s, block timestamp < cliff time
f(x) = (
( x * sa + s + c, block timestamp => cliff time
$$

Where:

- $x$ is the elapsed time in the streamable range divided by the total streamable range.
- $sa$ is the streamable amount, i.e. deposited amount minus unlock amounts' sum.
- $s$ is the start unlock amount.
- $c$ is the cliff unlock amount. Assumptions:

1. The sum of the unlock amounts (start and cliff) does not overflow uint128 and is less than or equal to the deposit
   amount.
2. The start time is before the end time.
3. If the cliff time is not zero, it is after the start time and before the end time.

```solidity
function calculateLockupLinearStreamedAmount(
    uint128 depositedAmount,
    uint40 blockTimestamp,
    Lockup.Timestamps memory timestamps,
    uint40 cliffTime,
    LockupLinear.UnlockAmounts memory unlockAmounts,
    uint128 withdrawnAmount
)
    public
    pure
    returns (uint128);
```

### calculateLockupTranchedStreamedAmount

Calculates the streamed amount for a Lockup tranched stream.

Lockup tranched model uses the following distribution function:

$$
f(x) = \Sigma(eta)
$$

Where:

- $\Sigma(eta)$ is the sum of all vested tranches' amounts. Assumptions:

1. The sum of all tranche amounts does not overflow uint128, and equals the deposited amount.
2. The first tranche's timestamp is greater than the start time.
3. The last tranche's timestamp equals the end time.
4. The tranche timestamps are arranged in ascending order.

```solidity
function calculateLockupTranchedStreamedAmount(
    uint128 depositedAmount,
    uint40 blockTimestamp,
    Lockup.Timestamps memory timestamps,
    LockupTranched.Tranche[] memory tranches
)
    public
    pure
    returns (uint128);
```
