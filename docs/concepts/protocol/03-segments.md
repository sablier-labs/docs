---
id: "segments"
sidebar_position: 3
title: "Segments"
---

# Segments

## Definition

A Lockup Dynamic stream can be composed out of multiple segments, meaning separate partitions in which the streaming
amount and rate differ. The protocol uses these segments to enable custom streaming curves, which power exponential
streams, cliff streams, etc.

A segment is a struct that with the following
[three properties](../../contracts/v2/reference/core/types/library.LockupDynamic.md):

- **Amount (a `uint128`):** the amount of assets to be streamed in this segment, denoted in units of the asset's
  decimals.
- **Exponent (a `UD2x18`):** the exponent of this segment, denoted as a fixed-point number.
- **Milestone (a `uint40`):** the Unix timestamp indicating this segment's end.

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

## Requirements

- The sum of all segment amounts must equal the deposit amount.
- There is a limit to how many segments there can be in a stream, which is due to the block gas limit. If the limit
  didn't exist and someone created a stream with an excessively large number of segments, the transaction would simply
  revert as it wouldn't fit within a block.
- The milestones must be sorted in ascending order. It's not possible for the `i-1`th milestone to be greater than `i`th
  milestone (given we are dealing with increasing monotonic functions).
