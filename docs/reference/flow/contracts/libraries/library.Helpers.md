# Helpers

[Git Source](https://github.com/sablier-labs/flow/blob/04f3ed65b4c633d514ee64e2ec4022d821919382/src/libraries/Helpers.sol)

Library with helper functions in [SablierFlow](/docs/reference/flow/contracts/contract.SablierFlow.md) contract.

## Functions

### calculateAmountsFromFee

_Calculate the fee amount and the net amount after subtracting the fee, based on the `fee` percentage._

```solidity
function calculateAmountsFromFee(
    uint128 totalAmount,
    UD60x18 fee
)
    internal
    pure
    returns (uint128 feeAmount, uint128 netAmount);
```

### checkAndCalculateBrokerFee

_Checks the `Broker` parameter, and then calculates the broker fee amount and the deposit amount from the total amount._

```solidity
function checkAndCalculateBrokerFee(
    uint128 totalAmount,
    Broker memory broker,
    UD60x18 maxFee
)
    internal
    pure
    returns (uint128 brokerFeeAmount, uint128 depositAmount);
```
