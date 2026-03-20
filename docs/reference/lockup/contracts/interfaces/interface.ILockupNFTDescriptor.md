# ILockupNFTDescriptor

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/003a71932c0e26e767a02c21205a077469406ac8/src/interfaces/ILockupNFTDescriptor.sol)

**Title:** ILockupNFTDescriptor

This contract generates the URI describing the Sablier stream NFTs.

Inspired by Uniswap V3 Positions NFTs.

## Functions

### tokenURI

Produces the URI describing a particular stream NFT.

This is a data URI with the JSON contents directly inlined.

```solidity
function tokenURI(IERC721Metadata sablier, uint256 streamId) external view returns (string memory uri);
```

**Parameters**

| Name       | Type              | Description                                                    |
| ---------- | ----------------- | -------------------------------------------------------------- |
| `sablier`  | `IERC721Metadata` | The address of the Sablier contract the stream was created in. |
| `streamId` | `uint256`         | The ID of the stream for which to produce a description.       |

**Returns**

| Name  | Type     | Description                               |
| ----- | -------- | ----------------------------------------- |
| `uri` | `string` | The URI of the ERC721-compliant metadata. |
