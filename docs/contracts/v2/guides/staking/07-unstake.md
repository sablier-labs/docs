---
id: "stake-unstake"
sidebar_position: 7
title: "Unstake"
---

The `unstake` function takes `streamId` as input, and unstakes the stream by transferring the Sablier NFT back to the
user.

```solidity
function unstake(uint256 streamId) public updateReward(msg.sender) {
    // code goes here.
}
```

As the first step, we will check if the user is a staker.

```solidity
if (stakedUsers[streamId] != msg.sender) {
    revert UnauthorizedCaller(msg.sender, streamId);
}
```

As the second step, we will reduce the total amount of underlying ERC20 token staked.

```solidity
totalERC20StakedSupply -= _getAmountInStream(streamId);
```

As the final step, we will update some storage variables and transfer the NFT:

```solidity
delete stakedUsers[streamId];

delete stakedStreams[account];

sablierLockup.safeTransferFrom({ from: address(this), to: account, tokenId: streamId });
```

As you can see, this function only unstakes the stream without transferring the rewards. The next and the final section
will explain the rewards claim function.
