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

| Function                 | Config                                       | Gas Usage |
| ------------------------ | -------------------------------------------- | --------- |
| `burn`                   | N/A                                          | 16,141    |
| `cancel`                 | N/A                                          | 65,381    |
| `renounce`               | N/A                                          | 27,721    |
| `createWithDurationsLL`  | broker = 0 & cliff = 0                       | 122,287   |
| `createWithDurationsLL`  | broker > 0 & cliff = 0                       | 138,649   |
| `createWithDurationsLL`  | broker = 0 & cliff > 0                       | 164,278   |
| `createWithDurationsLL`  | broker > 0 & cliff > 0                       | 169,335   |
| `createWithTimestampsLL` | broker = 0 & cliff = 0                       | 120,038   |
| `createWithTimestampsLL` | broker > 0 & cliff = 0                       | 125,100   |
| `createWithTimestampsLL` | broker = 0 & cliff > 0                       | 164,614   |
| `createWithTimestampsLL` | broker > 0 & cliff > 0                       | 169,682   |
| `withdraw`               | endTime < blockTime & msgSender = recipient  | 33,179    |
| `withdraw`               | endTime > blockTime & msgSender = recipient  | 23,303    |
| `withdraw`               | endTime < blockTime & msgSender != recipient | 29,561    |
| `withdraw`               | endTime > blockTime & msgSender != recipient | 22,815    |

### Dynamic Stream

| Function                 | Segments | Config                                       | Gas Usage |
| ------------------------ | -------- | -------------------------------------------- | --------- |
| `burn`                   | N/A      | N/A                                          | 16,141    |
| `cancel`                 | N/A      | N/A                                          | 65,381    |
| `renounce`               | N/A      | N/A                                          | 27,721    |
| `createWithDurationsLD`  | 2        | broker = 0                                   | 200,461   |
| `createWithDurationsLD`  | 2        | broker > 0                                   | 216,788   |
| `createWithTimestampsLD` | 2        | broker = 0                                   | 192,627   |
| `createWithTimestampsLD` | 2        | broker > 0                                   | 197,652   |
| `withdraw`               | 2        | endTime < blockTime & msgSender = recipient  | 23,885    |
| `withdraw`               | 2        | endTime > blockTime & msgSender = recipient  | 29,903    |
| `withdraw`               | 2        | endTime < blockTime & msgSender != recipient | 19,175    |
| `withdraw`               | 2        | endTime > blockTime & msgSender != recipient | 29,992    |
| `createWithDurationsLD`  | 10       | broker = 0                                   | 417,189   |
| `createWithDurationsLD`  | 10       | broker > 0                                   | 422,199   |
| `createWithTimestampsLD` | 10       | broker = 0                                   | 397,126   |
| `createWithTimestampsLD` | 10       | broker > 0                                   | 402,125   |
| `withdraw`               | 10       | endTime < blockTime & msgSender = recipient  | 24,167    |
| `withdraw`               | 10       | endTime > blockTime & msgSender = recipient  | 37,190    |
| `withdraw`               | 10       | endTime < blockTime & msgSender != recipient | 24,278    |
| `withdraw`               | 10       | endTime > blockTime & msgSender != recipient | 37,279    |
| `createWithDurationsLD`  | 100      | broker = 0                                   | 2,894,573 |
| `createWithDurationsLD`  | 100      | broker > 0                                   | 2,898,563 |
| `createWithTimestampsLD` | 100      | broker = 0                                   | 2,702,660 |
| `createWithTimestampsLD` | 100      | broker > 0                                   | 2,706,641 |
| `withdraw`               | 100      | endTime < blockTime & msgSender = recipient  | 81,920    |
| `withdraw`               | 100      | endTime > blockTime & msgSender = recipient  | 119,603   |
| `withdraw`               | 100      | endTime < blockTime & msgSender != recipient | 82,009    |
| `withdraw`               | 100      | endTime > blockTime & msgSender != recipient | 119,692   |

### Tranched Stream

| Function                 | Tranches | Config                                       | Gas Usage |
| ------------------------ | -------- | -------------------------------------------- | --------- |
| `burn`                   | N/A      | N/A                                          | 16,141    |
| `cancel`                 | N/A      | N/A                                          | 65,381    |
| `renounce`               | N/A      | N/A                                          | 27,721    |
| `createWithDurationsLT`  | 2        | broker = 0                                   | 199,665   |
| `createWithDurationsLT`  | 2        | broker > 0                                   | 215,994   |
| `createWithTimestampsLT` | 2        | broker = 0                                   | 191,964   |
| `createWithTimestampsLT` | 2        | broker > 0                                   | 196,988   |
| `withdraw`               | 2        | endTime < blockTime & msgSender = recipient  | 23,599    |
| `withdraw`               | 2        | endTime > blockTime & msgSender = recipient  | 18,503    |
| `withdraw`               | 2        | endTime < blockTime & msgSender != recipient | 18,889    |
| `withdraw`               | 2        | endTime > blockTime & msgSender != recipient | 18,592    |
| `createWithDurationsLT`  | 10       | broker = 0                                   | 409,394   |
| `createWithDurationsLT`  | 10       | broker > 0                                   | 414,411   |
| `createWithTimestampsLT` | 10       | broker = 0                                   | 392,026   |
| `createWithTimestampsLT` | 10       | broker > 0                                   | 397,045   |
| `withdraw`               | 10       | endTime < blockTime & msgSender = recipient  | 23,318    |
| `withdraw`               | 10       | endTime > blockTime & msgSender = recipient  | 25,403    |
| `withdraw`               | 10       | endTime < blockTime & msgSender != recipient | 23,427    |
| `withdraw`               | 10       | endTime > blockTime & msgSender != recipient | 25,492    |
| `createWithDurationsLT`  | 100      | broker = 0                                   | 2,804,166 |
| `createWithDurationsLT`  | 100      | broker > 0                                   | 2,808,652 |
| `createWithTimestampsLT` | 100      | broker = 0                                   | 2,645,177 |
| `createWithTimestampsLT` | 100      | broker > 0                                   | 2,649,659 |
| `withdraw`               | 100      | endTime < blockTime & msgSender = recipient  | 74,530    |
| `withdraw`               | 100      | endTime > blockTime & msgSender = recipient  | 103,255   |
| `withdraw`               | 100      | endTime < blockTime & msgSender != recipient | 74,619    |
| `withdraw`               | 100      | endTime > blockTime & msgSender != recipient | 103,344   |
