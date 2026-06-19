---
id: "streaming"
sidebar_position: 2
title: "Token Distribution"
---

Token distribution is the act of releasing tokens to recipients over time rather than all at once. In Sablier, a stream
is a digital agreement for distributing financial assets over time. Today, Sablier specializes that primitive for ERC-20
token distribution on EVM chains.

Streaming is Sablier's flagship distribution mode: a stream makes tokens withdrawable continuously, often every second.
The broader protocol also includes other distribution systems, including Merkle Airdrops and Bob, so streaming is a core
feature rather than the whole product.

## Brief history

Andreas Antonopoulos introduced the concept of money streaming in his keynote talk
[Bitcoin, Lightning, and Streaming Money](https://www.youtube.com/watch?v=gF_ZQ_eijPs), held at a Bitcoin meetup
in 2016. He discussed it within the context of the Lightning Network, but the idea can be applied to any cryptocurrency
platform.

Inspired by Antonopoulos' presentation, Sablier co-founder Paul Berg published
[ERC-1620](https://eips.ethereum.org/EIPS/eip-1620) in November 2018, proposing a standard for payment streams on the
Ethereum blockchain. The standard required users to lock a specified amount of funds in a smart contract, which would
then be released to a recipient at a predetermined rate per second.

Sablier was born in 2019 when Paul and his co-founder, Gabriel Apostu, decided to build a protocol implementing the
ERC-1620 standard. The first iteration of Sablier was successfully deployed on Ethereum Mainnet in December 2019.

In 2024, the original Sablier protocol was renamed to Lockup when Flow was introduced.

## What are the benefits?

Conventional lump-sum payments come with inherent challenges such as the need for trust between parties, slow processing
times, and susceptibility to errors. Token distribution through streams addresses these issues and offers additional
benefits (see [Use Cases](/concepts/use-cases)).

First, distributing funds through a stream involves a significantly smaller degree of trust compared to lump-sum
payments, as it eliminates the need for advance payments. For instance, suppose you hire a remote worker to build a
website for you, and they ask you for an advance payment. A lump-sum payment is risky because there is no guarantee the
worker will deliver the website as promised. By paying the worker through a stream instead, your potential loss is
limited to the small amount released in the short term. If the remote worker disappears, you can simply cancel the
stream and reclaim any unstreamed funds.

Secondly, streams are substantially faster than lump-sum payments for evident reasons. Withdrawable amounts update in
real time, with small amounts of tokens being released from the sender to the recipient every second. This automates the
payment process and ensures a continuous flow of funds.

Lastly, a stream is more secure than a lump-sum payment because it makes some errors recoverable. For example, if you
accidentally initiated a stream worth 10 ETH to an incorrect address, you can cancel the stream and reclaim the
unstreamed Ether (e.g., recovering 9.99 of the 10 ETH). Conversely, recovering a lump-sum payment sent to the wrong
address is not possible, unless the recipient is willing to return it.

## Diversity of streams

Over time, we have come to realize that there is no one-size-fits-all distribution model that can address the diverse
range of use cases. In the upcoming section, we will explore the various token distribution curves supported by Lockup
and Flow.

But first, let's dive into the use cases.
