---
id: "withdraw"
sidebar_position: 2
title: "Withdraw from Stream"
---

:::note

This section assumes that you have already gone through the [setup](/contracts/v2/guides/stream-management/setup) part.

:::

Withdrawing from streams means claiming the assets that have become due to the recipient, who has the option to direct
the withdrawal to an alternative address.

There are three functions that can be used to withdraw from streams:

1. `withdraw`: withdraws a specific amount of assets
2. `withdrawMax`: withdraws the maximum amount of assets available at the time of invocation
3. `withdrawMultiple`: withdraws specific amounts of assets from multiple streams at once

To initiate withdrawals, you must first have a stream. Go ahead and create a stream with a brief duration, and assign
the `StreamManagement` contract as the recipient - this contract was set up in a previous guide. Once completed, you can
use the `withdraw` function to retrieve assets from the stream:

```solidity reference title="Stream Management: Withdraw"
https://github.com/sablierhq/examples/blob/main/v2/core/StreamManagement.sol#L34-L36
```

In this example, the withdrawal address and withdrawal amount are hard-coded for demonstration purposes. However, in a
production environment, these values would likely be adjustable parameters determined by the user.

In addition to the `withdraw` function, there is the `withdrawMax` function, which you can use to withdraw the maximum
amount of assets available in a stream at the time of invocation:

```solidity reference title="Stream Management: Withdraw Max"
https://github.com/sablierhq/examples/blob/main/v2/core/StreamManagement.sol#L39-L41
```

In effect, what `withdrawMax` does is call the `withdrawableAmountOf` function, and pass its result to `withdraw`.

Lastly, there is the `withdrawMultiple` function, with which you can withdraw from multiple streams at once:

```solidity reference title="Stream Management: Withdraw Multiple"
https://github.com/sablierhq/examples/blob/main/v2/core/StreamManagement.sol#L44-L46
```
