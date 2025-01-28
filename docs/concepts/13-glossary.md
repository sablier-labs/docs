---
id: "glossary"
sidebar_position: 13
title: "Glossary"
---

## Broker

A third-party entity that interacts with the Sablier Protocols on behalf of its users, who may charge service fees for
facilitating these interactions.

## Broker Fee

The fee collected, in streaming tokens, by the broker upon creating a stream for their users.

## Claim Fee

The minimum fee, in native tokens, required for claiming an airdrop from a Merkle Airdrop campaign.

## DeFi

Short for Decentralized Finance: an ecosystem of financial applications and services built on blockchain networks,
primarily Ethereum, that leverage smart contracts to enable trustless, permissionless, and transparent financial
transactions without relying on traditional intermediaries like banks or financial institutions.

## ERC-20

[ERC-20][erc-20] tokens are fungible tokens on Ethereum. Sablier supports all standard ERC-20 implementations, including
those with the
[missing return value bug](https://medium.com/coinmonks/missing-return-value-bug-at-least-130-tokens-affected-d67bf08521ca).

## ERC-721

[ERC-721][erc-721] tokens are non-fungible tokens ("NFTs") on Ethereum. Both Lockup and Flow streams are represented as
NFTs.

## Ethereum

A global, open-source platform for decentralized applications.

## Ethereum Virtual Machine

The technical architecture of Ethereum, which many other blockchains have appropriated.

## Flow

A term coined by us for our debt tracking protocol that tracks tokens owed between two parties, enabling open-ended
token streaming.

### Covered debt

The amount of tokens that can be withdrawn by the recipient.

### Flow Protocol

Smart contracts that are considered foundational, and are essential for Flow streams to exist. Upgrading to a new
version of Flow would require deploying an entirely new set of smart contracts, and would be considered a new version of
the Flow protocol.

### Rate Per Second

The amount of tokens that are streamed per second in a Flow stream.

### Status

A Flow stream can have one out of six possible statuses:

1. NULL
1. PAUSED_INSOLVENT
1. PAUSED_SOLVENT
1. STREAMING_INSOLVENT
1. STREAMING_SOLVENT
1. VOIDED

### Uncovered debt

The amount of tokens that sender owes to the stream.

## Foundry

[Foundry][foundry] is the application development toolkit that has been used to develop the Sablier Protocols.

## Gas Fee

[Gas fees](https://www.investopedia.com/terms/g/gas-ethereum.asp) are transaction fees paid to the blockchain validators
in native tokens such as ETH. Sablier Labs does not take any cut from this.

Gas is paid only when streams are created, canceled, transferred, or withdrawn from. It does not accrue in real-time.

## Lockup

A term coined by us to refer to the requirement of locking up tokens in order to create a stream.

### Allow List

A list of smart contract recipients that are authorized to be run by the Lockup protocol upon withdraw and cancel.

The stream itself is represented as an NFT (ERC-721).

### Cliff Time

The cut-off point for releasing tokens. Prior to the cliff, the recipient cannot withdraw, though tokens continue to
accrue in the stream.

### Distribution Model

A distribution model represents the streaming function used to create lockup streams. There are three types of models
supported by the Lockup protocol:

1. Linear
2. Dynamic
3. Tranched

### Dynamic Model

A Lockup [distribution model](#distribution-model) with a streaming rate per second that can vary over time.

### End Time

The time when a stream is scheduled to end.

### Linear Model

A Lockup [distribution model](#distribution-model) with a constant streaming rate per second.

### Lockup Protocol

Smart contracts that are considered foundational, and are essential for Lockup streams to exist. Upgrading to a new
version of Lockup would require deploying an entirely new set of smart contracts, and would be considered a new version
of the Lockup protocol.

### Monotonicity

A protocol invariant that states that the total amount of tokens released by the stream can only increase over time and
never decrease.

### Renounce

A renounced stream is a stream that cannot be canceled anymore.

### Segment

A data object that encapsulates these three properties:

1. Amount
2. Exponent
3. Timestamp

Segments are an essential component of Dynamic [distribution model](#distribution-model), as they facilitate the
calculation of the custom streaming curve.

##3 Start time

The time when a stream is scheduled to start.

### Status

A Lockup stream can have one out of six possible statuses:

1. NULL
2. PENDING
3. STREAMING
4. SETTLED
5. CANCELED
6. DEPLETED

### Timestamp

Lockup timestamp represents start time and end time.

### Tranche

A data object that encapsulates these two properties:

1. Amount
2. Timestamp

Tranches are an essential component of Tranched [distribution model](#distribution-model), as they facilitate the
calculation of the custom streaming curve.

### Tranched Model

A Lockup [distribution model](#distribution-model) with a streaming in discrete tranches.

### Unlock Amounts

A data object that encapsulates amounts to be unlocked at the start of the stream and at the cliff of the stream.

### Vesting Math

[A public library](/reference/lockup/contracts/libraries/library.VestingMath) used by the Lockup protocol to calculate
the amount of vested tokens at any given time.

## Merkle Airdrop

An onchain distribution of tokens that employs a Merkle tree data structure to perform airdrop eligibility checks.

## Merkle Tree

Aa data structure used to store hashes of the recipients airdrop allocations in Merkle Airdrop Campaigns.

## PRBMath

[PRBMath][prb-math] is fixed-point arithmetic library used by Sablier protocols.

## Protocol Admin

An entity with exclusive access to specific functions of the protocol.

## Real-time finance

A term coined by us in 2019 to emphasize the wide-ranging use cases for the Sablier Protocols.

Since the withdrawable amounts in streams are updated every second, they embody the concept of real-time financial
transactions.

## Stream

A new financial primitive that permits by-the-second payments.

Currently, Sablier offers two streaming protocols called Lockup and Flow. In Lockup, the creator has to lock up a
specified amount of tokens whereas in Flow protocol, creator is not required to lock up any amount of tokens.

## Streaming

By-the-second payments.

## Token

Digital tokens can exist in various forms, but the Sablier Protocols exclusively supports the streaming of ERC-20
tokens.

## Vesting

One of the most popular use cases for streaming today.

The purpose of vesting is to delay gratification. Founders, investors, and employees must wait a certain amount of time
before being able to access tokens.

## Withdraw Fee

The fee collected, in native tokens, by the Sablier interface for withdrawing from streams.

<!-- Links -->

[erc-20]: https://eips.ethereum.org/EIPS/eip-20
[erc-721]: https://eips.ethereum.org/EIPS/eip-721
[foundry]: https://github.com/foundry-rs/foundry
[prb-math]: https://github.com/PaulRBerg/prb-math
