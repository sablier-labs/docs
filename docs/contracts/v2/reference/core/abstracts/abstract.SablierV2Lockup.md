# SablierV2Lockup

[Git Source](https://github.com/sablier-labs/v2-core/blob/36b49d3bf2a396d19083d28247e8e03d7a3a2ee1/src/abstracts/SablierV2Lockup.sol)

**Inherits:** [NoDelegateCall](/docs/contracts/v2/reference/core/abstracts/abstract.NoDelegateCall.md),
[Adminable](/docs/contracts/v2/reference/core/abstracts/abstract.Adminable.md),
[ISablierV2Lockup](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Lockup.md), ERC721

See the documentation in [ISablierV2Lockup](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Lockup.md).

## State Variables

### MAX_BROKER_FEE

Retrieves the maximum broker fee that can be charged by the broker, denoted as a fixed-point number where 1e18 is 100%.

_This value is hard coded as a constant._

```solidity
UD60x18 public constant override MAX_BROKER_FEE = UD60x18.wrap(0.1e18);
```

### nextStreamId

Counter for stream IDs, used in the create functions.

```solidity
uint256 public override nextStreamId;
```

### nftDescriptor

Contract that generates the non-fungible token URI.

```solidity
ISablierV2NFTDescriptor public override nftDescriptor;
```

### \_allowedToHook

_Mapping of contracts allowed to hook to Sablier when a stream is canceled or when assets are withdrawn._

```solidity
mapping(address recipient => bool allowed) internal _allowedToHook;
```

### \_streams

_Sablier V2 Lockup streams mapped by unsigned integers._

```solidity
mapping(uint256 id => Lockup.Stream stream) internal _streams;
```

## Functions

### constructor

_Emits a {TransferAdmin} event._

```solidity
constructor(address initialAdmin, ISablierV2NFTDescriptor initialNFTDescriptor);
```

**Parameters**

| Name                   | Type                      | Description                                |
| ---------------------- | ------------------------- | ------------------------------------------ |
| `initialAdmin`         | `address`                 | The address of the initial contract admin. |
| `initialNFTDescriptor` | `ISablierV2NFTDescriptor` | The address of the initial NFT descriptor. |

### notNull

_Checks that `streamId` does not reference a null stream._

```solidity
modifier notNull(uint256 streamId);
```

### getAsset

Retrieves the address of the ERC-20 asset to be distributed.

_Reverts if `streamId` references a null stream._

```solidity
function getAsset(uint256 streamId) external view override notNull(streamId) returns (IERC20 asset);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getDepositedAmount

Retrieves the amount deposited in the stream, denoted in units of the asset's decimals.

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

### getRecipient

Retrieves the stream's recipient.

_Reverts if the NFT has been burned._

```solidity
function getRecipient(uint256 streamId) external view override returns (address recipient);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getRefundedAmount

Retrieves the amount refunded to the sender after a cancellation, denoted in units of the asset's decimals. This amount
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

### getWithdrawnAmount

Retrieves the amount withdrawn from the stream, denoted in units of the asset's decimals.

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
canceled or when assets are withdrawn.

_See [ISablierLockupRecipient](/docs/contracts/v2/reference/core/interfaces/interface.ISablierLockupRecipient.md) for
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

### isCold

Retrieves a flag indicating whether the stream is cold, i.e. settled, canceled, or depleted.

_Reverts if `streamId` references a null stream._

```solidity
function isCold(uint256 streamId) external view override notNull(streamId) returns (bool result);
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

### isWarm

Retrieves a flag indicating whether the stream is warm, i.e. either pending or streaming.

_Reverts if `streamId` references a null stream._

```solidity
function isWarm(uint256 streamId) external view override notNull(streamId) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### refundableAmountOf

Calculates the amount that the sender would be refunded if the stream were canceled, denoted in units of the asset's
decimals.

_Reverts if `streamId` references a null stream._

```solidity
function refundableAmountOf(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (uint128 refundableAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### statusOf

Retrieves the stream's status.

_Reverts if `streamId` references a null stream._

```solidity
function statusOf(uint256 streamId) external view override notNull(streamId) returns (Lockup.Status status);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### streamedAmountOf

Calculates the amount streamed to the recipient, denoted in units of the asset's decimals.

Reverts if `streamId` references a null stream. Notes:

- Upon cancellation of the stream, the amount streamed is calculated as the difference between the deposited amount and
  the refunded amount. Ultimately, when the stream becomes depleted, the streamed amount is equivalent to the total
  amount withdrawn.

```solidity
function streamedAmountOf(uint256 streamId) public view override notNull(streamId) returns (uint128 streamedAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### supportsInterface

_See {IERC165-supportsInterface}._

```solidity
function supportsInterface(bytes4 interfaceId) public view override(IERC165, ERC721) returns (bool);
```

### tokenURI

_See {IERC721Metadata-tokenURI}._

```solidity
function tokenURI(uint256 streamId) public view override(IERC721Metadata, ERC721) returns (string memory uri);
```

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

### withdrawableAmountOf

Calculates the amount that the recipient can withdraw from the stream, denoted in units of the asset's decimals.

_Reverts if `streamId` references a null stream._

```solidity
function withdrawableAmountOf(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (uint128 withdrawableAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### allowToHook

Allows a recipient contract to hook to Sablier when a stream is canceled or when assets are withdrawn. Useful for
implementing contracts that hold streams on behalf of users, such as vaults or staking contracts.

Emits an {AllowToHook} event. Notes:

- Does not revert if the contract is already on the allowlist.
- This is an irreversible operation. The contract cannot be removed from the allowlist. Requirements:
- `msg.sender` must be the contract admin.
- `recipient` must have a non-zero code size.
- `recipient` must implement
  [ISablierLockupRecipient](/docs/contracts/v2/reference/core/interfaces/interface.ISablierLockupRecipient.md).

```solidity
function allowToHook(address recipient) external override onlyAdmin;
```

**Parameters**

| Name        | Type      | Description                                     |
| ----------- | --------- | ----------------------------------------------- |
| `recipient` | `address` | The address of the contract to allow for hooks. |

### burn

Burns the NFT associated with the stream.

Emits a {Transfer} event. Requirements:

- Must not be delegate called.
- `streamId` must reference a depleted stream.
- The NFT must exist.
- `msg.sender` must be either the NFT owner or an approved third party.

```solidity
function burn(uint256 streamId) external override noDelegateCall notNull(streamId);
```

**Parameters**

| Name       | Type      | Description                       |
| ---------- | --------- | --------------------------------- |
| `streamId` | `uint256` | The ID of the stream NFT to burn. |

### cancel

Cancels the stream and refunds any remaining assets to the sender.

Emits a {Transfer}, {CancelLockupStream}, and {MetadataUpdate} event. Notes:

- If there any assets left for the recipient to withdraw, the stream is marked as canceled. Otherwise, the stream is
  marked as depleted.
- This function attempts to invoke a hook on the recipient, if the resolved address is a contract. Requirements:
- Must not be delegate called.
- The stream must be warm and cancelable.
- `msg.sender` must be the stream's sender.

```solidity
function cancel(uint256 streamId) public override noDelegateCall notNull(streamId);
```

**Parameters**

| Name       | Type      | Description                     |
| ---------- | --------- | ------------------------------- |
| `streamId` | `uint256` | The ID of the stream to cancel. |

### cancelMultiple

Cancels multiple streams and refunds any remaining assets to the sender.

Emits multiple {Transfer}, {CancelLockupStream}, and {MetadataUpdate} events. Notes:

- Refer to the notes in {cancel}. Requirements:
- All requirements from {cancel} must be met for each stream.

```solidity
function cancelMultiple(uint256[] calldata streamIds) external override noDelegateCall;
```

**Parameters**

| Name        | Type        | Description                       |
| ----------- | ----------- | --------------------------------- |
| `streamIds` | `uint256[]` | The IDs of the streams to cancel. |

### renounce

Removes the right of the stream's sender to cancel the stream.

Emits a {RenounceLockupStream} and {MetadataUpdate} event. Notes:

- This is an irreversible operation. Requirements:
- Must not be delegate called.
- `streamId` must reference a warm stream.
- `msg.sender` must be the stream's sender.
- The stream must be cancelable.

```solidity
function renounce(uint256 streamId) external override noDelegateCall notNull(streamId);
```

**Parameters**

| Name       | Type      | Description                       |
| ---------- | --------- | --------------------------------- |
| `streamId` | `uint256` | The ID of the stream to renounce. |

### setNFTDescriptor

Sets a new NFT descriptor contract, which produces the URI describing the Sablier stream NFTs.

Emits a {SetNFTDescriptor} and {BatchMetadataUpdate} event. Notes:

- Does not revert if the NFT descriptor is the same. Requirements:
- `msg.sender` must be the contract admin.

```solidity
function setNFTDescriptor(ISablierV2NFTDescriptor newNFTDescriptor) external override onlyAdmin;
```

**Parameters**

| Name               | Type                      | Description                                     |
| ------------------ | ------------------------- | ----------------------------------------------- |
| `newNFTDescriptor` | `ISablierV2NFTDescriptor` | The address of the new NFT descriptor contract. |

### withdraw

Withdraws the provided amount of assets from the stream to the `to` address.

Emits a {Transfer}, {WithdrawFromLockupStream}, and {MetadataUpdate} event. Notes:

- This function attempts to call a hook on the recipient of the stream, unless `msg.sender` is the recipient.
  Requirements:
- Must not be delegate called.
- `streamId` must not reference a null or depleted stream.
- `to` must not be the zero address.
- `amount` must be greater than zero and must not exceed the withdrawable amount.
- `to` must be the recipient if `msg.sender` is not the stream's recipient or an approved third party.

```solidity
function withdraw(uint256 streamId, address to, uint128 amount) public override noDelegateCall notNull(streamId);
```

**Parameters**

| Name       | Type      | Description                                                       |
| ---------- | --------- | ----------------------------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to withdraw from.                            |
| `to`       | `address` | The address receiving the withdrawn assets.                       |
| `amount`   | `uint128` | The amount to withdraw, denoted in units of the asset's decimals. |

### withdrawMax

Withdraws the maximum withdrawable amount from the stream to the provided address `to`.

Emits a {Transfer}, {WithdrawFromLockupStream}, and {MetadataUpdate} event. Notes:

- Refer to the notes in {withdraw}. Requirements:
- Refer to the requirements in {withdraw}.

```solidity
function withdrawMax(uint256 streamId, address to) external override returns (uint128 withdrawnAmount);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to withdraw from.      |
| `to`       | `address` | The address receiving the withdrawn assets. |

**Returns**

| Name              | Type      | Description                                                     |
| ----------------- | --------- | --------------------------------------------------------------- |
| `withdrawnAmount` | `uint128` | The amount withdrawn, denoted in units of the asset's decimals. |

### withdrawMaxAndTransfer

Withdraws the maximum withdrawable amount from the stream to the current recipient, and transfers the NFT to
`newRecipient`.

Emits a {WithdrawFromLockupStream} and a {Transfer} event. Notes:

- If the withdrawable amount is zero, the withdrawal is skipped.
- Refer to the notes in {withdraw}. Requirements:
- `msg.sender` must be the stream's recipient.
- Refer to the requirements in {withdraw}.
- Refer to the requirements in {IERC721.transferFrom}.

```solidity
function withdrawMaxAndTransfer(
    uint256 streamId,
    address newRecipient
)
    external
    override
    noDelegateCall
    notNull(streamId)
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
| `withdrawnAmount` | `uint128` | The amount withdrawn, denoted in units of the asset's decimals. |

### withdrawMultiple

Withdraws assets from streams to the recipient of each stream.

Emits multiple {Transfer}, {WithdrawFromLockupStream}, and {MetadataUpdate} events. Notes:

- This function attempts to call a hook on the recipient of each stream, unless `msg.sender` is the recipient.
  Requirements:
- Must not be delegate called.
- There must be an equal number of `streamIds` and `amounts`.
- Each stream ID in the array must not reference a null or depleted stream.
- Each amount in the array must be greater than zero and must not exceed the withdrawable amount.

```solidity
function withdrawMultiple(uint256[] calldata streamIds, uint128[] calldata amounts) external override noDelegateCall;
```

**Parameters**

| Name        | Type        | Description                                                        |
| ----------- | ----------- | ------------------------------------------------------------------ |
| `streamIds` | `uint256[]` | The IDs of the streams to withdraw from.                           |
| `amounts`   | `uint128[]` | The amounts to withdraw, denoted in units of the asset's decimals. |

### \_calculateStreamedAmount

Calculates the streamed amount of the stream without looking up the stream's status.

_This function is implemented by child contracts, so the logic varies depending on the model._

```solidity
function _calculateStreamedAmount(uint256 streamId) internal view virtual returns (uint128);
```

### \_isCallerStreamRecipientOrApproved

Checks whether `msg.sender` is the stream's recipient or an approved third party.

```solidity
function _isCallerStreamRecipientOrApproved(uint256 streamId) internal view returns (bool);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### \_isCallerStreamSender

Checks whether `msg.sender` is the stream's sender.

```solidity
function _isCallerStreamSender(uint256 streamId) internal view returns (bool);
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

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _streamedAmountOf(uint256 streamId) internal view returns (uint128);
```

### \_withdrawableAmountOf

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _withdrawableAmountOf(uint256 streamId) internal view returns (uint128);
```

### \_cancel

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _cancel(uint256 streamId) internal;
```

### \_renounce

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _renounce(uint256 streamId) internal;
```

### \_update

Overrides the {ERC-721.\_update} function to check that the stream is transferable, and emits an ERC-4906 event.

There are two cases when the transferable flag is ignored:

- If the current owner is 0, then the update is a mint and is allowed.
- If `to` is 0, then the update is a burn and is also allowed.

```solidity
function _update(address to, uint256 streamId, address auth) internal override returns (address);
```

**Parameters**

| Name       | Type      | Description                                                                                                                                                           |
| ---------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `to`       | `address` | The address of the new recipient of the stream.                                                                                                                       |
| `streamId` | `uint256` | ID of the stream to update.                                                                                                                                           |
| `auth`     | `address` | Optional parameter. If the value is not zero, the overridden implementation will check that `auth` is either the recipient of the stream, or an approved third party. |

**Returns**

| Name     | Type      | Description                                                 |
| -------- | --------- | ----------------------------------------------------------- |
| `<none>` | `address` | The original recipient of the `streamId` before the update. |

### \_withdraw

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _withdraw(uint256 streamId, address to, uint128 amount) internal;
```
