---
id: "tranches"
sidebar_position: 4
title: "Tranches"
---

# Tranches

## Definition

A Lockup Tranched stream can be composed of multiple tranches, which are separate partitions with different amounts and
durations. The protocol uses these tranches to enable traditional vesting curve with regular unlocks of amounts.

A tranche is a [struct](/contracts/v2/reference/core/types/library.LockupTranched#tranche) with two fields:

| Field     | Type      | Description                                                                                 |
| :-------- | :-------- | :------------------------------------------------------------------------------------------ |
| Amount    | `uint128` | The amount of assets to be unlocked in a tranche, denoted in units of the asset's decimals. |
| Timestamp | `uint40`  | The Unix timestamp indicating the tranche's end.                                            |

The streaming function of a Lockup tranched stream:

$$
f(x) = \Sigma(eta)
$$

Where:

- $\Sigma(eta)$ is the sum of all vested tranches' amounts.

## Requirements

- The sum of all tranche amounts must equal the deposit amount.
- There is a limit to how many tranches there can be in a stream as enforced by the the block gas limit. If someone
  creates a stream with an excessively large number of tranches, the transaction would revert as it wouldn't fit within
  a block. You can fetch the limit using
  [MAX_TRANCHE_COUNT](/contracts/v2/reference/core/contract.SablierV2LockupTranched#max_tranche_count). Alternatively,
  you can find the limit for each chain
  [here](https://github.com/sablier-labs/v2-core/blob/main/script/Base.s.sol#L90-L131).
- The timestamps must be sorted in ascending order. It's not possible for the $(i-1)^{th}$ timestamp to be greater than
  $i^{th}$ timestamp (assuming we are dealing with increasing monotonic functions).
