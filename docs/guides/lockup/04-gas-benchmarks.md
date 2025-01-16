---
label: "Gas benchmarks"
sidebar_position: 4
title: "Gas Benchmarks"
---

The gas usage of the Lockup protocol is not deterministic and varies by user. Calls to third-party contracts, such as
ERC-20 tokens, may use an arbitrary amount of gas. The values in the table below are rough estimations on Ethereum
mainnet - you shouldn't take them for granted. The gas usage may vary depending on the network.

:::note

Please refer to the [GitHub repository](https://github.com/sablier-labs/lockup/tree/release/benchmark) to view the code
that generates these benchmarks.

:::

### Batch Contract

| Function                 | Stream Type | Segments/Tranches | Batch Size | Gas Usage  |
| ------------------------ | ----------- | ----------------- | ---------- | ---------- |
| `createWithDurationsLL`  | Linear      | N/A               | 5          | 937,003    |
| `createWithTimestampsLL` | Linear      | N/A               | 5          | 898,916    |
| `createWithDurationsLD`  | Dynamic     | 24                | 5          | 4,123,217  |
| `createWithTimestampsLD` | Dynamic     | 24                | 5          | 3,895,052  |
| `createWithDurationsLT`  | Tranched    | 24                | 5          | 4,013,105  |
| `createWithTimestampsLT` | Tranched    | 24                | 5          | 3,822,707  |
| `createWithDurationsLL`  | Linear      | N/A               | 10         | 1,740,955  |
| `createWithTimestampsLL` | Linear      | N/A               | 10         | 1,747,416  |
| `createWithDurationsLD`  | Dynamic     | 24                | 10         | 8,202,890  |
| `createWithTimestampsLD` | Dynamic     | 24                | 10         | 7,741,699  |
| `createWithDurationsLT`  | Tranched    | 24                | 10         | 7,974,447  |
| `createWithTimestampsLT` | Tranched    | 24                | 10         | 7,597,402  |
| `createWithDurationsLL`  | Linear      | N/A               | 20         | 3,433,786  |
| `createWithTimestampsLL` | Linear      | N/A               | 20         | 3,447,467  |
| `createWithDurationsLD`  | Dynamic     | 24                | 20         | 16,380,960 |
| `createWithTimestampsLD` | Dynamic     | 24                | 20         | 15,440,827 |
| `createWithDurationsLT`  | Tranched    | 24                | 20         | 15,896,070 |
| `createWithTimestampsLT` | Tranched    | 24                | 20         | 15,152,551 |
| `createWithDurationsLL`  | Linear      | N/A               | 30         | 5,125,959  |
| `createWithTimestampsLL` | Linear      | N/A               | 30         | 5,155,292  |
| `createWithDurationsLD`  | Dynamic     | 24                | 30         | 24,603,376 |
| `createWithTimestampsLD` | Dynamic     | 24                | 30         | 23,157,026 |
| `createWithDurationsLT`  | Tranched    | 24                | 30         | 23,818,565 |
| `createWithTimestampsLT` | Tranched    | 24                | 30         | 22,725,003 |
| `createWithDurationsLL`  | Linear      | N/A               | 50         | 8,532,644  |
| `createWithTimestampsLL` | Linear      | N/A               | 50         | 8,582,221  |
| `createWithDurationsLD`  | Dynamic     | 12                | 50         | 24,275,049 |
| `createWithTimestampsLD` | Dynamic     | 12                | 50         | 23,058,857 |
| `createWithDurationsLT`  | Tranched    | 12                | 50         | 23,611,123 |
| `createWithTimestampsLT` | Tranched    | 12                | 50         | 22,718,936 |

### Linear Stream

| Function                                                      | Gas Usage |
| ------------------------------------------------------------- | --------- |
| `burn`                                                        | 16,141    |
| `cancel`                                                      | 65,381    |
| `renounce`                                                    | 27,721    |
| `createWithDurationsLL` (Broker fee set) (cliff not set)      | 138,649   |
| `createWithDurationsLL` (Broker fee not set) (cliff not set)  | 122,287   |
| `createWithDurationsLL` (Broker fee set) (cliff set)          | 169,335   |
| `createWithDurationsLL` (Broker fee not set) (cliff set)      | 164,278   |
| `createWithTimestampsLL` (Broker fee set) (cliff not set)     | 125,100   |
| `createWithTimestampsLL` (Broker fee not set) (cliff not set) | 120,038   |
| `createWithTimestampsLL` (Broker fee set) (cliff set)         | 169,682   |
| `createWithTimestampsLL` (Broker fee not set) (cliff set)     | 164,614   |
| `withdraw` (After End Time) (by Recipient)                    | 33,179    |
| `withdraw` (Before End Time) (by Recipient)                   | 23,303    |
| `withdraw` (After End Time) (by Anyone)                       | 29,561    |
| `withdraw` (Before End Time) (by Anyone)                      | 22,815    |

### Dynamic Stream

| Function                                                     | Gas Usage |
| ------------------------------------------------------------ | --------- |
| `burn`                                                       | 16,141    |
| `cancel`                                                     | 65,381    |
| `renounce`                                                   | 27,721    |
| `createWithDurationsLD` (2 segments) (Broker fee set)        | 216,788   |
| `createWithDurationsLD` (2 segments) (Broker fee not set)    | 200,461   |
| `createWithTimestampsLD` (2 segments) (Broker fee set)       | 197,652   |
| `createWithTimestampsLD` (2 segments) (Broker fee not set)   | 192,627   |
| `withdraw` (2 segments) (After End Time) (by Recipient)      | 23,885    |
| `withdraw` (2 segments) (Before End Time) (by Recipient)     | 29,903    |
| `withdraw` (2 segments) (After End Time) (by Anyone)         | 19,175    |
| `withdraw` (2 segments) (Before End Time) (by Anyone)        | 29,992    |
| `createWithDurationsLD` (10 segments) (Broker fee set)       | 422,199   |
| `createWithDurationsLD` (10 segments) (Broker fee not set)   | 417,189   |
| `createWithTimestampsLD` (10 segments) (Broker fee set)      | 402,125   |
| `createWithTimestampsLD` (10 segments) (Broker fee not set)  | 397,126   |
| `withdraw` (10 segments) (After End Time) (by Recipient)     | 24,167    |
| `withdraw` (10 segments) (Before End Time) (by Recipient)    | 37,190    |
| `withdraw` (10 segments) (After End Time) (by Anyone)        | 24,278    |
| `withdraw` (10 segments) (Before End Time) (by Anyone)       | 37,279    |
| `createWithDurationsLD` (100 segments) (Broker fee set)      | 2,898,563 |
| `createWithDurationsLD` (100 segments) (Broker fee not set)  | 2,894,573 |
| `createWithTimestampsLD` (100 segments) (Broker fee set)     | 2,706,641 |
| `createWithTimestampsLD` (100 segments) (Broker fee not set) | 2,702,660 |
| `withdraw` (100 segments) (After End Time) (by Recipient)    | 81,920    |
| `withdraw` (100 segments) (Before End Time) (by Recipient)   | 119,603   |
| `withdraw` (100 segments) (After End Time) (by Anyone)       | 82,009    |
| `withdraw` (100 segments) (Before End Time) (by Anyone)      | 119,692   |

### Tranched Stream

| Function                                                     | Gas Usage |
| ------------------------------------------------------------ | --------- |
| `burn`                                                       | 16,141    |
| `cancel`                                                     | 65,381    |
| `renounce`                                                   | 27,721    |
| `createWithDurationsLT` (2 tranches) (Broker fee set)        | 215,994   |
| `createWithDurationsLT` (2 tranches) (Broker fee not set)    | 199,665   |
| `createWithTimestampsLT` (2 tranches) (Broker fee set)       | 196,988   |
| `createWithTimestampsLT` (2 tranches) (Broker fee not set)   | 191,964   |
| `withdraw` (2 tranches) (After End Time) (by Recipient)      | 23,599    |
| `withdraw` (2 tranches) (Before End Time) (by Recipient)     | 18,503    |
| `withdraw` (2 tranches) (After End Time) (by Anyone)         | 18,889    |
| `withdraw` (2 tranches) (Before End Time) (by Anyone)        | 18,592    |
| `createWithDurationsLT` (10 tranches) (Broker fee set)       | 414,411   |
| `createWithDurationsLT` (10 tranches) (Broker fee not set)   | 409,394   |
| `createWithTimestampsLT` (10 tranches) (Broker fee set)      | 397,045   |
| `createWithTimestampsLT` (10 tranches) (Broker fee not set)  | 392,026   |
| `withdraw` (10 tranches) (After End Time) (by Recipient)     | 23,318    |
| `withdraw` (10 tranches) (Before End Time) (by Recipient)    | 25,403    |
| `withdraw` (10 tranches) (After End Time) (by Anyone)        | 23,427    |
| `withdraw` (10 tranches) (Before End Time) (by Anyone)       | 25,492    |
| `createWithDurationsLT` (100 tranches) (Broker fee set)      | 2,808,652 |
| `createWithDurationsLT` (100 tranches) (Broker fee not set)  | 2,804,166 |
| `createWithTimestampsLT` (100 tranches) (Broker fee set)     | 2,649,659 |
| `createWithTimestampsLT` (100 tranches) (Broker fee not set) | 2,645,177 |
| `withdraw` (100 tranches) (After End Time) (by Recipient)    | 74,530    |
| `withdraw` (100 tranches) (Before End Time) (by Recipient)   | 103,255   |
| `withdraw` (100 tranches) (After End Time) (by Anyone)       | 74,619    |
| `withdraw` (100 tranches) (Before End Time) (by Anyone)      | 103,344   |
