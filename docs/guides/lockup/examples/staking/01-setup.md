---
id: "setup"
sidebar_position: 1
title: "Introduction"
---

# Staking in Sablier

Staking is a popular concept in DeFi. A major advantage of using Sablier is that you can set up staking of tokens being
vested through Sablier streams. This is enabled by [hooks](/concepts/protocol/hooks), about which you can read more in
the [hooks guide](/contracts/v2/guides/hooks).

This series will guide you through an example of a staking contract with the following features:

1. Allowing users to stake Sablier streams for a particular token.
2. Earning and claiming rewards in the same token as the vested token.
3. Allowing users to unstake their staked Sablier streams.

:::warning

The code provided in this guide has NOT BEEN AUDITED and is provided "AS IS" with no warranties of any kind, either
express or implied. It is intended solely for demonstration purposes.

:::

## Assumptions

Before diving in, please note that we will make the following assumptions:

1. The guide demonstrates staking of only one type of stream at a time, either Lockup Dynamic or Lockup Linear. This is
   because each type is a different contract. You can build your own contract to stake all types of streams.
1. Since staking requires transferring the Sablier NFT from users' wallet to the staking contract, the Sablier stream
   must be transferable at the time of creation.
1. The staking contract allows staking of one stream per user. So, if a user has already staked a stream, he will not be
   able to stake another stream from the same address. This is assumed for simplicity's sake.
1. Rewards are distributed at a fixed rate, for a fixed duration, and are bound by an end time.

## First steps

Let's begin with the constructor.

Create a contract called `StakeSablierNFT` and write the `constructor` as follows:

```solidity
contract StakeSablierNFT is
    Adminable,
    ERC721Holder,
    ISablierLockupRecipient // Required to implement hooks
{
    constructor(address initialAdmin, IERC20 rewardERC20Token_, ISablierV2Lockup sablierLockup_) {
        admin = initialAdmin;
        rewardERC20Token = rewardERC20Token_;
        sablierLockup = sablierLockup_;
    }
}
```

As mentioned above, a user will only be able to stake a stream that is vesting tokens specified by `rewardERC20Token_`
in the constructor. The rewards will also be distributed in the same token.

:::info

`ISablierV2Lockup` is a shared interface between `ISablierV2LockupLinear`, `ISablierV2LockupDynamic` and
`ISablierV2LockupTranched`, allowing users to interact with either contract type using a single interface.

:::

To focus on specific functionalities that enable staking support for streams, obvious functions such as
`startStakingPeriod` have been omitted from this guide. However, for completeness, the full code can be found on the
next page as well as in the
[examples repo](https://github.com/sablier-labs/examples/blob/main/v2/core/StakeSablierNFT.sol).
