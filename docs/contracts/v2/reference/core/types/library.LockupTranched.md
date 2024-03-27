# LockupTranched

[Git Source](https://github.com/sablier-labs/v2-core/blob/63113dc3fbe43438eb305663e0d6b74eefc15857/src/types/DataTypes.sol)

Namespace for the structs used in
[SablierV2LockupTranched](docs/contracts/v2/reference/core/contract.SablierV2LockupTranched.md).

## Structs

### CreateWithDurations

Struct encapsulating the parameters for the {SablierV2LockupTranched.createWithDurations} function.

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
| `sender`       | `address`               | The address streaming the assets, with the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.                                                                                       |
| `recipient`    | `address`               | The address receiving the assets.                                                                                                                                                                              |
| `totalAmount`  | `uint128`               | The total amount of ERC-20 assets to be paid, including the stream deposit and any broker fee, both denoted in units of the asset's decimals.                                                                  |
| `asset`        | `IERC20`                | The contract address of the ERC-20 asset used for streaming.                                                                                                                                                   |
| `cancelable`   | `bool`                  | Indicates if the stream is cancelable.                                                                                                                                                                         |
| `transferable` | `bool`                  | Indicates if the stream NFT is transferable.                                                                                                                                                                   |
| `tranches`     | `TrancheWithDuration[]` | Tranches with durations used to compose the custom streaming curve. Timestamps are calculated by starting from `block.timestamp` and adding each duration to the previous timestamp.                           |
| `broker`       | `Broker`                | Struct containing (i) the address of the broker assisting in creating the stream, and (ii) the percentage fee paid to the broker from `totalAmount`, denoted as a fixed-point number. Both can be set to zero. |

### CreateWithTimestamps

Struct encapsulating the parameters for the {SablierV2LockupTranched.createWithTimestamps} function.

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
| `sender`       | `address`   | The address streaming the assets, with the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.                                                                                       |
| `recipient`    | `address`   | The address receiving the assets.                                                                                                                                                                              |
| `totalAmount`  | `uint128`   | The total amount of ERC-20 assets to be paid, including the stream deposit and any broker fee, both denoted in units of the asset's decimals.                                                                  |
| `asset`        | `IERC20`    | The contract address of the ERC-20 asset used for streaming.                                                                                                                                                   |
| `cancelable`   | `bool`      | Indicates if the stream is cancelable.                                                                                                                                                                         |
| `transferable` | `bool`      | Indicates if the stream NFT is transferable.                                                                                                                                                                   |
| `startTime`    | `uint40`    | The Unix timestamp indicating the stream's start.                                                                                                                                                              |
| `tranches`     | `Tranche[]` | Tranches used to compose the custom streaming curve.                                                                                                                                                           |
| `broker`       | `Broker`    | Struct containing (i) the address of the broker assisting in creating the stream, and (ii) the percentage fee paid to the broker from `totalAmount`, denoted as a fixed-point number. Both can be set to zero. |

### Range

Struct encapsulating the time range.

```solidity
struct Range {
    uint40 start;
    uint40 end;
}
```

**Properties**

| Name    | Type     | Description                                       |
| ------- | -------- | ------------------------------------------------- |
| `start` | `uint40` | The Unix timestamp indicating the stream's start. |
| `end`   | `uint40` | The Unix timestamp indicating the stream's end.   |

### StreamLT

Struct encapsulating all the data for a specific id, allowing anyone to retrieve all information within one call to the
contract.

_It contains the same data as the `Lockup.Stream` struct, plus the recipient and the tranches._

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

### Tranche

Tranche struct used in the Lockup Tranched stream.

```solidity
struct Tranche {
    uint128 amount;
    uint40 timestamp;
}
```

**Properties**

| Name        | Type      | Description                                                                                    |
| ----------- | --------- | ---------------------------------------------------------------------------------------------- |
| `amount`    | `uint128` | The amount of assets to be unlocked in this tranche, denoted in units of the asset's decimals. |
| `timestamp` | `uint40`  | The Unix timestamp indicating this tranche's end.                                              |

### TrancheWithDuration

Tranche struct used at runtime in {SablierV2LockupTranched.createWithDurations}.

```solidity
struct TrancheWithDuration {
    uint128 amount;
    uint40 duration;
}
```

**Properties**

| Name       | Type      | Description                                                                                    |
| ---------- | --------- | ---------------------------------------------------------------------------------------------- |
| `amount`   | `uint128` | The amount of assets to be unlocked in this tranche, denoted in units of the asset's decimals. |
| `duration` | `uint40`  | The time difference in seconds between this tranche and the previous one.                      |
