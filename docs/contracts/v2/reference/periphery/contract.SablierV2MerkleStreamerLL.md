---
sidebar_position: 3
---

# SablierV2MerkleStreamerLL

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/53e259087984ff748fca6fb932fdb9c663c2b365/src/SablierV2MerkleStreamerLL.sol)

**Inherits:**
[ISablierV2MerkleStreamerLL](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleStreamerLL.md),
[SablierV2MerkleStreamer](/docs/contracts/v2/reference/periphery/abstracts/abstract.SablierV2MerkleStreamer.md)

See the documentation in
[ISablierV2MerkleStreamerLL](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleStreamerLL.md).

## State Variables

### LOCKUP_LINEAR

The address of the [SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) contract.

```solidity
ISablierV2LockupLinear public immutable override LOCKUP_LINEAR;
```

### streamDurations

The total streaming duration of each stream.

```solidity
LockupLinear.Durations public override streamDurations;
```

## Functions

### constructor

_Constructs the contract by initializing the immutable state variables, and max approving the Sablier contract._

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
    SablierV2MerkleStreamer(initialAdmin, asset, lockupLinear, merkleRoot, expiration, cancelable, transferable);
```

### claim

Makes the claim by creating a Lockup Linear stream to the recipient.

Emits a {Claim} event. Requirements:

- The campaign must not have expired.
- The stream must not have been claimed already.
- The protocol fee must be zero.
- The Merkle proof must be valid.

```solidity
function claim(
    uint256 index,
    address recipient,
    uint128 amount,
    bytes32[] calldata merkleProof
)
    external
    override
    returns (uint256 streamId);
```

**Parameters**

| Name          | Type        | Description                                    |
| ------------- | ----------- | ---------------------------------------------- |
| `index`       | `uint256`   | The index of the recipient in the Merkle tree. |
| `recipient`   | `address`   | The address of the stream holder.              |
| `amount`      | `uint128`   | The amount of tokens to be streamed.           |
| `merkleProof` | `bytes32[]` | The Merkle proof of inclusion in the stream.   |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The id of the newly created stream. |
