# Broker

[Git Source](https://github.com/sablierhq/v2-core/blob/e69c450f9b8808e324f31933450818ca28d0800b/docs/contracts/v2/reference/core)

Simple struct that encapsulates the optional broker parameters that can be passed to the create functions.

```solidity
struct Broker {
    address account;
    UD60x18 fee;
}
```
