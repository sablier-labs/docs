---
id: "streaming"
sidebar_position: 1
title: "Streaming"
---

Cryptoasset streaming is what Sablier is all about. Using this new money lego, anyone with an Internet connection can
make by-the-second payments to anyone else in the world.

Picture an hourglass with sand flowing through it. Now replace the sand with your tokens, and the hourglass with our
protocol. That it's, you understood token streaming.

:::info

Fun trivia: "Sablier" means hourglass in French.

:::

Let's use an example to further explain this. Bob could send Alice's paycheck every two weeks, or every month, or he
could use Sablier and stream it over the course of the month. Every second, Alice will receive a fraction of her
paycheck, and she can withdraw the funds which have already been streamed at any time.

What's beautiful about this is that Bob doesn't have to worry all the time about handling payroll, he can just set up a
stream at the beginning of the year and relax. Alice, can then withdraw the funds which have been streamed when she
wants to, whenever that is. If Alice leaves the company while the stream is still running, Bob can simply cancel it
(assuming the stream was configured as cancelable when it was created) and get the funds back which haven't yet been
streamed.

Every interaction with the Sablier protocol is in relation to a specific token stream. This is how we refer to a
real-time payment.

**A token stream has six properties:**

- Sender.
- Recipient.
- Fixed deposit amount.
- ERC-20 token used as streaming currency.
- Start time
- Stop Time

To come back to our previous example, imagine a 3,000 DAI salary paid by Bob to Alice over the whole month of January.
The start time would be Jan 1 and the stop time Feb 1. Every second makes Alice richer; on Jan 10, he would have earned
approximately 1,000 DAI.
