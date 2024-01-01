# Batch

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/53e259087984ff748fca6fb932fdb9c663c2b365/src/types/DataTypes.sol)

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
    bool transferable;
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
    bool transferable;
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
    bool transferable;
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
    bool transferable;
    LockupLinear.Range range;
    Broker broker;
}
```
