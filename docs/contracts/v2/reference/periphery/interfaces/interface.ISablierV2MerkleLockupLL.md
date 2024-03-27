# ISablierV2MerkleLockupLL

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/73831c7dcaa5ec4e2fed6caa0f8040154e53030a/src/interfaces/ISablierV2MerkleLockupLL.sol)

**Inherits:**
[ISablierV2MerkleLockup](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleLockup.md)

Merkle Lockup that creates Lockup Linear streams.

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
