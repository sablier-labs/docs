# Errors

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/53e259087984ff748fca6fb932fdb9c663c2b365/src/libraries/Errors.sol)

Library containing all custom errors the protocol may revert with.

## Errors

### SablierV2Batch_BatchSizeZero

```solidity
error SablierV2Batch_BatchSizeZero();
```

### SablierV2MerkleStreamer_CampaignExpired

Thrown when trying to claim after the campaign has expired.

```solidity
error SablierV2MerkleStreamer_CampaignExpired(uint256 currentTime, uint40 expiration);
```

### SablierV2MerkleStreamer_CampaignNotExpired

Thrown when trying to clawback when the campaign has not expired.

```solidity
error SablierV2MerkleStreamer_CampaignNotExpired(uint256 currentTime, uint40 expiration);
```

### SablierV2MerkleStreamer_InvalidProof

Thrown when trying to claim with an invalid Merkle proof.

```solidity
error SablierV2MerkleStreamer_InvalidProof();
```

### SablierV2MerkleStreamer_ProtocolFeeNotZero

Thrown when trying to claim when the protocol fee is not zero.

```solidity
error SablierV2MerkleStreamer_ProtocolFeeNotZero();
```

### SablierV2MerkleStreamer_StreamClaimed

Thrown when trying to claim the same stream more than once.

```solidity
error SablierV2MerkleStreamer_StreamClaimed(uint256 index);
```
