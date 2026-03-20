# SablierMerkleBase

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/003a71932c0e26e767a02c21205a077469406ac8/src/abstracts/SablierMerkleBase.sol)

**Inherits:** [ISablierMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleBase.md),
[Adminable](/docs/reference/airdrops/contracts/abstracts/abstract.Adminable.md)

**Title:** SablierMerkleBase

See the documentation in
[ISablierMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleBase.md).

## State Variables

### CAMPAIGN_START_TIME

The timestamp at which campaign starts and claim begins.

This is an immutable state variable.

```solidity
uint40 public immutable override CAMPAIGN_START_TIME
```

### CLAIM_TYPE

Retrieves the claim type supported by the campaign.

This is an immutable state variable.

```solidity
ClaimType public immutable override CLAIM_TYPE
```

### COMPTROLLER

Retrieves the address of the comptroller contract.

```solidity
address public immutable override COMPTROLLER
```

### EXPIRATION

The cut-off point for the campaign, as a Unix timestamp. A value of zero means there is no expiration.

This is an immutable state variable.

```solidity
uint40 public immutable override EXPIRATION
```

### IS_SABLIER_MERKLE

Returns `true` indicating that this campaign contract is deployed using the Sablier Factory.

This is a constant state variable.

```solidity
bool public constant override IS_SABLIER_MERKLE = true
```

### MERKLE_ROOT

The root of the Merkle tree used to validate the proofs of inclusion.

This is an immutable state variable.

```solidity
bytes32 public immutable override MERKLE_ROOT
```

### TOKEN

The ERC-20 token to distribute.

This is an immutable state variable.

```solidity
IERC20 public immutable override TOKEN
```

### campaignName

Retrieves the name of the campaign.

```solidity
string public override campaignName
```

### firstClaimTime

Retrieves the timestamp when the first claim is made, and zero if no claim was made yet.

```solidity
uint40 public override firstClaimTime
```

### ipfsCID

The content identifier for indexing the campaign on IPFS.

An empty value may break certain UI features that depend upon the IPFS CID.

```solidity
string public override ipfsCID
```

### minFeeUSD

Retrieves the min USD fee required to claim the airdrop, denominated in 8 decimals.

The denomination is based on Chainlink's 8-decimal format for USD prices, where 1e8 is $1.

```solidity
uint256 public override minFeeUSD
```

### \_claimedBitMap

Packed booleans that record the history of claims.

```solidity
BitMaps.BitMap internal _claimedBitMap
```

## Functions

### notZeroAddress

Modifier to check that `to` is not zero address.

```solidity
modifier notZeroAddress(address to) ;
```

### revertIfNot

Modifier to revert if `claimType` value does not match the campaign's claim type.

```solidity
modifier revertIfNot(ClaimType claimType) ;
```

### constructor

Constructs the contract by initializing the immutable state variables.

```solidity
constructor(MerkleBase.ConstructorParams memory baseParams) [Adminable](/docs/reference/airdrops/contracts/abstracts/abstract.Adminable.md)(baseParams.initialAdmin);
```

### calculateMinFeeWei

Calculates the minimum fee in wei required to claim the airdrop.

```solidity
function calculateMinFeeWei() external view override returns (uint256);
```

### hasClaimed

Returns a flag indicating whether a claim has been made for a given index.

Uses a bitmap to save gas.

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

### sponsor

Sponsors the claim fees for eligible recipients.

Emits a {Sponsor} event. Notes:

- This function only makes the payment. The claim fees are updated only after the payment has been verified off-chain.
- Refer to the Sablier website in order to sponsor with the correct token, otherwise the sponsorship may be ignored.
  Requirements:
- `biller` must not be the zero address.
- `amount` must be greater than zero.
- `token` must not be the zero address and must be a valid ERC20 token.
- `msg.sender` must have approved the contract to spend the tokens.

```solidity
function sponsor(IERC20 token, uint128 amount, address biller) external override notZeroAddress(biller);
```

**Parameters**

| Name     | Type      | Description                        |
| -------- | --------- | ---------------------------------- |
| `token`  | `IERC20`  | The ERC-20 token to transfer.      |
| `amount` | `uint128` | The amount of tokens to transfer.  |
| `biller` | `address` | The address to receive the tokens. |

### \_hasGracePeriodPassed

Returns a flag indicating whether the grace period has passed.

The grace period is 7 days after the first claim.

```solidity
function _hasGracePeriodPassed() private view returns (bool);
```

### \_preProcessClaim

See the documentation for the user-facing functions that call this internal function.

```solidity
function _preProcessClaim(
    uint256 index,
    address recipient,
    uint128 amount,
    bytes32[] calldata merkleProof
)
    internal;
```
