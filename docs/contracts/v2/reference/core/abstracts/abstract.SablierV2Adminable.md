# SablierV2Adminable
[Git Source](https://github.com/sablierhq/v2-core/blob/8b6a851f4185bd5af0e89a0f6a6eb2fed069cd10/docs/contracts/v2/reference/core/abstracts)

**Inherits:**
[ISablierV2Adminable](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2Adminable.md)

*Abstract contract that implements the {ISablierV2Adminable} interface.*


## State Variables
### admin
The address of the admin account or contract.


```solidity
address public override admin;
```


## Functions
### onlyAdmin

Reverts if called by any account other than the admin.


```solidity
modifier onlyAdmin();
```

### transferAdmin

Transfers the admin of the contract to a new address.
Notes:
- Does not revert if the admin is the same.
- This function can potentially leave the contract without an admin, thereby removing any
functionality that is only available to the admin.
Requirements:
- The caller must be the current contract admin.


```solidity
function transferAdmin(address newAdmin) public virtual override onlyAdmin;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newAdmin`|`address`|The address of the new admin.|


