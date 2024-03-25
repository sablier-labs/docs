# LockupLinear

[Git Source](https://github.com/sablier-labs/v2-core/blob/36b49d3bf2a396d19083d28247e8e03d7a3a2ee1/src/types/DataTypes.sol)

Namespace for the structs used in
[SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md).

## Structs

### CreateWithDurations

Struct encapsulating the parameters of the {SablierV2LockupLinear.createWithDurations} function.

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
| `sender`       | `address`   | The address distributing the assets, with the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.                                                                                    |
| `recipient`    | `address`   | The address receiving the assets.                                                                                                                                                                              |
| `totalAmount`  | `uint128`   | The total amount of ERC-20 assets to be distributed, including the stream deposit and any broker fee, both denoted in units of the asset's decimals.                                                           |
| `asset`        | `IERC20`    | The contract address of the ERC-20 asset to be distributed.                                                                                                                                                    |
| `cancelable`   | `bool`      | Indicates if the stream is cancelable.                                                                                                                                                                         |
| `transferable` | `bool`      | Indicates if the stream NFT is transferable.                                                                                                                                                                   |
| `durations`    | `Durations` | Struct containing (i) cliff period duration and (ii) total stream duration, both in seconds.                                                                                                                   |
| `broker`       | `Broker`    | Struct containing (i) the address of the broker assisting in creating the stream, and (ii) the percentage fee paid to the broker from `totalAmount`, denoted as a fixed-point number. Both can be set to zero. |

### CreateWithTimestamps

Struct encapsulating the parameters of the {SablierV2LockupLinear.createWithTimestamps} function.

```solidity
struct CreateWithTimestamps {
    address sender;
    address recipient;
    uint128 totalAmount;
    IERC20 asset;
    bool cancelable;
    bool transferable;
    Timestamps timestamps;
    Broker broker;
}
```

**Properties**

| Name           | Type         | Description                                                                                                                                                                                                    |
| -------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sender`       | `address`    | The address distributing the assets, with the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.                                                                                    |
| `recipient`    | `address`    | The address receiving the assets.                                                                                                                                                                              |
| `totalAmount`  | `uint128`    | The total amount of ERC-20 assets to be distributed, including the stream deposit and any broker fee, both denoted in units of the asset's decimals.                                                           |
| `asset`        | `IERC20`     | The contract address of the ERC-20 asset to be distributed.                                                                                                                                                    |
| `cancelable`   | `bool`       | Indicates if the stream is cancelable.                                                                                                                                                                         |
| `transferable` | `bool`       | Indicates if the stream NFT is transferable.                                                                                                                                                                   |
| `timestamps`   | `Timestamps` | Struct containing (i) the stream's start time, (ii) cliff time, and (iii) end time, all as Unix timestamps.                                                                                                    |
| `broker`       | `Broker`     | Struct containing (i) the address of the broker assisting in creating the stream, and (ii) the percentage fee paid to the broker from `totalAmount`, denoted as a fixed-point number. Both can be set to zero. |

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

### StreamLL

Struct encapsulating the full details of a stream.

_Extends `Lockup.Stream` by including the recipient and the cliff time._

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

### Timestamps

Struct encapsulating the LockupLinear timestamps.

```solidity
struct Timestamps {
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
