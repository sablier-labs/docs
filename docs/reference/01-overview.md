---
id: "overview"
sidebar_position: 1
title: "Overview"
---

All Sablier protocols are a binary smart contract system comprised of many abstract contracts, libraries, and types. The
design of the Sablier smart contracts draws inspiration from the architectural principles of
[Uniswap](https://docs.uniswap.org/).

This section provides a detailed overview of the Sablier smart contracts, their designs, control flows and contract
references.

## Lockup

> [**Lockup Source Code**](https://github.com/sablier-labs/lockup/tree/release)

The Lockup repo consists of the Sablier Lockup contract, public libraries, Batch Lockup contract and an NFT descriptor.

### BatchLockup

> [**BatchLockup Reference**](./lockup/contracts/contract.SablierBatchLockup)

Creates multiple streams in a single transaction.

### Libraries

> [**Helpers Library**](./lockup/contracts/libraries/library.Helpers)

Library to validate input parameters across lockup streams.

> [**VestingMath Library**](./lockup/contracts/libraries/library.VestingMath)

Library to calculate vested amount across lockup streams.

### NFTDescriptor

> [**NFTDescriptor Reference**](./lockup/contracts/contract.LockupNFTDescriptor)

Generates the URI describing the Sablier Lockup stream NFTs.

### SablierLockup

> [**SablierLockup Reference**](./lockup/contracts/contract.SablierLockup)

Creates and manages Lockup streams with three different streaming functions.

## Merkle Airdrops

> [**Merkle Airdrops Source Code**](https://github.com/sablier-labs/airdrops/tree/release)

The Merkle Airdrops repo is a collection of contracts to create various kinds of airdrop campaigns. Some of these
campaigns make use of the Lockup protocol to create what we call [Airstreams](/concepts/merkle-airdrops). This repo
consists of airdrops related contracts such as MerkleFactory, MerkleInstant, MerkleLL, and MerkleLT.

### MerkleFactory

> [**MerkleFactory Reference**](./airdrops/contracts/contract.SablierMerkleFactory)

Factory contract to deploy Merkle airdrop campaigns.

### MerkleInstant

> [**MerkleInstant Reference**](./airdrops/contracts/contract.SablierMerkleInstant)

Enables airdrop distributions where the tokens are claimed directly to the users' wallets.

### MerkleLL

> [**MerkleLL Reference**](./airdrops/contracts/contract.SablierMerkleLL)

Enables airdrops with a vesting period powered by the Lockup Linear distribution model.

### MerkleLT

> [**MerkleLT Reference**](./airdrops/contracts/contract.SablierMerkleLT)

Enables airdrops with a vesting period powered by the Lockup Tranched distribution model.

## Flow

> [**Flow Source Code**](https://github.com/sablier-labs/flow/tree/release)

The Flow repo consists of the Sablier Flow contract, and an NFT descriptor.

### NFTDescriptor

> [**FlowNFTDescriptor Reference**](./flow/contracts/contract.FlowNFTDescriptor)

Generates the URI describing the Sablier Flow stream NFTs which, currently, is the Sablier logo.

### SablierFlow

> [**SablierFlow Reference**](./flow/contracts/contract.SablierFlow)

Creates and manages payment streams.
