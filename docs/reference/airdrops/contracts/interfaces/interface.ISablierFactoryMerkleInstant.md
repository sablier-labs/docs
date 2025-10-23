# ISablierFactoryMerkleInstant

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/interfaces/ISablierFactoryMerkleInstant.sol)

**Inherits:**
[ISablierFactoryMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleBase.md)

A factory that deploys MerkleInstant campaign contracts.

_See the documentation in
[ISablierMerkleInstant](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleInstant.md)._

## Functions

### computeMerkleInstant

Computes the deterministic address where
[SablierMerkleInstant](/docs/reference/airdrops/contracts/contract.SablierMerkleInstant.md) campaign will be deployed.

_Reverts if the requirements from
[createMerkleInstant](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleInstant.md#createmerkleinstant)
are not met._

```solidity
function computeMerkleInstant(
    address campaignCreator,
    MerkleInstant.ConstructorParams memory params
)
    external
    view
    returns (address merkleInstant);
```

### createMerkleInstant

Creates a new MerkleInstant campaign for instant distribution of tokens.

\*Emits a
[CreateMerkleInstant](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleInstant.md#createmerkleinstant)
event. Notes:

- The contract is created with CREATE2.
- The campaign's fee will be set to the min USD fee unless a custom fee is set for `msg.sender`.
- A value of zero for `params.expiration` means the campaign does not expire. Requirements:
- `params.token` must not be the forbidden native token.\*

```solidity
function createMerkleInstant(
    MerkleInstant.ConstructorParams memory params,
    uint256 aggregateAmount,
    uint256 recipientCount
)
    external
    returns (ISablierMerkleInstant merkleInstant);
```

**Parameters**

| Name              | Type                              | Description                                                                     |
| ----------------- | --------------------------------- | ------------------------------------------------------------------------------- |
| `params`          | `MerkleInstant.ConstructorParams` | Struct encapsulating the input parameters, which are documented in {DataTypes}. |
| `aggregateAmount` | `uint256`                         | The total amount of ERC-20 tokens to be distributed to all recipients.          |
| `recipientCount`  | `uint256`                         | The total number of recipient addresses eligible for the airdrop.               |

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
    MerkleInstant.ConstructorParams params,
    uint256 aggregateAmount,
    uint256 recipientCount,
    address comptroller,
    uint256 minFeeUSD
);
```
