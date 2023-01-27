# SablierV2Comptroller
[Git Source](https://github.com/sablierhq/v2-core/blob/cc0ad3978d3901ec331d3c24fbc36ee2b5a297c0/src/SablierV2Comptroller.sol)

**Inherits:**
[ISablierV2Comptroller](/protocol/technical-reference-v2/interfaces/contract.ISablierV2Comptroller.md), Adminable

*This contract implements the `ISablierV2Comptroller` nterface.*


## State Variables
### flashFee
The global flash fee as an UD60x18 number where 100% = 1e18.

:::note

Notes:
- This is a fee percentage, not a fee amount. This should not be confused with the
{IERC3156FlashLender-flashFee` unction, which returns the fee amount for a given flash loan amount.
- Unlike the protocol fee, this is not a per-asset fee. It's a global fee applied to all flash loans.

:::



```solidity
UD60x18 public override flashFee;
```


### _flashAssets
*ERC-20 assets that can be flash loaned.*


```solidity
mapping(IERC20 => bool) internal _flashAssets;
```


### _protocolFees
*Global fees mapped by ERC-20 asset addresses.*


```solidity
mapping(IERC20 => UD60x18) internal _protocolFees;
```


## Functions
### constructor


```solidity
constructor(address initialAdmin);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`initialAdmin`|`address`|The address of the initial contract admin.|


### getProtocolFee

Queries the protocol fee charged on all streams created with the provided ERC-20 asset across
all Sablier V2 contracts.


```solidity
function getProtocolFee(IERC20 asset) external view override returns (UD60x18 protocolFee);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`IERC20`|The contract address of the ERC-20 asset to make the query for.|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`protocolFee`|`UD60x18`|The protocol fee as an UD60x18 number where 100% = 1e18.|


### isFlashLoanable

Checks whether the provided ERC-20 asset is flash loanable or not.


```solidity
function isFlashLoanable(IERC20 asset) external view override returns (bool result);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`IERC20`||


### setFlashFee

Sets a new flash fee that will be charged on all flash loans made with any ERC-20 asset.

:::note

Emits a `SetFlashFee` vent.
Notes:
- Does not revert if the fee is the same.
Requirements:
- The caller must be the contract admin.

:::



```solidity
function setFlashFee(UD60x18 newFlashFee) external override onlyAdmin;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newFlashFee`|`UD60x18`|The new flash fee to set, as an UD60x18 number where 100% = 1e18.|


### setProtocolFee

Sets a new protocol fee that will be charged on all streams created with the provided ERC-20 asset
across all Sablier V2 contracts.

:::note

Emits a `SetProtocolFee` vent.
Notes:
- The fee is not in units of the asset's decimals, but in the UD60x18 number format. Refer to the PRBMath
documentation for more detail on the logic of UD60x18.
- Does not revert if the fee is the same.
Requirements:
- The caller must be the contract admin.

:::



```solidity
function setProtocolFee(IERC20 asset, UD60x18 newProtocolFee) external override onlyAdmin;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`IERC20`|The contract address of the ERC-20 asset to make the query for.|
|`newProtocolFee`|`UD60x18`|The new protocol fee to set, as an UD60x18 number where 100% = 1e18.|


### toggleFlashAsset

Toggles the flash loanability of an ERC-20 asset. This flag is applied to all Sablier V2 contracts.

:::note

Emits a `ToggleFlashAsset` vent.
Requirements:
- The caller must be the admin.

:::



```solidity
function toggleFlashAsset(IERC20 asset) external override onlyAdmin;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`asset`|`IERC20`|The address of the ERC-20 asset to toggle.|


