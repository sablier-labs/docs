---
sidebar_position: 3
---

# SablierMerkleInstant

[Git Source](https://github.com/sablier-labs/airdrops/blob/f9a358c0a5bccfec77601d4490ef9117e0488068/src/SablierMerkleInstant.sol)

**Inherits:** [ISablierMerkleInstant](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleInstant.md),
[SablierMerkleBase](/docs/reference/airdrops/contracts/abstracts/abstract.SablierMerkleBase.md)

See the documentation in
[ISablierMerkleInstant](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleInstant.md).

## Functions

### constructor

_Constructs the contract by initializing the immutable state variables._

```solidity
constructor(
    MerkleBase.ConstructorParams memory baseParams,
    address campaignCreator
)
    SablierMerkleBase(baseParams, campaignCreator);
```

### \_claim

_This function is implemented by child contracts, so the logic varies depending on the model._

```solidity
function _claim(uint256 index, address recipient, uint128 amount) internal override;
```
