---
id: "sablier-protocol"
sidebar_position: 2
title: "The Sablier Protocol"
---

Sablier is a cryptoasset streaming protocol built with [Ethereum](https://ethereum.org/) smart contracts, designed to
enable by-the-second payments for cryptocurrencies (specifically
[ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) assets). The protocol employs a set of
persistent and non-upgradable smart contracts that prioritize security, censorship resistance, self-custody, and
functionality without the need for trusted intermediaries who may selectively restrict access.

Currently, there are two major versions of the protocol: V1, which is available under GNU V3, and V2, which is licensed
under BUSL-1.1. Both protocol versions are open-source and can be accessed on Sablier's
[GitHub page](https://github.com/sablierhq). Detailed technical reference for each version can be found in the
[Contracts](/contracts/v2/overview) section of this website.

As long as the Ethereum blockchain continues to exist, every version of Sablier that gets deployed will operate
continuously and without interruption, with a guarantee of 100% uptime.

:::info

Sablier is the first asset streaming protocol ever built in crypto, tracing its roots back to 2019.

:::

## How does Sablier differ from traditional payment systems?

To understand the unique characteristics of Sablier, it is helpful to examine two aspects: the concept of streaming as
an alternative to conventional payment methods, and the permissionless nature of the protocol compared to traditional
systems.

### Streaming vs conventional payments

Traditional payment systems generally involve lump-sum transfers, which rely on trust between parties, have slow
processing times, and are prone to errors. In the context of bank transfers, payments are also subject to substantial
fees and can face delays due to intermediaries.

By contrast, Sablier introduces the concept of asset streaming, enabling users to make continuous, real-time payments on
a per-second basis. This innovative approach enables seamless, frictionless transactions and promotes increased
financial flexibility for users, businesses, and other entities. Sablier makes the passage of time itself the
trust-binding mechanism, unlocking business opportunities that were previously unavailable.

A good mental model to contrast streaming with conventional payment models is to view the former as "real-time finance"
or "continuous finance", and the latter as of "discrete finance".

### Permissionless systems

Sablier is rooted in the essential ideas of open access and immutability, deriving inspiration from Ethereum's
foundational principles and the core values of the DeFi[^1] movement. These concepts are crucial in shaping a future
where financial services are accessible to everyone, irrespective of their geographical location or economic standing,
without prejudice or exposure to counterparty risks.

The permissionless design ensures that the protocol's services are open to the public, without any restrictions on who
can use them. Users have the liberty to establish new streams with any ERC-20 asset, or interact with existing streams
as they wish. This feature stands in sharp contrast to conventional financial services that frequently impose
restrictions based on factors such as location, financial status, or age.

As an immutable protocol, Sablier is not upgradeable, meaning that no party can pause the contracts, reverse
transactions, or alter the users' streams in any way. This ensures the system remains transparent, secure, and resistant
to manipulation or abuse.

It is worth noting that the protocol admin has the right (but not the obligation) to impose a fee on every stream
created using specific ERC-20 assets. However, this capability is known to all participants in advance, and to avert
misuse, the fee percentage is restricted to a range of 0% to 10%.

## Where can I find more information?

For more details on the Sablier Protocol, its features, and potential use cases, explore this documentation site and
visit the official [Sablier website](https://sablier.com) as well.

[^1]:
    Short for Decentralized Finance: an ecosystem of financial applications and services built on blockchain networks,
    primarily Ethereum, that leverage smart contracts to enable trustless, permissionless, and transparent financial
    transactions without relying on traditional intermediaries like banks or financial institutions.
