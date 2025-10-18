# ISablierMerkleBase

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/interfaces/ISablierMerkleBase.sol)

**Inherits:** IAdminable

_Common interface between campaign contracts._

## Functions

### CAMPAIGN_START_TIME

The timestamp at which campaign starts and claim begins.

_This is an immutable state variable._

```solidity
function CAMPAIGN_START_TIME() external view returns (uint40);
```

### COMPTROLLER

Retrieves the address of the comptroller contract.

```solidity
function COMPTROLLER() external view returns (address);
```

### EXPIRATION

The cut-off point for the campaign, as a Unix timestamp. A value of zero means there is no expiration.

_This is an immutable state variable._

```solidity
function EXPIRATION() external view returns (uint40);
```

### IS_SABLIER_MERKLE

Returns `true` indicating that this campaign contract is deployed using the Sablier Factory.

_This is a constant state variable._

```solidity
function IS_SABLIER_MERKLE() external view returns (bool);
```

### MERKLE_ROOT

The root of the Merkle tree used to validate the proofs of inclusion.

_This is an immutable state variable._

```solidity
function MERKLE_ROOT() external view returns (bytes32);
```

### TOKEN

The ERC-20 token to distribute.

_This is an immutable state variable._

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

### domainSeparator

The domain separator, as required by EIP-712 and EIP-1271, used for signing claim to prevent replay attacks across
different campaigns.

```solidity
function domainSeparator() external view returns (bytes32);
```

### firstClaimTime

Retrieves the timestamp when the first claim is made, and zero if no claim was made yet.

```solidity
function firstClaimTime() external view returns (uint40);
```

### hasClaimed

Returns a flag indicating whether a claim has been made for a given index.

_Uses a bitmap to save gas._

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

_An empty value may break certain UI features that depend upon the IPFS CID._

```solidity
function ipfsCID() external view returns (string memory);
```

### minFeeUSD

Retrieves the min USD fee required to claim the airdrop, denominated in 8 decimals.

_The denomination is based on Chainlink's 8-decimal format for USD prices, where 1e8 is $1._

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
- The new fee must be less than the current {minFeeUSD}.

```solidity
function lowerMinFeeUSD(uint256 newMinFeeUSD) external;
```

**Parameters**

| Name           | Type      | Description                                            |
| -------------- | --------- | ------------------------------------------------------ |
| `newMinFeeUSD` | `uint256` | The new min USD fee to set, denominated in 8 decimals. |

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
