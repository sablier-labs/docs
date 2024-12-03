---
id: "overview"
sidebar_position: 1
title: "Overview"
---

Lockup is a token streaming protocol that refers to the requirement that the creator of a stream must lock up a certain
amount of tokens in a smart contract. A Lockup stream, therefore, is characterized by the start time, end time, amount
of tokens to be streamed and a [stream shape](./02-stream-shapes.mdx).

Let's discuss an example. Imagine Alice wants to stream 3,000 DAI to Bob during the whole month of January.

1. Alice deposits the 3,000 DAI in Lockup before Jan 1, setting the end time to Feb 1.
2. Bob's allocation of the DAI deposit increases every second beginning Jan 1.
3. On Jan 10, Bob will have earned approximately 1,000 DAI. He can send a transaction to Lockup to withdraw the tokens.
4. If at any point during January Alice wishes to get back her tokens, she can cancel the stream and recover what has
   not been streamed yet.

This streaming model is especially useful for use cases like vesting and airdrops. If you are looking to create an
indefinite stream of tokens, please refer to our [Flow](../flow/overview) protocol.

Lockup enables multiple shapes of streams which is discussed in the next section.
