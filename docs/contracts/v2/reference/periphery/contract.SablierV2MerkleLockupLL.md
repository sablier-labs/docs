---
sidebar_position: 3
---

# SablierV2MerkleLockupLL

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/a3131838ec731b38b1e2e03735fba874ab66f5e2/src/SablierV2MerkleLockupLL.sol)

**Inherits:**
[ISablierV2MerkleLockupLL](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleLockupLL.md),
[SablierV2MerkleLockup](/docs/contracts/v2/reference/periphery/abstracts/abstract.SablierV2MerkleLockup.md)

See the documentation in
[ISablierV2MerkleLockupLL](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleLockupLL.md).

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
    MerkleLockup.ConstructorParams memory baseParams,
    ISablierV2LockupLinear lockupLinear,
    LockupLinear.Durations memory streamDurations_
)
    SablierV2MerkleLockup(baseParams);
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
