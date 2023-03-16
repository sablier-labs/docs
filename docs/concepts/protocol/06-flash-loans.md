---
id: "flash-loans"
sidebar_position: 6
title: "Flash Loans"
---

Sablier v2 allows anyone to create a single-asset flash loan for an asset being streamed in the protocol. However, this
is only possible for
[tokens approved for flash loan use](/protocol/technical-reference-v2/contract.SablierV2Comptroller#isflashloanable).

A fee (called flash fee) can be charged on every flash loan created for specific tokens. This fee is currently set to
zero and controlled by the multisig (currently controlled by the Sablier team).

Flash loans follow the [EIP-3156 specification](https://eips.ethereum.org/EIPS/eip-3156), and can be called using the
[flashLoan function](/protocol/technical-reference-v2/abstracts/contract.SablierV2FlashLoan#flashloan).
