# IWstETH

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/8b6823c019ff7556ac9ad24cbb5ac62821854d2f/src/interfaces/external/IWstETH.sol)

**Inherits:** IERC20

**Title:** IWstETH

Minimal interface for Lido's wstETH.

## Functions

### getStETHByWstETH

Returns the amount of stETH for a given amount of wstETH.

```solidity
function getStETHByWstETH(uint256 wstETHAmount) external view returns (uint256);
```

**Parameters**

| Name           | Type      | Description           |
| -------------- | --------- | --------------------- |
| `wstETHAmount` | `uint256` | The amount of wstETH. |

**Returns**

| Name     | Type      | Description                     |
| -------- | --------- | ------------------------------- |
| `<none>` | `uint256` | The equivalent amount of stETH. |

### getWstETHByStETH

Returns the amount of wstETH for a given amount of stETH.

```solidity
function getWstETHByStETH(uint256 stETHAmount) external view returns (uint256);
```

**Parameters**

| Name          | Type      | Description          |
| ------------- | --------- | -------------------- |
| `stETHAmount` | `uint256` | The amount of stETH. |

**Returns**

| Name     | Type      | Description                      |
| -------- | --------- | -------------------------------- |
| `<none>` | `uint256` | The equivalent amount of wstETH. |

### wrap

Wraps stETH to wstETH.

```solidity
function wrap(uint256 stETHAmount) external returns (uint256 wstETHAmount);
```

### unwrap

Unwraps wstETH to stETH.

```solidity
function unwrap(uint256 wstETHAmount) external returns (uint256 stETHAmount);
```
