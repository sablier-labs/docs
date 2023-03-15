# SablierV2Adminable

[Git Source](https://github.com/sablierhq/v2-core/blob/9df2bf8f303f7d13337716257672553e60783b8c/docs/contracts/v2/reference/core/abstracts)

**Inherits:** [ISablierV2Adminable](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Adminable.md)

See the documentation in
[ISablierV2Adminable](docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Adminable.md).

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

Transfers the admin of the contract to a new address. Notes:

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
