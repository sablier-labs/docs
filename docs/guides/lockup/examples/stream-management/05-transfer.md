---
id: "transfer"
sidebar_position: 5
title: "Transfer Ownership"
---

:::note

This section assumes that you have already gone through the [setup](/guides/lockup/examples/stream-management/setup)
part.

:::

:::tip

See the [Access Control](/reference/lockup/access-control) guide for an overview of who is allowed to transfer
ownership.

:::

You may remember from the [NFT](/concepts/nft) guide that every Lockup stream is wrapped in an
[ERC-721](https://eips.ethereum.org/EIPS/eip-721) non-fungible token (NFT). One of the key benefits of this design is
that the recipient of the stream has the ability to transfer the NFT to a different address, effectively redirecting the
streaming of tokens to that new address.

To transfer ownership of a stream, it is recommended to invoke the
[`withdrawMaxAndTransfer`](/reference/lockup/contracts/abstracts/abstract.SablierLockupBase#withdrawmaxandtransfer)
function, which withdraws all the unclaimed funds to the current recipient prior to transferring ownership to the new
recipient:

```solidity reference title="Stream Management: Withdraw and Transfer Ownership"
https://github.com/sablier-labs/examples/blob/main/lockup/StreamManagement.sol#L72-L74
```

The withdrawal will be skipped if there are no unclaimed funds.

If you want to transfer ownership without withdrawing the funds, you can use the `IERC721.transferFrom` function:

```solidity reference title="Stream Management: Transfer Ownership"
https://github.com/sablier-labs/examples/blob/main/lockup/StreamManagement.sol#L67-L69
```

:::caution

Be careful with `transferFrom`. All remaining funds, including the already streamed portion, will enter into the
possession of the new recipient. Consider using `withdrawMaxAndTransfer` instead.

:::

Finally, note that in the examples above, the new recipient is hard-coded for demonstration purposes. However, in a
production environment, the new recipient would definitely be an adjustable parameter provided by the user.
