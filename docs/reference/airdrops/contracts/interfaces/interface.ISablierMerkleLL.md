# ISablierMerkleLL

[Git Source](https://github.com/sablier-labs/airdrops/blob/f9a358c0a5bccfec77601d4490ef9117e0488068/src/interfaces/ISablierMerkleLL.sol)

**Inherits:** [ISablierMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleBase.md)

Merkle Lockup enables airdrops with a vesting period powered by the Lockup Linear distribution model.

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

### STREAM_TRANSFERABLE

A flag indicating whether the stream NFTs are transferable.

_This is an immutable state variable._

```solidity
function STREAM_TRANSFERABLE() external returns (bool);
```

### getSchedule

A tuple containing the start time, start unlock percentage, cliff duration, cliff unlock percentage, and end duration.
These values are used to calculate the vesting schedule in `Lockup.CreateWithTimestampsLL`.

_A start time value of zero will be considered as `block.timestamp`._

```solidity
function getSchedule() external view returns (MerkleLL.Schedule memory);
```

## Events

### Claim

Emitted when a recipient claims a stream.

```solidity
event Claim(uint256 index, address indexed recipient, uint128 amount, uint256 indexed streamId);
```
