# ISablierV2MerkleLockupFactory

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/c10978dd4cdb54301b9c2d63c7e0af41da9110f3/src/interfaces/ISablierV2MerkleLockupFactory.sol)

Deploys MerkleLockup campaigns with CREATE2.

## Functions

### isPercentagesSum100

Verifies if the sum of percentages in `tranches` equals 100% , i.e. 1e18.

_Reverts if the sum of percentages overflows._

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

### createMerkleLL

Creates a new MerkleLockup campaign with a LockupLinear distribution.

_Emits a
[CreateMerkleLL](/docs/reference/lockup/periphery/interfaces/interface.ISablierV2MerkleLockupFactory.md#createmerklell)
event._

```solidity
function createMerkleLL(
    MerkleLockup.ConstructorParams memory baseParams,
    ISablierV2LockupLinear lockupLinear,
    LockupLinear.Durations memory streamDurations,
    uint256 aggregateAmount,
    uint256 recipientCount
)
    external
    returns (ISablierV2MerkleLL merkleLL);
```

**Parameters**

| Name              | Type                             | Description                                                                                                                                                                     |
| ----------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `baseParams`      | `MerkleLockup.ConstructorParams` | Struct encapsulating the [SablierV2MerkleLockup](/docs/reference/lockup/periphery/abstracts/abstract.SablierV2MerkleLockup.md) parameters, which are documented in {DataTypes}. |
| `lockupLinear`    | `ISablierV2LockupLinear`         | The address of the [SablierV2LockupLinear](docs/reference/lockup/core/contract.SablierV2LockupLinear.md) contract.                                                              |
| `streamDurations` | `LockupLinear.Durations`         | The durations for each stream.                                                                                                                                                  |
| `aggregateAmount` | `uint256`                        | The total amount of ERC-20 assets to be distributed to all recipients.                                                                                                          |
| `recipientCount`  | `uint256`                        | The total number of recipients who are eligible to claim.                                                                                                                       |

**Returns**

| Name       | Type                 | Description                                             |
| ---------- | -------------------- | ------------------------------------------------------- |
| `merkleLL` | `ISablierV2MerkleLL` | The address of the newly created MerkleLockup contract. |

### createMerkleLT

Creates a new MerkleLockup campaign with a LockupTranched distribution.

_Emits a
[CreateMerkleLT](/docs/reference/lockup/periphery/interfaces/interface.ISablierV2MerkleLockupFactory.md#createmerklelt)
event._

```solidity
function createMerkleLT(
    MerkleLockup.ConstructorParams memory baseParams,
    ISablierV2LockupTranched lockupTranched,
    MerkleLT.TrancheWithPercentage[] memory tranchesWithPercentages,
    uint256 aggregateAmount,
    uint256 recipientCount
)
    external
    returns (ISablierV2MerkleLT merkleLT);
```

**Parameters**

| Name                      | Type                               | Description                                                                                                                                                                     |
| ------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `baseParams`              | `MerkleLockup.ConstructorParams`   | Struct encapsulating the [SablierV2MerkleLockup](/docs/reference/lockup/periphery/abstracts/abstract.SablierV2MerkleLockup.md) parameters, which are documented in {DataTypes}. |
| `lockupTranched`          | `ISablierV2LockupTranched`         | The address of the [SablierV2LockupTranched](docs/reference/lockup/core/contract.SablierV2LockupTranched.md) contract.                                                          |
| `tranchesWithPercentages` | `MerkleLT.TrancheWithPercentage[]` | The tranches with their respective unlock percentages.                                                                                                                          |
| `aggregateAmount`         | `uint256`                          | The total amount of ERC-20 assets to be distributed to all recipients.                                                                                                          |
| `recipientCount`          | `uint256`                          | The total number of recipients who are eligible to claim.                                                                                                                       |

**Returns**

| Name       | Type                 | Description                                             |
| ---------- | -------------------- | ------------------------------------------------------- |
| `merkleLT` | `ISablierV2MerkleLT` | The address of the newly created MerkleLockup contract. |

## Events

### CreateMerkleLL

Emitted when a [SablierV2MerkleLL](/docs/reference/lockup/periphery/contract.SablierV2MerkleLL.md) campaign is created.

```solidity
event CreateMerkleLL(
    ISablierV2MerkleLL indexed merkleLL,
    MerkleLockup.ConstructorParams baseParams,
    ISablierV2LockupLinear lockupLinear,
    LockupLinear.Durations streamDurations,
    uint256 aggregateAmount,
    uint256 recipientCount
);
```

### CreateMerkleLT

Emitted when a [SablierV2MerkleLT](/docs/reference/lockup/periphery/contract.SablierV2MerkleLT.md) campaign is created.

```solidity
event CreateMerkleLT(
    ISablierV2MerkleLT indexed merkleLT,
    MerkleLockup.ConstructorParams baseParams,
    ISablierV2LockupTranched lockupTranched,
    MerkleLT.TrancheWithPercentage[] tranchesWithPercentages,
    uint256 totalDuration,
    uint256 aggregateAmount,
    uint256 recipientCount
);
```
