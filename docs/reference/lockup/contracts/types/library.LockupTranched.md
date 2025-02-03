# LockupTranched

[Git Source](https://github.com/sablier-labs/lockup/blob/463278dbb461b1733d6424cf0aeee3b8d6bc036a/src/types/DataTypes.sol)

Namespace for the structs used only in Lockup Tranched model.

## Structs

### Tranche

Tranche struct to be stored in the Lockup Tranched model.

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

Tranche struct used at runtime in {SablierLockup.createWithDurationsLT} function.

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
