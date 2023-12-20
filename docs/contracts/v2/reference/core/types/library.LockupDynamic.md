# LockupDynamic

[Git Source](https://github.com/sablier-labs/v2-core/blob/release/src/types/DataTypes.sol)

Namespace for the structs used in
[SablierV2LockupDynamic](docs/contracts/v2/reference/core/contract.SablierV2LockupDynamic.md).

## Structs

### CreateWithDeltas

Struct encapsulating the parameters for the {SablierV2LockupDynamic.createWithDeltas} function.

```solidity
struct CreateWithDeltas {
    address sender;
    bool cancelable;
    bool transferable;
    address recipient;
    uint128 totalAmount;
    IERC20 asset;
    Broker broker;
    SegmentWithDelta[] segments;
}
```

**Parameters**

| Name           | Type                 | Description                                                                                                                                                                                                    |
| -------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sender`       | `address`            | The address streaming the assets, with the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.                                                                                       |
| `cancelable`   | `bool`               | Indicates if the stream is cancelable.                                                                                                                                                                         |
| `transferable` | `bool`               | Indicates if the stream NFT is transferable.                                                                                                                                                                   |
| `recipient`    | `address`            | The address receiving the assets.                                                                                                                                                                              |
| `totalAmount`  | `uint128`            | The total amount of `ERC-20` assets to be paid, including the stream deposit and any potential fees, all denoted in units of the asset's decimals.                                                             |
| `asset`        | `IERC20`             | The contract address of the `ERC-20` asset used for streaming.                                                                                                                                                 |
| `broker`       | `Broker`             | Struct containing (i) the address of the broker assisting in creating the stream, and (ii) the percentage fee paid to the broker from `totalAmount`, denoted as a fixed-point number. Both can be set to zero. |
| `segments`     | `SegmentWithDelta[]` | Segments with deltas used to compose the custom streaming curve. Milestones are calculated by starting from `block.timestamp` and adding each delta to the previous milestone.                                 |

### CreateWithMilestones

Struct encapsulating the parameters for the {SablierV2LockupDynamic.createWithMilestones} function.

```solidity
struct CreateWithMilestones {
    address sender;
    uint40 startTime;
    bool cancelable;
    bool transferable;
    address recipient;
    uint128 totalAmount;
    IERC20 asset;
    Broker broker;
    Segment[] segments;
}
```

**Parameters**

| Name           | Type        | Description                                                                                                                                                                                                    |
| -------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sender`       | `address`   | The address streaming the assets, with the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.                                                                                       |
| `startTime`    | `uint40`    | The Unix timestamp indicating the stream's start.                                                                                                                                                              |
| `cancelable`   | `bool`      | Indicates if the stream is cancelable.                                                                                                                                                                         |
| `transferable` | `bool`      | Indicates if the stream NFT is transferable.                                                                                                                                                                   |
| `recipient`    | `address`   | The address receiving the assets.                                                                                                                                                                              |
| `totalAmount`  | `uint128`   | The total amount of `ERC-20` assets to be paid, including the stream deposit and any potential fees, all denoted in units of the asset's decimals.                                                             |
| `asset`        | `IERC20`    | The contract address of the `ERC-20` asset used for streaming.                                                                                                                                                 |
| `broker`       | `Broker`    | Struct containing (i) the address of the broker assisting in creating the stream, and (ii) the percentage fee paid to the broker from `totalAmount`, denoted as a fixed-point number. Both can be set to zero. |
| `segments`     | `Segment[]` | Segments used to compose the custom streaming curve.                                                                                                                                                           |

### Range

Struct encapsulating the time range.

```solidity
struct Range {
    uint40 start;
    uint40 end;
}
```

### Segment

Segment struct used in the Lockup Dynamic stream.

```solidity
struct Segment {
    uint128 amount;
    UD2x18 exponent;
    uint40 milestone;
}
```

**Parameters**

| Name        | Type      | Description                                                                                    |
| ----------- | --------- | ---------------------------------------------------------------------------------------------- |
| `amount`    | `uint128` | The amount of assets to be streamed in this segment, denoted in units of the asset's decimals. |
| `exponent`  | `UD2x18`  | The exponent of this segment, denoted as a fixed-point number.                                 |
| `milestone` | `uint40`  | The Unix timestamp indicating this segment's end.                                              |

### SegmentWithDelta

Segment struct used at runtime in {SablierV2LockupDynamic.createWithDeltas}.

```solidity
struct SegmentWithDelta {
    uint128 amount;
    UD2x18 exponent;
    uint40 delta;
}
```

**Parameters**

| Name        | Type      | Description                                                                                    |
| ----------- | --------- | ---------------------------------------------------------------------------------------------- |
| `amount`    | `uint128` | The amount of assets to be streamed in this segment, denoted in units of the asset's decimals. |
| `exponent`  | `UD2x18`  | The exponent of this segment, denoted as a fixed-point number.                                 |
| `milestone` | `uint40`  | The time difference in seconds between this segment and the previous one.                      |

### Stream

Lockup Dynamic stream.

_The fields are arranged like this to save gas via tight variable packing._

```solidity
struct Stream {
    address sender;
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

**Parameters**

| Name             | Type             | Description                                                                                                              |
| ---------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `sender`         | `address`        | The address streaming the assets, with the ability to cancel the stream. It doesn't have to be the same as `msg.sender`. |
| `startTime`      | `uint40`         | The Unix timestamp indicating the stream's start.                                                                        |
| `endTime`        | `uint40`         | The Unix timestamp indicating the stream's end.                                                                          |
| `isCancelable`   | `bool`           | Boolean indicating if the stream is cancelable.                                                                          |
| `wasCanceled`    | `bool`           | Boolean indicating if the stream was canceled.                                                                           |
| `asset`          | `IERC20`         | The contract address of the `ERC-20` asset used for streaming.                                                           |
| `isDepleted`     | `bool`           | Boolean indicating if the stream is depleted.                                                                            |
| `isStream`       | `bool`           | Boolean indicating if the struct entity exists.                                                                          |
| `isTransferable` | `bool`           | Boolean indicating if the stream NFT is transferable.                                                                    |
| `amounts`        | `Lockup.Amounts` | Struct containing the deposit, withdrawn, and refunded amounts, all denoted in units of the asset's decimals.            |
| `segments`       | `Segment[]`      | Segments used to compose the custom streaming curve.                                                                     |
