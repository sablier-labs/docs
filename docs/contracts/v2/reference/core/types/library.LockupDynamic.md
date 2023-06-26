# LockupDynamic

[Git Source](https://github.com/sablier-labs/v2-core/blob/6ab33735951a1e93a3236fed3ca9c60f75ab76a7/src/types/DataTypes.sol)

Namespace for the structs used in
[SablierV2LockupDynamic](docs/contracts/v2/reference/core/contract.SablierV2LockupDynamic.md).

## Structs

### CreateWithDeltas

Struct encapsulating the parameters for the {SablierV2LockupDynamic.createWithDeltas} function.

```solidity
struct CreateWithDeltas {
    address sender;
    bool cancelable;
    address recipient;
    uint128 totalAmount;
    IERC20 asset;
    Broker broker;
    SegmentWithDelta[] segments;
}
```

### CreateWithMilestones

Struct encapsulating the parameters for the {SablierV2LockupDynamic.createWithMilestones} function.

```solidity
struct CreateWithMilestones {
    address sender;
    uint40 startTime;
    bool cancelable;
    address recipient;
    uint128 totalAmount;
    IERC20 asset;
    Broker broker;
    Segment[] segments;
}
```

### Range

Struct encapsulating the time range.

```solidity
struct Range {
    uint40 start;
    uint40 end;
}
```

### Segment

Segment struct used in the Lockup Dynamic stream.

```solidity
struct Segment {
    uint128 amount;
    UD2x18 exponent;
    uint40 milestone;
}
```

### SegmentWithDelta

Segment struct used at runtime in {SablierV2LockupDynamic.createWithDeltas}.

```solidity
struct SegmentWithDelta {
    uint128 amount;
    UD2x18 exponent;
    uint40 delta;
}
```

### Stream

Lockup Dynamic stream.

_The fields are arranged like this to save gas via tight variable packing._

```solidity
struct Stream {
    address sender;
    uint40 startTime;
    uint40 endTime;
    bool isCancelable;
    bool wasCanceled;
    IERC20 asset;
    bool isDepleted;
    bool isStream;
    Lockup.Amounts amounts;
    Segment[] segments;
}
```
