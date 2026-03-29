# ICurveStETHPool

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/interfaces/external/ICurveStETHPool.sol)

**Title:** ICurveStETHPool

Minimal interface for the Curve stETH/ETH pool.

The pool has two tokens: ETH (index 0) and stETH (index 1).

## Functions

### get_dy

Get the amount of output coin for a given input.

```solidity
function get_dy(int128 i, int128 j, uint256 dx) external view returns (uint256 dy);
```

**Parameters**

| Name | Type      | Description                   |
| ---- | --------- | ----------------------------- |
| `i`  | `int128`  | The index of the input coin.  |
| `j`  | `int128`  | The index of the output coin. |
| `dx` | `uint256` | The amount of input coin.     |

**Returns**

| Name | Type      | Description                         |
| ---- | --------- | ----------------------------------- |
| `dy` | `uint256` | The expected amount of output coin. |

### exchange

Exchange between two tokens in the pool.

```solidity
function exchange(int128 i, int128 j, uint256 dx, uint256 minDy) external payable returns (uint256 dy);
```

**Parameters**

| Name    | Type      | Description                                        |
| ------- | --------- | -------------------------------------------------- |
| `i`     | `int128`  | The index of the input coin (0 = ETH, 1 = stETH).  |
| `j`     | `int128`  | The index of the output coin (0 = ETH, 1 = stETH). |
| `dx`    | `uint256` | The amount of input coin to exchange.              |
| `minDy` | `uint256` | The minimum amount of output coin to receive.      |

**Returns**

| Name | Type      | Description                                |
| ---- | --------- | ------------------------------------------ |
| `dy` | `uint256` | The actual amount of output coin received. |
