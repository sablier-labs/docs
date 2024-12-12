# MerkleLockup

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/ed3be5dc823dd81219f8060a6e6b32ead6c8de84/src/types/DataTypes.sol)

## Structs

### ConstructorParams

Struct encapsulating the base constructor parameters of a MerkleLockup campaign.

```solidity
struct ConstructorParams {
    IERC20 asset;
    bool cancelable;
    uint40 expiration;
    address initialAdmin;
    string ipfsCID;
    bytes32 merkleRoot;
    string name;
    bool transferable;
}
```

**Properties**

| Name           | Type      | Description                                                  |
| -------------- | --------- | ------------------------------------------------------------ |
| `asset`        | `IERC20`  | The contract address of the ERC-20 asset to be distributed.  |
| `cancelable`   | `bool`    | Indicates if the stream will be cancelable after claiming.   |
| `expiration`   | `uint40`  | The expiration of the campaign, as a Unix timestamp.         |
| `initialAdmin` | `address` | The initial admin of the MerkleLockup campaign.              |
| `ipfsCID`      | `string`  | The content identifier for indexing the contract on IPFS.    |
| `merkleRoot`   | `bytes32` | The Merkle root of the claim data.                           |
| `name`         | `string`  | The name of the campaign.                                    |
| `transferable` | `bool`    | Indicates if the stream will be transferable after claiming. |
