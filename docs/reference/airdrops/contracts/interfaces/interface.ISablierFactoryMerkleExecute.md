# ISablierFactoryMerkleExecute

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/interfaces/ISablierFactoryMerkleExecute.sol)

**Inherits:**
[ISablierFactoryMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleBase.md)

**Title:** ISablierFactoryMerkleExecute

A factory that deploys MerkleExecute campaign contracts.

See the documentation in
[ISablierMerkleExecute](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleExecute.md).

## Functions

### computeMerkleExecute

Computes the deterministic address where
[SablierMerkleExecute](/docs/reference/airdrops/contracts/contract.SablierMerkleExecute.md) campaign will be deployed.

Reverts if the requirements from
[createMerkleExecute](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleExecute.md#createmerkleexecute)
are not met.

```solidity
function computeMerkleExecute(
    address campaignCreator,
    MerkleExecute.ConstructorParams calldata campaignParams
)
    external
    view
    returns (address merkleExecute);
```

### createMerkleExecute

Creates a new MerkleExecute campaign for claim-and-execute distribution of tokens.

Emits a
[CreateMerkleExecute](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleExecute.md#createmerkleexecute)
event. Notes:

- The contract is created with CREATE2.
- The campaign's fee will be set to the min USD fee unless a custom fee is set for `msg.sender`.
- A value of zero for `campaignParams.expiration` means the campaign does not expire.
- The create function does not validate if the `campaignParams.selector` is a function implemented by the target
  contract. In that case, the `claimAndExecute` function will revert.
- If the target contract does not implement the `campaignParams.selector` but has `fallback`, the `claimAndExecute` call
  may silently succeed. If fallback does not transfer claim tokens, the claim tokens will be left in the campaign
  contract. These tokens can be clawbacked by the campaign creator. Requirements:
- `campaignParams.token` must not be the forbidden native token.
- `campaignParams.target` must be a contract.

```solidity
function createMerkleExecute(
    MerkleExecute.ConstructorParams calldata campaignParams,
    uint256 aggregateAmount,
    uint256 recipientCount
)
    external
    returns (ISablierMerkleExecute merkleExecute);
```

**Parameters**

| Name              | Type                              | Description                                                                                                                      |
| ----------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `campaignParams`  | `MerkleExecute.ConstructorParams` | Struct encapsulating the [SablierMerkleExecute](/docs/reference/airdrops/contracts/contract.SablierMerkleExecute.md) parameters. |
| `aggregateAmount` | `uint256`                         | The total amount of ERC-20 tokens to be distributed to all recipients.                                                           |
| `recipientCount`  | `uint256`                         | The total number of recipient addresses eligible for the airdrop.                                                                |

**Returns**

| Name            | Type                    | Description                                              |
| --------------- | ----------------------- | -------------------------------------------------------- |
| `merkleExecute` | `ISablierMerkleExecute` | The address of the newly created MerkleExecute campaign. |

## Events

### CreateMerkleExecute

Emitted when a [SablierMerkleExecute](/docs/reference/airdrops/contracts/contract.SablierMerkleExecute.md) campaign is
created.

```solidity
event CreateMerkleExecute(
    ISablierMerkleExecute indexed merkleExecute,
    MerkleExecute.ConstructorParams campaignParams,
    uint256 aggregateAmount,
    uint256 recipientCount,
    address comptroller,
    uint256 minFeeUSD
);
```
