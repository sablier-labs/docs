---
sidebar_position: 2
---

# SablierV2MerkleLockupFactory

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/a3131838ec731b38b1e2e03735fba874ab66f5e2/src/SablierV2MerkleLockupFactory.sol)

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
