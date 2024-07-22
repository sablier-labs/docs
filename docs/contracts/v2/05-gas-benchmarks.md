---
label: "Gas benchmarks"
sidebar_position: 5
title: "Gas Benchmarks"
---

The gas usage of the Sablier Protocol is not deterministic and varies by user. Calls to third-party contracts, such as
ERC-20 tokens, may use an arbitrary amount of gas. The values in the table below are rough estimations - you shouldn't
take them for granted.

## V2 Core

:::note

Please refer to the
[GitHub repository](https://github.com/sablier-labs/v2-core/tree/fe60d98d50418189539f14d3072fe987550cdaad/benchmark) to
view the code that generates these benchmarks.

:::

### Lockup Linear

| Function                                                    | Gas Usage |
| ----------------------------------------------------------- | --------- |
| `burn`                                                      | 15,694     |
| `cancel`                                                    | 56,829     |
| `renounce`                                                  | 19,381     |
| `createWithDurations` (Broker fee set) (cliff not set)      | 129,276    |
| `createWithDurations` (Broker fee not set) (cliff not set)  | 113,680    |
| `createWithDurations` (Broker fee set) (cliff set)          | 138,071    |
| `createWithDurations` (Broker fee not set) (cliff set)      | 133,273    |
| `createWithTimestamps` (Broker fee set) (cliff not set)     | 115,334    |
| `createWithTimestamps` (Broker fee not set) (cliff not set) | 110,530    |
| `createWithTimestamps` (Broker fee set) (cliff set)         | 137,629    |
| `createWithTimestamps` (Broker fee not set) (cliff set)     | 132,827    |
| `withdraw` (After End Time) (by Recipient)                  | 29,701     |
| `withdraw` (Before End Time) (by Recipient)                 | 19,104     |
| `withdraw` (After End Time) (by Anyone)                     | 24,799     |
| `withdraw` (Before End Time) (by Anyone)                    | 19,002     |

### Lockup Dynamic

| Function                                                   | Gas Usage |
| ---------------------------------------------------------- | --------- |
| `burn`                                                     | 15,716     |
| `cancel`                                                   | 74,341     |
| `renounce`                                                 | 39,007     |
| `createWithDurations` (2 segments) (Broker fee set)        | 200,602    |
| `createWithDurations` (2 segments) (Broker fee not set)    | 185,037    |
| `createWithTimestamps` (2 segments) (Broker fee set)       | 184,780    |
| `createWithTimestamps` (2 segments) (Broker fee not set)   | 180,015    |
| `withdraw` (2 segments) (After End Time) (by Recipient)    | 19,108     |
| `withdraw` (2 segments) (Before End Time) (by Recipient)   | 27,554     |
| `withdraw` (2 segments) (After End Time) (by Anyone)       | 14,239     |
| `withdraw` (2 segments) (Before End Time) (by Anyone)      | 27,485     |
| `createWithDurations` (10 segments) (Broker fee set)       | 395,084    |
| `createWithDurations` (10 segments) (Broker fee not set)   | 390,326    |
| `createWithTimestamps` (10 segments) (Broker fee set)      | 385,125    |
| `createWithTimestamps` (10 segments) (Broker fee not set)  | 380,375    |
| `withdraw` (10 segments) (After End Time) (by Recipient)   | 14,295     |
| `withdraw` (10 segments) (Before End Time) (by Recipient)  | 32,545     |
| `withdraw` (10 segments) (After End Time) (by Anyone)      | 14,246     |
| `withdraw` (10 segments) (Before End Time) (by Anyone)     | 32,476     |
| `createWithDurations` (100 segments) (Broker fee set)      | 2,740,781   |
| `createWithDurations` (100 segments) (Broker fee not set)  | 2,736,987   |
| `createWithTimestamps` (100 segments) (Broker fee set)     | 2,642,946   |
| `createWithTimestamps` (100 segments) (Broker fee not set) | 2,639,185   |
| `withdraw` (100 segments) (After End Time) (by Recipient)  | 14,295     |
| `withdraw` (100 segments) (Before End Time) (by Recipient) | 88,968     |
| `withdraw` (100 segments) (After End Time) (by Anyone)     | 14,226     |
| `withdraw` (100 segments) (Before End Time) (by Anyone)    | 88,899     |

### Lockup Tranched

| Function                                                   | Gas Usage |
| ---------------------------------------------------------- | --------- |
| `burn`                                                     | 15,738     |
| `cancel`                                                   | 63,994     |
| `renounce`                                                 | 26,501     |
| `createWithDurations` (2 tranches) (Broker fee set)        | 199,536    |
| `createWithDurations` (2 tranches) (Broker fee not set)    | 183,969    |
| `createWithTimestamps` (2 tranches) (Broker fee set)       | 189,410    |
| `createWithTimestamps` (2 tranches) (Broker fee not set)   | 183,945    |
| `withdraw` (2 tranches) (After End Time) (by Recipient)    | 20,100     |
| `withdraw` (2 tranches) (Before End Time) (by Recipient)   | 14,797     |
| `withdraw` (2 tranches) (After End Time) (by Anyone)       | 15,199     |
| `withdraw` (2 tranches) (Before End Time) (by Anyone)      | 14,695     |
| `createWithDurations` (10 tranches) (Broker fee set)       | 388,757    |
| `createWithDurations` (10 tranches) (Broker fee not set)   | 383,998    |
| `createWithTimestamps` (10 tranches) (Broker fee set)      | 397,102    |
| `createWithTimestamps` (10 tranches) (Broker fee not set)  | 391,750    |
| `withdraw` (10 tranches) (After End Time) (by Recipient)   | 17,855     |
| `withdraw` (10 tranches) (Before End Time) (by Recipient)  | 19,616     |
| `withdraw` (10 tranches) (After End Time) (by Anyone)      | 17,760     |
| `withdraw` (10 tranches) (Before End Time) (by Anyone)     | 19,514     |
| `createWithDurations` (100 tranches) (Broker fee set)      | 2,672,918   |
| `createWithDurations` (100 tranches) (Broker fee not set)  | 2,668,643   |
| `createWithTimestamps` (100 tranches) (Broker fee set)     | 2,738,297   |
| `createWithTimestamps` (100 tranches) (Broker fee not set) | 2,734,635   |
| `withdraw` (100 tranches) (After End Time) (by Recipient)  | 46,746     |
| `withdraw` (100 tranches) (Before End Time) (by Recipient) | 73,989     |
| `withdraw` (100 tranches) (After End Time) (by Anyone)     | 46,644     |
| `withdraw` (100 tranches) (Before End Time) (by Anyone)    | 73,887     |

## V2 Periphery

:::note

Please refer to the
[GitHub repository](https://github.com/sablier-labs/v2-periphery/tree/f00b8a515da8020f4b863eef5a25a456ecfe9c1e/benchmark)
to view the code that generates these benchmarks.

:::

### Batch Lockup

| Function                 | Lockup Type     | Segments/Tranches | Batch Size | Gas Usage |
| ------------------------ | --------------- | ----------------- | ---------- | --------- |
| `createWithDurationsLL`  | Lockup Linear   | N/A               | 5          | 771,013    |
| `createWithTimestampsLL` | Lockup Linear   | N/A               | 5          | 732,772    |
| `createWithDurationsLD`  | Lockup Dynamic  | 24                | 5          | 3,951,599   |
| `createWithTimestampsLD` | Lockup Dynamic  | 24                | 5          | 3,815,274   |
| `createWithDurationsLT`  | Lockup Tranched | 24                | 5          | 3,862,651   |
| `createWithTimestampsLT` | Lockup Tranched | 24                | 5          | 3,744,523   |
| `createWithDurationsLL`  | Lockup Linear   | N/A               | 10         | 1,417,180   |
| `createWithTimestampsLL` | Lockup Linear   | N/A               | 10         | 1,414,247   |
| `createWithDurationsLD`  | Lockup Dynamic  | 24                | 10         | 7,819,165   |
| `createWithTimestampsLD` | Lockup Dynamic  | 24                | 10         | 7,585,616   |
| `createWithDurationsLT`  | Lockup Tranched | 24                | 10         | 7,632,114   |
| `createWithTimestampsLT` | Lockup Tranched | 24                | 10         | 7,444,115   |
| `createWithDurationsLL`  | Lockup Linear   | N/A               | 20         | 2,783,510   |
| `createWithTimestampsLL` | Lockup Linear   | N/A               | 20         | 2,779,081   |
| `createWithDurationsLD`  | Lockup Dynamic  | 24                | 20         | 15,617,207  |
| `createWithTimestampsLD` | Lockup Dynamic  | 24                | 20         | 15,131,248  |
| `createWithDurationsLT`  | Lockup Tranched | 24                | 20         | 15,211,892  |
| `createWithTimestampsLT` | Lockup Tranched | 24                | 20         | 14,846,363  |
| `createWithDurationsLL`  | Lockup Linear   | N/A               | 30         | 4,143,337   |
| `createWithTimestampsLL` | Lockup Linear   | N/A               | 30         | 4,148,585   |
| `createWithDurationsLD`  | Lockup Dynamic  | 24                | 30         | 23,460,912  |
| `createWithTimestampsLD` | Lockup Dynamic  | 24                | 30         | 22,697,560  |
| `createWithDurationsLT`  | Lockup Tranched | 24                | 30         | 22,794,686  |
| `createWithTimestampsLT` | Lockup Tranched | 24                | 30         | 22,267,335  |
| `createWithDurationsLL`  | Lockup Linear   | N/A               | 50         | 6,871,104   |
| `createWithTimestampsLL` | Lockup Linear   | N/A               | 50         | 6,893,797   |
| `createWithDurationsLD`  | Lockup Dynamic  | 12                | 50         | 22,990,726  |
| `createWithTimestampsLD` | Lockup Dynamic  | 12                | 50         | 22,355,943  |
| `createWithDurationsLT`  | Lockup Tranched | 12                | 50         | 22,413,554  |
| `createWithTimestampsLT` | Lockup Tranched | 12                | 50         | 22,006,169  |
