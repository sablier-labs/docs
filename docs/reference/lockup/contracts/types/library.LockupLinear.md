# LockupLinear

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/7cb361717fd2f0289ad8d69469a3c00804b21657/src/types/LockupLinear.sol)

Namespace for the structs used only in LL streams.

## Structs

### Durations

Struct encapsulating the cliff duration and the total duration used at runtime in
[SablierLockupLinear.createWithDurationsLL](docs/reference/lockup/contracts/abstracts/abstract.SablierLockupLinear.md#createwithdurationsll)
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

The sum of `start` and `cliff` must be less than or equal to deposit amount. Both amounts can be zero.

```solidity
struct UnlockAmounts {
    // slot 0
    uint128 start;
    uint128 cliff;
}
```

**Properties**

| Name    | Type      | Description                                  |
| ------- | --------- | -------------------------------------------- |
| `start` | `uint128` | The amount to be unlocked at the start time. |
| `cliff` | `uint128` | The amount to be unlocked at the cliff time. |
