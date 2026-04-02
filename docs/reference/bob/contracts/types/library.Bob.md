# Bob

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/types/Bob.sol)

Namespace for the structs and enums used in the Sablier Bob protocol.

## Structs

### Vault

Struct encapsulating all the configuration and state of a vault.

The fields are arranged for gas optimization via tight variable packing.

```solidity
struct Vault {
    // slot 0
    IERC20 token;
    uint40 expiry;
    uint40 lastSyncedAt;
    // slot 1
    IBobVaultShare shareToken;
    // slot 2
    AggregatorV3Interface oracle;
    // slot 3
    ISablierBobAdapter adapter;
    bool isStakedInAdapter;
    // slot 4
    uint128 targetPrice;
    uint128 lastSyncedPrice;
}
```

**Properties**

| Name                | Type                    | Description                                                                           |
| ------------------- | ----------------------- | ------------------------------------------------------------------------------------- |
| `token`             | `IERC20`                | The ERC-20 token accepted for deposits in this vault.                                 |
| `expiry`            | `uint40`                | The Unix timestamp when the vault expires.                                            |
| `lastSyncedAt`      | `uint40`                | The Unix timestamp when the oracle price was last synced.                             |
| `shareToken`        | `IBobVaultShare`        | The address of ERC-20 token representing shares in this vault.                        |
| `oracle`            | `AggregatorV3Interface` | The address of the price oracle for the deposit token, provided by the vault creator. |
| `adapter`           | `ISablierBobAdapter`    | The adapter set for this vault, can be used to take action on the deposit token.      |
| `isStakedInAdapter` | `bool`                  | Whether the deposit token is staked with the adapter or not.                          |
| `targetPrice`       | `uint128`               | The target price at which the vault settles, denoted in 8 decimals where 1e8 is $1.   |
| `lastSyncedPrice`   | `uint128`               | The most recent price fetched from the oracle, denoted in 8 decimals where 1e8 is $1. |

## Enums

### Status

Enum representing the different statuses of a vault.

**Notes:**

- value0: ACTIVE Vault is open for deposits.

- value1: EXPIRED Vault has end time less than or equal to current timestamp.

- value2: SETTLED Vault has target price less than or equal to last synced price.

```solidity
enum Status {
    ACTIVE,
    EXPIRED,
    SETTLED
}
```
