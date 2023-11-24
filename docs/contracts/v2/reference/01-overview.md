---
id: "overview"
sidebar_position: 1
title: "Overview"
---

Sablier V2 is a binary smart contract system comprised of many contracts, libraries, and types, which together make Core
and Periphery.

- **Core** provides the fundamental streaming logic of the Sablier V2 Protocol. It contains LockupLinear and
  LockupDynamic, which are the primary contracts that users will interact with.
- **Periphery** contracts interact with one or more Core contracts but are not part of the Core. They are an abstraction
  layer that enhance the security and the extensibility of the protocol without introducing upgradeability.

In the Sablier Interface, the Periphery is used to handle stream sender interactions, such as creating, canceling, and
renouncing streams. The Core handles all stream recipient interactions, such as withdrawing from streams.

Given the permissionless nature of the Sablier Protocol, the Periphery has no special privileges and is only a fraction
of possible periphery-like contracts. Users maintain the liberty to establish streams via the Core directly, although
doing so renders those streams incompatible with the Sablier Interface.

The design of the Sablier smart contracts draws inspiration from the architectural principles of
[Uniswap](https://docs.uniswap.org/).

## Core

> [**Core Source Code**](https://github.com/sablier-labs/v2-core)

Core contains the streaming contracts LockupLinear and LockupDynamic, an NFT descriptor, and the Comptroller (an
on-chain configuration module).

### LockupLinear

> [**LockupLinear Reference**](./core/contract.SablierV2LockupLinear)

Creates and manages Lockup streams with a linear streaming function.

### LockupDynamic

> [**LockupDynamic Reference**](./core/contract.SablierV2LockupDynamic)

Creates and manages Lockup streams with dynamic streaming functions.

### NFTDescriptor

> [**NFTDescriptor Reference**](./core/contract.SablierV2NFTDescriptor)

Generates the URI describing the Sablier V2 stream NFTs.

### Comptroller

> [**Comptroller Reference**](./core/contract.SablierV2Comptroller)

This contract is in charge of the Sablier V2 protocol configuration, handling such values as the protocol fees.

## Periphery

> [**Periphery Source Code**](https://github.com/sablier-labs/v2-periphery)

The Periphery is a collection of contracts meant to make the Sablier Protocol more modular and more secure while
introducing functionalities such as Airstream campaigns.

The word "Airstream" is a portmanteau of "airdrop" and "stream". This concept is implemented by the `MerkleStreamer`
contract, which enables `ERC20` token creators to automatically distribute tokens to their investors and community
members over a predetermined period.

## MerkleStreamer

> [**MerkleStreamer Reference**](./periphery/contract.SablierV2MerkleStreamerLL)
