---
sidebar_position: 2
---

# FlowNFTDescriptor

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/8b6823c019ff7556ac9ad24cbb5ac62821854d2f/src/FlowNFTDescriptor.sol)

**Inherits:** [IFlowNFTDescriptor](/docs/reference/04-flow/contracts/interfaces/interface.IFlowNFTDescriptor.md)

**Title:** FlowNFTDescriptor

See the documentation in
[IFlowNFTDescriptor](/docs/reference/04-flow/contracts/interfaces/interface.IFlowNFTDescriptor.md).

## Functions

### tokenURI

Produces the URI describing a particular stream NFT.

Currently it returns the Sablier logo as an SVG. In the future, it will return an NFT SVG.

```solidity
function tokenURI(
    IERC721Metadata, /* sablierFlow */
    uint256 /* streamId */
)
    external
    pure
    override
    returns (string memory uri);
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
