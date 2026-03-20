# ISablierFactoryMerkleLL

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/003a71932c0e26e767a02c21205a077469406ac8/src/interfaces/ISablierFactoryMerkleLL.sol)

**Inherits:**
[ISablierFactoryMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleBase.md)

**Title:** ISablierFactoryMerkleLL

A factory that deploys MerkleLL campaign contracts.

See the documentation in
[ISablierMerkleLL](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLL.md).

## Functions

### computeMerkleLL

Computes the deterministic address where
[SablierMerkleLL](/docs/reference/airdrops/contracts/contract.SablierMerkleLL.md) campaign will be deployed.

Reverts if the requirements from
[createMerkleLL](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleLL.md#createmerklell) are
not met.

```solidity
function computeMerkleLL(
    address campaignCreator,
    MerkleLL.ConstructorParams calldata campaignParams
)
    external
    view
    returns (address merkleLL);
```

### createMerkleLL

Creates a new Merkle Lockup campaign with a Lockup Linear distribution.

Emits a
[CreateMerkleLL](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleLL.md#createmerklell)
event. Notes:

- The contract is created with CREATE2.
- The campaign's fee will be set to the min USD fee unless a custom fee is set for `msg.sender`.
- A value of zero for `campaignParams.expiration` means the campaign does not expire.
- A value of zero for `campaignParams.granularity` would store the granularity as 1 second. Requirements:
- `campaignParams.token` must not be the forbidden native token.

```solidity
function createMerkleLL(
    MerkleLL.ConstructorParams memory campaignParams,
    uint256 aggregateAmount,
    uint256 recipientCount
)
    external
    returns (ISablierMerkleLL merkleLL);
```

**Parameters**

| Name              | Type                         | Description                                                                                                            |
| ----------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `campaignParams`  | `MerkleLL.ConstructorParams` | Struct encapsulating the [SablierMerkleLL](/docs/reference/airdrops/contracts/contract.SablierMerkleLL.md) parameters. |
| `aggregateAmount` | `uint256`                    | The total amount of ERC-20 tokens to be distributed to all recipients.                                                 |
| `recipientCount`  | `uint256`                    | The total number of recipient addresses eligible for the airdrop.                                                      |

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
    MerkleLL.ConstructorParams campaignParams,
    uint256 aggregateAmount,
    uint256 recipientCount,
    address comptroller,
    uint256 minFeeUSD
);
```
