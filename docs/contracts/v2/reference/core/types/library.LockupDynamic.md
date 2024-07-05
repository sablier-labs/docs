# LockupDynamic

[Git Source](https://github.com/sablier-labs/v2-core/blob/36b49d3bf2a396d19083d28247e8e03d7a3a2ee1/src/types/DataTypes.sol)

Namespace for the structs used in
[SablierV2LockupDynamic](docs/contracts/v2/reference/core/contract.SablierV2LockupDynamic.md).

## Structs

### CreateWithDurations

Struct encapsulating the parameters of the {SablierV2LockupDynamic.createWithDurations} function.

```solidity
struct CreateWithDurations {
    address sender;
    address recipient;
    uint128 totalAmount;
    IERC20 asset;
    bool cancelable;
    bool transferable;
    SegmentWithDuration[] segments;
    Broker broker;
}
```

**Properties**

| Name           | Type                    | Description                                                                                                                                                                                                    |
| -------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sender`       | `address`               | The address distributing the assets, with the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.                                                                                    |
| `recipient`    | `address`               | The address receiving the assets.                                                                                                                                                                              |
| `totalAmount`  | `uint128`               | The total amount of ERC-20 assets to be distributed, including the stream deposit and any broker fee, both denoted in units of the asset's decimals.                                                           |
| `asset`        | `IERC20`                | The contract address of the ERC-20 asset to be distributed.                                                                                                                                                    |
| `cancelable`   | `bool`                  | Indicates if the stream is cancelable.                                                                                                                                                                         |
| `transferable` | `bool`                  | Indicates if the stream NFT is transferable.                                                                                                                                                                   |
| `segments`     | `SegmentWithDuration[]` | Segments with durations used to compose the dynamic distribution function. Timestamps are calculated by starting from `block.timestamp` and adding each duration to the previous timestamp.                    |
| `broker`       | `Broker`                | Struct containing (i) the address of the broker assisting in creating the stream, and (ii) the percentage fee paid to the broker from `totalAmount`, denoted as a fixed-point number. Both can be set to zero. |

### CreateWithTimestamps

Struct encapsulating the parameters of the {SablierV2LockupDynamic.createWithTimestamps} function.

```solidity
struct CreateWithTimestamps {
    address sender;
    address recipient;
    uint128 totalAmount;
    IERC20 asset;
    bool cancelable;
    bool transferable;
    uint40 startTime;
    Segment[] segments;
    Broker broker;
}
```

**Properties**

| Name           | Type        | Description                                                                                                                                                                                                    |
| -------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sender`       | `address`   | The address distributing the assets, with the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.                                                                                    |
| `recipient`    | `address`   | The address receiving the assets.                                                                                                                                                                              |
| `totalAmount`  | `uint128`   | The total amount of ERC-20 assets to be distributed, including the stream deposit and any broker fee, both denoted in units of the asset's decimals.                                                           |
| `asset`        | `IERC20`    | The contract address of the ERC-20 asset to be distributed.                                                                                                                                                    |
| `cancelable`   | `bool`      | Indicates if the stream is cancelable.                                                                                                                                                                         |
| `transferable` | `bool`      | Indicates if the stream NFT is transferable.                                                                                                                                                                   |
| `startTime`    | `uint40`    | The Unix timestamp indicating the stream's start.                                                                                                                                                              |
| `segments`     | `Segment[]` | Segments used to compose the dynamic distribution function.                                                                                                                                                    |
| `broker`       | `Broker`    | Struct containing (i) the address of the broker assisting in creating the stream, and (ii) the percentage fee paid to the broker from `totalAmount`, denoted as a fixed-point number. Both can be set to zero. |

### Segment

Segment struct used in the Lockup Dynamic stream.

```solidity
struct Segment {
    uint128 amount;
    UD2x18 exponent;
    uint40 timestamp;
}
```

**Properties**

| Name        | Type      | Description                                                                                   |
| ----------- | --------- | --------------------------------------------------------------------------------------------- |
| `amount`    | `uint128` | The amount of assets to be streamed in the segment, denoted in units of the asset's decimals. |
| `exponent`  | `UD2x18`  | The exponent of the segment, denoted as a fixed-point number.                                 |
| `timestamp` | `uint40`  | The Unix timestamp indicating the segment's end.                                              |

### SegmentWithDuration

Segment struct used at runtime in {SablierV2LockupDynamic.createWithDurations}.

```solidity
struct SegmentWithDuration {
    uint128 amount;
    UD2x18 exponent;
    uint40 duration;
}
```

**Properties**

| Name       | Type      | Description                                                                                   |
| ---------- | --------- | --------------------------------------------------------------------------------------------- |
| `amount`   | `uint128` | The amount of assets to be streamed in the segment, denoted in units of the asset's decimals. |
| `exponent` | `UD2x18`  | The exponent of the segment, denoted as a fixed-point number.                                 |
| `duration` | `uint40`  | The time difference in seconds between the segment and the previous one.                      |

### StreamLD

Struct encapsulating the full details of a stream.

_Extends `Lockup.Stream` by including the recipient and the segments._

```solidity
struct StreamLD {
    address sender;
    address recipient;
    uint40 startTime;
    uint40 endTime;
    bool isCancelable;
    bool wasCanceled;
    IERC20 asset;
    bool isDepleted;
    bool isStream;
    bool isTransferable;
    Lockup.Amounts amounts;
    Segment[] segments;
}
```

### Timestamps

Struct encapsulating the LockupDynamic timestamps.

```solidity
struct Timestamps {
    uint40 start;
    uint40 end;
}
```

**Properties**

| Name    | Type     | Description                                       |
| ------- | -------- | ------------------------------------------------- |
| `start` | `uint40` | The Unix timestamp indicating the stream's start. |
| `end`   | `uint40` | The Unix timestamp indicating the stream's end.   |
