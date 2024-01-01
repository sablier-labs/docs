# Lockup

[Git Source](https://github.com/sablier-labs/v2-core/blob/a4bf69cf7024006b9a324eef433f20b74597eaaf/src/types/DataTypes.sol)

Namespace for the structs used in both
[SablierV2LockupLinear](docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) and
[SablierV2LockupDynamic](docs/contracts/v2/reference/core/contract.SablierV2LockupDynamic.md).

## Structs

### Amounts

Struct encapsulating the deposit, withdrawn, and refunded amounts, all denoted in units of the asset's decimals.

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
| `deposited` | `uint128` | The initial amount deposited in the stream, net of fees.                                |
| `withdrawn` | `uint128` | The cumulative amount withdrawn from the stream.                                        |
| `refunded`  | `uint128` | The amount refunded to the sender. Unless the stream was canceled, this is always zero. |

### CreateAmounts

Struct encapsulating the deposit amount, the protocol fee amount, and the broker fee amount, all denoted in units of the
asset's decimals.

```solidity
struct CreateAmounts {
    uint128 deposit;
    uint128 protocolFee;
    uint128 brokerFee;
}
```

**Properties**

| Name          | Type      | Description                          |
| ------------- | --------- | ------------------------------------ |
| `deposit`     | `uint128` | The amount to deposit in the stream. |
| `protocolFee` | `uint128` | The protocol fee amount.             |
| `brokerFee`   | `uint128` | The broker fee amount.               |

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
