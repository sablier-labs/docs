# MerkleLL

[Git Source](https://github.com/sablier-labs/airdrops/blob/f9a358c0a5bccfec77601d4490ef9117e0488068/src/types/DataTypes.sol)

## Structs

### Schedule

Struct encapsulating the start time, cliff duration and the end duration used to construct the time variables in
`Lockup.CreateWithTimestampsLL`.

_A start time value of zero will be considered as `block.timestamp`._

```solidity
struct Schedule {
    uint40 startTime;
    UD2x18 startPercentage;
    uint40 cliffDuration;
    UD2x18 cliffPercentage;
    uint40 totalDuration;
}
```

**Properties**

| Name              | Type     | Description                                      |
| ----------------- | -------- | ------------------------------------------------ |
| `startTime`       | `uint40` | The start time of the stream.                    |
| `startPercentage` | `UD2x18` | The percentage to be unlocked at the start time. |
| `cliffDuration`   | `uint40` | The duration of the cliff.                       |
| `cliffPercentage` | `UD2x18` | The percentage to be unlocked at the cliff time. |
| `totalDuration`   | `uint40` | The total duration of the stream.                |
