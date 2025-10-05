---
id: "tranches"
sidebar_position: 4
title: "Tranches"
---

# Tranches

## Definition

Analogous to the segments in Dynamic streams, a Tranched stream is composed of multiple tranches with different amounts
and durations. The protocol uses these tranches to enable traditional vesting curves with regular unlocks.

Technically, a tranche is a [struct](/reference/lockup/contracts/types/library.LockupTranched#tranche) with two fields:

| Field     | Type      | Description                                                                                 |
| :-------- | :-------- | :------------------------------------------------------------------------------------------ |
| Amount    | `uint128` | The amount of tokens to be unlocked in a tranche, denoted in units of the token's decimals. |
| Timestamp | `uint40`  | The Unix timestamp indicating the tranche's end.                                            |

The distribution function of a Lockup tranched stream:

$$
f(x) = \Sigma(eta)
$$

Where:

- $\Sigma(eta)$ is the sum of all vested tranches' amounts.

## Requirements

- The sum of all tranche amounts must equal the deposit amount.
- The block gas limit enforces a limit to how many tranches there can be in a stream.
  - If someone creates a stream with an excessively large number of tranches, the transaction would revert as it
    wouldn't fit within a block. You can fetch the limit using
    [MAX_TRANCHE_COUNT](/reference/lockup/contracts/contract.SablierLockup#max_count). Alternatively, you can find the
    limit for each chain [here](https://github.com/sablier-labs/lockup/blob/main/script/Base.s.sol#L90-L131).
- The timestamps must be sorted in ascending order. It's not possible for the $(i-1)^{th}$ timestamp to be greater than
  $i^{th}$ timestamp (given that we're dealing with an increasing monotonic function).
