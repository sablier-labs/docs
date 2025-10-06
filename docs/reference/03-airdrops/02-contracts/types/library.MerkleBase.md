# MerkleBase

[Git Source](https://github.com/sablier-labs/airdrops/blob/f9a358c0a5bccfec77601d4490ef9117e0488068/src/types/DataTypes.sol)

## Structs

### ConstructorParams

Struct encapsulating the base constructor parameters of a Merkle campaign.

```solidity
struct ConstructorParams {
    IERC20 token;
    uint40 expiration;
    address initialAdmin;
    string ipfsCID;
    bytes32 merkleRoot;
    string campaignName;
    string shape;
}
```

**Properties**

| Name           | Type      | Description                                                                                                              |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------ |
| `token`        | `IERC20`  | The contract address of the ERC-20 token to be distributed.                                                              |
| `expiration`   | `uint40`  | The expiration of the campaign, as a Unix timestamp. A value of zero means the campaign does not expire.                 |
| `initialAdmin` | `address` | The initial admin of the campaign.                                                                                       |
| `ipfsCID`      | `string`  | The content identifier for indexing the contract on IPFS.                                                                |
| `merkleRoot`   | `bytes32` | The Merkle root of the claim data.                                                                                       |
| `campaignName` | `string`  | The name of the campaign. It is truncated if exceeding 32 bytes                                                          |
| `shape`        | `string`  | The shape of Lockup stream is used for differentiating between streams in the UI. It is truncated if exceeding 32 bytes. |
