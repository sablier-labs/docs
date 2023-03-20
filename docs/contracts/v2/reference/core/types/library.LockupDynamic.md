# LockupDynamic

[Git Source](https://github.com/sablierhq/v2-core/blob/8bd57ebb31fddf6ef262477e5a378027db8b85d8/docs/contracts/v2/reference/core)

Quasi-namespace for the structs used in
[SablierV2LockupDynamic](docs/contracts/v2/reference/core/contract.SablierV2LockupDynamic.md).

## Structs

### CreateWithDeltas

Struct that encapsulates the parameters of the {SablierV2LockupDynamic-createWithDeltas} function.

```solidity
struct CreateWithDeltas {
    address sender;
    address recipient;
    uint128 totalAmount;
    IERC20 asset;
    bool cancelable;
    LockupDynamic.SegmentWithDelta[] segments;
    Broker broker;
}
```

### CreateWithMilestones

Struct that encapsulates the parameters of the {SablierV2LockupDynamic-createWithMilestones} function.

```solidity
struct CreateWithMilestones {
    LockupDynamic.Segment[] segments;
    address sender;
    uint40 startTime;
    bool cancelable;
    address recipient;
    uint128 totalAmount;
    IERC20 asset;
    Broker broker;
}
```

### Range

Range struct used as a field in the lockup dynamic stream.

```solidity
struct Range {
    uint40 start;
    uint40 end;
}
```

### Segment

Segment struct used in the lockup dynamic stream.

```solidity
struct Segment {
    uint128 amount;
    UD2x18 exponent;
    uint40 milestone;
}
```

### SegmentWithDelta

Segment struct used only at runtime in {SablierV2LockupDynamic-createWithDeltas}.

```solidity
struct SegmentWithDelta {
    uint128 amount;
    UD2x18 exponent;
    uint40 delta;
}
```

### Stream

Lockup dynamic stream struct.

_The fields are arranged like this to save gas via tight variable packing._

```solidity
struct Stream {
    Lockup.Amounts amounts;
    Segment[] segments;
    address sender;
    uint40 startTime;
    uint40 endTime;
    bool isCancelable;
    Lockup.Status status;
    IERC20 asset;
}
```
