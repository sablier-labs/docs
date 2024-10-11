---
sidebar_position: 2
---

# SablierV2MerkleLockupFactory

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/c10978dd4cdb54301b9c2d63c7e0af41da9110f3/src/SablierV2MerkleLockupFactory.sol)

**Inherits:**
[ISablierV2MerkleLockupFactory](/docs/reference/lockup/periphery/interfaces/interface.ISablierV2MerkleLockupFactory.md)

See the documentation in
[ISablierV2MerkleLockupFactory](/docs/reference/lockup/periphery/interfaces/interface.ISablierV2MerkleLockupFactory.md).

## Functions

### isPercentagesSum100

Verifies if the sum of percentages in `tranches` equals 100% , i.e. 1e18.

_Reverts if the sum of percentages overflows._

```solidity
function isPercentagesSum100(MerkleLT.TrancheWithPercentage[] calldata tranches)
    external
    pure
    override
    returns (bool result);
```

**Parameters**

| Name       | Type                               | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| `tranches` | `MerkleLT.TrancheWithPercentage[]` | The tranches with their respective unlock percentages. |

**Returns**

| Name     | Type   | Description                                                  |
| -------- | ------ | ------------------------------------------------------------ |
| `result` | `bool` | True if the sum of percentages equals 100%, otherwise false. |

### createMerkleLL

inheritdoc ISablierV2MerkleLockupFactory

```solidity
function createMerkleLL(
    MerkleLockup.ConstructorParams memory baseParams,
    ISablierV2LockupLinear lockupLinear,
    LockupLinear.Durations memory streamDurations,
    uint256 aggregateAmount,
    uint256 recipientCount
)
    external
    returns (ISablierV2MerkleLL merkleLL);
```

### createMerkleLT

inheritdoc ISablierV2MerkleLockupFactory

```solidity
function createMerkleLT(
    MerkleLockup.ConstructorParams memory baseParams,
    ISablierV2LockupTranched lockupTranched,
    MerkleLT.TrancheWithPercentage[] memory tranchesWithPercentages,
    uint256 aggregateAmount,
    uint256 recipientCount
)
    external
    returns (ISablierV2MerkleLT merkleLT);
```
