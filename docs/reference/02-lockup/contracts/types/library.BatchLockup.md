# BatchLockup

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/8b6823c019ff7556ac9ad24cbb5ac62821854d2f/src/types/BatchLockup.sol)

Namespace for the structs used in `SablierBatchLockup` contract.

## Structs

### CreateWithDurationsLD

A struct encapsulating all parameters of
[SablierLockupDynamic.createWithDurationsLD](/docs/reference/02-lockup/contracts/abstracts/abstract.SablierLockupDynamic.md#createwithdurationsld)
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
[SablierLockupLinear.createWithDurationsLL](/docs/reference/02-lockup/contracts/abstracts/abstract.SablierLockupLinear.md#createwithdurationsll)
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
[SablierLockupTranched.createWithDurationsLT](/docs/reference/02-lockup/contracts/abstracts/abstract.SablierLockupTranched.md#createwithdurationslt)
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
[SablierLockupDynamic.createWithTimestampsLD](/docs/reference/02-lockup/contracts/abstracts/abstract.SablierLockupDynamic.md#createwithtimestampsld)
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
[SablierLockupLinear.createWithTimestampsLL](/docs/reference/02-lockup/contracts/abstracts/abstract.SablierLockupLinear.md#createwithtimestampsll)
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
[SablierLockupPriceGated.createWithTimestampsLPG](/docs/reference/02-lockup/contracts/abstracts/abstract.SablierLockupPriceGated.md#createwithtimestampslpg)
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
[SablierLockupTranched.createWithTimestampsLT](/docs/reference/02-lockup/contracts/abstracts/abstract.SablierLockupTranched.md#createwithtimestampslt)
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
