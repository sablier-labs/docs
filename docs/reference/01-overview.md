---
id: "overview"
sidebar_position: 1
title: "Overview"
---

Both Lockup and Flow contracts are a binary smart contract system comprised of many contracts, libraries, and types.

Although Flow is a separate protocol, it shares many similarities with Lockup. One key difference between the two is
that Flow consists of a single contract whereas Lockup consists of multiple contracts. The Lockup contracts are divided
into two categories:

- **Lockup Core** provides the fundamental token distribution logic of the Lockup Protocol. It contains LockupLinear,
  LockupDynamic, and LockupTranched, the primary contracts that users will interact with.
- **Lockup Periphery** contracts interact with one or more Lockup Core contracts but are not part of the Lockup Core.
  They are an abstraction layer that enhance the security and the extensibility of the protocol without introducing
  upgradeability. Lockup Periphery plays a key role in creating Airstream campaigns.

Given the permissionless nature of the Lockup Protocol, the Periphery has no special privileges and is only a fraction
of possible periphery-like contracts. Users maintain the liberty to establish streams via the Core directly.

The design of the Sablier smart contracts draws inspiration from the architectural principles of
[Uniswap](https://docs.uniswap.org/).

## Lockup Core

> [**Core Source Code**](https://github.com/sablier-labs/v2-core/tree/v1.2.0)

Core consists of the distribution contracts (LockupLinear, LockupDynamic and LockupTranched), and an NFT descriptor.

### LockupLinear

> [**LockupLinear Reference**](./lockup/core/contract.SablierV2LockupLinear)

Creates and manages Lockup streams with a linear streaming function.

### LockupDynamic

> [**LockupDynamic Reference**](./lockup/core/contract.SablierV2LockupDynamic)

Creates and manages Lockup streams with dynamic streaming functions.

### LockupTranched

> [**LockupTranched Reference**](./lockup/core/contract.SablierV2LockupTranched)

Creates and manages Lockup streams with tranches.

### NFTDescriptor

> [**NFTDescriptor Reference**](./lockup/core/contract.SablierV2NFTDescriptor)

Generates the URI describing the Sablier Lockup stream NFTs.

## Lockup Periphery

> [**Periphery Source Code**](https://github.com/sablier-labs/v2-periphery/tree/v1.2.0)

The Periphery is a collection of contracts meant to make the Lockup Protocol more modular while introducing
functionalities such as [Airstreams](/concepts/lockup/airstreams). It consists of BatchLockup and Airstream related
contracts (such as MerkleLockupFactory, MerkleLL and MerkleLT).

### BatchLockup

> [**BatchLockup Reference**](./lockup/periphery/contract.SablierV2BatchLockup)

### MerkleLockupFactory

> [**MerkleLockupFactory Reference**](./lockup/periphery/contract.SablierV2MerkleLockupFactory)

### MerkleLockupLL

> [**MerkleLockupLL Reference**](./lockup/periphery/contract.SablierV2MerkleLL)

### MerkleLockupLT

> [**MerkleLockupLT Reference**](./lockup/periphery/contract.SablierV2MerkleLT)

## Flow

Coming soon.
