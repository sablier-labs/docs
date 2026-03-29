# ISablierBobState

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/interfaces/ISablierBobState.sol)

**Title:** ISablierBobState

Contract with state variables for the [SablierBob](/docs/reference/bob/contracts/contract.SablierBob.md) contract, their
respective getters and modifiers.

## Functions

### getAdapter

Returns the adapter configured for a specific vault.

Reverts if `vaultId` references a null vault.

```solidity
function getAdapter(uint256 vaultId) external view returns (ISablierBobAdapter adapter);
```

### getDefaultAdapterFor

Returns the default adapter for a given token.

Zero address means no adapter is set.

```solidity
function getDefaultAdapterFor(IERC20 token) external view returns (ISablierBobAdapter adapter);
```

**Parameters**

| Name    | Type     | Description                                        |
| ------- | -------- | -------------------------------------------------- |
| `token` | `IERC20` | The ERC-20 token to query the default adapter for. |

**Returns**

| Name      | Type                 | Description                        |
| --------- | -------------------- | ---------------------------------- |
| `adapter` | `ISablierBobAdapter` | The default adapter for the token. |

### getExpiry

Returns the timestamp when the vault expires.

Reverts if `vaultId` references a null vault.

```solidity
function getExpiry(uint256 vaultId) external view returns (uint40 expiry);
```

### getLastSyncedAt

Returns the timestamp when the oracle price was last synced for a vault.

Reverts if `vaultId` references a null vault.

```solidity
function getLastSyncedAt(uint256 vaultId) external view returns (uint40 lastSyncedAt);
```

### getLastSyncedPrice

Returns the oracle price stored for a vault.

Reverts if `vaultId` references a null vault.

```solidity
function getLastSyncedPrice(uint256 vaultId) external view returns (uint128 lastSyncedPrice);
```

### getOracle

Returns the oracle address set for a vault.

Reverts if `vaultId` references a null vault.

```solidity
function getOracle(uint256 vaultId) external view returns (AggregatorV3Interface oracle);
```

### getShareToken

Returns the address of the ERC-20 share token for a vault.

Reverts if `vaultId` references a null vault.

```solidity
function getShareToken(uint256 vaultId) external view returns (IBobVaultShare shareToken);
```

### getTargetPrice

Returns the target price at which the vault settles.

Reverts if `vaultId` references a null vault.

```solidity
function getTargetPrice(uint256 vaultId) external view returns (uint128 targetPrice);
```

### getUnderlyingToken

Returns the ERC-20 token accepted for deposits in a vault.

Reverts if `vaultId` references a null vault.

```solidity
function getUnderlyingToken(uint256 vaultId) external view returns (IERC20 token);
```

### isStakedInAdapter

Returns whether the vault tokens are staked in an adapter.

Reverts if `vaultId` references a null vault.

```solidity
function isStakedInAdapter(uint256 vaultId) external view returns (bool stakedInAdapter);
```

### nativeToken

Retrieves the address of the ERC-20 interface of the native token, if it exists.

The native tokens on some chains have a dual interface as ERC-20. For example, on Polygon the $POL token is the native
token and has an ERC-20 version at 0x0000000000000000000000000000000000001010. This means that `address(this).balance`
returns the same value as `balanceOf(address(this))`. To avoid any unintended behavior, these tokens cannot be used in
Sablier. As an alternative, users can use the Wrapped version of the token, i.e. WMATIC, which is a standard ERC-20
token.

```solidity
function nativeToken() external view returns (address);
```

### nextVaultId

Counter for vault IDs, incremented every time a new vault is created.

```solidity
function nextVaultId() external view returns (uint256);
```

### statusOf

Returns the vault status.

Reverts if `vaultId` references a null vault.

```solidity
function statusOf(uint256 vaultId) external view returns (Bob.Status status);
```
