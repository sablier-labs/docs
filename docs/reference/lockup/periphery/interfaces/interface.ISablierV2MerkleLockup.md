# ISablierV2MerkleLockup

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/ed3be5dc823dd81219f8060a6e6b32ead6c8de84/src/interfaces/ISablierV2MerkleLockup.sol)

**Inherits:** IAdminable

A contract that lets user claim Sablier streams using Merkle proofs. A popular use case for MerkleLockup is airstreams:
a portmanteau of "airdrop" and "stream". This is an airdrop model where the tokens are distributed over time, as opposed
to all at once.

_This is the base interface for MerkleLockup. See the Sablier docs for more guidance: https://docs.sablier.com_

## Functions

### ASSET

The ERC-20 asset to distribute.

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

The cut-off point for the campaign, as a Unix timestamp. A value of zero means there is no expiration.

_This is an immutable state variable._

```solidity
function EXPIRATION() external returns (uint40);
```

### getFirstClaimTime

Returns the timestamp when the first claim is made.

```solidity
function getFirstClaimTime() external view returns (uint40);
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

Returns a flag indicating whether the campaign has expired.

```solidity
function hasExpired() external view returns (bool);
```

### ipfsCID

The content identifier for indexing the campaign on IPFS.

```solidity
function ipfsCID() external view returns (string memory);
```

### MERKLE_ROOT

The root of the Merkle tree used to validate the proofs of inclusion.

_This is an immutable state variable._

```solidity
function MERKLE_ROOT() external returns (bytes32);
```

### name

Retrieves the name of the campaign.

```solidity
function name() external returns (string memory);
```

### TRANSFERABLE

A flag indicating whether the stream NFTs are transferable.

_This is an immutable state variable._

```solidity
function TRANSFERABLE() external returns (bool);
```

### clawback

Claws back the unclaimed tokens from the campaign.

Emits a [Clawback](/docs/reference/lockup/periphery/interfaces/interface.ISablierV2MerkleLockup.md#clawback) event.
Requirements:

- The caller must be the admin.
- No claim must be made, OR The current timestamp must not exceed 7 days after the first claim, OR The campaign must be
  expired.

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
