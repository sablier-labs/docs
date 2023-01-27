# SablierV2LockupLinear
[Git Source](https://github.com/sablierhq/v2-core/blob/cc0ad3978d3901ec331d3c24fbc36ee2b5a297c0/src/SablierV2LockupLinear.sol)

**Inherits:**
[ISablierV2LockupLinear](/protocol/technical-reference-v2/interfaces/contract.ISablierV2LockupLinear.md), ERC721, [SablierV2Lockup](/protocol/technical-reference-v2/abstracts/contract.SablierV2Lockup.md)

*This contract implements the `ISablierV2LockupLinear` nterface.*


## State Variables
### _streams
*Sablier V2 linear lockup streams mapped by unsigned integers.*


```solidity
mapping(uint256 => LockupLinearStream) internal _streams;
```


## Functions
### constructor


```solidity
constructor(address initialAdmin, ISablierV2Comptroller initialComptroller, UD60x18 maxFee)
    SablierV2Lockup(initialAdmin, initialComptroller, maxFee);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`initialAdmin`|`address`|The address of the initial contract admin.|
|`initialComptroller`|`ISablierV2Comptroller`|The address of the initial comptroller.|
|`maxFee`|`UD60x18`|The maximum fee that can be charged by either the protocol or a broker, as an UD60x18 number where 100% = 1e18.|


### getAsset

Queries the address of the ERC-20 asset used for streaming.


```solidity
function getAsset(uint256 streamId) external view override returns (IERC20 asset);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`IERC20`|The contract address of the ERC-20 asset used for streaming.|


### getCliffTime

Queries the cliff time of the stream.


```solidity
function getCliffTime(uint256 streamId) external view override returns (uint40 cliffTime);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getDepositAmount

Queries the amount deposited in the stream, in units of the asset's decimals.


```solidity
function getDepositAmount(uint256 streamId) external view override returns (uint128 depositAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getRange

Queries the range of the stream, a struct that encapsulates (i) the start time of the stream,


```solidity
function getRange(uint256 streamId) external view override returns (Range memory range);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getRecipient

Queries the recipient of the stream.


```solidity
function getRecipient(uint256 streamId)
    public
    view
    override(ISablierV2Lockup, SablierV2Lockup)
    returns (address recipient);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getReturnableAmount

Calculates the amount that the sender would be returned if the stream was canceled, in units of the
asset's decimals.


```solidity
function getReturnableAmount(uint256 streamId) external view override returns (uint128 returnableAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getSender

Queries the sender of the stream.


```solidity
function getSender(uint256 streamId) external view override returns (address sender);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getStartTime

Queries the start time of the stream.


```solidity
function getStartTime(uint256 streamId) external view override returns (uint40 startTime);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getStatus

Queries the status of the stream.


```solidity
function getStatus(uint256 streamId)
    public
    view
    virtual
    override(ISablierV2Lockup, SablierV2Lockup)
    returns (Status status);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getStopTime

Queries the stop time of the stream.


```solidity
function getStopTime(uint256 streamId) external view override returns (uint40 stopTime);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getStream

Queries the stream struct entity.


```solidity
function getStream(uint256 streamId) external view override returns (LockupLinearStream memory stream);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getStreamedAmount

Calculates the amount that has been streamed to the recipient, in units of the asset's decimals.


```solidity
function getStreamedAmount(uint256 streamId) public view override returns (uint128 streamedAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getWithdrawableAmount

Calculates the amount that the recipient can withdraw from the stream, in units of the asset's decimals.


```solidity
function getWithdrawableAmount(uint256 streamId)
    public
    view
    override(ISablierV2Lockup, SablierV2Lockup)
    returns (uint128 withdrawableAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### getWithdrawnAmount

Queries the amount withdrawn from the stream, in units of the asset's decimals.


```solidity
function getWithdrawnAmount(uint256 streamId) external view override returns (uint128 withdrawnAmount);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### isCancelable

Checks whether the stream is cancelable or not.
Notes:
- Always returns `false` if the stream is not active.


```solidity
function isCancelable(uint256 streamId) public view override(ISablierV2Lockup, SablierV2Lockup) returns (bool result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|


### tokenURI


```solidity
function tokenURI(uint256 streamId) public pure override(IERC721Metadata, ERC721) returns (string memory uri);
```

### createWithDurations

Creates a stream funded by `msg.sender` wrapped in an ERC-721 NFT, setting the start time to
`block.timestamp` and the stop time to `block.timestamp + duration`.

:::note

Emits a `CreateLockupLinearStream` nd a `Transfer` vent.
Requirements:
- All from `createWithRange}.

:::



```solidity
function createWithDurations(
    address sender,
    address recipient,
    uint128 grossDepositAmount,
    IERC20 asset,
    bool cancelable,
    Durations calldata durations,
    Broker calldata broker
) external override returns (uint256 streamId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|The address from which to stream the assets, which will have the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.|
|`recipient`|`address`|The address toward which to stream the assets.|
|`grossDepositAmount`|`uint128`|The gross amount of assets to be deposited, inclusive of fees, in units of the asset's decimals.|
|`asset`|`IERC20`|The contract address of the ERC-20 asset to use for streaming.|
|`cancelable`|`bool`|A boolean that indicates whether the stream will be cancelable or not.|
|`durations`|`Durations`|A struct that encapsulates (i) the duration of the cliff period and (ii) the total duration of the stream, both in seconds.|
|`broker`|`Broker`|An optional struct that encapsulates (i) the address of the broker that has helped create the stream and (ii) the percentage fee that the broker is paid from the gross deposit amount, as an UD60x18 number.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the newly created stream.|


### createWithRange

Creates a new stream funded by `msg.sender` wrapped in an ERC-721 NFT, setting the start time and the
stop time to the provided values.

:::note

Emits a `CreateLockupLinearStream` nd a `Transfer` vent.
Notes:
- As long as they are ordered, it is not an error to set a range in the past.
Requirements:
- `recipient` must not be the zero address.
- `grossDepositAmount` must not be zero.
- `range.start` must not be greater than `range.cliff`.
- `range.cliff` must not be greater than `range.stop`.
- `msg.sender` must have allowed this contract to spend at least `grossDepositAmount` assets.
- If set, `broker.fee` must not be greater than `MAX_FEE`.

:::



```solidity
function createWithRange(
    address sender,
    address recipient,
    uint128 grossDepositAmount,
    IERC20 asset,
    bool cancelable,
    Range calldata range,
    Broker calldata broker
) external override returns (uint256 streamId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`sender`|`address`|The address from which to stream the assets, which will have the ability to cancel the stream. It doesn't have to be the same as `msg.sender`.|
|`recipient`|`address`|The address toward which to stream the assets.|
|`grossDepositAmount`|`uint128`|The gross amount of assets to deposit, inclusive of fees, in units of the asset's decimals.|
|`asset`|`IERC20`|The contract address of the ERC-20 asset to use for streaming.|
|`cancelable`|`bool`|A boolean that indicates whether the stream will be cancelable or not.|
|`range`|`Range`|A struct that encapsulates (i) the start time of the stream, (ii) the cliff time of the stream, and (iii) the stop time of the stream, all as Unix timestamps.|
|`broker`|`Broker`|An optional struct that encapsulates (i) the address of the broker that has helped create the stream and (ii) the percentage fee that the broker is paid from the deposit amount, as an UD60x18 number.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the newly created stream.|


### _isApprovedOrOwner

Checks whether the spender is authorized to interact with the stream.

*Unlike the ERC-721 implementation, this function does not check whether the owner is the zero address.*


```solidity
function _isApprovedOrOwner(uint256 streamId, address spender)
    internal
    view
    override
    returns (bool isApprovedOrOwner);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|
|`spender`|`address`|The spender to make the query for.|


### _isCallerStreamSender

Checks whether the `msg.sender` is the sender of the stream or not.


```solidity
function _isCallerStreamSender(uint256 streamId) internal view override returns (bool result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`streamId`|`uint256`|The id of the stream to make the query for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`result`|`bool`|Whether the `msg.sender` is the sender of the stream or not.|


### _burn

*See the documentation for the public functions that call this internal function.*


```solidity
function _burn(uint256 tokenId) internal override(ERC721, SablierV2Lockup);
```

### _cancel

*See the documentation for the public functions that call this internal function.*


```solidity
function _cancel(uint256 streamId) internal override onlySenderOrRecipient(streamId);
```

### _createWithRange

*See the documentation for the public functions that call this internal function.*


```solidity
function _createWithRange(CreateWithRangeParams memory params) internal returns (uint256 streamId);
```

### _renounce

*See the documentation for the public functions that call this internal function.*


```solidity
function _renounce(uint256 streamId) internal override;
```

### _withdraw

*See the documentation for the public functions that call this internal function.*


```solidity
function _withdraw(uint256 streamId, address to, uint128 amount) internal override;
```

## Structs
### CreateWithRangeParams
*This struct is needed to avoid the "Stack Too Deep" error.*


```solidity
struct CreateWithRangeParams `
    CreateLockupAmounts amounts;
    Range range;
    address sender;
    bool cancelable;
    address recipient;
    IERC20 asset;
    address broker;
}
```

