---
id: "glossary"
sidebar_position: 5
title: "Glossary"
---

## Asset

Digital assets can exist in various forms, but the Sablier Protocol exclusively supports the streaming of ERC-20 assets.

The stream itself is represented as an NFT (ERC-721).

## Broker

A third-party entity that interacts with the Sablier Protocol on behalf of its users, who may charge service fees for
facilitating these interactions.

## Broker fees

The fees collected by the broker upon creating a stream for their users.

## Cliff

The cut-off point for releasing assets. Prior to the cliff, the recipient cannot withdraw, though assets continue to
accrue in the stream.

## Core

Sablier contracts that are considered foundational, and are essential for Sablier to exist. Upgrading to a new version
of core would require deploying an entirely new set of smart contracts, and would be considered a new version of the
Sablier Protocol.

## DeFi

Short for Decentralized Finance: an ecosystem of financial applications and services built on blockchain networks,
primarily Ethereum, that leverage smart contracts to enable trustless, permissionless, and transparent financial
transactions without relying on traditional intermediaries like banks or financial institutions.

## End time

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

## Foundry

[Foundry][foundry] is the application development toolkit that has been used to develop the Sablier Protocol.

## Gas Fee

[Gas fees](https://www.investopedia.com/terms/g/gas-ethereum.asp) are transaction fees paid to the blockchain validators
in native tokens such as ETH. Sablier Labs does not take any cut from this.

Gas is paid only when streams are created, canceled, transferred, or withdrawn from. It does not accrue in real-time.

## Lockup

A term coined by us to refer to the requirement of locking up assets in order to create a stream.

## Lockup Dynamic

A Lockup stream with a payment rate per second that can vary over time.

## Lockup Linear

A Lockup stream with a constant payment rate per second.

## Lockup Tranched

A Lockup stream with a payments in tranches.

## Timestamp

A timestamp is the time component of a stream. In lockup linear, it represents start time, cliff time and end time
whereas in lockup dynamic and lockup tranched, it plays a crucial role in the calculation of streaming curves.

## Monotonicity

A protocol invariant that states that the total amount of assets released by the stream can only increase over time and
never decrease.

## Periphery

Sablier contracts that are useful, but not required for Sablier to exist. New periphery contracts can always be deployed
without migrating streams.

## Protocol Admin

An entity with exclusive access to specific functions of the protocol.

## Renounce

A renounced stream is a stream that cannot be canceled anymore.

## PRBMath

[PRBMath][prb-math] is fixed-point arithmetic library used by Sablier Core to compute percentage values and the
exponents used in Lockup Dynamic.

## Real-time finance

A term coined by us in 2019 to emphasize the wide-ranging use cases for the Sablier Protocol.

Since the withdrawable amounts in streams are updated every second, they embody the concept of real-time financial
transactions.

## Segment

A data object that encapsulates the following three properties:

1. Amount
2. Exponent
3. Timestamp

Segments are an essential component of Lockup Dynamic, as they facilitate the calculation of the custom streaming curve.

## Start time

The time when a stream is scheduled to start.

## Status

A stream can have one out of six possible statuses:

1. Null
2. Pending
3. Streaming
4. Settled
5. Canceled
6. Depleted

## Stream

A new financial primitive that permits by-the-second payments.

Currently, the Sablier Protocol offers a single type of stream called a lockup stream, in which the creator has to lock
up a specified amount of assets.

## Streaming

By-the-second payments.

## Tranche

A data object that encapsulates the following two properties:

1. Amount
2. Timestamp

Tranches are an essential component of Lockup Tranched, as they facilitate the calculation of the custom streaming
curve.

## Vesting

One of the most popular use cases for streaming today.

The purpose of vesting is to delay gratification. Founders, investors, and employees must wait a certain amount of time
before being able to access tokens.

<!-- Links -->

[erc-20]: https://eips.ethereum.org/EIPS/eip-20
[erc-721]: https://eips.ethereum.org/EIPS/eip-721
[foundry]: https://github.com/foundry-rs/foundry
[prb-math]: https://github.com/PaulRBerg/prb-math
[prb-proxy]: https://github.com/PaulRBerg/prb-proxy
