# Errors

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/libraries/Errors.sol)

Library containing all custom errors the protocol may revert with.

## Errors

### SablierFactoryMerkleBase_ForbidNativeToken

Thrown when trying to create a campaign with native token.

```solidity
error SablierFactoryMerkleBase_ForbidNativeToken(address nativeToken);
```

### SablierFactoryMerkleBase_NativeTokenAlreadySet

Thrown when trying to set the native token address when it is already set.

```solidity
error SablierFactoryMerkleBase_NativeTokenAlreadySet(address nativeToken);
```

### SablierFactoryMerkleBase_NativeTokenZeroAddress

Thrown when trying to set zero address as native token.

```solidity
error SablierFactoryMerkleBase_NativeTokenZeroAddress();
```

### SablierFactoryMerkleLT_TotalPercentageNotOneHundred

Thrown when trying to create an LT campaign with tranches' unlock percentages not adding up to 100%.

```solidity
error SablierFactoryMerkleLT_TotalPercentageNotOneHundred(uint64 totalPercentage);
```

### SablierFactoryMerkleVCA_ExpirationTooEarly

Thrown if expiration time is within 1 week from the vesting end time.

```solidity
error SablierFactoryMerkleVCA_ExpirationTooEarly(uint40 vestingEndTime, uint40 expiration);
```

### SablierFactoryMerkleVCA_ExpirationTimeZero

Thrown if expiration time is zero.

```solidity
error SablierFactoryMerkleVCA_ExpirationTimeZero();
```

### SablierFactoryMerkleVCA_VestingEndTimeNotGreaterThanVestingStartTime

Thrown if vesting end time is not greater than the vesting start time.

```solidity
error SablierFactoryMerkleVCA_VestingEndTimeNotGreaterThanVestingStartTime(
    uint40 vestingStartTime, uint40 vestingEndTime
);
```

### SablierFactoryMerkleVCA_StartTimeZero

Thrown if the start time is zero.

```solidity
error SablierFactoryMerkleVCA_StartTimeZero();
```

### SablierFactoryMerkleVCA_UnlockPercentageTooHigh

Thrown if the unlock percentage is greater than 100%.

```solidity
error SablierFactoryMerkleVCA_UnlockPercentageTooHigh(UD60x18 unlockPercentage);
```

### SablierMerkleBase_CallerNotComptroller

Thrown when caller is not the comptroller.

```solidity
error SablierMerkleBase_CallerNotComptroller(address comptroller, address caller);
```

### SablierMerkleBase_CampaignExpired

Thrown when trying to claim after the campaign has expired.

```solidity
error SablierMerkleBase_CampaignExpired(uint256 blockTimestamp, uint40 expiration);
```

### SablierMerkleBase_CampaignNotStarted

Thrown when trying to claim before the campaign start time.

```solidity
error SablierMerkleBase_CampaignNotStarted(uint256 blockTimestamp, uint40 campaignStartTime);
```

### SablierMerkleBase_ClawbackNotAllowed

Thrown when trying to clawback when the current timestamp is over the grace period and the campaign has not expired.

```solidity
error SablierMerkleBase_ClawbackNotAllowed(uint256 blockTimestamp, uint40 expiration, uint40 firstClaimTime);
```

### SablierMerkleBase_FeeTransferFailed

Thrown if fee transfer fails.

```solidity
error SablierMerkleBase_FeeTransferFailed(address feeRecipient, uint256 feeAmount);
```

### SablierMerkleBase_IndexClaimed

Thrown when trying to claim the same index more than once.

```solidity
error SablierMerkleBase_IndexClaimed(uint256 index);
```

### SablierMerkleBase_InsufficientFeePayment

Thrown when trying to claim without paying the min fee.

```solidity
error SablierMerkleBase_InsufficientFeePayment(uint256 feePaid, uint256 minFeeWei);
```

### SablierMerkleBase_InvalidProof

Thrown when trying to claim with an invalid Merkle proof.

```solidity
error SablierMerkleBase_InvalidProof();
```

### SablierMerkleBase_InvalidSignature

Thrown when claiming with an invalid EIP-712 or EIP-1271 signature.

```solidity
error SablierMerkleBase_InvalidSignature();
```

### SablierMerkleBase_NewMinFeeUSDNotLower

Thrown when trying to set a new min USD fee that is higher than the current fee.

```solidity
error SablierMerkleBase_NewMinFeeUSDNotLower(uint256 currentMinFeeUSD, uint256 newMinFeeUSD);
```

### SablierMerkleBase_SignatureNotYetValid

Thrown when trying to claim with a signature that is not yet valid.

```solidity
error SablierMerkleBase_SignatureNotYetValid(uint40 validFrom, uint40 blockTimestamp);
```

### SablierMerkleBase_ToZeroAddress

Thrown when trying to claim to the zero address.

```solidity
error SablierMerkleBase_ToZeroAddress();
```

### SablierMerkleVCA_VestingNotStarted

Thrown when calculating the forgone amount with claim time less than the vesting start time.

```solidity
error SablierMerkleVCA_VestingNotStarted(uint40 claimTime, uint40 vestingStartTime);
```

### SablierMerkleVCA_ClaimAmountZero

Thrown when the claim amount is zero.

```solidity
error SablierMerkleVCA_ClaimAmountZero(address recipient);
```
