# Errors

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/libraries/Errors.sol)

**Title:** Errors

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

### SablierFactoryMerkleExecute_TargetNotContract

Thrown when trying to create a merkle execute campaign with a target that is not a contract.

```solidity
error SablierFactoryMerkleExecute_TargetNotContract(address target);
```

### SablierFactoryMerkleLT_TotalPercentageNotOneHundred

Thrown when trying to create an LT campaign with tranches' unlock percentages not adding up to 100%.

```solidity
error SablierFactoryMerkleLT_TotalPercentageNotOneHundred(uint64 totalPercentage);
```

### SablierFactoryMerkleVCA_AggregateAmountZero

Thrown when trying to create a Merkle VCA campaign with zero aggregate amount.

```solidity
error SablierFactoryMerkleVCA_AggregateAmountZero();
```

### SablierFactoryMerkleVCA_ExpirationTimeZero

Thrown if expiration time is zero.

```solidity
error SablierFactoryMerkleVCA_ExpirationTimeZero();
```

### SablierFactoryMerkleVCA_ExpirationTooEarly

Thrown if expiration time is within 1 week from the vesting end time.

```solidity
error SablierFactoryMerkleVCA_ExpirationTooEarly(uint40 vestingEndTime, uint40 expiration);
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

### SablierFactoryMerkleVCA_VestingEndTimeNotGreaterThanVestingStartTime

Thrown if vesting end time is not greater than the vesting start time.

```solidity
error SablierFactoryMerkleVCA_VestingEndTimeNotGreaterThanVestingStartTime(
    uint40 vestingStartTime,
    uint40 vestingEndTime
);
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

### SablierMerkleBase_NewMinFeeUSDNotLower

Thrown when trying to set a new min USD fee that is higher than the current fee.

```solidity
error SablierMerkleBase_NewMinFeeUSDNotLower(uint256 currentMinFeeUSD, uint256 newMinFeeUSD);
```

### SablierMerkleBase_SponsorAmountZero

Thrown when trying to sponsor with a zero amount.

```solidity
error SablierMerkleBase_SponsorAmountZero();
```

### SablierMerkleBase_ToZeroAddress

Thrown when trying to claim to the zero address.

```solidity
error SablierMerkleBase_ToZeroAddress();
```

### SablierMerkleBase_UnsupportedClaimType

Thrown when trying to call a claim function not supported in the campaign.

```solidity
error SablierMerkleBase_UnsupportedClaimType(ClaimType claimTypeRequired, ClaimType claimTypeSupported);
```

### SablierMerkleExecute_NotFullAmountTransferred

Thrown when the transferred amount is not equal to the claim amount during `claimAndExecute`.

```solidity
error SablierMerkleExecute_NotFullAmountTransferred(uint256 amountTransferred, uint256 claimAmount);
```

### SablierMerkleSignature_AttestationExpired

Thrown when the attestation signature has expired.

```solidity
error SablierMerkleSignature_AttestationExpired(uint256 expireAt, uint256 blockTimestamp);
```

### SablierMerkleSignature_AttestorNotSet

Thrown when the attestor returns the zero address.

```solidity
error SablierMerkleSignature_AttestorNotSet();
```

### SablierMerkleSignature_CallerNotAuthorized

Thrown when caller is not the comptroller or campaign admin.

```solidity
error SablierMerkleSignature_CallerNotAuthorized(address caller, address campaignAdmin, address comptroller);
```

### SablierMerkleSignature_InvalidSignature

Thrown when claiming with an invalid EIP-712 or EIP-1271 signature.

```solidity
error SablierMerkleSignature_InvalidSignature();
```

### SablierMerkleSignature_SignatureNotYetValid

Thrown when trying to claim with a signature that is not yet valid.

```solidity
error SablierMerkleSignature_SignatureNotYetValid(uint40 validFrom, uint40 blockTimestamp);
```

### SablierMerkleVCA_ClaimAmountZero

Thrown when the claim amount is zero.

```solidity
error SablierMerkleVCA_ClaimAmountZero(address recipient);
```

### SablierMerkleVCA_RedistributionAlreadyEnabled

Thrown when trying to switch to redistribute strategy when already using it.

```solidity
error SablierMerkleVCA_RedistributionAlreadyEnabled();
```

### SablierMerkleVCA_RedistributionNotEnabled

Thrown when trying to calculate the rewards amount without redistribution enabled.

```solidity
error SablierMerkleVCA_RedistributionNotEnabled();
```

### SablierMerkleVCA_VestingEndTimeNotInFuture

Thrown when trying to enable redistribution after the vesting end time.

```solidity
error SablierMerkleVCA_VestingEndTimeNotInFuture(uint256 vestingEndTime, uint256 blockTimestamp);
```

### SablierMerkleVCA_VestingNotStarted

Thrown when calculating the forgone amount with claim time less than the vesting start time.

```solidity
error SablierMerkleVCA_VestingNotStarted(uint40 claimTime, uint40 vestingStartTime);
```
