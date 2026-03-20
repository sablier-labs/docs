# Adminable

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/7cb361717fd2f0289ad8d69469a3c00804b21657/src/Adminable.sol)

**Inherits:** [IAdminable](/docs/reference/airdrops/contracts/interfaces/interface.IAdminable.md)

**Title:** Adminable

See the documentation in [IAdminable](/docs/reference/airdrops/contracts/interfaces/interface.IAdminable.md).

## State Variables

### admin

The address of the admin account or contract.

```solidity
address public override admin
```

## Functions

### onlyAdmin

Reverts if called by any account other than the admin.

```solidity
modifier onlyAdmin() ;
```

### constructor

Emits a {TransferAdmin} event.

```solidity
constructor(address initialAdmin) ;
```

**Parameters**

| Name           | Type      | Description                       |
| -------------- | --------- | --------------------------------- |
| `initialAdmin` | `address` | The address of the initial admin. |

### transferAdmin

Transfers the contract admin to a new address.

Notes:

- Does not revert if the admin is the same.
- This function can potentially leave the contract without an admin, thereby removing any functionality that is only
  available to the admin. Requirements:
- `msg.sender` must be the contract admin.

```solidity
function transferAdmin(address newAdmin) public virtual override onlyAdmin;
```

**Parameters**

| Name       | Type      | Description                   |
| ---------- | --------- | ----------------------------- |
| `newAdmin` | `address` | The address of the new admin. |

### \_transferAdmin

An internal function to transfer the admin.

```solidity
function _transferAdmin(address oldAdmin, address newAdmin) internal;
```

### \_onlyAdmin

A private function is used instead of inlining this logic in a modifier because Solidity copies modifiers into every
function that uses them.

```solidity
function _onlyAdmin() private view;
```
