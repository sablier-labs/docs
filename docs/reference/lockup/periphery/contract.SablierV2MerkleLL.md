---
sidebar_position: 3
---

# SablierV2MerkleLL

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/ed3be5dc823dd81219f8060a6e6b32ead6c8de84/src/SablierV2MerkleLL.sol)

**Inherits:** [ISablierV2MerkleLL](/docs/reference/lockup/periphery/interfaces/interface.ISablierV2MerkleLL.md),
[SablierV2MerkleLockup](/docs/reference/lockup/periphery/abstracts/abstract.SablierV2MerkleLockup.md)

See the documentation in
[ISablierV2MerkleLL](/docs/reference/lockup/periphery/interfaces/interface.ISablierV2MerkleLL.md).

## State Variables

### LOCKUP_LINEAR

The address of the [SablierV2LockupLinear](docs/reference/lockup/core/contract.SablierV2LockupLinear.md) contract.

```solidity
ISablierV2LockupLinear public immutable override LOCKUP_LINEAR;
```

### streamDurations

The total streaming duration of each stream.

```solidity
LockupLinear.Durations public override streamDurations;
```

## Functions

### constructor

_Constructs the contract by initializing the immutable state variables, and max approving the Sablier contract._

```solidity
constructor(
    MerkleLockup.ConstructorParams memory baseParams,
    ISablierV2LockupLinear lockupLinear,
    LockupLinear.Durations memory streamDurations_
)
    SablierV2MerkleLockup(baseParams);
```

### claim

Makes the claim by creating a LockupLinear stream to the recipient. A stream NFT is minted to the recipient.

Emits a {Claim} event. Requirements:

- The campaign must not have expired.
- The stream must not have been claimed already.
- The Merkle proof must be valid.

```solidity
function claim(
    uint256 index,
    address recipient,
    uint128 amount,
    bytes32[] calldata merkleProof
)
    external
    override
    returns (uint256 streamId);
```

**Parameters**

| Name          | Type        | Description                                                           |
| ------------- | ----------- | --------------------------------------------------------------------- |
| `index`       | `uint256`   | The index of the recipient in the Merkle tree.                        |
| `recipient`   | `address`   | The address of the stream holder.                                     |
| `amount`      | `uint128`   | The amount of ERC-20 assets to be distributed via the claimed stream. |
| `merkleProof` | `bytes32[]` | The proof of inclusion in the Merkle tree.                            |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The id of the newly created stream. |
