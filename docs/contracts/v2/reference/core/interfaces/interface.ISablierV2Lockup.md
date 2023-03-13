# ISablierV2Lockup

[Git Source](https://github.com/sablierhq/v2-core/blob/87a0a16c835ea8e88ddf6a8387898c91c62ab9d1/docs/contracts/v2/reference/core/interfaces)

**Inherits:** [ISablierV2Config](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Config.md), IERC721Metadata

The common interface between all Sablier V2 lockup streaming contracts.

## Functions

### getAsset

Queries the address of the ERC-20 asset used for streaming.

```solidity
function getAsset(uint256 streamId) external view returns (IERC20 asset);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

**Returns**

| Name    | Type     | Description                                                  |
| ------- | -------- | ------------------------------------------------------------ |
| `asset` | `IERC20` | The contract address of the ERC-20 asset used for streaming. |

### getDepositAmount

Queries the amount deposited in the lockup stream, in units of the asset's decimals.

```solidity
function getDepositAmount(uint256 streamId) external view returns (uint128 depositAmount);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### getEndTime

Queries the end time of the lockup stream.

```solidity
function getEndTime(uint256 streamId) external view returns (uint40 endTime);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### getRecipient

Queries the recipient of the lockup stream.

```solidity
function getRecipient(uint256 streamId) external view returns (address recipient);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### getSender

Queries the sender of the lockup stream.

```solidity
function getSender(uint256 streamId) external view returns (address sender);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### getStartTime

Queries the start time of the lockup stream.

```solidity
function getStartTime(uint256 streamId) external view returns (uint40 startTime);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### getStatus

Queries the status of the lockup stream.

```solidity
function getStatus(uint256 streamId) external view returns (Lockup.Status status);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### getWithdrawnAmount

Queries the amount withdrawn from the lockup stream, in units of the asset's decimals.

```solidity
function getWithdrawnAmount(uint256 streamId) external view returns (uint128 withdrawnAmount);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### isCancelable

Checks whether the lockup stream is cancelable or not. Notes:

- Always returns `false` if the lockup stream is not active.

```solidity
function isCancelable(uint256 streamId) external view returns (bool result);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### nextStreamId

Counter for stream ids.

```solidity
function nextStreamId() external view returns (uint256);
```

**Returns**

| Name     | Type      | Description         |
| -------- | --------- | ------------------- |
| `<none>` | `uint256` | The next stream id. |

### returnableAmountOf

Calculates the amount that the sender would be paid if the lockup stream had been canceled, in units of the asset's
decimals.

```solidity
function returnableAmountOf(uint256 streamId) external view returns (uint128 returnableAmount);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### streamedAmountOf

Calculates the amount that has been streamed to the recipient, in units of the asset's decimals.

```solidity
function streamedAmountOf(uint256 streamId) external view returns (uint128 streamedAmount);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### withdrawableAmountOf

Calculates the amount that the recipient can withdraw from the lockup stream, in units of the asset's decimals.

```solidity
function withdrawableAmountOf(uint256 streamId) external view returns (uint128 withdrawableAmount);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### burn

Burns the NFT associated with the lockup stream.

\*Emits a {Transfer} event. Notes:

- The purpose of this function is to make the integration of Sablier V2 easier. Third-party contracts don't have to
  constantly check for the existence of the NFT. They can decide to burn the NFT themselves, or not. Requirements:
- `streamId` must point to a lockup stream that is either canceled or depleted.
- The NFT must exist.
- `msg.sender` must be either an approved operator or the owner of the NFT.\*

```solidity
function burn(uint256 streamId) external;
```

**Parameters**

| Name       | Type      | Description                              |
| ---------- | --------- | ---------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream NFT to burn. |

### cancel

Cancels the lockup stream and transfers any remaining assets to the sender and the recipient.

\*Emits a {CancelLockupStream} event. Notes:

- This function will attempt to call a hook on either the sender or the recipient, depending upon who the `msg.sender`
  is, and if the resolved address is a contract. Requirements:
- `streamId` must point to an active lockup stream.
- `msg.sender` must be either the sender or the recipient of the stream (also known as the owner of the NFT).
- The lockup stream must be cancelable.\*

```solidity
function cancel(uint256 streamId) external;
```

**Parameters**

| Name       | Type      | Description                     |
| ---------- | --------- | ------------------------------- |
| `streamId` | `uint256` | The id of the stream to cancel. |

### cancelMultiple

Cancels multiple lockup streams and transfers any remaining assets to the sender and the recipient.

\*Emits multiple {CancelLockupStream} events. Notes:

- Does not revert if one of the ids points to a lockup stream that is not active or is active but not cancelable.
- This function will attempt to call a hook on either the sender or the recipient of each stream. Requirements:
- Each stream id in `streamIds` must point to an active lockup.
- `msg.sender` must be either the sender or the recipient of the stream (also known as the owner of the NFT) of every
  stream.
- Each stream must be cancelable.\*

```solidity
function cancelMultiple(uint256[] calldata streamIds) external;
```

**Parameters**

| Name        | Type        | Description                              |
| ----------- | ----------- | ---------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the lockup streams to cancel. |

### renounce

Makes the lockup stream non-cancelable.

\*Emits a {RenounceLockupStream} event. Notes:

- This is an irreversible operation.
- This function will attempt to call a hook on the recipient of the stream, if the recipient is a contract.
  Requirements:
- `streamId` must point to an active lockup stream.
- `msg.sender` must be the sender of the stream.
- The lockup stream must not be already non-cancelable.\*

```solidity
function renounce(uint256 streamId) external;
```

**Parameters**

| Name       | Type      | Description                              |
| ---------- | --------- | ---------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to renounce. |

### withdraw

Withdraws the provided amount of assets from the lockup stream to the provided address `to`.

\*Emits a {WithdrawFromLockupStream} and a {Transfer} event. Notes:

- This function will attempt to call a hook on the recipient of the stream, if the recipient is a contract.
  Requirements:
- `streamId` must point to an active lockup stream.
- `msg.sender` must be the sender of the stream, an approved operator, or the owner of the NFT (also known as the
  recipient of the stream).
- `to` must be the recipient if `msg.sender` is the sender of the stream.
- `amount` must not be zero and must not exceed the withdrawable amount.\*

```solidity
function withdraw(uint256 streamId, address to, uint128 amount) external;
```

**Parameters**

| Name       | Type      | Description                                               |
| ---------- | --------- | --------------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to withdraw.                  |
| `to`       | `address` | The address that receives the withdrawn assets.           |
| `amount`   | `uint128` | The amount to withdraw, in units of the asset's decimals. |

### withdrawMax

Withdraws the maximum withdrawable amount from the lockup stream to the provided address `to`.

\*Emits a {WithdrawFromLockupStream} and a {Transfer} event. Notes:

- All from {withdraw}. Requirements:
- All from {withdraw}.\*

```solidity
function withdrawMax(uint256 streamId, address to) external;
```

**Parameters**

| Name       | Type      | Description                                     |
| ---------- | --------- | ----------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to withdraw.        |
| `to`       | `address` | The address that receives the withdrawn assets. |

### withdrawMultiple

Withdraws assets from multiple lockup streams to the provided address `to`.

\*Emits multiple {WithdrawFromLockupStream} and {Transfer} events. Notes:

- Does not revert if one of the ids points to a lockup stream that is not active.
- This function will attempt to call a hook on the recipient of each stream. Requirements:
- The count of `streamIds` must match the count of `amounts`.
- `msg.sender` must be either the recipient of the stream (a.k.a the owner of the NFT) or an approved operator.
- Every amount in `amounts` must not be zero and must not exceed the withdrawable amount.\*

```solidity
function withdrawMultiple(uint256[] calldata streamIds, address to, uint128[] calldata amounts) external;
```

**Parameters**

| Name        | Type        | Description                                                                                          |
| ----------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| `streamIds` | `uint256[]` | The ids of the lockup streams to withdraw.                                                           |
| `to`        | `address`   | The address that receives the withdrawn assets, if the `msg.sender` is not the sender of the stream. |
| `amounts`   | `uint128[]` | The amounts to withdraw, in units of the asset's decimals.                                           |

## Events

### CancelLockupStream

Emitted when a lockup stream is canceled.

```solidity
event CancelLockupStream(
    uint256 indexed streamId,
    address indexed sender,
    address indexed recipient,
    uint128 senderAmount,
    uint128 recipientAmount
);
```

### RenounceLockupStream

Emitted when a sender makes a lockup stream non-cancelable.

```solidity
event RenounceLockupStream(uint256 indexed streamId);
```

### WithdrawFromLockupStream

Emitted when assets are withdrawn from a lockup stream.

```solidity
event WithdrawFromLockupStream(uint256 indexed streamId, address indexed to, uint128 amount);
```
