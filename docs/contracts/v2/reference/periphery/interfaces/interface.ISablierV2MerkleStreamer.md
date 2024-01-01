# ISablierV2MerkleStreamer

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/53e259087984ff748fca6fb932fdb9c663c2b365/src/interfaces/ISablierV2MerkleStreamer.sol)

**Inherits:** IAdminable

A contract that lets user claim Sablier streams using Merkle proofs. An interesting use case for MerkleStream is
airstreams, which is a portmanteau of "airdrop" and "stream". This is an airdrop model where the tokens are distributed
over time, as opposed to all at once.

_This is the base interface for MerkleStreamer contracts. See the Sablier docs for more guidance on how streaming works:
https://docs.sablier.com/._

## Functions

### ASSET

The streamed ERC-20 asset.

_This is an immutable state variable._

```solidity
function ASSET() external returns (IERC20);
```

### CANCELABLE

A flag indicating whether the streams can be canceled.

_This is an immutable state variable._

```solidity
function CANCELABLE() external returns (bool);
```

### EXPIRATION

The cut-off point for the Merkle streamer, as a Unix timestamp. A value of zero means there is no expiration.

_This is an immutable state variable._

```solidity
function EXPIRATION() external returns (uint40);
```

### hasClaimed

Returns a flag indicating whether a claim has been made for a given index.

_Uses a bitmap to save gas._

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

### LOCKUP

The address of the [SablierV2Lockup](docs/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup.md) contract.

```solidity
function LOCKUP() external returns (ISablierV2Lockup);
```

### MERKLE_ROOT

The root of the Merkle tree used to validate the claims.

_This is an immutable state variable._

```solidity
function MERKLE_ROOT() external returns (bytes32);
```

### TRANSFERABLE

A flag indicating whether the stream NFTs are transferable.

_This is an immutable state variable._

```solidity
function TRANSFERABLE() external returns (bool);
```

### clawback

Claws back the unclaimed tokens from the Merkle streamer.

Emits a [Clawback](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleStreamer.md#clawback)
event. Notes:

- If the protocol is not zero, the expiration check is not made. Requirements:
- The caller must be the admin.
- The campaign must either be expired or not have an expiration.

```solidity
function clawback(address to, uint128 amount) external;
```

**Parameters**

| Name     | Type      | Description                        |
| -------- | --------- | ---------------------------------- |
| `to`     | `address` | The address to receive the tokens. |
| `amount` | `uint128` | The amount of tokens to claw back. |

## Events

### Claim

Emitted when a recipient claims a stream.

```solidity
event Claim(uint256 index, address indexed recipient, uint128 amount, uint256 indexed streamId);
```

### Clawback

Emitted when the admin claws back the unclaimed tokens.

```solidity
event Clawback(address indexed admin, address indexed to, uint128 amount);
```
