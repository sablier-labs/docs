# LockupTranched

[Git Source](https://github.com/sablier-labs/v2-core/blob/73356945b53e8dd4112f34f3e2c63c278c4a5239/src/types/DataTypes.sol)

Namespace for the structs used in
[SablierV2LockupTranched](docs/reference/lockup/core/contract.SablierV2LockupTranched.md).

## Structs

### CreateWithDurations

Struct encapsulating the parameters of the {SablierV2LockupTranched.createWithDurations} function.

```solidity
struct CreateWithDurations {
    address sender;
    address recipient;
    uint128 totalAmount;
    IERC20 asset;
    bool cancelable;
    bool transferable;
    TrancheWithDuration[] tranches;
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
| `tranches`     | `TrancheWithDuration[]` | Tranches with durations used to compose the tranched distribution function. Timestamps are calculated by starting from `block.timestamp` and adding each duration to the previous timestamp.                   |
| `broker`       | `Broker`                | Struct containing (i) the address of the broker assisting in creating the stream, and (ii) the percentage fee paid to the broker from `totalAmount`, denoted as a fixed-point number. Both can be set to zero. |

### CreateWithTimestamps

Struct encapsulating the parameters of the {SablierV2LockupTranched.createWithTimestamps} function.

```solidity
struct CreateWithTimestamps {
    address sender;
    address recipient;
    uint128 totalAmount;
    IERC20 asset;
    bool cancelable;
    bool transferable;
    uint40 startTime;
    Tranche[] tranches;
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
| `tranches`     | `Tranche[]` | Tranches used to compose the tranched distribution function.                                                                                                                                                   |
| `broker`       | `Broker`    | Struct containing (i) the address of the broker assisting in creating the stream, and (ii) the percentage fee paid to the broker from `totalAmount`, denoted as a fixed-point number. Both can be set to zero. |

### StreamLT

Struct encapsulating the full details of a stream.

_Extends `Lockup.Stream` by including the recipient and the tranches._

```solidity
struct StreamLT {
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
    Tranche[] tranches;
}
```

### Timestamps

Struct encapsulating the LockupTranched timestamps.

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

### Tranche

Tranche struct used in the Lockup Tranched stream.

```solidity
struct Tranche {
    uint128 amount;
    uint40 timestamp;
}
```

**Properties**

| Name        | Type      | Description                                                                                   |
| ----------- | --------- | --------------------------------------------------------------------------------------------- |
| `amount`    | `uint128` | The amount of assets to be unlocked in the tranche, denoted in units of the asset's decimals. |
| `timestamp` | `uint40`  | The Unix timestamp indicating the tranche's end.                                              |

### TrancheWithDuration

Tranche struct used at runtime in {SablierV2LockupTranched.createWithDurations}.

```solidity
struct TrancheWithDuration {
    uint128 amount;
    uint40 duration;
}
```

**Properties**

| Name       | Type      | Description                                                                                   |
| ---------- | --------- | --------------------------------------------------------------------------------------------- |
| `amount`   | `uint128` | The amount of assets to be unlocked in the tranche, denoted in units of the asset's decimals. |
| `duration` | `uint40`  | The time difference in seconds between the tranche and the previous one.                      |
