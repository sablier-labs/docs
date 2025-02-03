# Flow

[Git Source](https://github.com/sablier-labs/flow/blob/a0fa33d2843af0817e34970cdc05822ead31daaa/src/types/DataTypes.sol)

## Structs

### Stream

Struct representing Flow streams.

_The fields are arranged like this to save gas via tight variable packing._

```solidity
struct Stream {
    uint128 balance;
    UD21x18 ratePerSecond;
    address sender;
    uint40 snapshotTime;
    bool isStream;
    bool isTransferable;
    bool isVoided;
    IERC20 token;
    uint8 tokenDecimals;
    uint256 snapshotDebtScaled;
}
```

**Properties**

| Name                 | Type      | Description                                                                                                                                                                                                                      |
| -------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `balance`            | `uint128` | The amount of tokens that are currently available in the stream, denoted in token's decimals. This is the sum of deposited amounts minus the sum of withdrawn amounts.                                                           |
| `ratePerSecond`      | `UD21x18` | The payment rate per second, denoted as a fixed-point number where 1e18 is 1 token per second. For example, to stream 1000 tokens per week, this parameter would have the value $(1000 * 10^18) / (7 days in seconds)$.          |
| `sender`             | `address` | The address streaming the tokens, with the ability to pause the stream.                                                                                                                                                          |
| `snapshotTime`       | `uint40`  | The Unix timestamp used for the ongoing debt calculation.                                                                                                                                                                        |
| `isStream`           | `bool`    | Boolean indicating if the struct entity exists.                                                                                                                                                                                  |
| `isTransferable`     | `bool`    | Boolean indicating if the stream NFT is transferable.                                                                                                                                                                            |
| `isVoided`           | `bool`    | Boolean indicating if the stream is voided. Voiding any stream is non-reversible and it cannot be restarted. Voiding an insolvent stream sets its uncovered debt to zero.                                                        |
| `token`              | `IERC20`  | The contract address of the ERC-20 token to stream.                                                                                                                                                                              |
| `tokenDecimals`      | `uint8`   | The decimals of the ERC-20 token to stream.                                                                                                                                                                                      |
| `snapshotDebtScaled` | `uint256` | The amount of tokens that the sender owed to the recipient at snapshot time, denoted as a 18-decimals fixed-point number. This, along with the ongoing debt, can be used to calculate the total debt at any given point in time. |

## Enums

### Status

Enum representing the different statuses of a stream.

Explanations for the two types of streams:

1. Streaming: when the total debt is increasing.
2. Paused: when the total debt is not increasing.

**Notes:**

- value0: STREAMING_SOLVENT Streaming stream when there is no uncovered debt.

- value1: STREAMING_INSOLVENT Streaming stream when there is uncovered debt.

- value2: PAUSED_SOLVENT Paused stream when there is no uncovered debt.

- value3: PAUSED_INSOLVENT Paused stream when there is uncovered debt.

- value4: VOIDED Paused stream with no uncovered debt and it cannot be restarted.

```solidity
enum Status {
    STREAMING_SOLVENT,
    STREAMING_INSOLVENT,
    PAUSED_SOLVENT,
    PAUSED_INSOLVENT,
    VOIDED
}
```
