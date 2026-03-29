# IWETH9

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/interfaces/external/IWETH9.sol)

**Inherits:** IERC20

**Title:** IWETH9

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

**Parameters**

| Name     | Type      | Description                 |
| -------- | --------- | --------------------------- |
| `amount` | `uint256` | The amount of WETH to burn. |
