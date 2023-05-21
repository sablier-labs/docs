---
id: "transfer"
sidebar_position: 5
title: "Transfer Ownership"
---

:::note

This section assumes that you have already gone through the [setup](/contracts/v2/guides/stream-management/setup) part.

:::

:::tip

See the [Access Control](/contracts/v2/reference/access-control) guide for an overview of who is allowed to transfer
ownership.

:::

You may remember from the [Types of Streams](/concepts/protocol/stream-types) guide that each Sablier stream is wrapped
in an [ERC-721](https://eips.ethereum.org/EIPS/eip-721) non-fungible token (NFT). One of the key benefits of this design
is that the recipient of the stream, who also holds ownership of the NFT, has the ability to transfer the NFT to a
different address, effectively redirecting the streaming of assets to that new address.

To transfer ownership of a stream, invoke the ERC-721 `safeTransferFrom` function on a stream whose current recipient is
the `StreamManagement` contract:

```solidity reference title="Stream Management: Transfer Ownership"
https://github.com/sablier-labs/examples/blob/main/v2/core/StreamManagement.sol#L29-L31
```

This `safeTransferFrom` function ensures that the new owner is a contract implementing the `ERC721TokenReceiver`
interface. If this check is not required, opt for the `transferFrom` function instead:

```solidity reference title="Stream Management: Transfer Ownership"
https://github.com/sablier-labs/examples/blob/main/v2/core/StreamManagement.sol#L34-L36
```

In the examples above, the new owner is hard-coded for demonstration purposes. However, in a production environment,
this would be an adjustable parameter determined by the user.
