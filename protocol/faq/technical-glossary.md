---
id: technical-glossary
title: Technical Glossary
sidebar_position: 2
---

### What is Ethereum?

Sablier is built on top of Ethereum (as well as other smart contract blockchains), a global, open-source platform for decentralized applications. You can read more about it on their [official website](https://ethereum.org).

### What are smart contracts?

Permission-less scripts that:

- Run on a smart contract blockchain like Ethereum
- Cannot be modified once deployed
- Do exactly what you tell them to do

### What are Arbitrum, Avalanche, BSC, Optimism, Polygon and Ronin?

These are Ethereum-like chains that can run Ethereum smart contracts. Sablier is available on all of these chains. Please refer to their associated documentation for more information:

- [Arbitrum One](https://developer.offchainlabs.com/)
- [Avalanche](https://docs.avax.network/)
- [BSC](https://docs.binance.org/)
- [Optimism](https://community.optimism.io/)
- [Polygon](https://docs.polygon.technology/)
- [Ronin](https://twitter.com/ronin_network)

### What is ERC-20?

Acronym that stands the "Ethereum Requests for Comments" number 20. It is the most popular technical standard on Ethereum and can be used for printing a currency.

Sablier is compatible with ERC-20 tokens only, such as [DAI](https://makerdao.com/) or [USDC](https://www.coinbase.com/usdc).

### What is a stream?

A real-time payment, made up of six properties:

| Name       | Description                                  |
| ---------- | -------------------------------------------- |
| Sender     | Ethereum address                             |
| Recipient  | Ethereum address                             |
| Deposit    | Total amount of tokens to stream             |
| Token      | ERC-20 token address                         |
| Start time | The Unix timestamp when the streaming starts |
| Stop time  | The Unix timestamp when the streaming stops  |
