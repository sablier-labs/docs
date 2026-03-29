# SablierMerkleLockup

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/abstracts/SablierMerkleLockup.sol)

**Inherits:** [ISablierMerkleLockup](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLockup.md),
[SablierMerkleBase](/docs/reference/airdrops/contracts/abstracts/abstract.SablierMerkleBase.md)

**Title:** SablierMerkleLockup

See the documentation in
[ISablierMerkleLockup](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLockup.md).

## State Variables

### SABLIER_LOCKUP

The address of the [SablierLockup](/reference/lockup/contracts/contract.SablierLockup.md) contract.

```solidity
ISablierLockup public immutable override SABLIER_LOCKUP
```

### STREAM_CANCELABLE

A flag indicating whether the streams can be canceled.

This is an immutable state variable.

```solidity
bool public immutable override STREAM_CANCELABLE
```

### STREAM_TRANSFERABLE

A flag indicating whether the stream NFTs are transferable.

This is an immutable state variable.

```solidity
bool public immutable override STREAM_TRANSFERABLE
```

### streamShape

Retrieves the shape of the Lockup stream created upon claiming.

```solidity
string public override streamShape
```

### \_claimedStreams

A mapping between recipient addresses and Lockup streams created through the claim function.

```solidity
mapping(address recipient => uint256[] streamIds) internal _claimedStreams
```

## Functions

### constructor

Constructs the contract by initializing the immutable state vars, and max approving the Lockup contract.

```solidity
constructor(MerkleLockup.ConstructorParams memory lockupParams) ;
```

### claimedStreams

Retrieves the stream IDs associated with the airdrops claimed by the provided recipient. In practice, most campaigns
will only have one stream per recipient.

```solidity
function claimedStreams(address recipient) external view override returns (uint256[] memory);
```
