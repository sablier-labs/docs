---
label: "Gas benchmarks"
sidebar_position: 4
title: "Gas Benchmarks"
---

The gas usage of the Flow protocol is not deterministic and varies by user. Calls to third-party contracts, such as
ERC-20 tokens, may use an arbitrary amount of gas. The values in the table below are rough estimations on Ethereum
mainnet - you shouldn't take them for granted. The gas usage may vary depending on the network.

:::note

Please refer to the [GitHub repository](https://github.com/sablier-labs/flow/tree/release/benchmark) to view the code
that generates these benchmarks.

:::

The following gas benchmarks are generated using a 6-decimal token.

| Function                      | Gas Usage |
| ----------------------------- | --------- |
| `adjustRatePerSecond`         | 44,171    |
| `create`                      | 113,681   |
| `deposit`                     | 32,975    |
| `depositViaBroker`            | 22,732    |
| `pause`                       | 7,522     |
| `refund`                      | 11,939    |
| `restart`                     | 7,036     |
| `void (solvent stream)`       | 10,060    |
| `void (insolvent stream)`     | 37,460    |
| `withdraw (insolvent stream)` | 57,688    |
| `withdraw (solvent stream)`   | 38,156    |
| `withdrawMax`                 | 51,988    |
