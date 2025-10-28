# ISablierFactoryMerkleVCA

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/interfaces/ISablierFactoryMerkleVCA.sol)

**Inherits:**
[ISablierFactoryMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleBase.md)

A factory that deploys MerkleVCA campaign contracts.

_See the documentation in
[ISablierMerkleVCA](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleVCA.md)._

## Functions

### computeMerkleVCA

Computes the deterministic address where
[SablierMerkleVCA](/docs/reference/airdrops/contracts/contract.SablierMerkleVCA.md) campaign will be deployed.

_Reverts if the requirements from
[createMerkleVCA](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleVCA.md#createmerklevca)
are not met._

```solidity
function computeMerkleVCA(
    address campaignCreator,
    MerkleVCA.ConstructorParams memory params
)
    external
    view
    returns (address merkleVCA);
```

### createMerkleVCA

Creates a new MerkleVCA campaign for variable distribution of tokens.

Emits a
[CreateMerkleVCA](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleVCA.md#createmerklevca-1)
event. Notes:

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
    MerkleVCA.ConstructorParams memory params,
    uint256 aggregateAmount,
    uint256 recipientCount
)
    external
    returns (ISablierMerkleVCA merkleVCA);
```

**Parameters**

| Name              | Type                          | Description                                                                                                                                    |
| ----------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `params`          | `MerkleVCA.ConstructorParams` | Struct encapsulating the input parameters, which are documented in [DataTypes](/docs/reference/airdrops/contracts/types/library.MerkleVCA.md). |
| `aggregateAmount` | `uint256`                     | The total amount of ERC-20 tokens to be distributed to all recipients.                                                                         |
| `recipientCount`  | `uint256`                     | The total number of recipient addresses eligible for the airdrop.                                                                              |

**Returns**

| Name        | Type                | Description                                          |
| ----------- | ------------------- | ---------------------------------------------------- |
| `merkleVCA` | `ISablierMerkleVCA` | The address of the newly created MerkleVCA campaign. |

## Events

### CreateMerkleVCA

Emitted when a [SablierMerkleVCA](/docs/reference/airdrops/contracts/contract.SablierMerkleVCA.md) campaign is created.

```solidity
event CreateMerkleVCA(
    ISablierMerkleVCA indexed merkleVCA,
    MerkleVCA.ConstructorParams params,
    uint256 aggregateAmount,
    uint256 recipientCount,
    address comptroller,
    uint256 minFeeUSD
);
```
