# Errors

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/ed3be5dc823dd81219f8060a6e6b32ead6c8de84/src/libraries/Errors.sol)

Library containing all custom errors the protocol may revert with.

## Errors

### SablierV2BatchLockup_BatchSizeZero

```solidity
error SablierV2BatchLockup_BatchSizeZero();
```

### SablierV2MerkleLockup_CampaignExpired

Thrown when trying to claim after the campaign has expired.

```solidity
error SablierV2MerkleLockup_CampaignExpired(uint256 blockTimestamp, uint40 expiration);
```

### SablierV2MerkleLockup_CampaignNameTooLong

Thrown when trying to create a campaign with a name that is too long.

```solidity
error SablierV2MerkleLockup_CampaignNameTooLong(uint256 nameLength, uint256 maxLength);
```

### SablierV2MerkleLockup_ClawbackNotAllowed

Thrown when trying to clawback when the current timestamp is over the grace period and the campaign has not expired.

```solidity
error SablierV2MerkleLockup_ClawbackNotAllowed(uint256 blockTimestamp, uint40 expiration, uint40 firstClaimTime);
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

### SablierV2MerkleLT_TotalPercentageNotOneHundred

Thrown when trying to claim from an LT campaign with tranches' unlock percentages not adding up to 100%.

```solidity
error SablierV2MerkleLT_TotalPercentageNotOneHundred(uint64 totalPercentage);
```
