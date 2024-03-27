# MerkleLockupLT

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/73831c7dcaa5ec4e2fed6caa0f8040154e53030a/src/types/DataTypes.sol)

## Structs

### TrancheWithPercentage

Struct encapsulating the amount percentage and the tranche duration of the stream.

_Each recipient may have a different amount allocated, this struct stores the percentage of the amount designated for
each duration unlock. We use a 18 decimals format to represent percentages: 100% = 1e18._

```solidity
struct TrancheWithPercentage {
    UD2x18 unlockPercentage;
    uint40 duration;
}
```

**Properties**

| Name               | Type     | Description                                                               |
| ------------------ | -------- | ------------------------------------------------------------------------- |
| `unlockPercentage` | `UD2x18` | The percentage of the amount designated to be unlocked in this tranche.   |
| `duration`         | `uint40` | The time difference in seconds between this tranche and the previous one. |
