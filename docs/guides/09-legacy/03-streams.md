---
id: streams
title: Streams
sidebar_position: 3
---

Every interaction with Sablier is in relation to a specific "token stream". This is how we refer to a real-time payment.

A token stream has six properties:

1. Sender.
2. Recipient.
3. Fixed deposit amount.
4. ERC-20 token used as streaming currency.
5. Start time
6. Stop Time

## Example

Imagine a 3,000 DAI salary paid by Alice to Bob over the whole month of January. The start time would be Jan 1 and the
stop time Feb 1. Every second makes Bob richer; on Jan 10, he would have earned approximately 1,000 DAI.
