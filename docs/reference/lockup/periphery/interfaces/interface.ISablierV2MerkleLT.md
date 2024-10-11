# ISablierV2MerkleLT

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/c10978dd4cdb54301b9c2d63c7e0af41da9110f3/src/interfaces/ISablierV2MerkleLT.sol)

**Inherits:** [ISablierV2MerkleLockup](/docs/reference/lockup/periphery/interfaces/interface.ISablierV2MerkleLockup.md)

MerkleLockup campaign that creates LockupTranched streams.

## Functions

### getTranchesWithPercentages

Retrieves the tranches with their respective unlock percentages and durations.

```solidity
function getTranchesWithPercentages() external view returns (MerkleLT.TrancheWithPercentage[] memory);
```

### LOCKUP_TRANCHED

The address of the [SablierV2LockupTranched](docs/reference/lockup/core/contract.SablierV2LockupTranched.md) contract.

```solidity
function LOCKUP_TRANCHED() external view returns (ISablierV2LockupTranched);
```

### TOTAL_PERCENTAGE

The total percentage of the tranches.

```solidity
function TOTAL_PERCENTAGE() external view returns (uint64);
```

### claim

Makes the claim by creating a LockupTranched stream to the recipient. A stream NFT is minted to the recipient.

Emits a {Claim} event. Requirements:

- The campaign must not have expired.
- The stream must not have been claimed already.
- The Merkle proof must be valid.
- TOTAL_PERCENTAGE must be equal to 100%.

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
