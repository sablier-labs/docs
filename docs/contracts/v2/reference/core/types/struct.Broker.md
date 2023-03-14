# Broker

[Git Source](https://github.com/sablierhq/v2-core/blob/dd92abb9f3f01149a5be0e13eb517772181c5081/docs/contracts/v2/reference/core)

Simple struct that encapsulates the optional broker parameters that can be passed to the create functions.

```solidity
struct Broker {
    address account;
    UD60x18 fee;
}
```
