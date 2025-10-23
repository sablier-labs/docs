# MerkleLT

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/types/DataTypes.sol)

## Structs

### ConstructorParams

Struct encapsulating the constructor parameters of Merkle Lockup Tranched campaigns.

_The fields are arranged alphabetically._

```solidity
struct ConstructorParams {
    string campaignName;
    uint40 campaignStartTime;
    bool cancelable;
    uint40 expiration;
    address initialAdmin;
    string ipfsCID;
    ISablierLockup lockup;
    bytes32 merkleRoot;
    string shape;
    IERC20 token;
    MerkleLT.TrancheWithPercentage[] tranchesWithPercentages;
    bool transferable;
    uint40 vestingStartTime;
}
```

**Properties**

| Name                      | Type                               | Description                                                                                                                           |
| ------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `campaignName`            | `string`                           | The name of the campaign.                                                                                                             |
| `campaignStartTime`       | `uint40`                           | The start time of the campaign, as a Unix timestamp.                                                                                  |
| `cancelable`              | `bool`                             | Indicates if the Lockup stream will be cancelable after claiming.                                                                     |
| `expiration`              | `uint40`                           | The expiration of the campaign, as a Unix timestamp. A value of zero means the campaign does not expire.                              |
| `initialAdmin`            | `address`                          | The initial admin of the campaign.                                                                                                    |
| `ipfsCID`                 | `string`                           | The content identifier for indexing the contract on IPFS. An empty value may break certain UI features that depend upon the IPFS CID. |
| `lockup`                  | `ISablierLockup`                   | The address of the [SablierLockup](/reference/lockup/contracts/contract.SablierLockup.md) contract.                                   |
| `merkleRoot`              | `bytes32`                          | The Merkle root of the claim data.                                                                                                    |
| `shape`                   | `string`                           | The shape of Lockup stream, used for differentiating between streams in the UI.                                                       |
| `token`                   | `IERC20`                           | The contract address of the ERC-20 token to be distributed.                                                                           |
| `tranchesWithPercentages` | `MerkleLT.TrancheWithPercentage[]` | The tranches with their respective unlock percentages, which are documented in {MerkleLT.TrancheWithPercentage}.                      |
| `transferable`            | `bool`                             | Indicates if the Lockup stream will be transferable after claiming.                                                                   |
| `vestingStartTime`        | `uint40`                           | The start time of the vesting stream, as a Unix timestamp. Zero is a sentinel value for `block.timestamp`.                            |

### TrancheWithPercentage

Struct encapsulating the unlock percentage and duration of a tranche.

_Since users may have different amounts allocated, this struct makes it possible to calculate the amounts at claim time.
An 18-decimal format is used to represent percentages: 100% = 1e18. For more information, see the PRBMath documentation
on UD2x18: https://github.com/PaulRBerg/prb-math_

```solidity
struct TrancheWithPercentage {
    UD2x18 unlockPercentage;
    uint40 duration;
}
```

**Properties**

| Name               | Type     | Description                                                               |
| ------------------ | -------- | ------------------------------------------------------------------------- |
| `unlockPercentage` | `UD2x18` | The percentage designated to be unlocked in this tranche.                 |
| `duration`         | `uint40` | The time difference in seconds between this tranche and the previous one. |
