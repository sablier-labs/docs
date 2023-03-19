---
sidebar_position: 2
---
# SablierV2LockupDynamic

[Git Source](https://github.com/sablierhq/v2-core/blob/6223a7bce69cdec996b0a95cb95d0f04cdb809be/docs/contracts/v2/reference/core)

**Inherits:**
[ISablierV2LockupDynamic](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupDynamic.md), ERC721,
[SablierV2Lockup](/docs/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup.md)

See the documentation in
[ISablierV2LockupDynamic](docs/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupDynamic.md).

## State Variables

### MAX_SEGMENT_COUNT

The maximum number of segments permitted in a lockup dynamic stream.

_This is initialized at construction time and cannot be changed later._

```solidity
uint256 public immutable override MAX_SEGMENT_COUNT;
```

### \_nextStreamId

_Counter for stream ids, used in the create functions._

```solidity
uint256 private _nextStreamId;
```

### \_streams

_Lockup dynamic streams mapped by unsigned integers ids._

```solidity
mapping(uint256 id => LockupDynamic.Stream stream) private _streams;
```

## Functions

### constructor

_Emits a {TransferAdmin} event._

```solidity
constructor(
    address initialAdmin,
    ISablierV2Comptroller initialComptroller,
    ISablierV2NFTDescriptor initialNFTDescriptor,
    UD60x18 maxFee,
    uint256 maxSegmentCount
)
    SablierV2Lockup(initialAdmin, initialComptroller, initialNFTDescriptor, maxFee);
```

**Parameters**

| Name                   | Type                      | Description                                                                                                     |
| ---------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `initialAdmin`         | `address`                 | The address of the initial contract admin.                                                                      |
| `initialComptroller`   | `ISablierV2Comptroller`   | The address of the initial comptroller.                                                                         |
| `initialNFTDescriptor` | `ISablierV2NFTDescriptor` | The address of the NFT descriptor contract.                                                                     |
| `maxFee`               | `UD60x18`                 | The maximum fee that can be charged by either the protocol or a broker, as an UD60x18 number where 100% = 1e18. |
| `maxSegmentCount`      | `uint256`                 | The maximum number of segments permitted in a stream.                                                           |

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

Queries the range of the lockup dynamic stream, a struct that encapsulates (i) the start time of the stream, and (ii)
the end time of of the stream, both as Unix timestamps.

```solidity
function getRange(uint256 streamId) external view override returns (LockupDynamic.Range memory range);
```

**Parameters**

| Name       | Type      | Description                                                |
| ---------- | --------- | ---------------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup dynamic stream to make the query for. |

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

### getSegments

Queries the segments the protocol uses to compose the custom streaming curve.

```solidity
function getSegments(uint256 streamId) external view override returns (LockupDynamic.Segment[] memory segments);
```

**Parameters**

| Name       | Type      | Description                                                |
| ---------- | --------- | ---------------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup dynamic stream to make the query for. |

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

Queries the lockup dynamic stream struct entity.

```solidity
function getStream(uint256 streamId) external view override returns (LockupDynamic.Stream memory stream);
```

**Parameters**

| Name       | Type      | Description                                                |
| ---------- | --------- | ---------------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup dynamic stream to make the query for. |

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

Checks whether the lockup stream is cancelable or not. Notes:

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
function returnableAmountOf(uint256 streamId) external view override returns (uint128 returnableAmount);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup stream to make the query for. |

### streamedAmountOf

Calculates the amount that has been streamed to the recipient, in units of the asset's decimals.

The streaming function is:

$$
f(x) = x^{exp} * csa + \Sigma(esa)
$$

Where:

- $x$ is the elapsed time divided by the total time in the current segment.
- $exp$ is the current segment exponent.
- $csa$ is the current segment amount.
- $\Sigma(esa)$ is the sum of all elapsed segments' amounts.

```solidity
function streamedAmountOf(uint256 streamId)
    public
    view
    override(ISablierV2Lockup, ISablierV2LockupDynamic)
    returns (uint128 streamedAmount);
```

**Parameters**

| Name       | Type      | Description                                                |
| ---------- | --------- | ---------------------------------------------------------- |
| `streamId` | `uint256` | The id of the lockup dynamic stream to make the query for. |

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

### createWithDeltas

Creates a lockup dynamic stream by setting the start time to `block.timestamp` and the end time to the sum of
`block.timestamp` and all segment deltas. The stream is funded by `msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {CreateLockupDynamicStream} and a {Transfer} event. Requirements:

- All from {createWithMilestones}.

```solidity
function createWithDeltas(LockupDynamic.CreateWithDeltas calldata params)
    external
    override
    noDelegateCall
    returns (uint256 streamId);
```

**Parameters**

| Name     | Type                             | Description                                       |
| -------- | -------------------------------- | ------------------------------------------------- |
| `params` | `CreateWithDeltas.LockupDynamic` | Struct that encapsulates the function parameters. |

**Returns**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the newly created lockup dynamic stream. |

### createWithMilestones

Creates a lockup dynamic stream with the provided milestones, implying the end time from the last segment's milestone.
The stream is funded by `msg.sender` and is wrapped in an ERC-721 NFT.

Emits a {CreateLockupDynamicStream} and a {Transfer} event. Notes:

- As long as the milestones are ordered, it is not an error to set the `params.startTime` and the milestones to a range
  that is in the past. Requirements:
- `params.recipient` must not be the zero address.
- `params.totalAmount` must not be zero.
- `params.segments` must hold at least one segment, but not more than `MAX_SEGMENT_COUNT`.
- The sum of the segment amounts must be equal to the deposit amount.
- The first segment's milestone must be greater than or equal to `params.startTime`.
- `params.startTime` must not be greater than the milestone of the last segment.
- `msg.sender` must have allowed this contract to spend at least `params.totalAmount` assets.
- If set, `params.broker.fee` must not be greater than `MAX_FEE`.
- The call must not be a delegate call.

```solidity
function createWithMilestones(LockupDynamic.CreateWithMilestones calldata params)
    external
    override
    noDelegateCall
    returns (uint256 streamId);
```

**Parameters**

| Name     | Type                                 | Description                                       |
| -------- | ------------------------------------ | ------------------------------------------------- |
| `params` | `CreateWithMilestones.LockupDynamic` | Struct that encapsulates the function parameters. |

**Returns**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The id of the newly created lockup dynamic stream. |

### \_calculateStreamedAmountForMultipleSegments

_Calculates the withdrawable amount for a stream with multiple segments. IMPORTANT: this function must be called only
after checking that the current time is less than the last segment's milestone, lest the loop below encounters an "index
out of bounds" error._

```solidity
function _calculateStreamedAmountForMultipleSegments(uint256 streamId) internal view returns (uint128 streamedAmount);
```

### \_calculateStreamedAmountForOneSegment

_Calculates the withdrawable amount for a stream with one segment._

```solidity
function _calculateStreamedAmountForOneSegment(uint256 streamId) internal view returns (uint128 streamedAmount);
```

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

### \_createWithMilestones

_See the documentation for the public functions that call this internal function._

```solidity
function _createWithMilestones(LockupDynamic.CreateWithMilestones memory params) internal returns (uint256 streamId);
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
