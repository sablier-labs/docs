---
id: "segments"
sidebar_position: 3
title: "Segments"
---

# Segments

## Definition

A Lockup Dynamic stream can be composed out of multiple segments, which are separate partitions with different streaming
amount and rates. The protocol uses these segments to enable custom streaming curves, which power exponential streams,
cliff streams, etc.

A segment is a [struct](/contracts/v2/reference/core/types/library.LockupDynamic.md#segment) with three fields:

| Field     | Type      | Description                                                                                    |
| :-------- | :-------- | :--------------------------------------------------------------------------------------------- |
| Amount    | `uint128` | The amount of assets to be streamed in this segment, denoted in units of the asset's decimals. |
| Exponent  | `UD2x18`  | The exponent of this segment, denoted as a fixed-point number.                                 |
| Milestone | `uint40`  | The Unix timestamp indicating this segment's end.                                              |

Each segment has its own streaming function:

$$
f(x) = x^{exp} * csa + \Sigma(esa)
$$

Where:

- $x$ is the elapsed time divided by the total time in the current segment.
- $exp$ is the current segment exponent.
- $csa$ is the current segment amount.
- $\Sigma(esa)$ is the sum of all elapsed segments' amounts.

:::info

Segments can be used to represent any monotonic increasing function.

:::

:::caution

Because x is a percentage, the streaming rate is inversely proportional to the exponent. For example, if the exponent is
0.5, the rate is quadratically faster compared to the baseline when the exponent is 1. Conversely, if exponent is 2, the
rate is quadratically faster compared to baseline.

:::

## Requirements

- The sum of all segment amounts must equal the deposit amount.
- There is a limit to how many segments there can be in a stream, which is due to the block gas limit. If the limit
  didn't exist and someone created a stream with an excessively large number of segments, the transaction would simply
  revert as it wouldn't fit within a block.
- The milestones must be sorted in ascending order. It's not possible for the `i-1`th milestone to be greater than `i`th
  milestone (given we are dealing with increasing monotonic functions).
