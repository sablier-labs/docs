# ISablierFlowBase

[Git Source](https://github.com/sablier-labs/flow/blob/a0fa33d2843af0817e34970cdc05822ead31daaa/src/interfaces/ISablierFlowBase.sol)

**Inherits:** IERC4906, IERC721Metadata, [IAdminable](/docs/reference/flow/contracts/interfaces/interface.IAdminable.md)

Base contract that includes state variables (storage and constants) for the
[SablierFlow](/docs/reference/flow/contracts/contract.SablierFlow.md) contract, their respective getters, helpful
modifiers, and helper functions.

_This contract also includes admin control functions._

## Functions

### MAX_FEE

Retrieves the maximum fee that can be charged by the broker and the protocol, denoted as a fixed-point percentage where
1e18 is 100%.

_This value is hard coded as a constant._

```solidity
function MAX_FEE() external view returns (UD60x18 fee);
```

### aggregateBalance

Retrieves the sum of balances of all streams.

```solidity
function aggregateBalance(IERC20 token) external view returns (uint256);
```

**Parameters**

| Name    | Type     | Description                     |
| ------- | -------- | ------------------------------- |
| `token` | `IERC20` | The ERC-20 token for the query. |

### getBalance

Retrieves the balance of the stream, i.e. the total deposited amounts subtracted by the total withdrawn amounts, denoted
in token's decimals.

_Reverts if `streamId` references a null stream._

```solidity
function getBalance(uint256 streamId) external view returns (uint128 balance);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getRatePerSecond

Retrieves the rate per second of the stream, denoted as a fixed-point number where 1e18 is 1 token per second.

_Reverts if `streamId` references a null stream._

```solidity
function getRatePerSecond(uint256 streamId) external view returns (UD21x18 ratePerSecond);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to make the query for. |

### getRecipient

Retrieves the stream's recipient.

_Reverts if `streamId` references a null stream._

```solidity
function getRecipient(uint256 streamId) external view returns (address recipient);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getSender

Retrieves the stream's sender.

_Reverts if `streamId` references a null stream._

```solidity
function getSender(uint256 streamId) external view returns (address sender);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getSnapshotDebtScaled

Retrieves the snapshot debt of the stream, denoted as a fixed-point number where 1e18 is 1 token.

_Reverts if `streamId` references a null stream._

```solidity
function getSnapshotDebtScaled(uint256 streamId) external view returns (uint256 snapshotDebtScaled);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getSnapshotTime

Retrieves the snapshot time of the stream, which is a Unix timestamp.

_Reverts if `streamId` references a null stream._

```solidity
function getSnapshotTime(uint256 streamId) external view returns (uint40 snapshotTime);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to make the query for. |

### getStream

Retrieves the stream entity.

_Reverts if `streamId` references a null stream._

```solidity
function getStream(uint256 streamId) external view returns (Flow.Stream memory stream);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getToken

Retrieves the token of the stream.

_Reverts if `streamId` references a null stream._

```solidity
function getToken(uint256 streamId) external view returns (IERC20 token);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to make the query for. |

### getTokenDecimals

Retrieves the token decimals of the stream.

_Reverts if `streamId` references a null stream._

```solidity
function getTokenDecimals(uint256 streamId) external view returns (uint8 tokenDecimals);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to make the query for. |

### isPaused

Returns whether a stream is paused.

_Reverts if `streamId` references a null stream._

```solidity
function isPaused(uint256 streamId) external view returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### isStream

Retrieves a flag indicating whether the stream exists.

_Does not revert if `streamId` references a null stream._

```solidity
function isStream(uint256 streamId) external view returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### isTransferable

Retrieves a flag indicating whether the stream NFT is transferable.

_Reverts if `streamId` references a null stream._

```solidity
function isTransferable(uint256 streamId) external view returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### isVoided

Retrieves a flag indicating whether the stream is voided.

_Reverts if `streamId` references a null stream._

```solidity
function isVoided(uint256 streamId) external view returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### nextStreamId

Counter for stream ids.

```solidity
function nextStreamId() external view returns (uint256);
```

**Returns**

| Name     | Type      | Description         |
| -------- | --------- | ------------------- |
| `<none>` | `uint256` | The next stream ID. |

### nftDescriptor

Contract that generates the non-fungible token URI.

```solidity
function nftDescriptor() external view returns (IFlowNFTDescriptor);
```

### protocolFee

Protocol fee for the provided ERC-20 token, denoted as a fixed-point percentage where 1e18 is 100%.

```solidity
function protocolFee(IERC20 token) external view returns (UD60x18);
```

### protocolRevenue

Protocol revenue accrued for the provided ERC-20 token, denoted in token's decimals.

```solidity
function protocolRevenue(IERC20 token) external view returns (uint128);
```

### collectFees

Collects the accrued fees by transferring them to the contract admin.

Emits a [CollectFees](/docs/reference/flow/contracts/interfaces/interface.ISablierFlowBase.md#collectfees) event. Notes:

- If the admin is a contract, it must be able to receive native token payments, e.g., ETH for Ethereum Mainnet.

```solidity
function collectFees() external;
```

### collectProtocolRevenue

Collect the protocol revenue accrued for the provided ERC-20 token.

Emits a
[CollectProtocolRevenue](/docs/reference/flow/contracts/interfaces/interface.ISablierFlowBase.md#collectprotocolrevenue)
event. Requirements:

- `msg.sender` must be the contract admin.
- The accrued protocol revenue must be greater than zero.

```solidity
function collectProtocolRevenue(IERC20 token, address to) external;
```

**Parameters**

| Name    | Type      | Description                                                                   |
| ------- | --------- | ----------------------------------------------------------------------------- |
| `token` | `IERC20`  | The contract address of the ERC-20 token for which to claim protocol revenue. |
| `to`    | `address` | The address to send the protocol revenue.                                     |

### recover

Recover the surplus amount of tokens.

Emits a [Recover](/docs/reference/flow/contracts/interfaces/interface.ISablierFlowBase.md#recover) event. Notes:

- The surplus amount is defined as the difference between the total balance of the contract for the provided ERC-20
  token and the sum of balances of all streams created using the same ERC-20 token. Requirements:
- `msg.sender` must be the contract admin.
- The surplus amount must be greater than zero.

```solidity
function recover(IERC20 token, address to) external;
```

**Parameters**

| Name    | Type      | Description                                              |
| ------- | --------- | -------------------------------------------------------- |
| `token` | `IERC20`  | The contract address of the ERC-20 token to recover for. |
| `to`    | `address` | The address to send the surplus amount.                  |

### setNFTDescriptor

Sets a new NFT descriptor contract, which produces the URI describing the Sablier stream NFTs.

Emits a [SetNFTDescriptor](/docs/reference/flow/contracts/interfaces/interface.ISablierFlowBase.md#setnftdescriptor) and
{BatchMetadataUpdate} event. Notes:

- Does not revert if the NFT descriptor is the same. Requirements:
- `msg.sender` must be the contract admin.

```solidity
function setNFTDescriptor(IFlowNFTDescriptor newNFTDescriptor) external;
```

**Parameters**

| Name               | Type                 | Description                                     |
| ------------------ | -------------------- | ----------------------------------------------- |
| `newNFTDescriptor` | `IFlowNFTDescriptor` | The address of the new NFT descriptor contract. |

### setProtocolFee

Sets a new protocol fee that will be charged on all the withdrawals from streams created with the provided ERC-20 token.

Emits a [SetProtocolFee](/docs/reference/flow/contracts/interfaces/interface.ISablierFlowBase.md#setprotocolfee) and
{BatchMetadataUpdate} event. Notes:

- Does not revert if the fee is the same.
- It can be zero. Requirements:
- `msg.sender` must be the contract admin.
- `newProtocolFee` must not be greater than `MAX_FEE`.

```solidity
function setProtocolFee(IERC20 token, UD60x18 newProtocolFee) external;
```

**Parameters**

| Name             | Type      | Description                                                                   |
| ---------------- | --------- | ----------------------------------------------------------------------------- |
| `token`          | `IERC20`  | The contract address of the ERC-20 token to update the fee for.               |
| `newProtocolFee` | `UD60x18` | The new protocol fee, denoted as a fixed-point percentage where 1e18 is 100%. |

## Events

### CollectFees

Emitted when the accrued fees are collected.

```solidity
event CollectFees(address indexed admin, uint256 indexed feeAmount);
```

**Parameters**

| Name        | Type      | Description                                                             |
| ----------- | --------- | ----------------------------------------------------------------------- |
| `admin`     | `address` | The address of the current contract admin, which has received the fees. |
| `feeAmount` | `uint256` | The amount of collected fees.                                           |

### CollectProtocolRevenue

Emitted when the contract admin collects protocol revenue accrued.

```solidity
event CollectProtocolRevenue(address indexed admin, IERC20 indexed token, address to, uint128 revenue);
```

**Parameters**

| Name      | Type      | Description                                                                  |
| --------- | --------- | ---------------------------------------------------------------------------- |
| `admin`   | `address` | The address of the contract admin.                                           |
| `token`   | `IERC20`  | The address of the ERC-20 token the protocol revenue has been collected for. |
| `to`      | `address` | The address the protocol revenue has been sent to.                           |
| `revenue` | `uint128` | The amount of protocol revenue collected.                                    |

### Recover

Emitted when the contract admin recovers the surplus amount of token.

```solidity
event Recover(address indexed admin, IERC20 indexed token, address to, uint256 surplus);
```

**Parameters**

| Name      | Type      | Description                                                                |
| --------- | --------- | -------------------------------------------------------------------------- |
| `admin`   | `address` | The address of the contract admin.                                         |
| `token`   | `IERC20`  | The address of the ERC-20 token the surplus amount has been recovered for. |
| `to`      | `address` | The address the surplus amount has been sent to.                           |
| `surplus` | `uint256` | The amount of surplus tokens recovered.                                    |

### SetNFTDescriptor

Emitted when the contract admin sets a new NFT descriptor contract.

```solidity
event SetNFTDescriptor(address indexed admin, IFlowNFTDescriptor oldNFTDescriptor, IFlowNFTDescriptor newNFTDescriptor);
```

**Parameters**

| Name               | Type                 | Description                                     |
| ------------------ | -------------------- | ----------------------------------------------- |
| `admin`            | `address`            | The address of the contract admin.              |
| `oldNFTDescriptor` | `IFlowNFTDescriptor` | The address of the old NFT descriptor contract. |
| `newNFTDescriptor` | `IFlowNFTDescriptor` | The address of the new NFT descriptor contract. |

### SetProtocolFee

Emitted when the contract admin sets a new protocol fee for the provided ERC-20 token.

```solidity
event SetProtocolFee(address indexed admin, IERC20 indexed token, UD60x18 oldProtocolFee, UD60x18 newProtocolFee);
```

**Parameters**

| Name             | Type      | Description                                                            |
| ---------------- | --------- | ---------------------------------------------------------------------- |
| `admin`          | `address` | The address of the contract admin.                                     |
| `token`          | `IERC20`  | The address of the ERC-20 token the new protocol fee has been set for. |
| `oldProtocolFee` | `UD60x18` | The old protocol fee, denoted as a fixed-point percentage.             |
| `newProtocolFee` | `UD60x18` | The new protocol fee, denoted as a fixed-point percentage.             |
