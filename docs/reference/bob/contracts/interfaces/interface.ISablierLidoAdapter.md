# ISablierLidoAdapter

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/interfaces/ISablierLidoAdapter.sol)

**Inherits:** [ISablierBobAdapter](/docs/reference/bob/contracts/interfaces/interface.ISablierBobAdapter.md)

**Title:** ISablierLidoAdapter

Interface for the Lido yield adapter that stakes WETH as wstETH and unstakes it via Curve.

Extends the base adapter interface with Lido and Curve specific functionalities.

## Functions

### CURVE_POOL

Returns the address of the Curve stETH/ETH pool.

This is an immutable state variable.

```solidity
function CURVE_POOL() external view returns (address);
```

### LIDO_WITHDRAWAL_QUEUE

Returns the address of the Lido withdrawal queue contract.

This is an immutable state variable.

```solidity
function LIDO_WITHDRAWAL_QUEUE() external view returns (address);
```

### MAX_SLIPPAGE_TOLERANCE

Returns the maximum slippage tolerance that can be set, denominated in UD60x18, where 1e18 = 100%.

This is a constant state variable.

```solidity
function MAX_SLIPPAGE_TOLERANCE() external view returns (UD60x18);
```

### STETH

Returns the address of the stETH contract.

This is an immutable state variable.

```solidity
function STETH() external view returns (address);
```

### STETH_ETH_ORACLE

Returns the address of the Chainlink stETH/ETH oracle used in the calculation of `minEthOut` slippage.

This is an immutable state variable.

```solidity
function STETH_ETH_ORACLE() external view returns (address);
```

### WETH

Returns the address of the WETH contract.

This is an immutable state variable.

```solidity
function WETH() external view returns (address);
```

### WSTETH

Returns the address of the wstETH contract.

This is an immutable state variable.

```solidity
function WSTETH() external view returns (address);
```

### getLidoWithdrawalRequestIds

Returns the Lido withdrawal request IDs for a vault.

Multiple request IDs may be generated for a vault if the total amount exceeds the Lido enforced per-withdrawal limit.

```solidity
function getLidoWithdrawalRequestIds(uint256 vaultId) external view returns (uint256[] memory);
```

### getWethReceivedAfterUnstaking

Returns the total WETH received after unstaking for a vault.

```solidity
function getWethReceivedAfterUnstaking(uint256 vaultId) external view returns (uint256);
```

**Parameters**

| Name      | Type      | Description          |
| --------- | --------- | -------------------- |
| `vaultId` | `uint256` | The ID of the vault. |

### slippageTolerance

Returns the current slippage tolerance for Curve swaps, denominated in UD60x18, where 1e18 = 100%.

```solidity
function slippageTolerance() external view returns (UD60x18);
```

### requestLidoWithdrawal

Requests a native Lido withdrawal for a vault's staked tokens, bypassing the Curve swap.

Emits a
[RequestLidoWithdrawal](/docs/reference/bob/contracts/interfaces/interface.ISablierLidoAdapter.md#requestlidowithdrawal)
event. Notes:

- This unwraps the vault's wstETH to stETH and submits it to Lido's withdrawal queue.
- Once called, the Curve swap is permanently disabled for `vaultId`.
- After the queue finalizes the withdrawal, ETH can be redeemed by calling {unstakeFullAmount}.
- Large amounts are automatically split into multiple requests to comply with Lido's per-request limit. Requirements:
- The caller must be the comptroller.
- The status of the vault must not be ACTIVE.
- The vault must still be staked in the adapter (not already unstaked via Curve).
- A withdrawal request must not have already been requested for this vault.
- The vault must have wstETH to withdraw.
- The total amount to withdraw must not be less than the minimum amount per request.

```solidity
function requestLidoWithdrawal(uint256 vaultId) external;
```

**Parameters**

| Name      | Type      | Description          |
| --------- | --------- | -------------------- |
| `vaultId` | `uint256` | The ID of the vault. |

### setSlippageTolerance

Sets the slippage tolerance for Curve swaps.

Emits a
[SetSlippageTolerance](/docs/reference/bob/contracts/interfaces/interface.ISablierLidoAdapter.md#setslippagetolerance)
event. Notes:

- This affects all vaults. Requirements:
- The caller must be the comptroller.
- `newSlippageTolerance` must not exceed MAX_SLIPPAGE_TOLERANCE.

```solidity
function setSlippageTolerance(UD60x18 newTolerance) external;
```

**Parameters**

| Name           | Type      | Description                            |
| -------------- | --------- | -------------------------------------- |
| `newTolerance` | `UD60x18` | The new slippage tolerance as UD60x18. |

## Events

### RequestLidoWithdrawal

Emitted when the comptroller requests a Lido native withdrawal for a vault.

```solidity
event RequestLidoWithdrawal(
    uint256 indexed vaultId,
    address indexed comptroller,
    uint256 wstETHAmount,
    uint256 stETHAmount,
    uint256[] withdrawalRequestIds
);
```

### SetSlippageTolerance

Emitted when the comptroller sets a new slippage tolerance.

```solidity
event SetSlippageTolerance(UD60x18 previousTolerance, UD60x18 newTolerance);
```
