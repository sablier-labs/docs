# ISablierV2NFTDescriptor

[Git Source](https://github.com/sablier-labs/v2-core/blob/412ec3d3998a766507de96afdb26c797d2ae491d/docs/contracts/v2/reference/core/interfaces)

This contract generates the URI describing the Sablier V2 stream NFTs.

_Inspired by Uniswap V3 Positions NFTs._

## Functions

### tokenURI

Produces the URI describing a particular stream NFT.

_This is a data URI with the JSON contents directly inlined._

```solidity
function tokenURI(IERC721Metadata sablier, uint256 streamId) external view returns (string memory uri);
```

**Parameters**

| Name       | Type              | Description                                                    |
| ---------- | ----------------- | -------------------------------------------------------------- |
| `sablier`  | `IERC721Metadata` | The address of the Sablier contract the stream was created in. |
| `streamId` | `uint256`         | The id of the stream for which to produce a description.       |

**Returns**

| Name  | Type     | Description                               |
| ----- | -------- | ----------------------------------------- |
| `uri` | `string` | The URI of the ERC721-compliant metadata. |
