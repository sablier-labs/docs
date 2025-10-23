# SignatureHash

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/libraries/SignatureHash.sol)

Library containing the hashes for the EIP-712 and EIP-1271 signatures.

## State Variables

### CLAIM_TYPEHASH

_The struct type hash for computing the domain separator for EIP-712 and EIP-1271 signatures._

```solidity
bytes32 public constant CLAIM_TYPEHASH =
    keccak256("Claim(uint256 index,address recipient,address to,uint128 amount,uint40 validFrom)");
```

### DOMAIN_TYPEHASH

The domain type hash for computing the domain separator.

```solidity
bytes32 public constant DOMAIN_TYPEHASH =
    keccak256("EIP712Domain(string name,uint256 chainId,address verifyingContract)");
```

### PROTOCOL_NAME

The protocol name for the EIP-712 and EIP-1271 signatures.

```solidity
bytes32 public constant PROTOCOL_NAME = keccak256("Sablier Airdrops Protocol");
```
