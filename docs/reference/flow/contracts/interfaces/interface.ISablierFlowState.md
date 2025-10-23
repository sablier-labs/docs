# ISablierFlowState

[Git Source](https://github.com/sablier-labs/flow/blob/a4143de45478f508bca8305fec2bd81b7ad25fe9/src/interfaces/ISablierFlowState.sol)

Contract with state variables (storage and constants) for the
[SablierFlow](/docs/reference/flow/contracts/contract.SablierFlow.md) contract, their respective getters and helpful
modifiers.

## Functions

### aggregateAmount

Retrieves the aggregate amount across all streams, denoted in units of the token's decimals.

_If tokens are directly transferred to the contract without using the stream creation functions, the ERC-20 balance may
be greater than the aggregate amount._

```solidity
function aggregateAmount(IERC20 token) external view returns (uint256);
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

### nativeToken

Retrieves the address of the ERC-20 interface of the native token, if it exists.

_The native tokens on some chains have a dual interface as ERC-20. For example, on Polygon the $POL token is the native
token and has an ERC-20 version at 0x0000000000000000000000000000000000001010. This means that `address(this).balance`
returns the same value as `balanceOf(address(this))`. To avoid any unintended behavior, these tokens cannot be used in
Sablier. As an alternative, users can use the Wrapped version of the token, i.e. WMATIC, which is a standard ERC-20
token._

```solidity
function nativeToken() external view returns (address);
```

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
