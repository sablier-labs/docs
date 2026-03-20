# MerkleInstant

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/003a71932c0e26e767a02c21205a077469406ac8/src/types/MerkleInstant.sol)

## Structs

### ConstructorParams

Struct encapsulating the constructor parameters of Merkle Instant campaigns.

The fields are arranged alphabetically.

```solidity
struct ConstructorParams {
    string campaignName;
    uint40 campaignStartTime;
    ClaimType claimType;
    uint40 expiration;
    address initialAdmin;
    string ipfsCID;
    bytes32 merkleRoot;
    IERC20 token;
}
```

**Properties**

| Name                | Type        | Description                                                                                                                           |
| ------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `campaignName`      | `string`    | The name of the campaign.                                                                                                             |
| `campaignStartTime` | `uint40`    | The start time of the campaign, as a Unix timestamp.                                                                                  |
| `claimType`         | `ClaimType` | The type of claim functions supported by the campaign.                                                                                |
| `expiration`        | `uint40`    | The expiration of the campaign, as a Unix timestamp. A value of zero means the campaign does not expire.                              |
| `initialAdmin`      | `address`   | The initial admin of the campaign.                                                                                                    |
| `ipfsCID`           | `string`    | The content identifier for indexing the contract on IPFS. An empty value may break certain UI features that depend upon the IPFS CID. |
| `merkleRoot`        | `bytes32`   | The Merkle root of the claim data.                                                                                                    |
| `token`             | `IERC20`    | The contract address of the ERC-20 token to be distributed.                                                                           |
