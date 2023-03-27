---
id: "withdraw"
sidebar_position: 2
title: "Withdraw from Stream"
---

:::note

This section assumes that you have already gone through the [setup](/contracts/v2/guides/stream-management/setup) part.

:::

Begin by creating a stream with a short duration so that we can quickly withdraw from it, and set the recipient as the
`StreamManagement` contract created in the earlier guide. Then, you can withdraw assets from the stream like this:

```solidity reference title="Stream Management: Withdraw"
https://github.com/sablierhq/examples/blob/main/v2/core/StreamManagement.sol#L29-L31
```

In this example, the withdrawal address and withdrawal amount are hard-coded for demonstration purposes. In a production
environment, these values would be user-configurable function parameters.

:::tip

The `withdraw` function is not the only withdrawal method available in Sablier. You could also use the `withdrawMax`
function, which withdraws the maximum amount of assets available in a stream at the time of invocation. And you could
also use the `withdrawMultiple` function to withdraw assets from multiple streams simultaneously.

:::
