---
id: known-issues
title: Known Issues
sidebar_position: 1
---

:::caution
v1.0 and v1.1 are outdated versions of the battle-tested Sablier protocol, and are both no longer maintained. They also both have a set of [known issues](/protocol/technical-reference-v1/known-issues) which were fixed in Sablier v2.

Unless there is a very specific reason, it's highly advised to use the latest version of the protocol instead.
:::

There are several known issues and limitations with the current version of the protocol, Sablier V1.1. These are all fixed in the new version of the protocol, Sablier V2. We cannot fix these issues in Sablier v1.1 because the smart contracts are immutable.

### Start Time

A stream transaction **MUST** be processed by the blockchain before the start time of the stream. If the transaction is
processed after the start time of the stream, the transaction will revert (fail) with the following error:

> start time before block.timestamp

If you are a DAO and working on a proposal involving the creation of a stream, make sure to set to the start time of the stream sufficiently far away in time so that the proposal passes and the transaction gets mined before the start time of the stream.

### The Deposit Gotcha

The deposit must be a multiple of the difference between the stop time and the start time, or otherwise the contract reverts with a "deposit not multiple of time delta" message. In practice, this means that you may not able to always use exact amounts like 3,000. You may have to divide the fixed deposit by the time delta and subtract the remainder from the initial number. Thus you may have to stream a value that is very, very close to the fixed deposit, but not quite it.

For example, if:

- The token has 18 decimals
- The time delta is 2592000 (30 days)

You will have to stream 2999999999999998944000 instead of 3000000000000000000000. The former divides evenly by 2592000, but the latter doesn't.

### Zero-decimal Tokens

This is only a problem in exceptional cases, as most tokens have 18 decimals, but we strongly advise against the use of tokens with 3 decimals or less in Sablier. It can lead to all sorts of problems, and the protocol was designed for tokens with at least 4 decimals.

:::info
Questions? Head over to the [Sablier Discord](https://discord.gg/bSwRCwWRsT) where the community can answer them.
:::
