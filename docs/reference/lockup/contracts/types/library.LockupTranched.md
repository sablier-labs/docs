# LockupTranched

[Git Source](https://github.com/sablier-labs/lockup/blob/58eaac45c20c57a93b73d887c714e68f061ec3e6/src/types/LockupTranched.sol)

Namespace for the structs used only in LT streams.

## Structs

### Tranche

Tranche struct stored to represent LT streams.

```solidity
struct Tranche {
    uint128 amount;
    uint40 timestamp;
}
```

**Properties**

| Name        | Type      | Description                                                                                   |
| ----------- | --------- | --------------------------------------------------------------------------------------------- |
| `amount`    | `uint128` | The amount of tokens to be unlocked in the tranche, denoted in units of the token's decimals. |
| `timestamp` | `uint40`  | The Unix timestamp indicating the tranche's end.                                              |

### TrancheWithDuration

Tranche struct used at runtime in
[SablierLockupTranched.createWithDurationsLT](docs/reference/lockup/contracts/abstracts/abstract.SablierLockupTranched.md#createwithdurationslt)
function.

```solidity
struct TrancheWithDuration {
    uint128 amount;
    uint40 duration;
}
```

**Properties**

| Name       | Type      | Description                                                                                   |
| ---------- | --------- | --------------------------------------------------------------------------------------------- |
| `amount`   | `uint128` | The amount of tokens to be unlocked in the tranche, denoted in units of the token's decimals. |
| `duration` | `uint40`  | The time difference in seconds between the tranche and the previous one.                      |
