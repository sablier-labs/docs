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

To renounce a stream, you can use
[`renounce`](/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup#renounce).

Before invoking this function, ensure that you have an active, cancelable stream with the sender set to the
`StreamManagement` contract. Once the stream is created, you can use the the `renounce` function like this:

```solidity reference title="Stream Management: Renounce"
https://github.com/sablier-labs/examples/blob/main/v2/core/StreamManagement.sol#L53-L55
```
