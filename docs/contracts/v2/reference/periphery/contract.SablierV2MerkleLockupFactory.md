---
sidebar_position: 2
---

# SablierV2MerkleLockupFactory

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/73831c7dcaa5ec4e2fed6caa0f8040154e53030a/src/SablierV2MerkleLockupFactory.sol)

**Inherits:**
[ISablierV2MerkleLockupFactory](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleLockupFactory.md)

See the documentation in
[ISablierV2MerkleLockupFactory](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleLockupFactory.md).

## Functions

### createMerkleLockupLL

inheritdoc ISablierV2MerkleLockupFactory

```solidity
function createMerkleLockupLL(
    MerkleLockup.ConstructorParams memory baseParams,
    ISablierV2LockupLinear lockupLinear,
    LockupLinear.Durations memory streamDurations,
    uint256 aggregateAmount,
    uint256 recipientsCount
)
    external
    returns (ISablierV2MerkleLockupLL merkleLockupLL);
```

### createMerkleLockupLT

inheritdoc ISablierV2MerkleLockupFactory

```solidity
function createMerkleLockupLT(
    MerkleLockup.ConstructorParams memory baseParams,
    ISablierV2LockupTranched lockupTranched,
    MerkleLockupLT.TrancheWithPercentage[] memory tranchesWithPercentages,
    uint256 aggregateAmount,
    uint256 recipientsCount
)
    external
    returns (ISablierV2MerkleLockupLT merkleLockupLT);
```
