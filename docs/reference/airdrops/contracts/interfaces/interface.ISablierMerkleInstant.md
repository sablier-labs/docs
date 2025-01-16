# ISablierMerkleInstant

[Git Source](https://github.com/sablier-labs/airdrops/blob/1ad7325bc0401d0ea6d9f30917c49d5367a1180e/src/interfaces/ISablierMerkleInstant.sol)

**Inherits:** [ISablierMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleBase.md)

MerkleInstant enables airdrop distributions where the tokens are claimed directly to the users' wallets.

## Events

### Claim

Emitted when a recipient claims an instant airdrop.

```solidity
event Claim(uint256 index, address indexed recipient, uint128 amount);
```
