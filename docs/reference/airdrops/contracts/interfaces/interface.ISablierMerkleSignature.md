# ISablierMerkleSignature

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/interfaces/ISablierMerkleSignature.sol)

**Inherits:** [ISablierMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleBase.md)

**Title:** ISablierMerkleSignature

Abstract contract providing helper functions for verifying EIP-712 and EIP-1271 signatures for Merkle campaigns.

## Functions

### attestor

Retrieves the attestor address used for creating attestation signatures.

```solidity
function attestor() external view returns (address);
```

### domainSeparator

The domain separator, as required by EIP-712 and EIP-1271, used for signing claims to prevent replay attacks across
different campaigns.

```solidity
function domainSeparator() external view returns (bytes32);
```

### setAttestor

Sets the attestor address used for verifying attestation signatures.

Emits a [SetAttestor](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleSignature.md#setattestor)
event. Requirements:

- `msg.sender` must be either the comptroller or the campaign admin.

```solidity
function setAttestor(address newAttestor) external;
```

**Parameters**

| Name          | Type      | Description                                                                        |
| ------------- | --------- | ---------------------------------------------------------------------------------- |
| `newAttestor` | `address` | The new attestor address. If zero, the attestor from the comptroller will be used. |

## Events

### SetAttestor

Emitted when the address of the attestor is set in this contract.

```solidity
event SetAttestor(address indexed caller, address indexed previousAttestor, address indexed newAttestor);
```
