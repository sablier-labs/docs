---
sidebar_position: 1
---

# SablierLockup

[Git Source](https://github.com/sablier-labs/lockup/blob/58eaac45c20c57a93b73d887c714e68f061ec3e6/src/SablierLockup.sol)

**Inherits:** [Batch](/docs/reference/lockup/contracts/abstracts/abstract.Batch.md),
[Comptrollerable](/docs/reference/lockup/contracts/abstracts/abstract.Comptrollerable.md), ERC721,
[ISablierLockup](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockup.md),
[SablierLockupDynamic](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupDynamic.md),
[SablierLockupLinear](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupLinear.md),
[SablierLockupTranched](/docs/reference/lockup/contracts/abstracts/abstract.SablierLockupTranched.md)

See the documentation in [ISablierLockup](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockup.md).

## Functions

### constructor

```solidity
constructor(
    address initialComptroller,
    address initialNFTDescriptor
)
    Comptrollerable(initialComptroller)
    ERC721("Sablier Lockup NFT", "SAB-LOCKUP")
    SablierLockupState(initialNFTDescriptor);
```

**Parameters**

| Name                   | Type      | Description                                      |
| ---------------------- | --------- | ------------------------------------------------ |
| `initialComptroller`   | `address` | The address of the initial comptroller contract. |
| `initialNFTDescriptor` | `address` | The address of the NFT descriptor contract.      |

### calculateMinFeeWei

Calculates the minimum fee in wei required to withdraw from the given stream ID.

_Reverts if `streamId` references a null stream._

```solidity
function calculateMinFeeWei(uint256 streamId) external view override notNull(streamId) returns (uint256 minFeeWei);
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

Calculates the amount that the sender would be refunded if the stream were canceled, denoted in units of the token's
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

Calculates the amount streamed to the recipient, denoted in units of the token's decimals.

Reverts if `streamId` references a null stream. Notes:

- Upon cancellation of the stream, the amount streamed is calculated as the difference between the deposited amount and
  the refunded amount. Ultimately, when the stream becomes depleted, the streamed amount is equivalent to the total
  amount withdrawn.

```solidity
function streamedAmountOf(uint256 streamId) external view override notNull(streamId) returns (uint128 streamedAmount);
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

### withdrawableAmountOf

Calculates the amount that the recipient can withdraw from the stream, denoted in units of the token's decimals.

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

Allows a recipient contract to hook to Sablier when a stream is canceled or when tokens are withdrawn. Useful for
implementing contracts that hold streams on behalf of users, such as vaults or staking contracts.

Emits an {AllowToHook} event. Notes:

- Does not revert if the contract is already on the allowlist.
- This is an irreversible operation. The contract cannot be removed from the allowlist. Requirements:
- `msg.sender` must be the comptroller contract.
- `recipient` must implement
  [ISablierLockupRecipient](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockupRecipient.md).

```solidity
function allowToHook(address recipient) external override onlyComptroller;
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
function burn(uint256 streamId) external payable override noDelegateCall notNull(streamId);
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
function cancel(uint256 streamId)
    public
    payable
    override
    noDelegateCall
    notNull(streamId)
    returns (uint128 refundedAmount);
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

Emits multiple {Transfer}, {CancelLockupStream} and {MetadataUpdate} events. For each reverted cancellation, it emits an
[InvalidStreamInCancelMultiple](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockup.md#invalidstreamincancelmultiple)
event. Notes:

- This function as a whole will not revert if one or more cancellations revert. A zero amount is returned for reverted
  streams.
- Refer to the notes and requirements from {cancel}.

```solidity
function cancelMultiple(uint256[] calldata streamIds)
    external
    payable
    override
    noDelegateCall
    returns (uint128[] memory refundedAmounts);
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

Notes:

- The surplus amount is defined as the difference between the total balance of the contract for the provided ERC-20
  token and the sum of balances of all streams created using the same ERC-20 token. Requirements:
- `msg.sender` must be the comptroller contract.
- The surplus amount must be greater than zero.

```solidity
function recover(IERC20 token, address to) external override onlyComptroller;
```

**Parameters**

| Name    | Type      | Description                                              |
| ------- | --------- | -------------------------------------------------------- |
| `token` | `IERC20`  | The contract address of the ERC-20 token to recover for. |
| `to`    | `address` | The address to send the surplus amount.                  |

### renounce

Removes the right of the stream's sender to cancel the stream.

Emits a {RenounceLockupStream} event. Notes:

- This is an irreversible operation. Requirements:
- Must not be delegate called.
- `streamId` must reference a warm stream.
- `msg.sender` must be the stream's sender.
- The stream must be cancelable.

```solidity
function renounce(uint256 streamId) public payable override noDelegateCall notNull(streamId);
```

**Parameters**

| Name       | Type      | Description                       |
| ---------- | --------- | --------------------------------- |
| `streamId` | `uint256` | The ID of the stream to renounce. |

### setNativeToken

Sets the native token address. Once set, it cannot be changed.

For more information, see the documentation for {nativeToken}. Notes:

- If `newNativeToken` is zero address, the function does not revert. Requirements:
- `msg.sender` must be the comptroller contract.
- The current native token must be zero address.

```solidity
function setNativeToken(address newNativeToken) external override onlyComptroller;
```

**Parameters**

| Name             | Type      | Description                      |
| ---------------- | --------- | -------------------------------- |
| `newNativeToken` | `address` | The address of the native token. |

### setNFTDescriptor

Sets a new NFT descriptor contract, which produces the URI describing the Sablier stream NFTs.

Emits a {SetNFTDescriptor} and {BatchMetadataUpdate} event. Notes:

- Does not revert if the NFT descriptor is the same. Requirements:
- `msg.sender` must be the comptroller contract.

```solidity
function setNFTDescriptor(ILockupNFTDescriptor newNFTDescriptor) external override onlyComptroller;
```

**Parameters**

| Name               | Type                   | Description                                     |
| ------------------ | ---------------------- | ----------------------------------------------- |
| `newNFTDescriptor` | `ILockupNFTDescriptor` | The address of the new NFT descriptor contract. |

### withdraw

Withdraws the provided amount of tokens from the stream to the `to` address.

Emits a {Transfer}, {WithdrawFromLockupStream} and {MetadataUpdate} event. Notes:

- If `msg.sender` is not the recipient and the address is on the allowlist, this function will invoke a hook on the
  recipient.
- The minimum fee in wei is calculated for the stream's sender using the **SablierComptroller** contract. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null or depleted stream.
- `to` must not be the zero address.
- `amount` must be greater than zero and must not exceed the withdrawable amount.
- `to` must be the recipient if `msg.sender` is not the stream's recipient or an approved third party.
- `msg.value` must be greater than or equal to the minimum fee in wei for the stream's sender.

```solidity
function withdraw(
    uint256 streamId,
    address to,
    uint128 amount
)
    public
    payable
    override
    noDelegateCall
    notNull(streamId);
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
function withdrawMax(uint256 streamId, address to) external payable override returns (uint128 withdrawnAmount);
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

Emits a {WithdrawFromLockupStream}, {Transfer} and {MetadataUpdate} event. Notes:

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
| `withdrawnAmount` | `uint128` | The amount withdrawn, denoted in units of the token's decimals. |

### withdrawMultiple

Withdraws tokens from streams to the recipient of each stream.

Emits multiple {Transfer}, {WithdrawFromLockupStream} and {MetadataUpdate} events. For each reverting withdrawal, it
emits an
[InvalidWithdrawalInWithdrawMultiple](/docs/reference/lockup/contracts/interfaces/interface.ISablierLockup.md#invalidwithdrawalinwithdrawmultiple)
event. Notes:

- This function as a whole will not revert if one or more withdrawals revert.
- This function attempts to call a hook on the recipient of each stream, unless `msg.sender` is the recipient.
- Refer to the notes and requirements from {withdraw}. Requirements:
- Must not be delegate called.
- There must be an equal number of `streamIds` and `amounts`.

```solidity
function withdrawMultiple(
    uint256[] calldata streamIds,
    uint128[] calldata amounts
)
    external
    payable
    override
    noDelegateCall;
```

**Parameters**

| Name        | Type        | Description                                                        |
| ----------- | ----------- | ------------------------------------------------------------------ |
| `streamIds` | `uint256[]` | The IDs of the streams to withdraw from.                           |
| `amounts`   | `uint128[]` | The amounts to withdraw, denoted in units of the token's decimals. |

### \_streamedAmountOf

Calculates the streamed amount of the stream.

_This function is implemented by child contract. The logic varies according to the distribution model._

```solidity
function _streamedAmountOf(uint256 streamId) internal view override returns (uint128 streamedAmount);
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
    override;
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

### \_isCallerStreamRecipientOrApproved

Checks whether `msg.sender` is the stream's recipient or an approved third party, when the `recipient` is known in
advance.

```solidity
function _isCallerStreamRecipientOrApproved(uint256 streamId, address recipient) private view returns (bool);
```

**Parameters**

| Name        | Type      | Description                            |
| ----------- | --------- | -------------------------------------- |
| `streamId`  | `uint256` | The stream ID for the query.           |
| `recipient` | `address` | The address of the stream's recipient. |

### \_withdrawableAmountOf

_See the documentation for the user-facing functions that call this private function._

```solidity
function _withdrawableAmountOf(uint256 streamId) private view returns (uint128);
```

### \_cancel

_See the documentation for the user-facing functions that call this private function._

```solidity
function _cancel(uint256 streamId) private returns (uint128 senderAmount);
```

### \_withdraw

_See the documentation for the user-facing functions that call this private function._

```solidity
function _withdraw(uint256 streamId, address to, uint128 amount) private;
```
