---
sidebar_position: 3
---

# SablierMerkleInstant

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/SablierMerkleInstant.sol)

**Inherits:** [ISablierMerkleInstant](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleInstant.md),
[SablierMerkleBase](/docs/reference/airdrops/contracts/abstracts/abstract.SablierMerkleBase.md)

See the documentation in
[ISablierMerkleInstant](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleInstant.md).

## Functions

### constructor

_Constructs the contract by initializing the immutable state variables._

```solidity
constructor(
    MerkleInstant.ConstructorParams memory params,
    address campaignCreator,
    address comptroller
)
    SablierMerkleBase(
        campaignCreator,
        params.campaignName,
        params.campaignStartTime,
        comptroller,
        params.expiration,
        params.initialAdmin,
        params.ipfsCID,
        params.merkleRoot,
        params.token
    );
```

### claim

Claim airdrop on behalf of eligible recipient and transfer it to the recipient address.

It emits a {ClaimInstant} event. Requirements:

- The current time must be greater than or equal to the campaign start time.
- The campaign must not have expired.
- `msg.value` must not be less than the value returned by {COMPTROLLER.calculateMinFeeWei}.
- The `index` must not be claimed already.
- The Merkle proof must be valid.

```solidity
function claim(
    uint256 index,
    address recipient,
    uint128 amount,
    bytes32[] calldata merkleProof
)
    external
    payable
    override;
```

**Parameters**

| Name          | Type        | Description                                             |
| ------------- | ----------- | ------------------------------------------------------- |
| `index`       | `uint256`   | The index of the recipient in the Merkle tree.          |
| `recipient`   | `address`   | The address of the airdrop recipient.                   |
| `amount`      | `uint128`   | The amount of ERC-20 tokens allocated to the recipient. |
| `merkleProof` | `bytes32[]` | The proof of inclusion in the Merkle tree.              |

### claimTo

Claim airdrop and transfer the tokens to the `to` address.

It emits a {ClaimInstant} event. Requirements:

- `msg.sender` must be the airdrop recipient.
- The `to` must not be the zero address.
- Refer to the requirements in {claim}.

```solidity
function claimTo(
    uint256 index,
    address to,
    uint128 amount,
    bytes32[] calldata merkleProof
)
    external
    payable
    override
    notZeroAddress(to);
```

**Parameters**

| Name          | Type        | Description                                                        |
| ------------- | ----------- | ------------------------------------------------------------------ |
| `index`       | `uint256`   | The index of the `msg.sender` in the Merkle tree.                  |
| `to`          | `address`   | The address receiving the ERC-20 tokens on behalf of `msg.sender`. |
| `amount`      | `uint128`   | The amount of ERC-20 tokens allocated to the `msg.sender`.         |
| `merkleProof` | `bytes32[]` | The proof of inclusion in the Merkle tree.                         |

### claimViaSig

Claim airdrop on behalf of eligible recipient using an EIP-712 or EIP-1271 signature, and transfer the tokens to the
`to` address.

It emits a {ClaimInstant} event. Requirements:

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
    payable
    override
    notZeroAddress(to);
```

**Parameters**

| Name          | Type        | Description                                                          |
| ------------- | ----------- | -------------------------------------------------------------------- |
| `index`       | `uint256`   | The index of the recipient in the Merkle tree.                       |
| `recipient`   | `address`   | The address of the airdrop recipient who is providing the signature. |
| `to`          | `address`   | The address receiving the ERC-20 tokens on behalf of the recipient.  |
| `amount`      | `uint128`   | The amount of ERC-20 tokens allocated to the recipient.              |
| `validFrom`   | `uint40`    | The timestamp from which the claim signature is valid.               |
| `merkleProof` | `bytes32[]` | The proof of inclusion in the Merkle tree.                           |
| `signature`   | `bytes`     | The EIP-712 or EIP-1271 signature from the airdrop recipient.        |

### \_postProcessClaim

_Post-processes the claim execution by handling the tokens transfer and emitting an event._

```solidity
function _postProcessClaim(uint256 index, address recipient, address to, uint128 amount, bool viaSig) private;
```
