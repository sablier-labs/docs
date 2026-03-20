# FlowHelpers

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/7cb361717fd2f0289ad8d69469a3c00804b21657/src/libraries/FlowHelpers.sol)

**Title:** FlowHelpers

Library with helper functions in [SablierFlow](/docs/reference/flow/contracts/contract.SablierFlow.md) contract.

## Functions

### descaleAmount

Descales the provided `amount` from 18 decimals fixed-point number to token's decimals number.

If `decimals` exceeds 18, it will cause an underflow.

```solidity
function descaleAmount(uint256 amount, uint8 decimals) internal pure returns (uint256);
```

### scaleAmount

Scales the provided `amount` from token's decimals number to 18 decimals fixed-point number.

If `decimals` exceeds 18, it will cause an underflow. If `amount` exceeds max value of `uint128`, the result may
overflow `uint256`.

```solidity
function scaleAmount(uint256 amount, uint8 decimals) internal pure returns (uint256);
```
