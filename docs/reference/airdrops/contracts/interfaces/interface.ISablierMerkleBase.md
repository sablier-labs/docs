# ISablierMerkleBase

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/003a71932c0e26e767a02c21205a077469406ac8/src/interfaces/ISablierMerkleBase.sol)

**Inherits:** IAdminable

**Title:** ISablierMerkleBase

Common interface between campaign contracts.

## Functions

### CAMPAIGN_START_TIME

The timestamp at which campaign starts and claim begins.

This is an immutable state variable.

```solidity
function CAMPAIGN_START_TIME() external view returns (uint40);
```

### CLAIM_TYPE

Retrieves the claim type supported by the campaign.

This is an immutable state variable.

```solidity
function CLAIM_TYPE() external view returns (ClaimType);
```

### COMPTROLLER

Retrieves the address of the comptroller contract.

```solidity
function COMPTROLLER() external view returns (address);
```

### EXPIRATION

The cut-off point for the campaign, as a Unix timestamp. A value of zero means there is no expiration.

This is an immutable state variable.

```solidity
function EXPIRATION() external view returns (uint40);
```

### IS_SABLIER_MERKLE

Returns `true` indicating that this campaign contract is deployed using the Sablier Factory.

This is a constant state variable.

```solidity
function IS_SABLIER_MERKLE() external view returns (bool);
```

### MERKLE_ROOT

The root of the Merkle tree used to validate the proofs of inclusion.

This is an immutable state variable.

```solidity
function MERKLE_ROOT() external view returns (bytes32);
```

### TOKEN

The ERC-20 token to distribute.

This is an immutable state variable.

```solidity
function TOKEN() external view returns (IERC20);
```

### calculateMinFeeWei

Calculates the minimum fee in wei required to claim the airdrop.

```solidity
function calculateMinFeeWei() external view returns (uint256);
```

### campaignName

Retrieves the name of the campaign.

```solidity
function campaignName() external view returns (string memory);
```

### firstClaimTime

Retrieves the timestamp when the first claim is made, and zero if no claim was made yet.

```solidity
function firstClaimTime() external view returns (uint40);
```

### hasClaimed

Returns a flag indicating whether a claim has been made for a given index.

Uses a bitmap to save gas.

```solidity
function hasClaimed(uint256 index) external view returns (bool);
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

An empty value may break certain UI features that depend upon the IPFS CID.

```solidity
function ipfsCID() external view returns (string memory);
```

### minFeeUSD

Retrieves the min USD fee required to claim the airdrop, denominated in 8 decimals.

The denomination is based on Chainlink's 8-decimal format for USD prices, where 1e8 is $1.

```solidity
function minFeeUSD() external view returns (uint256);
```

### clawback

Claws back the unclaimed tokens.

Emits a [Clawback](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleBase.md#clawback) event.
Requirements:

- `msg.sender` must be the admin.
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

### lowerMinFeeUSD

Lowers the min USD fee.

Emits a [LowerMinFeeUSD](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleBase.md#lowerminfeeusd)
event. Requirements:

- `msg.sender` must be the comptroller.
- The new fee must be less than the current
  [minFeeUSD](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleBase.md#minfeeusd).

```solidity
function lowerMinFeeUSD(uint256 newMinFeeUSD) external;
```

**Parameters**

| Name           | Type      | Description                                            |
| -------------- | --------- | ------------------------------------------------------ |
| `newMinFeeUSD` | `uint256` | The new min USD fee to set, denominated in 8 decimals. |

### sponsor

Sponsors the claim fees for eligible recipients.

Emits a [Sponsor](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleBase.md#sponsor) event. Notes:

- This function only makes the payment. The claim fees are updated only after the payment has been verified off-chain.
- Refer to the Sablier website in order to sponsor with the correct token, otherwise the sponsorship may be ignored.
  Requirements:
- `biller` must not be the zero address.
- `amount` must be greater than zero.
- `token` must not be the zero address and must be a valid ERC20 token.
- `msg.sender` must have approved the contract to spend the tokens.

```solidity
function sponsor(IERC20 token, uint128 amount, address biller) external;
```

**Parameters**

| Name     | Type      | Description                        |
| -------- | --------- | ---------------------------------- |
| `token`  | `IERC20`  | The ERC-20 token to transfer.      |
| `amount` | `uint128` | The amount of tokens to transfer.  |
| `biller` | `address` | The address to receive the tokens. |

## Events

### Clawback

Emitted when the admin claws back the unclaimed tokens.

```solidity
event Clawback(address indexed admin, address indexed to, uint128 amount);
```

### LowerMinFeeUSD

Emitted when the min USD fee is lowered by the comptroller.

```solidity
event LowerMinFeeUSD(address indexed comptroller, uint256 newMinFeeUSD, uint256 previousMinFeeUSD);
```

### Sponsor

Emitted when campaign owner sponsors the claim fees for eligible recipients.

```solidity
event Sponsor(address indexed caller, IERC20 indexed token, uint128 amount, address indexed biller);
```
