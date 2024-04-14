# MerkleLockup

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/a3131838ec731b38b1e2e03735fba874ab66f5e2/src/types/DataTypes.sol)

## Structs

### ConstructorParams

Struct encapsulating the base constructor parameter of a
[SablierV2MerkleLockup](/docs/contracts/v2/reference/periphery/contract.SablierV2MerkleLockup.md) contract.

```solidity
struct ConstructorParams {
    address initialAdmin;
    IERC20 asset;
    string ipfsCID;
    string name;
    bytes32 merkleRoot;
    uint40 expiration;
    bool cancelable;
    bool transferable;
}
```

**Properties**

| Name           | Type      | Description                                                    |
| -------------- | --------- | -------------------------------------------------------------- |
| `initialAdmin` | `address` | The initial admin of the Merkle Lockup contract.               |
| `asset`        | `IERC20`  | The address of the streamed ERC-20 asset.                      |
| `ipfsCID`      | `string`  | The content identifier for indexing the contract on IPFS.      |
| `name`         | `string`  | The name of the campaign.                                      |
| `merkleRoot`   | `bytes32` | The Merkle root of the claim data.                             |
| `expiration`   | `uint40`  | The expiration of the streaming campaign, as a Unix timestamp. |
| `cancelable`   | `bool`    | Indicates if each stream will be cancelable.                   |
| `transferable` | `bool`    | Indicates if each stream NFT will be transferable.             |
