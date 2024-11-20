---
id: "stake-stake"
sidebar_position: 4
title: "Stake"
---

The `stake` function takes `streamId` as input, and stakes the stream by transferring the Sablier NFT from the user's
wallet to the staking contract.

```solidity
function stake(uint256 streamId) external {
    // code goes here.
}
```

As the first step, we will check if the underlying token being vested through the stream is same as the reward token.
Since the Sablier protocol can be used to stream any ERC-20 token, this check ensures that the staking contract does not
accept unknown tokens.

```solidity
if (sablierLockup.getAsset(streamId) != rewardERC20Token) {
    revert DifferentStreamingToken(streamId, rewardERC20Token);
}
```

As mentioned in the assumptions, the contract only allows staking one NFT at a time. So, we will now check if the user
is already staking.

```solidity
if (stakedStreams[msg.sender] != 0) {
    revert AlreadyStaking(msg.sender, stakedStreams[msg.sender]);
}
```

Finally, we will set some storage variables and transfer the NFT:

```solidity
stakedUsers[streamId] = msg.sender;

stakedStreams[msg.sender] = streamId;

totalERC20StakedSupply += _getAmountInStream(streamId);

sablierLockup.safeTransferFrom({ from: msg.sender, to: address(this), tokenId: streamId });
```

The `_getAmountInStream` function retrieves the amount of tokens being vested through the stream.

```math
\text{amount in a stream} = (\text{amount deposited} - \text{amount withdrawn} - \text{amount refunded})
```

The implementation is as follows:

```solidity
/// @dev The following function determines the amounts of tokens in a stream irrespective of its cancelable status.
function _getAmountInStream(uint256 streamId) private view returns (uint256 amount) {
    // The tokens in the stream = amount deposited - amount withdrawn - amount refunded.
    return sablierLockup.getDepositedAmount(streamId) - sablierLockup.getWithdrawnAmount(streamId)
        - sablierLockup.getRefundedAmount(streamId);
}
```
