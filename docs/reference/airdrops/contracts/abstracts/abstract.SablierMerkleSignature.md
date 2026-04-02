# SablierMerkleSignature

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/abstracts/SablierMerkleSignature.sol)

**Inherits:**
[ISablierMerkleSignature](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleSignature.md),
[SablierMerkleBase](/docs/reference/airdrops/contracts/abstracts/abstract.SablierMerkleBase.md)

**Title:** SablierMerkleSignature

See the documentation in
[ISablierMerkleSignature](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleSignature.md).

## State Variables

### \_CACHED_CHAIN_ID

Cache the chain ID in order to invalidate the cached domain separator if the chain ID changes in case of a chain split.

```solidity
uint256 private immutable _CACHED_CHAIN_ID
```

### \_CACHED_DOMAIN_SEPARATOR

The domain separator, as required by EIP-712 and EIP-1271, used for signing claim to prevent replay attacks across
different campaigns.

```solidity
bytes32 private immutable _CACHED_DOMAIN_SEPARATOR
```

### \_attestor

A private variable to store the attestor address if set after the contract is deployed. If zero, the attestor is queried
from the comptroller.

```solidity
address private _attestor
```

## Functions

### constructor

Constructs the contract by initializing the immutable state variables.

```solidity
constructor() ;
```

### attestor

Retrieves the attestor address used for creating attestation signatures.

```solidity
function attestor() external view override returns (address);
```

### domainSeparator

The domain separator, as required by EIP-712 and EIP-1271, used for signing claims to prevent replay attacks across
different campaigns.

```solidity
function domainSeparator() external view override returns (bytes32);
```

### setAttestor

Sets the attestor address used for verifying attestation signatures.

Emits a {SetAttestor} event. Requirements:

- `msg.sender` must be either the comptroller or the campaign admin.

```solidity
function setAttestor(address newAttestor) external override;
```

**Parameters**

| Name          | Type      | Description                                                                        |
| ------------- | --------- | ---------------------------------------------------------------------------------- |
| `newAttestor` | `address` | The new attestor address. If zero, the attestor from the comptroller will be used. |

### \_verifyAttestationSignature

Verifies that the attestation signature created for the recipient is signed by the attestor. It supports both EIP-712
and EIP-1271 signatures.

```solidity
function _verifyAttestationSignature(address recipient, uint40 expireAt, bytes calldata signature) internal view;
```

### \_verifyClaimSignature

Verifies that the claim signature is signed by the recipient. It supports both EIP-712 and EIP-1271 signatures.

```solidity
function _verifyClaimSignature(
    uint256 index,
    address recipient,
    address to,
    uint128 amount,
    uint40 validFrom,
    bytes calldata signature
)
    internal
    view;
```

### \_domainSeparator

Returns the domain separator for the current chain.

```solidity
function _domainSeparator() private view returns (bytes32);
```

### \_getAttestor

Returns the attestor address.

```solidity
function _getAttestor() private view returns (address);
```

### \_verifySignature

Verifies that the EIP-712 or EIP-1271 signature is signed by the expected signer.

```solidity
function _verifySignature(address signer, bytes32 structHash, bytes calldata signature) private view;
```
