# Broker

[Git Source](https://github.com/sablier-labs/v2-core/blob/159e87a2f5af03967faf292df81fef93c14be2e2/src/types/DataTypes.sol)

Struct encapsulating the broker parameters passed to the create functions. Both can be set to zero.

```solidity
struct Broker {
    address account;
    UD60x18 fee;
}
```
