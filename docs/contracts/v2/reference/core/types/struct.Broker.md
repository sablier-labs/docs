# Broker

[Git Source](https://github.com/sablierhq/v2-core/blob/6223a7bce69cdec996b0a95cb95d0f04cdb809be/docs/contracts/v2/reference/core)

Simple struct that encapsulates the optional broker parameters that can be passed to the create functions.

```solidity
struct Broker {
    address account;
    UD60x18 fee;
}
```
