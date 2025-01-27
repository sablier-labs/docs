---
sidebar_position: 2
---

# SablierMerkleFactory

[Git Source](https://github.com/sablier-labs/airdrops/blob/f9a358c0a5bccfec77601d4490ef9117e0488068/src/SablierMerkleFactory.sol)

**Inherits:** [ISablierMerkleFactory](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleFactory.md),
Adminable

See the documentation in
[ISablierMerkleFactory](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleFactory.md).

## State Variables

### defaultFee

Retrieves the default fee charged for claiming an airdrop.

_The fee is denominated in the native token of the chain, e.g., ETH for Ethereum Mainnet._

```solidity
uint256 public override defaultFee;
```

### \_customFees

_A mapping of custom fees mapped by campaign creator addresses._

```solidity
mapping(address campaignCreator => MerkleFactory.CustomFee customFee) private _customFees;
```

## Functions

### constructor

```solidity
constructor(address initialAdmin) Adminable(initialAdmin);
```

**Parameters**

| Name           | Type      | Description                                |
| -------------- | --------- | ------------------------------------------ |
| `initialAdmin` | `address` | The address of the initial contract admin. |

### getCustomFee

Retrieves the custom fee struct for the provided campaign creator.

_The fee is denominated in the native token of the chain, e.g., ETH for Ethereum Mainnet._

```solidity
function getCustomFee(address campaignCreator) external view override returns (MerkleFactory.CustomFee memory);
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
function isPercentagesSum100(MerkleLT.TrancheWithPercentage[] calldata tranches)
    external
    pure
    override
    returns (bool result);
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

Emits a {CollectFees} event. Notes:

- If the admin is a contract, it must be able to receive native token payments, e.g., ETH for Ethereum Mainnet.

```solidity
function collectFees(ISablierMerkleBase merkleBase) external override;
```

**Parameters**

| Name         | Type                 | Description                                                           |
| ------------ | -------------------- | --------------------------------------------------------------------- |
| `merkleBase` | `ISablierMerkleBase` | The address of the Merkle contract where the fees are collected from. |

### createMerkleInstant

Creates a new MerkleInstant campaign for instant distribution of tokens.

Emits a {CreateMerkleInstant} event. Notes:

- The MerkleInstant contract is created with CREATE2.
- The immutable fee will be set to the default value unless a custom fee is set.

```solidity
function createMerkleInstant(
    MerkleBase.ConstructorParams memory baseParams,
    uint256 aggregateAmount,
    uint256 recipientCount
)
    external
    override
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

Emits a {CreateMerkleLL} event. Notes:

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
    override
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

Emits a {CreateMerkleLT} event. Notes:

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
    override
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

Emits a {ResetCustomFee} event. Notes:

- The default fee will only be applied to future campaigns. Requirements:
- `msg.sender` must be the admin.

```solidity
function resetCustomFee(address campaignCreator) external override onlyAdmin;
```

**Parameters**

| Name              | Type      | Description                             |
| ----------------- | --------- | --------------------------------------- |
| `campaignCreator` | `address` | The user for whom the fee is reset for. |

### setCustomFee

Sets a custom fee for the provided campaign creator.

Emits a {SetCustomFee} event. Notes:

- The new fee will only be applied to future campaigns. Requirements:
- `msg.sender` must be the admin.

```solidity
function setCustomFee(address campaignCreator, uint256 newFee) external override onlyAdmin;
```

**Parameters**

| Name              | Type      | Description                       |
| ----------------- | --------- | --------------------------------- |
| `campaignCreator` | `address` | The user for whom the fee is set. |
| `newFee`          | `uint256` | The new fee to be set.            |

### setDefaultFee

Sets the default fee to be applied when claiming airdrops.

Emits a {SetDefaultFee} event. Notes:

- The new default fee will only be applied to the future campaigns and will not affect the ones already deployed.
  Requirements:
- `msg.sender` must be the admin.

```solidity
function setDefaultFee(uint256 defaultFee_) external override onlyAdmin;
```

**Parameters**

| Name          | Type      | Description |
| ------------- | --------- | ----------- |
| `defaultFee_` | `uint256` |             |

### \_getFee

Retrieves the fee for the provided campaign creator, using the default fee if no custom fee is set.

```solidity
function _getFee(address campaignCreator) private view returns (uint256);
```

### \_deployMerkleLT

Deploys a new MerkleLT contract with CREATE2.

_We need a separate function to prevent the stack too deep error._

```solidity
function _deployMerkleLT(
    MerkleBase.ConstructorParams memory baseParams,
    ISablierLockup lockup,
    bool cancelable,
    bool transferable,
    uint40 streamStartTime,
    MerkleLT.TrancheWithPercentage[] memory tranchesWithPercentages
)
    private
    returns (ISablierMerkleLT merkleLT);
```
