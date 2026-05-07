# MerkleLockup

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/8b6823c019ff7556ac9ad24cbb5ac62821854d2f/src/types/MerkleLockup.sol)

## Structs

### ConstructorParams

Struct encapsulating the constructor parameters of
[SablierMerkleLockup](/docs/reference/03-airdrops/contracts/abstracts/abstract.SablierMerkleLockup.md) contract.

The fields are arranged alphabetically.

```solidity
struct ConstructorParams {
    bool cancelable;
    ISablierLockup lockup;
    string shape;
    bool transferable;
}
```

**Properties**

| Name           | Type             | Description                                                                                                 |
| -------------- | ---------------- | ----------------------------------------------------------------------------------------------------------- |
| `cancelable`   | `bool`           | Whether Lockup stream will be cancelable after claiming.                                                    |
| `lockup`       | `ISablierLockup` | The address of the [SablierLockup](/docs/reference/02-lockup/contracts/contract.SablierLockup.md) contract. |
| `shape`        | `string`         | The shape of the vesting stream, used for differentiating between streams in the UI.                        |
| `transferable` | `bool`           | Whether Lockup stream will be transferable after claiming.                                                  |
