# ISablierMerkleExecute

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/7cb361717fd2f0289ad8d69469a3c00804b21657/src/interfaces/ISablierMerkleExecute.sol)

**Inherits:** [ISablierMerkleBase](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleBase.md)

**Title:** ISablierMerkleExecute

MerkleExecute enables an airdrop distribution model where eligible users claim tokens and immediately execute a call on
a target contract (useful for staking, lending pool deposits). This is achieved by approving the target contract to
spend user's tokens, followed by a call using the stored function selector combined with user-provided arguments.

## Functions

### SELECTOR

The function selector to call on the target contract.

This is an immutable state variable.

```solidity
function SELECTOR() external view returns (bytes4);
```

### TARGET

The address of the target contract to call with the claim amount.

This is an immutable state variable.

```solidity
function TARGET() external view returns (address);
```

### claimAndExecute

Claim airdrop and execute the call to the target contract.

It emits a [ClaimExecute](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleExecute.md#claimexecute)
event. Notes:

- The function approves the exact claim amount to the
  [TARGET](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleExecute.md#target), executes the call,
  then revokes the approval.
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
    payable;
```

**Parameters**

| Name                | Type        | Description                                                                                                                                   |
| ------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `index`             | `uint256`   | The index of `msg.sender` in the Merkle tree.                                                                                                 |
| `amount`            | `uint128`   | The amount of ERC-20 tokens allocated to `msg.sender`.                                                                                        |
| `merkleProof`       | `bytes32[]` | The proof of inclusion in the Merkle tree.                                                                                                    |
| `selectorArguments` | `bytes`     | The function ABI-encoded arguments for [SELECTOR](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleExecute.md#selector). |

## Events

### ClaimExecute

Emitted when a claim is executed on behalf of an eligible recipient.

```solidity
event ClaimExecute(uint256 index, address indexed recipient, uint128 amount, address indexed target);
```
