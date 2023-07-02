---
id: "cancel"
sidebar_position: 3
title: "Cancel Streams"
---

:::note

This section assumes that you have already gone through the [setup](/contracts/v2/guides/stream-management/setup) part.

:::

:::tip

See the [Access Control](/contracts/v2/reference/access-control) guide for an overview of who is allowed to cancel
streams.

:::

Canceling streams involves stopping the flow of assets before the stream's end time and returning the remaining funds to
the sender. The amount that has already been streamed is transferred to the recipient.

There are two functions that can be used to cancel streams:

1. `cancel`: cancels a single stream
2. `cancelMultiple`: cancels multiple streams at once

To call any of these functions, you need to have created a cancelable stream. If you don't have one yet, go back to the
[previous guide](/contracts/v2/guides/create-stream/lockup-linear) and create a stream. Then, you can use the `cancel`
function like this:

```solidity reference title="Stream Management: Cancel"
https://github.com/sablier-labs/examples/blob/main/v2/core/StreamManagement.sol#L39-L41
```

In addition to the `cancel` function, there is the `cancelMultiple` function, which allows you to cancel several streams
at once:

```solidity reference title="Stream Management: Cancel Multiple"
https://github.com/sablier-labs/examples/blob/main/v2/core/StreamManagement.sol#L44-L46
```
