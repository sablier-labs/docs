# MerkleLockup

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/7cb361717fd2f0289ad8d69469a3c00804b21657/src/types/MerkleLockup.sol)

## Structs

### ConstructorParams

Struct encapsulating the constructor parameters of
[SablierMerkleLockup](docs/reference/airdrops/contracts/abstracts/abstract.SablierMerkleLockup.md) contract.

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

| Name           | Type             | Description                                                                                         |
| -------------- | ---------------- | --------------------------------------------------------------------------------------------------- |
| `cancelable`   | `bool`           | Whether Lockup stream will be cancelable after claiming.                                            |
| `lockup`       | `ISablierLockup` | The address of the [SablierLockup](/reference/lockup/contracts/contract.SablierLockup.md) contract. |
| `shape`        | `string`         | The shape of the vesting stream, used for differentiating between streams in the UI.                |
| `transferable` | `bool`           | Whether Lockup stream will be transferable after claiming.                                          |
