# Permit2Params

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/05c331e79e05886c7837dfda1bc21197c1c3c748/src/types/Permit2.sol)

A struct encapsulating the parameters needed for Permit2.

_See the full documentation at https://github.com/Uniswap/permit2._

```solidity
struct Permit2Params {
    IAllowanceTransfer.PermitSingle permitSingle;
    bytes signature;
}
```
