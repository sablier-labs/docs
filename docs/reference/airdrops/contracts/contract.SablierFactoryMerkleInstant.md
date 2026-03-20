---
sidebar_position: 2
---

# SablierFactoryMerkleInstant

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/003a71932c0e26e767a02c21205a077469406ac8/src/SablierFactoryMerkleInstant.sol)

**Inherits:**
[ISablierFactoryMerkleInstant](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleInstant.md),
[SablierFactoryMerkleBase](/docs/reference/airdrops/contracts/abstracts/abstract.SablierFactoryMerkleBase.md)

**Title:** SablierFactoryMerkleInstant

See the documentation in
[ISablierFactoryMerkleInstant](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleInstant.md).

## Functions

### constructor

```solidity
constructor(address initialComptroller) SablierFactoryMerkleBase(initialComptroller);
```

**Parameters**

| Name                 | Type      | Description                                      |
| -------------------- | --------- | ------------------------------------------------ |
| `initialComptroller` | `address` | The address of the initial comptroller contract. |

### computeMerkleInstant

Computes the deterministic address where
[SablierMerkleInstant](/docs/reference/airdrops/contracts/contract.SablierMerkleInstant.md) campaign will be deployed.

Reverts if the requirements from {createMerkleInstant} are not met.

```solidity
function computeMerkleInstant(
    address campaignCreator,
    MerkleInstant.ConstructorParams calldata campaignParams
)
    external
    view
    override
    returns (address merkleInstant);
```

### createMerkleInstant

Creates a new MerkleInstant campaign for instant distribution of tokens.

Emits a {CreateMerkleInstant} event. Notes:

- The contract is created with CREATE2.
- The campaign's fee will be set to the min USD fee unless a custom fee is set for `msg.sender`.
- A value of zero for `campaignParams.expiration` means the campaign does not expire. Requirements:
- `campaignParams.token` must not be the forbidden native token.

```solidity
function createMerkleInstant(
    MerkleInstant.ConstructorParams calldata campaignParams,
    uint256 aggregateAmount,
    uint256 recipientCount
)
    external
    override
    returns (ISablierMerkleInstant merkleInstant);
```

**Parameters**

| Name              | Type                              | Description                                                                                                                      |
| ----------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `campaignParams`  | `MerkleInstant.ConstructorParams` | Struct encapsulating the [SablierMerkleInstant](/docs/reference/airdrops/contracts/contract.SablierMerkleInstant.md) parameters. |
| `aggregateAmount` | `uint256`                         | The total amount of ERC-20 tokens to be distributed to all recipients.                                                           |
| `recipientCount`  | `uint256`                         | The total number of recipient addresses eligible for the airdrop.                                                                |

**Returns**

| Name            | Type                    | Description                                              |
| --------------- | ----------------------- | -------------------------------------------------------- |
| `merkleInstant` | `ISablierMerkleInstant` | The address of the newly created MerkleInstant contract. |
