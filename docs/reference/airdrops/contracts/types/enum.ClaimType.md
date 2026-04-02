# ClaimType

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/types/MerkleBase.sol)

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
