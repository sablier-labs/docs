# Errors

[Git Source](https://github.com/sablier-labs/airdrops/blob/f9a358c0a5bccfec77601d4490ef9117e0488068/src/libraries/Errors.sol)

Library containing all custom errors the protocol may revert with.

## Errors

### CallerNotAdmin

```solidity
error CallerNotAdmin(address admin, address caller);
```

### SablierMerkleBase_CallerNotFactory

Thrown when caller is not the factory contract.

```solidity
error SablierMerkleBase_CallerNotFactory(address factory, address caller);
```

### SablierMerkleBase_CampaignExpired

Thrown when trying to claim after the campaign has expired.

```solidity
error SablierMerkleBase_CampaignExpired(uint256 blockTimestamp, uint40 expiration);
```

### SablierMerkleBase_ClawbackNotAllowed

Thrown when trying to clawback when the current timestamp is over the grace period and the campaign has not expired.

```solidity
error SablierMerkleBase_ClawbackNotAllowed(uint256 blockTimestamp, uint40 expiration, uint40 firstClaimTime);
```

### SablierMerkleBase_FeeTransferFail

Thrown if the fees withdrawal failed.

```solidity
error SablierMerkleBase_FeeTransferFail(address factoryAdmin, uint256 feeAmount);
```

### SablierMerkleBase_InsufficientFeePayment

Thrown when trying to claim with an insufficient fee payment.

```solidity
error SablierMerkleBase_InsufficientFeePayment(uint256 feePaid, uint256 fee);
```

### SablierMerkleBase_InvalidProof

Thrown when trying to claim with an invalid Merkle proof.

```solidity
error SablierMerkleBase_InvalidProof();
```

### SablierMerkleBase_StreamClaimed

Thrown when trying to claim the same stream more than once.

```solidity
error SablierMerkleBase_StreamClaimed(uint256 index);
```

### SablierMerkleLT_TotalPercentageNotOneHundred

Thrown when trying to claim from an LT campaign with tranches' unlock percentages not adding up to 100%.

```solidity
error SablierMerkleLT_TotalPercentageNotOneHundred(uint64 totalPercentage);
```
