# ISablierV2MerkleStreamerLL

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/53e259087984ff748fca6fb932fdb9c663c2b365/src/interfaces/ISablierV2MerkleStreamerLL.sol)

**Inherits:**
[ISablierV2MerkleStreamer](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleStreamer.md)

Merkle streamer that creates Lockup Linear streams.

## Functions

### LOCKUP_LINEAR

The address of the [SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) contract.

```solidity
function LOCKUP_LINEAR() external view returns (ISablierV2LockupLinear);
```

### streamDurations

The total streaming duration of each stream.

```solidity
function streamDurations() external view returns (uint40 cliff, uint40 duration);
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
