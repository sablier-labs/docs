# SablierMerkleBase

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/abstracts/SablierMerkleBase.sol)

**Inherits:** [ISablierMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleBase.md),
[Adminable](/docs/reference/airdrops/contracts/abstracts/abstract.Adminable.md)

See the documentation in
[ISablierMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleBase.md).

## State Variables

### \_CACHED_CHAIN_ID

_Cache the chain ID in order to invalidate the cached domain separator if the chain ID changes in case of a chain
split._

```solidity
uint256 private immutable _CACHED_CHAIN_ID;
```

### \_CACHED_DOMAIN_SEPARATOR

_The domain separator, as required by EIP-712 and EIP-1271, used for signing claim to prevent replay attacks across
different campaigns._

```solidity
bytes32 private immutable _CACHED_DOMAIN_SEPARATOR;
```

### CAMPAIGN_START_TIME

The timestamp at which campaign starts and claim begins.

_This is an immutable state variable._

```solidity
uint40 public immutable override CAMPAIGN_START_TIME;
```

### COMPTROLLER

Retrieves the address of the comptroller contract.

```solidity
address public immutable override COMPTROLLER;
```

### EXPIRATION

The cut-off point for the campaign, as a Unix timestamp. A value of zero means there is no expiration.

_This is an immutable state variable._

```solidity
uint40 public immutable override EXPIRATION;
```

### IS_SABLIER_MERKLE

Returns `true` indicating that this campaign contract is deployed using the Sablier Factory.

_This is a constant state variable._

```solidity
bool public constant override IS_SABLIER_MERKLE = true;
```

### MERKLE_ROOT

The root of the Merkle tree used to validate the proofs of inclusion.

_This is an immutable state variable._

```solidity
bytes32 public immutable override MERKLE_ROOT;
```

### TOKEN

The ERC-20 token to distribute.

_This is an immutable state variable._

```solidity
IERC20 public immutable override TOKEN;
```

### campaignName

Retrieves the name of the campaign.

```solidity
string public override campaignName;
```

### firstClaimTime

Retrieves the timestamp when the first claim is made, and zero if no claim was made yet.

```solidity
uint40 public override firstClaimTime;
```

### ipfsCID

The content identifier for indexing the campaign on IPFS.

_An empty value may break certain UI features that depend upon the IPFS CID._

```solidity
string public override ipfsCID;
```

### minFeeUSD

Retrieves the min USD fee required to claim the airdrop, denominated in 8 decimals.

_The denomination is based on Chainlink's 8-decimal format for USD prices, where 1e8 is $1._

```solidity
uint256 public override minFeeUSD;
```

### \_claimedBitMap

_Packed booleans that record the history of claims._

```solidity
BitMaps.BitMap internal _claimedBitMap;
```

## Functions

### notZeroAddress

_Modifier to check that `to` is not zero address._

```solidity
modifier notZeroAddress(address to);
```

### constructor

Constructs the contract by initializing the immutable state variables.

```solidity
constructor(
    address campaignCreator,
    string memory campaignName_,
    uint40 campaignStartTime,
    address comptroller,
    uint40 expiration,
    address initialAdmin,
    string memory ipfsCID_,
    bytes32 merkleRoot,
    IERC20 token
) Adminable(initialAdmin)
```

### calculateMinFeeWei

Calculates the minimum fee in wei required to claim the airdrop.

```solidity
function calculateMinFeeWei() external view override returns (uint256);
```

### domainSeparator

The domain separator, as required by EIP-712 and EIP-1271, used for signing claim to prevent replay attacks across
different campaigns.

```solidity
function domainSeparator() external view override returns (bytes32);
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

### clawback

Claws back the unclaimed tokens.

Emits a {Clawback} event. Requirements:

- `msg.sender` must be the admin.
- No claim must be made, OR The current timestamp must not exceed 7 days after the first claim, OR The campaign must be
  expired.

```solidity
function clawback(address to, uint128 amount) external override onlyAdmin;
```

**Parameters**

| Name     | Type      | Description                        |
| -------- | --------- | ---------------------------------- |
| `to`     | `address` | The address to receive the tokens. |
| `amount` | `uint128` | The amount of tokens to claw back. |

### lowerMinFeeUSD

Lowers the min USD fee.

Emits a {LowerMinFeeUSD} event. Requirements:

- `msg.sender` must be the comptroller.
- The new fee must be less than the current {minFeeUSD}.

```solidity
function lowerMinFeeUSD(uint256 newMinFeeUSD) external override;
```

**Parameters**

| Name           | Type      | Description                                            |
| -------------- | --------- | ------------------------------------------------------ |
| `newMinFeeUSD` | `uint256` | The new min USD fee to set, denominated in 8 decimals. |

### \_checkSignature

_Verifies the signature against the provided parameters. It supports both EIP-712 and EIP-1271 signatures._

```solidity
function _checkSignature(
    uint256 index,
    address recipient,
    address to,
    uint128 amount,
    uint40 validFrom,
    bytes calldata signature
)
    internal
    view;
```

### \_domainSeparator

_Returns the domain separator for the current chain._

```solidity
function _domainSeparator() private view returns (bytes32);
```

### \_hasGracePeriodPassed

Returns a flag indicating whether the grace period has passed.

_The grace period is 7 days after the first claim._

```solidity
function _hasGracePeriodPassed() private view returns (bool);
```

### \_revertIfToZeroAddress

_This function checks if `to` is zero address._

```solidity
function _revertIfToZeroAddress(address to) private pure;
```

### \_preProcessClaim

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _preProcessClaim(uint256 index, address recipient, uint128 amount, bytes32[] calldata merkleProof) internal;
```
