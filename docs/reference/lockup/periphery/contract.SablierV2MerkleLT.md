---
sidebar_position: 3
---

# SablierV2MerkleLT

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/ed3be5dc823dd81219f8060a6e6b32ead6c8de84/src/SablierV2MerkleLT.sol)

**Inherits:** [ISablierV2MerkleLT](/docs/reference/lockup/periphery/interfaces/interface.ISablierV2MerkleLT.md),
[SablierV2MerkleLockup](/docs/reference/lockup/periphery/abstracts/abstract.SablierV2MerkleLockup.md)

See the documentation in
[ISablierV2MerkleLT](/docs/reference/lockup/periphery/interfaces/interface.ISablierV2MerkleLT.md).

## State Variables

### LOCKUP_TRANCHED

The address of the [SablierV2LockupTranched](docs/reference/lockup/core/contract.SablierV2LockupTranched.md) contract.

```solidity
ISablierV2LockupTranched public immutable override LOCKUP_TRANCHED;
```

### TOTAL_PERCENTAGE

The total percentage of the tranches.

```solidity
uint64 public immutable override TOTAL_PERCENTAGE;
```

### \_tranchesWithPercentages

_The tranches with their respective unlock percentages and durations._

```solidity
MerkleLT.TrancheWithPercentage[] internal _tranchesWithPercentages;
```

## Functions

### constructor

_Constructs the contract by initializing the immutable state variables, and max approving the Sablier contract._

```solidity
constructor(
    MerkleLockup.ConstructorParams memory baseParams,
    ISablierV2LockupTranched lockupTranched,
    MerkleLT.TrancheWithPercentage[] memory tranchesWithPercentages
)
    SablierV2MerkleLockup(baseParams);
```

### getTranchesWithPercentages

Retrieves the tranches with their respective unlock percentages and durations.

```solidity
function getTranchesWithPercentages() external view override returns (MerkleLT.TrancheWithPercentage[] memory);
```

### claim

Makes the claim by creating a LockupTranched stream to the recipient. A stream NFT is minted to the recipient.

Emits a {Claim} event. Requirements:

- The campaign must not have expired.
- The stream must not have been claimed already.
- The Merkle proof must be valid.
- TOTAL_PERCENTAGE must be equal to 100%.

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

### \_calculateTranches

_Calculates the tranches based on the claim amount and the unlock percentages for each tranche._

```solidity
function _calculateTranches(uint128 claimAmount)
    internal
    view
    returns (LockupTranched.TrancheWithDuration[] memory tranches);
```
