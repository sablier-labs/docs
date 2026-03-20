# ISablierLockupPriceGated

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/003a71932c0e26e767a02c21205a077469406ac8/src/interfaces/ISablierLockupPriceGated.sol)

**Inherits:** [ISablierLockupState](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupState.md)

**Title:** ISablierLockupPriceGated

Creates Lockup streams with price-gated distribution model.

## Functions

### createWithTimestampsLPG

Creates a stream with the provided start time and end time. The stream is funded by `msg.sender` and is wrapped in an
ERC-721 NFT.

Emits a {Transfer},
[CreateLockupPriceGatedStream](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupPriceGated.md#createlockuppricegatedstream)
and {MetadataUpdate} event. Notes:

- The recipient can withdraw the full deposited amount when either:

1. The oracle price reaches or exceeds the target price, OR
2. Current time is greater than or equal to the stream's end time.

- The sender can cancel the stream when price is less than target price AND end time is in the future.
- The function does not check if the provided oracle reports the price for the deposited token. It may be possible that
  stream creator has used a different token for the oracle. In such cases, integrators and recipients are requested to
  verify the oracle correctness on their own.
- The LPG model does not support a "createWithDuration" function because the
  [SablierLockup](/docs/reference/lockup/contracts/contract.SablierLockup.md) contract is at the size limit. If the EVM
  contract size limit is increased in the future, this function will be added. Requirements:
- Must not be delegate called.
- `params.depositAmount` must be greater than zero.
- `params.sender` must not be the zero address.
- `params.recipient` must not be the zero address.
- `params.timestamps.start` must not be zero.
- `params.timestamps.start` must be less than `params.timestamps.end`.
- `unlockParams.oracle` must implement Chainlink's {AggregatorV3Interface} interface.
- `unlockParams.oracle` must return a non-zero value no greater than 36 when the `decimals()` function is called.
- `unlockParams.oracle` must return a positive price when the `latestRoundData()` function is called.
- `unlockParams.targetPrice` must be greater than the current oracle price.
- `msg.sender` must have allowed this contract to spend at least `params.depositAmount` tokens.
- `params.token` must not be the native token.
- `params.shape.length` must not be greater than 32 characters.

```solidity
function createWithTimestampsLPG(
    Lockup.CreateWithTimestamps calldata params,
    LockupPriceGated.UnlockParams calldata unlockParams
)
    external
    payable
    returns (uint256 streamId);
```

**Parameters**

| Name           | Type                            | Description                                                                          |
| -------------- | ------------------------------- | ------------------------------------------------------------------------------------ |
| `params`       | `Lockup.CreateWithTimestamps`   | Struct encapsulating the function parameters, which are documented in {Lockup} type. |
| `unlockParams` | `LockupPriceGated.UnlockParams` | Struct encapsulating the unlock parameters, documented in {LockupPriceGated}.        |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

## Events

### CreateLockupPriceGatedStream

Emitted when an LPG stream is created.

```solidity
event CreateLockupPriceGatedStream(
    uint256 indexed streamId,
    AggregatorV3Interface indexed oracle,
    uint128 targetPrice
);
```

**Parameters**

| Name          | Type                    | Description                                                                                                |
| ------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| `streamId`    | `uint256`               | The ID of the newly created stream.                                                                        |
| `oracle`      | `AggregatorV3Interface` | The price feed oracle used for retrieving the latest price.                                                |
| `targetPrice` | `uint128`               | The price that must be reached to unlock the tokens, denominated in Chainlink's 8-decimal, where 1e8 = $1. |
