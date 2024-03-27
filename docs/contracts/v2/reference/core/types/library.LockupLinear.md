# LockupLinear

[Git Source](https://github.com/sablier-labs/v2-core/blob/63113dc3fbe43438eb305663e0d6b74eefc15857/src/types/DataTypes.sol)

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

**Properties**

| Name           | Type        | Description                                                                                                                                                                                                    |
| -------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sender`       | `address`   | The address streaming the assets, with the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.                                                                                       |
| `recipient`    | `address`   | The address receiving the assets.                                                                                                                                                                              |
| `totalAmount`  | `uint128`   | The total amount of ERC-20 assets to be paid, including the stream deposit and any broker fee, both denoted in units of the asset's decimals.                                                                  |
| `asset`        | `IERC20`    | The contract address of the ERC-20 asset used for streaming.                                                                                                                                                   |
| `cancelable`   | `bool`      | Indicates if the stream is cancelable.                                                                                                                                                                         |
| `transferable` | `bool`      | Indicates if the stream NFT is transferable.                                                                                                                                                                   |
| `durations`    | `Durations` | Struct containing (i) cliff period duration and (ii) total stream duration, both in seconds.                                                                                                                   |
| `broker`       | `Broker`    | Struct containing (i) the address of the broker assisting in creating the stream, and (ii) the percentage fee paid to the broker from `totalAmount`, denoted as a fixed-point number. Both can be set to zero. |

### CreateWithTimestamps

Struct encapsulating the parameters for the {SablierV2LockupLinear.createWithTimestamps} function.

```solidity
struct CreateWithTimestamps {
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

**Properties**

| Name           | Type      | Description                                                                                                                                                                                                    |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sender`       | `address` | The address streaming the assets, with the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.                                                                                       |
| `recipient`    | `address` | The address receiving the assets.                                                                                                                                                                              |
| `totalAmount`  | `uint128` | The total amount of ERC-20 assets to be paid, including the stream deposit and any broker fee, both denoted in units of the asset's decimals.                                                                  |
| `asset`        | `IERC20`  | The contract address of the ERC-20 asset used for streaming.                                                                                                                                                   |
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

**Properties**

| Name    | Type     | Description                    |
| ------- | -------- | ------------------------------ |
| `cliff` | `uint40` | The cliff duration in seconds. |
| `total` | `uint40` | The total duration in seconds. |

### Range

Struct encapsulating the time range.

```solidity
struct Range {
    uint40 start;
    uint40 cliff;
    uint40 end;
}
```

**Properties**

| Name    | Type     | Description                                                                             |
| ------- | -------- | --------------------------------------------------------------------------------------- |
| `start` | `uint40` | The Unix timestamp for the stream's start.                                              |
| `cliff` | `uint40` | The Unix timestamp for the cliff period's end. A value of zero means there is no cliff. |
| `end`   | `uint40` | The Unix timestamp for the stream's end.                                                |

### StreamLL

Struct encapsulating all the data for a specific id, allowing anyone to retrieve all information within one call to the
contract.

_It contains the same data as the `Lockup.Stream` struct, plus the recipient and the cliff value._

```solidity
struct StreamLL {
    address sender;
    address recipient;
    uint40 startTime;
    bool isCancelable;
    bool wasCanceled;
    IERC20 asset;
    uint40 endTime;
    bool isDepleted;
    bool isStream;
    bool isTransferable;
    Lockup.Amounts amounts;
    uint40 cliffTime;
}
```
