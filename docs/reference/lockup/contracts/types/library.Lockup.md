# Lockup

[Git Source](https://github.com/sablier-labs/lockup/blob/58eaac45c20c57a93b73d887c714e68f061ec3e6/src/types/Lockup.sol)

Namespace for the structs shared by all Lockup models.

## Structs

### Amounts

Struct encapsulating the deposit, withdrawn, and refunded amounts, all denoted in units of the token's decimals.

_The deposited and withdrawn amount are often read together, so declaring them in the same slot saves gas._

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
| `deposited` | `uint128` | The amount deposited in the stream.                                                     |
| `withdrawn` | `uint128` | The cumulative amount withdrawn from the stream.                                        |
| `refunded`  | `uint128` | The amount refunded to the sender. Unless the stream was canceled, this is always zero. |

### CreateEventCommon

Struct encapsulating the common parameters emitted in the stream creation events.

```solidity
struct CreateEventCommon {
    address funder;
    address sender;
    address recipient;
    uint128 depositAmount;
    IERC20 token;
    bool cancelable;
    bool transferable;
    Lockup.Timestamps timestamps;
    string shape;
}
```

**Properties**

| Name            | Type                | Description                                                                                                          |
| --------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `funder`        | `address`           | The address funding the stream.                                                                                      |
| `sender`        | `address`           | The address distributing the tokens, which is able to cancel the stream.                                             |
| `recipient`     | `address`           | The address receiving the tokens, as well as the NFT owner.                                                          |
| `depositAmount` | `uint128`           | The deposit amount, denoted in units of the token's decimals.                                                        |
| `token`         | `IERC20`            | The contract address of the ERC-20 token to be distributed.                                                          |
| `cancelable`    | `bool`              | Boolean indicating whether the stream is cancelable or not.                                                          |
| `transferable`  | `bool`              | Boolean indicating whether the stream NFT is transferable or not.                                                    |
| `timestamps`    | `Lockup.Timestamps` | Struct encapsulating (i) the stream's start time and (ii) end time, all as Unix timestamps.                          |
| `shape`         | `string`            | An optional parameter to specify the shape of the distribution function. This helps differentiate streams in the UI. |

### CreateWithDurations

Struct encapsulating the parameters of the `createWithDurations` functions.

```solidity
struct CreateWithDurations {
    address sender;
    address recipient;
    uint128 depositAmount;
    IERC20 token;
    bool cancelable;
    bool transferable;
    string shape;
}
```

**Properties**

| Name            | Type      | Description                                                                                                                 |
| --------------- | --------- | --------------------------------------------------------------------------------------------------------------------------- |
| `sender`        | `address` | The address distributing the tokens, with the ability to cancel the stream. It doesn't have to be the same as `msg.sender`. |
| `recipient`     | `address` | The address receiving the tokens, as well as the NFT owner.                                                                 |
| `depositAmount` | `uint128` | The deposit amount, denoted in units of the token's decimals.                                                               |
| `token`         | `IERC20`  | The contract address of the ERC-20 token to be distributed.                                                                 |
| `cancelable`    | `bool`    | Indicates if the stream is cancelable.                                                                                      |
| `transferable`  | `bool`    | Indicates if the stream NFT is transferable.                                                                                |
| `shape`         | `string`  | An optional parameter to specify the shape of the distribution function. This helps differentiate streams in the UI.        |

### CreateWithTimestamps

Struct encapsulating the parameters of the `createWithTimestamps` functions.

```solidity
struct CreateWithTimestamps {
    address sender;
    address recipient;
    uint128 depositAmount;
    IERC20 token;
    bool cancelable;
    bool transferable;
    Timestamps timestamps;
    string shape;
}
```

**Properties**

| Name            | Type         | Description                                                                                                                 |
| --------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `sender`        | `address`    | The address distributing the tokens, with the ability to cancel the stream. It doesn't have to be the same as `msg.sender`. |
| `recipient`     | `address`    | The address receiving the tokens, as well as the NFT owner.                                                                 |
| `depositAmount` | `uint128`    | The deposit amount, denoted in units of the token's decimals.                                                               |
| `token`         | `IERC20`     | The contract address of the ERC-20 token to be distributed.                                                                 |
| `cancelable`    | `bool`       | Indicates if the stream is cancelable.                                                                                      |
| `transferable`  | `bool`       | Indicates if the stream NFT is transferable.                                                                                |
| `timestamps`    | `Timestamps` | Struct encapsulating (i) the stream's start time and (ii) end time, both as Unix timestamps.                                |
| `shape`         | `string`     | An optional parameter to specify the shape of the distribution function. This helps differentiate streams in the UI.        |

### Stream

A common data structure to be stored in all Lockup models.

_The fields are arranged like this to save gas via tight variable packing._

```solidity
struct Stream {
    address sender;
    uint40 startTime;
    uint40 endTime;
    bool isCancelable;
    bool wasCanceled;
    IERC20 token;
    bool isDepleted;
    bool isTransferable;
    Model lockupModel;
    Amounts amounts;
}
```

**Properties**

| Name             | Type      | Description                                                                                                       |
| ---------------- | --------- | ----------------------------------------------------------------------------------------------------------------- |
| `sender`         | `address` | The address distributing the tokens, with the ability to cancel the stream.                                       |
| `startTime`      | `uint40`  | The Unix timestamp indicating the stream's start.                                                                 |
| `endTime`        | `uint40`  | The Unix timestamp indicating the stream's end.                                                                   |
| `isCancelable`   | `bool`    | Boolean indicating if the stream is cancelable.                                                                   |
| `wasCanceled`    | `bool`    | Boolean indicating if the stream was canceled.                                                                    |
| `token`          | `IERC20`  | The contract address of the ERC-20 token to be distributed.                                                       |
| `isDepleted`     | `bool`    | Boolean indicating if the stream is depleted.                                                                     |
| `isTransferable` | `bool`    | Boolean indicating if the stream NFT is transferable.                                                             |
| `lockupModel`    | `Model`   | The distribution model of the stream.                                                                             |
| `amounts`        | `Amounts` | Struct encapsulating the deposit, withdrawn, and refunded amounts, both denoted in units of the token's decimals. |

### Timestamps

Struct encapsulating the Lockup timestamps.

```solidity
struct Timestamps {
    uint40 start;
    uint40 end;
}
```

**Properties**

| Name    | Type     | Description                                |
| ------- | -------- | ------------------------------------------ |
| `start` | `uint40` | The Unix timestamp for the stream's start. |
| `end`   | `uint40` | The Unix timestamp for the stream's end.   |

## Enums

### Model

Enum representing the different distribution models used to create Lockup streams.

_This determines the streaming function used in the calculations of the unlocked tokens._

```solidity
enum Model {
    LOCKUP_LINEAR,
    LOCKUP_DYNAMIC,
    LOCKUP_TRANCHED
}
```

### Status

Enum representing the different statuses of a stream.

\*The status can have a "temperature":

1. Warm: Pending, Streaming. The passage of time alone can change the status.
2. Cold: Settled, Canceled, Depleted. The passage of time alone cannot change the status.\*

**Notes:**

- value0: PENDING Stream created but not started; tokens are in a pending state.

- value1: STREAMING Active stream where tokens are currently being streamed.

- value2: SETTLED All tokens have been streamed; recipient is due to withdraw them.

- value3: CANCELED Canceled stream; remaining tokens await recipient's withdrawal.

- value4: DEPLETED Depleted stream; all tokens have been withdrawn and/or refunded.

```solidity
enum Status {
    PENDING,
    STREAMING,
    SETTLED,
    CANCELED,
    DEPLETED
}
```
