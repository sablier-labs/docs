# ISablierLockup

[Git Source](https://github.com/sablier-labs/lockup/blob/58eaac45c20c57a93b73d887c714e68f061ec3e6/src/interfaces/ISablierLockup.sol)

**Inherits:** IBatch, IComptrollerable, IERC4906, IERC721Metadata,
[ISablierLockupDynamic](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupDynamic.md),
[ISablierLockupLinear](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupLinear.md),
[ISablierLockupTranched](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupTranched.md)

Interface to manage Lockup streams with various distribution models.

## Functions

### calculateMinFeeWei

Calculates the minimum fee in wei required to withdraw from the given stream ID.

_Reverts if `streamId` references a null stream._

```solidity
function calculateMinFeeWei(uint256 streamId) external view returns (uint256 minFeeWei);
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

\*Reverts if `streamId` references a null stream. Notes:

- Upon cancellation of the stream, the amount streamed is calculated as the difference between the deposited amount and
  the refunded amount. Ultimately, when the stream becomes depleted, the streamed amount is equivalent to the total
  amount withdrawn.\*

```solidity
function streamedAmountOf(uint256 streamId) external view returns (uint128 streamedAmount);
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

\*Emits an [AllowToHook](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockup.md#allowtohook) event.
Notes:

- Does not revert if the contract is already on the allowlist.
- This is an irreversible operation. The contract cannot be removed from the allowlist. Requirements:
- `msg.sender` must be the comptroller contract.
- `recipient` must implement
  [ISablierLockupRecipient](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupRecipient.md).\*

```solidity
function allowToHook(address recipient) external;
```

**Parameters**

| Name        | Type      | Description                                     |
| ----------- | --------- | ----------------------------------------------- |
| `recipient` | `address` | The address of the contract to allow for hooks. |

### burn

Burns the NFT associated with the stream.

\*Emits a {Transfer} and {MetadataUpdate} event. Requirements:

- Must not be delegate called.
- `streamId` must reference a depleted stream.
- The NFT must exist.
- `msg.sender` must be either the NFT owner or an approved third party.\*

```solidity
function burn(uint256 streamId) external payable;
```

**Parameters**

| Name       | Type      | Description                       |
| ---------- | --------- | --------------------------------- |
| `streamId` | `uint256` | The ID of the stream NFT to burn. |

### cancel

Cancels the stream and refunds any remaining tokens to the sender.

\*Emits a {Transfer}, {CancelLockupStream} and {MetadataUpdate} event. Notes:

- If there any tokens left for the recipient to withdraw, the stream is marked as canceled. Otherwise, the stream is
  marked as depleted.
- If the address is on the allowlist, this function will invoke a hook on the recipient. Requirements:
- Must not be delegate called.
- The stream must be warm and cancelable.
- `msg.sender` must be the stream's sender.\*

```solidity
function cancel(uint256 streamId) external payable returns (uint128 refundedAmount);
```

**Parameters**

| Name       | Type      | Description                     |
| ---------- | --------- | ------------------------------- |
| `streamId` | `uint256` | The ID of the stream to cancel. |

**Returns**

| Name             | Type      | Description                                                                  |
| ---------------- | --------- | ---------------------------------------------------------------------------- |
| `refundedAmount` | `uint128` | The amount refunded to the sender, denoted in units of the token's decimals. |

### cancelMultiple

Cancels multiple streams and refunds any remaining tokens to the sender.

\*Emits multiple {Transfer}, {CancelLockupStream} and {MetadataUpdate} events. For each reverted cancellation, it emits
an
[InvalidStreamInCancelMultiple](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockup.md#invalidstreamincancelmultiple)
event. Notes:

- This function as a whole will not revert if one or more cancellations revert. A zero amount is returned for reverted
  streams.
- Refer to the notes and requirements from {cancel}.\*

```solidity
function cancelMultiple(uint256[] calldata streamIds) external payable returns (uint128[] memory refundedAmounts);
```

**Parameters**

| Name        | Type        | Description                       |
| ----------- | ----------- | --------------------------------- |
| `streamIds` | `uint256[]` | The IDs of the streams to cancel. |

**Returns**

| Name              | Type        | Description                                                                   |
| ----------------- | ----------- | ----------------------------------------------------------------------------- |
| `refundedAmounts` | `uint128[]` | The amounts refunded to the sender, denoted in units of the token's decimals. |

### recover

Recover the surplus amount of tokens.

\*Notes:

- The surplus amount is defined as the difference between the total balance of the contract for the provided ERC-20
  token and the sum of balances of all streams created using the same ERC-20 token. Requirements:
- `msg.sender` must be the comptroller contract.
- The surplus amount must be greater than zero.\*

```solidity
function recover(IERC20 token, address to) external;
```

**Parameters**

| Name    | Type      | Description                                              |
| ------- | --------- | -------------------------------------------------------- |
| `token` | `IERC20`  | The contract address of the ERC-20 token to recover for. |
| `to`    | `address` | The address to send the surplus amount.                  |

### renounce

Removes the right of the stream's sender to cancel the stream.

\*Emits a
[RenounceLockupStream](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockup.md#renouncelockupstream)
event. Notes:

- This is an irreversible operation. Requirements:
- Must not be delegate called.
- `streamId` must reference a warm stream.
- `msg.sender` must be the stream's sender.
- The stream must be cancelable.\*

```solidity
function renounce(uint256 streamId) external payable;
```

**Parameters**

| Name       | Type      | Description                       |
| ---------- | --------- | --------------------------------- |
| `streamId` | `uint256` | The ID of the stream to renounce. |

### setNativeToken

Sets the native token address. Once set, it cannot be changed.

\*For more information, see the documentation for {nativeToken}. Notes:

- If `newNativeToken` is zero address, the function does not revert. Requirements:
- `msg.sender` must be the comptroller contract.
- The current native token must be zero address.\*

```solidity
function setNativeToken(address newNativeToken) external;
```

**Parameters**

| Name             | Type      | Description                      |
| ---------------- | --------- | -------------------------------- |
| `newNativeToken` | `address` | The address of the native token. |

### setNFTDescriptor

Sets a new NFT descriptor contract, which produces the URI describing the Sablier stream NFTs.

\*Emits a [SetNFTDescriptor](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockup.md#setnftdescriptor)
and {BatchMetadataUpdate} event. Notes:

- Does not revert if the NFT descriptor is the same. Requirements:
- `msg.sender` must be the comptroller contract.\*

```solidity
function setNFTDescriptor(ILockupNFTDescriptor newNFTDescriptor) external;
```

**Parameters**

| Name               | Type                   | Description                                     |
| ------------------ | ---------------------- | ----------------------------------------------- |
| `newNFTDescriptor` | `ILockupNFTDescriptor` | The address of the new NFT descriptor contract. |

### withdraw

Withdraws the provided amount of tokens from the stream to the `to` address.

\*Emits a {Transfer}, {WithdrawFromLockupStream} and {MetadataUpdate} event. Notes:

- If `msg.sender` is not the recipient and the address is on the allowlist, this function will invoke a hook on the
  recipient.
- The minimum fee in wei is calculated for the stream's sender using the **SablierComptroller** contract. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null or depleted stream.
- `to` must not be the zero address.
- `amount` must be greater than zero and must not exceed the withdrawable amount.
- `to` must be the recipient if `msg.sender` is not the stream's recipient or an approved third party.
- `msg.value` must be greater than or equal to the minimum fee in wei for the stream's sender.\*

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

\*Emits a {Transfer}, {WithdrawFromLockupStream} and {MetadataUpdate} event. Notes:

- Refer to the notes in {withdraw}. Requirements:
- Refer to the requirements in {withdraw}.\*

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

\*Emits a
[WithdrawFromLockupStream](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockup.md#withdrawfromlockupstream),
{Transfer} and {MetadataUpdate} event. Notes:

- If the withdrawable amount is zero, the withdrawal is skipped.
- Refer to the notes in {withdraw}. Requirements:
- `msg.sender` must be either the NFT owner or an approved third party.
- Refer to the requirements in {withdraw}.
- Refer to the requirements in {IERC721.transferFrom}.\*

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

\*Emits multiple {Transfer}, {WithdrawFromLockupStream} and {MetadataUpdate} events. For each reverting withdrawal, it
emits an
[InvalidWithdrawalInWithdrawMultiple](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockup.md#invalidwithdrawalinwithdrawmultiple)
event. Notes:

- This function as a whole will not revert if one or more withdrawals revert.
- This function attempts to call a hook on the recipient of each stream, unless `msg.sender` is the recipient.
- Refer to the notes and requirements from {withdraw}. Requirements:
- Must not be delegate called.
- There must be an equal number of `streamIds` and `amounts`.\*

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

Emitted when the comptroller allows a new recipient contract to hook to Sablier.

```solidity
event AllowToHook(ISablierComptroller indexed comptroller, address indexed recipient);
```

**Parameters**

| Name          | Type                  | Description                                                 |
| ------------- | --------------------- | ----------------------------------------------------------- |
| `comptroller` | `ISablierComptroller` | The address of the current comptroller.                     |
| `recipient`   | `address`             | The address of the recipient contract put on the allowlist. |

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

### InvalidStreamInCancelMultiple

Emitted when canceling multiple streams and one particular cancellation reverts.

```solidity
event InvalidStreamInCancelMultiple(uint256 indexed streamId, bytes revertData);
```

**Parameters**

| Name         | Type      | Description                                          |
| ------------ | --------- | ---------------------------------------------------- |
| `streamId`   | `uint256` | The ID of the stream that reverted the cancellation. |
| `revertData` | `bytes`   | The error data returned by the reverted cancel.      |

### InvalidWithdrawalInWithdrawMultiple

Emitted when withdrawing from multiple streams and one particular withdrawal reverts.

```solidity
event InvalidWithdrawalInWithdrawMultiple(uint256 indexed streamId, bytes revertData);
```

**Parameters**

| Name         | Type      | Description                                        |
| ------------ | --------- | -------------------------------------------------- |
| `streamId`   | `uint256` | The ID of the stream that reverted the withdrawal. |
| `revertData` | `bytes`   | The error data returned by the reverted withdraw.  |

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

Emitted when the comptroller sets a new NFT descriptor contract.

```solidity
event SetNFTDescriptor(
    ISablierComptroller indexed comptroller,
    ILockupNFTDescriptor indexed oldNFTDescriptor,
    ILockupNFTDescriptor indexed newNFTDescriptor
);
```

**Parameters**

| Name               | Type                   | Description                                     |
| ------------------ | ---------------------- | ----------------------------------------------- |
| `comptroller`      | `ISablierComptroller`  | The address of the current comptroller.         |
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
