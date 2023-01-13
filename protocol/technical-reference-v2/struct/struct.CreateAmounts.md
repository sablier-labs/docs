# CreateAmounts
[Git Source](https://github.com/sablierhq/v2-core/blob/71a38f2401905d2762c14a7b36c2334909bdb760/src/types/Structs.sol)

Simple struct that encapsulates (i) the net deposit amount, (i) the protocol fee amount, and (iii) the
broker fee amount, each in units of the token's decimals.


```solidity
struct CreateAmounts {
    uint128 netDeposit;
    uint128 protocolFee;
    uint128 brokerFee;
}
```

