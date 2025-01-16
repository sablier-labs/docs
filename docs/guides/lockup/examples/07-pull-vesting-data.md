---
id: "vesting-data"
sidebar_position: 7
title: "Pull Vesting Data"
---

This guide explains how you can pull vesting data from Sablier Lockup streams. This data can be useful for a variety of
use cases, including but not limited to staking contracts, blockchain explorers, and data dashboards:

1. **Staking**: Staking of Sablier streams require access to the amount of tokens that are held by the stream. You do
   not want to distribute rewards for tokens that have been withdrawn by users.
2. **Explorers (e.g., Etherscan, CoinGecko)**: One major feature of blockchain explorers is to show accurate circulating
   supplies. When tokens are vested through Sablier, you may want to exclude the amount of unvested tokens from the
   circulating supply. This is helpful to accurately calculate the market cap, which depends upon the amount of liquid
   tokens.
3. **Data Dashboards (e.g., Tokenomist, Nansen, Dune)**: Investors and traders use data dashboards to make informed
   trading decisions. When Sablier is used, you may want to show the amount of liquid (or vested) tokens and the amount
   of illiquid (or unvested) tokens. This is helpful to understand the token distribution and the team's commitment to
   the long-term success of the project.

:::note

Note that 'streamed amount' is synonymous with 'vested amount'.

:::

## Frontend Sandbox

The examples in this guide are written in Solidity, but you may want to interact with the Sablier Lockup contract from
your frontend application. A good starting point for this is the
[Sablier Sandbox](https://github.com/sablier-labs/sandbox).

For a comprehensive list of all the functions available in Sablier Lockup, visit the [References](/reference/overview)
section of this website.

## Actions

### Cancel on first withdraw

To automatically cancel streams as soon as the user withdraws their tokens, you can use one of two methods: onchain or
offchain.

The onchain method is to track the withdrawn amount and check if its value is greater than 0:

```solidity
if (lockup.getWithdrawnAmount(streamId) > 0) {
  lockup.cancel(streamId);
}
```

Offchain, you can monitor the
[`WithdrawFromLockupStream`](/reference/lockup/contracts/interfaces/interface.ISablierLockup) events. As soon as a
withdrawal event is detected, you can send a transaction to cancel the stream.

## Calculating Amounts

### Amount in stream

This is the amount of tokens held by the stream. It is the sum of locked tokens and vested tokens that have not been
withdrawn. This value is particularly useful for applications like staking. The following formula can be used for both
cancelable and non-cancelable streams:

```solidity
uint256 amountInStream = sablierLockup.getDepositedAmount(streamId)
                       -  sablierLockup.getWithdrawnAmount(streamId)
                       - sablierLockup.getRefundedAmount(streamId);
```

For non-cancelable stream, a more efficient way to calculate the amount in stream is:

```solidity
uint256 amountInStream = sablierLockup.getDepositedAmount(streamId)
                       - sablierLockup.getWithdrawnAmount(streamId);
```

:::info

If you want to build a Staking contract for Sablier streams, check out the [staking guide](./staking/setup).

:::

### Locked amount

This is the amount of tokens that are locked in the stream and are effectively illiquid. This is particularly relevant
when calculating the circulating supply of a token.

```solidity
uint256 lockedAmount = lockup.getDepositedAmount(streamId)
                     - lockup.streamedAmountOf(streamId)
                     - sablierLockup.getRefundedAmount(streamId);
```

For non-cancelable stream, a more efficient way to calculate locked amount is:

```solidity
uint256 lockedAmount = lockup.getDepositedAmount(streamId) - lockup.streamedAmountOf(streamId);
```

While calculating the circulating supply, you may want to subtract the locked amount from your calculations.

### Unlocked amount

As opposed to the locked amount, the unlocked amount refers to tokens that are no longer locked and are effectively
liquid.

```solidity
uint256 unlockedAmount = lockup.streamedAmountOf(streamId)
                       + sablierLockup.getRefundedAmount(streamId);
```

For non-cancelable stream, a more efficient way to calculate unlocked amount is:

```solidity
uint256 unlockedAmount = lockup.streamedAmountOf(streamId);
```

## Vested amount not withdrawn

If you are building an application that requires access to amount of tokens that have been vested but not yet withdrawn,
you can use the following formula:

```solidity
uint256 vestedAmount = lockup.streamedAmountOf(streamId) - lockup.getWithdrawnAmount(streamId);
```

This may be useful for use cases in which you want to reward 'diamond hands', i.e., users who have not withdrawn their
share of airdrops.

## Unlock Dates

This section is useful if you are building a data dashboard and want to index the dates when tokens will be unlocked in
Sablier.

To obtain the time at which a stream will be fully unlocked, you can use the following function:

```solidity
uint256 unlockTime = lockup.getEndTime(streamId);
```

Obtaining the earlier unlock times depends on the type of stream. Let's go through each stream type:

### Linear streams

For Linear streams, make requests to `lockup.getCliffTime(streamId)` and `lockup.getEndTime(streamId)` to read cliff
time and end time respectively.

### Dynamic streams

For Dynamic streams, you may be particularly interested in the unlock amount and time of the current segment.

```solidity
LockupDynamic.Segment[] memory segments = lockup.getSegments(streamId);

// Loop over the segments to find the next unlock time.
for (uint i; i < segments.length; ++i) {
  if (segments[i].timestamp > block.timestamp) {
    nextUnlockAmount = segments[i].amount;
    nextUnlockTime = segments[i].timestamp;
    break;
  }
}
```

### Tranched streams

For Tranched streams, you may be particularly interested in the unlock amount and time of the current tranche.

```solidity
LockupTranched.Tranche[] memory tranches = lockup.getTranches(streamId);

// Loop over the tranches to find the next unlock time.
for (uint i; i < tranches.length; ++i) {
  if (tranches[i].timestamp > block.timestamp) {
    nextUnlockAmount = tranches[i].amount;
    nextUnlockTime = tranches[i].timestamp;
    break;
  }
}
```

We hope you have found this guide helpful. If you have a use case that is not covered here, please reach out to us on
[Discord](https://discord.sablier.com), and we will assist you.
