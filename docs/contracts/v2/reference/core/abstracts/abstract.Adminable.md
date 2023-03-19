# Adminable

[Git Source](https://github.com/sablierhq/v2-core/blob/e69c450f9b8808e324f31933450818ca28d0800b/docs/contracts/v2/reference/core/abstracts)

**Inherits:** [IAdminable](/docs/contracts/v2/reference/core/interfaces/interface.IAdminable.md)

See the documentation in [IAdminable](docs/contracts/v2/reference/core/interfaces/interface.IAdminable.md).

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

### transferAdmin

Transfers the contract admin to a new address.

Notes:

- Does not revert if the admin is the same.
- This function can potentially leave the contract without an admin, thereby removing any functionality that is only
  available to the admin. Requirements:
- The caller must be the contract admin.

```solidity
function transferAdmin(address newAdmin) public virtual override onlyAdmin;
```

**Parameters**

| Name       | Type      | Description                   |
| ---------- | --------- | ----------------------------- |
| `newAdmin` | `address` | The address of the new admin. |
