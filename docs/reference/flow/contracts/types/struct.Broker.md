# Broker

[Git Source](https://github.com/sablier-labs/flow/blob/32ac99c89393009166ca05e9a4e75ac34a442139/src/types/DataTypes.sol)

Struct encapsulating the broker parameters.

```solidity
struct Broker {
    address account;
    UD60x18 fee;
}
```

**Properties**

| Name      | Type      | Description                                                                                                          |
| --------- | --------- | -------------------------------------------------------------------------------------------------------------------- |
| `account` | `address` | The address receiving the broker's fee.                                                                              |
| `fee`     | `UD60x18` | The broker's percentage fee charged from the deposit amount, denoted as a fixed-point percentage where 1e18 is 100%. |
