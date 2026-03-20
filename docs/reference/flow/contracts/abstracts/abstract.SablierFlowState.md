# SablierFlowState

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/003a71932c0e26e767a02c21205a077469406ac8/src/abstracts/SablierFlowState.sol)

**Inherits:** [ISablierFlowState](/docs/reference/flow/contracts/interfaces/interface.ISablierFlowState.md)

**Title:** SablierFlowState

See the documentation in [ISablierFlowState](/docs/reference/flow/contracts/interfaces/interface.ISablierFlowState.md).

## State Variables

### aggregateAmount

```solidity
mapping(IERC20 token => uint256 amount) public override aggregateAmount
```

### nativeToken

Retrieves the address of the ERC-20 interface of the native token, if it exists.

The native tokens on some chains have a dual interface as ERC-20. For example, on Polygon the $POL token is the native
token and has an ERC-20 version at 0x0000000000000000000000000000000000001010. This means that `address(this).balance`
returns the same value as `balanceOf(address(this))`. To avoid any unintended behavior, these tokens cannot be used in
Sablier. As an alternative, users can use the Wrapped version of the token, i.e. WMATIC, which is a standard ERC-20
token.

```solidity
address public override nativeToken
```

### nextStreamId

Counter for stream ids.

```solidity
uint256 public override nextStreamId
```

### nftDescriptor

Contract that generates the non-fungible token URI.

```solidity
IFlowNFTDescriptor public override nftDescriptor
```

### \_streams

Sablier Flow streams mapped by unsigned integers.

```solidity
mapping(uint256 id => Flow.Stream stream) internal _streams
```

## Functions

### constructor

```solidity
constructor(address initialNFTDescriptor) ;
```

**Parameters**

| Name                   | Type      | Description                                |
| ---------------------- | --------- | ------------------------------------------ |
| `initialNFTDescriptor` | `address` | The address of the initial NFT descriptor. |

### notNull

Checks that `streamId` does not reference a null stream.

```solidity
modifier notNull(uint256 streamId) ;
```

### notPaused

Checks that `streamId` does not reference a paused stream. Note that this implicitly checks that the stream is not
voided either.

```solidity
modifier notPaused(uint256 streamId) ;
```

### notVoided

Checks that `streamId` does not reference a voided stream.

```solidity
modifier notVoided(uint256 streamId) ;
```

### onlySender

Checks the `msg.sender` is the stream's sender.

```solidity
modifier onlySender(uint256 streamId) ;
```

### getBalance

Retrieves the balance of the stream, i.e. the total deposited amounts subtracted by the total withdrawn amounts, denoted
in token's decimals.

Reverts if `streamId` references a null stream.

```solidity
function getBalance(uint256 streamId) external view override notNull(streamId) returns (uint128 balance);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getRatePerSecond

Retrieves the rate per second of the stream, denoted as a fixed-point number where 1e18 is 1 token per second.

Reverts if `streamId` references a null stream.

```solidity
function getRatePerSecond(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (UD21x18 ratePerSecond);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to make the query for. |

### getSender

Retrieves the stream's sender.

Reverts if `streamId` references a null stream.

```solidity
function getSender(uint256 streamId) external view override notNull(streamId) returns (address sender);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getSnapshotDebtScaled

Retrieves the snapshot debt of the stream, denoted as a fixed-point number where 1e18 is 1 token.

Reverts if `streamId` references a null stream.

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

Reverts if `streamId` references a null stream.

```solidity
function getSnapshotTime(uint256 streamId) external view override notNull(streamId) returns (uint40 snapshotTime);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to make the query for. |

### getStream

Retrieves the stream entity.

Reverts if `streamId` references a null stream.

```solidity
function getStream(uint256 streamId) external view override notNull(streamId) returns (Flow.Stream memory stream);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### getToken

Retrieves the token of the stream.

Reverts if `streamId` references a null stream.

```solidity
function getToken(uint256 streamId) external view override notNull(streamId) returns (IERC20 token);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to make the query for. |

### getTokenDecimals

Retrieves the token decimals of the stream.

Reverts if `streamId` references a null stream.

```solidity
function getTokenDecimals(uint256 streamId) external view override notNull(streamId) returns (uint8 tokenDecimals);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to make the query for. |

### isStream

Retrieves a flag indicating whether the stream exists.

Does not revert if `streamId` references a null stream.

```solidity
function isStream(uint256 streamId) external view override returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### isTransferable

Retrieves a flag indicating whether the stream NFT is transferable.

Reverts if `streamId` references a null stream.

```solidity
function isTransferable(uint256 streamId) external view override notNull(streamId) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### isVoided

Retrieves a flag indicating whether the stream is voided.

Reverts if `streamId` references a null stream.

```solidity
function isVoided(uint256 streamId) external view override notNull(streamId) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### \_notNull

A private function is used instead of inlining this logic in a modifier because Solidity copies modifiers into every
function that uses them.

```solidity
function _notNull(uint256 streamId) private view;
```
