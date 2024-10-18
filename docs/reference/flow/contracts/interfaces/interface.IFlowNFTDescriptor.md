# IFlowNFTDescriptor

[Git Source](https://github.com/sablier-labs/flow/blob/9bfe5d6fbfbd7dc60e142735dd3f492df756e0b9/src/interfaces/IFlowNFTDescriptor.sol)

This contract generates the URI describing the Sablier Flow stream NFTs.

## Functions

### tokenURI

Produces the URI describing a particular stream NFT.

_Currently it returns the Sablier logo as an SVG. In the future, it will return an NFT SVG._

```solidity
function tokenURI(IERC721Metadata sablierFlow, uint256 streamId) external view returns (string memory uri);
```

**Parameters**

| Name          | Type              | Description                                                |
| ------------- | ----------------- | ---------------------------------------------------------- |
| `sablierFlow` | `IERC721Metadata` | The address of the Sablier Flow the stream was created in. |
| `streamId`    | `uint256`         | The ID of the stream for which to produce a description.   |

**Returns**

| Name  | Type     | Description                               |
| ----- | -------- | ----------------------------------------- |
| `uri` | `string` | The URI of the ERC721-compliant metadata. |