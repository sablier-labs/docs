# FlowHelpers

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/003a71932c0e26e767a02c21205a077469406ac8/src/libraries/FlowHelpers.sol)

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
