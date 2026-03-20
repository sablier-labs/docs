# ClaimType

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/003a71932c0e26e767a02c21205a077469406ac8/src/types/MerkleBase.sol)

Enum representing the type of claim functions supported by a Merkle campaign.

**Notes:**

- value0: DEFAULT Activates `claim`, `claimTo`, and `claimViaSig` functions.

- value1: ATTEST Activates `claimViaAttestation` function only.

- value2: EXECUTE Activates `claimAndExecute` function only.

```solidity
enum ClaimType {
DEFAULT,
ATTEST,
EXECUTE
}
```
