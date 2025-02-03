---
id: "cancel"
sidebar_position: 3
title: "Cancel Streams"
---

:::note

This section assumes that you have already gone through the [setup](/guides/lockup/examples/stream-management/setup)
part.

:::

:::tip

See the [Access Control](/reference/lockup/access-control) guide for an overview of who is allowed to cancel streams.

:::

Canceling streams involves stopping the flow of tokens before the stream's end time and refunding the remaining funds to
the sender. However, the portion that has already been streamed is <ins>NOT</ins> automatically transferred - the
recipient will need to withdraw it.

There are two functions that can be used to cancel streams:

1. [`cancel`](/reference/lockup/contracts/abstracts/abstract.SablierLockupBase#cancel): cancels a single stream
2. [`cancelMultiple`](/reference/lockup/contracts/abstracts/abstract.SablierLockupBase#cancelmultiple): cancels multiple
   streams at once

To call any of these functions, you need to have created a cancelable stream. If you don't have one yet, go back to the
[previous guide](/guides/lockup/examples/create-stream/lockup-linear) and create a stream. Then, you can use the
`cancel` function like this:

```solidity reference title="Stream Management: Cancel"
https://github.com/sablier-labs/examples/blob/main/lockup/StreamManagement.sol#L39-L41
```

In addition to the `cancel` function, there is the `cancelMultiple` function, which allows you to cancel several streams
at once:

```solidity reference title="Stream Management: Cancel Multiple"
https://github.com/sablier-labs/examples/blob/main/lockup/StreamManagement.sol#L44-L46
```
