# LockupDynamic

[Git Source](https://github.com/sablier-labs/lockup/blob/58eaac45c20c57a93b73d887c714e68f061ec3e6/src/types/LockupDynamic.sol)

Namespace for the structs used only in LD streams.

## Structs

### Segment

Segment struct stored to represent LD streams.

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

Segment struct used at runtime in
[SablierLockupDynamic.createWithDurationsLD](docs/reference/lockup/contracts/abstracts/abstract.SablierLockupDynamic.md#createwithdurationsld)
function.

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
