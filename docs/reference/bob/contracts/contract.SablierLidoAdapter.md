---
sidebar_position: 3
---

# SablierLidoAdapter

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/SablierLidoAdapter.sol)

**Inherits:** [Comptrollerable](/docs/reference/bob/contracts/abstracts/abstract.Comptrollerable.md), ERC165,
[ISablierLidoAdapter](/docs/reference/bob/contracts/interfaces/interface.ISablierLidoAdapter.md)

**Title:** SablierLidoAdapter

Lido yield adapter for the SablierBob protocol.

This adapter stakes WETH as wstETH to earn Lido staking rewards.

## State Variables

### CURVE_POOL

Returns the address of the Curve stETH/ETH pool.

This is an immutable state variable.

```solidity
address public immutable override CURVE_POOL
```

### LIDO_WITHDRAWAL_QUEUE

Returns the address of the Lido withdrawal queue contract.

This is an immutable state variable.

```solidity
address public immutable override LIDO_WITHDRAWAL_QUEUE
```

### MAX_FEE

Returns the maximum yield fee, denominated in UD60x18, where 1e18 = 100%.

This is a constant state variable.

```solidity
UD60x18 public constant override MAX_FEE = UD60x18.wrap(0.2e18)
```

### MAX_SLIPPAGE_TOLERANCE

Returns the maximum slippage tolerance that can be set, denominated in UD60x18, where 1e18 = 100%.

This is a constant state variable.

```solidity
UD60x18 public constant override MAX_SLIPPAGE_TOLERANCE = UD60x18.wrap(0.05e18)
```

### STETH

Returns the address of the stETH contract.

This is an immutable state variable.

```solidity
address public immutable override STETH
```

### STETH_ETH_ORACLE

Returns the address of the Chainlink stETH/ETH oracle used in the calculation of `minEthOut` slippage.

This is an immutable state variable.

```solidity
address public immutable override STETH_ETH_ORACLE
```

### WETH

Returns the address of the WETH contract.

This is an immutable state variable.

```solidity
address public immutable override WETH
```

### WSTETH

Returns the address of the wstETH contract.

This is an immutable state variable.

```solidity
address public immutable override WSTETH
```

### SABLIER_BOB

Returns the address of the SablierBob contract.

This is an immutable state variable.

```solidity
address public immutable override SABLIER_BOB
```

### feeOnYield

Returns the current global fee on yield for new vaults, denominated in UD60x18, where 1e18 = 100%.

```solidity
UD60x18 public override feeOnYield
```

### slippageTolerance

Returns the current slippage tolerance for Curve swaps, denominated in UD60x18, where 1e18 = 100%.

```solidity
UD60x18 public override slippageTolerance
```

### \_lidoWithdrawalRequestIds

Lido withdrawal request IDs for each vault.

```solidity
mapping(uint256 vaultId => uint256[] requestIds) internal _lidoWithdrawalRequestIds
```

### \_userWstETH

wstETH amount held for each user in each vault.

```solidity
mapping(uint256 vaultId => mapping(address user => uint128 wstETHAmount)) internal _userWstETH
```

### \_vaultTotalWstETH

Total wstETH amount held in each vault.

```solidity
mapping(uint256 vaultId => uint128 totalWstETH) internal _vaultTotalWstETH
```

### \_vaultYieldFee

Yield fee snapshotted for each vault at creation time.

```solidity
mapping(uint256 vaultId => UD60x18 fee) internal _vaultYieldFee
```

### \_wethReceivedAfterUnstaking

Total WETH received after unstaking all tokens in a vault.

```solidity
mapping(uint256 vaultId => uint128 wethReceived) internal _wethReceivedAfterUnstaking
```

## Functions

### constructor

Deploys the Lido adapter.

```solidity
constructor(
    address initialComptroller,
    address sablierBob,
    address curvePool,
    address lidoWithdrawalQueue,
    address steth,
    address stethEthOracle,
    address weth,
    address wsteth,
    UD60x18 initialSlippageTolerance,
    UD60x18 initialYieldFee
)
    [Comptrollerable](/docs/reference/bob/contracts/abstracts/abstract.Comptrollerable.md)(initialComptroller);
```

**Parameters**

| Name                       | Type      | Description                                                |
| -------------------------- | --------- | ---------------------------------------------------------- |
| `initialComptroller`       | `address` | The address of the initial comptroller contract.           |
| `sablierBob`               | `address` | The address of the SablierBob contract.                    |
| `curvePool`                | `address` | The address of the Curve stETH/ETH pool.                   |
| `lidoWithdrawalQueue`      | `address` | The address of the Lido withdrawal queue contract.         |
| `steth`                    | `address` | The address of the stETH contract.                         |
| `stethEthOracle`           | `address` | The address of the Chainlink's stETH/ETH oracle.           |
| `weth`                     | `address` | The address of the WETH contract.                          |
| `wsteth`                   | `address` | The address of the wstETH contract.                        |
| `initialSlippageTolerance` | `UD60x18` | The initial slippage tolerance for Curve swaps as UD60x18. |
| `initialYieldFee`          | `UD60x18` | The initial yield fee as UD60x18.                          |

### onlySablierBob

Reverts if the caller is not SablierBob.

```solidity
modifier onlySablierBob() ;
```

### getLidoWithdrawalRequestIds

Returns the Lido withdrawal request IDs for a vault.

Multiple request IDs may be generated for a vault if the total amount exceeds the Lido enforced per-withdrawal limit.

```solidity
function getLidoWithdrawalRequestIds(uint256 vaultId) external view override returns (uint256[] memory);
```

### getTotalYieldBearingTokenBalance

Returns the total amount of yield-bearing tokens held in a vault.

```solidity
function getTotalYieldBearingTokenBalance(uint256 vaultId) external view override returns (uint128);
```

**Parameters**

| Name      | Type      | Description          |
| --------- | --------- | -------------------- |
| `vaultId` | `uint256` | The ID of the vault. |

**Returns**

| Name     | Type      | Description                                            |
| -------- | --------- | ------------------------------------------------------ |
| `<none>` | `uint128` | The total amount of yield-bearing tokens in the vault. |

### getVaultYieldFee

Returns the yield fee stored for a specific vault.

```solidity
function getVaultYieldFee(uint256 vaultId) external view override returns (UD60x18);
```

**Parameters**

| Name      | Type      | Description          |
| --------- | --------- | -------------------- |
| `vaultId` | `uint256` | The ID of the vault. |

**Returns**

| Name     | Type      | Description                                                            |
| -------- | --------- | ---------------------------------------------------------------------- |
| `<none>` | `UD60x18` | The yield fee for the vault denominated in UD60x18, where 1e18 = 100%. |

### getWethReceivedAfterUnstaking

Returns the total WETH received after unstaking for a vault.

```solidity
function getWethReceivedAfterUnstaking(uint256 vaultId) external view override returns (uint256);
```

**Parameters**

| Name      | Type      | Description          |
| --------- | --------- | -------------------- |
| `vaultId` | `uint256` | The ID of the vault. |

### getYieldBearingTokenBalanceFor

Returns the amount of yield-bearing tokens held for a specific user in a vault.

```solidity
function getYieldBearingTokenBalanceFor(uint256 vaultId, address user) external view override returns (uint128);
```

**Parameters**

| Name      | Type      | Description              |
| --------- | --------- | ------------------------ |
| `vaultId` | `uint256` | The ID of the vault.     |
| `user`    | `address` | The address of the user. |

**Returns**

| Name     | Type      | Description                                               |
| -------- | --------- | --------------------------------------------------------- |
| `<none>` | `uint128` | The amount of yield-bearing tokens the user has claim to. |

### supportsInterface

See {IERC165-supportsInterface}.

```solidity
function supportsInterface(bytes4 interfaceId) public view override(ERC165, IERC165) returns (bool);
```

### processRedemption

Processes a user's token redemption by calculating the transfer amount, clearing the user's yield-bearing token balance,
and returning the amounts. Notes:

- The user's yield-bearing token balance is decremented after calculating the transfer amount. This does not decrement
  the vault total as it is used in the calculation of the transfer amount for other users. Requirements:
- The caller must be the SablierBob contract.

```solidity
function processRedemption(
    uint256 vaultId,
    address user,
    uint128 shareBalance
)
    external
    override
    onlySablierBob
    returns (uint128 transferAmount, uint128 feeAmountDeductedFromYield);
```

**Parameters**

| Name           | Type      | Description                            |
| -------------- | --------- | -------------------------------------- |
| `vaultId`      | `uint256` | The ID of the vault.                   |
| `user`         | `address` | The address of the user.               |
| `shareBalance` | `uint128` | The user's share balance in the vault. |

**Returns**

| Name                         | Type      | Description                          |
| ---------------------------- | --------- | ------------------------------------ |
| `transferAmount`             | `uint128` | The amount to transfer to the user.  |
| `feeAmountDeductedFromYield` | `uint128` | The fee amount taken from the yield. |

### registerVault

Register a new vault with the adapter and snapshot the current fee on yield. Requirements:

- The caller must be the SablierBob contract.

```solidity
function registerVault(uint256 vaultId) external override onlySablierBob;
```

**Parameters**

| Name      | Type      | Description                        |
| --------- | --------- | ---------------------------------- |
| `vaultId` | `uint256` | The ID of the newly created vault. |

### requestLidoWithdrawal

Requests a native Lido withdrawal for a vault's staked tokens, bypassing the Curve swap.

Emits a {RequestLidoWithdrawal} event. Notes:

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
function requestLidoWithdrawal(uint256 vaultId) external override onlyComptroller;
```

**Parameters**

| Name      | Type      | Description          |
| --------- | --------- | -------------------- |
| `vaultId` | `uint256` | The ID of the vault. |

### setSlippageTolerance

Sets the slippage tolerance for Curve swaps.

Emits a {SetSlippageTolerance} event. Notes:

- This affects all vaults. Requirements:
- The caller must be the comptroller.
- `newSlippageTolerance` must not exceed MAX_SLIPPAGE_TOLERANCE.

```solidity
function setSlippageTolerance(UD60x18 newTolerance) external override onlyComptroller;
```

**Parameters**

| Name           | Type      | Description                            |
| -------------- | --------- | -------------------------------------- |
| `newTolerance` | `UD60x18` | The new slippage tolerance as UD60x18. |

### setYieldFee

Sets the fee on yield for future vaults.

Emits a {SetYieldFee} event. Notes:

- This only affects future vaults, fee is not updated for existing vaults. Requirements:
- The caller must be the comptroller.
- `newFee` must not exceed MAX_FEE.

```solidity
function setYieldFee(UD60x18 newFee) external override onlyComptroller;
```

**Parameters**

| Name     | Type      | Description                                     |
| -------- | --------- | ----------------------------------------------- |
| `newFee` | `UD60x18` | The new yield fee as UD60x18 where 1e18 = 100%. |

### stake

Stakes tokens deposited by a user in a vault, converting them to yield-bearing tokens.

Emits a {Stake} event. Requirements:

- The caller must be the SablierBob contract.
- The tokens must have been transferred to this contract.

```solidity
function stake(uint256 vaultId, address user, uint256 amount) external override onlySablierBob;
```

**Parameters**

| Name      | Type      | Description                                    |
| --------- | --------- | ---------------------------------------------- |
| `vaultId` | `uint256` | The ID of the vault.                           |
| `user`    | `address` | The address of the user depositing the tokens. |
| `amount`  | `uint256` | The amount of tokens to stake.                 |

### unstakeFullAmount

Converts all yield-bearing tokens in a vault back to deposit tokens after settlement.

Emits an {UnstakeFullAmount} event. Notes:

- This should only be called once per vault after settlement. Requirements:
- The caller must be the SablierBob contract.

```solidity
function unstakeFullAmount(uint256 vaultId)
    external
    override
    onlySablierBob
    returns (uint128 totalWstETH, uint128 amountReceivedFromUnstaking);
```

**Parameters**

| Name      | Type      | Description          |
| --------- | --------- | -------------------- |
| `vaultId` | `uint256` | The ID of the vault. |

**Returns**

| Name                          | Type      | Description                                                                          |
| ----------------------------- | --------- | ------------------------------------------------------------------------------------ |
| `totalWstETH`                 | `uint128` | wrappedTokenBalance The total amount of yield-bearing tokens that were in the vault. |
| `amountReceivedFromUnstaking` | `uint128` | The total amount of tokens received from unstaking the yield-bearing tokens.         |

### updateStakedTokenBalance

Updates staked token balance of a user when vault shares are transferred. Requirements:

- The caller must be the SablierBob contract.
- `userShareBalanceBeforeTransfer` must not be zero.
- The calculated wstETH transfer amount must not be zero.

```solidity
function updateStakedTokenBalance(
    uint256 vaultId,
    address from,
    address to,
    uint256 shareAmountTransferred,
    uint256 userShareBalanceBeforeTransfer
)
    external
    override
    onlySablierBob;
```

**Parameters**

| Name                             | Type      | Description                                           |
| -------------------------------- | --------- | ----------------------------------------------------- |
| `vaultId`                        | `uint256` | The ID of the vault.                                  |
| `from`                           | `address` | The address transferring vault shares.                |
| `to`                             | `address` | The address receiving vault shares.                   |
| `shareAmountTransferred`         | `uint256` | The number of vault shares being transferred.         |
| `userShareBalanceBeforeTransfer` | `uint256` | The sender's vault share balance before the transfer. |

### \_claimLidoWithdrawals

Claims finalized Lido withdrawals for a vault and wraps the received ETH into WETH.

```solidity
function _claimLidoWithdrawals(uint256 vaultId) private returns (uint128 wethReceived);
```

### \_swapWstETHToWeth

Swap wstETH to WETH using Curve exchange, with oracle-based slippage protection.

```solidity
function _swapWstETHToWeth(uint128 wstETHAmount) private returns (uint128 wethReceived);
```

### receive

```solidity
receive() external payable;
```
