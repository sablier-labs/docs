---
sidebar_position: 1
---
# SablierV2LockupLinear

[Git Source](https://github.com/sablierhq/v2-core/blob/8bd57ebb31fddf6ef262477e5a378027db8b85d8/docs/contracts/v2/reference/core)

**Inherits:**
[ISablierV2LockupLinear](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupLinear.md), ERC721,
[SablierV2Lockup](/docs/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup.md)

See the documentation in
[ISablierV2LockupLinear](docs/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupLinear.md).

## State Variables

### \_nextStreamId

_Counter for stream ids, used in the create functions._

```solidity
uint256 private _nextStreamId;
```

### \_streams

_Sablier V2 lockup linear streams mapped by unsigned integers._

```solidity
mapping(uint256 id => LockupLinear.Stream stream) private _streams;
```

## Functions

### constructor

_Emits a {TransferAdmin} event._

```solidity
constructor(
    address initialAdmin,
    ISablierV2Comptroller initialComptroller,
    ISablierV2NFTDescriptor initialNFTDescriptor,
    UD60x18 maxFee
)
    SablierV2Lockup(initialAdmin, initialComptroller, initialNFTDescriptor, maxFee);
```

**Parameters**

| Name                   | Type                      | Description                                                                                                     |
| ---------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `initialAdmin`         | `address`                 | The address of the initial contract admin.                                                                      |
| `initialComptroller`   | `ISablierV2Comptroller`   | The address of the initial comptroller.                                                                         |
| `initialNFTDescriptor` | `ISablierV2NFTDescriptor` | The address of the initial NFT descriptor.                                                                      |
| `maxFee`               | `UD60x18`                 | The maximum fee that can be charged by either the protocol or a broker, as an UD60x18 number where 100% = 1e18. |

### getAsset

Queries the address of the ERC-20 asset used for streaming.

```solidity
function getAsset(uint256 streamId) external view override returns (IERC20 asset);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

**Returns**

| Name    | Type     | Description                                                  |
| ------- | -------- | ------------------------------------------------------------ |
| `asset` | `IERC20` | The contract address of the ERC-20 asset used for streaming. |

### getCliffTime

Queries the cliff time of the lockup linear stream.

```solidity
function getCliffTime(uint256 streamId) external view override returns (uint40 cliffTime);
```

**Parameters**

| Name       | Type      | Description                                               |
| ---------- | --------- | --------------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup linear stream to make the query for. |

### getDepositAmount

Queries the amount deposited in the lockup stream, in units of the asset's decimals.

```solidity
function getDepositAmount(uint256 streamId) external view override returns (uint128 depositAmount);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### getEndTime

Queries the end time of the lockup stream.

```solidity
function getEndTime(uint256 streamId) external view override returns (uint40 endTime);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### getRange

Queries the range of the lockup linear stream, a struct that encapsulates (i) the start time of the stream, (ii) the
cliff time of the stream, and (iii) the end time of the stream, all as Unix timestamps.

```solidity
function getRange(uint256 streamId) external view override returns (LockupLinear.Range memory range);
```

**Parameters**

| Name       | Type      | Description                                               |
| ---------- | --------- | --------------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup linear stream to make the query for. |

### getRecipient

Queries the recipient of the lockup stream.

```solidity
function getRecipient(uint256 streamId)
    public
    view
    override(ISablierV2Lockup, SablierV2Lockup)
    returns (address recipient);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### getSender

Queries the sender of the lockup stream.

```solidity
function getSender(uint256 streamId) external view override returns (address sender);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### getStartTime

Queries the start time of the lockup stream.

```solidity
function getStartTime(uint256 streamId) external view override returns (uint40 startTime);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### getStatus

Queries the status of the lockup stream.

```solidity
function getStatus(uint256 streamId)
    public
    view
    virtual
    override(ISablierV2Lockup, SablierV2Lockup)
    returns (Lockup.Status status);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### getStream

Queries the lockup linear stream struct entity.

```solidity
function getStream(uint256 streamId) external view override returns (LockupLinear.Stream memory stream);
```

**Parameters**

| Name       | Type      | Description                                               |
| ---------- | --------- | --------------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup linear stream to make the query for. |

### getWithdrawnAmount

Queries the amount withdrawn from the lockup stream, in units of the asset's decimals.

```solidity
function getWithdrawnAmount(uint256 streamId) external view override returns (uint128 withdrawnAmount);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### isCancelable

Checks whether the lockup stream is cancelable or not.

Notes:

- Always returns `false` when the lockup stream is not active.

```solidity
function isCancelable(uint256 streamId) public view override(ISablierV2Lockup, SablierV2Lockup) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### nextStreamId

Counter for stream ids, used in the create functions.

```solidity
function nextStreamId() external view returns (uint256);
```

### returnableAmountOf

Calculates the amount that the sender would be paid if the lockup stream were to be canceled, in units of the asset's
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

The streaming function is:

$$
f(x) = x * d + c
$$

Where:

- $x$ is the elapsed time divided by the total duration of the stream.
- $d$ is the deposit amount.
- $c$ is the cliff amount.

```solidity
function streamedAmountOf(uint256 streamId)
    public
    view
    override(ISablierV2Lockup, ISablierV2LockupLinear)
    returns (uint128 streamedAmount);
```

**Parameters**

| Name       | Type      | Description                                               |
| ---------- | --------- | --------------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup linear stream to make the query for. |

### tokenURI

```solidity
function tokenURI(uint256 streamId) public view override(IERC721Metadata, ERC721) returns (string memory uri);
```

### withdrawableAmountOf

Calculates the amount that the recipient can withdraw from the lockup stream, in units of the asset's decimals.

```solidity
function withdrawableAmountOf(uint256 streamId)
    public
    view
    override(ISablierV2Lockup, SablierV2Lockup)
    returns (uint128 withdrawableAmount);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### createWithDurations

Creates a lockup linear stream with the start time set to `block.timestamp`, and the end time set to
`block.timestamp + params.durations.total`. The stream is funded by `msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {CreateLockupLinearStream} and a {Transfer} event. Requirements:

- All from {createWithRange}.

```solidity
function createWithDurations(LockupLinear.CreateWithDurations calldata params)
    external
    override
    noDelegateCall
    returns (uint256 streamId);
```

**Parameters**

| Name     | Type                               | Description                                       |
| -------- | ---------------------------------- | ------------------------------------------------- |
| `params` | `CreateWithDurations.LockupLinear` | Struct that encapsulates the function parameters. |

**Returns**

| Name       | Type      | Description                                       |
| ---------- | --------- | ------------------------------------------------- |
| `streamId` | `uint256` | The id of the newly created lockup linear stream. |

### createWithRange

Creates a lockup linear stream with the provided start time and end time as the range. The stream is funded by
`msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {CreateLockupLinearStream} and a {Transfer} event. Notes:

- As long as the times are ordered, it is not an error to set a range that is in the past. Requirements:
- The call must not be a delegate call.
- `params.totalAmount` must not be zero.
- If set, `params.broker.fee` must not be greater than `MAX_FEE`.
- `params.range.start` must not be greater than `params.range.cliff`.
- `params.range.cliff` must not be greater than `params.range.end`.
- `params.recipient` must not be the zero address.
- `msg.sender` must have allowed this contract to spend at least `params.totalAmount` assets.

```solidity
function createWithRange(LockupLinear.CreateWithRange calldata params)
    public
    override
    noDelegateCall
    returns (uint256 streamId);
```

**Parameters**

| Name     | Type                           | Description                                       |
| -------- | ------------------------------ | ------------------------------------------------- |
| `params` | `CreateWithRange.LockupLinear` | Struct that encapsulates the function parameters. |

**Returns**

| Name       | Type      | Description                                       |
| ---------- | --------- | ------------------------------------------------- |
| `streamId` | `uint256` | The id of the newly created lockup linear stream. |

### \_isApprovedOrOwner

Checks whether the spender is authorized to interact with the stream.

_Unlike the ERC-721 implementation, this function does not check whether the owner is the zero address._

```solidity
function _isApprovedOrOwner(
    uint256 streamId,
    address spender
)
    internal
    view
    override
    returns (bool isApprovedOrOwner);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The id of the stream to make the query for. |
| `spender`  | `address` | The spender to make the query for.          |

### \_isCallerStreamSender

Checks whether `msg.sender` is the sender of the stream or not.

```solidity
function _isCallerStreamSender(uint256 streamId) internal view override returns (bool result);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The id of the stream to make the query for. |

**Returns**

| Name     | Type   | Description                                              |
| -------- | ------ | -------------------------------------------------------- |
| `result` | `bool` | Whether `msg.sender` is the sender of the stream or not. |

### \_burn

_See the documentation for the public functions that call this internal function._

```solidity
function _burn(uint256 tokenId) internal override(ERC721, SablierV2Lockup);
```

### \_cancel

_See the documentation for the public functions that call this internal function._

```solidity
function _cancel(uint256 streamId) internal override onlySenderOrRecipient(streamId);
```

### \_createWithRange

_See the documentation for the public functions that call this internal function._

```solidity
function _createWithRange(LockupLinear.CreateWithRange memory params) internal returns (uint256 streamId);
```

### \_renounce

_See the documentation for the public functions that call this internal function._

```solidity
function _renounce(uint256 streamId) internal override;
```

### \_withdraw

_See the documentation for the public functions that call this internal function._

```solidity
function _withdraw(uint256 streamId, address to, uint128 amount) internal override;
```
