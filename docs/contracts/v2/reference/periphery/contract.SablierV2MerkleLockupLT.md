---
sidebar_position: 3
---

# SablierV2MerkleLockupLT

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/73831c7dcaa5ec4e2fed6caa0f8040154e53030a/src/SablierV2MerkleLockupLT.sol)

**Inherits:**
[ISablierV2MerkleLockupLT](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleLockupLT.md),
[SablierV2MerkleLockup](/docs/contracts/v2/reference/periphery/abstracts/abstract.SablierV2MerkleLockup.md)

See the documentation in
[ISablierV2MerkleLockupLT](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleLockupLT.md).

## State Variables

### LOCKUP_TRANCHED

The address of the [SablierV2LockupTranched](docs/contracts/v2/reference/core/contract.SablierV2LockupTranched.md)
contract.

```solidity
ISablierV2LockupTranched public immutable override LOCKUP_TRANCHED;
```

### \_tranchesWithPercentages

_The tranches with their respective unlock percentages and durations._

```solidity
MerkleLockupLT.TrancheWithPercentage[] internal _tranchesWithPercentages;
```

## Functions

### constructor

_Constructs the contract by initializing the immutable state variables, and max approving the Sablier contract._

```solidity
constructor(
    MerkleLockup.ConstructorParams memory baseParams,
    ISablierV2LockupTranched lockupTranched,
    MerkleLockupLT.TrancheWithPercentage[] memory tranchesWithPercentages
)
    SablierV2MerkleLockup(baseParams);
```

### getTranchesWithPercentages

Retrieves the tranches with their respective unlock percentages and durations.

```solidity
function getTranchesWithPercentages() external view override returns (MerkleLockupLT.TrancheWithPercentage[] memory);
```

### claim

Makes the claim by creating a Lockup Tranched stream to the recipient.

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

| Name          | Type        | Description                                    |
| ------------- | ----------- | ---------------------------------------------- |
| `index`       | `uint256`   | The index of the recipient in the Merkle tree. |
| `recipient`   | `address`   | The address of the stream holder.              |
| `amount`      | `uint128`   | The amount of tokens to be streamed.           |
| `merkleProof` | `bytes32[]` | The Merkle proof of inclusion in the stream.   |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The id of the newly created stream. |

### \_calculateTranches

_Calculates the stream tranches based on Merkle tree amount and unlock percentage for each tranche._

```solidity
function _calculateTranches(uint128 amount)
    internal
    view
    returns (LockupTranched.TrancheWithDuration[] memory tranches);
```
