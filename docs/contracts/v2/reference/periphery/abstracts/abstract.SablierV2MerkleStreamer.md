# SablierV2MerkleStreamer

[Git Source](https://github.com/sablier-labs/v2-periphery/tree/release/src/abstracts/SablierV2MerkleStreamer.sol)

**Inherits:**
[ISablierV2MerkleStreamer](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleStreamer.md)
[Adminable](/docs/contracts/v2/reference/core/abstracts/abstract.Adminable.md)

## State Variables

### ASSET

_The streamed ERC-20 asset._

```solidity
IERC20 public immutable override ASSET;
```

### CANCELABLE

_A flag indicating whether the streams can be canceled._

```solidity
bool public immutable override CANCELABLE;
```

### EXPIRATION

_The cut-off point for the Merkle streamer, as a Unix timestamp. A value of zero means there is no expiration._

```solidity
uint40 public immutable override EXPIRATION;
```

### LOCKUP

_The address of the {SablierV2Lockup} contract._

```solidity
ISablierV2Lockup public immutable override LOCKUP;
```

### MERKLE_ROOT

_The root of the Merkle tree used to validate the claims._

```solidity
bytes32 public immutable override MERKLE_ROOT;
```

### TRANSFERABLE

_A flag indicating whether the stream NFTs are transferable._

```solidity
bool public immutable override TRANSFERABLE;
```

### \_claimedBitMap;

_Packed booleans that record the history of claims._

```solidity
BitMaps.BitMap internal _claimedBitMap;
```

We are using
[BitMaps](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/e50c24f5839db17f46991478384bfda14acfb830/contracts/utils/structs/BitMaps.sol)
OpenZeppelin's library.

## User Facing Functions

### constructor

_Sets the immutable state variables._

```solidity
constructor(
    address initialAdmin,
    IERC20 asset,
    ISablierV2Lockup lockup,
    bytes32 merkleRoot,
    uint40 expiration,
    bool cancelable,
    bool transferable
);
```

### hasClaimed

Returns a flag indicating whether a claim has been made for a given index. Uses a bitmap to save gas.

```solidity
function hasClaimed(uint256 index) external returns (bool);
```

**Parameters**

| Name    | Type      | Description                          |
| ------- | --------- | ------------------------------------ |
| `index` | `uint256` | The index of the recipient to check. |

### hasExpired

Returns a flag indicating whether the Merkle streamer has expired.

```solidity
function hasExpired() external returns (bool);
```

### clawback

Claws back the unclaimed tokens from the Merkle streamer.

Emits a {Clawback} event. Requirements:

- `msg.sender` must be the contract admin.
- The Merkle streamer must have expired.

```solidity
function clawback(address to, uint128 amount) external;
```

**Parameters**

| Name     | Type      | Description                        |
| -------- | --------- | ---------------------------------- |
| `to`     | `address` | The address to receive the tokens. |
| `amount` | `uint128` | The amount of tokens to claw back. |

## Internal Functions

Validates the parameters of the `claim` function, which is implemented by child contracts.

```solidity
function \_checkClaim(uint256 index, bytes32 leaf, bytes32[] calldata merkleProof) internal view;
```
