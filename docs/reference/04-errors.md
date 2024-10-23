---
id: "errors"
sidebar_position: 4
title: "Errors"
---

## Background

Sablier protocols handle errors with the convenient and gas-efficient
[custom error syntax](https://blog.soliditylang.org/2021/04/21/custom-errors) introduced in Solidity v0.8.4.

The error data encoding is identical to the ABI encoding used for functions, e.g.:

```solidity
error SablierV2Lockup_Unauthorized(address caller, uint256 streamId);
```

Yields the following 4-byte selector in the contract's ABI:

```solidity
bytes4(keccak256(bytes("SablierV2Lockup_Unauthorized(address,uint256)")))
// 0xe10e8f6f
```

## Naming Pattern

With the exception of a few generics, all errors in Sablier protocols adhere to the naming pattern
`<ContractName>_<ErrorName>`.

Incorporating the contract name as a prefix offers context, making it easier for end users to pinpoint the contract
responsible for a reverted transaction. This approach is particularly helpful for complex transactions involving
multiple contracts.

## Lockup Error List

### Core

[Click here](lockup/core/libraries/library.Errors) to see the full error list in Lockup Core.

### Periphery

[Click here](lockup/periphery/libraries/library.Errors) to see the full error list in Lockup Periphery.

## Flow Error List

[Click here](flow/contracts/libraries/library.Errors) to see the full error list in Flow.

## Resources

- [Custom Errors in Solidity](https://blog.soliditylang.org/2021/04/21/custom-errors/): deep dive into the custom error
  syntax
- [OpenChain](https://openchain.xyz/signatures): signature database
- [4byte.directory](https://4byte.directory/): yet another signature database
