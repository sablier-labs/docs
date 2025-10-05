---
sidebar_position: 2
---

# FlowNFTDescriptor

[Git Source](https://github.com/sablier-labs/flow/blob/a0fa33d2843af0817e34970cdc05822ead31daaa/src/FlowNFTDescriptor.sol)

**Inherits:** [IFlowNFTDescriptor](/docs/reference/flow/contracts/interfaces/interface.IFlowNFTDescriptor.md)

See the documentation in
[IFlowNFTDescriptor](/docs/reference/flow/contracts/interfaces/interface.IFlowNFTDescriptor.md).

## Functions

### tokenURI

Produces the URI describing a particular stream NFT.

_Currently it returns the Sablier logo as an SVG. In the future, it will return an NFT SVG._

```solidity
function tokenURI(IERC721Metadata, uint256) external pure override returns (string memory uri);
```

**Parameters**

| Name     | Type              | Description |
| -------- | ----------------- | ----------- |
| `<none>` | `IERC721Metadata` |             |
| `<none>` | `uint256`         |             |

**Returns**

| Name  | Type     | Description                               |
| ----- | -------- | ----------------------------------------- |
| `uri` | `string` | The URI of the ERC721-compliant metadata. |
