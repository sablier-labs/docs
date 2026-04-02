# BatchLockup

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/types/BatchLockup.sol)

Namespace for the structs used in `SablierBatchLockup` contract.

## Structs

### CreateWithDurationsLD

A struct encapsulating all parameters of
[SablierLockupDynamic.createWithDurationsLD](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupDynamic.md#createwithdurationsld)
except for the token.

```solidity
struct CreateWithDurationsLD {
    address sender;
    address recipient;
    uint128 depositAmount;
    bool cancelable;
    bool transferable;
    LockupDynamic.SegmentWithDuration[] segmentsWithDuration;
    string shape;
}
```

### CreateWithDurationsLL

A struct encapsulating all parameters of
[SablierLockupLinear.createWithDurationsLL](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupLinear.md#createwithdurationsll)
except for the token.

```solidity
struct CreateWithDurationsLL {
    address sender;
    address recipient;
    uint128 depositAmount;
    bool cancelable;
    bool transferable;
    LockupLinear.Durations durations;
    LockupLinear.UnlockAmounts unlockAmounts;
    uint40 granularity;
    string shape;
}
```

### CreateWithDurationsLT

A struct encapsulating all parameters of
[SablierLockupTranched.createWithDurationsLT](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupTranched.md#createwithdurationslt)
except for the token.

```solidity
struct CreateWithDurationsLT {
    address sender;
    address recipient;
    uint128 depositAmount;
    bool cancelable;
    bool transferable;
    LockupTranched.TrancheWithDuration[] tranchesWithDuration;
    string shape;
}
```

### CreateWithTimestampsLD

A struct encapsulating all parameters of
[SablierLockupDynamic.createWithTimestampsLD](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupDynamic.md#createwithtimestampsld)
except for the token.

```solidity
struct CreateWithTimestampsLD {
    address sender;
    address recipient;
    uint128 depositAmount;
    bool cancelable;
    bool transferable;
    uint40 startTime;
    LockupDynamic.Segment[] segments;
    string shape;
}
```

### CreateWithTimestampsLL

A struct encapsulating all parameters of
[SablierLockupLinear.createWithTimestampsLL](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupLinear.md#createwithtimestampsll)
except for the token.

```solidity
struct CreateWithTimestampsLL {
    address sender;
    address recipient;
    uint128 depositAmount;
    bool cancelable;
    bool transferable;
    Lockup.Timestamps timestamps;
    uint40 cliffTime;
    LockupLinear.UnlockAmounts unlockAmounts;
    uint40 granularity;
    string shape;
}
```

### CreateWithTimestampsLPG

A struct encapsulating all parameters of
[SablierLockupPriceGated.createWithTimestampsLPG](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupPriceGated.md#createwithtimestampslpg)
except for the token.

```solidity
struct CreateWithTimestampsLPG {
    address sender;
    address recipient;
    uint128 depositAmount;
    bool cancelable;
    bool transferable;
    Lockup.Timestamps timestamps;
    LockupPriceGated.UnlockParams unlockParams;
    string shape;
}
```

### CreateWithTimestampsLT

A struct encapsulating all parameters of
[SablierLockupTranched.createWithTimestampsLT](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupTranched.md#createwithtimestampslt)
except for the token.

```solidity
struct CreateWithTimestampsLT {
    address sender;
    address recipient;
    uint128 depositAmount;
    bool cancelable;
    bool transferable;
    uint40 startTime;
    LockupTranched.Tranche[] tranches;
    string shape;
}
```
