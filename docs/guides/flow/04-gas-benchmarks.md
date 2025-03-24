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

| Function              | Stream Liquidity | Gas Usage |
| --------------------- | ---------------- | --------- |
| `adjustRatePerSecond` | N/A              | 44,171    |
| `create`              | N/A              | 113,681   |
| `deposit`             | N/A              | 32,975    |
| `depositViaBroker`    | N/A              | 22,732    |
| `pause`               | N/A              | 7,522     |
| `refund`              | N/A              | 11,939    |
| `restart`             | N/A              | 7,036     |
| `void`                | Insolvent        | 37,460    |
| `void`                | Solvent          | 10,060    |
| `withdraw`            | Insolvent        | 57,688    |
| `withdraw`            | Solvent          | 38,156    |
| `withdrawMax`         | N/A              | 51,988    |
