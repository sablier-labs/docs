# LockupDynamic

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/7cb361717fd2f0289ad8d69469a3c00804b21657/src/types/LockupDynamic.sol)

Namespace for the structs used only in LD streams.

## Structs

### Segment

Segment struct stored to represent LD streams.

```solidity
struct Segment {
    // slot 0
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
