# Adminable

[Git Source](https://github.com/sablier-labs/v2-core/blob/73356945b53e8dd4112f34f3e2c63c278c4a5239/src/abstracts/Adminable.sol)

**Inherits:** [IAdminable](/docs/reference/lockup/core/interfaces/interface.IAdminable.md)

See the documentation in [IAdminable](/docs/reference/lockup/core/interfaces/interface.IAdminable.md).

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
- `msg.sender` must be the contract admin.

```solidity
function transferAdmin(address newAdmin) public virtual override onlyAdmin;
```

**Parameters**

| Name       | Type      | Description                   |
| ---------- | --------- | ----------------------------- |
| `newAdmin` | `address` | The address of the new admin. |
