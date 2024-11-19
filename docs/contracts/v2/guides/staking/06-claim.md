---
id: "claim"
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

To focus around specific functionalities that enable staking support for streams, the obvious functions such as
`startStakingPeriod` have been omitted from this guide. However, for the completeness, we have written a complete code
that can be found on the next page as well as in the
[examples repo](https://github.com/sablier-labs/examples/blob/main/v2/core/StakeSablierNFT.sol).
