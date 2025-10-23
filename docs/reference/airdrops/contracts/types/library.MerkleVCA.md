# MerkleVCA

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/types/DataTypes.sol)

## Structs

### ConstructorParams

Struct encapsulating the constructor parameters of Merkle VCA campaigns.

_The fields are arranged alphabetically._

```solidity
struct ConstructorParams {
    string campaignName;
    uint40 campaignStartTime;
    uint40 expiration;
    address initialAdmin;
    string ipfsCID;
    bytes32 merkleRoot;
    IERC20 token;
    UD60x18 unlockPercentage;
    uint40 vestingEndTime;
    uint40 vestingStartTime;
}
```

**Properties**

| Name                | Type      | Description                                                                                                                             |
| ------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `campaignName`      | `string`  | The name of the campaign.                                                                                                               |
| `campaignStartTime` | `uint40`  | The start time of the campaign, as a Unix timestamp.                                                                                    |
| `expiration`        | `uint40`  | The expiration of the campaign, as a Unix timestamp.                                                                                    |
| `initialAdmin`      | `address` | The initial admin of the campaign.                                                                                                      |
| `ipfsCID`           | `string`  | The content identifier for indexing the contract on IPFS. An empty value may break certain UI features that depend upon the IPFS CID.   |
| `merkleRoot`        | `bytes32` | The Merkle root of the claim data.                                                                                                      |
| `token`             | `IERC20`  | The contract address of the ERC-20 token to be distributed.                                                                             |
| `unlockPercentage`  | `UD60x18` | The percentage of the full amount that will unlock immediately at the start time, denominated as fixed-point number where 1e18 is 100%. |
| `vestingEndTime`    | `uint40`  | Vesting end time, as a Unix timestamp.                                                                                                  |
| `vestingStartTime`  | `uint40`  | Vesting start time, as a Unix timestamp.                                                                                                |
