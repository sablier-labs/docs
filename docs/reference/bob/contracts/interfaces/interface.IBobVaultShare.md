# IBobVaultShare

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/interfaces/IBobVaultShare.sol)

**Inherits:** IERC20Metadata

**Title:** IBobVaultShare

Interface for the ERC-20 token representing shares in a Bob vault.

## Functions

### SABLIER_BOB

Returns the address of the Bob contract with the authority to mint and burn tokens.

This is an immutable state variable.

```solidity
function SABLIER_BOB() external view returns (address);
```

### VAULT_ID

Returns the vault ID this share token represents.

This is an immutable state variable.

```solidity
function VAULT_ID() external view returns (uint256);
```

### mint

Mints `amount` tokens to `to`.

Emits a {Transfer} event. Requirements:

- The caller must be the SablierBob contract.
- `vaultId` must be equal to the
  [VAULT_ID](/docs/reference/bob/contracts/interfaces/interface.IBobVaultShare.md#vault_id).

```solidity
function mint(uint256 vaultId, address to, uint256 amount) external;
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
- `vaultId` must be equal to the
  [VAULT_ID](/docs/reference/bob/contracts/interfaces/interface.IBobVaultShare.md#vault_id).
- `from` must have at least `amount` tokens.

```solidity
function burn(uint256 vaultId, address from, uint256 amount) external;
```

**Parameters**

| Name      | Type      | Description                                    |
| --------- | --------- | ---------------------------------------------- |
| `vaultId` | `uint256` | The vault ID that this share token represents. |
| `from`    | `address` | The address to burn tokens from.               |
| `amount`  | `uint256` | The amount of tokens to burn.                  |
