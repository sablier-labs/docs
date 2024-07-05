---
id: "overview"
sidebar_position: 1
title: "Overview"
---

Sablier V2 is a binary smart contract system comprised of many contracts, libraries, and types, which together make Core
and Periphery.

- **Core** provides the fundamental token distribution logic of the Sablier V2 Protocol. It contains LockupLinear,
  LockupDynamic, and LockupTranched, the primary contracts that users will interact with.
- **Periphery** contracts interact with one or more Core contracts but are not part of the Core. They are an abstraction
  layer that enhance the security and the extensibility of the protocol without introducing upgradeability. Periphery
  plays a key role in creating Airstream campaigns.

Given the permissionless nature of the Sablier Protocol, the Periphery has no special privileges and is only a fraction
of possible periphery-like contracts. Users maintain the liberty to establish streams via the Core directly.

The design of the Sablier smart contracts draws inspiration from the architectural principles of
[Uniswap](https://docs.uniswap.org/).

## Core

> [**Core Source Code**](https://github.com/sablier-labs/v2-core/tree/v1.2.0)

Core consists of the distribution contracts (LockupLinear, LockupDynamic and LockupTranched), and an NFT descriptor.

### LockupLinear

> [**LockupLinear Reference**](./core/contract.SablierV2LockupLinear)

Creates and manages Lockup streams with a linear streaming function.

### LockupDynamic

> [**LockupDynamic Reference**](./core/contract.SablierV2LockupDynamic)

Creates and manages Lockup streams with dynamic streaming functions.

### LockupTranched

> [**LockupTranched Reference**](./core/contract.SablierV2LockupTranched)

Creates and manages Lockup streams with tranches.

### NFTDescriptor

> [**NFTDescriptor Reference**](./core/contract.SablierV2NFTDescriptor)

Generates the URI describing the Sablier V2 stream NFTs.

## Periphery

> [**Periphery Source Code**](https://github.com/sablier-labs/v2-periphery/tree/v1.2.0)

The Periphery is a collection of contracts meant to make the Sablier Protocol more modular while introducing
functionalities such as [Airstreams](/concepts/protocol/airstreams). It consists of BatchLockup and Airstream related
contracts (such as MerkleLockupFactory, MerkleLL and MerkleLT).

### BatchLockup

> [**BatchLockup Reference**](./periphery/contract.SablierV2BatchLockup)

### MerkleLockupFactory

> [**MerkleLockupFactory Reference**](./periphery/contract.SablierV2MerkleLockupFactory)

### MerkleLockupLL

> [**MerkleLockupLL Reference**](./periphery/contract.SablierV2MerkleLL)

### MerkleLockupLT

> [**MerkleLockupLT Reference**](./periphery/contract.SablierV2MerkleLT)
