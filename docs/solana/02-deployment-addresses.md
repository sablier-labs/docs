---
id: "deployment-addresses"
sidebar_position: 2
title: "Deployment Addresses"
---

This page contains the deployment addresses for the first SolSab release.

:::important

Unlike EVM, the programs here adhere to the best practices of Solana development which includes upgradeability.

:::

## Deployment Addresses

All programs are deployed using
[Anchor's verifiable builds](https://www.anchor-lang.com/docs/references/verifiable-builds) for deterministic bytecode.

|  Chain  |   Protocol    |                                                               Program ID                                                               |
| :-----: | :-----------: | :------------------------------------------------------------------------------------------------------------------------------------: |
| Mainnet |    Lockup     |        [4EauRKrNErKfsR4XetEZJNmvACGHbHnHV4R5dvJuqupC](https://solscan.io/account/4EauRKrNErKfsR4XetEZJNmvACGHbHnHV4R5dvJuqupC)         |
| Mainnet | MerkleInstant |        [7XrxoQejBoGouW4V3aozTSwub7xSDjYqB4Go7YLjF9rV](https://solscan.io/account/7XrxoQejBoGouW4V3aozTSwub7xSDjYqB4Go7YLjF9rV)         |
| Devnet  |    Lockup     | [4EauRKrNErKfsR4XetEZJNmvACGHbHnHV4R5dvJuqupC](https://solscan.io/account/4EauRKrNErKfsR4XetEZJNmvACGHbHnHV4R5dvJuqupC?cluster=devnet) |
| Devnet  | MerkleInstant | [7XrxoQejBoGouW4V3aozTSwub7xSDjYqB4Go7YLjF9rV](https://solscan.io/account/7XrxoQejBoGouW4V3aozTSwub7xSDjYqB4Go7YLjF9rV?cluster=devnet) |

The programs are verified using [Solana Verify CLI](https://github.com/Ellipsis-Labs/solana-verifiable-build/) and the
verification status can be found on the Osec API:

- [Lockup](https://verify.osec.io/status/4EauRKrNErKfsR4XetEZJNmvACGHbHnHV4R5dvJuqupC)
- [MerkleInstant](https://verify.osec.io/status/7XrxoQejBoGouW4V3aozTSwub7xSDjYqB4Go7YLjF9rV)
