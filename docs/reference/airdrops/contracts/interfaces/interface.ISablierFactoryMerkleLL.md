# ISablierFactoryMerkleLL

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/interfaces/ISablierFactoryMerkleLL.sol)

**Inherits:**
[ISablierFactoryMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleBase.md)

A factory that deploys MerkleLL campaign contracts.

_See the documentation in
[ISablierMerkleLL](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLL.md)._

## Functions

### computeMerkleLL

Computes the deterministic address where
[SablierMerkleLL](/docs/reference/airdrops/contracts/contract.SablierMerkleLL.md) campaign will be deployed.

_Reverts if the requirements from
[createMerkleLL](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleLL.md#createmerklell) are
not met._

```solidity
function computeMerkleLL(
    address campaignCreator,
    MerkleLL.ConstructorParams memory params
)
    external
    view
    returns (address merkleLL);
```

### createMerkleLL

Creates a new Merkle Lockup campaign with a Lockup Linear distribution.

\*Emits a
[CreateMerkleLL](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleLL.md#createmerklell)
event. Notes:

- The contract is created with CREATE2.
- The campaign's fee will be set to the min USD fee unless a custom fee is set for `msg.sender`.
- A value of zero for `params.expiration` means the campaign does not expire. Requirements:
- `params.token` must not be the forbidden native token.\*

```solidity
function createMerkleLL(
    MerkleLL.ConstructorParams memory params,
    uint256 aggregateAmount,
    uint256 recipientCount
)
    external
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

## Events

### CreateMerkleLL

Emitted when a [SablierMerkleLL](/docs/reference/airdrops/contracts/contract.SablierMerkleLL.md) campaign is created.

```solidity
event CreateMerkleLL(
    ISablierMerkleLL indexed merkleLL,
    MerkleLL.ConstructorParams params,
    uint256 aggregateAmount,
    uint256 recipientCount,
    address comptroller,
    uint256 minFeeUSD
);
```
