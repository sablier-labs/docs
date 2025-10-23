# ILockupNFTDescriptor

[Git Source](https://github.com/sablier-labs/lockup/blob/58eaac45c20c57a93b73d887c714e68f061ec3e6/src/interfaces/ILockupNFTDescriptor.sol)

This contract generates the URI describing the Sablier stream NFTs.

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
| `streamId` | `uint256`         | The ID of the stream for which to produce a description.       |

**Returns**

| Name  | Type     | Description                               |
| ----- | -------- | ----------------------------------------- |
| `uri` | `string` | The URI of the ERC721-compliant metadata. |
