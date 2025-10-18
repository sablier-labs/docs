# Adminable

[Git Source](https://github.com/sablier-labs/evm-utils/blob/d7d6c051a39cbacadef672e92ed9d57628c80dc4/src/Adminable.sol)

**Inherits:** IAdminable

See the documentation in {IAdminable}.

## State Variables

### admin

The address of the admin account or contract.

```solidity
address public override admin;
```

## Functions

### onlyAdmin

Reverts if called by any account other than the admin.

```solidity
modifier onlyAdmin();
```

### constructor

_Emits a {TransferAdmin} event._

```solidity
constructor(address initialAdmin);
```

**Parameters**

| Name           | Type      | Description                       |
| -------------- | --------- | --------------------------------- |
| `initialAdmin` | `address` | The address of the initial admin. |

### transferAdmin

Transfers the contract admin to a new address.

\*Notes:

- Does not revert if the admin is the same.
- This function can potentially leave the contract without an admin, thereby removing any functionality that is only
  available to the admin. Requirements:
- `msg.sender` must be the contract admin.\*

```solidity
function transferAdmin(address newAdmin) public virtual override onlyAdmin;
```

**Parameters**

| Name       | Type      | Description                   |
| ---------- | --------- | ----------------------------- |
| `newAdmin` | `address` | The address of the new admin. |

### \_transferAdmin

_An internal function to transfer the admin._

```solidity
function _transferAdmin(address oldAdmin, address newAdmin) internal;
```

### \_onlyAdmin

_A private function is used instead of inlining this logic in a modifier because Solidity copies modifiers into every
function that uses them._

```solidity
function _onlyAdmin() private view;
```
