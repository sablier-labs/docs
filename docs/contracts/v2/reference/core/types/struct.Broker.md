# Broker

[Git Source](https://github.com/sablier-labs/v2-core/blob/release/src/types/DataTypes.sol)

Struct encapsulating the broker parameters passed to the create functions. Both can be set to zero.

```solidity
struct Broker {
    address account;
    UD60x18 fee;
}
```
