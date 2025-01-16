# Adminable

[Git Source](https://github.com/sablier-labs/lockup/blob/076eba971fea7bb38fe75ee5108f0589c26152c0/src/abstracts/Adminable.sol)

**Inherits:** [IAdminable](/docs/reference/lockup/contracts/interfaces/interface.IAdminable.md)

See the documentation in [IAdminable](/docs/reference/lockup/contracts/interfaces/interface.IAdminable.md).

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
