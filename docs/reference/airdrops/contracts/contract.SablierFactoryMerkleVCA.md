---
sidebar_position: 2
---

# SablierFactoryMerkleVCA

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/003a71932c0e26e767a02c21205a077469406ac8/src/SablierFactoryMerkleVCA.sol)

**Inherits:**
[ISablierFactoryMerkleVCA](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleVCA.md),
[SablierFactoryMerkleBase](/docs/reference/airdrops/contracts/abstracts/abstract.SablierFactoryMerkleBase.md)

**Title:** SablierFactoryMerkleVCA

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

Reverts if the requirements from {createMerkleVCA} are not met.

```solidity
function computeMerkleVCA(
    address campaignCreator,
    MerkleVCA.ConstructorParams calldata campaignParams
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
- `campaignParams.token` must not be the forbidden native token.
- `campaignParams.aggregateAmount` must be greater than 0.
- Both `campaignParams.vestingStartTime` and `campaignParams.vestingEndTime` must be greater than 0.
- `campaignParams.vestingEndTime` must be greater than `campaignParams.vestingStartTime`.
- `campaignParams.expiration` must be greater than 0.
- `campaignParams.expiration` must be at least 1 week beyond the end time to ensure loyal recipients have enough time to
  claim.
- `campaignParams.unlockPercentage` must not be greater than 1e18, equivalent to 100%.

```solidity
function createMerkleVCA(
    MerkleVCA.ConstructorParams calldata campaignParams,
    uint256 recipientCount
)
    external
    returns (ISablierMerkleVCA merkleVCA);
```

**Parameters**

| Name             | Type                          | Description                                                                                                              |
| ---------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `campaignParams` | `MerkleVCA.ConstructorParams` | Struct encapsulating the [SablierMerkleVCA](/docs/reference/airdrops/contracts/contract.SablierMerkleVCA.md) parameters. |
| `recipientCount` | `uint256`                     | The total number of recipient addresses eligible for the airdrop.                                                        |

**Returns**

| Name        | Type                | Description                                          |
| ----------- | ------------------- | ---------------------------------------------------- |
| `merkleVCA` | `ISablierMerkleVCA` | The address of the newly created MerkleVCA campaign. |

### \_checkDeploymentParams

Validate the deployment parameters.

```solidity
function _checkDeploymentParams(
    uint256 aggregateAmount,
    uint40 expiration,
    address token,
    UD60x18 unlockPercentage,
    uint40 vestingEndTime,
    uint40 vestingStartTime
)
    private
    view;
```
