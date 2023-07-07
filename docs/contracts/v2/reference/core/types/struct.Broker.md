# Broker

[Git Source](https://github.com/sablier-labs/v2-core/blob/412ec3d3998a766507de96afdb26c797d2ae491d/src/types/DataTypes.sol)

Struct encapsulating the broker parameters passed to the create functions. Both can be set to zero.

```solidity
struct Broker {
    address account;
    UD60x18 fee;
}
```
