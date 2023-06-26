# Lockup

[Git Source](https://github.com/sablier-labs/v2-core/blob/6ab33735951a1e93a3236fed3ca9c60f75ab76a7/src/types/DataTypes.sol)

Namespace for the structs used in both
[SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) and
[SablierV2LockupDynamic](docs/contracts/v2/reference/core/contract.SablierV2LockupDynamic.md).

## Structs

### Amounts

Struct encapsulating the deposit, withdrawn, and refunded amounts, all denoted in units of the asset's decimals.

_Because the deposited and the withdrawn amount are often read together, declaring them in the same slot saves gas._

```solidity
struct Amounts {
    uint128 deposited;
    uint128 withdrawn;
    uint128 refunded;
}
```

### CreateAmounts

Struct encapsulating the deposit amount, the protocol fee amount, and the broker fee amount, all denoted in units of the
asset's decimals.

```solidity
struct CreateAmounts {
    uint128 deposit;
    uint128 protocolFee;
    uint128 brokerFee;
}
```

## Enums

### Status

Enum representing the different statuses of a stream.

```solidity
enum Status {
    PENDING,
    STREAMING,
    SETTLED,
    CANCELED,
    DEPLETED
}
```
