# ISablierV2MerkleLockupFactory

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/a3131838ec731b38b1e2e03735fba874ab66f5e2/src/interfaces/ISablierV2MerkleLockupFactory.sol)

Deploys new Lockup Linear Merkle lockups via CREATE2.

## Functions

### createMerkleLockupLL

Creates a new Merkle Lockup that uses Lockup Linear.

_Emits a
[CreateMerkleLockupLL](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleLockupFactory.md#createmerklelockupll)
event._

```solidity
function createMerkleLockupLL(
    MerkleLockup.ConstructorParams memory baseParams,
    ISablierV2LockupLinear lockupLinear,
    LockupLinear.Durations memory streamDurations,
    uint256 aggregateAmount,
    uint256 recipientsCount
)
    external
    returns (ISablierV2MerkleLockupLL merkleLockupLL);
```

**Parameters**

| Name              | Type                             | Description                                                                                                                                                                 |
| ----------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `baseParams`      | `MerkleLockup.ConstructorParams` | Struct encapsulating the [SablierV2MerkleLockup](/docs/contracts/v2/reference/periphery/contract.SablierV2MerkleLockup.md) parameters, which are documented in {DataTypes}. |
| `lockupLinear`    | `ISablierV2LockupLinear`         | The address of the [SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) contract.                                                    |
| `streamDurations` | `LockupLinear.Durations`         | The durations for each stream due to the recipient.                                                                                                                         |
| `aggregateAmount` | `uint256`                        | Total amount of ERC-20 assets to be streamed to all recipients.                                                                                                             |
| `recipientsCount` | `uint256`                        | Total number of recipients eligible to claim.                                                                                                                               |

**Returns**

| Name             | Type                       | Description                                              |
| ---------------- | -------------------------- | -------------------------------------------------------- |
| `merkleLockupLL` | `ISablierV2MerkleLockupLL` | The address of the newly created Merkle Lockup contract. |

### createMerkleLockupLT

Creates a new Merkle Lockup that uses Lockup Tranched.

Emits a
[CreateMerkleLockupLT](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleLockupFactory.md#createmerklelockuplt)
event. Requirements:

- The sum of the tranches' unlock percentages must equal 100% = 1e18.

```solidity
function createMerkleLockupLT(
    MerkleLockup.ConstructorParams memory baseParams,
    ISablierV2LockupTranched lockupTranched,
    MerkleLockupLT.TrancheWithPercentage[] memory tranchesWithPercentages,
    uint256 aggregateAmount,
    uint256 recipientsCount
)
    external
    returns (ISablierV2MerkleLockupLT merkleLockupLT);
```

**Parameters**

| Name                      | Type                                     | Description                                                                                                                                                                 |
| ------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `baseParams`              | `MerkleLockup.ConstructorParams`         | Struct encapsulating the [SablierV2MerkleLockup](/docs/contracts/v2/reference/periphery/contract.SablierV2MerkleLockup.md) parameters, which are documented in {DataTypes}. |
| `lockupTranched`          | `ISablierV2LockupTranched`               | The address of the [SablierV2LockupTranched](docs/contracts/v2/reference/core/contract.SablierV2LockupTranched.md) contract.                                                |
| `tranchesWithPercentages` | `MerkleLockupLT.TrancheWithPercentage[]` | The tranches with their respective unlock percentages.                                                                                                                      |
| `aggregateAmount`         | `uint256`                                | Total amount of ERC-20 assets to be streamed to all recipients.                                                                                                             |
| `recipientsCount`         | `uint256`                                | Total number of recipients eligible to claim.                                                                                                                               |

**Returns**

| Name             | Type                       | Description                                              |
| ---------------- | -------------------------- | -------------------------------------------------------- |
| `merkleLockupLT` | `ISablierV2MerkleLockupLT` | The address of the newly created Merkle Lockup contract. |

## Events

### CreateMerkleLockupLL

Emitted when a Sablier V2 Lockup Linear Merkle Lockup is created.

```solidity
event CreateMerkleLockupLL(
    ISablierV2MerkleLockupLL indexed merkleLockupLL,
    MerkleLockup.ConstructorParams indexed baseParams,
    ISablierV2LockupLinear lockupLinear,
    LockupLinear.Durations streamDurations,
    uint256 aggregateAmount,
    uint256 recipientsCount
);
```

### CreateMerkleLockupLT

Emitted when a Sablier V2 Lockup Tranched Merkle Lockup is created.

```solidity
event CreateMerkleLockupLT(
    ISablierV2MerkleLockupLT indexed merkleLockupLT,
    MerkleLockup.ConstructorParams indexed baseParams,
    ISablierV2LockupTranched lockupTranched,
    MerkleLockupLT.TrancheWithPercentage[] tranchesWithPercentages,
    uint256 aggregateAmount,
    uint256 recipientsCount
);
```
