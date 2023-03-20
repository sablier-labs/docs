# LockupLinear

[Git Source](https://github.com/sablierhq/v2-core/blob/8bd57ebb31fddf6ef262477e5a378027db8b85d8/docs/contracts/v2/reference/core)

Quasi-namespace for the structs used in
[SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md).

## Structs

### CreateWithDurations

Struct that encapsulates the parameters of the {SablierV2LockupLinear-createWithDurations} function.

```solidity
struct CreateWithDurations {
    address sender;
    address recipient;
    uint128 totalAmount;
    IERC20 asset;
    bool cancelable;
    LockupLinear.Durations durations;
    Broker broker;
}
```

### CreateWithRange

Struct that encapsulates the parameters of the {SablierV2LockupLinear-createWithRange} function.

```solidity
struct CreateWithRange {
    address sender;
    address recipient;
    uint128 totalAmount;
    IERC20 asset;
    bool cancelable;
    Range range;
    Broker broker;
}
```

### Durations

Simple struct that encapsulates (i) the cliff duration and (ii) the total duration.

```solidity
struct Durations {
    uint40 cliff;
    uint40 total;
}
```

### Range

Range struct used as a field in the lockup linear stream.

```solidity
struct Range {
    uint40 start;
    uint40 cliff;
    uint40 end;
}
```

### Stream

Lockup linear stream struct.

_The fields are arranged like this to save gas via tight variable packing._

```solidity
struct Stream {
    Lockup.Amounts amounts;
    address sender;
    uint40 startTime;
    uint40 cliffTime;
    bool isCancelable;
    IERC20 asset;
    uint40 endTime;
    Lockup.Status status;
}
```
