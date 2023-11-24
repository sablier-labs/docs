# ISablierV2MerkleStreamer

[Git Source](https://github.com/sablier-labs/v2-periphery/tree/release/src/interfaces/ISablierV2MerkleStreamer.sol)

**Inherits:** [IAdminable](/docs/contracts/v2/reference/core/interfaces/interface.IAdminable.md)

_A contract that lets user claim Sablier streams using Merkle proofs. An interesting use case for MerkleStream is
airstreams, which is a portmanteau of "airdrop" and "stream". This is an airdrop model where the tokens are distributed
over time, as opposed to all at once. This is the base interface for MerkleStreamer contracts._

## Functions

### ASSET

The streamed ERC-20 asset.

```solidity
function ASSET() external returns (IERC20);
```

### CANCELABLE

A flag indicating whether the streams can be canceled.

```solidity
function CANCELABLE() external returns (bool);
```

### EXPIRATION

The cut-off point for the Merkle streamer, as a Unix timestamp. A value of zero means there is no expiration.

```solidity
function EXPIRATION() external returns (uint40);
```

### hasClaimed

Returns a flag indicating whether a claim has been made for a given index.

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
function hasExpired() external view returns (bool);
```

### MERKLE_ROOT

The root of the Merkle tree used to validate the claims.

```solidity
function MERKLE_ROOT() external returns (bytes32);
```

### TRANSFERABLE

A flag indicating whether the stream NFTs are transferable.

```solidity
function TRANSFERABLE() external returns (bool);
```

### clawback

Claws back the unclaimed tokens from the Merkle streamer.

Emits a {Clawback} event. Requirements:

- `msg.sender` must be the contract admin.
- The Merkle streamer must have expired.

```solidity
function clawback(address to, uint128 amount) external;
```

| Name     | Type      | Description                        |
| -------- | --------- | ---------------------------------- |
| `to`     | `address` | The address to receive the tokens. |
| `amount` | `uint128` | The amount of tokens to claw back. |

## Events

### Claim

Emitted when a recipient claims a stream.

```solidity
event Claim(uint256 index, address indexed recipient, uint128 amount, uint256
indexed streamId);
```

### Clawback

Emitted when the admin claws back the unclaimed tokens.

```solidity
event Clawback(address indexed admin, address indexed to, uint128 amount);
```
