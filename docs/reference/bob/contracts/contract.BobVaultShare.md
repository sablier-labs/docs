---
sidebar_position: 3
---

# BobVaultShare

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/BobVaultShare.sol)

**Inherits:** ERC20, [IBobVaultShare](/docs/reference/bob/contracts/interfaces/interface.IBobVaultShare.md)

**Title:** BobVaultShare

ERC-20 token representing shares in a Bob vault.

Each vault has its own BobVaultShare deployed. Only the SablierBob contract can mint and burn tokens. When shares are
transferred, wstETH attribution is updated proportionally via the adapter.

## State Variables

### SABLIER_BOB

Returns the address of the Bob contract with the authority to mint and burn tokens.

This is an immutable state variable.

```solidity
address public immutable override SABLIER_BOB
```

### VAULT_ID

Returns the vault ID this share token represents.

This is an immutable state variable.

```solidity
uint256 public immutable override VAULT_ID
```

### \_DECIMALS

The number of decimals.

```solidity
uint8 internal immutable _DECIMALS
```

## Functions

### onlySablierBob

Reverts if caller is not the Bob contract.

```solidity
modifier onlySablierBob() ;
```

### onlyVault

Reverts if the vault ID is not equal to {VAULT_ID}.

```solidity
modifier onlyVault(uint256 vaultId) ;
```

### constructor

Deploys the vault share token.

```solidity
constructor(
    string memory name_,
    string memory symbol_,
    uint8 decimals_,
    address sablierBob,
    uint256 vaultId
)
    ERC20(name_, symbol_);
```

**Parameters**

| Name         | Type      | Description                                                                                                                                                                                         |
| ------------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name_`      | `string`  | The name of the token (e.g., "Sablier Bob WETH Vault #1").                                                                                                                                          |
| `symbol_`    | `string`  | The symbol of the token (e.g., "WETH-500000000000-1792790393-1" with $5000 target price) with the first number being the target price denominated in Chainlink's 8-decimal format, where 1e8 is $1. |
| `decimals_`  | `uint8`   | The number of decimals.                                                                                                                                                                             |
| `sablierBob` | `address` | The address of the SablierBob contract.                                                                                                                                                             |
| `vaultId`    | `uint256` | The ID of the vault this share token represents.                                                                                                                                                    |

### decimals

Returns the number of decimals used by the token.

```solidity
function decimals() public view override(ERC20, IERC20Metadata) returns (uint8);
```

### mint

Mints `amount` tokens to `to`.

Emits a {Transfer} event. Requirements:

- The caller must be the SablierBob contract.
- `vaultId` must be equal to the {VAULT_ID}.

```solidity
function mint(uint256 vaultId, address to, uint256 amount) external override onlySablierBob onlyVault(vaultId);
```

**Parameters**

| Name      | Type      | Description                                    |
| --------- | --------- | ---------------------------------------------- |
| `vaultId` | `uint256` | The vault ID that this share token represents. |
| `to`      | `address` | The address to mint tokens to.                 |
| `amount`  | `uint256` | The amount of tokens to mint.                  |

### burn

Burns `amount` tokens from `from`.

Emits a {Transfer} event. Requirements:

- The caller must be the SablierBob contract.
- `vaultId` must be equal to the {VAULT_ID}.
- `from` must have at least `amount` tokens.

```solidity
function burn(uint256 vaultId, address from, uint256 amount) external override onlySablierBob onlyVault(vaultId);
```

**Parameters**

| Name      | Type      | Description                                    |
| --------- | --------- | ---------------------------------------------- |
| `vaultId` | `uint256` | The vault ID that this share token represents. |
| `from`    | `address` | The address to burn tokens from.               |
| `amount`  | `uint256` | The amount of tokens to burn.                  |

### \_update

Override to notify SablierBob when shares are transferred (not minted/burned). This allows the adapter to update wstETH
attribution proportionally.

```solidity
function _update(address from, address to, uint256 amount) internal override;
```
