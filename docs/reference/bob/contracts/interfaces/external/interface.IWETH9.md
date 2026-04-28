# IWETH9

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/003a71932c0e26e767a02c21205a077469406ac8/src/interfaces/external/IWETH9.sol)

Inherits: IERC20

Title: IWETH9

Minimal interface for Wrapped Ether.

## Functions

### deposit

Deposits ETH and mints WETH.

```solidity
function deposit() external payable;
```

### withdraw

Burns WETH and withdraws ETH.

```solidity
function withdraw(uint256 amount) external;
```

Parameters

| Name     | Type      | Description                 |
| -------- | --------- | --------------------------- |
| `amount` | `uint256` | The amount of WETH to burn. |
