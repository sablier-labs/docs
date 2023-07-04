# Batch

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/a17edc8e290789f96ef9ddaf0e4d1c99d8ce1acf/src/types/DataTypes.sol)

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

A struct encapsulating all parameters of {SablierV2LockupDynamic.createWithDelta} except for the asset.

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

A struct encapsulating all parameters of {SablierV2LockupLinear.createWithDurations} except for the asset.

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

A struct encapsulating all parameters of {SablierV2LockupDynamic.createWithMilestones} except for the asset.

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

A struct encapsulating all parameters of {SablierV2LockupLinear.createWithRange} except for the asset.

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
