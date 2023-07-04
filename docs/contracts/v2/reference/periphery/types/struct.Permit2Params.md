# Permit2Params

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/a17edc8e290789f96ef9ddaf0e4d1c99d8ce1acf/src/types/DataTypes.sol)

A struct encapsulating the parameters needed for Permit2.

_See the full documentation at https://github.com/Uniswap/permit2._

```solidity
struct Permit2Params {
    IAllowanceTransfer.PermitSingle permitSingle;
    bytes signature;
}
```
