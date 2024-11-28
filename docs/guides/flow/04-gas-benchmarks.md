---
label: "Gas benchmarks"
sidebar_position: 4
title: "Gas Benchmarks"
---

The gas usage of the Flow Protocol is not deterministic and varies by user. Calls to third-party contracts, such as
ERC-20 tokens, may use an arbitrary amount of gas. The values in the table below are rough estimations - you shouldn't
take them for granted.

:::note

Please refer to the [GitHub repository](https://github.com/sablier-labs/flow/tree/main/benchmark) to view the code that
generates these benchmarks.

:::

The following gas benchmarks are generated using a 6-decimal token.

| Function                      | Gas Usage |
| ----------------------------- | --------- |
| `adjustRatePerSecond`         | 44171     |
| `create`                      | 113681    |
| `deposit`                     | 32975     |
| `depositViaBroker`            | 22732     |
| `pause`                       | 7522      |
| `refund`                      | 11939     |
| `restart`                     | 7036      |
| `void (solvent stream)`       | 10060     |
| `void (insolvent stream)`     | 37460     |
| `withdraw (insolvent stream)` | 57688     |
| `withdraw (solvent stream)`   | 38156     |
| `withdrawMax`                 | 51988     |
