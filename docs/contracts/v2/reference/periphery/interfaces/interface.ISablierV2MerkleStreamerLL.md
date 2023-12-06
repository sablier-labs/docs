# ISablierV2MerkleStreamerLL

[Git Source](https://github.com/sablier-labs/v2-periphery/tree/release/src/interfaces/ISablierV2MerkleStreamerLL.sol)

**Inherits:**
[ISablierV2MerkleStreamer](/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleStreamer)

_See the documentation in
[ISablierV2MerkleStreamer](/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleStreamer)._

_Merkle streamer that creates Lockup Linear streams._

## Functions

### LOCKUP_LINEAR

The address of the {SablierV2LockupLinear} contract.

```solidity
function LOCKUP_LINEAR() external returns (ISablierV2LockupLinear);
```

### streamDurations

The total streaming duration of each stream, after claim.

```solidity
function streamDurations() external returns (uint40 cliff, uint40 duration);
```

### claim

Makes the claim by creating a Lockup Linear stream to the recipient.

Emits a {Claim} event. Requirements:

- The protocol fee must be zero.
- The campaign must not have expired.
- The stream must not have been claimed already.
- The Merkle proof must be valid.

```solidity
function claim(
    uint256 index,
    address recipient,
    uint128 amount,
    bytes32[] calldata merkleProof
)
    external
    returns (uint256 streamId);
```

| Name      | Type          | Description                                    |
| --------- | ------------- | ---------------------------------------------- |
| `index`   | `uint256`     | The index of the recipient in the Merkle tree. |
| `address` | `recipient`   | The address of the stream holder.              |
| `amount`  | `uint128`     | The amount of tokens to be streamed.           |
| `bytes32` | `merkleProof` | The Merkle proof of inclusion in the stream.   |
