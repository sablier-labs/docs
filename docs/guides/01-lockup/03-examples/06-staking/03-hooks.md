---
id: "hooks"
sidebar_position: 3
title: "Hooks"
---

As explained in the [access control](/reference/lockup/access-control) section, the Sablier Protocol allows anyone to
trigger withdrawals from a stream. For the staking contract, we want to make sure that any call to `withdraw` also
updates the states of the staking contract. So in this section, we will discuss how we can create such control flows
with Sablier hooks.

Hooks enable callbacks to the staking contract in the following scenario:

1. A call to `cancel` or `withdraw` function is made.
2. The staking contract is the recipient of the Sablier stream.

Depending on your requirement, you can implement custom logic to be executed when the sender cancels or a user withdraws
from a staked stream. For example, you might want to automatically unstake the stream if `cancel` is called, or you
might want to update the internal accounting if `withdraw` is called. Hooks make that happen.

For this example, we will implement the following logic:

1. When a stream is canceled, update the user's staked balance in the staking contract.
2. When a withdrawal is made, update the user's staked balance in the staking contract and transfer the withdrawn amount
   to the user's address.

:::note

A dedicated guide for hooks is available [here](/guides/lockup/examples/hooks).

:::

### Cancel hook

```solidity
/// @notice Implements the hook to handle cancellation events. This will be called by Sablier contract when a stream
/// is canceled by the sender.
/// @dev This function subtracts the amount refunded to the sender from `totalERC20StakedSupply`.
///   - This function also updates the rewards for the staker.
function onSablierLockupCancel(
    uint256 streamId,
    address, /* sender */
    uint128 senderAmount,
    uint128 /* recipientAmount */
)
    external
    updateReward(stakedUsers[streamId])
    returns (bytes4 selector)
{
    // Check: the caller is the Lockup contract.
    if (msg.sender != address(sablierLockup)) {
        revert UnauthorizedCaller(msg.sender, streamId);
    }

    // Effect: update the total staked amount.
    totalERC20StakedSupply -= senderAmount;

    return ISablierLockupRecipient.onSablierLockupCancel.selector;
}
```

### Withdraw hook

```solidity
/// @notice Implements the hook to handle withdraw events. This will be called by Sablier contract when withdraw is
/// called on a stream.
/// @dev This function transfers `amount` to the original staker.
function onSablierLockupWithdraw(
    uint256 streamId,
    address, /* caller */
    address, /* recipient */
    uint128 amount
)
    external
    updateReward(stakedUsers[streamId])
    returns (bytes4 selector)
{
    // Check: the caller is the Lockup contract
    if (msg.sender != address(sablierLockup)) {
        revert UnauthorizedCaller(msg.sender, streamId);
    }

    address staker = stakedUsers[streamId];

    // Check: the staker is not the zero address.
    if (staker == address(0)) {
        revert ZeroAddress(staker);
    }

    // Effect: update the total staked amount.
    totalERC20StakedSupply -= amount;

    // Interaction: transfer the withdrawn amount to the original staker.
    rewardERC20Token.safeTransfer(staker, amount);

    return ISablierLockupRecipient.onSablierLockupWithdraw.selector;
}
```
