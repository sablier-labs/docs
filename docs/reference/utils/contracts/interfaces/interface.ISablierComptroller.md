# ISablierComptroller

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/003a71932c0e26e767a02c21205a077469406ac8/src/interfaces/ISablierComptroller.sol)

Inherits: IERC165, IERC1822Proxiable, IRoleAdminable

Title: ISablierComptroller

Manage fees across all Sablier protocols. State-changing functions are only accessible to the admin and the fee manager.

## Functions

### MAX_FEE_USD

Retrieves the maximum USD fee that can be set for claiming an airdrop or withdrawing from a stream.

This is a constant state variable and is 100e8, which is equivalent to $100.

```solidity
function MAX_FEE_USD() external view returns (uint256);
```

### MINIMAL_INTERFACE_ID

The minimal interface ID of the comptroller.

Any new comptroller must support the minimal interface ID made up of the following functions:

1. [calculateMinFeeWeiFor](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#calculateminfeeweifor) -
   used by protocols inherited from IComptrollerable.
2. [convertUSDFeeToWei](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#convertusdfeetowei) -
   used by protocols inherited from IComptrollerable.
3. [execute](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#execute) - used by comptroller
   admin to perform necessary operations.
4. [getMinFeeUSDFor](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#getminfeeusdfor) - used
   by protocols inherited from IComptrollerable.

```solidity
function MINIMAL_INTERFACE_ID() external view returns (bytes4);
```

### VERSION

The version of the comptroller contract.

This follows the format "v{Major}.{Minor}" (e.g., "v1.1").

```solidity
function VERSION() external view returns (string memory);
```

### attestor

Retrieves the attestor address used for verifying attestation signatures in merkle campaigns.

A zero address indicates that the attestor is not set.

```solidity
function attestor() external view returns (address);
```

### calculateMinFeeWei

Calculates the minimum fee in wei for the given protocol.

See the documentation for
[convertUSDFeeToWei](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#convertusdfeetowei) for
more details.

```solidity
function calculateMinFeeWei(Protocol protocol) external view returns (uint256);
```

Parameters

| Name       | Type       | Description                                 |
| ---------- | ---------- | ------------------------------------------- |
| `protocol` | `Protocol` | The protocol as defined in {Protocol} enum. |

### calculateMinFeeWeiFor

Calculates the minimum fee in wei for the provided user for the given protocol.

If the custom fee is enabled, it returns the custom fee, otherwise it returns the default minimum fee. See the
documentation for
[convertUSDFeeToWei](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#convertusdfeetowei) for
more details.

```solidity
function calculateMinFeeWeiFor(Protocol protocol, address user) external view returns (uint256);
```

Parameters

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
function convertUSDFeeToWei(uint256 feeUSD) external view returns (uint256);
```

Parameters

| Name     | Type      | Description                                                                                  |
| -------- | --------- | -------------------------------------------------------------------------------------------- |
| `feeUSD` | `uint256` | The fee in USD, denominated in Chainlink's 8-decimal format for USD prices, where 1e8 is $1. |

Returns

| Name     | Type      | Description                                                         |
| -------- | --------- | ------------------------------------------------------------------- |
| `<none>` | `uint256` | The fee in wei, denominated in 18 decimals (1e18 = 1 native token). |

### getMinFeeUSD

Get the minimum fee in USD for the given protocol, paid in the native token of the chain, e.g., ETH for Ethereum
Mainnet. Use
[calculateMinFeeWei](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#calculateminfeewei) to
retrieve the fee in wei.

The fee is denominated in Chainlink's 8-decimal format for USD prices, where 1e8 is $1.

```solidity
function getMinFeeUSD(Protocol protocol) external view returns (uint256);
```

### getMinFeeUSDFor

Get the minimum fee in USD for the provided user for the given protocol, paid in the native token of the chain, e.g.,
ETH for Ethereum Mainnet. Use
[calculateMinFeeWeiFor](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#calculateminfeeweifor)
to retrieve the fee in wei.

The fee is denominated in Chainlink's 8-decimal format for USD prices, where 1e8 is $1.

```solidity
function getMinFeeUSDFor(Protocol protocol, address user) external view returns (uint256);
```

### oracle

Retrieves the oracle contract address, which provides price data for the native token.

A zero address indicates that the oracle is not set.

```solidity
function oracle() external view returns (address);
```

### disableCustomFeeUSDFor

Disables the custom USD fee for the provided user for the given protocol, defaulting to the minimum fee.

Emits an
[UpdateCustomFeeUSD](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#updatecustomfeeusd)
event. Notes:

- In case of airdrops, the new fee applies only to the future campaigns created by the user. Past campaigns are not
  affected.
- In case of streams, the new fee applies immediately to all the streams created by user. Requirements:
- `msg.sender` must be either the admin or have the `IRoleAdminable.FEE_MANAGEMENT_ROLE` role.

```solidity
function disableCustomFeeUSDFor(Protocol protocol, address user) external;
```

Parameters

| Name       | Type       | Description                                 |
| ---------- | ---------- | ------------------------------------------- |
| `protocol` | `Protocol` | The protocol as defined in {Protocol} enum. |
| `user`     | `address`  | The user address.                           |

### execute

Executes an external call to any contract and function.

Emits an [Execute](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#execute) event.
Requirements:

- `msg.sender` must be the admin.
- `target` must be a contract.

```solidity
function execute(address target, bytes calldata targetCallData) external returns (bytes memory result);
```

Parameters

| Name             | Type      | Description                                                       |
| ---------------- | --------- | ----------------------------------------------------------------- |
| `target`         | `address` | The address of the target contract on which the data is executed. |
| `targetCallData` | `bytes`   | Function selector plus ABI encoded data.                          |

Returns

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
function lowerMinFeeUSDForCampaign(address campaign, uint256 newMinFeeUSD) external;
```

Parameters

| Name           | Type      | Description                                            |
| -------------- | --------- | ------------------------------------------------------ |
| `campaign`     | `address` | The address of an existing campaign.                   |
| `newMinFeeUSD` | `uint256` | The new min USD fee to set, denominated in 8 decimals. |

### setAttestor

Sets the attestor address used for verifying attestation signatures in airdrop campaigns.

Emits a [SetAttestor](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#setattestor) event.
Notes:

- The default attestor to be used in merkle campaigns. It can be overridden by setting a different attestor in the
  campaign contract.
- Setting it to zero address would disable attestation-based claims for campaigns that have not set their own local
  attestor. Requirements:
- `msg.sender` must be either the admin or have the `IRoleAdminable.ATTESTOR_MANAGER_ROLE` role.

```solidity
function setAttestor(address newAttestor) external;
```

Parameters

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
function setAttestorForCampaign(address campaign, address newAttestor) external;
```

Parameters

| Name          | Type      | Description                                   |
| ------------- | --------- | --------------------------------------------- |
| `campaign`    | `address` | The address of an existing campaign contract. |
| `newAttestor` | `address` | The new attestor address.                     |

### setCustomFeeUSDFor

Sets the custom USD fee for the provided user for the given protocol.

Emits an
[UpdateCustomFeeUSD](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#updatecustomfeeusd)
event. Notes:

- In case of airdrops, the new fee applies only to the future campaigns created by the user. Past campaigns are not
  affected.
- In case of streams, the new fee applies immediately to all the streams created by user. Requirements:
- `msg.sender` must be either the admin or have the `IRoleAdminable.FEE_MANAGEMENT_ROLE` role.
- `customFeeUSD` must be less than or equal to
  [MAX_FEE_USD](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#max_fee_usd).

```solidity
function setCustomFeeUSDFor(Protocol protocol, address user, uint256 customFeeUSD) external;
```

Parameters

| Name           | Type       | Description                                           |
| -------------- | ---------- | ----------------------------------------------------- |
| `protocol`     | `Protocol` | The protocol as defined in {Protocol} enum.           |
| `user`         | `address`  | The user address.                                     |
| `customFeeUSD` | `uint256`  | The custom USD fee to set, denominated in 8 decimals. |

### setMinFeeUSD

Sets a new min USD fee for the given protocol.

Emits a [SetMinFeeUSD](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#setminfeeusd) event.
Notes:

- In case of airdrops, the new fee applies only to the future campaigns created by the user. Past campaigns are not
  affected.
- In case of streams, the new fee applies immediately to all the streams created by user. Requirements:
- `msg.sender` must be either the admin or have the `IRoleAdminable.FEE_MANAGEMENT_ROLE` role.
- `newMinFeeUSD` must be less than or equal to
  [MAX_FEE_USD](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#max_fee_usd).

```solidity
function setMinFeeUSD(Protocol protocol, uint256 newMinFeeUSD) external;
```

Parameters

| Name           | Type       | Description                                           |
| -------------- | ---------- | ----------------------------------------------------- |
| `protocol`     | `Protocol` | The protocol as defined in {Protocol} enum.           |
| `newMinFeeUSD` | `uint256`  | The custom USD fee to set, denominated in 8 decimals. |

### setOracle

Sets the oracle contract address. The zero address can be used to disable the oracle.

Emits a [SetOracle](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#setoracle) event.
Requirements:

- `msg.sender` must be the admin.
- If `newOracle` is not the zero address, the call to it must not fail.

```solidity
function setOracle(address newOracle) external;
```

Parameters

| Name        | Type      | Description                                                  |
| ----------- | --------- | ------------------------------------------------------------ |
| `newOracle` | `address` | The new oracle contract address. It can be the zero address. |

### transferFees

Transfers fees from the given protocol addresses to this contract, and then transfer the entire balance of this contract
to the fee recipient.

Emits a [TransferFees](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#transferfees) event.
Notes:

- If `feeRecipient` is a contract, it must be able to receive native tokens, e.g., ETH for Ethereum Mainnet.
- `protocolAddresses` can be empty. Requirements: `feeRecipient` must not be the zero address.
- If `msg.sender` has neither the `IRoleAdminable.FEE_COLLECTOR_ROLE` role nor is the contract admin, then
  `feeRecipient` must be the admin address.
- `protocolAddresses` must implement the IComptrollerable interface.

```solidity
function transferFees(address[] calldata protocolAddresses, address feeRecipient) external;
```

Parameters

| Name                | Type        | Description                                                                         |
| ------------------- | ----------- | ----------------------------------------------------------------------------------- |
| `protocolAddresses` | `address[]` | An array of addresses of the Sablier protocols from which fees is transferred from. |
| `feeRecipient`      | `address`   | The address to which the entire fee from this contract is transferred.              |

### withdrawERC20Token

Withdraws the entire ERC-20 token balance from the comptroller to a specified recipient.

Emits a
[WithdrawERC20Token](/docs/reference/utils/contracts/interfaces/interface.ISablierComptroller.md#withdrawerc20token)
event. Requirements:

- `msg.sender` must be the admin.
- `to` must not be the zero address.
- The token balance of this contract must not be zero.

```solidity
function withdrawERC20Token(IERC20 token, address to) external;
```

Parameters

| Name    | Type      | Description                        |
| ------- | --------- | ---------------------------------- |
| `token` | `IERC20`  | The ERC-20 token to withdraw.      |
| `to`    | `address` | The address to send the tokens to. |

## Events

### Execute

Emitted when a target contract is called.

```solidity
event Execute(address indexed target, bytes targetCallData, bytes result);
```

### SetAttestor

Emitted when the attestor is set.

```solidity
event SetAttestor(address indexed caller, address indexed previousAttestor, address indexed newAttestor);
```

### SetMinFeeUSD

Emitted when the admin or the fee manager sets a new minimum USD fee.

```solidity
event SetMinFeeUSD(Protocol indexed protocol, address caller, uint256 previousMinFeeUSD, uint256 newMinFeeUSD);
```

### SetOracle

Emitted when the oracle contract address is set by the admin.

```solidity
event SetOracle(address indexed admin, address previousOracle, address newOracle);
```

### TransferFees

Emitted when the admin or the fee collector transfers the accrued fees to the fee recipient.

```solidity
event TransferFees(address indexed feeRecipient, uint256 feeAmount);
```

### UpdateCustomFeeUSD

Emitted when the admin or the fee manager sets/disables the custom USD fee for the provided user.

```solidity
event UpdateCustomFeeUSD(
    Protocol indexed protocol,
    address caller,
    address indexed user,
    uint256 previousMinFeeUSD,
    uint256 newMinFeeUSD
);
```

### WithdrawERC20Token

Emitted when the admin withdraws ERC-20 tokens from the comptroller.

```solidity
event WithdrawERC20Token(address indexed admin, IERC20 indexed token, address indexed to, uint256 amount);
```

## Structs

### CustomFeeUSD

Struct encapsulating the parameters of a custom USD fee.

```solidity
struct CustomFeeUSD {
    bool enabled;
    uint256 fee;
}
```

Properties

| Name      | Type      | Description                                                                                         |
| --------- | --------- | --------------------------------------------------------------------------------------------------- |
| `enabled` | `bool`    | Whether the fee is enabled. If false, the min USD fee will apply instead.                           |
| `fee`     | `uint256` | The fee amount in USD, denominated in Chainlink's 8-decimal format for USD prices, where 1e8 is $1. |

### ProtocolFees

Struct encapsulating the fees for a protocol.

```solidity
struct ProtocolFees {
    uint256 minFeeUSD;
    mapping(address user => CustomFeeUSD) customFeesUSD;
}
```

Properties

| Name            | Type                                    | Description                                                                                          |
| --------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `minFeeUSD`     | `uint256`                               | The minimum fee in USD, denominated in Chainlink's 8-decimal format for USD prices, where 1e8 is $1. |
| `customFeesUSD` | `mapping(address user => CustomFeeUSD)` |                                                                                                      |

## Enums

### Protocol

Enum representing the different protocols supported by the comptroller.

```solidity
enum Protocol {
    Airdrops,
    Flow,
    Lockup,
    Staking,
    Bob
}
```
