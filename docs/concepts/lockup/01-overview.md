---
id: "overview"
sidebar_position: 1
title: "Overview"
---

Lockup is a higher-level category that refers to the requirement that the creator of a stream must lock up a certain
amount of assets in a smart contract.

Imagine Alice wants to stream 3,000 DAI to Bob during the whole month of January.

1. Alice deposits the 3,000 DAI in Lockup before Jan 1, setting the end time to Feb 1.
2. Bob's allocation of the DAI deposit increases every second beginning Jan 1.
3. On Jan 10, Bob will have earned approximately 1,000 DAI. He can send a transaction to Lockup to withdraw the tokens.
4. If at any point during January Alice wishes to get back her tokens, she can cancel the stream and recover what has
   not been streamed yet.

This streaming model is especially useful for use cases like vesting and airdrops.
