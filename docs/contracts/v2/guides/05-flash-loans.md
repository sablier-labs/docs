---
sidebar_position: 5
title: "Flash Loans"
---

Our flash loan implementation adheres to the [ERC-3156](https://eips.ethereum.org/EIPS/eip-3156) specification, which
means that you can use any existing flash borrower implementation to flash loan ERC-20 assets from our contracts.

A good starting point would be the [reference implementation](https://github.com/alcueca/ERC3156) of ERC-3156:

```solidity reference title="ERC-3156: Flash Borrower"
https://github.com/alcueca/ERC3156/blob/b4521a/contracts/FlashBorrower.sol#L25-L48
```
