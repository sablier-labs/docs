# BatchLockup

[Git Source](https://github.com/sablier-labs/lockup/blob/463278dbb461b1733d6424cf0aeee3b8d6bc036a/src/types/DataTypes.sol)

_Namespace for the structs used in `BatchLockup` contract._

## Structs

### CreateWithDurationsLD

A struct encapsulating all parameters of {SablierLockup.createWithDurationsLD} except for the token.

```solidity
struct CreateWithDurationsLD {
    address sender;
    address recipient;
    uint128 totalAmount;
    bool cancelable;
    bool transferable;
    LockupDynamic.SegmentWithDuration[] segmentsWithDuration;
    string shape;
    Broker broker;
}
```

### CreateWithDurationsLL

A struct encapsulating all parameters of {SablierLockup.createWithDurationsLL} except for the token.

```solidity
struct CreateWithDurationsLL {
    address sender;
    address recipient;
    uint128 totalAmount;
    bool cancelable;
    bool transferable;
    LockupLinear.Durations durations;
    LockupLinear.UnlockAmounts unlockAmounts;
    string shape;
    Broker broker;
}
```

### CreateWithDurationsLT

A struct encapsulating all parameters of {SablierLockup.createWithDurationsLT} except for the token.

```solidity
struct CreateWithDurationsLT {
    address sender;
    address recipient;
    uint128 totalAmount;
    bool cancelable;
    bool transferable;
    LockupTranched.TrancheWithDuration[] tranchesWithDuration;
    string shape;
    Broker broker;
}
```

### CreateWithTimestampsLD

A struct encapsulating all parameters of {SablierLockup.createWithTimestampsLD} except for the token.

```solidity
struct CreateWithTimestampsLD {
    address sender;
    address recipient;
    uint128 totalAmount;
    bool cancelable;
    bool transferable;
    uint40 startTime;
    LockupDynamic.Segment[] segments;
    string shape;
    Broker broker;
}
```

### CreateWithTimestampsLL

A struct encapsulating all parameters of {SablierLockup.createWithTimestampsLL} except for the token.

```solidity
struct CreateWithTimestampsLL {
    address sender;
    address recipient;
    uint128 totalAmount;
    bool cancelable;
    bool transferable;
    Lockup.Timestamps timestamps;
    uint40 cliffTime;
    LockupLinear.UnlockAmounts unlockAmounts;
    string shape;
    Broker broker;
}
```

### CreateWithTimestampsLT

A struct encapsulating all parameters of {SablierLockup.createWithTimestampsLT} except for the token.

```solidity
struct CreateWithTimestampsLT {
    address sender;
    address recipient;
    uint128 totalAmount;
    bool cancelable;
    bool transferable;
    uint40 startTime;
    LockupTranched.Tranche[] tranches;
    string shape;
    Broker broker;
}
```
