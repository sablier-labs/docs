# ClaimType

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/7cb361717fd2f0289ad8d69469a3c00804b21657/src/types/MerkleBase.sol)

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
