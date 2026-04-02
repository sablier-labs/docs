# ISablierBobAdapter

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/interfaces/ISablierBobAdapter.sol)

**Inherits:** IComptrollerable, IERC165

**Title:** ISablierBobAdapter

Base interface for adapters used by the SablierBob protocol for generating yield.

## Functions

### MAX_FEE

Returns the maximum yield fee, denominated in UD60x18, where 1e18 = 100%.

This is a constant state variable.

```solidity
function MAX_FEE() external view returns (UD60x18);
```

### SABLIER_BOB

Returns the address of the SablierBob contract.

This is an immutable state variable.

```solidity
function SABLIER_BOB() external view returns (address);
```

### feeOnYield

Returns the current global fee on yield for new vaults, denominated in UD60x18, where 1e18 = 100%.

```solidity
function feeOnYield() external view returns (UD60x18);
```

### getTotalYieldBearingTokenBalance

Returns the total amount of yield-bearing tokens held in a vault.

```solidity
function getTotalYieldBearingTokenBalance(uint256 vaultId) external view returns (uint128);
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
function getVaultYieldFee(uint256 vaultId) external view returns (UD60x18);
```

**Parameters**

| Name      | Type      | Description          |
| --------- | --------- | -------------------- |
| `vaultId` | `uint256` | The ID of the vault. |

**Returns**

| Name     | Type      | Description                                                            |
| -------- | --------- | ---------------------------------------------------------------------- |
| `<none>` | `UD60x18` | The yield fee for the vault denominated in UD60x18, where 1e18 = 100%. |

### getYieldBearingTokenBalanceFor

Returns the amount of yield-bearing tokens held for a specific user in a vault.

```solidity
function getYieldBearingTokenBalanceFor(uint256 vaultId, address user) external view returns (uint128);
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
function registerVault(uint256 vaultId) external;
```

**Parameters**

| Name      | Type      | Description                        |
| --------- | --------- | ---------------------------------- |
| `vaultId` | `uint256` | The ID of the newly created vault. |

### setYieldFee

Sets the fee on yield for future vaults.

Emits a [SetYieldFee](/docs/reference/bob/contracts/interfaces/interface.ISablierBobAdapter.md#setyieldfee) event.
Notes:

- This only affects future vaults, fee is not updated for existing vaults. Requirements:
- The caller must be the comptroller.
- `newFee` must not exceed MAX_FEE.

```solidity
function setYieldFee(UD60x18 newFee) external;
```

**Parameters**

| Name     | Type      | Description                                     |
| -------- | --------- | ----------------------------------------------- |
| `newFee` | `UD60x18` | The new yield fee as UD60x18 where 1e18 = 100%. |

### stake

Stakes tokens deposited by a user in a vault, converting them to yield-bearing tokens.

Emits a [Stake](/docs/reference/bob/contracts/interfaces/interface.ISablierBobAdapter.md#stake) event. Requirements:

- The caller must be the SablierBob contract.
- The tokens must have been transferred to this contract.

```solidity
function stake(uint256 vaultId, address user, uint256 amount) external;
```

**Parameters**

| Name      | Type      | Description                                    |
| --------- | --------- | ---------------------------------------------- |
| `vaultId` | `uint256` | The ID of the vault.                           |
| `user`    | `address` | The address of the user depositing the tokens. |
| `amount`  | `uint256` | The amount of tokens to stake.                 |

### unstakeFullAmount

Converts all yield-bearing tokens in a vault back to deposit tokens after settlement.

Emits an [UnstakeFullAmount](/docs/reference/bob/contracts/interfaces/interface.ISablierBobAdapter.md#unstakefullamount)
event. Notes:

- This should only be called once per vault after settlement. Requirements:
- The caller must be the SablierBob contract.

```solidity
function unstakeFullAmount(uint256 vaultId)
    external
    returns (uint128 wrappedTokenBalance, uint128 amountReceivedFromUnstaking);
```

**Parameters**

| Name      | Type      | Description          |
| --------- | --------- | -------------------- |
| `vaultId` | `uint256` | The ID of the vault. |

**Returns**

| Name                          | Type      | Description                                                                  |
| ----------------------------- | --------- | ---------------------------------------------------------------------------- |
| `wrappedTokenBalance`         | `uint128` | The total amount of yield-bearing tokens that were in the vault.             |
| `amountReceivedFromUnstaking` | `uint128` | The total amount of tokens received from unstaking the yield-bearing tokens. |

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
    external;
```

**Parameters**

| Name                             | Type      | Description                                           |
| -------------------------------- | --------- | ----------------------------------------------------- |
| `vaultId`                        | `uint256` | The ID of the vault.                                  |
| `from`                           | `address` | The address transferring vault shares.                |
| `to`                             | `address` | The address receiving vault shares.                   |
| `shareAmountTransferred`         | `uint256` | The number of vault shares being transferred.         |
| `userShareBalanceBeforeTransfer` | `uint256` | The sender's vault share balance before the transfer. |

## Events

### SetYieldFee

Emitted when the comptroller sets a new yield fee.

```solidity
event SetYieldFee(UD60x18 previousFee, UD60x18 newFee);
```

### Stake

Emitted when tokens are staked for a user in a vault.

```solidity
event Stake(uint256 indexed vaultId, address indexed user, uint256 depositAmount, uint256 wrappedStakedAmount);
```

### TransferStakedTokens

Emitted when staked token attribution is transferred between users.

```solidity
event TransferStakedTokens(uint256 indexed vaultId, address indexed from, address indexed to, uint256 amount);
```

### UnstakeFullAmount

Emitted when all staked tokens in a vault are converted back to the deposit token.

```solidity
event UnstakeFullAmount(uint256 indexed vaultId, uint128 totalStakedAmount, uint128 amountReceivedFromUnstaking);
```
