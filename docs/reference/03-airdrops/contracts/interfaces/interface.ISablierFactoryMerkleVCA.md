# ISablierFactoryMerkleVCA

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/8b6823c019ff7556ac9ad24cbb5ac62821854d2f/src/interfaces/ISablierFactoryMerkleVCA.sol)

**Inherits:**
[ISablierFactoryMerkleBase](/docs/reference/03-airdrops/contracts/interfaces/interface.ISablierFactoryMerkleBase.md)

**Title:** ISablierFactoryMerkleVCA

A factory that deploys MerkleVCA campaign contracts.

See the documentation in
[ISablierMerkleVCA](/docs/reference/03-airdrops/contracts/interfaces/interface.ISablierMerkleVCA.md).

## Functions

### computeMerkleVCA

Computes the deterministic address where
[SablierMerkleVCA](/docs/reference/03-airdrops/contracts/contract.SablierMerkleVCA.md) campaign will be deployed.

Reverts if the requirements from
[createMerkleVCA](/docs/reference/03-airdrops/contracts/interfaces/interface.ISablierFactoryMerkleVCA.md#createmerklevca)
are not met.

```solidity
function computeMerkleVCA(
    address campaignCreator,
    MerkleVCA.ConstructorParams calldata campaignParams
)
    external
    view
    returns (address merkleVCA);
```

### createMerkleVCA

Creates a new MerkleVCA campaign for variable distribution of tokens.

Emits a
[CreateMerkleVCA](/docs/reference/03-airdrops/contracts/interfaces/interface.ISablierFactoryMerkleVCA.md#createmerklevca)
event. Notes:

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
    MerkleVCA.ConstructorParams memory campaignParams,
    uint256 recipientCount
)
    external
    returns (ISablierMerkleVCA merkleVCA);
```

**Parameters**

| Name             | Type                          | Description                                                                                                                 |
| ---------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `campaignParams` | `MerkleVCA.ConstructorParams` | Struct encapsulating the [SablierMerkleVCA](/docs/reference/03-airdrops/contracts/contract.SablierMerkleVCA.md) parameters. |
| `recipientCount` | `uint256`                     | The total number of recipient addresses eligible for the airdrop.                                                           |

**Returns**

| Name        | Type                | Description                                          |
| ----------- | ------------------- | ---------------------------------------------------- |
| `merkleVCA` | `ISablierMerkleVCA` | The address of the newly created MerkleVCA campaign. |

## Events

### CreateMerkleVCA

Emitted when a [SablierMerkleVCA](/docs/reference/03-airdrops/contracts/contract.SablierMerkleVCA.md) campaign is
created.

```solidity
event CreateMerkleVCA(
    ISablierMerkleVCA indexed merkleVCA,
    MerkleVCA.ConstructorParams campaignParams,
    uint256 recipientCount,
    address comptroller,
    uint256 minFeeUSD
);
```
