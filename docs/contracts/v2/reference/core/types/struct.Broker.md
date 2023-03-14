# Broker

[Git Source](https://github.com/sablierhq/v2-core/blob/8bfc7785e498ccde9a6d39ad2fc8998d9077f979/docs/contracts/v2/reference/core)

Simple struct that encapsulates the optional broker parameters that can be passed to the create functions.

```solidity
struct Broker {
    address account;
    UD60x18 fee;
}
```
