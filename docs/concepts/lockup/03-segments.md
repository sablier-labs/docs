---
id: "segments"
sidebar_position: 3
title: "Segments"
---

# Segments

## Definition

A Dynamic stream is composed of multiple segments, which are separate partitions with different streaming amount and
rates. The protocol uses these segments to enable custom streaming curves, which power exponential streams, cliff
streams, etc.

Technically, a segment is a [struct](/reference/lockup/contracts/types/library.LockupDynamic#segment) with three fields:

| Field     | Type      | Description                                                                                    |
| :-------- | :-------- | :--------------------------------------------------------------------------------------------- |
| Amount    | `uint128` | The amount of tokens to be streamed in this segment, denoted in units of the token's decimals. |
| Exponent  | `UD2x18`  | The exponent of this segment, denoted as a fixed-point number.                                 |
| Timestamp | `uint40`  | The Unix timestamp indicating this segment's end.                                              |

Each segment has its own streaming function:

$$
f(x) = x^{exp} * csa
$$

Therefore, the distribution function of a dynamic stream becomes:

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

Because x is a percentage, the payment rate is inversely proportional to the exponent. For example, if the exponent is
0.5, the rate is quadratically faster compared to the baseline when the exponent is 1.

Conversely, if the exponent is 2, the rate is quadratically slower compared to baseline.

:::

## Requirements

- The sum of all segment amounts must equal the deposit amount.
- There is a limit to how many segments there can be in a stream as enforced by the block gas limit.
  - If someone creates a stream with an excessively large number of segments, the transaction would revert as it
    wouldn't fit within a block. You can fetch the limit using you can find the limit for each chain
    [here](https://github.com/sablier-labs/lockup/blob/main/script/Base.s.sol#L90-L131).
- The timestamps must be sorted in ascending order. It's not possible for the $(i-1)^{th}$ timestamp to be greater than
  $i^{th}$ timestamp (given that we're dealing with an increasing monotonic function).
