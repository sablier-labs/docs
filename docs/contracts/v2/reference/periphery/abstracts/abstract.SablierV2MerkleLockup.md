# SablierV2MerkleLockup

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/a3131838ec731b38b1e2e03735fba874ab66f5e2/src/abstracts/SablierV2MerkleLockup.sol)

**Inherits:**
[ISablierV2MerkleLockup](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleLockup.md),
Adminable

See the documentation in
[ISablierV2MerkleLockup](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2MerkleLockup.md).

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

The cut-off point for the Merkle Lockup contract, as a Unix timestamp. A value of zero means there is no expiration.

_This is an immutable state variable._

```solidity
uint40 public immutable override EXPIRATION;
```

### MERKLE_ROOT

The root of the Merkle tree used to validate the claims.

_This is an immutable state variable._

```solidity
bytes32 public immutable override MERKLE_ROOT;
```

### NAME

_The name of the campaign stored as bytes32._

```solidity
bytes32 internal immutable NAME;
```

### TRANSFERABLE

A flag indicating whether the stream NFTs are transferable.

_This is an immutable state variable._

```solidity
bool public immutable override TRANSFERABLE;
```

### ipfsCID

The content identifier for indexing the contract on IPFS.

```solidity
string public ipfsCID;
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
constructor(MerkleLockup.ConstructorParams memory params);
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

Returns a flag indicating whether the campaign has expired.

```solidity
function hasExpired() public view override returns (bool);
```

### name

Retrieves the name of the campaign.

```solidity
function name() external view override returns (string memory);
```

### clawback

Claws back the unclaimed tokens from the Merkle Lockup.

Emits a {Clawback} event. Requirements:

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
