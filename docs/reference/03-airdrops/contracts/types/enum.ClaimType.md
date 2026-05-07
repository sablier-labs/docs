# ClaimType

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/8b6823c019ff7556ac9ad24cbb5ac62821854d2f/src/types/MerkleBase.sol)

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
