# LockupDynamic

[Git Source](https://github.com/sablier-labs/lockup/blob/463278dbb461b1733d6424cf0aeee3b8d6bc036a/src/types/DataTypes.sol)

Namespace for the structs used only in Lockup Dynamic model.

## Structs

### Segment

Segment struct to be stored in the Lockup Dynamic model.

```solidity
struct Segment {
    uint128 amount;
    UD2x18 exponent;
    uint40 timestamp;
}
```

**Properties**

| Name        | Type      | Description                                                                             |
| ----------- | --------- | --------------------------------------------------------------------------------------- |
| `amount`    | `uint128` | The amount of tokens streamed in the segment, denoted in units of the token's decimals. |
| `exponent`  | `UD2x18`  | The exponent of the segment, denoted as a fixed-point number.                           |
| `timestamp` | `uint40`  | The Unix timestamp indicating the segment's end.                                        |

### SegmentWithDuration

Segment struct used at runtime in {SablierLockup.createWithDurationsLD} function.

```solidity
struct SegmentWithDuration {
    uint128 amount;
    UD2x18 exponent;
    uint40 duration;
}
```

**Properties**

| Name       | Type      | Description                                                                             |
| ---------- | --------- | --------------------------------------------------------------------------------------- |
| `amount`   | `uint128` | The amount of tokens streamed in the segment, denoted in units of the token's decimals. |
| `exponent` | `UD2x18`  | The exponent of the segment, denoted as a fixed-point number.                           |
| `duration` | `uint40`  | The time difference in seconds between the segment and the previous one.                |
