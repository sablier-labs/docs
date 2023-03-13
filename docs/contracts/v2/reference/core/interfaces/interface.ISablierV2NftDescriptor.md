# ISablierV2NftDescriptor

[Git Source](https://github.com/sablierhq/v2-core/blob/87a0a16c835ea8e88ddf6a8387898c91c62ab9d1/docs/contracts/v2/reference/core/interfaces)

The contract that produces the URI describing Sablier streams.

## Functions

### tokenURI

Produces the URI describing a particular stream.

_Note This is a data URI with the JSON contents directly inlined._

```solidity
function tokenURI(ISablierV2Lockup lockup, uint256 streamId) external view returns (string memory uri);
```

**Parameters**

| Name       | Type               | Description                                                         |
| ---------- | ------------------ | ------------------------------------------------------------------- |
| `lockup`   | `ISablierV2Lockup` | The address of the lockup streaming contract the stream belongs to. |
| `streamId` | `uint256`          | The id of the stream for which to produce a description.            |

**Returns**

| Name  | Type     | Description                               |
| ----- | -------- | ----------------------------------------- |
| `uri` | `string` | The URI of the ERC721-compliant metadata. |
