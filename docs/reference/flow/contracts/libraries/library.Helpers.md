# Helpers

[Git Source](https://github.com/sablier-labs/flow/blob/a4143de45478f508bca8305fec2bd81b7ad25fe9/src/libraries/Helpers.sol)

Library with helper functions in [SablierFlow](/docs/reference/flow/contracts/contract.SablierFlow.md) contract.

## Functions

### descaleAmount

Descales the provided `amount` from 18 decimals fixed-point number to token's decimals number.

_If `decimals` exceeds 18, it will cause an underflow._

```solidity
function descaleAmount(uint256 amount, uint8 decimals) internal pure returns (uint256);
```

### scaleAmount

Scales the provided `amount` from token's decimals number to 18 decimals fixed-point number.

_If `decimals` exceeds 18, it will cause an underflow. If `amount` exceeds max value of `uint128`, the result may
overflow `uint256`._

```solidity
function scaleAmount(uint256 amount, uint8 decimals) internal pure returns (uint256);
```
