# ISablierMerkleLL

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/interfaces/ISablierMerkleLL.sol)

**Inherits:** [ISablierMerkleLockup](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLockup.md)

MerkleLL enables an airdrop model with a vesting period powered by the Lockup Linear model.

## Functions

### VESTING_CLIFF_DURATION

Retrieves the cliff duration of the vesting stream, in seconds.

```solidity
function VESTING_CLIFF_DURATION() external view returns (uint40);
```

### VESTING_CLIFF_UNLOCK_PERCENTAGE

Retrieves the percentage of the claim amount due to be unlocked at the vesting cliff time, as a fixed-point number where
1e18 is 100%.

```solidity
function VESTING_CLIFF_UNLOCK_PERCENTAGE() external view returns (UD60x18);
```

### VESTING_START_TIME

Retrieves the start time of the vesting stream, as a Unix timestamp. Zero is a sentinel value for `block.timestamp`.

```solidity
function VESTING_START_TIME() external view returns (uint40);
```

### VESTING_START_UNLOCK_PERCENTAGE

Retrieves the percentage of the claim amount due to be unlocked at the vesting start time, as a fixed-point number where
1e18 is 100%.

```solidity
function VESTING_START_UNLOCK_PERCENTAGE() external view returns (UD60x18);
```

### VESTING_TOTAL_DURATION

Retrieves the total duration of the vesting stream, in seconds.

```solidity
function VESTING_TOTAL_DURATION() external view returns (uint40);
```

### claim

Claim airdrop on behalf of eligible recipient. If the vesting end time is in the future, it creates a Lockup Linear
stream, otherwise it transfers the tokens directly to the recipient address.

It emits either
[ClaimLLWithTransfer](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLL.md#claimllwithtransfer)
or {ClaimLLWithVesting} event. Requirements:

- The current time must be greater than or equal to the campaign start time.
- The campaign must not have expired.
- `msg.value` must not be less than the value returned by {COMPTROLLER.calculateMinFeeWei}.
- The `index` must not be claimed already.
- The Merkle proof must be valid.
- All requirements from {ISablierLockupLinear.createWithTimestampsLL} must be met.

```solidity
function claim(uint256 index, address recipient, uint128 amount, bytes32[] calldata merkleProof) external payable;
```

**Parameters**

| Name          | Type        | Description                                             |
| ------------- | ----------- | ------------------------------------------------------- |
| `index`       | `uint256`   | The index of the recipient in the Merkle tree.          |
| `recipient`   | `address`   | The address of the airdrop recipient.                   |
| `amount`      | `uint128`   | The amount of ERC-20 tokens allocated to the recipient. |
| `merkleProof` | `bytes32[]` | The proof of inclusion in the Merkle tree.              |

### claimTo

Claim airdrop. If the vesting end time is in the future, it creates a Lockup Linear stream with `to` address as the
stream recipient, otherwise it transfers the tokens directly to the `to` address.

It emits either
[ClaimLLWithTransfer](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLL.md#claimllwithtransfer)
or {ClaimLLWithVesting} event. Requirements:

- `msg.sender` must be the airdrop recipient.
- The `to` must not be the zero address.
- Refer to the requirements in {claim}.

```solidity
function claimTo(uint256 index, address to, uint128 amount, bytes32[] calldata merkleProof) external payable;
```

**Parameters**

| Name          | Type        | Description                                                                                 |
| ------------- | ----------- | ------------------------------------------------------------------------------------------- |
| `index`       | `uint256`   | The index of the `msg.sender` in the Merkle tree.                                           |
| `to`          | `address`   | The address to which Lockup stream or ERC-20 tokens will be sent on behalf of `msg.sender`. |
| `amount`      | `uint128`   | The amount of ERC-20 tokens allocated to the `msg.sender`.                                  |
| `merkleProof` | `bytes32[]` | The proof of inclusion in the Merkle tree.                                                  |

### claimViaSig

Claim airdrop on behalf of eligible recipient using an EIP-712 or EIP-1271 signature. If the vesting end time is in the
future, it creates a Lockup Linear stream with `to` address as the stream recipient, otherwise it transfers the tokens
directly to the `to` address.

It emits either
[ClaimLLWithTransfer](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLL.md#claimllwithtransfer)
or {ClaimLLWithVesting} event. Requirements:

- If `recipient` is an EOA, it must match the recovered signer.
- If `recipient` is a contract, it must implement the IERC-1271 interface.
- The `to` must not be the zero address.
- The `validFrom` must be less than or equal to the current block timestamp.
- Refer to the requirements in {claim}. Below is the example of typed data to be signed by the airdrop recipient,
  referenced from https://docs.metamask.io/wallet/how-to/sign-data/#example.

```json
{
  "types": {
    "EIP712Domain": [
      { "name": "name", "type": "string" },
      { "name": "chainId", "type": "uint256" },
      { "name": "verifyingContract", "type": "address" }
    ],
    "Claim": [
      { "name": "index", "type": "uint256" },
      { "name": "recipient", "type": "address" },
      { "name": "to", "type": "address" },
      { "name": "amount", "type": "uint128" },
      { "name": "validFrom", "type": "uint40" }
    ]
  },
  "domain": {
    "name": "Sablier Airdrops Protocol",
    "chainId": 1,
    "verifyingContract": "0xTheAddressOfThisContract"
  },
  "primaryType": "Claim",
  "message": {
    "index": 2,
    "recipient": "0xTheAddressOfTheRecipient",
    "to": "0xTheAddressReceivingTheTokens",
    "amount": "1000000000000000000000",
    "validFrom": 1752425637
  }
}
```

```solidity
function claimViaSig(
    uint256 index,
    address recipient,
    address to,
    uint128 amount,
    uint40 validFrom,
    bytes32[] calldata merkleProof,
    bytes calldata signature
)
    external
    payable;
```

**Parameters**

| Name          | Type        | Description                                                                                  |
| ------------- | ----------- | -------------------------------------------------------------------------------------------- |
| `index`       | `uint256`   | The index of the recipient in the Merkle tree.                                               |
| `recipient`   | `address`   | The address of the airdrop recipient who is providing the signature.                         |
| `to`          | `address`   | The address to which Lockup stream or ERC-20 tokens will be sent on behalf of the recipient. |
| `amount`      | `uint128`   | The amount of ERC-20 tokens allocated to the recipient.                                      |
| `validFrom`   | `uint40`    | The timestamp from which the claim signature is valid.                                       |
| `merkleProof` | `bytes32[]` | The proof of inclusion in the Merkle tree.                                                   |
| `signature`   | `bytes`     | The EIP-712 or EIP-1271 signature from the airdrop recipient.                                |

## Events

### ClaimLLWithTransfer

Emitted when an airdrop is claimed using direct transfer on behalf of an eligible recipient.

```solidity
event ClaimLLWithTransfer(uint256 index, address indexed recipient, uint128 amount, address to, bool viaSig);
```

**Parameters**

| Name        | Type      | Description                                                                |
| ----------- | --------- | -------------------------------------------------------------------------- |
| `index`     | `uint256` | The index of the airdrop recipient in the Merkle tree.                     |
| `recipient` | `address` | The address of the airdrop recipient.                                      |
| `amount`    | `uint128` | The amount of ERC-20 tokens claimed using direct transfer.                 |
| `to`        | `address` | The address receiving the claim amount on behalf of the airdrop recipient. |
| `viaSig`    | `bool`    | Bool indicating whether the claim is made via a signature.                 |

### ClaimLLWithVesting

Emitted when an airdrop is claimed using Lockup Linear stream on behalf of an eligible recipient.

```solidity
event ClaimLLWithVesting(
    uint256 index, address indexed recipient, uint128 amount, uint256 indexed streamId, address to, bool viaSig
);
```

**Parameters**

| Name        | Type      | Description                                                                 |
| ----------- | --------- | --------------------------------------------------------------------------- |
| `index`     | `uint256` | The index of the airdrop recipient in the Merkle tree.                      |
| `recipient` | `address` | The address of the airdrop recipient.                                       |
| `amount`    | `uint128` | The amount of ERC-20 tokens claimed using Lockup Linear stream.             |
| `streamId`  | `uint256` | The ID of the Lockup stream.                                                |
| `to`        | `address` | The address receiving the Lockup stream on behalf of the airdrop recipient. |
| `viaSig`    | `bool`    | Bool indicating whether the claim is made via a signature.                  |
