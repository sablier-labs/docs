---
sidebar_position: 3
---

# SablierMerkleExecute

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/7cb361717fd2f0289ad8d69469a3c00804b21657/src/SablierMerkleExecute.sol)

**Inherits:** [ISablierMerkleExecute](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleExecute.md),
ReentrancyGuard, [SablierMerkleBase](/docs/reference/airdrops/contracts/abstracts/abstract.SablierMerkleBase.md)

**Title:** SablierMerkleExecute

See the documentation in
[ISablierMerkleExecute](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleExecute.md).

## State Variables

### SELECTOR

The function selector to call on the target contract.

This is an immutable state variable.

```solidity
bytes4 public immutable override SELECTOR
```

### TARGET

The address of the target contract to call with the claim amount.

This is an immutable state variable.

```solidity
address public immutable override TARGET
```

## Functions

### constructor

Constructs the contract by initializing the immutable state variables.

```solidity
constructor(
    MerkleExecute.ConstructorParams memory campaignParams,
    address campaignCreator,
    address comptroller
)
    SablierMerkleBase(MerkleBase.ConstructorParams({
            campaignCreator: campaignCreator,
            campaignName: campaignParams.campaignName,
            campaignStartTime: campaignParams.campaignStartTime,
            claimType: ClaimType.EXECUTE,
            comptroller: comptroller,
            expiration: campaignParams.expiration,
            initialAdmin: campaignParams.initialAdmin,
            ipfsCID: campaignParams.ipfsCID,
            merkleRoot: campaignParams.merkleRoot,
            token: campaignParams.token
        }));
```

### claimAndExecute

Claim airdrop and execute the call to the target contract.

It emits a {ClaimExecute} event. Notes:

- The function approves the exact claim amount to the {TARGET}, executes the call, then revokes the approval.
- The function does not forward native tokens to the target contract, so calls to targets that require a native token
  payment will revert. Requirements:
- The current time must be greater than or equal to the campaign start time.
- The campaign must not have expired.
- `msg.value` must not be less than the value returned by {COMPTROLLER.calculateMinFeeWei}.
- The `index` must not be claimed already.
- The Merkle proof must be valid.
- `msg.sender` must be the airdrop recipient.
- The external call to the target contract must succeed.
- The target contract must transfer the entire claim amount from the campaign.

```solidity
function claimAndExecute(
    uint256 index,
    uint128 amount,
    bytes32[] calldata merkleProof,
    bytes calldata selectorArguments
)
    external
    payable
    override
    nonReentrant;
```

**Parameters**

| Name                | Type        | Description                                            |
| ------------------- | ----------- | ------------------------------------------------------ |
| `index`             | `uint256`   | The index of `msg.sender` in the Merkle tree.          |
| `amount`            | `uint128`   | The amount of ERC-20 tokens allocated to `msg.sender`. |
| `merkleProof`       | `bytes32[]` | The proof of inclusion in the Merkle tree.             |
| `selectorArguments` | `bytes`     | The function ABI-encoded arguments for {SELECTOR}.     |
