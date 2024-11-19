---
id: "unstake"
sidebar_position: 5
title: "Unstake"
---

The `unstake` function takes `tokenId` as input, and unstakes the stream by transferring the Sablier NFT back to the
user.

```solidity
function unstake(uint256 tokenId) public updateReward(msg.sender) {
    // code goes here.
}
```

As the first step, we will check if the user is a staker.

```solidity
if (stakedAssets[tokenId] != msg.sender) {
    revert UnauthorizedCaller(msg.sender, tokenId);
}
```

On the second step, we will reduce the total amount of underlying ERC20 token staked.

```solidity
totalERC20StakedSupply -= _getAmountInStream(tokenId);
```

On the final step, we will update some storage variables and transfer the NFT:

```solidity
// Effect: delete the owner of the staked token from the storage.
delete stakedAssets[tokenId];

// Effect: delete the `tokenId` from the user storage.
delete stakedTokenId[account];

// Interaction: transfer stream back to user.
sablierLockup.safeTransferFrom(address(this), account, tokenId);
```

As you can see, this function only unstakes the stream without transferring the rewards. The next and the final section
will explain the rewards claim function.
