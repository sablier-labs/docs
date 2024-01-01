---
sidebar_position: 2
---

# SablierV2MerkleStreamerFactory

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/53e259087984ff748fca6fb932fdb9c663c2b365/src/SablierV2MerkleStreamerFactory.sol)

**Inherits:**
[ISablierV2MerkleStreamerFactory](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleStreamerFactory.md)

See the documentation in
[ISablierV2MerkleStreamerFactory](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleStreamerFactory.md).

## Functions

### createMerkleStreamerLL

inheritdoc ISablierV2MerkleStreamerFactory

```solidity
function createMerkleStreamerLL(
    address initialAdmin,
    ISablierV2LockupLinear lockupLinear,
    IERC20 asset,
    bytes32 merkleRoot,
    uint40 expiration,
    LockupLinear.Durations memory streamDurations,
    bool cancelable,
    bool transferable,
    string memory ipfsCID,
    uint256 aggregateAmount,
    uint256 recipientsCount
)
    external
    returns (ISablierV2MerkleStreamerLL merkleStreamerLL);
```
