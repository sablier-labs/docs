---
id: "stake-claim"
sidebar_position: 6
title: "Claim Rewards"
---

This function transfers the rewards earned by `msg.sender` and then resets the value of `rewards` storage variable to
zero.

```solidity
function claimRewards() public updateReward(msg.sender) {
    uint256 reward = rewards[msg.sender];
    if (reward > 0) {
        delete rewards[msg.sender];

        rewardERC20Token.safeTransfer(msg.sender, reward);

        emit RewardPaid(msg.sender, reward);
    }
}
```
