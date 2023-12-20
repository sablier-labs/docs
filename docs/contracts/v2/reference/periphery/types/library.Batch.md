# Batch

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/05c331e79e05886c7837dfda1bc21197c1c3c748/src/types/DataTypes.sol)

## Structs

### CancelMultiple

A struct encapsulating the lockup contract's address and the stream ids to cancel.

```solidity
struct CancelMultiple {
    ISablierV2Lockup lockup;
    uint256[] streamIds;
}
```

### CreateWithDeltas

A struct encapsulating all parameters of
[SablierV2LockupDynamic.createWithDelta](/contracts/v2/reference/core/types/library.LockupDynamic#createwithdeltas)
except for the asset.

```solidity
struct CreateWithDeltas {
    address sender;
    bool cancelable;
    address recipient;
    uint128 totalAmount;
    Broker broker;
    LockupDynamic.SegmentWithDelta[] segments;
}
```

### CreateWithDurations

A struct encapsulating all parameters of
[SablierV2LockupLinear.createWithDurations](/contracts/v2/reference/core/types/library.LockupLinear#createwithdurations)
except for the asset.

```solidity
struct CreateWithDurations {
    address sender;
    address recipient;
    uint128 totalAmount;
    bool cancelable;
    LockupLinear.Durations durations;
    Broker broker;
}
```

### CreateWithMilestones

A struct encapsulating all parameters of
[SablierV2LockupDynamic.createWithMilestones](/contracts/v2/reference/core/types/library.LockupDynamic#createwithmilestones)
except for the asset.

```solidity
struct CreateWithMilestones {
    address sender;
    uint40 startTime;
    bool cancelable;
    address recipient;
    uint128 totalAmount;
    Broker broker;
    LockupDynamic.Segment[] segments;
}
```

### CreateWithRange

A struct encapsulating all parameters of
[SablierV2LockupLinear.createWithRange](/contracts/v2/reference/core/types/library.LockupLinear#createwithrange)) except
for the asset.

```solidity
struct CreateWithRange {
    address sender;
    address recipient;
    uint128 totalAmount;
    bool cancelable;
    LockupLinear.Range range;
    Broker broker;
}
```
