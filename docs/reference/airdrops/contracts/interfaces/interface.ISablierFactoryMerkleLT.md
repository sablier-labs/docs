# ISablierFactoryMerkleLT

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/interfaces/ISablierFactoryMerkleLT.sol)

**Inherits:**
[ISablierFactoryMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleBase.md)

A factory that deploys MerkleLT campaign contracts.

_See the documentation in
[ISablierMerkleLT](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLT.md)._

## Functions

### isPercentagesSum100

Verifies if the sum of percentages in `tranches` equals 100%, i.e., 1e18.

_This is a helper function for the frontend. It is not used anywhere in the contracts._

```solidity
function isPercentagesSum100(MerkleLT.TrancheWithPercentage[] calldata tranches) external pure returns (bool result);
```

**Parameters**

| Name       | Type                               | Description                                            |
| ---------- | ---------------------------------- | ------------------------------------------------------ |
| `tranches` | `MerkleLT.TrancheWithPercentage[]` | The tranches with their respective unlock percentages. |

**Returns**

| Name     | Type   | Description                                                  |
| -------- | ------ | ------------------------------------------------------------ |
| `result` | `bool` | True if the sum of percentages equals 100%, otherwise false. |

### computeMerkleLT

Computes the deterministic address where
[SablierMerkleLT](/docs/reference/airdrops/contracts/contract.SablierMerkleLT.md) campaign will be deployed.

_Reverts if the requirements from
[createMerkleLT](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleLT.md#createmerklelt) are
not met._

```solidity
function computeMerkleLT(
    address campaignCreator,
    MerkleLT.ConstructorParams memory params
)
    external
    view
    returns (address merkleLT);
```

### createMerkleLT

Creates a new Merkle Lockup campaign with a Lockup Tranched distribution.

Emits a
[CreateMerkleLT](/docs/reference/airdrops/contracts/interfaces/interface.ISablierFactoryMerkleLT.md#createmerklelt)
event. Notes:

- The contract is created with CREATE2.
- The campaign's fee will be set to the min USD fee unless a custom fee is set for `msg.sender`.
- A value of zero for `params.expiration` means the campaign does not expire. Requirements:
- `params.token` must not be the forbidden native token.
- The sum of percentages of the tranches must equal 100%.

```solidity
function createMerkleLT(
    MerkleLT.ConstructorParams memory params,
    uint256 aggregateAmount,
    uint256 recipientCount
)
    external
    returns (ISablierMerkleLT merkleLT);
```

**Parameters**

| Name              | Type                         | Description                                                                     |
| ----------------- | ---------------------------- | ------------------------------------------------------------------------------- |
| `params`          | `MerkleLT.ConstructorParams` | Struct encapsulating the input parameters, which are documented in {DataTypes}. |
| `aggregateAmount` | `uint256`                    | The total amount of ERC-20 tokens to be distributed to all recipients.          |
| `recipientCount`  | `uint256`                    | The total number of recipient addresses eligible for the airdrop.               |

**Returns**

| Name       | Type               | Description                                              |
| ---------- | ------------------ | -------------------------------------------------------- |
| `merkleLT` | `ISablierMerkleLT` | The address of the newly created Merkle Lockup contract. |

## Events

### CreateMerkleLT

Emitted when a [SablierMerkleLT](/docs/reference/airdrops/contracts/contract.SablierMerkleLT.md) campaign is created.

```solidity
event CreateMerkleLT(
    ISablierMerkleLT indexed merkleLT,
    MerkleLT.ConstructorParams params,
    uint256 aggregateAmount,
    uint256 totalDuration,
    uint256 recipientCount,
    address comptroller,
    uint256 minFeeUSD
);
```
