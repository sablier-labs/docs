# ISablierMerkleFactory

[Git Source](https://github.com/sablier-labs/airdrops/blob/f9a358c0a5bccfec77601d4490ef9117e0488068/src/interfaces/ISablierMerkleFactory.sol)

**Inherits:** IAdminable

A contract that deploys Merkle Lockups and Merkle Instant campaigns. Both use Merkle proofs for token distribution.
Merkle Lockup enable Airstreams, a portmanteau of "airdrop" and "stream", an airdrop model where the tokens are
distributed over time, as opposed to all at once. On the other hand, Merkle Instant enables instant airdrops where
tokens are unlocked and distributed immediately. See the Sablier docs for more guidance: https://docs.sablier.com

_The contracts are deployed using CREATE2._

## Functions

### defaultFee

Retrieves the default fee charged for claiming an airdrop.

_The fee is denominated in the native token of the chain, e.g., ETH for Ethereum Mainnet._

```solidity
function defaultFee() external view returns (uint256);
```

### getCustomFee

Retrieves the custom fee struct for the provided campaign creator.

_The fee is denominated in the native token of the chain, e.g., ETH for Ethereum Mainnet._

```solidity
function getCustomFee(address campaignCreator) external view returns (MerkleFactory.CustomFee memory);
```

**Parameters**

| Name              | Type      | Description                          |
| ----------------- | --------- | ------------------------------------ |
| `campaignCreator` | `address` | The address of the campaign creator. |

### getFee

Retrieves the fee for the provided campaign creator, using the default fee if no custom fee is set.

_The fee is denominated in the native token of the chain, e.g., ETH for Ethereum Mainnet._

```solidity
function getFee(address campaignCreator) external view returns (uint256);
```

**Parameters**

| Name              | Type      | Description                          |
| ----------------- | --------- | ------------------------------------ |
| `campaignCreator` | `address` | The address of the campaign creator. |

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

### collectFees

Collects the fees accrued in the `merkleBase` contract, and transfers them to the factory admin.

Emits a [CollectFees](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleFactory.md#collectfees)
event. Notes:

- If the admin is a contract, it must be able to receive native token payments, e.g., ETH for Ethereum Mainnet.

```solidity
function collectFees(ISablierMerkleBase merkleBase) external;
```

**Parameters**

| Name         | Type                 | Description                                                           |
| ------------ | -------------------- | --------------------------------------------------------------------- |
| `merkleBase` | `ISablierMerkleBase` | The address of the Merkle contract where the fees are collected from. |

### createMerkleInstant

Creates a new MerkleInstant campaign for instant distribution of tokens.

Emits a
[CreateMerkleInstant](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleFactory.md#createmerkleinstant)
event. Notes:

- The MerkleInstant contract is created with CREATE2.
- The immutable fee will be set to the default value unless a custom fee is set.

```solidity
function createMerkleInstant(
    MerkleBase.ConstructorParams memory baseParams,
    uint256 aggregateAmount,
    uint256 recipientCount
)
    external
    returns (ISablierMerkleInstant merkleInstant);
```

**Parameters**

| Name              | Type                           | Description                                                                                                                                                              |
| ----------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `baseParams`      | `MerkleBase.ConstructorParams` | Struct encapsulating the [SablierMerkleBase](docs/reference/airdrops/contracts/abstracts/abstract.SablierMerkleBase.md) parameters, which are documented in {DataTypes}. |
| `aggregateAmount` | `uint256`                      | The total amount of ERC-20 tokens to be distributed to all recipients.                                                                                                   |
| `recipientCount`  | `uint256`                      | The total number of recipients who are eligible to claim.                                                                                                                |

**Returns**

| Name            | Type                    | Description                                              |
| --------------- | ----------------------- | -------------------------------------------------------- |
| `merkleInstant` | `ISablierMerkleInstant` | The address of the newly created MerkleInstant contract. |

### createMerkleLL

Creates a new Merkle Lockup campaign with a Lockup Linear distribution.

Emits a
[CreateMerkleLL](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleFactory.md#createmerklell) event.
Notes:

- The MerkleLL contract is created with CREATE2.
- The immutable fee will be set to the default value unless a custom fee is set.

```solidity
function createMerkleLL(
    MerkleBase.ConstructorParams memory baseParams,
    ISablierLockup lockup,
    bool cancelable,
    bool transferable,
    MerkleLL.Schedule memory schedule,
    uint256 aggregateAmount,
    uint256 recipientCount
)
    external
    returns (ISablierMerkleLL merkleLL);
```

**Parameters**

| Name              | Type                           | Description                                                                                                                                                              |
| ----------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `baseParams`      | `MerkleBase.ConstructorParams` | Struct encapsulating the [SablierMerkleBase](docs/reference/airdrops/contracts/abstracts/abstract.SablierMerkleBase.md) parameters, which are documented in {DataTypes}. |
| `lockup`          | `ISablierLockup`               | The address of the [SablierLockup](/reference/lockup/contracts/contract.SablierLockup.md) contract.                                                                      |
| `cancelable`      | `bool`                         | Indicates if the stream will be cancelable after claiming.                                                                                                               |
| `transferable`    | `bool`                         | Indicates if the stream will be transferable after claiming.                                                                                                             |
| `schedule`        | `MerkleLL.Schedule`            | Struct encapsulating the unlocks schedule, which are documented in {DataTypes}.                                                                                          |
| `aggregateAmount` | `uint256`                      | The total amount of ERC-20 tokens to be distributed to all recipients.                                                                                                   |
| `recipientCount`  | `uint256`                      | The total number of recipients who are eligible to claim.                                                                                                                |

**Returns**

| Name       | Type               | Description                                              |
| ---------- | ------------------ | -------------------------------------------------------- |
| `merkleLL` | `ISablierMerkleLL` | The address of the newly created Merkle Lockup contract. |

### createMerkleLT

Creates a new Merkle Lockup campaign with a Lockup Tranched distribution.

Emits a
[CreateMerkleLT](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleFactory.md#createmerklelt) event.
Notes:

- The MerkleLT contract is created with CREATE2.
- The immutable fee will be set to the default value unless a custom fee is set.

```solidity
function createMerkleLT(
    MerkleBase.ConstructorParams memory baseParams,
    ISablierLockup lockup,
    bool cancelable,
    bool transferable,
    uint40 streamStartTime,
    MerkleLT.TrancheWithPercentage[] memory tranchesWithPercentages,
    uint256 aggregateAmount,
    uint256 recipientCount
)
    external
    returns (ISablierMerkleLT merkleLT);
```

**Parameters**

| Name                      | Type                               | Description                                                                                                                                                              |
| ------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `baseParams`              | `MerkleBase.ConstructorParams`     | Struct encapsulating the [SablierMerkleBase](docs/reference/airdrops/contracts/abstracts/abstract.SablierMerkleBase.md) parameters, which are documented in {DataTypes}. |
| `lockup`                  | `ISablierLockup`                   | The address of the [SablierLockup](/reference/lockup/contracts/contract.SablierLockup.md) contract.                                                                      |
| `cancelable`              | `bool`                             | Indicates if the stream will be cancelable after claiming.                                                                                                               |
| `transferable`            | `bool`                             | Indicates if the stream will be transferable after claiming.                                                                                                             |
| `streamStartTime`         | `uint40`                           | The start time of the streams created through {SablierMerkleBase.claim}.                                                                                                 |
| `tranchesWithPercentages` | `MerkleLT.TrancheWithPercentage[]` | The tranches with their respective unlock percentages.                                                                                                                   |
| `aggregateAmount`         | `uint256`                          | The total amount of ERC-20 tokens to be distributed to all recipients.                                                                                                   |
| `recipientCount`          | `uint256`                          | The total number of recipients who are eligible to claim.                                                                                                                |

**Returns**

| Name       | Type               | Description                                              |
| ---------- | ------------------ | -------------------------------------------------------- |
| `merkleLT` | `ISablierMerkleLT` | The address of the newly created Merkle Lockup contract. |

### resetCustomFee

Resets the custom fee for the provided campaign creator to the default fee.

Emits a
[ResetCustomFee](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleFactory.md#resetcustomfee) event.
Notes:

- The default fee will only be applied to future campaigns. Requirements:
- `msg.sender` must be the admin.

```solidity
function resetCustomFee(address campaignCreator) external;
```

**Parameters**

| Name              | Type      | Description                             |
| ----------------- | --------- | --------------------------------------- |
| `campaignCreator` | `address` | The user for whom the fee is reset for. |

### setCustomFee

Sets a custom fee for the provided campaign creator.

Emits a [SetCustomFee](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleFactory.md#setcustomfee)
event. Notes:

- The new fee will only be applied to future campaigns. Requirements:
- `msg.sender` must be the admin.

```solidity
function setCustomFee(address campaignCreator, uint256 newFee) external;
```

**Parameters**

| Name              | Type      | Description                       |
| ----------------- | --------- | --------------------------------- |
| `campaignCreator` | `address` | The user for whom the fee is set. |
| `newFee`          | `uint256` | The new fee to be set.            |

### setDefaultFee

Sets the default fee to be applied when claiming airdrops.

Emits a [SetDefaultFee](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleFactory.md#setdefaultfee)
event. Notes:

- The new default fee will only be applied to the future campaigns and will not affect the ones already deployed.
  Requirements:
- `msg.sender` must be the admin.

```solidity
function setDefaultFee(uint256 defaultFee) external;
```

**Parameters**

| Name         | Type      | Description                    |
| ------------ | --------- | ------------------------------ |
| `defaultFee` | `uint256` | The new default fee to be set. |

## Events

### CollectFees

Emitted when the accrued fees are collected.

```solidity
event CollectFees(address indexed admin, ISablierMerkleBase indexed merkleBase, uint256 feeAmount);
```

### CreateMerkleInstant

Emitted when a [SablierMerkleInstant](/docs/reference/airdrops/contracts/contract.SablierMerkleInstant.md) campaign is
created.

```solidity
event CreateMerkleInstant(
    ISablierMerkleInstant indexed merkleInstant,
    MerkleBase.ConstructorParams baseParams,
    uint256 aggregateAmount,
    uint256 recipientCount,
    uint256 fee
);
```

### CreateMerkleLL

Emitted when a [SablierMerkleLL](/docs/reference/airdrops/contracts/contract.SablierMerkleLL.md) campaign is created.

```solidity
event CreateMerkleLL(
    ISablierMerkleLL indexed merkleLL,
    MerkleBase.ConstructorParams baseParams,
    ISablierLockup lockup,
    bool cancelable,
    bool transferable,
    MerkleLL.Schedule schedule,
    uint256 aggregateAmount,
    uint256 recipientCount,
    uint256 fee
);
```

### CreateMerkleLT

Emitted when a [SablierMerkleLT](/docs/reference/airdrops/contracts/contract.SablierMerkleLT.md) campaign is created.

```solidity
event CreateMerkleLT(
    ISablierMerkleLT indexed merkleLT,
    MerkleBase.ConstructorParams baseParams,
    ISablierLockup lockup,
    bool cancelable,
    bool transferable,
    uint40 streamStartTime,
    MerkleLT.TrancheWithPercentage[] tranchesWithPercentages,
    uint256 totalDuration,
    uint256 aggregateAmount,
    uint256 recipientCount,
    uint256 fee
);
```

### ResetCustomFee

Emitted when the admin resets the custom fee for the provided campaign creator to the default fee.

```solidity
event ResetCustomFee(address indexed admin, address indexed campaignCreator);
```

### SetCustomFee

Emitted when the admin sets a custom fee for the provided campaign creator.

```solidity
event SetCustomFee(address indexed admin, address indexed campaignCreator, uint256 customFee);
```

### SetDefaultFee

Emitted when the default fee is set by the admin.

```solidity
event SetDefaultFee(address indexed admin, uint256 defaultFee);
```
