---
id: "hooks"
sidebar_position: 3
title: "Hooks"
---

Hooks enable callbacks to the staking contract when the following conditions are met:

1. A call to `cancel` or `withdraw` function is made.
2. Staking contract is the recipient of the Sablier stream.

Depending on your requirement, you can implement a custom logic to be executed when the sender cancels or a user
withdraws from a staked stream. For example, you might want to automatically unstake the stream if `cancel` is called,
or you might want to update the user's balance in your application if `withdraw` is called. Hooks make that happen.

For this example, we will implement the following logic:

1. Updates user's staked balance in the staking contract when a cancel is called.
2. Updates user's staked balance in the staking contract and transfers the withdrawn amount to the user's address.

:::note

A dedicated hook guide is available [here](/contracts/v2/guides/hooks).

:::

### Cancel hook

```solidity
/// @notice Implements the hook to handle cancelation events. This will be called by Sablier contract when a stream
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
    updateReward(stakedAssets[streamId])
    returns (bytes4 selector)
{
    // Check: the caller is the lockup contract.
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
    updateReward(stakedAssets[streamId])
    returns (bytes4 selector)
{
    // Check: the caller is the lockup contract
    if (msg.sender != address(sablierLockup)) {
        revert UnauthorizedCaller(msg.sender, streamId);
    }

    address staker = stakedAssets[streamId];

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

The user's rewards are updated through `updateReward` modifier on which we will discuss in the next section.
