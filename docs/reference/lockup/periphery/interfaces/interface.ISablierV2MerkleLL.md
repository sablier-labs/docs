# ISablierV2MerkleLL

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/ed3be5dc823dd81219f8060a6e6b32ead6c8de84/src/interfaces/ISablierV2MerkleLL.sol)

**Inherits:** [ISablierV2MerkleLockup](/docs/reference/lockup/periphery/interfaces/interface.ISablierV2MerkleLockup.md)

MerkleLockup campaign that creates LockupLinear streams.

## Functions

### LOCKUP_LINEAR

The address of the [SablierV2LockupLinear](docs/reference/lockup/core/contract.SablierV2LockupLinear.md) contract.

```solidity
function LOCKUP_LINEAR() external view returns (ISablierV2LockupLinear);
```

### streamDurations

The total streaming duration of each stream.

```solidity
function streamDurations() external view returns (uint40 cliff, uint40 duration);
```

### claim

Makes the claim by creating a LockupLinear stream to the recipient. A stream NFT is minted to the recipient.

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

| Name          | Type        | Description                                                           |
| ------------- | ----------- | --------------------------------------------------------------------- |
| `index`       | `uint256`   | The index of the recipient in the Merkle tree.                        |
| `recipient`   | `address`   | The address of the stream holder.                                     |
| `amount`      | `uint128`   | The amount of ERC-20 assets to be distributed via the claimed stream. |
| `merkleProof` | `bytes32[]` | The proof of inclusion in the Merkle tree.                            |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The id of the newly created stream. |
