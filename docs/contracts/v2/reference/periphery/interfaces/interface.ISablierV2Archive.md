# ISablierV2Archive

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/0c389e73d0b3467ccfab52e98140aad7c099aacf/docs/contracts/v2/reference/periphery/interfaces)

**Inherits:** IAdminable

An on-chain contract registry that keeps a record of all Sablier V2 contracts, including old deployments.

## Functions

### isListed

A boolean flag that indicates whether the provided address is part of the archive.

```solidity
function isListed(address addr) external returns (bool result);
```

### list

Lists an address in the archive.

Emits a {List} event. Notes:

- It is not an error to list an address that is already listed. Requirements:
- The caller must be the admin.

```solidity
function list(address addr) external;
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
function unlist(address addr) external;
```

**Parameters**

| Name   | Type      | Description                                                                  |
| ------ | --------- | ---------------------------------------------------------------------------- |
| `addr` | `address` | The address to unlist from the archive, which is usually a contract address. |

## Events

### List

Emitted when an address is listed in the archive.

```solidity
event List(address indexed admin, address indexed addr);
```

### Unlist

Emitted when an address is unlisted from the archive.

```solidity
event Unlist(address indexed admin, address indexed addr);
```
