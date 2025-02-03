# ISablierMerkleInstant

[Git Source](https://github.com/sablier-labs/airdrops/blob/f9a358c0a5bccfec77601d4490ef9117e0488068/src/interfaces/ISablierMerkleInstant.sol)

**Inherits:** [ISablierMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleBase.md)

MerkleInstant enables airdrop distributions where the tokens are claimed directly to the users' wallets.

## Events

### Claim

Emitted when a recipient claims an instant airdrop.

```solidity
event Claim(uint256 index, address indexed recipient, uint128 amount);
```
