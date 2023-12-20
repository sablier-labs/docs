# SablierV2MerkleStreamerLL

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/release/src/SablierV2MerkleStreamerLL.sol)

**Inherits:**
[ISablierV2MerkleStreamerLL](/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleStreamerLL)
[SablierV2MerkleStreamer](/contracts/v2/reference/periphery/abstracts/abstract.SablierV2MerkleStreamer)

_See the documentation in
[ISablierV2MerkleStreamerLL](/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleStreamerLL)._

## State Variables

### LOCKUP_LINEAR

The address of the {SablierV2LockupLinear} contract.

```solidity
ISablierV2LockupLinear public immutable override LOCKUP_LINEAR;
```

### streamDurations

The total streaming duration of each stream, after claim.

```solidity
LockupLinear.Durations public override streamDurations;
```

## User Facing Functions

### constructor

Constructs the contract by initializing the immutable state variables, and max approving the Sablier contract.

```solidity
constructor(
    address initialAdmin,
    ISablierV2LockupLinear lockupLinear,
    IERC20 asset,
    bytes32 merkleRoot,
    uint40 expiration,
    LockupLinear.Durations memory streamDurations_,
    bool cancelable,
    bool transferable
)
    SablierV2MerkleStreamer(initialAdmin, asset, lockupLinear, merkleRoot, expiration, cancelable, transferable)
{}
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
