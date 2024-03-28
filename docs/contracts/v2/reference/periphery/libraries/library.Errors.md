# Errors

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/a3131838ec731b38b1e2e03735fba874ab66f5e2/src/libraries/Errors.sol)

Library containing all custom errors the protocol may revert with.

## Errors

### SablierV2Batch_BatchSizeZero

```solidity
error SablierV2Batch_BatchSizeZero();
```

### SablierV2MerkleLockup_CampaignExpired

Thrown when trying to claim after the campaign has expired.

```solidity
error SablierV2MerkleLockup_CampaignExpired(uint256 currentTime, uint40 expiration);
```

### SablierV2MerkleLockup_CampaignNameTooLong

Thrown when trying to create a campaign with a name that is too long.

```solidity
error SablierV2MerkleLockup_CampaignNameTooLong(uint256 nameLength, uint256 maxLength);
```

### SablierV2MerkleLockup_CampaignNotExpired

Thrown when trying to clawback when the campaign has not expired.

```solidity
error SablierV2MerkleLockup_CampaignNotExpired(uint256 currentTime, uint40 expiration);
```

### SablierV2MerkleLockup_InvalidProof

Thrown when trying to claim with an invalid Merkle proof.

```solidity
error SablierV2MerkleLockup_InvalidProof();
```

### SablierV2MerkleLockup_StreamClaimed

Thrown when trying to claim the same stream more than once.

```solidity
error SablierV2MerkleLockup_StreamClaimed(uint256 index);
```

### SablierV2MerkleLockupFactory_TotalPercentageNotEqualOneHundred

Thrown when the sum of the tranches' unlock percentages does not equal 100%.

```solidity
error SablierV2MerkleLockupFactory_TotalPercentageNotEqualOneHundred(uint256 totalPercentage);
```
