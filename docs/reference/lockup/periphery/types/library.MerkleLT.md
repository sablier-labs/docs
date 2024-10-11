# MerkleLT

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/ed3be5dc823dd81219f8060a6e6b32ead6c8de84/src/types/DataTypes.sol)

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
