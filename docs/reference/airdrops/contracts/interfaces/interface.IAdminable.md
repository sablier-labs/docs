# IAdminable

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/003a71932c0e26e767a02c21205a077469406ac8/src/interfaces/IAdminable.sol)

**Title:** IAdminable

Contract module that provides a basic access control mechanism, with an admin that can be granted exclusive access to
specific functions. The inheriting contract must set the initial admin in the constructor.

## Functions

### admin

The address of the admin account or contract.

```solidity
function admin() external view returns (address);
```

### transferAdmin

Transfers the contract admin to a new address.

Notes:

- Does not revert if the admin is the same.
- This function can potentially leave the contract without an admin, thereby removing any functionality that is only
  available to the admin. Requirements:
- `msg.sender` must be the contract admin.

```solidity
function transferAdmin(address newAdmin) external;
```

**Parameters**

| Name       | Type      | Description                   |
| ---------- | --------- | ----------------------------- |
| `newAdmin` | `address` | The address of the new admin. |

## Events

### TransferAdmin

Emitted when the admin is transferred.

```solidity
event TransferAdmin(address indexed oldAdmin, address indexed newAdmin);
```

**Parameters**

| Name       | Type      | Description                   |
| ---------- | --------- | ----------------------------- |
| `oldAdmin` | `address` | The address of the old admin. |
| `newAdmin` | `address` | The address of the new admin. |
