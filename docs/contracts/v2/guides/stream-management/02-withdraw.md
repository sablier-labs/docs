---
id: "withdraw"
sidebar_position: 2
title: "Withdraw from Streams"
---

:::note

This section assumes that you have already gone through the [setup](/contracts/v2/guides/stream-management/setup) part.

:::

:::tip

See the [Access Control](/contracts/v2/reference/access-control) guide for an overview of who is allowed to withdraw
from streams.

:::

Withdrawing from streams means claiming the assets that have become due to the recipient, who has the option to direct
the withdrawal to an alternative address of their choice.

There are four withdrawal functions:

1. [`withdraw`](/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup#withdraw): withdraws a specific amount
   of assets.
2. [`withdrawMax`](/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup#withdrawmax): withdraws the maximum
   withdrawable amount of assets.
3. [`withdrawMaxAndTransfer`](/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup#withdrawmaxandtransfer):
   withdraws the maximum withdrawable amount and transfer the NFT.
4. [`withdrawMultiple`](/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup#withdrawmultiple): withdraws
   specific amounts of assets from multiple streams at once.

To call any of these functions, you need to have created a stream. If you don't have one yet, go back to the
[previous guide](/contracts/v2/guides/create-stream/lockup-linear) and create a stream with a brief duration, assigning
the `StreamManagement` contract as the recipient. Then, you can use the `withdraw` function like this:

```solidity reference title="Stream Management: Withdraw"
https://github.com/sablier-labs/examples/blob/main/v2/core/StreamManagement.sol#L20-L22
```

In this example, the withdrawal address and withdrawal amount are hard-coded for demonstration purposes. However, in a
production environment, these values would likely be adjustable parameters determined by the user. Alternatively, you
can use [`withdrawableAmountOf`](/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup#withdrawableamountof)
function to determine how much amount of assets is available to withdraw.

In addition to the `withdraw` function, there is the `withdrawMax` function, which you can use to withdraw the maximum
withdrawable amount of assets at the time of invocation:

```solidity reference title="Stream Management: Withdraw Max"
https://github.com/sablier-labs/examples/blob/main/v2/core/StreamManagement.sol#L25-L27
```

What `withdrawMax` does is call the
[`withdrawableAmountOf`](/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup#withdrawableamountof) function
and pass its value to `withdraw`.

Similar to `withdrawMax`, you can use `withdrawMaxAndTransfer` to withdraw the maximum withdrawable assets and at the
same time, transfer the NFT to another address.

Lastly, there is the `withdrawMultiple` function, with which you can use to withdraw from multiple streams at once:

```solidity reference title="Stream Management: Withdraw Multiple"
https://github.com/sablier-labs/examples/blob/main/v2/core/StreamManagement.sol#L30-L32
```
