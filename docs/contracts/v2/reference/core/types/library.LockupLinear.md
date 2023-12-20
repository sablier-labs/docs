# LockupLinear

[Git Source](https://github.com/sablier-labs/v2-core/blob/release/src/types/DataTypes.sol)

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
    bool transferable;
    Durations durations;
    Broker broker;
}
```

**Parameters**

| Name           | Type        | Description                                                                                                                                                                                                    |
| -------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sender`       | `address`   | The address streaming the assets, with the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.                                                                                       |
| `recipient`    | `address`   | The address receiving the assets.                                                                                                                                                                              |
| `totalAmount`  | `uint128`   | The total amount of `ERC-20` assets to be paid, including the stream deposit and any potential fees, all denoted in units of the asset's decimals.                                                             |
| `asset`        | `IERC20`    | The contract address of the `ERC-20` asset used for streaming.                                                                                                                                                 |
| `cancelable`   | `bool`      | Indicates if the stream is cancelable.                                                                                                                                                                         |
| `transferable` | `bool`      | Indicates if the stream NFT is transferable.                                                                                                                                                                   |
| `durations`    | `Durations` | Struct containing (i) cliff period duration and (ii) total stream duration, both in seconds.                                                                                                                   |
| `broker`       | `Broker`    | Struct containing (i) the address of the broker assisting in creating the stream, and (ii) the percentage fee paid to the broker from `totalAmount`, denoted as a fixed-point number. Both can be set to zero. |

### CreateWithRange

Struct encapsulating the parameters for the {SablierV2LockupLinear.createWithRange} function.

```solidity
struct CreateWithRange {
    address sender;
    address recipient;
    uint128 totalAmount;
    IERC20 asset;
    bool cancelable;
    bool transferable;
    Range range;
    Broker broker;
}
```

**Parameters**

| Name           | Type      | Description                                                                                                                                                                                                    |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sender`       | `address` | The address streaming the assets, with the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.                                                                                       |
| `recipient`    | `address` | The address receiving the assets.                                                                                                                                                                              |
| `totalAmount`  | `uint128` | The total amount of `ERC-20` assets to be paid, including the stream deposit and any potential fees, all denoted in units of the asset's decimals.                                                             |
| `asset`        | `IERC20`  | The contract address of the `ERC-20` asset used for streaming.                                                                                                                                                 |
| `cancelable`   | `bool`    | Indicates if the stream is cancelable.                                                                                                                                                                         |
| `transferable` | `bool`    | Indicates if the stream NFT is transferable.                                                                                                                                                                   |
| `range`        | `Range`   | Struct containing (i) the stream's start time, (ii) cliff time, and (iii) end time, all as Unix timestamps.                                                                                                    |
| `broker`       | `Broker`  | Struct containing (i) the address of the broker assisting in creating the stream, and (ii) the percentage fee paid to the broker from `totalAmount`, denoted as a fixed-point number. Both can be set to zero. |

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
    bool isTransferable;
    Lockup.Amounts amounts;
}
```

**Parameters**

| Name             | Type             | Description                                                                                                              |
| ---------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `sender`         | `address`        | The address streaming the assets, with the ability to cancel the stream. It doesn't have to be the same as `msg.sender`. |
| `startTime`      | `uint40`         | The Unix timestamp indicating the stream's start.                                                                        |
| `cliffTime`      | `uint40`         | The Unix timestamp indicating the cliff period's end.                                                                    |
| `isCancelable`   | `bool`           | Boolean indicating if the stream is cancelable.                                                                          |
| `wasCanceled`    | `bool`           | Boolean indicating if the stream was canceled.                                                                           |
| `asset`          | `IERC20`         | The contract address of the `ERC-20` asset used for streaming.                                                           |
| `endTime`        | `uint40`         | The Unix timestamp indicating the stream's end.                                                                          |
| `isDepleted`     | `bool`           | Boolean indicating if the stream is depleted.                                                                            |
| `isStream`       | `bool`           | Boolean indicating if the struct entity exists.                                                                          |
| `isTransferable` | `bool`           | Boolean indicating if the stream NFT is transferable.                                                                    |
| `amounts`        | `Lockup.Amounts` | Struct containing the deposit, withdrawn, and refunded amounts, all denoted in units of the asset's decimals.            |
