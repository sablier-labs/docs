# Broker
[Git Source](https://github.com/sablierhq/v2-core/blob/8b6a851f4185bd5af0e89a0f6a6eb2fed069cd10/docs/contracts/v2/reference/core/abstracts)

Simple struct that encapsulates the optional broker parameters that can be passed to the create functions.


```solidity
struct Broker {
    address account;
    UD60x18 fee;
}
```

