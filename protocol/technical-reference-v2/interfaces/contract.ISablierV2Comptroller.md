# ISablierV2Comptroller
[Git Source](https://github.com/sablierhq/v2-core/blob/71a38f2401905d2762c14a7b36c2334909bdb760/protocol/technical-reference-v2/interfaces)

**Inherits:**
IAdminable

This contract is in charge of the Sablier V2 protocol configuration, handling such values as the
protocol fees.


## Functions
### getProtocolFee

Queries the protocol fee charged on all Sablier V2 streams created with the provided token, as an
UD60x18 number where 100% = 1e18.


```solidity
function getProtocolFee(IERC20 token) external view returns (UD60x18 protocolFee);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`IERC20`|The address of the token to make the query for.|


### setProtocolFee

Sets a new protocol fee that will be charged on all streams created with the provided token.

*Emits a {SetProtocolFee} event.
Notes:
- The fee is not in units of the token's decimals, instead it follows the UD60x18 number format. Refer to the
PRBMath documentation for more detail on the logic of UD60x18.
- Does not revert if the fee is the same.
Requirements:
- The caller must be the admin of the contract.
- The new protocol fee cannot be greater than `MAX_FEE`.*


```solidity
function setProtocolFee(IERC20 token, UD60x18 newProtocolFee) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`token`|`IERC20`|The address of the token to make the query for.|
|`newProtocolFee`|`UD60x18`|The new protocol fee to set, as an UD60x18 number where 100% = 1e18.|


