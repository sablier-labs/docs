---
sidebar_position: 3
---

# SablierMerkleInstant

[Git Source](https://github.com/sablier-labs/airdrops/blob/1ad7325bc0401d0ea6d9f30917c49d5367a1180e/src/SablierMerkleInstant.sol)

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
