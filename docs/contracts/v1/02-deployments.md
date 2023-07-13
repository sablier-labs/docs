---
id: deployments
title: Deployments
sidebar_position: 2
---

Depending on what [EVM](https://ethereum.org/en/developers/docs/evm/) chain you want to use Sablier on, you will need to
use a different contract address. Sablier V1 runs on top of a singleton contract that manages all streams.

## Official deployments

Official deployments are deployments made by the Sablier team and supported in the
[official user interface](https://v1-pay.sablier.com).

### Sablier V1.1

| Contract    | Chain            | Address                                                                                                                              |
| ----------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Sablier.sol | Ethereum Mainnet | [0xCD18eAa163733Da39c232722cBC4E8940b1D8888](https://etherscan.io/address/0xCD18eAa163733Da39c232722cBC4E8940b1D8888)                |
| Sablier.sol | Arbitrum One     | [0xaDB944B478818d95659067E70D2e5Fc43Fa3eDe9](https://arbiscan.io/address/0xaDB944B478818d95659067E70D2e5Fc43Fa3eDe9)                 |
| Sablier.sol | Avalanche        | [0x73f503fad13203C87889c3D5c567550b2d41D7a4](https://snowtrace.io/address/0x73f503fad13203C87889c3D5c567550b2d41D7a4)                |
| Sablier.sol | BNB Smart Chain  | [0x05BC7f5fb7F248d44d38703e5C921A8c16825161](https://bscscan.com/address/0x05BC7f5fb7F248d44d38703e5C921A8c16825161)                 |
| Sablier.sol | Optimism         | [0x6C5927c0679e6d857E87367bb635decbcB20F31c](https://optimistic.etherscan.io/address/0x6C5927c0679e6d857E87367bb635decbcB20F31c)     |
| Sablier.sol | Polygon Mainnet  | [0xAC18EAB6592F5fF6F9aCf5E0DCE0Df8E49124C06](https://polygonscan.com/address/0xAC18EAB6592F5fF6F9aCf5E0DCE0Df8E49124C06)             |
| Sablier.sol | Ronin            | [0xDe9dCc27aa1552d591Fc9B9c21881feE43BD8118](https://explorer.roninchain.com/address/ronin:de9dcc27aa1552d591fc9b9c21881fee43bd8118) |
| Sablier.sol | Goerli           | [0xFc7E3a3073F88B0f249151192812209117C2014b](https://goerli.etherscan.io/address/0xFc7E3a3073F88B0f249151192812209117C2014b)         |

### Sablier V1.0

_This is an outdated deployment_.

| Contract    | Chain            | Address                                                                                                               |
| ----------- | ---------------- | --------------------------------------------------------------------------------------------------------------------- |
| Payroll.sol | Ethereum Mainnet | [0xbd6a40Bb904aEa5a49c59050B5395f7484A4203d](https://etherscan.io/address/0xbd6a40Bb904aEa5a49c59050B5395f7484A4203d) |
| Sablier.sol | Ethereum Mainnet | [0xA4fc358455Febe425536fd1878bE67FfDBDEC59a](https://etherscan.io/address/0xA4fc358455Febe425536fd1878bE67FfDBDEC59a) |

## Unofficial deployments

Unofficial deployments are deployments made by external teams and not supported in the
[official user interface](https://v1-pay.sablier.com).

| Chain | Address                                                                                                                | Deployer                                   |
| ----- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| IoTeX | [0x93Efd750a7F589f9FE26408a91e15587a88c4E78](https://iotexscout.io/address/0x93Efd750a7F589f9FE26408a91e15587a88c4E78) | [IoTeX team](https://twitter.com/iotex_io) |

## Testnet Tokens

If you want to use the Sablier interfaces on a testnet, you need to get some testnet DAI first. To do this, you have to
go to the Etherscan page of the associated token, tap the "Write Contract" tab, connect your Ethereum wallet and call
the `mint` method.

Note that the testnet token has 18 decimals, so you may want to use a
[unit converter](https://tools.deth.net/token-unit-conversion).

| Chain      | Network | Ethereum address                                                                                                             |
| ---------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| TestnetDAI | Goerli  | [0x97cb342Cf2F6EcF48c1285Fb8668f5a4237BF862](https://goerli.etherscan.io/address/0x97cb342Cf2F6EcF48c1285Fb8668f5a4237BF862) |
