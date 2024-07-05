# Lockup

[Git Source](https://github.com/sablier-labs/v2-core/blob/36b49d3bf2a396d19083d28247e8e03d7a3a2ee1/src/types/DataTypes.sol)

Namespace for the structs used in both
[SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) and
[SablierV2LockupDynamic](docs/contracts/v2/reference/core/contract.SablierV2LockupDynamic.md).

## Structs

### Amounts

Struct encapsulating the deposit, withdrawn, and refunded amounts, both denoted in units of the asset's decimals.

_Because the deposited and the withdrawn amount are often read together, declaring them in the same slot saves gas._

```solidity
struct Amounts {
    uint128 deposited;
    uint128 withdrawn;
    uint128 refunded;
}
```

**Properties**

| Name        | Type      | Description                                                                             |
| ----------- | --------- | --------------------------------------------------------------------------------------- |
| `deposited` | `uint128` | The initial amount deposited in the stream, net of broker fee.                          |
| `withdrawn` | `uint128` | The cumulative amount withdrawn from the stream.                                        |
| `refunded`  | `uint128` | The amount refunded to the sender. Unless the stream was canceled, this is always zero. |

### CreateAmounts

Struct encapsulating the deposit amount and the broker fee amount, both denoted in units of the asset's decimals.

```solidity
struct CreateAmounts {
    uint128 deposit;
    uint128 brokerFee;
}
```

**Properties**

| Name        | Type      | Description                          |
| ----------- | --------- | ------------------------------------ |
| `deposit`   | `uint128` | The amount to deposit in the stream. |
| `brokerFee` | `uint128` | The broker fee amount.               |

### Stream

A common data structure to be stored in all
[SablierV2Lockup](docs/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup.md) models.

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
}
```

**Properties**

| Name             | Type             | Description                                                                                                    |
| ---------------- | ---------------- | -------------------------------------------------------------------------------------------------------------- |
| `sender`         | `address`        | The address distributing the assets, with the ability to cancel the stream.                                    |
| `startTime`      | `uint40`         | The Unix timestamp indicating the stream's start.                                                              |
| `endTime`        | `uint40`         | The Unix timestamp indicating the stream's end.                                                                |
| `isCancelable`   | `bool`           | Boolean indicating if the stream is cancelable.                                                                |
| `wasCanceled`    | `bool`           | Boolean indicating if the stream was canceled.                                                                 |
| `asset`          | `IERC20`         | The contract address of the ERC-20 asset to be distributed.                                                    |
| `isDepleted`     | `bool`           | Boolean indicating if the stream is depleted.                                                                  |
| `isStream`       | `bool`           | Boolean indicating if the struct entity exists.                                                                |
| `isTransferable` | `bool`           | Boolean indicating if the stream NFT is transferable.                                                          |
| `amounts`        | `Lockup.Amounts` | Struct containing the deposit, withdrawn, and refunded amounts, both denoted in units of the asset's decimals. |

## Enums

### Status

Enum representing the different statuses of a stream.

```solidity
enum Status {
    PENDING,
    STREAMING,
    SETTLED,
    CANCELED,
    DEPLETED
}
```
