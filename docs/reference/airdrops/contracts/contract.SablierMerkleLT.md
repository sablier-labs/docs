---
sidebar_position: 3
---

# SablierMerkleLT

[Git Source](https://github.com/sablier-labs/airdrops/blob/f9a358c0a5bccfec77601d4490ef9117e0488068/src/SablierMerkleLT.sol)

**Inherits:** [ISablierMerkleLT](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLT.md),
[SablierMerkleBase](/docs/reference/airdrops/contracts/abstracts/abstract.SablierMerkleBase.md)

See the documentation in
[ISablierMerkleLT](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLT.md).

## State Variables

### LOCKUP

The address of the [SablierLockup](/reference/lockup/contracts/contract.SablierLockup.md) contract.

```solidity
ISablierLockup public immutable override LOCKUP;
```

### STREAM_CANCELABLE

A flag indicating whether the streams can be canceled.

_This is an immutable state variable._

```solidity
bool public immutable override STREAM_CANCELABLE;
```

### STREAM_START_TIME

The start time of the streams created through {SablierMerkleBase.claim} function.

_A start time value of zero will be treated as `block.timestamp`._

```solidity
uint40 public immutable override STREAM_START_TIME;
```

### STREAM_TRANSFERABLE

A flag indicating whether the stream NFTs are transferable.

_This is an immutable state variable._

```solidity
bool public immutable override STREAM_TRANSFERABLE;
```

### TOTAL_PERCENTAGE

The total percentage of the tranches.

```solidity
uint64 public immutable override TOTAL_PERCENTAGE;
```

### \_tranchesWithPercentages

_The tranches with their respective unlock percentages and durations._

```solidity
MerkleLT.TrancheWithPercentage[] internal _tranchesWithPercentages;
```

## Functions

### constructor

_Constructs the contract by initializing the immutable state variables, and max approving the Lockup contract._

```solidity
constructor(
    MerkleBase.ConstructorParams memory baseParams,
    address campaignCreator,
    ISablierLockup lockup,
    bool cancelable,
    bool transferable,
    uint40 streamStartTime,
    MerkleLT.TrancheWithPercentage[] memory tranchesWithPercentages
)
    SablierMerkleBase(baseParams, campaignCreator);
```

### getTranchesWithPercentages

Retrieves the tranches with their respective unlock percentages and durations.

```solidity
function getTranchesWithPercentages() external view override returns (MerkleLT.TrancheWithPercentage[] memory);
```

### \_claim

_This function is implemented by child contracts, so the logic varies depending on the model._

```solidity
function _claim(uint256 index, address recipient, uint128 amount) internal override;
```

### \_calculateStartTimeAndTranches

_Calculates the start time, and the tranches based on the claim amount and the unlock percentages for each tranche._

```solidity
function _calculateStartTimeAndTranches(uint128 claimAmount)
    internal
    view
    returns (uint40 startTime, LockupTranched.Tranche[] memory tranches);
```
