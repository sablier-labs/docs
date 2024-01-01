# SablierV2MerkleStreamer

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/53e259087984ff748fca6fb932fdb9c663c2b365/src/abstracts/SablierV2MerkleStreamer.sol)

**Inherits:**
[ISablierV2MerkleStreamer](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleStreamer.md),
Adminable

See the documentation in
[ISablierV2MerkleStreamer](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleStreamer.md).

## State Variables

### ASSET

The streamed ERC-20 asset.

_This is an immutable state variable._

```solidity
IERC20 public immutable override ASSET;
```

### CANCELABLE

A flag indicating whether the streams can be canceled.

_This is an immutable state variable._

```solidity
bool public immutable override CANCELABLE;
```

### EXPIRATION

The cut-off point for the Merkle streamer, as a Unix timestamp. A value of zero means there is no expiration.

_This is an immutable state variable._

```solidity
uint40 public immutable override EXPIRATION;
```

### LOCKUP

The address of the [SablierV2Lockup](docs/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup.md) contract.

```solidity
ISablierV2Lockup public immutable override LOCKUP;
```

### MERKLE_ROOT

The root of the Merkle tree used to validate the claims.

_This is an immutable state variable._

```solidity
bytes32 public immutable override MERKLE_ROOT;
```

### TRANSFERABLE

A flag indicating whether the stream NFTs are transferable.

_This is an immutable state variable._

```solidity
bool public immutable override TRANSFERABLE;
```

### \_claimedBitMap

_Packed booleans that record the history of claims._

```solidity
BitMaps.BitMap internal _claimedBitMap;
```

## Functions

### constructor

_Constructs the contract by initializing the immutable state variables._

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

Returns a flag indicating whether a claim has been made for a given index.

_Uses a bitmap to save gas._

```solidity
function hasClaimed(uint256 index) public view override returns (bool);
```

**Parameters**

| Name    | Type      | Description                          |
| ------- | --------- | ------------------------------------ |
| `index` | `uint256` | The index of the recipient to check. |

### hasExpired

Returns a flag indicating whether the Merkle streamer has expired.

```solidity
function hasExpired() public view override returns (bool);
```

### clawback

Claws back the unclaimed tokens from the Merkle streamer.

Emits a {Clawback} event. Notes:

- If the protocol is not zero, the expiration check is not made. Requirements:
- The caller must be the admin.
- The campaign must either be expired or not have an expiration.

```solidity
function clawback(address to, uint128 amount) external override onlyAdmin;
```

**Parameters**

| Name     | Type      | Description                        |
| -------- | --------- | ---------------------------------- |
| `to`     | `address` | The address to receive the tokens. |
| `amount` | `uint128` | The amount of tokens to claw back. |

### \_checkClaim

_Validates the parameters of the `claim` function, which is implemented by child contracts._

```solidity
function _checkClaim(uint256 index, bytes32 leaf, bytes32[] calldata merkleProof) internal view;
```
