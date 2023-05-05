---
id: "segments"
sidebar_position: 3
title: "Segments"
---

# Segments
A Sablier can be made out of multiple segments, meaning separate stream partitions where in each partition the streaming rate differs. The protocol uses these segments to compose custom streaming curves, which allow us to offer exponential streams, cliff streams, etc. The Sablier protocol stores an array of segments, this enables the customized streaming curves.

A segment is a struct which has the [three following properties](https://github.com/sablierhq/v2-core/blob/83e8641e6a74b302dd2d23d58668f127d9d07269/src/types/DataTypes.sol#L120C17-L122):
- **Amount (stored in a `uint128`):** the amount of assets to be streamed in this segment, denoted in units of the asset's decimals.
- **Exponent (stored in a `UD2x18`):** the exponent of this segment, denoted as a fixed-point number.
- **Milestone (stored in a `uint40`):** the Unix timestamp indicating this segment's end.

Each segment has its own streaming function:
$$
f(x) = x^{exp} * csa + \Sigma(esa)
$$

Where:
- $x$ is the elapsed time divided by the total time in the current segment.
- $exp$ is the current segment exponent.
- $csa$ is the current segment amount.
- $\Sigma(esa)$ is the sum of all elapsed segments' amounts.

Any increasing monotonic function should be able to be represented using a Sablier streaming curve.

The sum of all segment amounts must, obviously, equal the deposit amount. There is also a limit to how many segments you can create, which is due to the block gas limit. If the limit didn't exist and someone created a stream with an excessively large number of segments, the transaction would simply revert as it wouldn't fit within a block.

Each segment is delimited by a milestone, meaning the timestamp at which the current segment comes to an end. The milestones must be sorted in ascending order. It's not possible for `segments[i-1].milestone` to be greater than `segments[i].milestone`, given we are only dealing with increasing monotonic functions.
