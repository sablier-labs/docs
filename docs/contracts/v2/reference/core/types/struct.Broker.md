# Broker

[Git Source](https://github.com/sablierhq/v2-core/blob/9df2bf8f303f7d13337716257672553e60783b8c/docs/contracts/v2/reference/core)

Simple struct that encapsulates the optional broker parameters that can be passed to the create functions.

```solidity
struct Broker {
    address account;
    UD60x18 fee;
}
```
