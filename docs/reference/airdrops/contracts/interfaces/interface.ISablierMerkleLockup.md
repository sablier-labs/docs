# ISablierMerkleLockup

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/interfaces/ISablierMerkleLockup.sol)

**Inherits:** [ISablierMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleBase.md)

MerkleLockup enables Airstreams (a portmanteau of "airdrop" and "stream"), an airdrop model where the tokens are vested
over time, as opposed to being unlocked at once. The vesting is provided by Sablier Lockup.

_Common interface between MerkleLL and MerkleLT._

## Functions

### SABLIER_LOCKUP

The address of the [SablierLockup](/reference/lockup/contracts/contract.SablierLockup.md) contract.

```solidity
function SABLIER_LOCKUP() external view returns (ISablierLockup);
```

### STREAM_CANCELABLE

A flag indicating whether the streams can be canceled.

_This is an immutable state variable._

```solidity
function STREAM_CANCELABLE() external view returns (bool);
```

### STREAM_TRANSFERABLE

A flag indicating whether the stream NFTs are transferable.

_This is an immutable state variable._

```solidity
function STREAM_TRANSFERABLE() external view returns (bool);
```

### claimedStreams

Retrieves the stream IDs associated with the airdrops claimed by the provided recipient. In practice, most campaigns
will only have one stream per recipient.

```solidity
function claimedStreams(address recipient) external view returns (uint256[] memory);
```

### streamShape

Retrieves the shape of the Lockup stream created upon claiming.

```solidity
function streamShape() external view returns (string memory);
```
