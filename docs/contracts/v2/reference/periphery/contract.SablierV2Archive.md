---
sidebar_position: 1
---

# SablierV2Archive

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/0c389e73d0b3467ccfab52e98140aad7c099aacf/docs/contracts/v2/reference/periphery)

**Inherits:** [ISablierV2Archive](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2Archive.md),
Adminable

_See the documentation in
[ISablierV2Archive](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2Archive.md)._

## State Variables

### isListed

A boolean flag that indicates whether the provided address is part of the archive.

```solidity
mapping(address addr => bool listed) public override isListed;
```

## Functions

### constructor

```solidity
constructor(address initialAdmin);
```

### list

Lists an address in the archive.

Emits a {List} event. Notes:

- It is not an error to list an address that is already listed. Requirements:
- The caller must be the admin.

```solidity
function list(address addr) external onlyAdmin;
```

**Parameters**

| Name   | Type      | Description                                                     |
| ------ | --------- | --------------------------------------------------------------- |
| `addr` | `address` | The address to list in the archive, which should be a contract. |

### unlist

Unlists an address from the archive.

Emits an {Unlist} event. Notes:

- It is not an error to unlist an address that is not already listed. Requirements:
- The caller must be the admin.

```solidity
function unlist(address addr) external onlyAdmin;
```

**Parameters**

| Name   | Type      | Description                                                                  |
| ------ | --------- | ---------------------------------------------------------------------------- |
| `addr` | `address` | The address to unlist from the archive, which is usually a contract address. |
