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
| `burn`                                                      | 15694     |
| `cancel`                                                    | 56829     |
| `renounce`                                                  | 19381     |
| `createWithDurations` (Broker fee set) (cliff not set)      | 129276    |
| `createWithDurations` (Broker fee not set) (cliff not set)  | 113680    |
| `createWithDurations` (Broker fee set) (cliff set)          | 138071    |
| `createWithDurations` (Broker fee not set) (cliff set)      | 133273    |
| `createWithTimestamps` (Broker fee set) (cliff not set)     | 115334    |
| `createWithTimestamps` (Broker fee not set) (cliff not set) | 110530    |
| `createWithTimestamps` (Broker fee set) (cliff set)         | 137629    |
| `createWithTimestamps` (Broker fee not set) (cliff set)     | 132827    |
| `withdraw` (After End Time) (by Recipient)                  | 29701     |
| `withdraw` (Before End Time) (by Recipient)                 | 19104     |
| `withdraw` (After End Time) (by Anyone)                     | 24799     |
| `withdraw` (Before End Time) (by Anyone)                    | 19002     |

### Lockup Dynamic

| Function                                                   | Gas Usage |
| ---------------------------------------------------------- | --------- |
| `burn`                                                     | 15716     |
| `cancel`                                                   | 74341     |
| `renounce`                                                 | 39007     |
| `createWithDurations` (2 segments) (Broker fee set)        | 200602    |
| `createWithDurations` (2 segments) (Broker fee not set)    | 185037    |
| `createWithTimestamps` (2 segments) (Broker fee set)       | 184780    |
| `createWithTimestamps` (2 segments) (Broker fee not set)   | 180015    |
| `withdraw` (2 segments) (After End Time) (by Recipient)    | 19108     |
| `withdraw` (2 segments) (Before End Time) (by Recipient)   | 27554     |
| `withdraw` (2 segments) (After End Time) (by Anyone)       | 14239     |
| `withdraw` (2 segments) (Before End Time) (by Anyone)      | 27485     |
| `createWithDurations` (10 segments) (Broker fee set)       | 395084    |
| `createWithDurations` (10 segments) (Broker fee not set)   | 390326    |
| `createWithTimestamps` (10 segments) (Broker fee set)      | 385125    |
| `createWithTimestamps` (10 segments) (Broker fee not set)  | 380375    |
| `withdraw` (10 segments) (After End Time) (by Recipient)   | 14295     |
| `withdraw` (10 segments) (Before End Time) (by Recipient)  | 32545     |
| `withdraw` (10 segments) (After End Time) (by Anyone)      | 14246     |
| `withdraw` (10 segments) (Before End Time) (by Anyone)     | 32476     |
| `createWithDurations` (100 segments) (Broker fee set)      | 2740781   |
| `createWithDurations` (100 segments) (Broker fee not set)  | 2736987   |
| `createWithTimestamps` (100 segments) (Broker fee set)     | 2642946   |
| `createWithTimestamps` (100 segments) (Broker fee not set) | 2639185   |
| `withdraw` (100 segments) (After End Time) (by Recipient)  | 14295     |
| `withdraw` (100 segments) (Before End Time) (by Recipient) | 88968     |
| `withdraw` (100 segments) (After End Time) (by Anyone)     | 14226     |
| `withdraw` (100 segments) (Before End Time) (by Anyone)    | 88899     |

### Lockup Tranched

| Function                                                   | Gas Usage |
| ---------------------------------------------------------- | --------- |
| `burn`                                                     | 15738     |
| `cancel`                                                   | 63994     |
| `renounce`                                                 | 26501     |
| `createWithDurations` (2 tranches) (Broker fee set)        | 199536    |
| `createWithDurations` (2 tranches) (Broker fee not set)    | 183969    |
| `createWithTimestamps` (2 tranches) (Broker fee set)       | 189410    |
| `createWithTimestamps` (2 tranches) (Broker fee not set)   | 183945    |
| `withdraw` (2 tranches) (After End Time) (by Recipient)    | 20100     |
| `withdraw` (2 tranches) (Before End Time) (by Recipient)   | 14797     |
| `withdraw` (2 tranches) (After End Time) (by Anyone)       | 15199     |
| `withdraw` (2 tranches) (Before End Time) (by Anyone)      | 14695     |
| `createWithDurations` (10 tranches) (Broker fee set)       | 388757    |
| `createWithDurations` (10 tranches) (Broker fee not set)   | 383998    |
| `createWithTimestamps` (10 tranches) (Broker fee set)      | 397102    |
| `createWithTimestamps` (10 tranches) (Broker fee not set)  | 391750    |
| `withdraw` (10 tranches) (After End Time) (by Recipient)   | 17855     |
| `withdraw` (10 tranches) (Before End Time) (by Recipient)  | 19616     |
| `withdraw` (10 tranches) (After End Time) (by Anyone)      | 17760     |
| `withdraw` (10 tranches) (Before End Time) (by Anyone)     | 19514     |
| `createWithDurations` (100 tranches) (Broker fee set)      | 2672918   |
| `createWithDurations` (100 tranches) (Broker fee not set)  | 2668643   |
| `createWithTimestamps` (100 tranches) (Broker fee set)     | 2738297   |
| `createWithTimestamps` (100 tranches) (Broker fee not set) | 2734635   |
| `withdraw` (100 tranches) (After End Time) (by Recipient)  | 46746     |
| `withdraw` (100 tranches) (Before End Time) (by Recipient) | 73989     |
| `withdraw` (100 tranches) (After End Time) (by Anyone)     | 46644     |
| `withdraw` (100 tranches) (Before End Time) (by Anyone)    | 73887     |

## V2 Periphery

:::note

Please refer to the
[GitHub repository](https://github.com/sablier-labs/v2-periphery/tree/f00b8a515da8020f4b863eef5a25a456ecfe9c1e/benchmark)
to view the code that generates these benchmarks.

:::

### Batch Lockup

| Function                 | Lockup Type     | Segments/Tranches | Batch Size | Gas Usage |
| ------------------------ | --------------- | ----------------- | ---------- | --------- |
| `createWithDurationsLL`  | Lockup Linear   | N/A               | 5          | 771013    |
| `createWithTimestampsLL` | Lockup Linear   | N/A               | 5          | 732772    |
| `createWithDurationsLD`  | Lockup Dynamic  | 24                | 5          | 3951599   |
| `createWithTimestampsLD` | Lockup Dynamic  | 24                | 5          | 3815274   |
| `createWithDurationsLT`  | Lockup Tranched | 24                | 5          | 3862651   |
| `createWithTimestampsLT` | Lockup Tranched | 24                | 5          | 3744523   |
| `createWithDurationsLL`  | Lockup Linear   | N/A               | 10         | 1417180   |
| `createWithTimestampsLL` | Lockup Linear   | N/A               | 10         | 1414247   |
| `createWithDurationsLD`  | Lockup Dynamic  | 24                | 10         | 7819165   |
| `createWithTimestampsLD` | Lockup Dynamic  | 24                | 10         | 7585616   |
| `createWithDurationsLT`  | Lockup Tranched | 24                | 10         | 7632114   |
| `createWithTimestampsLT` | Lockup Tranched | 24                | 10         | 7444115   |
| `createWithDurationsLL`  | Lockup Linear   | N/A               | 20         | 2783510   |
| `createWithTimestampsLL` | Lockup Linear   | N/A               | 20         | 2779081   |
| `createWithDurationsLD`  | Lockup Dynamic  | 24                | 20         | 15617207  |
| `createWithTimestampsLD` | Lockup Dynamic  | 24                | 20         | 15131248  |
| `createWithDurationsLT`  | Lockup Tranched | 24                | 20         | 15211892  |
| `createWithTimestampsLT` | Lockup Tranched | 24                | 20         | 14846363  |
| `createWithDurationsLL`  | Lockup Linear   | N/A               | 30         | 4143337   |
| `createWithTimestampsLL` | Lockup Linear   | N/A               | 30         | 4148585   |
| `createWithDurationsLD`  | Lockup Dynamic  | 24                | 30         | 23460912  |
| `createWithTimestampsLD` | Lockup Dynamic  | 24                | 30         | 22697560  |
| `createWithDurationsLT`  | Lockup Tranched | 24                | 30         | 22794686  |
| `createWithTimestampsLT` | Lockup Tranched | 24                | 30         | 22267335  |
| `createWithDurationsLL`  | Lockup Linear   | N/A               | 50         | 6871104   |
| `createWithTimestampsLL` | Lockup Linear   | N/A               | 50         | 6893797   |
| `createWithDurationsLD`  | Lockup Dynamic  | 12                | 50         | 22990726  |
| `createWithTimestampsLD` | Lockup Dynamic  | 12                | 50         | 22355943  |
| `createWithDurationsLT`  | Lockup Tranched | 12                | 50         | 22413554  |
| `createWithTimestampsLT` | Lockup Tranched | 12                | 50         | 22006169  |
