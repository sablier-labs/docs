---
id: "governance"
sidebar_position: 10
title: "Governance"
---

The Protocol Admin is an account with exclusive access to specific functions. More concretely, the Admin is a collection
of multisig wallets and EOAs currently in control of Sablier Labs.

## Admins

Here's a table with the admins of the Sablier Protocol. Most of them are Safe multi-signature wallets.

| Chain           | Address                                                                                                                          |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| Mainnet         | [0x79Fb3e81aAc012c08501f41296CCC145a1E15844](https://etherscan.io/address/0x79Fb3e81aAc012c08501f41296CCC145a1E15844)            |
| Abstract        | [0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F](https://abscan.org/address/0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F)              |
| Arbitrum One    | [0xF34E41a6f6Ce5A45559B1D3Ee92E141a3De96376](https://arbiscan.io/address/0xF34E41a6f6Ce5A45559B1D3Ee92E141a3De96376)             |
| Avalanche       | [0x4735517616373c5137dE8bcCDc887637B8ac85Ce](https://snowtrace.io/address/0x4735517616373c5137dE8bcCDc887637B8ac85Ce)            |
| Base            | [0x83A6fA8c04420B3F9C7A4CF1c040b63Fbbc89B66](https://basescan.org/address/0x83A6fA8c04420B3F9C7A4CF1c040b63Fbbc89B66)            |
| Blast           | [0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F](https://blastscan.io/address/0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F)            |
| BNB Smart Chain | [0x6666cA940D2f4B65883b454b7Bc7EEB039f64fa3](https://bscscan.com/address/0x6666cA940D2f4B65883b454b7Bc7EEB039f64fa3)             |
| Chiliz          | [0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F](https://chiliscan.com/address/0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F)           |
| Core Dao        | [0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F](https://scan.coredao.org/address/0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F)        |
| Form            | [0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F](https://explorer.form.network/address/0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F)   |
| Gnosis          | [0x72ACB57fa6a8fa768bE44Db453B1CDBa8B12A399](https://gnosisscan.io/address/0x72ACB57fa6a8fa768bE44Db453B1CDBa8B12A399)           |
| IoTeX           | [0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F](https://iotexscan.io/address/0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F)            |
| LightLink       | [0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F](https://phoenix.lightlink.io/address/0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F)    |
| Linea           | [0x72dCfa0483d5Ef91562817C6f20E8Ce07A81319D](https://lineascan.build/address/0x72dCfa0483d5Ef91562817C6f20E8Ce07A81319D)         |
| Mode            | [0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F](https://explorer.mode.network/address/0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F)   |
| Morph           | [0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F](https://explorer.morphl2.io/address/0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F)     |
| Optimism        | [0x43c76FE8Aec91F63EbEfb4f5d2a4ba88ef880350](https://optimistic.etherscan.io/address/0x43c76FE8Aec91F63EbEfb4f5d2a4ba88ef880350) |
| Polygon         | [0x40A518C5B9c1d3D6d62Ba789501CE4D526C9d9C6](https://polygonscan.com/address/0x40A518C5B9c1d3D6d62Ba789501CE4D526C9d9C6)         |
| Scroll          | [0x0F7Ad835235Ede685180A5c611111610813457a9](https://scrollscan.com/address/0x0F7Ad835235Ede685180A5c611111610813457a9)          |
| Superseed       | [0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F](https://explorer.superseed.xyz/address/0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F)  |
| Taiko           | [0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F](https://taikoscan.io/address/0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F)            |
| Tangle          | [0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F](https://explorer.tangle.tools/address/0xb1bEF51ebCA01EB12001a639bDBbFF6eEcA12B9F)   |
| zkSync Era      | [0xaFeA787Ef04E280ad5Bb907363f214E4BAB9e288](https://era.zksync.network/address/0xaFeA787Ef04E280ad5Bb907363f214E4BAB9e288)      |

## Lockup

Admin has the following permissions on each chain where `Lockup` is deployed:

| Permission         | Function                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| Allow to Hook      | [allowToHook](../reference/lockup/contracts/abstracts/abstract.SablierLockupBase#allowtohook)           |
| Set NFT Descriptor | [setNFTDescriptor](../reference/lockup/contracts/abstracts/abstract.SablierLockupBase#setnftdescriptor) |

## MerkleFactory

Admin has the following permissions on each chain where `MerkleFactory` is deployed:

| Permission       | Function                                                                                       |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| Reset Custom Fee | [resetCustomFee](../reference/airdrops/contracts/contract.SablierMerkleFactory#resetcustomfee) |
| Set Custom Fee   | [setCustomFee](../reference/airdrops/contracts/contract.SablierMerkleFactory#setcustomfee)     |
| Set Default Fee  | [setDefaultFee](../reference/airdrops/contracts/contract.SablierMerkleFactory#setdefaultfee)   |

## Flow

Admin has the following permissions on each chain where `Flow` is deployed:

| Permission               | Function                                                                                                        |
| ------------------------ | --------------------------------------------------------------------------------------------------------------- |
| Collect Protocol Revenue | [collectProtocolRevenue](../reference/flow/contracts/abstracts/abstract.SablierFlowBase#collectprotocolrevenue) |
| Recover ERC20 token      | [recover](../reference/flow/contracts/abstracts/abstract.SablierFlowBase#recover)                               |
| Set NFT Descriptor       | [setNFTDescriptor](../reference/flow/contracts/abstracts/abstract.SablierFlowBase#setnftdescriptor)             |
| Set Protocol Fee         | [setProtocolFee](../reference/flow/contracts/abstracts/abstract.SablierFlowBase#setprotocolfee)                 |

## Trustlessness

Despite having an admin, the Sablier Protocol remains trustless. Here's why:

1. The protocol is permissionless, i.e. it can be freely accessed by anyone with an Internet connection.
2. The protocol is persistent, i.e. the admin cannot pause it.
3. The streaming logic is non-upgradeable, i.e. the admin cannot tamper with the streams created by users.
4. There are no escape hatches that allow the admin to claim user funds.
5. There is a hard-coded upper limit of 10% to the fees that the admin can charge.

## Timelocks

The parameter changes that can be effected are NOT subject to a timelock. This means that the admin can execute any of
the functions listed above at any time.

## Governance

As a startup, Sablier has to deal with uncertainty regarding:

1. Protocol-market fit
2. Smart contract security

Attaining success in these areas is no easy feat, and as such, decentralizing the protocol's governance will not be an
initial priority.

Nonetheless, we believe that progressive decentralization is the most effective approach to scaling a smart contract
protocol. As the protocol matures, we will decentralize its governance incrementally.
