---
id: "streaming"
sidebar_position: 1
title: "Streaming"
---

Asset streaming means the ability to make continuous, real-time payments on a per-second basis. This novel approach to
making payments is the core concept of Sablier.

Let's take an example. Imagine Alice wants to stream 3,000 DAI to Bob during the whole month of January.

1. Alice deposits the 3,000 DAI in Sablier before Jan 1, setting the end time to Feb 1.
2. Bob's allocation of the DAI deposit increases every second beginning Jan 1.
3. On Jan 10, Bob will have earned approximately 1,000 DAI. He can send a transaction to Sablier to withdraw the tokens.
4. If at any point during January Alice wishes to get back her tokens, she can cancel the stream and recover what has
   not been streamed yet.

This payment model is especially useful for use cases like payroll, for example, where employees don't need to wait the
end of the month anymore to spend their paycheck, as they receive it by the second instead of every two weeks or month.
No more waiting, just earning.

:::info

Fun fact: "sablier" means "hourglass" in French.

:::

## Brief history

Andreas Antonopoulos introduced the concept of money streaming in his keynote talk
[Bitcoin, Lightning, and Streaming Money](https://www.youtube.com/watch?v=gF_ZQ_eijPs), held at a Bitcoin meetup
in 2016. He discussed it within the context of the Lightning Network, but the idea can be applied to any cryptocurrency
platform.

Inspired by Antonopoulos' presentation, Sablier co-founder Paul Berg published
[ERC-1620](https://eips.ethereum.org/EIPS/eip-1620) in November 2018, proposing a standard for streaming payments on the
Ethereum blockchain. The standard required users to lock a specified amount of funds in a smart contract, which would
then be released to a recipient at a predetermined rate per second.

Sablier was born in 2019 when Paul and his co-founder, Gabriel Apostu, decided to build a protocol implementing the
ERC-1620 standard. The first iteration of Sablier was successfully deployed on Ethereum Mainnet in December 2019.

## What are the benefits?

Conventional lump-sum payments come with inherent challenges such as the need for trust between parties, slow processing
times, and susceptibility to errors. Asset streaming, or continuous by-the-second payments, addresses these issues and
offers additional benefits (see [Use Cases](/concepts/use-cases)).

First, streaming involves a significantly smaller degree of trust compared to lump-sum payments, as it eliminates the
need for advance payments. For instance, suppose you hire a remote worker to build a website for you, and they ask you
for an advance payment. A lump-sum payment is risky because there is no guarantee the worker will deliver the website as
promised. By streaming money to the worker instead, your potential loss is limited to the small amount streamed in the
short term. If the remote worker disappears, you can simply cancel the stream and reclaim any unstreamed funds.

Secondly, money streaming is substantially faster than lump-sum payments for evident reasons. Streaming transactions
settle in real-time, with small amounts of assets being released from the sender to the recipient every second. This
automates the payment process and ensures a continuous flow of funds.

Lastly, streaming is more secure than lump-sum payments, because it makes it possible to correct errors. Suppose you
accidentally started a steam worth 10 ETH to the wrong address. For example, if you accidentally initiated a stream
worth 10 ETH to an incorrect address, you can cancel the stream and reclaim the unstreamed Ether (e.g., recovering 9.99
of the 10 ETH). Conversely, recovering a lump-sum payment sent to the wrong address is not possible, unless the
recipient is willing to return it.

## Diversity of streams

Over time, we have come to realize that there is no one-size-fits-all streaming model that can address the diverse range
of use cases. In the upcoming section, we will explore the various types of streams supported by Sablier.
