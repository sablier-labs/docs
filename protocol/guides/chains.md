---
id: chains
title: Chains
sidebar_position: 3
---

Depending on what [EVM](https://ethereum.org/en/developers/docs/evm/) chains you want to use Sablier on, you will need to use a different contract address. Sablier runs on top of one single master contract that manages all streams.

### Official deployments

Official deployments are deployments made by the Sablier team and supported in the [official user interface](https://pay.sablier.finance).

| Chain            | Address                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Ethereum Mainnet | [0xCD18eAa163733Da39c232722cBC4E8940b1D8888](https://etherscan.io/address/0xCD18eAa163733Da39c232722cBC4E8940b1D8888)                |
| Arbitrum One     | [0xaDB944B478818d95659067E70D2e5Fc43Fa3eDe9](https://arbiscan.io/address/0xaDB944B478818d95659067E70D2e5Fc43Fa3eDe9)                 |
| Avalanche        | [0x73f503fad13203C87889c3D5c567550b2d41D7a4](https://snowtrace.io/address/0x73f503fad13203C87889c3D5c567550b2d41D7a4)                |
| BSC Mainnet      | [0x05BC7f5fb7F248d44d38703e5C921A8c16825161](https://bscscan.com/address/0x05BC7f5fb7F248d44d38703e5C921A8c16825161)                 |
| Optimism         | [0x6C5927c0679e6d857E87367bb635decbcB20F31c](https://optimistic.etherscan.io/address/0x6C5927c0679e6d857E87367bb635decbcB20F31c)     |
| Polygon Mainnet  | [0xAC18EAB6592F5fF6F9aCf5E0DCE0Df8E49124C06](https://polygonscan.com/address/0xAC18EAB6592F5fF6F9aCf5E0DCE0Df8E49124C06)             |
| Ronin            | [0xDe9dCc27aa1552d591Fc9B9c21881feE43BD8118](https://explorer.roninchain.com/address/ronin:de9dcc27aa1552d591fc9b9c21881fee43bd8118) |
| Goerli           | [0xFc7E3a3073F88B0f249151192812209117C2014b](https://goerli.etherscan.io/address/0xFc7E3a3073F88B0f249151192812209117C2014b)         |
| Rinkeby          | [0xC1f3af5DC05b0C51955804b2afc80eF8FeED67b9](https://rinkeby.etherscan.io/address/0xC1f3af5DC05b0C51955804b2afc80eF8FeED67b9)        |
| Kovan            | [0x5eb34b5d5c75ce2119078e5b3f6a3f30e457e46b](https://kovan.etherscan.io/address/0x5eb34b5d5c75ce2119078e5b3f6a3f30e457e46b)          |
| Ropsten          | [0xcd79FFea8e2E6eFDAe92554Fdd1F154bB7c62D0f](https://ropsten.etherscan.io/address/0xcd79FFea8e2E6eFDAe92554Fdd1F154bB7c62D0f)        |

### Unofficial deployments

Unofficial deployments are deployments made by an external team and not supported in the [official user interface](https://pay.sablier.finance).

| Chain | Address                                                                                                                | Deployer                                   |
| ----- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| IoTeX | [0x93Efd750a7F589f9FE26408a91e15587a88c4E78](https://iotexscout.io/address/0x93Efd750a7F589f9FE26408a91e15587a88c4E78) | [IoTeX team](https://twitter.com/iotex_io) |

### Testnet Tokens

If you want to use the Sablier interfaces on a testnet, you need to get some testnet DAI first. To do this, you have to
go to the Etherscan page of the associated token, tap the "Write Contract" tab, connect your Ethereum wallet and call
the `mint` method.

Note that the testnet token has 18 decimals, so you may want to use a [unit converter](https://tools.deth.net/token-unit-conversion).

| Chain      | Network | Ethereum address                                                                                                              |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| TestnetDAI | Goerli  | [0x97cb342Cf2F6EcF48c1285Fb8668f5a4237BF862](https://goerli.etherscan.io/address/0x97cb342Cf2F6EcF48c1285Fb8668f5a4237BF862)  |
| TestnetDAI | Rinkeby | [0x5eD8BD53B0c3fa3dEaBd345430B1A3a6A4e8BD7C](https://rinkeby.etherscan.io/address/0x5eD8BD53B0c3fa3dEaBd345430B1A3a6A4e8BD7C) |
| TestnetDAI | Kovan   | [0x79dfab686Ef87cd2c871D5182F08538589234189](https://kovan.etherscan.io/address/0x79dfab686Ef87cd2c871D5182F08538589234189)   |
| TestnetDAI | Ropsten | [0x3ac1c6ff50007ee705f36e40F7Dc6f393b1bc5e7](https://ropsten.etherscan.io/address/0x3ac1c6ff50007ee705f36e40F7Dc6f393b1bc5e7) |
