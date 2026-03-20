# MerkleVCA

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/7cb361717fd2f0289ad8d69469a3c00804b21657/src/types/MerkleVCA.sol)

## Structs

### ConstructorParams

Struct encapsulating the constructor parameters of Merkle VCA campaigns.

The fields are arranged alphabetically.

```solidity
struct ConstructorParams {
    uint128 aggregateAmount;
    string campaignName;
    uint40 campaignStartTime;
    ClaimType claimType;
    bool enableRedistribution;
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

| Name                   | Type        | Description                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `aggregateAmount`      | `uint128`   | The total amount of ERC-20 tokens to be distributed to all recipients. If its value is set lower than actual total allocations in the Merkle tree, it can either cause a race condition among the recipients or rewards would be calculated as 0 if its too low. As a campaign creator, it is recommended to set the value to the actual total allocations. |
| `campaignName`         | `string`    | The name of the campaign.                                                                                                                                                                                                                                                                                                                                   |
| `campaignStartTime`    | `uint40`    | The start time of the campaign, as a Unix timestamp.                                                                                                                                                                                                                                                                                                        |
| `claimType`            | `ClaimType` | The type of claim functions supported by the campaign.                                                                                                                                                                                                                                                                                                      |
| `enableRedistribution` | `bool`      | Enable redistribution of forgone tokens at deployment.                                                                                                                                                                                                                                                                                                      |
| `expiration`           | `uint40`    | The expiration of the campaign, as a Unix timestamp.                                                                                                                                                                                                                                                                                                        |
| `initialAdmin`         | `address`   | The initial admin of the campaign.                                                                                                                                                                                                                                                                                                                          |
| `ipfsCID`              | `string`    | The content identifier for indexing the contract on IPFS. An empty value may break certain UI features that depend upon the IPFS CID.                                                                                                                                                                                                                       |
| `merkleRoot`           | `bytes32`   | The Merkle root of the claim data.                                                                                                                                                                                                                                                                                                                          |
| `token`                | `IERC20`    | The contract address of the ERC-20 token to be distributed.                                                                                                                                                                                                                                                                                                 |
| `unlockPercentage`     | `UD60x18`   | The percentage of the full amount that will unlock immediately at the start time, denominated as fixed-point number where 1e18 is 100%.                                                                                                                                                                                                                     |
| `vestingEndTime`       | `uint40`    | Vesting end time, as a Unix timestamp.                                                                                                                                                                                                                                                                                                                      |
| `vestingStartTime`     | `uint40`    | Vesting start time, as a Unix timestamp.                                                                                                                                                                                                                                                                                                                    |
