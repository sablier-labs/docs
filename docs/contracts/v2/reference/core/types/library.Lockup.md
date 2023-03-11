# Lockup
[Git Source](https://github.com/sablierhq/v2-core/blob/8b6a851f4185bd5af0e89a0f6a6eb2fed069cd10/docs/contracts/v2/reference/core/abstracts)

Quasi-namespace for the structs used in the {SablierV2Lockup} contract.


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
Simple struct that encapsulates (i) the deposit amount, (ii) the protocol fee amount, and (iii) the
broker fee amount, each in units of the asset's decimals.


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

