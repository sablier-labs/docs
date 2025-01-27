# ISablierMerkleBase

[Git Source](https://github.com/sablier-labs/airdrops/blob/f9a358c0a5bccfec77601d4490ef9117e0488068/src/interfaces/ISablierMerkleBase.sol)

**Inherits:** IAdminable

_Common interface between Merkle Lockups and Merkle Instant._

## Functions

### EXPIRATION

The cut-off point for the campaign, as a Unix timestamp. A value of zero means there is no expiration.

_This is an immutable state variable._

```solidity
function EXPIRATION() external returns (uint40);
```

### FACTORY

Retrieves the address of the factory contract.

```solidity
function FACTORY() external view returns (address);
```

### FEE

Retrieves the minimum fee required to claim the airdrop, which is paid in the native token of the chain, e.g. ETH for
Ethereum Mainnet.

```solidity
function FEE() external view returns (uint256);
```

### MERKLE_ROOT

The root of the Merkle tree used to validate the proofs of inclusion.

_This is an immutable state variable._

```solidity
function MERKLE_ROOT() external returns (bytes32);
```

### TOKEN

The ERC-20 token to distribute.

_This is an immutable state variable._

```solidity
function TOKEN() external returns (IERC20);
```

### campaignName

Retrieves the name of the campaign.

```solidity
function campaignName() external view returns (string memory);
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

### shape

Retrieves the shape of the lockup stream that the campaign produces upon claiming.

```solidity
function shape() external view returns (string memory);
```

### claim

Makes the claim.

Depending on the Merkle campaign, it either transfers tokens to the recipient or creates a Lockup stream with an NFT
minted to the recipient. Requirements:

- The campaign must not have expired.
- The stream must not have been claimed already.
- The Merkle proof must be valid.
- The `msg.value` must not be less than `FEE`.

```solidity
function claim(uint256 index, address recipient, uint128 amount, bytes32[] calldata merkleProof) external payable;
```

**Parameters**

| Name          | Type        | Description                                                     |
| ------------- | ----------- | --------------------------------------------------------------- |
| `index`       | `uint256`   | The index of the recipient in the Merkle tree.                  |
| `recipient`   | `address`   | The address of the airdrop recipient.                           |
| `amount`      | `uint128`   | The amount of ERC-20 tokens to be transferred to the recipient. |
| `merkleProof` | `bytes32[]` | The proof of inclusion in the Merkle tree.                      |

### clawback

Claws back the unclaimed tokens from the campaign.

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

### collectFees

Collects the accrued fees by transferring them to `FACTORY` admin. Requirements:

- `msg.sender` must be the `FACTORY` contract.

```solidity
function collectFees(address factoryAdmin) external returns (uint256 feeAmount);
```

**Parameters**

| Name           | Type      | Description                         |
| -------------- | --------- | ----------------------------------- |
| `factoryAdmin` | `address` | The address of the `FACTORY` admin. |

**Returns**

| Name        | Type      | Description                                                |
| ----------- | --------- | ---------------------------------------------------------- |
| `feeAmount` | `uint256` | The amount of native tokens (e.g., ETH) collected as fees. |

## Events

### Clawback

Emitted when the admin claws back the unclaimed tokens.

```solidity
event Clawback(address indexed admin, address indexed to, uint128 amount);
```
