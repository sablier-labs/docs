# BatchLockup

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/c10978dd4cdb54301b9c2d63c7e0af41da9110f3/src/types/DataTypes.sol)

## Structs

### CancelMultiple

A struct encapsulating the lockup contract's address and the stream ids to cancel.

```solidity
struct CancelMultiple {
    ISablierV2Lockup lockup;
    uint256[] streamIds;
}
```

### CreateWithDurationsLD

A struct encapsulating all parameters of {SablierV2LockupDynamic.createWithDurations} except for the asset.

```solidity
struct CreateWithDurationsLD {
    address sender;
    address recipient;
    uint128 totalAmount;
    bool cancelable;
    bool transferable;
    LockupDynamic.SegmentWithDuration[] segments;
    Broker broker;
}
```

### CreateWithDurationsLL

A struct encapsulating all parameters of {SablierV2LockupLinear.createWithDurations} except for the asset.

```solidity
struct CreateWithDurationsLL {
    address sender;
    address recipient;
    uint128 totalAmount;
    bool cancelable;
    bool transferable;
    LockupLinear.Durations durations;
    Broker broker;
}
```

### CreateWithDurationsLT

A struct encapsulating all parameters of {SablierV2LockupTranched.createWithDurations} except for the asset.

```solidity
struct CreateWithDurationsLT {
    address sender;
    address recipient;
    uint128 totalAmount;
    bool cancelable;
    bool transferable;
    LockupTranched.TrancheWithDuration[] tranches;
    Broker broker;
}
```

### CreateWithTimestampsLD

A struct encapsulating all parameters of {SablierV2LockupDynamic.createWithTimestamps} except for the asset.

```solidity
struct CreateWithTimestampsLD {
    address sender;
    address recipient;
    uint128 totalAmount;
    bool cancelable;
    bool transferable;
    uint40 startTime;
    LockupDynamic.Segment[] segments;
    Broker broker;
}
```

### CreateWithTimestampsLL

A struct encapsulating all parameters of {SablierV2LockupLinear.createWithTimestamps} except for the asset.

```solidity
struct CreateWithTimestampsLL {
    address sender;
    address recipient;
    uint128 totalAmount;
    bool cancelable;
    bool transferable;
    LockupLinear.Timestamps timestamps;
    Broker broker;
}
```

### CreateWithTimestampsLT

A struct encapsulating all parameters of {SablierV2LockupTranched.createWithTimestamps} except for the asset.

```solidity
struct CreateWithTimestampsLT {
    address sender;
    address recipient;
    uint128 totalAmount;
    bool cancelable;
    bool transferable;
    uint40 startTime;
    LockupTranched.Tranche[] tranches;
    Broker broker;
}
```
