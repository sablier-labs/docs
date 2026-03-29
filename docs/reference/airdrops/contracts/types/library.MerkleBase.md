# MerkleBase

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/types/MerkleBase.sol)

## Structs

### ConstructorParams

Struct encapsulating the constructor parameters of
[SablierMerkleBase](/docs/reference/airdrops/contracts/abstracts/abstract.SablierMerkleBase.md) contract.

The fields are arranged alphabetically.

```solidity
struct ConstructorParams {
    address campaignCreator;
    string campaignName;
    uint40 campaignStartTime;
    ClaimType claimType;
    address comptroller;
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
| `campaignCreator`   | `address`   | The address of campaign creator which should be the same as the `msg.sender`.                                                         |
| `campaignName`      | `string`    | The name of the campaign.                                                                                                             |
| `campaignStartTime` | `uint40`    | The start time of the campaign, as a Unix timestamp.                                                                                  |
| `claimType`         | `ClaimType` | The type of claim functions to be enabled in the campaign.                                                                            |
| `comptroller`       | `address`   | The address of the comptroller contract.                                                                                              |
| `expiration`        | `uint40`    | The expiration of the campaign, as a Unix timestamp. A value of zero means the campaign does not expire.                              |
| `initialAdmin`      | `address`   | The initial admin of the campaign.                                                                                                    |
| `ipfsCID`           | `string`    | The content identifier for indexing the contract on IPFS. An empty value may break certain UI features that depend upon the IPFS CID. |
| `merkleRoot`        | `bytes32`   | The Merkle root of the claim data.                                                                                                    |
| `token`             | `IERC20`    | The contract address of the ERC-20 token to be distributed.                                                                           |
