# ISablierLockupBase

[Git Source](https://github.com/sablier-labs/lockup/blob/463278dbb461b1733d6424cf0aeee3b8d6bc036a/src/interfaces/ISablierLockupBase.sol)

**Inherits:** [IAdminable](/docs/reference/lockup/contracts/interfaces/interface.IAdminable.md),
[IBatch](/docs/reference/lockup/contracts/interfaces/interface.IBatch.md), IERC4906, IERC721Metadata

Common logic between all Sablier Lockup contracts.

## Functions

### MAX_BROKER_FEE

Retrieves the maximum broker fee that can be charged by the broker, denoted as a fixed-point number where 1e18 is 100%.

_This value is hard coded as a constant._

```solidity
function MAX_BROKER_FEE() external view returns (UD60x18);
```

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

### getRecipient

Retrieves the stream's recipient.

_Reverts if the NFT has been burned._

```solidity
function getRecipient(uint256 streamId) external view returns (address recipient);
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

### isCold

Retrieves a flag indicating whether the stream is cold, i.e. settled, canceled, or depleted.

_Reverts if `streamId` references a null stream._

```solidity
function isCold(uint256 streamId) external view returns (bool result);
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

### isWarm

Retrieves a flag indicating whether the stream is warm, i.e. either pending or streaming.

_Reverts if `streamId` references a null stream._

```solidity
function isWarm(uint256 streamId) external view returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

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

### refundableAmountOf

Calculates the amount that the sender would be refunded if the stream were canceled, denoted in units of the token's
decimals.

_Reverts if `streamId` references a null stream._

```solidity
function refundableAmountOf(uint256 streamId) external view returns (uint128 refundableAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### statusOf

Retrieves the stream's status.

_Reverts if `streamId` references a null stream._

```solidity
function statusOf(uint256 streamId) external view returns (Lockup.Status status);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### streamedAmountOf

Calculates the amount streamed to the recipient, denoted in units of the token's decimals.

Reverts if `streamId` references a null stream. Notes:

- Upon cancellation of the stream, the amount streamed is calculated as the difference between the deposited amount and
  the refunded amount. Ultimately, when the stream becomes depleted, the streamed amount is equivalent to the total
  amount withdrawn.

```solidity
function streamedAmountOf(uint256 streamId) external view returns (uint128 streamedAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

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

### withdrawableAmountOf

Calculates the amount that the recipient can withdraw from the stream, denoted in units of the token's decimals.

_Reverts if `streamId` references a null stream._

```solidity
function withdrawableAmountOf(uint256 streamId) external view returns (uint128 withdrawableAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### allowToHook

Allows a recipient contract to hook to Sablier when a stream is canceled or when tokens are withdrawn. Useful for
implementing contracts that hold streams on behalf of users, such as vaults or staking contracts.

Emits an [AllowToHook](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupBase.md#allowtohook) event.
Notes:

- Does not revert if the contract is already on the allowlist.
- This is an irreversible operation. The contract cannot be removed from the allowlist. Requirements:
- `msg.sender` must be the contract admin.
- `recipient` must have a non-zero code size.
- `recipient` must implement
  [ISablierLockupRecipient](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupRecipient.md).

```solidity
function allowToHook(address recipient) external;
```

**Parameters**

| Name        | Type      | Description                                     |
| ----------- | --------- | ----------------------------------------------- |
| `recipient` | `address` | The address of the contract to allow for hooks. |

### burn

Burns the NFT associated with the stream.

Emits a {Transfer} and {MetadataUpdate} event. Requirements:

- Must not be delegate called.
- `streamId` must reference a depleted stream.
- The NFT must exist.
- `msg.sender` must be either the NFT owner or an approved third party.

```solidity
function burn(uint256 streamId) external payable;
```

**Parameters**

| Name       | Type      | Description                       |
| ---------- | --------- | --------------------------------- |
| `streamId` | `uint256` | The ID of the stream NFT to burn. |

### cancel

Cancels the stream and refunds any remaining tokens to the sender.

Emits a {Transfer}, {CancelLockupStream} and {MetadataUpdate} event. Notes:

- If there any tokens left for the recipient to withdraw, the stream is marked as canceled. Otherwise, the stream is
  marked as depleted.
- If the address is on the allowlist, this function will invoke a hook on the recipient. Requirements:
- Must not be delegate called.
- The stream must be warm and cancelable.
- `msg.sender` must be the stream's sender.

```solidity
function cancel(uint256 streamId) external payable;
```

**Parameters**

| Name       | Type      | Description                     |
| ---------- | --------- | ------------------------------- |
| `streamId` | `uint256` | The ID of the stream to cancel. |

### cancelMultiple

Cancels multiple streams and refunds any remaining tokens to the sender.

Emits multiple {Transfer}, {CancelLockupStream} and {MetadataUpdate} events. Notes:

- Refer to the notes in {cancel}. Requirements:
- All requirements from {cancel} must be met for each stream.

```solidity
function cancelMultiple(uint256[] calldata streamIds) external payable;
```

**Parameters**

| Name        | Type        | Description                       |
| ----------- | ----------- | --------------------------------- |
| `streamIds` | `uint256[]` | The IDs of the streams to cancel. |

### collectFees

Collects the accrued fees by transferring them to the contract admin.

Emits a [CollectFees](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupBase.md#collectfees) event.
Notes:

- If the admin is a contract, it must be able to receive native token payments, e.g., ETH for Ethereum Mainnet.

```solidity
function collectFees() external;
```

### renounce

Removes the right of the stream's sender to cancel the stream.

Emits a
[RenounceLockupStream](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupBase.md#renouncelockupstream)
event. Notes:

- This is an irreversible operation. Requirements:
- Must not be delegate called.
- `streamId` must reference a warm stream.
- `msg.sender` must be the stream's sender.
- The stream must be cancelable.

```solidity
function renounce(uint256 streamId) external payable;
```

**Parameters**

| Name       | Type      | Description                       |
| ---------- | --------- | --------------------------------- |
| `streamId` | `uint256` | The ID of the stream to renounce. |

### renounceMultiple

Renounces multiple streams.

Emits multiple
[RenounceLockupStream](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupBase.md#renouncelockupstream)
events. Notes:

- Refer to the notes in {renounce}. Requirements:
- All requirements from {renounce} must be met for each stream.

```solidity
function renounceMultiple(uint256[] calldata streamIds) external payable;
```

**Parameters**

| Name        | Type        | Description                         |
| ----------- | ----------- | ----------------------------------- |
| `streamIds` | `uint256[]` | An array of stream IDs to renounce. |

### setNFTDescriptor

Sets a new NFT descriptor contract, which produces the URI describing the Sablier stream NFTs.

Emits a [SetNFTDescriptor](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupBase.md#setnftdescriptor)
and {BatchMetadataUpdate} event. Notes:

- Does not revert if the NFT descriptor is the same. Requirements:
- `msg.sender` must be the contract admin.

```solidity
function setNFTDescriptor(ILockupNFTDescriptor newNFTDescriptor) external;
```

**Parameters**

| Name               | Type                   | Description                                     |
| ------------------ | ---------------------- | ----------------------------------------------- |
| `newNFTDescriptor` | `ILockupNFTDescriptor` | The address of the new NFT descriptor contract. |

### withdraw

Withdraws the provided amount of tokens from the stream to the `to` address.

Emits a {Transfer}, {WithdrawFromLockupStream} and {MetadataUpdate} event. Notes:

- If `msg.sender` is not the recipient and the address is on the allowlist, this function will invoke a hook on the
  recipient. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null or depleted stream.
- `to` must not be the zero address.
- `amount` must be greater than zero and must not exceed the withdrawable amount.
- `to` must be the recipient if `msg.sender` is not the stream's recipient or an approved third party.

```solidity
function withdraw(uint256 streamId, address to, uint128 amount) external payable;
```

**Parameters**

| Name       | Type      | Description                                                       |
| ---------- | --------- | ----------------------------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to withdraw from.                            |
| `to`       | `address` | The address receiving the withdrawn tokens.                       |
| `amount`   | `uint128` | The amount to withdraw, denoted in units of the token's decimals. |

### withdrawMax

Withdraws the maximum withdrawable amount from the stream to the provided address `to`.

Emits a {Transfer}, {WithdrawFromLockupStream} and {MetadataUpdate} event. Notes:

- Refer to the notes in {withdraw}. Requirements:
- Refer to the requirements in {withdraw}.

```solidity
function withdrawMax(uint256 streamId, address to) external payable returns (uint128 withdrawnAmount);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to withdraw from.      |
| `to`       | `address` | The address receiving the withdrawn tokens. |

**Returns**

| Name              | Type      | Description                                                     |
| ----------------- | --------- | --------------------------------------------------------------- |
| `withdrawnAmount` | `uint128` | The amount withdrawn, denoted in units of the token's decimals. |

### withdrawMaxAndTransfer

Withdraws the maximum withdrawable amount from the stream to the current recipient, and transfers the NFT to
`newRecipient`.

Emits a
[WithdrawFromLockupStream](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupBase.md#withdrawfromlockupstream),
{Transfer} and {MetadataUpdate} event. Notes:

- If the withdrawable amount is zero, the withdrawal is skipped.
- Refer to the notes in {withdraw}. Requirements:
- `msg.sender` must be either the NFT owner or an approved third party.
- Refer to the requirements in {withdraw}.
- Refer to the requirements in {IERC721.transferFrom}.

```solidity
function withdrawMaxAndTransfer(
    uint256 streamId,
    address newRecipient
)
    external
    payable
    returns (uint128 withdrawnAmount);
```

**Parameters**

| Name           | Type      | Description                                     |
| -------------- | --------- | ----------------------------------------------- |
| `streamId`     | `uint256` | The ID of the stream NFT to transfer.           |
| `newRecipient` | `address` | The address of the new owner of the stream NFT. |

**Returns**

| Name              | Type      | Description                                                     |
| ----------------- | --------- | --------------------------------------------------------------- |
| `withdrawnAmount` | `uint128` | The amount withdrawn, denoted in units of the token's decimals. |

### withdrawMultiple

Withdraws tokens from streams to the recipient of each stream.

Emits multiple {Transfer}, {WithdrawFromLockupStream} and {MetadataUpdate} events. For each stream that reverted the
withdrawal, it emits an
[InvalidWithdrawalInWithdrawMultiple](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupBase.md#invalidwithdrawalinwithdrawmultiple)
event. Notes:

- This function attempts to call a hook on the recipient of each stream, unless `msg.sender` is the recipient.
  Requirements:
- Must not be delegate called.
- There must be an equal number of `streamIds` and `amounts`.
- Each stream ID in the array must not reference a null or depleted stream.
- Each amount in the array must be greater than zero and must not exceed the withdrawable amount.

```solidity
function withdrawMultiple(uint256[] calldata streamIds, uint128[] calldata amounts) external payable;
```

**Parameters**

| Name        | Type        | Description                                                        |
| ----------- | ----------- | ------------------------------------------------------------------ |
| `streamIds` | `uint256[]` | The IDs of the streams to withdraw from.                           |
| `amounts`   | `uint128[]` | The amounts to withdraw, denoted in units of the token's decimals. |

## Events

### AllowToHook

Emitted when the admin allows a new recipient contract to hook to Sablier.

```solidity
event AllowToHook(address indexed admin, address recipient);
```

**Parameters**

| Name        | Type      | Description                                                 |
| ----------- | --------- | ----------------------------------------------------------- |
| `admin`     | `address` | The address of the current contract admin.                  |
| `recipient` | `address` | The address of the recipient contract put on the allowlist. |

### CancelLockupStream

Emitted when a stream is canceled.

```solidity
event CancelLockupStream(
    uint256 streamId,
    address indexed sender,
    address indexed recipient,
    IERC20 indexed token,
    uint128 senderAmount,
    uint128 recipientAmount
);
```

**Parameters**

| Name              | Type      | Description                                                                                                 |
| ----------------- | --------- | ----------------------------------------------------------------------------------------------------------- |
| `streamId`        | `uint256` | The ID of the stream.                                                                                       |
| `sender`          | `address` | The address of the stream's sender.                                                                         |
| `recipient`       | `address` | The address of the stream's recipient.                                                                      |
| `token`           | `IERC20`  | The contract address of the ERC-20 token that has been distributed.                                         |
| `senderAmount`    | `uint128` | The amount of tokens refunded to the stream's sender, denoted in units of the token's decimals.             |
| `recipientAmount` | `uint128` | The amount of tokens left for the stream's recipient to withdraw, denoted in units of the token's decimals. |

### CollectFees

Emitted when the accrued fees are collected.

```solidity
event CollectFees(address indexed admin, uint256 indexed feeAmount);
```

**Parameters**

| Name        | Type      | Description                                                             |
| ----------- | --------- | ----------------------------------------------------------------------- |
| `admin`     | `address` | The address of the current contract admin, which has received the fees. |
| `feeAmount` | `uint256` | The amount of collected fees.                                           |

### InvalidWithdrawalInWithdrawMultiple

Emitted when withdrawing from multiple streams and one particular withdrawal reverts.

```solidity
event InvalidWithdrawalInWithdrawMultiple(uint256 streamId, bytes revertData);
```

**Parameters**

| Name         | Type      | Description                                       |
| ------------ | --------- | ------------------------------------------------- |
| `streamId`   | `uint256` | The stream ID that reverted during withdraw.      |
| `revertData` | `bytes`   | The error data returned by the reverted withdraw. |

### RenounceLockupStream

Emitted when a sender gives up the right to cancel a stream.

```solidity
event RenounceLockupStream(uint256 indexed streamId);
```

**Parameters**

| Name       | Type      | Description           |
| ---------- | --------- | --------------------- |
| `streamId` | `uint256` | The ID of the stream. |

### SetNFTDescriptor

Emitted when the admin sets a new NFT descriptor contract.

```solidity
event SetNFTDescriptor(
    address indexed admin, ILockupNFTDescriptor oldNFTDescriptor, ILockupNFTDescriptor newNFTDescriptor
);
```

**Parameters**

| Name               | Type                   | Description                                     |
| ------------------ | ---------------------- | ----------------------------------------------- |
| `admin`            | `address`              | The address of the current contract admin.      |
| `oldNFTDescriptor` | `ILockupNFTDescriptor` | The address of the old NFT descriptor contract. |
| `newNFTDescriptor` | `ILockupNFTDescriptor` | The address of the new NFT descriptor contract. |

### WithdrawFromLockupStream

Emitted when tokens are withdrawn from a stream.

```solidity
event WithdrawFromLockupStream(uint256 indexed streamId, address indexed to, IERC20 indexed token, uint128 amount);
```

**Parameters**

| Name       | Type      | Description                                                               |
| ---------- | --------- | ------------------------------------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream.                                                     |
| `to`       | `address` | The address that has received the withdrawn tokens.                       |
| `token`    | `IERC20`  | The contract address of the ERC-20 token that has been withdrawn.         |
| `amount`   | `uint128` | The amount of tokens withdrawn, denoted in units of the token's decimals. |
