# ISablierLockupState

[Git Source](https://github.com/sablier-labs/lockup/blob/58eaac45c20c57a93b73d887c714e68f061ec3e6/src/interfaces/ISablierLockupState.sol)

Contract with state variables (storage and constants) for the
[SablierLockup](/docs/reference/lockup/contracts/contract.SablierLockup.md) contract, their respective getters and
helpful modifiers.

## Functions

### aggregateAmount

Retrieves the aggregate amount across all streams, denoted in units of the token's decimals.

_If tokens are directly transferred to the contract without using the stream creation functions, the ERC-20 balance may
be greater than the aggregate amount._

```solidity
function aggregateAmount(IERC20 token) external view returns (uint256);
```

**Parameters**

| Name    | Type     | Description                     |
| ------- | -------- | ------------------------------- |
| `token` | `IERC20` | The ERC-20 token for the query. |

### getCliffTime

Retrieves the stream's cliff time, which is a Unix timestamp. A value of zero means there is no cliff.

_Reverts if `streamId` references either a null stream or a non-LL stream._

```solidity
function getCliffTime(uint256 streamId) external view returns (uint40 cliffTime);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getDepositedAmount

Retrieves the amount deposited in the stream, denoted in units of the token's decimals.

_Reverts if `streamId` references a null stream._

```solidity
function getDepositedAmount(uint256 streamId) external view returns (uint128 depositedAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getEndTime

Retrieves the stream's end time, which is a Unix timestamp.

_Reverts if `streamId` references a null stream._

```solidity
function getEndTime(uint256 streamId) external view returns (uint40 endTime);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getLockupModel

Retrieves the distribution models used to create the stream.

_Reverts if `streamId` references a null stream._

```solidity
function getLockupModel(uint256 streamId) external view returns (Lockup.Model lockupModel);
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
function getRefundedAmount(uint256 streamId) external view returns (uint128 refundedAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getSegments

Retrieves the segments used to compose the dynamic distribution function.

_Reverts if `streamId` references either a null stream or a non-LD stream._

```solidity
function getSegments(uint256 streamId) external view returns (LockupDynamic.Segment[] memory segments);
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
function getSender(uint256 streamId) external view returns (address sender);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getStartTime

Retrieves the stream's start time, which is a Unix timestamp.

_Reverts if `streamId` references a null stream._

```solidity
function getStartTime(uint256 streamId) external view returns (uint40 startTime);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getTranches

Retrieves the tranches used to compose the tranched distribution function.

_Reverts if `streamId` references either a null stream or a non-LT stream._

```solidity
function getTranches(uint256 streamId) external view returns (LockupTranched.Tranche[] memory tranches);
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
function getUnderlyingToken(uint256 streamId) external view returns (IERC20 token);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getUnlockAmounts

Retrieves the unlock amounts used to compose the linear distribution function.

_Reverts if `streamId` references either a null stream or a non-LL stream._

```solidity
function getUnlockAmounts(uint256 streamId) external view returns (LockupLinear.UnlockAmounts memory unlockAmounts);
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
function getWithdrawnAmount(uint256 streamId) external view returns (uint128 withdrawnAmount);
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
function isCancelable(uint256 streamId) external view returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### isDepleted

Retrieves a flag indicating whether the stream is depleted.

_Reverts if `streamId` references a null stream._

```solidity
function isDepleted(uint256 streamId) external view returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### isStream

Retrieves a flag indicating whether the stream exists.

_Does not revert if `streamId` references a null stream._

```solidity
function isStream(uint256 streamId) external view returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### isTransferable

Retrieves a flag indicating whether the stream NFT can be transferred.

_Reverts if `streamId` references a null stream._

```solidity
function isTransferable(uint256 streamId) external view returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### nativeToken

Retrieves the address of the ERC-20 interface of the native token, if it exists.

_The native tokens on some chains have a dual interface as ERC-20. For example, on Polygon the $POL token is the native
token and has an ERC-20 version at 0x0000000000000000000000000000000000001010. This means that `address(this).balance`
returns the same value as `balanceOf(address(this))`. To avoid any unintended behavior, these tokens cannot be used in
Sablier. As an alternative, users can use the Wrapped version of the token, i.e. WMATIC, which is a standard ERC-20
token._

```solidity
function nativeToken() external view returns (address);
```

### nextStreamId

Counter for stream IDs, used in the create functions.

```solidity
function nextStreamId() external view returns (uint256);
```

### nftDescriptor

Contract that generates the non-fungible token URI.

```solidity
function nftDescriptor() external view returns (ILockupNFTDescriptor);
```

### wasCanceled

Retrieves a flag indicating whether the stream was canceled.

_Reverts if `streamId` references a null stream._

```solidity
function wasCanceled(uint256 streamId) external view returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |
