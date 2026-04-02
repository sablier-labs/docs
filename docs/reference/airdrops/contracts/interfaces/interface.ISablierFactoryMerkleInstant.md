# ISablierFactoryMerkleInstant

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/interfaces/ISablierFactoryMerkleInstant.sol)

**Inherits:**
[ISablierFactoryMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleBase.md)

**Title:** ISablierFactoryMerkleInstant

A factory that deploys MerkleInstant campaign contracts.

See the documentation in
[ISablierMerkleInstant](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleInstant.md).

## Functions

### computeMerkleInstant

Computes the deterministic address where
[SablierMerkleInstant](/docs/reference/airdrops/contracts/contract.SablierMerkleInstant.md) campaign will be deployed.

Reverts if the requirements from
[createMerkleInstant](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleInstant.md#createmerkleinstant)
are not met.

```solidity
function computeMerkleInstant(
    address campaignCreator,
    MerkleInstant.ConstructorParams calldata campaignParams
)
    external
    view
    returns (address merkleInstant);
```

### createMerkleInstant

Creates a new MerkleInstant campaign for instant distribution of tokens.

Emits a
[CreateMerkleInstant](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleInstant.md#createmerkleinstant)
event. Notes:

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

## Events

### CreateMerkleInstant

Emitted when a [SablierMerkleInstant](/docs/reference/airdrops/contracts/contract.SablierMerkleInstant.md) campaign is
created.

```solidity
event CreateMerkleInstant(
    ISablierMerkleInstant indexed merkleInstant,
    MerkleInstant.ConstructorParams campaignParams,
    uint256 aggregateAmount,
    uint256 recipientCount,
    address comptroller,
    uint256 minFeeUSD
);
```
