---
sidebar_position: 2
---

# SablierFactoryMerkleLL

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/SablierFactoryMerkleLL.sol)

**Inherits:**
[ISablierFactoryMerkleLL](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleLL.md),
[SablierFactoryMerkleBase](/docs/reference/airdrops/contracts/abstracts/abstract.SablierFactoryMerkleBase.md)

See the documentation in
[ISablierFactoryMerkleLL](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleLL.md).

## Functions

### constructor

```solidity
constructor(address initialComptroller) SablierFactoryMerkleBase(initialComptroller);
```

**Parameters**

| Name                 | Type      | Description                                      |
| -------------------- | --------- | ------------------------------------------------ |
| `initialComptroller` | `address` | The address of the initial comptroller contract. |

### computeMerkleLL

Computes the deterministic address where
[SablierMerkleLL](/docs/reference/airdrops/contracts/contract.SablierMerkleLL.md) campaign will be deployed.

_Reverts if the requirements from {createMerkleLL} are not met._

```solidity
function computeMerkleLL(
    address campaignCreator,
    MerkleLL.ConstructorParams calldata params
)
    external
    view
    override
    returns (address merkleLL);
```

### createMerkleLL

Creates a new Merkle Lockup campaign with a Lockup Linear distribution.

\*Emits a {CreateMerkleLL} event. Notes:

- The contract is created with CREATE2.
- The campaign's fee will be set to the min USD fee unless a custom fee is set for `msg.sender`.
- A value of zero for `params.expiration` means the campaign does not expire. Requirements:
- `params.token` must not be the forbidden native token.\*

```solidity
function createMerkleLL(
    MerkleLL.ConstructorParams calldata params,
    uint256 aggregateAmount,
    uint256 recipientCount
)
    external
    override
    returns (ISablierMerkleLL merkleLL);
```

**Parameters**

| Name              | Type                         | Description                                                                     |
| ----------------- | ---------------------------- | ------------------------------------------------------------------------------- |
| `params`          | `MerkleLL.ConstructorParams` | Struct encapsulating the input parameters, which are documented in {DataTypes}. |
| `aggregateAmount` | `uint256`                    | The total amount of ERC-20 tokens to be distributed to all recipients.          |
| `recipientCount`  | `uint256`                    | The total number of recipient addresses eligible for the airdrop.               |

**Returns**

| Name       | Type               | Description                                              |
| ---------- | ------------------ | -------------------------------------------------------- |
| `merkleLL` | `ISablierMerkleLL` | The address of the newly created Merkle Lockup contract. |
