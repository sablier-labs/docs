# SignatureHash

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/7cb361717fd2f0289ad8d69469a3c00804b21657/src/libraries/SignatureHash.sol)

**Title:** SignatureHash

Library containing the hashes for the EIP-712 and EIP-1271 signatures.

## State Variables

### CLAIM_TYPEHASH

The struct type hash for the claim signature.

```solidity
bytes32 public constant CLAIM_TYPEHASH =
    keccak256("Claim(uint256 index,address recipient,address to,uint128 amount,uint40 validFrom)")
```

### DOMAIN_TYPEHASH

The domain type hash for computing the domain separator.

```solidity
bytes32 public constant DOMAIN_TYPEHASH =
    keccak256("EIP712Domain(string name,uint256 chainId,address verifyingContract)")
```

### IDENTITY_TYPEHASH

The struct type hash for the attestation signature.

```solidity
bytes32 public constant IDENTITY_TYPEHASH = keccak256("Identity(address recipient,uint40 expireAt)")
```

### PROTOCOL_NAME

The protocol name for the EIP-712 and EIP-1271 signatures.

```solidity
bytes32 public constant PROTOCOL_NAME = keccak256("Sablier Airdrops Protocol")
```
