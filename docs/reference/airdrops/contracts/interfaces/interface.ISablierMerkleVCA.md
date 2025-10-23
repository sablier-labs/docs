# ISablierMerkleVCA

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/interfaces/ISablierMerkleVCA.sol)

**Inherits:** [ISablierMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleBase.md)

VCA stands for Variable Claim Amount, and is an airdrop model where the claim amount increases linearly until the
airdrop period ends. Claiming early results in forgoing the remaining amount, whereas claiming after the period grants
the full amount that was allocated.

## Functions

### UNLOCK_PERCENTAGE

Retrieves the percentage of the full amount that will unlock immediately at the start time. The value is denominated as
a fixed-point number where 1e18 is 100%.

```solidity
function UNLOCK_PERCENTAGE() external view returns (UD60x18);
```

### VESTING_END_TIME

Retrieves the time when the VCA airdrop is fully vested, as a Unix timestamp.

```solidity
function VESTING_END_TIME() external view returns (uint40);
```

### VESTING_START_TIME

Retrieves the time when the VCA airdrop begins to unlock, as a Unix timestamp.

```solidity
function VESTING_START_TIME() external view returns (uint40);
```

### calculateClaimAmount

Calculates the amount that would be claimed if the claim were made at `claimTime`.

_This is for informational purposes only. To actually claim the airdrop, a Merkle proof is required._

```solidity
function calculateClaimAmount(uint128 fullAmount, uint40 claimTime) external view returns (uint128);
```

**Parameters**

| Name         | Type      | Description                                                                                     |
| ------------ | --------- | ----------------------------------------------------------------------------------------------- |
| `fullAmount` | `uint128` | The amount of tokens allocated to a user, denominated in the token's decimals.                  |
| `claimTime`  | `uint40`  | A hypothetical time at which to make the claim. Zero is a sentinel value for `block.timestamp`. |

**Returns**

| Name     | Type      | Description                                                            |
| -------- | --------- | ---------------------------------------------------------------------- |
| `<none>` | `uint128` | The amount that would be claimed, denominated in the token's decimals. |

### calculateForgoneAmount

Calculates the amount that would be forgone if the claim were made at `claimTime`.

_This is for informational purposes only. Reverts if the claim time is less than the vesting start time, since the claim
cannot be made, no amount can be forgone._

```solidity
function calculateForgoneAmount(uint128 fullAmount, uint40 claimTime) external view returns (uint128);
```

**Parameters**

| Name         | Type      | Description                                                                                     |
| ------------ | --------- | ----------------------------------------------------------------------------------------------- |
| `fullAmount` | `uint128` | The amount of tokens allocated to a user, denominated in the token's decimals.                  |
| `claimTime`  | `uint40`  | A hypothetical time at which to make the claim. Zero is a sentinel value for `block.timestamp`. |

**Returns**

| Name     | Type      | Description                                                            |
| -------- | --------- | ---------------------------------------------------------------------- |
| `<none>` | `uint128` | The amount that would be forgone, denominated in the token's decimals. |

### totalForgoneAmount

Retrieves the total amount of tokens forgone by early claimers.

```solidity
function totalForgoneAmount() external view returns (uint256);
```

### claimTo

Claim airdrop. If the vesting end time is in the future, it calculates the claim amount to transfer to the `to` address,
otherwise it transfers the full amount.

It emits a [ClaimVCA](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleVCA.md#claimvca) event.
Requirements:

- The current time must be greater than or equal to the campaign start time.
- The campaign must not have expired.
- `msg.value` must not be less than the value returned by {COMPTROLLER.calculateMinFeeWei}.
- The `index` must not be claimed already.
- The Merkle proof must be valid.
- The claim amount must be greater than zero.
- `msg.sender` must be the airdrop recipient.
- The `to` must not be the zero address.

```solidity
function claimTo(uint256 index, address to, uint128 fullAmount, bytes32[] calldata merkleProof) external payable;
```

**Parameters**

| Name          | Type        | Description                                                        |
| ------------- | ----------- | ------------------------------------------------------------------ |
| `index`       | `uint256`   | The index of the `msg.sender` in the Merkle tree.                  |
| `to`          | `address`   | The address receiving the ERC-20 tokens on behalf of `msg.sender`. |
| `fullAmount`  | `uint128`   | The total amount of ERC-20 tokens allocated to the recipient.      |
| `merkleProof` | `bytes32[]` | The proof of inclusion in the Merkle tree.                         |

### claimViaSig

Claim airdrop on behalf of eligible recipient using an EIP-712 or EIP-1271 signature. If the vesting end time is in the
future, it calculates the claim amount to transfer to the `to` address, otherwise it transfers the full amount.

It emits a [ClaimVCA](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleVCA.md#claimvca) event.
Requirements:

- If `recipient` is an EOA, it must match the recovered signer.
- If `recipient` is a contract, it must implement the IERC-1271 interface.
- The `to` must not be the zero address.
- The `validFrom` must be less than or equal to the current block timestamp.
- Refer to the requirements in {claimTo} except that there are no restrictions on `msg.sender`. Below is the example of
  typed data to be signed by the airdrop recipient, referenced from
  https://docs.metamask.io/wallet/how-to/sign-data/#example.

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
    uint128 fullAmount,
    uint40 validFrom,
    bytes32[] calldata merkleProof,
    bytes calldata signature
)
    external
    payable;
```

**Parameters**

| Name          | Type        | Description                                                          |
| ------------- | ----------- | -------------------------------------------------------------------- |
| `index`       | `uint256`   | The index of the recipient in the Merkle tree.                       |
| `recipient`   | `address`   | The address of the airdrop recipient who is providing the signature. |
| `to`          | `address`   | The address receiving the ERC-20 tokens on behalf of the recipient.  |
| `fullAmount`  | `uint128`   | The total amount of ERC-20 tokens allocated to the recipient.        |
| `validFrom`   | `uint40`    | The timestamp from which the claim signature is valid.               |
| `merkleProof` | `bytes32[]` | The proof of inclusion in the Merkle tree.                           |
| `signature`   | `bytes`     | The EIP-712 or EIP-1271 signature from the airdrop recipient.        |

## Events

### ClaimVCA

Emitted when an airdrop is claimed on behalf of an eligible recipient.

```solidity
event ClaimVCA(
    uint256 index, address indexed recipient, uint128 claimAmount, uint128 forgoneAmount, address to, bool viaSig
);
```

**Parameters**

| Name            | Type      | Description                                                                |
| --------------- | --------- | -------------------------------------------------------------------------- |
| `index`         | `uint256` | The index of the airdrop recipient in the Merkle tree.                     |
| `recipient`     | `address` | The address of the airdrop recipient.                                      |
| `claimAmount`   | `uint128` | The amount of ERC-20 tokens claimed.                                       |
| `forgoneAmount` | `uint128` | The amount of ERC-20 tokens forgone.                                       |
| `to`            | `address` | The address receiving the claim amount on behalf of the airdrop recipient. |
| `viaSig`        | `bool`    | Bool indicating whether the claim is made via a signature.                 |
