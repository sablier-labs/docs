# SablierLockupState

[Git Source](https://github.com/sablier-labs/lockup/blob/58eaac45c20c57a93b73d887c714e68f061ec3e6/src/abstracts/SablierLockupState.sol)

**Inherits:** [ISablierLockupState](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupState.md)

See the documentation in
[ISablierLockupState](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupState.md).

## State Variables

### aggregateAmount

Retrieves the aggregate amount across all streams, denoted in units of the token's decimals.

_If tokens are directly transferred to the contract without using the stream creation functions, the ERC-20 balance may
be greater than the aggregate amount._

```solidity
mapping(IERC20 token => uint256 amount) public override aggregateAmount;
```

### nativeToken

Retrieves the address of the ERC-20 interface of the native token, if it exists.

_The native tokens on some chains have a dual interface as ERC-20. For example, on Polygon the $POL token is the native
token and has an ERC-20 version at 0x0000000000000000000000000000000000001010. This means that `address(this).balance`
returns the same value as `balanceOf(address(this))`. To avoid any unintended behavior, these tokens cannot be used in
Sablier. As an alternative, users can use the Wrapped version of the token, i.e. WMATIC, which is a standard ERC-20
token._

```solidity
address public override nativeToken;
```

### nextStreamId

Counter for stream IDs, used in the create functions.

```solidity
uint256 public override nextStreamId;
```

### nftDescriptor

Contract that generates the non-fungible token URI.

```solidity
ILockupNFTDescriptor public override nftDescriptor;
```

### \_allowedToHook

_Mapping of contracts allowed to hook to Sablier when a stream is canceled or when tokens are withdrawn._

```solidity
mapping(address recipient => bool allowed) internal _allowedToHook;
```

### \_cliffs

_Cliff timestamp mapped by stream IDs, used in LL streams._

```solidity
mapping(uint256 streamId => uint40 cliffTime) internal _cliffs;
```

### \_segments

_Stream segments mapped by stream IDs, used in LD streams._

```solidity
mapping(uint256 streamId => LockupDynamic.Segment[] segments) internal _segments;
```

### \_streams

_Lockup streams mapped by unsigned integers._

```solidity
mapping(uint256 id => Lockup.Stream stream) internal _streams;
```

### \_tranches

_Stream tranches mapped by stream IDs, used in LT streams._

```solidity
mapping(uint256 streamId => LockupTranched.Tranche[] tranches) internal _tranches;
```

### \_unlockAmounts

_Unlock amounts mapped by stream IDs, used in LL streams._

```solidity
mapping(uint256 streamId => LockupLinear.UnlockAmounts unlockAmounts) internal _unlockAmounts;
```

## Functions

### notNull

_Checks that `streamId` does not reference a null stream._

```solidity
modifier notNull(uint256 streamId);
```

### constructor

```solidity
constructor(address initialNFTDescriptor);
```

**Parameters**

| Name                   | Type      | Description                                |
| ---------------------- | --------- | ------------------------------------------ |
| `initialNFTDescriptor` | `address` | The address of the initial NFT descriptor. |

### getCliffTime

Retrieves the stream's cliff time, which is a Unix timestamp. A value of zero means there is no cliff.

_Reverts if `streamId` references either a null stream or a non-LL stream._

```solidity
function getCliffTime(uint256 streamId) external view override notNull(streamId) returns (uint40 cliffTime);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getDepositedAmount

Retrieves the amount deposited in the stream, denoted in units of the token's decimals.

_Reverts if `streamId` references a null stream._

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

_Reverts if `streamId` references a null stream._

```solidity
function getEndTime(uint256 streamId) external view override notNull(streamId) returns (uint40 endTime);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getLockupModel

Retrieves the distribution models used to create the stream.

_Reverts if `streamId` references a null stream._

```solidity
function getLockupModel(uint256 streamId) external view override notNull(streamId) returns (Lockup.Model lockupModel);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getRefundedAmount

Retrieves the amount refunded to the sender after a cancellation, denoted in units of the token's decimals. This amount
is always zero unless the stream was canceled.

_Reverts if `streamId` references a null stream._

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

_Reverts if `streamId` references either a null stream or a non-LD stream._

```solidity
function getSegments(uint256 streamId)
    external
    view
    override
    notNull(streamId)
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

_Reverts if `streamId` references a null stream._

```solidity
function getSender(uint256 streamId) external view override notNull(streamId) returns (address sender);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getStartTime

Retrieves the stream's start time, which is a Unix timestamp.

_Reverts if `streamId` references a null stream._

```solidity
function getStartTime(uint256 streamId) external view override notNull(streamId) returns (uint40 startTime);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getTranches

Retrieves the tranches used to compose the tranched distribution function.

_Reverts if `streamId` references either a null stream or a non-LT stream._

```solidity
function getTranches(uint256 streamId)
    external
    view
    override
    notNull(streamId)
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

_Reverts if `streamId` references a null stream._

```solidity
function getUnderlyingToken(uint256 streamId) external view override notNull(streamId) returns (IERC20 token);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getUnlockAmounts

Retrieves the unlock amounts used to compose the linear distribution function.

_Reverts if `streamId` references either a null stream or a non-LL stream._

```solidity
function getUnlockAmounts(uint256 streamId)
    external
    view
    override
    notNull(streamId)
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

_Reverts if `streamId` references a null stream._

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

_See [ISablierLockupRecipient](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupRecipient.md) for
more information._

```solidity
function isAllowedToHook(address recipient) external view returns (bool result);
```

### isCancelable

Retrieves a flag indicating whether the stream can be canceled. When the stream is cold, this flag is always `false`.

_Reverts if `streamId` references a null stream._

```solidity
function isCancelable(uint256 streamId) external view override notNull(streamId) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### isDepleted

Retrieves a flag indicating whether the stream is depleted.

_Reverts if `streamId` references a null stream._

```solidity
function isDepleted(uint256 streamId) external view override notNull(streamId) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### isStream

Retrieves a flag indicating whether the stream exists.

_Does not revert if `streamId` references a null stream._

```solidity
function isStream(uint256 streamId) external view override returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### isTransferable

Retrieves a flag indicating whether the stream NFT can be transferred.

_Reverts if `streamId` references a null stream._

```solidity
function isTransferable(uint256 streamId) external view override notNull(streamId) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### wasCanceled

Retrieves a flag indicating whether the stream was canceled.

_Reverts if `streamId` references a null stream._

```solidity
function wasCanceled(uint256 streamId) external view override notNull(streamId) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### \_statusOf

_Retrieves the stream's status without performing a null check._

```solidity
function _statusOf(uint256 streamId) internal view returns (Lockup.Status);
```

### \_streamedAmountOf

Calculates the streamed amount of the stream.

_This function is implemented by child contract. The logic varies according to the distribution model._

```solidity
function _streamedAmountOf(uint256 streamId) internal view virtual returns (uint128);
```

### \_create

This function is implemented by [SablierLockup](/docs/reference/lockup/contracts/contract.SablierLockup.md) and is used
in the [SablierLockupDynamic](docs/reference/lockup/contracts/abstracts/abstract.SablierLockupDynamic.md),
[SablierLockupLinear](docs/reference/lockup/contracts/abstracts/abstract.SablierLockupLinear.md) and
[SablierLockupTranched](docs/reference/lockup/contracts/abstracts/abstract.SablierLockupTranched.md) contracts.

_It updates state variables based on the stream parameters, mints an NFT to the recipient, bumps stream ID, and
transfers the deposit amount._

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

### \_notNull

_A private function is used instead of inlining this logic in a modifier because Solidity copies modifiers into every
function that uses them._

```solidity
function _notNull(uint256 streamId) private view;
```
