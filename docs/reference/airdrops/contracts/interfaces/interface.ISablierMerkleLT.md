# ISablierMerkleLT

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/interfaces/ISablierMerkleLT.sol)

**Inherits:** [ISablierMerkleLockup](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLockup.md)

MerkleLT enables an airdrop model with a vesting period powered by the Lockup Tranched model.

## Functions

### VESTING_START_TIME

Retrieves the start time of the vesting stream, as a Unix timestamp. Zero is a sentinel value for `block.timestamp`.

```solidity
function VESTING_START_TIME() external view returns (uint40);
```

### tranchesWithPercentages

Retrieves the tranches with their respective unlock percentages and durations.

```solidity
function tranchesWithPercentages() external view returns (MerkleLT.TrancheWithPercentage[] memory);
```

### claim

Claim airdrop on behalf of eligible recipient. If the vesting end time is in the future, it creates a Lockup Tranched
stream, otherwise it transfers the tokens directly to the recipient address.

\*It emits either
[ClaimLTWithTransfer](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLT.md#claimltwithtransfer)
or {ClaimLTWithVesting} event. Requirements:

- The current time must be greater than or equal to the campaign start time.
- The campaign must not have expired.
- `msg.value` must not be less than the value returned by {COMPTROLLER.calculateMinFeeWei}.
- The `index` must not be claimed already.
- The Merkle proof must be valid.
- All requirements from {ISablierLockupTranched.createWithTimestampsLT} must be met.\*

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

Claim airdrop. If the vesting end time is in the future, it creates a Lockup Tranched stream with `to` address as the
stream recipient, otherwise it transfers the tokens directly to the `to` address.

\*It emits either
[ClaimLTWithTransfer](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLT.md#claimltwithtransfer)
or {ClaimLTWithVesting} event. Requirements:

- `msg.sender` must be the airdrop recipient.
- The `to` must not be the zero address.
- Refer to the requirements in {claim}.\*

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
future, it creates a Lockup Tranched stream with `to` address as the stream recipient, otherwise it transfers the tokens
directly to the `to` address.

\*It emits either
[ClaimLTWithTransfer](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLT.md#claimltwithtransfer)
or {ClaimLTWithVesting} event. Requirements:

- If `recipient` is an EOA, it must match the recovered signer.
- If `recipient` is a contract, it must implement the IERC-1271 interface.
- The `to` must not be the zero address.
- The `validFrom` must be less than or equal to the current block timestamp.
- Refer to the requirements in {claim}. Below is the example of typed data to be signed by the airdrop recipient,
  referenced from https://docs.metamask.io/wallet/how-to/sign-data/#example.

```json
types: {
EIP712Domain: [
{ name: "name", type: "string" },
{ name: "chainId", type: "uint256" },
{ name: "verifyingContract", type: "address" },
],
Claim: [
{ name: "index", type: "uint256" },
{ name: "recipient", type: "address" },
{ name: "to", type: "address" },
{ name: "amount", type: "uint128" },
{ name: "validFrom", type: "uint40" },
],
},
domain: {
name: "Sablier Airdrops Protocol",
chainId: 1, // Chain on which the contract is deployed
verifyingContract: "0xTheAddressOfThisContract", // The address of this contract
},
primaryType: "Claim",
message: {
index: 2, // The index of the signer in the Merkle tree
recipient: "0xTheAddressOfTheRecipient", // The address of the airdrop recipient
to: "0xTheAddressReceivingTheTokens", // The address where recipient wants to transfer the tokens
amount: "1000000000000000000000", // The amount of tokens allocated to the recipient
validFrom: 1752425637 // The timestamp from which the claim signature is valid
},
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

### ClaimLTWithTransfer

Emitted when an airdrop is claimed using direct transfer on behalf of an eligible recipient.

```solidity
event ClaimLTWithTransfer(uint256 index, address indexed recipient, uint128 amount, address to, bool viaSig);
```

**Parameters**

| Name        | Type      | Description                                                                |
| ----------- | --------- | -------------------------------------------------------------------------- |
| `index`     | `uint256` | The index of the airdrop recipient in the Merkle tree.                     |
| `recipient` | `address` | The address of the airdrop recipient.                                      |
| `amount`    | `uint128` | The amount of ERC-20 tokens claimed using direct transfer.                 |
| `to`        | `address` | The address receiving the claim amount on behalf of the airdrop recipient. |
| `viaSig`    | `bool`    | Bool indicating whether the claim is made via a signature.                 |

### ClaimLTWithVesting

Emitted when an airdrop is claimed using Lockup Tranched stream on behalf of an eligible recipient.

```solidity
event ClaimLTWithVesting(
    uint256 index, address indexed recipient, uint128 amount, uint256 indexed streamId, address to, bool viaSig
);
```

**Parameters**

| Name        | Type      | Description                                                                 |
| ----------- | --------- | --------------------------------------------------------------------------- |
| `index`     | `uint256` | The index of the airdrop recipient in the Merkle tree.                      |
| `recipient` | `address` | The address of the airdrop recipient.                                       |
| `amount`    | `uint128` | The amount of ERC-20 tokens claimed using Lockup Tranched stream.           |
| `streamId`  | `uint256` | The ID of the Lockup stream.                                                |
| `to`        | `address` | The address receiving the Lockup stream on behalf of the airdrop recipient. |
| `viaSig`    | `bool`    | Bool indicating whether the claim is made via a signature.                  |
