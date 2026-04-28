# IStETH

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/003a71932c0e26e767a02c21205a077469406ac8/src/interfaces/external/IStETH.sol)

Inherits: IERC20

Title: IStETH

Minimal interface for Lido's stETH.

## Functions

### submit

Send funds to the Lido pool with the optional referral parameter and mints stETH.

The amount of stETH minted equals the amount of ETH sent.

```solidity
function submit(address referral) external payable returns (uint256 amount);
```

Parameters

| Name       | Type      | Description                       |
| ---------- | --------- | --------------------------------- |
| `referral` | `address` | The referral address can be zero. |

Returns

| Name     | Type      | Description                 |
| -------- | --------- | --------------------------- |
| `amount` | `uint256` | The amount of stETH minted. |
