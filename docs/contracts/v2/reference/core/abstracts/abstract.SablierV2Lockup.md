# SablierV2Lockup

[Git Source](https://github.com/sablier-labs/v2-core/blob/6ab33735951a1e93a3236fed3ca9c60f75ab76a7/docs/contracts/v2/reference/core/abstracts)

**Inherits:** [SablierV2Base](/docs/contracts/v2/reference/core/abstracts/abstract.SablierV2Base.md),
[ISablierV2Lockup](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Lockup.md), ERC721

See the documentation in [ISablierV2Lockup](docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Lockup.md).

## State Variables

### \_nftDescriptor

_Contract that generates the non-fungible token URI._

```solidity
ISablierV2NFTDescriptor internal _nftDescriptor;
```

## Functions

### constructor

```solidity
constructor(
    address initialAdmin,
    ISablierV2Comptroller initialComptroller,
    ISablierV2NFTDescriptor initialNFTDescriptor
)
    SablierV2Base(initialAdmin, initialComptroller);
```

**Parameters**

| Name                   | Type                      | Description                                |
| ---------------------- | ------------------------- | ------------------------------------------ |
| `initialAdmin`         | `address`                 | The address of the initial contract admin. |
| `initialComptroller`   | `ISablierV2Comptroller`   | The address of the initial comptroller.    |
| `initialNFTDescriptor` | `ISablierV2NFTDescriptor` | The address of the initial NFT descriptor. |

### notNull

_Checks that `streamId` does not reference a null stream._

```solidity
modifier notNull(uint256 streamId);
```

### getRecipient

Retrieves the stream's recipient.

_Reverts if the NFT has been burned._

```solidity
function getRecipient(uint256 streamId) external view override returns (address recipient);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### isDepleted

Retrieves a flag indicating whether the stream is depleted.

_Reverts if `streamId` references a null stream._

```solidity
function isDepleted(uint256 streamId) public view virtual override returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### isStream

Retrieves a flag indicating whether the stream exists.

_Does not revert if `streamId` references a null stream._

```solidity
function isStream(uint256 streamId) public view virtual override returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### tokenURI

```solidity
function tokenURI(uint256 streamId) public view override(IERC721Metadata, ERC721) returns (string memory uri);
```

### wasCanceled

Retrieves a flag indicating whether the stream was canceled.

_Reverts if `streamId` references a null stream._

```solidity
function wasCanceled(uint256 streamId) public view virtual override returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

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
| `streamId` | `uint256` | The stream id for the query. |

### burn

Burns the NFT associated with the stream.

Emits a {Transfer} event. Requirements:

- Must not be delegate called.
- `streamId` must reference a depleted stream.
- The NFT must exist.
- `msg.sender` must be either the NFT owner or an approved third party.

```solidity
function burn(uint256 streamId) external override noDelegateCall;
```

**Parameters**

| Name       | Type      | Description                       |
| ---------- | --------- | --------------------------------- |
| `streamId` | `uint256` | The id of the stream NFT to burn. |

### cancel

Cancels the stream and refunds any remaining assets to the sender.

Emits a {CancelLockupStream} event and a {Transfer} event. Notes:

- If there any assets left for the recipient to withdraw, the stream is marked as canceled. Otherwise, the stream is
  marked as depleted.
- This function attempts to invoke a hook on either the sender or the recipient, depending on who `msg.sender` is, and
  if the resolved address is a contract. Requirements:
- Must not be delegate called.
- The stream must be warm and cancelable.
- `msg.sender` must be either the stream's sender or the stream's recipient (i.e. the NFT owner).

```solidity
function cancel(uint256 streamId) public override noDelegateCall;
```

**Parameters**

| Name       | Type      | Description                     |
| ---------- | --------- | ------------------------------- |
| `streamId` | `uint256` | The id of the stream to cancel. |

### cancelMultiple

Cancels multiple streams and refunds any remaining assets to the sender.

Emits multiple {CancelLockupStream} and {Transfer} events. Notes:

- Refer to the notes in {cancel}. Requirements:
- All requirements from {cancel} must be met for each stream.

```solidity
function cancelMultiple(uint256[] calldata streamIds) external override noDelegateCall;
```

**Parameters**

| Name        | Type        | Description                       |
| ----------- | ----------- | --------------------------------- |
| `streamIds` | `uint256[]` | The ids of the streams to cancel. |

### renounce

Removes the right of the stream's sender to cancel the stream.

Emits a {RenounceLockupStream} event. Notes:

- This is an irreversible operation.
- This function attempts to invoke a hook on the stream's recipient, provided that the recipient is a contract.
  Requirements:
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
| `streamId` | `uint256` | The id of the stream to renounce. |

### setNFTDescriptor

Sets a new NFT descriptor contract, which produces the URI describing the Sablier stream NFTs.

Emits a {SetNFTDescriptor} event. Notes:

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

Emits a {WithdrawFromLockupStream} and a {Transfer} event. Notes:

- This function attempts to invoke a hook on the stream's recipient, provided that the recipient is a contract and
  `msg.sender` is either the sender or an approved operator. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null, pending, or depleted stream.
- `msg.sender` must be the stream's sender, the stream's recipient or an approved third party.
- `to` must be the recipient if `msg.sender` is the stream's sender.
- `to` must not be the zero address.
- `amount` must be greater than zero and must not exceed the withdrawable amount.

```solidity
function withdraw(uint256 streamId, address to, uint128 amount) public override noDelegateCall;
```

**Parameters**

| Name       | Type      | Description                                                       |
| ---------- | --------- | ----------------------------------------------------------------- |
| `streamId` | `uint256` | The id of the stream to withdraw from.                            |
| `to`       | `address` | The address that receives the withdrawn assets.                   |
| `amount`   | `uint128` | The amount to withdraw, denoted in units of the asset's decimals. |

### withdrawMax

Withdraws the maximum withdrawable amount from the stream to the `to` address.

Emits a {WithdrawFromLockupStream} and a {Transfer} event. Notes:

- Refer to the notes in {withdraw}. Requirements:
- Refer to the requirements in {withdraw}.

```solidity
function withdrawMax(uint256 streamId, address to) external override;
```

**Parameters**

| Name       | Type      | Description                                     |
| ---------- | --------- | ----------------------------------------------- |
| `streamId` | `uint256` | The id of the stream to withdraw from.          |
| `to`       | `address` | The address that receives the withdrawn assets. |

### withdrawMultiple

Withdraws assets from streams to the provided address `to`.

Emits multiple {WithdrawFromLockupStream} and {Transfer} events. Notes:

- This function attempts to call a hook on the recipient of each stream, unless `msg.sender` is the recipient.
  Requirements:
- All requirements from {withdraw} must be met for each stream.
- There must be an equal number of `streamIds` and `amounts`.

```solidity
function withdrawMultiple(
    uint256[] calldata streamIds,
    address to,
    uint128[] calldata amounts
)
    external
    override
    noDelegateCall;
```

**Parameters**

| Name        | Type        | Description                                                        |
| ----------- | ----------- | ------------------------------------------------------------------ |
| `streamIds` | `uint256[]` | The ids of the streams to withdraw from.                           |
| `to`        | `address`   | The address that receives the withdrawn assets.                    |
| `amounts`   | `uint128[]` | The amounts to withdraw, denoted in units of the asset's decimals. |

### \_isCallerStreamRecipientOrApproved

Checks whether `msg.sender` is the stream's recipient or an approved third party.

```solidity
function _isCallerStreamRecipientOrApproved(uint256 streamId) internal view returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### \_isCallerStreamSender

Checks whether `msg.sender` is the stream's sender.

```solidity
function _isCallerStreamSender(uint256 streamId) internal view virtual returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream id for the query. |

### \_statusOf

_Retrieves the stream's status without performing a null check._

```solidity
function _statusOf(uint256 streamId) internal view virtual returns (Lockup.Status status);
```

### \_withdrawableAmountOf

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _withdrawableAmountOf(uint256 streamId) internal view virtual returns (uint128 withdrawableAmount);
```

### \_cancel

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _cancel(uint256 tokenId) internal virtual;
```

### \_renounce

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _renounce(uint256 streamId) internal virtual;
```

### \_withdraw

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _withdraw(uint256 streamId, address to, uint128 amount) internal virtual;
```
