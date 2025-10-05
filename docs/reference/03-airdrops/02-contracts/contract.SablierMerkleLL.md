---
sidebar_position: 3
---

# SablierMerkleLL

[Git Source](https://github.com/sablier-labs/airdrops/blob/f9a358c0a5bccfec77601d4490ef9117e0488068/src/SablierMerkleLL.sol)

**Inherits:** [ISablierMerkleLL](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLL.md),
[SablierMerkleBase](/docs/reference/airdrops/contracts/abstracts/abstract.SablierMerkleBase.md)

See the documentation in
[ISablierMerkleLL](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLL.md).

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

### STREAM_TRANSFERABLE

A flag indicating whether the stream NFTs are transferable.

_This is an immutable state variable._

```solidity
bool public immutable override STREAM_TRANSFERABLE;
```

### \_schedule

_See the documentation in {ISablierMerkleLL.getSchedule}._

```solidity
MerkleLL.Schedule private _schedule;
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
    MerkleLL.Schedule memory schedule
)
    SablierMerkleBase(baseParams, campaignCreator);
```

### getSchedule

A tuple containing the start time, start unlock percentage, cliff duration, cliff unlock percentage, and end duration.
These values are used to calculate the vesting schedule in `Lockup.CreateWithTimestampsLL`.

_A start time value of zero will be considered as `block.timestamp`._

```solidity
function getSchedule() external view override returns (MerkleLL.Schedule memory);
```

### \_claim

_This function is implemented by child contracts, so the logic varies depending on the model._

```solidity
function _claim(uint256 index, address recipient, uint128 amount) internal override;
```
