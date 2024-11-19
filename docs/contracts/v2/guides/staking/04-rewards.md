---
id: "update-rewards"
sidebar_position: 4
title: "Update rewards"
---

In this section, we will define a modifier to update the rewards earned by users each time the following functions are
called:

- `claimRewards`
- `onSablierLockupCancel`
- `onSablierLockupWithdraw`
- `stake`
- `unstake`

First, define the modifier with `account` as an input parameter:

```solidity
modifier updateReward(address account) {
    // code goes here
    _;
}
```

### Total rewards paid per ERC20 token

Inside the modifier, we will update the total rewards earned per ERC20 token.

```solidity
totalRewardPaidPerERC20Token = rewardPaidPerERC20Token();
```

The implementation of `rewardPaidPerERC20Token` goes as follows:

```solidity
/// @notice Calculates the total rewards distributed per ERC20 token.
/// @dev This is called by `updateReward` which also update the value of `totalRewardPaidPerERC20Token`.
function rewardPaidPerERC20Token() public view returns (uint256) {
    // If the total staked supply is zero or staking has ended, return the stored value of reward per ERC20.
    if (totalERC20StakedSupply == 0 || block.timestamp >= stakingEndTime) {
        return totalRewardPaidPerERC20Token;
    }

    uint256 totalRewardsPerERC20InCurrentPeriod =
        ((lastTimeRewardsApplicable() - lastUpdateTime) * rewardRate * 1e18) / totalERC20StakedSupply;

    return totalRewardPaidPerERC20Token + totalRewardsPerERC20InCurrentPeriod;
}
```

The function calculates the rewards earned by all the streams since the last snapshot, and divides it with the total
amount of ERC20 tokens vesting through all the staked streams. Finally, it adds the value to
`totalRewardPaidPerERC20Token`. So, you can see that `totalRewardPaidPerERC20Token` tracks the cumulative rewards earned
per ERC20 token.

This is also helpful in calculating the rewards earned by each user:

```math
\text{rewards} = \text{amount in stream} \times \text{rewardPaidPerERC20Token} - \text{rewards already paid}
```

### Last time Update

Now let's move onto thr second line of the modifier:

```solidity
    lastUpdateTime = lastTimeRewardsApplicable();
```

The implementation of `lastTimeRewardsApplicable` goes as follows:

```solidity
function lastTimeRewardsApplicable() public view returns (uint256) {
    return block.timestamp < stakingEndTime ? block.timestamp : stakingEndTime;
}
```

which is just the block timestamp if the staking period has not ended.

### Rewards earned by each user

The third line of the modifier calculates and stores rewards earned by each user:

```solidity
    rewards[account] = calculateUserRewards(account);
```

The implementation of `calculateUserRewards` goes as follows:

```solidity
/// @return earned The amount available as rewards for the account.
function calculateUserRewards(address account) public view returns (uint256 earned) {
    // Return if no tokens are staked.
    if (stakedTokenId[account] == 0) {
        return rewards[account];
    }

    uint256 amountInStream = _getAmountInStream(stakedTokenId[account]);

    // Get the rewards already paid to the user per ERC20 token.
    uint256 userRewardPerERC20Token_ = userRewardPerERC20Token[account];

    uint256 rewardsSinceLastTime = (amountInStream * (rewardPaidPerERC20Token() - userRewardPerERC20Token_)) / 1e18;

    return rewardsSinceLastTime + rewards[account];
}
```

### Update user rewards per ERC20 token

And the final step is to set the cumulative reward per token for the user:

```solidity
    userRewardPerERC20Token[account] = totalRewardPaidPerERC20Token;
```

So, every time this modifier is called, it updates the value of `totalRewardPaidPerERC20Token` based on the total staked
supply at that time. Since this tracks the cumulative rewards earned per ERC20 token, no user loses out on their rewards
even if they don't call any function for a long time.

:::info

Let us understand this with a simple example. Let's say reward rate is 100 tokens per hour.

1. A user stakes 100 tokens.
2. At the end of first hour, a second user stakes 100 tokens. The `totalRewardPaidPerERC20Token` will be updated to 1.
3. At the end of second hour, a third user stakes 200 tokens which makes total tokens staked to be 400. The
   `totalRewardPaidPerERC20Token` will be updated to 1.5. Note that the modifier is called at the start of the function.
4. At the end of third hour, the first user comes claiming his rewards. The `totalRewardPaidPerERC20Token` will be
   updated to 1.75. `rewards[account]` will be set to 175 and the `userRewardPerERC20Token[account]` will be set to
   1.75. The first user ends up receiving a reward of 175 tokens.

Let us check if it is indeed correct.

1. First hour: Because the first user is the only staker, he should earn 100 tokens.
2. 2nd hour: Now because of the second user, the first user should earn 50 tokens.
3. 3rd hour: The first user should earn 25 tokens.

QED.

:::
