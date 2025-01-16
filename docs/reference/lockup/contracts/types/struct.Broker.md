# Broker

[Git Source](https://github.com/sablier-labs/lockup/blob/076eba971fea7bb38fe75ee5108f0589c26152c0/src/types/DataTypes.sol)

Struct encapsulating the broker parameters passed to the create functions. Both can be set to zero.

```solidity
struct Broker {
    address account;
    UD60x18 fee;
}
```

**Properties**

| Name      | Type      | Description                                                                                            |
| --------- | --------- | ------------------------------------------------------------------------------------------------------ |
| `account` | `address` | The address receiving the broker's fee.                                                                |
| `fee`     | `UD60x18` | The broker's percentage fee from the total amount, denoted as a fixed-point number where 1e18 is 100%. |
