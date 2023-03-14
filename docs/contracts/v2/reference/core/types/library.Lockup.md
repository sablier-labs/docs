# Lockup

[Git Source](https://github.com/sablierhq/v2-core/blob/dd92abb9f3f01149a5be0e13eb517772181c5081/docs/contracts/v2/reference/core)

Quasi-namespace for the structs used in both
[SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) and
[SablierV2LockupPro](docs/contracts/v2/reference/core/contract.SablierV2LockupPro.md).

## Structs

### Amounts

Simple struct that encapsulates the deposit and the withdrawn amounts.

```solidity
struct Amounts {
    uint128 deposit;
    uint128 withdrawn;
}
```

### CreateAmounts

Simple struct that encapsulates (i) the deposit amount, (ii) the protocol fee amount, and (iii) the broker fee amount,
each in units of the asset's decimals.

```solidity
struct CreateAmounts {
    uint128 deposit;
    uint128 protocolFee;
    uint128 brokerFee;
}
```

## Enums

### Status

Enum with all possible statuses of a lockup stream.

```solidity
enum Status {
    NULL,
    ACTIVE,
    CANCELED,
    DEPLETED
}
```
