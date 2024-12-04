---
id: "vesting-data"
sidebar_position: 8
title: "Vesting data"
---

This guide explains how you can pull vesting data for a stream. This data can be useful in a variety of use cases
including but not limited to staking, explorers, and dashboards:

1. **Staking**: Staking of Sablier streams require access to amount of tokens that are still in the stream. You do not
   want to distribute rewards for tokens that have already been vested and withdrawn by the user.
2. **Explorers (Etherscan, Coingecko)**: One major feature of the explorers is to show the amount of circulating supply
   of a token accurately. When tokens are vesting through Sablier streams, you may want to exclude the amount of
   unvested tokens from the circulating supply. This is helpful to accurately calculate the marketcap which depends on
   the amount of liquid tokens.
3. **Dashboards (Nansen, Tokenomist, Dune)**: Crypto dashboards are used by investors and traders to make informed
   decisions. When tokens are vesting through Sablier streams, you may want to show the amount of liquid tokens and the
   amount of illiquid (unvested) tokens. This is helpful to understand the token distribution and the team's commitment
   to the long-term success of the project.

## Amount in stream

Amount in stream is the amount of tokens are available in the stream. It is the sum of locked tokens and vested tokens
that are not yet withdrawn. It is particularly useful for applications like staking. The following formula can be used
for both cancelable and non-cancelable streams:

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

If you are building a Staking contract for Sablier stream, you can follow the [staking guide](./staking/setup).

:::

## Locked amount

Locked amount is the amount of tokens that are locked in the stream and can be considered as illiquid. This can be
particularly useful during the calculation of circulating supply.

```solidity
uint256 lockedAmount = lockup.getDepositedAmount(streamId)
                     - lockup.streamedAmountOf(streamId)
                     - sablierLockup.getRefundedAmount(streamId);
```

For non-cancelable stream, a more efficient way to calculate locked amount is:

```solidity
uint256 lockedAmount = lockup.getDepositedAmount(streamId) - lockup.streamedAmountOf(streamId);
```

:::info

While calculating the circulating supply, you can subtract locked amount from your calculations.

:::

## Unlocked amount

As opposed to locked amount, unlocked amount is the amount of tokens that are no longer locked and can be considered as
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

This may be useful for use cases in which you want to reward diamond hands i.e. users who have not withdrawn their share
of airdrops.

## Cancel on first withdraw

If you want to cancel streams as soon as the user withdraws their tokens, you can track the withdrawn amount and check
if its value is greater than 0. If it is, you can cancel the stream.

```solidity
if (lockup.getWithdrawnAmount(streamId) > 0) {
  lockup.cancel(streamId);
}
```

## Unlock events

This section is useful if you are building a token unlock dashboard where you want to display the future unlock events.

To calculate the time at which a stream will be fully unlocked, you can use the following formula:

```solidity
uint256 unlockTime = lockup.getEndTime(streamId);
```

### Linear streams

For lockup linear stream, you can make a request to `lockup.getTimestamps(streamId)` and then calculate cliff time and
end time as `timestamps.cliff` and `timestamps.end` respectively.

### Dynamic streams

For lockup dynamic streams, you may be particularly interested in the unlock amount and time of the current segment.

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

For lockup tranched streams, you may be particularly interested in the unlock amount and time of the current tranche.

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

I hope this guide was helpful to you. If you have a use case that is not covered here, please reach out to us on
[Discord](https://discord.sablier.com) and we will be happy to help you with your requirements.
