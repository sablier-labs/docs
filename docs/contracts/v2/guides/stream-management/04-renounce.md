---
id: "renounce"
sidebar_position: 4
title: "Renounce Streams"
---

:::note

This section assumes that you have already gone through the [setup](/contracts/v2/guides/stream-management/setup) part.

:::

Renouncing a stream means that the sender of the stream will no longer be able to cancel it. This is useful if the
sender wants to give up control of the stream.

To renounce a stream, only one function is required, namely `renounce`.

Before invoking this function, ensure that you have an active, cancelable stream with the sender set to the
`StreamManagement` contract. Once the stream is created, you can use the the `renounce` function like this:

```solidity reference title="Stream Management: Renounce"
https://github.com/sablierhq/examples/blob/main/v2/core/StreamManagement.sol#L24-L26
```
