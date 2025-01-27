# ISablierMerkleLT

[Git Source](https://github.com/sablier-labs/airdrops/blob/f9a358c0a5bccfec77601d4490ef9117e0488068/src/interfaces/ISablierMerkleLT.sol)

**Inherits:** [ISablierMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleBase.md)

Merkle Lockup enables airdrops with a vesting period powered by the Lockup Tranched distribution model.

## Functions

### LOCKUP

The address of the [SablierLockup](/reference/lockup/contracts/contract.SablierLockup.md) contract.

```solidity
function LOCKUP() external view returns (ISablierLockup);
```

### STREAM_CANCELABLE

A flag indicating whether the streams can be canceled.

_This is an immutable state variable._

```solidity
function STREAM_CANCELABLE() external returns (bool);
```

### STREAM_START_TIME

The start time of the streams created through {SablierMerkleBase.claim} function.

_A start time value of zero will be treated as `block.timestamp`._

```solidity
function STREAM_START_TIME() external returns (uint40);
```

### STREAM_TRANSFERABLE

A flag indicating whether the stream NFTs are transferable.

_This is an immutable state variable._

```solidity
function STREAM_TRANSFERABLE() external returns (bool);
```

### TOTAL_PERCENTAGE

The total percentage of the tranches.

```solidity
function TOTAL_PERCENTAGE() external view returns (uint64);
```

### getTranchesWithPercentages

Retrieves the tranches with their respective unlock percentages and durations.

```solidity
function getTranchesWithPercentages() external view returns (MerkleLT.TrancheWithPercentage[] memory);
```

## Events

### Claim

Emitted when a recipient claims a stream.

```solidity
event Claim(uint256 index, address indexed recipient, uint128 amount, uint256 indexed streamId);
```
