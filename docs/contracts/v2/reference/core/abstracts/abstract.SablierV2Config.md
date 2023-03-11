# SablierV2Config
[Git Source](https://github.com/sablierhq/v2-core/blob/8b6a851f4185bd5af0e89a0f6a6eb2fed069cd10/docs/contracts/v2/reference/core/abstracts)

**Inherits:**
[ISablierV2Config](/docs/contracts/v2/reference/core/interfaces/abstract.SablierV2Adminable.md)

*Abstract contract that implements the {ISablierV2Config} interface.*


## State Variables
### MAX_FEE
The maximum fee that can be charged by either the protocol or a broker, as an UD60x18 number
where 100% = 1e18.

*This is initialized at construction time and cannot be changed later.*


```solidity
UD60x18 public immutable override MAX_FEE;
```


### comptroller
The address of the {SablierV2Comptroller} contract. The comptroller is in charge of the Sablier V2
protocol configuration, handling such values as the protocol fees.


```solidity
ISablierV2Comptroller public override comptroller;
```


### _protocolRevenues
*Protocol revenues mapped by ERC-20 asset addresses.*


```solidity
mapping(IERC20 asset => uint128 revenues) internal _protocolRevenues;
```


## Functions
### constructor

*Emits a {TransferAdmin} event.*


```solidity
constructor(address initialAdmin, ISablierV2Comptroller initialComptroller, UD60x18 maxFee);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`initialAdmin`|`address`|The address of the initial contract admin.|
|`initialComptroller`|`ISablierV2Comptroller`|The address of the initial comptroller.|
|`maxFee`|`UD60x18`|The maximum fee that can be charged by either the protocol or a broker, as an UD60x18 number where 100% = 1e18.|


### getProtocolRevenues

Queries the protocol revenues accrued for the provided ERC-20 asset, in units of the asset's decimals.


```solidity
function getProtocolRevenues(IERC20 asset) external view override returns (uint128 protocolRevenues);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`IERC20`|The contract address of the ERC-20 asset to make the query for.|


### claimProtocolRevenues

Claims all protocol revenues accrued for the provided ERC-20 asset.

*Emits a {ClaimProtocolRevenues} event.
Requirements:
- The caller must be the owner of the contract.*


```solidity
function claimProtocolRevenues(IERC20 asset) external override onlyAdmin;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`IERC20`|The contract address of the ERC-20 asset to claim the protocol revenues for.|


### setComptroller

Sets the {SablierV2Comptroller} contract. The comptroller is in charge of the protocol configuration,
handling such values as the protocol fees.

*Emits a {SetComptroller} event.
Notes:
- Does not revert if the comptroller is the same.
Requirements:
- The caller must be the contract admin.*


```solidity
function setComptroller(ISablierV2Comptroller newComptroller) external override onlyAdmin;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newComptroller`|`ISablierV2Comptroller`|The address of the new {SablierV2Comptroller} contract.|


