---
sidebar_position: 2
---

# SablierBob

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/SablierBob.sol)

**Inherits:** [Comptrollerable](/docs/reference/bob/contracts/abstracts/abstract.Comptrollerable.md),
[ISablierBob](/docs/reference/bob/contracts/interfaces/interface.ISablierBob.md), ReentrancyGuard,
[SablierBobState](/docs/reference/bob/contracts/abstracts/abstract.SablierBobState.md)

**Title:** SablierBob

See the documentation in [ISablierBob](/docs/reference/bob/contracts/interfaces/interface.ISablierBob.md).

## Functions

### onlyActive

Modifier to check that the vault is active.

```solidity
modifier onlyActive(uint256 vaultId) ;
```

### constructor

```solidity
constructor(address initialComptroller) [Comptrollerable](/docs/reference/bob/contracts/abstracts/abstract.Comptrollerable.md)(initialComptroller) SablierBobState();
```

**Parameters**

| Name                 | Type      | Description                                      |
| -------------------- | --------- | ------------------------------------------------ |
| `initialComptroller` | `address` | The address of the initial comptroller contract. |

### calculateMinFeeWei

Calculates the minimum fee in wei required to redeem from the given vault ID. Returns 0 for vaults with an adapter,
since the fee is taken from yield generated.

Reverts if `vaultId` references a null vault.

```solidity
function calculateMinFeeWei(uint256 vaultId) external view override notNull(vaultId) returns (uint256 minFeeWei);
```

**Parameters**

| Name      | Type      | Description                 |
| --------- | --------- | --------------------------- |
| `vaultId` | `uint256` | The vault ID for the query. |

### createVault

Creates a new vault with the specified parameters.

Emits a {CreateVault} event. Notes:

- A new ERC-20 share token is deployed for each vault to represent user's share of deposits in the vault.
- The default adapter for the token is copied as the vault adapter. Any change in the default adapter does not affect
  existing vaults.
- Vault creator is responsible for choosing a valid oracle. They should use Chainlink oracles, as the integration is
  based on their API. Requirements:
- `token` must not be the zero address.
- `token` must implement `symbol()` and `decimals()` functions.
- `expiry` must be in the future.
- `oracle` must implement the Chainlink's {AggregatorV3Interface} interface.
- `oracle` must return a positive price when `latestRoundData()` is called.
- `oracle` must return a non-zero value no greater than 36 when `decimals()` is called.
- `targetPrice` must not be zero or greater than the current price returned by the provided oracle.

```solidity
function createVault(
    IERC20 token,
    AggregatorV3Interface oracle,
    uint40 expiry,
    uint128 targetPrice
)
    external
    override
    returns (uint256 vaultId);
```

**Parameters**

| Name          | Type                    | Description                                                                                                               |
| ------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `token`       | `IERC20`                | The address of the ERC-20 token that will be accepted for deposits.                                                       |
| `oracle`      | `AggregatorV3Interface` | The address of the price feed oracle for the deposit token.                                                               |
| `expiry`      | `uint40`                | The Unix timestamp when the vault expires.                                                                                |
| `targetPrice` | `uint128`               | The target price at which the vault settles, denominated in Chainlink's 8-decimal format for USD prices, where 1e8 is $1. |

**Returns**

| Name      | Type      | Description                        |
| --------- | --------- | ---------------------------------- |
| `vaultId` | `uint256` | The ID of the newly created vault. |

### enter

Enter into a vault by depositing tokens into it and minting share tokens to the caller.

Emits an {Enter} event. Notes:

- If an adapter is configured for the vault, tokens are automatically staked for yield using the adapter.
- Share tokens are minted 1:1 with the deposited amount. Requirements:
- `vaultId` must not reference a null vault.
- The vault must have ACTIVE status.
- `amount` must be greater than zero.
- The caller must have approved this contract to transfer `amount` tokens.

```solidity
function enter(uint256 vaultId, uint128 amount)
    external
    override
    nonReentrant
    notNull(vaultId)
    onlyActive(vaultId);
```

**Parameters**

| Name      | Type      | Description                          |
| --------- | --------- | ------------------------------------ |
| `vaultId` | `uint256` | The ID of the vault to deposit into. |
| `amount`  | `uint128` | The amount of tokens to deposit.     |

### enterWithNativeToken

Enter into a vault by depositing native token (such as ETH, POL, etc.) into it and minting share tokens to the caller.

Emits an {Enter} event. Notes:

- `msg.value` is used as the deposit amount.
- See notes for {enter}. Requirements:
- See requirements for {enter}.
- `msg.value` must be greater than zero and must not exceed `type(uint128).max`.

```solidity
function enterWithNativeToken(uint256 vaultId)
    external
    payable
    override
    nonReentrant
    notNull(vaultId)
    onlyActive(vaultId);
```

**Parameters**

| Name      | Type      | Description                          |
| --------- | --------- | ------------------------------------ |
| `vaultId` | `uint256` | The ID of the vault to deposit into. |

### redeem

Redeem the tokens by burning user shares.

Emits a {Redeem} event. Notes:

- If no adapter is configured for the vault, a fee in the native token is applied.
- If an adapter is configured for the vault, a fee, in the deposit token, is deducted from yield generated by the
  adapter.
- If unstake via Lido withdrawal queue contract is triggered, redeem will revert until the withdrawal from the Lido
  queue is finalized. Requirements:
- `vaultId` must not reference a null vault.
- Either block timestamp must be greater than or equal to the vault expiry or the latest price from the oracle must be
  greater than or equal to the target price.
- The share balance of the caller must be greater than zero.
- If no adapter is configured for the vault, `msg.value` must be greater than or equal to the min fee required in the
  native token.

```solidity
function redeem(uint256 vaultId)
    external
    payable
    override
    nonReentrant
    notNull(vaultId)
    returns (uint128 transferAmount, uint128 feeAmountDeductedFromYield);
```

**Parameters**

| Name      | Type      | Description                         |
| --------- | --------- | ----------------------------------- |
| `vaultId` | `uint256` | The ID of the vault to redeem from. |

**Returns**

| Name                         | Type      | Description                                                                                                  |
| ---------------------------- | --------- | ------------------------------------------------------------------------------------------------------------ |
| `transferAmount`             | `uint128` | The amount of tokens transferred to the caller, after fees are deducted (only applicable if adapter is set). |
| `feeAmountDeductedFromYield` | `uint128` | The fee amount deducted from the yield. Zero if no adapter is set.                                           |

### setNativeToken

Sets the native token address. Once set, it cannot be changed.

For more information, see the documentation for {nativeToken}. Emits a {SetNativeToken} event. Requirements:

- `msg.sender` must be the comptroller.
- `newNativeToken` must not be zero address.
- The native token must not be already set.

```solidity
function setNativeToken(address newNativeToken) external override onlyComptroller;
```

**Parameters**

| Name             | Type      | Description                      |
| ---------------- | --------- | -------------------------------- |
| `newNativeToken` | `address` | The address of the native token. |

### setDefaultAdapter

Sets the default adapter for a specific token.

Emits a {SetDefaultAdapter} event. Notes:

- This only affects future vaults. Requirements:
- The caller must be the comptroller.
- If new adapter is not zero address, it must implement
  [ISablierBobAdapter](/docs/reference/bob/contracts/interfaces/interface.ISablierBobAdapter.md) interface.

```solidity
function setDefaultAdapter(IERC20 token, ISablierBobAdapter newAdapter) external override onlyComptroller;
```

**Parameters**

| Name         | Type                 | Description                               |
| ------------ | -------------------- | ----------------------------------------- |
| `token`      | `IERC20`             | The token address to set the adapter for. |
| `newAdapter` | `ISablierBobAdapter` | The address of the new adapter.           |

### syncPriceFromOracle

Fetches the latest price from the oracle set for a vault and updates it in the vault storage.

Emits a {SyncPriceFromOracle} event. Notes:

- Oracle staleness is not validated on-chain when calling this function. Any price returned by the oracle is accepted.
- Useful for syncing the price from oracle without calling {redeem} or {enter}. This function can be called by anyone to
  settle vault when the price is above the target price. Requirements:
- `vaultId` must not reference a null vault.
- The vault must have ACTIVE status.
- The oracle must return a positive price.

```solidity
function syncPriceFromOracle(uint256 vaultId)
    external
    override
    nonReentrant
    notNull(vaultId)
    onlyActive(vaultId)
    returns (uint128 latestPrice);
```

**Parameters**

| Name      | Type      | Description                  |
| --------- | --------- | ---------------------------- |
| `vaultId` | `uint256` | The ID of the vault to sync. |

**Returns**

| Name          | Type      | Description                                                                                                            |
| ------------- | --------- | ---------------------------------------------------------------------------------------------------------------------- |
| `latestPrice` | `uint128` | The latest price fetched from the oracle, denominated in Chainlink's 8-decimal format for USD prices, where 1e8 is $1. |

### unstakeTokensViaAdapter

Unstake all tokens from the adapter for a given vault.

Emits an {UnstakeFromAdapter} event. Requirements:

- `vaultId` must not reference a null vault.
- The adapter set in the vault must not be zero address.
- Either block timestamp must be greater than or equal to the vault expiry or the latest price from the oracle must be
  greater than or equal to the target price.
- The vault must not have been unstaked already.
- The amount staked must be greater than zero.

```solidity
function unstakeTokensViaAdapter(uint256 vaultId)
    external
    override
    nonReentrant
    notNull(vaultId)
    returns (uint128 amountReceivedFromAdapter);
```

**Parameters**

| Name      | Type      | Description          |
| --------- | --------- | -------------------- |
| `vaultId` | `uint256` | The ID of the vault. |

**Returns**

| Name                        | Type      | Description                                     |
| --------------------------- | --------- | ----------------------------------------------- |
| `amountReceivedFromAdapter` | `uint128` | The amount of tokens received from the adapter. |

### onShareTransfer

Called by adapter when share tokens for a given vault are transferred between users. This is required for accounting of
the yield generated by the adapter. Requirements:

- The caller must be the share token contract stored in the given vault.
- The calculated wstETH transfer amount must not be zero.

```solidity
function onShareTransfer(
    uint256 vaultId,
    address from,
    address to,
    uint256 amount,
    uint256 fromBalanceBefore
)
    external
    override;
```

**Parameters**

| Name                | Type      | Description                                                    |
| ------------------- | --------- | -------------------------------------------------------------- |
| `vaultId`           | `uint256` | The ID of the vault.                                           |
| `from`              | `address` | The address transferring share tokens.                         |
| `to`                | `address` | The address receiving share tokens.                            |
| `amount`            | `uint256` | The number of share tokens being transferred.                  |
| `fromBalanceBefore` | `uint256` | The number of share tokens the sender had before the transfer. |

### \_enter

Common function to enter into a vault by depositing tokens into it and minting share tokens to caller.

```solidity
function _enter(uint256 vaultId, address from, uint128 amount, IERC20 token) private;
```

**Parameters**

| Name      | Type      | Description                                                                                                                                   |
| --------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `vaultId` | `uint256` | The ID of the vault to deposit into.                                                                                                          |
| `from`    | `address` | The address holding the vault token when calling this function. In case of native token deposits, the vault tokens are held by this contract. |
| `amount`  | `uint128` | The amount of tokens to deposit.                                                                                                              |
| `token`   | `IERC20`  | The ERC-20 token accepted by the vault.                                                                                                       |

### \_revertIfSettledOrExpired

Private function that reverts if the vault is settled or expired.

```solidity
function _revertIfSettledOrExpired(uint256 vaultId) private view;
```

**Parameters**

| Name      | Type      | Description          |
| --------- | --------- | -------------------- |
| `vaultId` | `uint256` | The ID of the vault. |

### \_syncPriceFromOracle

Private function to fetch the latest oracle price and update it in the vault storage.

```solidity
function _syncPriceFromOracle(uint256 vaultId) private returns (uint128 latestPrice);
```

**Parameters**

| Name      | Type      | Description          |
| --------- | --------- | -------------------- |
| `vaultId` | `uint256` | The ID of the vault. |

**Returns**

| Name          | Type      | Description                       |
| ------------- | --------- | --------------------------------- |
| `latestPrice` | `uint128` | The latest price from the oracle. |

### \_unstakeFullAmountViaAdapter

Private function to unstake all tokens using the adapter.

```solidity
function _unstakeFullAmountViaAdapter(
    uint256 vaultId,
    ISablierBobAdapter adapter
)
    private
    returns (uint128 amountReceivedFromAdapter);
```

**Parameters**

| Name      | Type                 | Description                       |
| --------- | -------------------- | --------------------------------- |
| `vaultId` | `uint256`            | The ID of the vault.              |
| `adapter` | `ISablierBobAdapter` | The adapter to use for unstaking. |

**Returns**

| Name                        | Type      | Description                                                     |
| --------------------------- | --------- | --------------------------------------------------------------- |
| `amountReceivedFromAdapter` | `uint128` | The amount of tokens received from the adapter after unstaking. |
