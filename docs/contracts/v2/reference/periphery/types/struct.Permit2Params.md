# Permit2Params

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/561f49f77dc855cb4c3a7a449a43613e8f71d655/src/types/Permit2.sol)

A struct encapsulating the parameters needed for Permit2.

_See the full documentation at https://github.com/Uniswap/permit2._

```solidity
struct Permit2Params {
    IAllowanceTransfer.PermitSingle permitSingle;
    bytes signature;
}
```
