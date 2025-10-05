# MerkleLT

[Git Source](https://github.com/sablier-labs/airdrops/blob/f9a358c0a5bccfec77601d4490ef9117e0488068/src/types/DataTypes.sol)

## Structs

### TrancheWithPercentage

Struct encapsulating the unlock percentage and duration of a tranche.

_Since users may have different amounts allocated, this struct makes it possible to calculate the amounts at claim time.
An 18-decimal format is used to represent percentages: 100% = 1e18. For more information, see the PRBMath documentation
on UD2x18: https://github.com/PaulRBerg/prb-math_

```solidity
struct TrancheWithPercentage {
    UD2x18 unlockPercentage;
    uint40 duration;
}
```

**Properties**

| Name               | Type     | Description                                                               |
| ------------------ | -------- | ------------------------------------------------------------------------- |
| `unlockPercentage` | `UD2x18` | The percentage designated to be unlocked in this tranche.                 |
| `duration`         | `uint40` | The time difference in seconds between this tranche and the previous one. |
