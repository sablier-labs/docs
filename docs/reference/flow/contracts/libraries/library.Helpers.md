# Helpers

[Git Source](https://github.com/sablier-labs/flow/blob/9bfe5d6fbfbd7dc60e142735dd3f492df756e0b9/src/libraries/Helpers.sol)

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

### descaleAmount

Descales the provided `amount` from 18 decimals fixed-point number to token's decimals number.

```solidity
function descaleAmount(uint256 amount, uint8 decimals) internal pure returns (uint256);
```

### scaleAmount

Scales the provided `amount` from 18 decimals fixed-point number to token's decimals number.

```solidity
function scaleAmount(uint256 amount, uint8 decimals) internal pure returns (uint256);
```