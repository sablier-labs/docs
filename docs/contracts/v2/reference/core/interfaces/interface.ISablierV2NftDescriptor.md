# ISablierV2NFTDescriptor

[Git Source](https://github.com/sablierhq/v2-core/blob/e69c450f9b8808e324f31933450818ca28d0800b/docs/contracts/v2/reference/core/interfaces)

This contract produces the URI describing the Sablier stream NFTs.

## Functions

### tokenURI

Produces the URI describing a particular stream NFT.

_This is a data URI with the JSON contents directly inlined._

```solidity
function tokenURI(IERC721Metadata sablierContract, uint256 streamId) external view returns (string memory uri);
```

**Parameters**

| Name              | Type              | Description                                                |
| ----------------- | ----------------- | ---------------------------------------------------------- |
| `sablierContract` | `IERC721Metadata` | The address of the Sablier contract the stream belongs to. |
| `streamId`        | `uint256`         | The id of the stream for which to produce a description.   |

**Returns**

| Name  | Type     | Description                               |
| ----- | -------- | ----------------------------------------- |
| `uri` | `string` | The URI of the ERC721-compliant metadata. |
