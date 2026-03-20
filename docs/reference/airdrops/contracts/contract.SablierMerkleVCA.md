---
sidebar_position: 3
---

# SablierMerkleVCA

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/7cb361717fd2f0289ad8d69469a3c00804b21657/src/SablierMerkleVCA.sol)

**Inherits:** [ISablierMerkleVCA](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleVCA.md),
[SablierMerkleSignature](/docs/reference/airdrops/contracts/abstracts/abstract.SablierMerkleSignature.md)

**Title:** SablierMerkleVCA

See the documentation in
[ISablierMerkleVCA](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleVCA.md).

## State Variables

### AGGREGATE_AMOUNT

Retrieves the total amount of ERC-20 tokens allocated to the campaign.

```solidity
uint128 public immutable override AGGREGATE_AMOUNT
```

### UNLOCK_PERCENTAGE

Retrieves the percentage of the full amount that will unlock immediately at the start time. The value is denominated as
a fixed-point number where 1e18 is 100%.

```solidity
UD60x18 public immutable override UNLOCK_PERCENTAGE
```

### VESTING_END_TIME

Retrieves the time when the VCA airdrop is fully vested, as a Unix timestamp.

```solidity
uint40 public immutable override VESTING_END_TIME
```

### VESTING_START_TIME

Retrieves the time when the VCA airdrop begins to unlock, as a Unix timestamp.

```solidity
uint40 public immutable override VESTING_START_TIME
```

### isRedistributionEnabled

Retrieves a bool indicating whether the redistribution of forgone tokens is enabled or not.

```solidity
bool public override isRedistributionEnabled
```

### totalForgoneAmount

Retrieves the total amount of tokens forgone by early claimers.

```solidity
uint128 public override totalForgoneAmount
```

### totalRedistributionAmountPaid

Retrieves the total amount of redistribution rewards paid out.

```solidity
uint128 public override totalRedistributionAmountPaid
```

### \_fullAmountAllocatedToEarlyClaimers

Tracks the full amount allocated to the recipients who claimed before the vesting end time.

```solidity
uint128 private _fullAmountAllocatedToEarlyClaimers
```

## Functions

### constructor

Constructs the contract by initializing the immutable state variables.

```solidity
constructor(
    MerkleVCA.ConstructorParams memory campaignParams,
    address campaignCreator,
    address comptroller
)
    SablierMerkleBase(MerkleBase.ConstructorParams({
            campaignCreator: campaignCreator,
            campaignName: campaignParams.campaignName,
            campaignStartTime: campaignParams.campaignStartTime,
            claimType: campaignParams.claimType,
            comptroller: comptroller,
            expiration: campaignParams.expiration,
            initialAdmin: campaignParams.initialAdmin,
            ipfsCID: campaignParams.ipfsCID,
            merkleRoot: campaignParams.merkleRoot,
            token: campaignParams.token
        }));
```

### calculateClaimAmount

Calculates the amount that would be claimed if the claim were made at `claimTime`.

This is for informational purposes only. To actually claim the airdrop, a Merkle proof is required.

```solidity
function calculateClaimAmount(uint128 fullAmount, uint40 claimTime) external view override returns (uint128);
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

This is for informational purposes only. Reverts if the claim time is less than the vesting start time, since the claim
cannot be made, no amount can be forgone.

```solidity
function calculateForgoneAmount(uint128 fullAmount, uint40 claimTime) external view override returns (uint128);
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

### calculateRedistributionRewards

Calculates the redistribution rewards for a given full amount.

Notes:

- Reverts if redistribution is not enabled.
- If `AGGREGATE_AMOUNT` is set lower than actual total allocations in the Merkle tree, this might return 0 rather than
  reverting.

```solidity
function calculateRedistributionRewards(uint128 fullAmount) external view override returns (uint128);
```

**Parameters**

| Name         | Type      | Description                                                                    |
| ------------ | --------- | ------------------------------------------------------------------------------ |
| `fullAmount` | `uint128` | The amount of tokens that the redistribution rewards are to be calculated for. |

### claimTo

Claim airdrop. If the vesting end time is in the future, it calculates the claim amount to transfer to the `to` address,
otherwise it transfers the full amount. If the redistribution is enabled, it calculates the reward amount based on the
total amount of tokens forgone by early claimers and transfers it to the recipients claiming after the vesting end time.

It emits a {ClaimVCA} event, and a {RedistributeReward} event if the redistribution is enabled. Notes:

- There can be a race condition among recipients if:

1. `AGGREGATE_AMOUNT` is set lower than the actual total allocations in the Merkle tree.
2. The campaign is not sufficiently funded with the actual total allocations.

- The rewards are transferred to the recipients at the time of claiming. If the campaign creator turns the
  redistribution on after the vesting end time, the recipients who have already claimed the full amount would miss on
  the rewards while subsequent recipients would get them. Requirements:
- `CLAIM_TYPE` must be `DEFAULT`.
- The current time must be greater than or equal to the campaign start time.
- The campaign must not have expired.
- `msg.value` must not be less than the value returned by {COMPTROLLER.calculateMinFeeWei}.
- The `index` must not be claimed already.
- The Merkle proof must be valid.
- The claim amount must be greater than zero.
- `msg.sender` must be the airdrop recipient.
- The `to` must not be the zero address.

```solidity
function claimTo(
    uint256 index,
    address to,
    uint128 fullAmount,
    bytes32[] calldata merkleProof
)
    external
    payable
    override
    revertIfNot(ClaimType.DEFAULT)
    notZeroAddress(to);
```

**Parameters**

| Name          | Type        | Description                                                        |
| ------------- | ----------- | ------------------------------------------------------------------ |
| `index`       | `uint256`   | The index of the `msg.sender` in the Merkle tree.                  |
| `to`          | `address`   | The address receiving the ERC-20 tokens on behalf of `msg.sender`. |
| `fullAmount`  | `uint128`   | The total amount of ERC-20 tokens allocated to the recipient.      |
| `merkleProof` | `bytes32[]` | The proof of inclusion in the Merkle tree.                         |

### claimViaAttestation

Claim airdrop using an external attestation from a trusted attestor (e.g., KYC verifier). If the vesting end time is in
the future, it calculates the claim amount to transfer to the `to` address, otherwise it transfers the full amount.

It emits a {ClaimVCA} event. Notes:

- The attestation must be an EIP-712 signature from the attestor.
- See the example in the {claimViaSig} function.
- If the attestor is not set in the campaign, the attestor from the comptroller is used. Requirements:
- `msg.sender` must be the airdrop recipient.
- `CLAIM_TYPE` must be `ATTEST`.
- The `to` must not be the zero address.
- The attestor must not be the zero address.
- The `expireAt` timestamp must not be in the past.
- The attestation signature must be valid.
- Refer to the requirements in {claimTo}.

```solidity
function claimViaAttestation(
    uint256 index,
    address to,
    uint128 fullAmount,
    uint40 expireAt,
    bytes32[] calldata merkleProof,
    bytes calldata attestation
)
    external
    payable
    override
    revertIfNot(ClaimType.ATTEST)
    notZeroAddress(to);
```

**Parameters**

| Name          | Type        | Description                                                             |
| ------------- | ----------- | ----------------------------------------------------------------------- |
| `index`       | `uint256`   | The index of the `msg.sender` in the Merkle tree.                       |
| `to`          | `address`   | The address receiving the ERC-20 tokens on behalf of `msg.sender`.      |
| `fullAmount`  | `uint128`   | The total amount of ERC-20 tokens allocated to the `msg.sender`.        |
| `expireAt`    | `uint40`    | The timestamp after which the attestation signature is no longer valid. |
| `merkleProof` | `bytes32[]` | The proof of inclusion in the Merkle tree.                              |
| `attestation` | `bytes`     | The EIP-712 signature from the attestor.                                |

### claimViaSig

Claim airdrop on behalf of eligible recipient using an EIP-712 or EIP-1271 signature. If the vesting end time is in the
future, it calculates the claim amount to transfer to the `to` address, otherwise it transfers the full amount.

It emits a {ClaimVCA} event. Requirements:

- `CLAIM_TYPE` must be `DEFAULT`.
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
    payable
    override
    revertIfNot(ClaimType.DEFAULT)
    notZeroAddress(to);
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

### enableRedistribution

Enable the redistribution of forgone tokens among recipients claiming after the vesting end time, proportional to their
allocation amount. Once enabled, it cannot be disabled.

Notes:

- It is recommended to fund the campaign with the actual total allocation in the Merkle tree (ideally equivalent to
  `AGGREGATE_AMOUNT`) to avoid race conditions among the recipients. Requirements:
- `msg.sender` must be the admin.
- `VESTING_END_TIME` must be in the future.
- Redistribution must not be already enabled.

```solidity
function enableRedistribution() external override onlyAdmin;
```

### \_calculateClaimAmount

See the documentation for the user-facing functions that call this internal function.

```solidity
function _calculateClaimAmount(uint128 fullAmount, uint40 claimTime) private view returns (uint128);
```

### \_calculateRedistributionRewards

Calculates the redistribution rewards for a given full amount.

```solidity
function _calculateRedistributionRewards(uint256 fullAmount) private view returns (uint128 rewards);
```

### \_postProcessClaim

Post-processes the claim execution by handling the tokens transfer and emitting an event.

```solidity
function _postProcessClaim(uint256 index, address recipient, address to, uint128 fullAmount, bool viaSig) private;
```
