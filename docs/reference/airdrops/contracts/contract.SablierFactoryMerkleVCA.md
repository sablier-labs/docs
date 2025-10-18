---
sidebar_position: 2
---

# SablierFactoryMerkleVCA

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/SablierFactoryMerkleVCA.sol)

**Inherits:**
[ISablierFactoryMerkleVCA](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleVCA.md),
[SablierFactoryMerkleBase](/docs/reference/airdrops/contracts/abstracts/abstract.SablierFactoryMerkleBase.md)

See the documentation in
[ISablierFactoryMerkleVCA](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleVCA.md).

## Functions

### constructor

```solidity
constructor(address initialComptroller) SablierFactoryMerkleBase(initialComptroller);
```

**Parameters**

| Name                 | Type      | Description                                      |
| -------------------- | --------- | ------------------------------------------------ |
| `initialComptroller` | `address` | The address of the initial comptroller contract. |

### computeMerkleVCA

Computes the deterministic address where
[SablierMerkleVCA](/docs/reference/airdrops/contracts/contract.SablierMerkleVCA.md) campaign will be deployed.

_Reverts if the requirements from {createMerkleVCA} are not met._

```solidity
function computeMerkleVCA(
    address campaignCreator,
    MerkleVCA.ConstructorParams calldata params
)
    external
    view
    override
    returns (address merkleVCA);
```

### createMerkleVCA

Creates a new MerkleVCA campaign for variable distribution of tokens.

Emits a {CreateMerkleVCA} event. Notes:

- The contract is created with CREATE2.
- The campaign's fee will be set to the min USD fee unless a custom fee is set for `msg.sender`.
- Users interested into funding the campaign before its deployment must meet the below requirements, otherwise the
  campaign deployment will revert. Requirements:
- `params.token` must not be the forbidden native token.
- `params.expiration` must be greater than 0.
- `params.expiration` must be at least 1 week beyond the end time to ensure loyal recipients have enough time to claim.
- `params.vestingEndTime` must be greater than `params.vestingStartTime`.
- Both `params.vestingStartTime` and `params.vestingEndTime` must be greater than 0.
- `params.unlockPercentage` must not be greater than 1e18, equivalent to 100%.

```solidity
function createMerkleVCA(
    MerkleVCA.ConstructorParams calldata params,
    uint256 aggregateAmount,
    uint256 recipientCount
)
    external
    returns (ISablierMerkleVCA merkleVCA);
```

**Parameters**

| Name              | Type                          | Description                                                                                                                                                   |
| ----------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `params`          | `MerkleVCA.ConstructorParams` | Struct encapsulating the [SablierMerkleVCA](/docs/reference/airdrops/contracts/contract.SablierMerkleVCA.md) parameters, which are documented in {DataTypes}. |
| `aggregateAmount` | `uint256`                     | The total amount of ERC-20 tokens to be distributed to all recipients.                                                                                        |
| `recipientCount`  | `uint256`                     | The total number of recipient addresses eligible for the airdrop.                                                                                             |

**Returns**

| Name        | Type                | Description                                          |
| ----------- | ------------------- | ---------------------------------------------------- |
| `merkleVCA` | `ISablierMerkleVCA` | The address of the newly created MerkleVCA campaign. |

### \_checkDeploymentParams

_Validate the deployment parameters._

```solidity
function _checkDeploymentParams(
    address token,
    uint40 vestingStartTime,
    uint40 vestingEndTime,
    uint40 expiration,
    UD60x18 unlockPercentage
)
    private
    view;
```
