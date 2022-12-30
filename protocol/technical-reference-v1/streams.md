---
id: streams
title: Streams
sidebar_position: 2
---

:::caution
v1.0 and v1.1 are outdated versions of the battle-tested Sablier protocol, and are both no longer maintained. They also both have a set of [known issues](/protocol/technical-reference-v1/known-issues) which were fixed in Sablier v2.

Unless there is a very specific reason, it's highly advised to use the latest version of the protocol instead.
:::

Every interaction with the Sablier protocol is in relation to a specific "token stream". This is how we refer to a
real-time payment.

A token stream has six properties:

1. Sender.
2. Recipient.
3. Fixed deposit amount.
4. ERC-20 token used as streaming currency.
5. Start time
6. Stop Time

## Example

Imagine a 3,000 DAI salary paid by Alice to Bob over the whole month of January. The start time would be
Jan 1 and the stop time Feb 1. Every second makes Bob richer; on Jan 10, he would have earned approximately 1,000 DAI.
