# Permit2Params

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/0c389e73d0b3467ccfab52e98140aad7c099aacf/src/types/Permit2.sol)

A struct encapsulating the parameters needed for Permit2.

_See the full documentation at https://github.com/Uniswap/permit2._

```solidity
struct Permit2Params {
    IAllowanceTransfer.PermitSingle permitSingle;
    bytes signature;
}
```
