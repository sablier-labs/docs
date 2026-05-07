---
sidebar_position: 1
---

# SablierComptroller

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/8b6823c019ff7556ac9ad24cbb5ac62821854d2f/src/SablierComptroller.sol)

**Inherits:** ERC165Upgradeable,
[ISablierComptroller](/docs/reference/06-utils/contracts/interfaces/interface.ISablierComptroller.md),
**RoleAdminable**, UUPSUpgradeable

**Title:** SablierComptroller

See the documentation in
[ISablierComptroller](/docs/reference/06-utils/contracts/interfaces/interface.ISablierComptroller.md).

This contract inherits from OpenZeppelin's UUPS upgradeable contract and can perform an upgrade when used as an
implementation of an **ERC1967Proxy**.

## Constants

### MAX_FEE_USD

Retrieves the maximum USD fee that can be set for claiming an airdrop or withdrawing from a stream.

This is a constant state variable and is 100e8, which is equivalent to $100.

```solidity
uint256 public constant override MAX_FEE_USD = 100e8
```

### MINIMAL_INTERFACE_ID

The minimal interface ID of the comptroller.

Any new comptroller must support the minimal interface ID made up of the following functions:

1. {calculateMinFeeWeiFor} - used by protocols inherited from **IComptrollerable**.
2. {convertUSDFeeToWei} - used by protocols inherited from **IComptrollerable**.
3. {execute} - used by comptroller admin to perform necessary operations.
4. {getMinFeeUSDFor} - used by protocols inherited from **IComptrollerable**.

```solidity
bytes4 public constant MINIMAL_INTERFACE_ID = this.calculateMinFeeWeiFor.selector ^ this.convertUSDFeeToWei.selector
    ^ this.execute.selector ^ this.getMinFeeUSDFor.selector
```

### VERSION

The version of the comptroller contract.

This follows the format "v{Major}.{Minor}" (e.g., "v1.1").

```solidity
string public constant VERSION = "v1.1"
```

## State Variables

### oracle

Retrieves the oracle contract address, which provides price data for the native token.

A zero address indicates that the oracle is not set.

```solidity
address public override oracle
```

### \_protocolFees

A mapping of protocol fees.

```solidity
mapping(Protocol protocol => ProtocolFees fees) private _protocolFees
```

### attestor

Retrieves the attestor address used for verifying attestation signatures in merkle campaigns.

A zero address indicates that the attestor is not set.

```solidity
address public override attestor
```

### \_\_gap

We reserve 50 storage slots to allow for adding new state variables in this and its parent contracts in the future. A
gap of 45 slots is added in addition to 1 slot used by admin in **Adminable**, 1 empty slot used by the roles mapping, 1
slot used by the oracle, 1 empty slot used by protocol fees mapping and 1 slot used by the attestor.

```solidity
uint256[45] private __gap
```

## Functions

### notExceedMaxFeeUSD

Reverts if `newFeeUSD` exceeds the maximum allowed fee.

```solidity
modifier notExceedMaxFeeUSD(uint256 newFeeUSD) ;
```

### constructor

```solidity
constructor(address initialAdmin) RoleAdminable(initialAdmin);
```

**Parameters**

| Name           | Type      | Description                                |
| -------------- | --------- | ------------------------------------------ |
| `initialAdmin` | `address` | The address of the initial contract admin. |

### initialize

Initializes the parameters of the contract when used behind a proxy.

Once used, this function cannot be called again. Reverts if the caller is not an active proxy with the ERC-1967
compliant implementation pointing to self.

```solidity
function initialize(
    address initialAdmin,
    uint256 initialAirdropMinFeeUSD,
    uint256 initialBobMinFeeUSD,
    uint256 initialFlowMinFeeUSD,
    uint256 initialLockupMinFeeUSD,
    address initialOracle
)
    external
    initializer
    onlyProxy;
```

**Parameters**

| Name                      | Type      | Description                                |
| ------------------------- | --------- | ------------------------------------------ |
| `initialAdmin`            | `address` | The address of the initial contract admin. |
| `initialAirdropMinFeeUSD` | `uint256` | The initial airdrops min USD fee charged.  |
| `initialBobMinFeeUSD`     | `uint256` | The initial bob min USD fee charged.       |
| `initialFlowMinFeeUSD`    | `uint256` | The initial flow min USD fee charged.      |
| `initialLockupMinFeeUSD`  | `uint256` | The initial lockup min USD fee charged.    |
| `initialOracle`           | `address` | The initial oracle contract address.       |

### receive

Receive function to accept native tokens.

```solidity
receive() external payable;
```

### calculateMinFeeWei

Calculates the minimum fee in wei for the given protocol.

See the documentation for {convertUSDFeeToWei} for more details.

```solidity
function calculateMinFeeWei(Protocol protocol) external view override returns (uint256);
```

**Parameters**

| Name       | Type       | Description                                 |
| ---------- | ---------- | ------------------------------------------- |
| `protocol` | `Protocol` | The protocol as defined in {Protocol} enum. |

### calculateMinFeeWeiFor

Calculates the minimum fee in wei for the provided user for the given protocol.

If the custom fee is enabled, it returns the custom fee, otherwise it returns the default minimum fee. See the
documentation for {convertUSDFeeToWei} for more details.

```solidity
function calculateMinFeeWeiFor(Protocol protocol, address user) external view override returns (uint256);
```

**Parameters**

| Name       | Type       | Description                                 |
| ---------- | ---------- | ------------------------------------------- |
| `protocol` | `Protocol` | The protocol as defined in {Protocol} enum. |
| `user`     | `address`  | The user address.                           |

### convertUSDFeeToWei

Converts the fee amount from USD to Wei.

The price is considered to be 0 if:

1. The oracle is not set.
2. The min USD fee is 0.
3. The oracle price is ≤ 0.
4. The oracle's update timestamp is in the future.
5. The oracle price hasn't been updated in the last 24 hours.

```solidity
function convertUSDFeeToWei(uint256 feeUSD) external view override returns (uint256);
```

**Parameters**

| Name     | Type      | Description                                                                                  |
| -------- | --------- | -------------------------------------------------------------------------------------------- |
| `feeUSD` | `uint256` | The fee in USD, denominated in Chainlink's 8-decimal format for USD prices, where 1e8 is $1. |

**Returns**

| Name     | Type      | Description                                                         |
| -------- | --------- | ------------------------------------------------------------------- |
| `<none>` | `uint256` | The fee in wei, denominated in 18 decimals (1e18 = 1 native token). |

### getMinFeeUSD

Get the minimum fee in USD for the given protocol, paid in the native token of the chain, e.g., ETH for Ethereum
Mainnet. Use {calculateMinFeeWei} to retrieve the fee in wei.

The fee is denominated in Chainlink's 8-decimal format for USD prices, where 1e8 is $1.

```solidity
function getMinFeeUSD(Protocol protocol) external view override returns (uint256);
```

### getMinFeeUSDFor

Get the minimum fee in USD for the provided user for the given protocol, paid in the native token of the chain, e.g.,
ETH for Ethereum Mainnet. Use {calculateMinFeeWeiFor} to retrieve the fee in wei.

The fee is denominated in Chainlink's 8-decimal format for USD prices, where 1e8 is $1.

```solidity
function getMinFeeUSDFor(Protocol protocol, address user) external view override returns (uint256);
```

### supportsInterface

Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding
https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[ERC section] to learn more about how these ids are
created. This function call must use less than 30 000 gas.

```solidity
function supportsInterface(bytes4 interfaceId)
    public
    view
    virtual
    override(IERC165, ERC165Upgradeable)
    returns (bool);
```

### disableCustomFeeUSDFor

Disables the custom USD fee for the provided user for the given protocol, defaulting to the minimum fee.

Emits an {UpdateCustomFeeUSD} event. Notes:

- In case of airdrops, the new fee applies only to the future campaigns created by the user. Past campaigns are not
  affected.
- In case of streams, the new fee applies immediately to all the streams created by user. Requirements:
- `msg.sender` must be either the admin or have the `IRoleAdminable.FEE_MANAGEMENT_ROLE` role.

```solidity
function disableCustomFeeUSDFor(Protocol protocol, address user) external override onlyRole(FEE_MANAGEMENT_ROLE);
```

**Parameters**

| Name       | Type       | Description                                 |
| ---------- | ---------- | ------------------------------------------- |
| `protocol` | `Protocol` | The protocol as defined in {Protocol} enum. |
| `user`     | `address`  | The user address.                           |

### execute

Executes an external call to any contract and function.

Emits an {Execute} event. Requirements:

- `msg.sender` must be the admin.
- `target` must be a contract.

```solidity
function execute(
    address target,
    bytes calldata targetCallData
)
    external
    override
    onlyAdmin
    returns (bytes memory result);
```

**Parameters**

| Name             | Type      | Description                                                       |
| ---------------- | --------- | ----------------------------------------------------------------- |
| `target`         | `address` | The address of the target contract on which the data is executed. |
| `targetCallData` | `bytes`   | Function selector plus ABI encoded data.                          |

**Returns**

| Name     | Type    | Description               |
| -------- | ------- | ------------------------- |
| `result` | `bytes` | The result from the call. |

### lowerMinFeeUSDForCampaign

Calls `lowerMinFeeUSD` function on an existing campaign.

Notes:

- This function is a pass-through to the campaign's `ISablierMerkleBase.lowerMinFeeUSD` function.
- All validations are expected to be performed in the campaign's `lowerMinFeeUSD` function. Requirements:
- `msg.sender` must be either the admin or have the `IRoleAdminable.FEE_MANAGEMENT_ROLE` role.

```solidity
function lowerMinFeeUSDForCampaign(
    address campaign,
    uint256 newMinFeeUSD
)
    external
    override
    onlyRole(FEE_MANAGEMENT_ROLE);
```

**Parameters**

| Name           | Type      | Description                                            |
| -------------- | --------- | ------------------------------------------------------ |
| `campaign`     | `address` | The address of an existing campaign.                   |
| `newMinFeeUSD` | `uint256` | The new min USD fee to set, denominated in 8 decimals. |

### setAttestor

Sets the attestor address used for verifying attestation signatures in airdrop campaigns.

Emits a {SetAttestor} event. Notes:

- The default attestor to be used in merkle campaigns. It can be overridden by setting a different attestor in the
  campaign contract.
- Setting it to zero address would disable attestation-based claims for campaigns that have not set their own local
  attestor. Requirements:
- `msg.sender` must be either the admin or have the `IRoleAdminable.ATTESTOR_MANAGER_ROLE` role.

```solidity
function setAttestor(address newAttestor) external override onlyRole(ATTESTOR_MANAGER_ROLE);
```

**Parameters**

| Name          | Type      | Description                                           |
| ------------- | --------- | ----------------------------------------------------- |
| `newAttestor` | `address` | The new attestor address. It can be the zero address. |

### setAttestorForCampaign

Calls `setAttestor` function on an existing campaign contract.

Notes:

- This function is a pass-through to the campaign's `setAttestor` function.
- All validations are expected to be performed in the campaign's `setAttestor` function.
- Setting it to zero address would not allow the campaign to use the default attestor. Requirements:
- `msg.sender` must be either the admin or have the `IRoleAdminable.ATTESTOR_MANAGER_ROLE` role.

```solidity
function setAttestorForCampaign(
    address campaign,
    address newAttestor
)
    external
    override
    onlyRole(ATTESTOR_MANAGER_ROLE);
```

**Parameters**

| Name          | Type      | Description                                   |
| ------------- | --------- | --------------------------------------------- |
| `campaign`    | `address` | The address of an existing campaign contract. |
| `newAttestor` | `address` | The new attestor address.                     |

### setCustomFeeUSDFor

Sets the custom USD fee for the provided user for the given protocol.

Emits an {UpdateCustomFeeUSD} event. Notes:

- In case of airdrops, the new fee applies only to the future campaigns created by the user. Past campaigns are not
  affected.
- In case of streams, the new fee applies immediately to all the streams created by user. Requirements:
- `msg.sender` must be either the admin or have the `IRoleAdminable.FEE_MANAGEMENT_ROLE` role.
- `customFeeUSD` must be less than or equal to {MAX_FEE_USD}.

```solidity
function setCustomFeeUSDFor(
    Protocol protocol,
    address user,
    uint256 customFeeUSD
)
    external
    override
    onlyRole(FEE_MANAGEMENT_ROLE)
    notExceedMaxFeeUSD(customFeeUSD);
```

**Parameters**

| Name           | Type       | Description                                           |
| -------------- | ---------- | ----------------------------------------------------- |
| `protocol`     | `Protocol` | The protocol as defined in {Protocol} enum.           |
| `user`         | `address`  | The user address.                                     |
| `customFeeUSD` | `uint256`  | The custom USD fee to set, denominated in 8 decimals. |

### setMinFeeUSD

Sets a new min USD fee for the given protocol.

Emits a {SetMinFeeUSD} event. Notes:

- In case of airdrops, the new fee applies only to the future campaigns created by the user. Past campaigns are not
  affected.
- In case of streams, the new fee applies immediately to all the streams created by user. Requirements:
- `msg.sender` must be either the admin or have the `IRoleAdminable.FEE_MANAGEMENT_ROLE` role.
- `newMinFeeUSD` must be less than or equal to {MAX_FEE_USD}.

```solidity
function setMinFeeUSD(
    Protocol protocol,
    uint256 newMinFeeUSD
)
    external
    override
    onlyRole(FEE_MANAGEMENT_ROLE)
    notExceedMaxFeeUSD(newMinFeeUSD);
```

**Parameters**

| Name           | Type       | Description                                           |
| -------------- | ---------- | ----------------------------------------------------- |
| `protocol`     | `Protocol` | The protocol as defined in {Protocol} enum.           |
| `newMinFeeUSD` | `uint256`  | The custom USD fee to set, denominated in 8 decimals. |

### setOracle

Sets the oracle contract address. The zero address can be used to disable the oracle.

Emits a {SetOracle} event. Requirements:

- `msg.sender` must be the admin.
- If `newOracle` is not the zero address, the call to it must not fail.

```solidity
function setOracle(address newOracle) external override onlyAdmin;
```

**Parameters**

| Name        | Type      | Description                                                  |
| ----------- | --------- | ------------------------------------------------------------ |
| `newOracle` | `address` | The new oracle contract address. It can be the zero address. |

### transferFees

Transfers fees from the given protocol addresses to this contract, and then transfer the entire balance of this contract
to the fee recipient.

Emits a {TransferFees} event. Notes:

- If `feeRecipient` is a contract, it must be able to receive native tokens, e.g., ETH for Ethereum Mainnet.
- `protocolAddresses` can be empty. Requirements: `feeRecipient` must not be the zero address.
- If `msg.sender` has neither the `IRoleAdminable.FEE_COLLECTOR_ROLE` role nor is the contract admin, then
  `feeRecipient` must be the admin address.
- `protocolAddresses` must implement the **IComptrollerable** interface.

```solidity
function transferFees(address[] calldata protocolAddresses, address feeRecipient) external override;
```

**Parameters**

| Name                | Type        | Description                                                                         |
| ------------------- | ----------- | ----------------------------------------------------------------------------------- |
| `protocolAddresses` | `address[]` | An array of addresses of the Sablier protocols from which fees is transferred from. |
| `feeRecipient`      | `address`   | The address to which the entire fee from this contract is transferred.              |

### withdrawERC20Token

Withdraws the entire ERC-20 token balance from the comptroller to a specified recipient.

Emits a {WithdrawERC20Token} event. Requirements:

- `msg.sender` must be the admin.
- `to` must not be the zero address.
- The token balance of this contract must not be zero.

```solidity
function withdrawERC20Token(IERC20 token, address to) external override onlyAdmin;
```

**Parameters**

| Name    | Type      | Description                        |
| ------- | --------- | ---------------------------------- |
| `token` | `IERC20`  | The ERC-20 token to withdraw.      |
| `to`    | `address` | The address to send the tokens to. |

### \_authorizeUpgrade

This function is called by `UUPSUpgradeable.upgradeToAndCall` when changing the implementation of the proxy contract.
Reverts if the caller is not the proxy admin.

```solidity
function _authorizeUpgrade(address newImplementation) internal override onlyAdmin;
```

### \_convertUSDFeeToWei

See the documentation for the user-facing functions that call this private function.

```solidity
function _convertUSDFeeToWei(uint256 minFeeUSD) private view returns (uint256);
```

### \_getMinFeeUSDFor

See the documentation for the user-facing functions that call this private function.

```solidity
function _getMinFeeUSDFor(Protocol protocol, address user) private view returns (uint256);
```

### \_notExceedMaxFeeUSD

A private function is used instead of inlining this logic in a modifier because Solidity copies modifiers into every
function that uses them.

```solidity
function _notExceedMaxFeeUSD(uint256 newFeeUSD) private pure;
```

### \_initialize

See the documentation for the user-facing functions that call this private function.

```solidity
function _initialize(
    uint256 initialAirdropMinFeeUSD,
    uint256 initialBobMinFeeUSD,
    uint256 initialFlowMinFeeUSD,
    uint256 initialLockupMinFeeUSD,
    address initialOracle
)
    private;
```

### \_setOracle

See the documentation for the user-facing functions that call this private function.

```solidity
function _setOracle(address newOracle) private;
```
