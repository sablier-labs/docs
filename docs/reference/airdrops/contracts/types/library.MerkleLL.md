# MerkleLL

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/types/DataTypes.sol)

## Structs

### ConstructorParams

Struct encapsulating the constructor parameters of Merkle Lockup Linear campaigns.

_The fields are arranged alphabetically._

```solidity
struct ConstructorParams {
    string campaignName;
    uint40 campaignStartTime;
    bool cancelable;
    uint40 cliffDuration;
    UD60x18 cliffUnlockPercentage;
    uint40 expiration;
    address initialAdmin;
    string ipfsCID;
    ISablierLockup lockup;
    bytes32 merkleRoot;
    string shape;
    UD60x18 startUnlockPercentage;
    IERC20 token;
    uint40 totalDuration;
    bool transferable;
    uint40 vestingStartTime;
}
```

**Properties**

| Name                    | Type             | Description                                                                                                                           |
| ----------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `campaignName`          | `string`         | The name of the campaign.                                                                                                             |
| `campaignStartTime`     | `uint40`         | The start time of the campaign, as a Unix timestamp.                                                                                  |
| `cancelable`            | `bool`           | Indicates if the Lockup stream will be cancelable after claiming.                                                                     |
| `cliffDuration`         | `uint40`         | The cliff duration of the vesting stream, in seconds.                                                                                 |
| `cliffUnlockPercentage` | `UD60x18`        | The percentage of the claim amount due to be unlocked at the vesting cliff time, as a fixed-point number where 1e18 is 100%           |
| `expiration`            | `uint40`         | The expiration of the campaign, as a Unix timestamp. A value of zero means the campaign does not expire.                              |
| `initialAdmin`          | `address`        | The initial admin of the campaign.                                                                                                    |
| `ipfsCID`               | `string`         | The content identifier for indexing the contract on IPFS. An empty value may break certain UI features that depend upon the IPFS CID. |
| `lockup`                | `ISablierLockup` | The address of the [SablierLockup](/reference/lockup/contracts/contract.SablierLockup.md) contract.                                   |
| `merkleRoot`            | `bytes32`        | The Merkle root of the claim data.                                                                                                    |
| `shape`                 | `string`         | The shape of the vesting stream, used for differentiating between streams in the UI.                                                  |
| `startUnlockPercentage` | `UD60x18`        | The percentage of the claim amount due to be unlocked at the vesting start time, as a fixed-point number where 1e18 is 100%.          |
| `token`                 | `IERC20`         | The contract address of the ERC-20 token to be distributed.                                                                           |
| `totalDuration`         | `uint40`         | The total duration of the vesting stream, in seconds.                                                                                 |
| `transferable`          | `bool`           | Indicates if the Lockup stream will be transferable after claiming.                                                                   |
| `vestingStartTime`      | `uint40`         | The start time of the vesting stream, as a Unix timestamp. Zero is a sentinel value for `block.timestamp`.                            |
