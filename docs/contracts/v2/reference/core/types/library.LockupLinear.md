# LockupLinear

[Git Source](https://github.com/sablier-labs/v2-core/blob/bca1d9ea0485b065544486bb01f4148d44289644/src/types/DataTypes.sol)

Namespace for the structs used in
[SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md).

## Structs

### CreateWithDurations

Struct encapsulating the parameters for the {SablierV2LockupLinear.createWithDurations} function.

```solidity
struct CreateWithDurations {
    address sender;
    address recipient;
    uint128 totalAmount;
    IERC20 asset;
    bool cancelable;
    Durations durations;
    Broker broker;
}
```

### CreateWithRange

Struct encapsulating the parameters for the {SablierV2LockupLinear.createWithRange} function.

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

Struct encapsulating the cliff duration and the total duration.

```solidity
struct Durations {
    uint40 cliff;
    uint40 total;
}
```

### Range

Struct encapsulating the time range.

```solidity
struct Range {
    uint40 start;
    uint40 cliff;
    uint40 end;
}
```

### Stream

Lockup Linear stream.

_The fields are arranged like this to save gas via tight variable packing._

```solidity
struct Stream {
    address sender;
    uint40 startTime;
    uint40 cliffTime;
    bool isCancelable;
    bool wasCanceled;
    IERC20 asset;
    uint40 endTime;
    bool isDepleted;
    bool isStream;
    Lockup.Amounts amounts;
}
```
