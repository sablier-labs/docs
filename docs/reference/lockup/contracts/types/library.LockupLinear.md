# LockupLinear

[Git Source](https://github.com/sablier-labs/lockup/blob/463278dbb461b1733d6424cf0aeee3b8d6bc036a/src/types/DataTypes.sol)

Namespace for the structs used only in Lockup Linear model.

## Structs

### Durations

Struct encapsulating the cliff duration and the total duration used at runtime in {SablierLockup.createWithDurationsLL}
function.

```solidity
struct Durations {
    uint40 cliff;
    uint40 total;
}
```

**Properties**

| Name    | Type     | Description                    |
| ------- | -------- | ------------------------------ |
| `cliff` | `uint40` | The cliff duration in seconds. |
| `total` | `uint40` | The total duration in seconds. |

### UnlockAmounts

Struct encapsulating the unlock amounts for the stream.

_The sum of `start` and `cliff` must be less than or equal to deposit amount. Both amounts can be zero._

```solidity
struct UnlockAmounts {
    uint128 start;
    uint128 cliff;
}
```

**Properties**

| Name    | Type      | Description                                  |
| ------- | --------- | -------------------------------------------- |
| `start` | `uint128` | The amount to be unlocked at the start time. |
| `cliff` | `uint128` | The amount to be unlocked at the cliff time. |
