# SablierFlowBase

[Git Source](https://github.com/sablier-labs/flow/blob/a0fa33d2843af0817e34970cdc05822ead31daaa/src/abstracts/SablierFlowBase.sol)

**Inherits:** [Adminable](/docs/reference/flow/contracts/abstracts/abstract.Adminable.md),
[ISablierFlowBase](/docs/reference/flow/contracts/interfaces/interface.ISablierFlowBase.md), ERC721

See the documentation in [ISablierFlowBase](/docs/reference/flow/contracts/interfaces/interface.ISablierFlowBase.md).

## State Variables

### MAX_FEE

Retrieves the maximum fee that can be charged by the broker and the protocol, denoted as a fixed-point percentage where
1e18 is 100%.

_This value is hard coded as a constant._

```solidity
UD60x18 public constant override MAX_FEE = UD60x18.wrap(0.1e18);
```

### aggregateBalance

Retrieves the sum of balances of all streams.

```solidity
mapping(IERC20 token => uint256 amount) public override aggregateBalance;
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

### protocolFee

Protocol fee for the provided ERC-20 token, denoted as a fixed-point percentage where 1e18 is 100%.

```solidity
mapping(IERC20 token => UD60x18 fee) public override protocolFee;
```

### protocolRevenue

Protocol revenue accrued for the provided ERC-20 token, denoted in token's decimals.

```solidity
mapping(IERC20 token => uint128 revenue) public override protocolRevenue;
```

### \_streams

_Sablier Flow streams mapped by unsigned integers._

```solidity
mapping(uint256 id => Flow.Stream stream) internal _streams;
```

## Functions

### constructor

_Emits {TransferAdmin} event._

```solidity
constructor(address initialAdmin, IFlowNFTDescriptor initialNFTDescriptor);
```

**Parameters**

| Name                   | Type                 | Description                                |
| ---------------------- | -------------------- | ------------------------------------------ |
| `initialAdmin`         | `address`            | The address of the initial contract admin. |
| `initialNFTDescriptor` | `IFlowNFTDescriptor` | The address of the initial NFT descriptor. |

### notNull

_Checks that `streamId` does not reference a null stream._

```solidity
modifier notNull(uint256 streamId);
```

### notPaused

_Checks that `streamId` does not reference a paused stream._

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

### updateMetadata

_Emits an ERC-4906 event to trigger an update of the NFT metadata._

```solidity
modifier updateMetadata(uint256 streamId);
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

### getRecipient

Retrieves the stream's recipient.

_Reverts if `streamId` references a null stream._

```solidity
function getRecipient(uint256 streamId) external view override notNull(streamId) returns (address recipient);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

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

### isPaused

Returns whether a stream is paused.

_Reverts if `streamId` references a null stream._

```solidity
function isPaused(uint256 streamId) external view override notNull(streamId) returns (bool result);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

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

### tokenURI

_See {IERC721Metadata-tokenURI}._

```solidity
function tokenURI(uint256 streamId) public view override(IERC721Metadata, ERC721) returns (string memory uri);
```

### collectFees

Collects the accrued fees by transferring them to the contract admin.

Emits a {CollectFees} event. Notes:

- If the admin is a contract, it must be able to receive native token payments, e.g., ETH for Ethereum Mainnet.

```solidity
function collectFees() external override;
```

### collectProtocolRevenue

Collect the protocol revenue accrued for the provided ERC-20 token.

Emits a {CollectProtocolRevenue} event. Requirements:

- `msg.sender` must be the contract admin.
- The accrued protocol revenue must be greater than zero.

```solidity
function collectProtocolRevenue(IERC20 token, address to) external override onlyAdmin;
```

**Parameters**

| Name    | Type      | Description                                                                   |
| ------- | --------- | ----------------------------------------------------------------------------- |
| `token` | `IERC20`  | The contract address of the ERC-20 token for which to claim protocol revenue. |
| `to`    | `address` | The address to send the protocol revenue.                                     |

### recover

Recover the surplus amount of tokens.

Emits a {Recover} event. Notes:

- The surplus amount is defined as the difference between the total balance of the contract for the provided ERC-20
  token and the sum of balances of all streams created using the same ERC-20 token. Requirements:
- `msg.sender` must be the contract admin.
- The surplus amount must be greater than zero.

```solidity
function recover(IERC20 token, address to) external override onlyAdmin;
```

**Parameters**

| Name    | Type      | Description                                              |
| ------- | --------- | -------------------------------------------------------- |
| `token` | `IERC20`  | The contract address of the ERC-20 token to recover for. |
| `to`    | `address` | The address to send the surplus amount.                  |

### setNFTDescriptor

Sets a new NFT descriptor contract, which produces the URI describing the Sablier stream NFTs.

Emits a {SetNFTDescriptor} and {BatchMetadataUpdate} event. Notes:

- Does not revert if the NFT descriptor is the same. Requirements:
- `msg.sender` must be the contract admin.

```solidity
function setNFTDescriptor(IFlowNFTDescriptor newNFTDescriptor) external override onlyAdmin;
```

**Parameters**

| Name               | Type                 | Description                                     |
| ------------------ | -------------------- | ----------------------------------------------- |
| `newNFTDescriptor` | `IFlowNFTDescriptor` | The address of the new NFT descriptor contract. |

### setProtocolFee

Sets a new protocol fee that will be charged on all the withdrawals from streams created with the provided ERC-20 token.

Emits a {SetProtocolFee} and {BatchMetadataUpdate} event. Notes:

- Does not revert if the fee is the same.
- It can be zero. Requirements:
- `msg.sender` must be the contract admin.
- `newProtocolFee` must not be greater than `MAX_FEE`.

```solidity
function setProtocolFee(IERC20 token, UD60x18 newProtocolFee) external override onlyAdmin;
```

**Parameters**

| Name             | Type      | Description                                                                   |
| ---------------- | --------- | ----------------------------------------------------------------------------- |
| `token`          | `IERC20`  | The contract address of the ERC-20 token to update the fee for.               |
| `newProtocolFee` | `UD60x18` | The new protocol fee, denoted as a fixed-point percentage where 1e18 is 100%. |

### supportsInterface

_See {IERC165-supportsInterface}._

```solidity
function supportsInterface(bytes4 interfaceId) public view override(IERC165, ERC721) returns (bool);
```

### \_isCallerStreamRecipientOrApproved

Checks whether `msg.sender` is the stream's recipient or an approved third party.

```solidity
function _isCallerStreamRecipientOrApproved(uint256 streamId) internal view returns (bool);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### \_update

Overrides the {ERC-721.\_update} function to check that the stream is transferable.

_The transferable flag is ignored if the current owner is 0, as the update in this case is a mint and is allowed.
Transfers to the zero address are not allowed, preventing accidental burns._

```solidity
function _update(
    address to,
    uint256 streamId,
    address auth
)
    internal
    override
    updateMetadata(streamId)
    returns (address);
```

**Parameters**

| Name       | Type      | Description                                                                                                                                                           |
| ---------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `to`       | `address` | The address of the new recipient of the stream.                                                                                                                       |
| `streamId` | `uint256` | ID of the stream to update.                                                                                                                                           |
| `auth`     | `address` | Optional parameter. If the value is not zero, the overridden implementation will check that `auth` is either the recipient of the stream, or an approved third party. |

**Returns**

| Name     | Type      | Description                                                 |
| -------- | --------- | ----------------------------------------------------------- |
| `<none>` | `address` | The original recipient of the `streamId` before the update. |
