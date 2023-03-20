---
id: "glossary"
sidebar_position: 6
title: "Glossary"
---

## Asset

Digital assets can exist in various forms, but the Sablier Protocol exclusively supports the streaming of ERC-20 assets.

The stream itself is represented as an NFT (ERC-721).

## Broker

A third-party entity that interacts with the Sablier Protocol on behalf of its users, who may charge service fees for
facilitating these interactions.

## Broker Fees

The fees collected by the broker upon creating a stream for their users.

## Cliff

The cut-off point for releasing assets. Prior to the cliff, the recipient cannot withdraw, though assets continue to
accrue in the stream.

## Core

Smart contracts that are considered foundational, and are essential for Sablier to exist. Upgrading to a new version of
core would require deploying an entirely new set of smart contracts, and would be considered a new version of the
Sablier Protocol.

## DeFi

Short for Decentralized Finance: an ecosystem of financial applications and services built on blockchain networks,
primarily Ethereum, that leverage smart contracts to enable trustless, permissionless, and transparent financial
transactions without relying on traditional intermediaries like banks or financial institutions.

## End Time

The time when a stream is scheduled to end.

## ERC-20

[ERC-20][erc-20] tokens are fungible tokens on Ethereum. Sablier supports all standard ERC-20 implementations, including
those with the
[missing return value bug](https://medium.com/coinmonks/missing-return-value-bug-at-least-130-tokens-affected-d67bf08521ca).

## ERC-721

[ERC-721][erc-721] tokens are non-fungible tokens ("NFTs") on Ethereum. Sablier streams are represented as NFTs.

## Ethereum

A global, open-source platform for decentralized applications.

## Ethereum Virtual Machine

The technical architecture of Ethereum, which many other blockchains have appropriated.

## Flash Loan

A way to access the entire liquidity of the Sablier Protocol within one transaction as long as the principal plus a
flash fee is returned. Sablier's flash loan implementation adheres to
[ERC-3156](https://eips.ethereum.org/EIPS/eip-3156).

## Foundry

[Foundry][foundry] is the application development toolkit that has been used to develop the Sablier Protocol.

## Linear

A linear stream has the same payment rate per second.

## Lockup

A type of stream in which the creator has to lock up a specified amount of assets.

## Milestones

A milestone is the time component of a segment, which itself is a component of a pro stream.

Milestones play a crucial role in the calculation of the custom streaming curve.

## Non-Linear

A non-linear stream features a payment rate per second that can vary over time.

Moreover, the streaming function is characterized by monotonicity, which implies that the total amount of assets
released by the stream can only increase over time and never decrease."

## Periphery

External smart contracts that are useful, but not required for Sablier to exist. New periphery contracts can always be
deployed without migrating streams.

## Pro

Refers to either (i) non-linear streams, or (ii) the smart contract that can create non-linear streams.

## PRBMath

[PRBMath][prb-math] is fixed-point arithmetic library used by Sablier Core to facilitate non-linear streaming and
compute percentage values.

## PRBProxy

[PRBProxy][prb-proxy] is a proxy contract that can compose transactions on behalf of the owner. PRBProxy is a key
component of Sablier Periphery.

## Protocol Fees

Fees that are rewarded to the Sablier Protocol itself.

## Range

The range of a linear stream consists of three components: (i) the start time, (ii) the cliff time, and (iii) the end
time.

The range of a pro stream is determined by combining (i) the start time, (ii) the segment milestones, and (iii) the end
time.

## Real-Time Finance

A term coined by us in 2019 to emphasize the wide-ranging use cases for the Sablier Protocol.

Since the withdrawable amounts in streams are updated every second, they embody the concept of real-time financial
transactions.

## Segment

An entity with three properties:

1. Amount
2. Exponent
3. Milestone

A segment is an essential component of a non-linear stream, as it facilitates the calculation of the custom streaming
curve.

## Start Time

The time when a stream is scheduled to start.

## Status

A stream can have one out of four possible statuses:

1. Null
2. Active
3. Canceled
4. Depleted

## Stream

A new financial primitive that permits by-the-second payments.

Currently, the Sablier Protocol offers a single type of stream called a lockup stream, in which the creator has to lock
up a specified amount of assets.

## Streaming

The action of making by-the-second payments.

## Vesting

One of the most popular use cases for streaming. The purpose of vesting is to delay gratification. Founders, investors,
and employees must wait a certain amount of time before being able to access tokens.

<!-- Links -->

[erc-20]: https://eips.ethereum.org/EIPS/eip-20
[erc-721]: https://eips.ethereum.org/EIPS/eip-721
[foundry]: https://github.com/foundry-rs/foundry
[prb-math]: https://github.com/PaulRBerg/prb-math
[prb-proxy]: https://github.com/PaulRBerg/prb-proxy
