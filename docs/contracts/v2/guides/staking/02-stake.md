---
id: "stake"
sidebar_position: 2
title: "Stake"
---

The `stake` function takes `tokenId` as input, and stake the stream by transferring the Sablier NFT from the user's
wallet to the staking contract.

```solidity
function stake(uint256 tokenId) external {
    // code goes here.
}
```

First step would be to check if the underlying token vesting through the stream is same as the reward token. Since
Sablier protocol can be used to stream any token, this ensures that staking contract does not accept streams that are
not vesting the token specified.

```solidity
if (sablierLockup.getAsset(tokenId) != rewardERC20Token) {
    revert DifferentStreamingAsset(tokenId, rewardERC20Token);
}
```

As mentioned in the assumptions, the contract only allows staking one NFT at a time. So now we will check if the user
has already staked or not.

```solidity
if (stakedTokenId[msg.sender] != 0) {
    revert AlreadyStaking(msg.sender, stakedTokenId[msg.sender]);
}
```

Finally, we will set some storage variables and transfer the NFT:

```solidity
// Effect: store the `msg.sender` as the staker of the token ID.
stakedAssets[tokenId] = msg.sender;

// Effect: Store the new tokenId against the `msg.sender`.
stakedTokenId[msg.sender] = tokenId;

// Effect: update the total amount of underlying ERC20 token staked.
totalERC20StakedSupply += _getAmountInStream(tokenId);

// Interaction: transfer NFT to the staking contract.
sablierLockup.safeTransferFrom({ from: msg.sender, to: address(this), tokenId: tokenId });
```

`_getAmountInStream` function retrieves the amount of tokens vesting through the stream.

```math
\text{amount in a stream} = (\text{amount deposited} - \text{amount withdrawn} - \text{amount refunded})
```

The implementation is as follows:

```solidity
/// @dev The following function determines the amounts of tokens in a stream irrespective of its cancelable status.
function _getAmountInStream(uint256 tokenId) private view returns (uint256 amount) {
    // The tokens in the stream = amount deposited - amount withdrawn - amount refunded.
    return sablierLockup.getDepositedAmount(tokenId) - sablierLockup.getWithdrawnAmount(tokenId)
        - sablierLockup.getRefundedAmount(tokenId);
}
```

As can be seen in the [access control](/contracts/v2/reference/access-control#overview), Sablier protocol allows anyone
to trigger withdrawal from a stream. For the staking contract, we want to make sure that any call to `withdraw` also
updates the states of the staking contract. So in the next section, we will explore how we can create such control flows
using Sablier hooks.
