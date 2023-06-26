# Permit2Params

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/453a35ef662183654138bfe8cab2b523f340fa5b/src/types/DataTypes.sol)

A struct encapsulating the parameters needed for Permit2.

_See the full documentation at https://github.com/Uniswap/permit2._

```solidity
struct Permit2Params {
    IAllowanceTransfer permit2;
    IAllowanceTransfer.PermitSingle permitSingle;
    bytes signature;
}
```
