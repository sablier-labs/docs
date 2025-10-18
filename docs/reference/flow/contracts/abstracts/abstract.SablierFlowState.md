# SablierFlowState

[Git Source](https://github.com/sablier-labs/flow/blob/a4143de45478f508bca8305fec2bd81b7ad25fe9/src/abstracts/SablierFlowState.sol)

**Inherits:** [ISablierFlowState](/docs/reference/flow/contracts/interfaces/interface.ISablierFlowState.md)

See the documentation in [ISablierFlowState](/docs/reference/flow/contracts/interfaces/interface.ISablierFlowState.md).

## State Variables

### aggregateAmount

Retrieves the aggregate amount across all streams, denoted in units of the token's decimals.

_If tokens are directly transferred to the contract without using the stream creation functions, the ERC-20 balance may
be greater than the aggregate amount._

```solidity
mapping(IERC20 token => uint256 amount) public override aggregateAmount;
```

### nativeToken

Retrieves the address of the ERC-20 interface of the native token, if it exists.

_The native tokens on some chains have a dual interface as ERC-20. For example, on Polygon the $POL token is the native
token and has an ERC-20 version at 0x0000000000000000000000000000000000001010. This means that `address(this).balance`
returns the same value as `balanceOf(address(this))`. To avoid any unintended behavior, these tokens cannot be used in
Sablier. As an alternative, users can use the Wrapped version of the token, i.e. WMATIC, which is a standard ERC-20
token._

```solidity
address public override nativeToken;
```

### nextStreamId

Counter for stream ids.

```solidity
uint256 public override nextStreamId;
```

### nftDescriptor

Contract that generates the non-fungible token URI.

```solidity
IFlowNFTDescriptor public override nftDescriptor;
```

### \_streams

_Sablier Flow streams mapped by unsigned integers._

```solidity
mapping(uint256 id => Flow.Stream stream) internal _streams;
```

## Functions

### constructor

```solidity
constructor(address initialNFTDescriptor);
```

**Parameters**

| Name                   | Type      | Description                                |
| ---------------------- | --------- | ------------------------------------------ |
| `initialNFTDescriptor` | `address` | The address of the initial NFT descriptor. |

### notNull

_Checks that `streamId` does not reference a null stream._

```solidity
modifier notNull(uint256 streamId);
```

### notPaused

_Checks that `streamId` does not reference a paused stream. Note that this implicitly checks that the stream is not
voided either._

```solidity
modifier notPaused(uint256 streamId);
```

### notVoided

_Checks that `streamId` does not reference a voided stream._

```solidity
modifier notVoided(uint256 streamId);
```

### onlySender

_Checks the `msg.sender` is the stream's sender._

```solidity
modifier onlySender(uint256 streamId);
```

### getBalance

Retrieves the balance of the stream, i.e. the total deposited amounts subtracted by the total withdrawn amounts, denoted
in token's decimals.

_Reverts if `streamId` references a null stream._

```solidity
function getBalance(uint256 streamId) external view override notNull(streamId) returns (uint128 balance);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getRatePerSecond

Retrieves the rate per second of the stream, denoted as a fixed-point number where 1e18 is 1 token per second.

_Reverts if `streamId` references a null stream._

```solidity
function getRatePerSecond(uint256 streamId) external view override notNull(streamId) returns (UD21x18 ratePerSecond);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to make the query for. |

### getSender

Retrieves the stream's sender.

_Reverts if `streamId` references a null stream._

```solidity
function getSender(uint256 streamId) external view override notNull(streamId) returns (address sender);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getSnapshotDebtScaled

Retrieves the snapshot debt of the stream, denoted as a fixed-point number where 1e18 is 1 token.

_Reverts if `streamId` references a null stream._

```solidity
function getSnapshotDebtScaled(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (uint256 snapshotDebtScaled);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getSnapshotTime

Retrieves the snapshot time of the stream, which is a Unix timestamp.

_Reverts if `streamId` references a null stream._

```solidity
function getSnapshotTime(uint256 streamId) external view override notNull(streamId) returns (uint40 snapshotTime);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to make the query for. |

### getStream

Retrieves the stream entity.

_Reverts if `streamId` references a null stream._

```solidity
function getStream(uint256 streamId) external view override notNull(streamId) returns (Flow.Stream memory stream);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getToken

Retrieves the token of the stream.

_Reverts if `streamId` references a null stream._

```solidity
function getToken(uint256 streamId) external view override notNull(streamId) returns (IERC20 token);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to make the query for. |

### getTokenDecimals

Retrieves the token decimals of the stream.

_Reverts if `streamId` references a null stream._

```solidity
function getTokenDecimals(uint256 streamId) external view override notNull(streamId) returns (uint8 tokenDecimals);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to make the query for. |

### isStream

Retrieves a flag indicating whether the stream exists.

_Does not revert if `streamId` references a null stream._

```solidity
function isStream(uint256 streamId) external view override returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### isTransferable

Retrieves a flag indicating whether the stream NFT is transferable.

_Reverts if `streamId` references a null stream._

```solidity
function isTransferable(uint256 streamId) external view override notNull(streamId) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### isVoided

Retrieves a flag indicating whether the stream is voided.

_Reverts if `streamId` references a null stream._

```solidity
function isVoided(uint256 streamId) external view override notNull(streamId) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### \_notNull

_A private function is used instead of inlining this logic in a modifier because Solidity copies modifiers into every
function that uses them._

```solidity
function _notNull(uint256 streamId) private view;
```
