# SablierLockupState

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/7cb361717fd2f0289ad8d69469a3c00804b21657/src/abstracts/SablierLockupState.sol)

**Inherits:** [ISablierLockupState](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupState.md)

**Title:** SablierLockupState

See the documentation in
[ISablierLockupState](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupState.md).

## State Variables

### aggregateAmount

```solidity
mapping(IERC20 token => uint256 amount) public override aggregateAmount
```

### nativeToken

Retrieves the address of the ERC-20 interface of the native token, if it exists.

The native tokens on some chains have a dual interface as ERC-20. For example, on Polygon the $POL token is the native
token and has an ERC-20 version at 0x0000000000000000000000000000000000001010. This means that `address(this).balance`
returns the same value as `balanceOf(address(this))`. To avoid any unintended behavior, these tokens cannot be used in
Sablier. As an alternative, users can use the Wrapped version of the token, i.e. WMATIC, which is a standard ERC-20
token.

```solidity
address public override nativeToken
```

### nextStreamId

Counter for stream IDs, used in the create functions.

```solidity
uint256 public override nextStreamId
```

### nftDescriptor

Contract that generates the non-fungible token URI.

```solidity
ILockupNFTDescriptor public override nftDescriptor
```

### \_allowedToHook

Mapping of contracts allowed to hook to Sablier when a stream is canceled or when tokens are withdrawn.

```solidity
mapping(address recipient => bool allowed) internal _allowedToHook
```

### \_cliffs

Cliff timestamp mapped by stream IDs, used in LL streams.

```solidity
mapping(uint256 streamId => uint40 cliffTime) internal _cliffs
```

### \_granularities

Granularity mapped by stream IDs, used in LL streams.

```solidity
mapping(uint256 streamId => uint40 granularity) internal _granularities
```

### \_priceGatedUnlockParams

Unlock parameters mapped by stream IDs, used in LPG streams.

```solidity
mapping(uint256 streamId => LockupPriceGated.UnlockParams unlockParams) internal _priceGatedUnlockParams
```

### \_segments

Stream segments mapped by stream IDs, used in LD streams.

```solidity
mapping(uint256 streamId => LockupDynamic.Segment[] segments) internal _segments
```

### \_streams

Lockup streams mapped by unsigned integers.

```solidity
mapping(uint256 id => Lockup.Stream stream) internal _streams
```

### \_tranches

Stream tranches mapped by stream IDs, used in LT streams.

```solidity
mapping(uint256 streamId => LockupTranched.Tranche[] tranches) internal _tranches
```

### \_unlockAmounts

Unlock amounts mapped by stream IDs, used in LL streams.

```solidity
mapping(uint256 streamId => LockupLinear.UnlockAmounts unlockAmounts) internal _unlockAmounts
```

## Functions

### modelCheck

Checks that actual model and expected model are equal.

```solidity
modifier modelCheck(Lockup.Model actualModel, Lockup.Model expectedModel) ;
```

### notNull

Checks that `streamId` does not reference a null stream.

```solidity
modifier notNull(uint256 streamId) ;
```

### constructor

```solidity
constructor(address initialNFTDescriptor) ;
```

**Parameters**

| Name                   | Type      | Description                                |
| ---------------------- | --------- | ------------------------------------------ |
| `initialNFTDescriptor` | `address` | The address of the initial NFT descriptor. |

### getCliffTime

Retrieves the stream's cliff time, which is a Unix timestamp. A value of zero means there is no cliff.

Reverts if `streamId` references either a null stream or a non-LL stream.

```solidity
function getCliffTime(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    modelCheck(_streams[streamId].lockupModel, Lockup.Model.LOCKUP_LINEAR)
    returns (uint40 cliffTime);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getDepositedAmount

Retrieves the amount deposited in the stream, denoted in units of the token's decimals.

Reverts if `streamId` references a null stream.

```solidity
function getDepositedAmount(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (uint128 depositedAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getEndTime

Retrieves the stream's end time, which is a Unix timestamp.

Reverts if `streamId` references a null stream.

```solidity
function getEndTime(uint256 streamId) external view override notNull(streamId) returns (uint40 endTime);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getGranularity

Retrieves the smallest step in time between two consecutive token unlocks.

Reverts if `streamId` references either a null stream or a non-LL stream.

```solidity
function getGranularity(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    modelCheck(_streams[streamId].lockupModel, Lockup.Model.LOCKUP_LINEAR)
    returns (uint40 granularity);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getLockupModel

Retrieves the distribution models used to create the stream.

Reverts if `streamId` references a null stream.

```solidity
function getLockupModel(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (Lockup.Model lockupModel);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getPriceGatedUnlockParams

Retrieves the unlock parameters of a price-gated stream.

Reverts if `streamId` references either a null stream or a non-LPG stream.

```solidity
function getPriceGatedUnlockParams(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    modelCheck(_streams[streamId].lockupModel, Lockup.Model.LOCKUP_PRICE_GATED)
    returns (LockupPriceGated.UnlockParams memory unlockParams);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

**Returns**

| Name           | Type                            | Description                                       |
| -------------- | ------------------------------- | ------------------------------------------------- |
| `unlockParams` | `LockupPriceGated.UnlockParams` | See the documentation in {LockupPriceGated} type. |

### getRefundedAmount

Retrieves the amount refunded to the sender after a cancellation, denoted in units of the token's decimals. This amount
is always zero unless the stream was canceled.

Reverts if `streamId` references a null stream.

```solidity
function getRefundedAmount(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (uint128 refundedAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getSegments

Retrieves the segments used to compose the dynamic distribution function.

Reverts if `streamId` references either a null stream or a non-LD stream.

```solidity
function getSegments(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    modelCheck(_streams[streamId].lockupModel, Lockup.Model.LOCKUP_DYNAMIC)
    returns (LockupDynamic.Segment[] memory segments);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

**Returns**

| Name       | Type                      | Description                                    |
| ---------- | ------------------------- | ---------------------------------------------- |
| `segments` | `LockupDynamic.Segment[]` | See the documentation in {LockupDynamic} type. |

### getSender

Retrieves the stream's sender.

Reverts if `streamId` references a null stream.

```solidity
function getSender(uint256 streamId) external view override notNull(streamId) returns (address sender);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getStartTime

Retrieves the stream's start time, which is a Unix timestamp.

Reverts if `streamId` references a null stream.

```solidity
function getStartTime(uint256 streamId) external view override notNull(streamId) returns (uint40 startTime);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getTranches

Retrieves the tranches used to compose the tranched distribution function.

Reverts if `streamId` references either a null stream or a non-LT stream.

```solidity
function getTranches(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    modelCheck(_streams[streamId].lockupModel, Lockup.Model.LOCKUP_TRANCHED)
    returns (LockupTranched.Tranche[] memory tranches);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

**Returns**

| Name       | Type                       | Description                                     |
| ---------- | -------------------------- | ----------------------------------------------- |
| `tranches` | `LockupTranched.Tranche[]` | See the documentation in {LockupTranched} type. |

### getUnderlyingToken

Retrieves the address of the underlying ERC-20 token being distributed.

Reverts if `streamId` references a null stream.

```solidity
function getUnderlyingToken(uint256 streamId) external view override notNull(streamId) returns (IERC20 token);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getUnlockAmounts

Retrieves the unlock amounts used to compose the linear distribution function.

Reverts if `streamId` references either a null stream or a non-LL stream.

```solidity
function getUnlockAmounts(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    modelCheck(_streams[streamId].lockupModel, Lockup.Model.LOCKUP_LINEAR)
    returns (LockupLinear.UnlockAmounts memory unlockAmounts);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

**Returns**

| Name            | Type                         | Description                                   |
| --------------- | ---------------------------- | --------------------------------------------- |
| `unlockAmounts` | `LockupLinear.UnlockAmounts` | See the documentation in {LockupLinear} type. |

### getWithdrawnAmount

Retrieves the amount withdrawn from the stream, denoted in units of the token's decimals.

Reverts if `streamId` references a null stream.

```solidity
function getWithdrawnAmount(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (uint128 withdrawnAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### isAllowedToHook

Retrieves a flag indicating whether the provided address is a contract allowed to hook to Sablier when a stream is
canceled or when tokens are withdrawn.

See [ISablierLockupRecipient](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupRecipient.md) for more
information.

```solidity
function isAllowedToHook(address recipient) external view returns (bool result);
```

### isCancelable

Retrieves a flag indicating whether the stream can be canceled. When the stream is cold, this flag is always `false`.

Reverts if `streamId` references a null stream.

```solidity
function isCancelable(uint256 streamId) external view override notNull(streamId) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### isDepleted

Retrieves a flag indicating whether the stream is depleted.

Reverts if `streamId` references a null stream.

```solidity
function isDepleted(uint256 streamId) external view override notNull(streamId) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### isStream

Retrieves a flag indicating whether the stream exists.

Does not revert if `streamId` references a null stream.

```solidity
function isStream(uint256 streamId) external view override returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### isTransferable

Retrieves a flag indicating whether the stream NFT can be transferred.

Reverts if `streamId` references a null stream.

```solidity
function isTransferable(uint256 streamId) external view override notNull(streamId) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### wasCanceled

Retrieves a flag indicating whether the stream was canceled.

Reverts if `streamId` references a null stream.

```solidity
function wasCanceled(uint256 streamId) external view override notNull(streamId) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### \_statusOf

Retrieves the stream's status without performing a null check.

```solidity
function _statusOf(uint256 streamId) internal view returns (Lockup.Status);
```

### \_streamedAmountOf

Calculates the streamed amount of the stream.

This function is implemented by child contract. The logic varies according to the distribution model.

```solidity
function _streamedAmountOf(uint256 streamId) internal view virtual returns (uint128);
```

### \_create

This function is implemented by [SablierLockup](/docs/reference/lockup/contracts/contract.SablierLockup.md) and is used
in the [SablierLockupDynamic](docs/reference/lockup/contracts/abstracts/abstract.SablierLockupDynamic.md),
[SablierLockupLinear](docs/reference/lockup/contracts/abstracts/abstract.SablierLockupLinear.md) and
[SablierLockupTranched](docs/reference/lockup/contracts/abstracts/abstract.SablierLockupTranched.md) contracts.

It updates state variables based on the stream parameters, mints an NFT to the recipient, bumps stream ID, and transfers
the deposit amount.

```solidity
function _create(
    bool cancelable,
    uint128 depositAmount,
    Lockup.Model lockupModel,
    address recipient,
    address sender,
    uint256 streamId,
    Lockup.Timestamps memory timestamps,
    IERC20 token,
    bool transferable
)
    internal
    virtual;
```

### \_modelCheck

Reverts if actual model and expected model are not equal.

```solidity
function _modelCheck(Lockup.Model actualModel, Lockup.Model expectedModel) private pure;
```

### \_notNull

A private function is used instead of inlining this logic in a 3 because Solidity copies modifiers into every function
that uses them.

```solidity
function _notNull(uint256 streamId) private view;
```
