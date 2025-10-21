---
sidebar_position: 1
---

# SablierFlow

[Git Source](https://github.com/sablier-labs/flow/blob/a4143de45478f508bca8305fec2bd81b7ad25fe9/src/SablierFlow.sol)

**Inherits:** [Batch](/docs/reference/flow/contracts/abstracts/abstract.Batch.md),
[Comptrollerable](/docs/reference/flow/contracts/abstracts/abstract.Comptrollerable.md), ERC721,
[ISablierFlow](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md),
[NoDelegateCall](/docs/reference/flow/contracts/abstracts/abstract.NoDelegateCall.md),
[SablierFlowState](/docs/reference/flow/contracts/abstracts/abstract.SablierFlowState.md)

See the documentation in [ISablierFlow](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md).

## Functions

### constructor

```solidity
constructor(
    address initialComptroller,
    address initialNFTDescriptor
)
    [Comptrollerable](/docs/reference/flow/contracts/abstracts/abstract.Comptrollerable.md)(initialComptroller)
    ERC721("Sablier Flow NFT", "SAB-FLOW")
    SablierFlowState(initialNFTDescriptor);
```

**Parameters**

| Name                   | Type      | Description                                      |
| ---------------------- | --------- | ------------------------------------------------ |
| `initialComptroller`   | `address` | The address of the initial comptroller contract. |
| `initialNFTDescriptor` | `address` | The address of the initial NFT descriptor.       |

### updateMetadata

_Emits an ERC-4906 event to trigger an update of the NFT metadata._

```solidity
modifier updateMetadata(uint256 streamId);
```

### calculateMinFeeWei

Calculates the minimum fee in wei required to withdraw from the given stream ID.

_Reverts if `streamId` references a null stream._

```solidity
function calculateMinFeeWei(uint256 streamId) external view override notNull(streamId) returns (uint256 minFeeWei);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### coveredDebtOf

Returns the amount of debt covered by the stream balance, denoted in token's decimals.

_Reverts if `streamId` references a null stream._

```solidity
function coveredDebtOf(uint256 streamId) external view override notNull(streamId) returns (uint128 coveredDebt);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### depletionTimeOf

Returns the time at which the total debt exceeds stream balance. If the total debt exceeds the stream balance, it
returns 0.

\*Reverts on the following conditions:

- If `streamId` references a paused or a null stream.
- If stream balance is zero.\*

```solidity
function depletionTimeOf(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    notPaused(streamId)
    returns (uint256 depletionTime);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

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

### ongoingDebtScaledOf

Returns the amount of debt accrued since the snapshot time until now, denoted as a fixed-point number where 1e18 is 1
token. If the stream is pending, it returns zero.

_Reverts if `streamId` references a null stream._

```solidity
function ongoingDebtScaledOf(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (uint256 ongoingDebtScaled);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### refundableAmountOf

Returns the amount that the sender can be refunded from the stream, denoted in token's decimals.

_Reverts if `streamId` references a null stream._

```solidity
function refundableAmountOf(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (uint128 refundableAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### statusOf

Returns the stream's status.

_Reverts if `streamId` references a null stream. Integrators should exercise caution when depending on the return value
of this function as streams can be paused and resumed at any moment._

```solidity
function statusOf(uint256 streamId) external view override notNull(streamId) returns (Flow.Status status);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### totalDebtOf

Returns the total amount owed by the sender to the recipient, denoted in token's decimals.

_Reverts if `streamId` references a null stream._

```solidity
function totalDebtOf(uint256 streamId) external view override notNull(streamId) returns (uint256 totalDebt);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### uncoveredDebtOf

Returns the amount of debt not covered by the stream balance, denoted in token's decimals.

_Reverts if `streamId` references a null stream._

```solidity
function uncoveredDebtOf(uint256 streamId) external view override notNull(streamId) returns (uint256 uncoveredDebt);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### withdrawableAmountOf

Calculates the amount that the recipient can withdraw from the stream, denoted in token decimals. This is an alias for
`coveredDebtOf`.

_Reverts if `streamId` references a null stream._

```solidity
function withdrawableAmountOf(uint256 streamId)
    external
    view
    override
    notNull(streamId)
    returns (uint128 withdrawableAmount);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

**Returns**

| Name                 | Type      | Description                                 |
| -------------------- | --------- | ------------------------------------------- |
| `withdrawableAmount` | `uint128` | The amount that the recipient can withdraw. |

### adjustRatePerSecond

Changes the stream's rate per second.

\*Emits a {AdjustFlowStream} and {MetadataUpdate} event. Notes:

- If the snapshot time is not in the future, it updates both the snapshot time and snapshot debt. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null, paused, or voided stream.
- `msg.sender` must be the stream's sender.
- `newRatePerSecond` must be greater than zero and must be different from the current rate per second.\*

```solidity
function adjustRatePerSecond(
    uint256 streamId,
    UD21x18 newRatePerSecond
)
    external
    payable
    override
    noDelegateCall
    notNull(streamId)
    notPaused(streamId)
    onlySender(streamId)
    updateMetadata(streamId);
```

**Parameters**

| Name               | Type      | Description                                                                                |
| ------------------ | --------- | ------------------------------------------------------------------------------------------ |
| `streamId`         | `uint256` | The ID of the stream to adjust.                                                            |
| `newRatePerSecond` | `UD21x18` | The new rate per second, denoted as a fixed-point number where 1e18 is 1 token per second. |

### create

Creates a new Flow stream by setting the snapshot time to `startTime` and leaving the balance to zero. The stream is
wrapped in an ERC-721 NFT.

\*Emits a {CreateFlowStream} and {MetadataUpdate} event. Requirements:

- Must not be delegate called.
- `sender` must not be the zero address.
- `recipient` must not be the zero address.
- If `startTime` is in the future, the `ratePerSecond` must be greater than zero.
- The `token` must not be the native token.
- The `token`'s decimals must be less than or equal to 18.\*

```solidity
function create(
    address sender,
    address recipient,
    UD21x18 ratePerSecond,
    uint40 startTime,
    IERC20 token,
    bool transferable
)
    external
    payable
    override
    noDelegateCall
    returns (uint256 streamId);
```

**Parameters**

| Name            | Type      | Description                                                                                                                                  |
| --------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `sender`        | `address` | The address streaming the tokens, which is able to adjust and pause the stream. It doesn't have to be the same as `msg.sender`.              |
| `recipient`     | `address` | The address receiving the tokens.                                                                                                            |
| `ratePerSecond` | `UD21x18` | The amount by which the debt is increasing every second, denoted as a fixed-point number where 1e18 is 1 token per second.                   |
| `startTime`     | `uint40`  | The timestamp when the stream starts. A sentinel value of zero means the stream will be created with the snapshot time as `block.timestamp`. |
| `token`         | `IERC20`  | The contract address of the ERC-20 token to be streamed.                                                                                     |
| `transferable`  | `bool`    | Boolean indicating if the stream NFT is transferable.                                                                                        |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

### createAndDeposit

Creates a new Flow stream by setting the snapshot time to `startTime` and the balance to `amount`. The stream is wrapped
in an ERC-721 NFT.

\*Emits a {Transfer}, {CreateFlowStream}, {DepositFlowStream} and {MetadataUpdate} event. Notes:

- Refer to the notes in {create} and {deposit}. Requirements:
- Refer to the requirements in {create} and {deposit}.\*

```solidity
function createAndDeposit(
    address sender,
    address recipient,
    UD21x18 ratePerSecond,
    uint40 startTime,
    IERC20 token,
    bool transferable,
    uint128 amount
)
    external
    payable
    override
    noDelegateCall
    returns (uint256 streamId);
```

**Parameters**

| Name            | Type      | Description                                                                                                                                  |
| --------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `sender`        | `address` | The address streaming the tokens. It doesn't have to be the same as `msg.sender`.                                                            |
| `recipient`     | `address` | The address receiving the tokens.                                                                                                            |
| `ratePerSecond` | `UD21x18` | The amount by which the debt is increasing every second, denoted as a fixed-point number where 1e18 is 1 token per second.                   |
| `startTime`     | `uint40`  | The timestamp when the stream starts. A sentinel value of zero means the stream will be created with the snapshot time as `block.timestamp`. |
| `token`         | `IERC20`  | The contract address of the ERC-20 token to be streamed.                                                                                     |
| `transferable`  | `bool`    | Boolean indicating if the stream NFT is transferable.                                                                                        |
| `amount`        | `uint128` | The deposit amount, denoted in token's decimals.                                                                                             |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

### deposit

Makes a deposit in a stream.

\*Emits a {Transfer}, {DepositFlowStream} and {MetadataUpdate} event. Requirements:

- Must not be delegate called.
- `streamId` must not reference a null or a voided stream.
- `amount` must be greater than zero.
- `sender` and `recipient` must match the stream's sender and recipient addresses.\*

```solidity
function deposit(
    uint256 streamId,
    uint128 amount,
    address sender,
    address recipient
)
    external
    payable
    override
    noDelegateCall
    notNull(streamId)
    notVoided(streamId)
    updateMetadata(streamId);
```

**Parameters**

| Name        | Type      | Description                                      |
| ----------- | --------- | ------------------------------------------------ |
| `streamId`  | `uint256` | The ID of the stream to deposit to.              |
| `amount`    | `uint128` | The deposit amount, denoted in token's decimals. |
| `sender`    | `address` | The stream's sender address.                     |
| `recipient` | `address` | The stream's recipient address.                  |

### depositAndPause

Deposits tokens in a stream and pauses it.

\*Emits a {Transfer}, {DepositFlowStream}, {PauseFlowStream} and {MetadataUpdate} event. Notes:

- Refer to the notes in {deposit} and {pause}. Requirements:
- Refer to the requirements in {deposit} and {pause}.\*

```solidity
function depositAndPause(
    uint256 streamId,
    uint128 amount
)
    external
    payable
    override
    noDelegateCall
    notNull(streamId)
    notPaused(streamId)
    onlySender(streamId)
    updateMetadata(streamId);
```

**Parameters**

| Name       | Type      | Description                                         |
| ---------- | --------- | --------------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to deposit to, and then pause. |
| `amount`   | `uint128` | The deposit amount, denoted in token's decimals.    |

### pause

Pauses the stream.

\*Emits a {PauseFlowStream} and {MetadataUpdate} event. Notes:

- It updates snapshot debt and snapshot time.
- It sets the rate per second to zero. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null, pending or paused stream.
- `msg.sender` must be the stream's sender.\*

```solidity
function pause(uint256 streamId)
    external
    payable
    override
    noDelegateCall
    notNull(streamId)
    notPaused(streamId)
    onlySender(streamId)
    updateMetadata(streamId);
```

**Parameters**

| Name       | Type      | Description                    |
| ---------- | --------- | ------------------------------ |
| `streamId` | `uint256` | The ID of the stream to pause. |

### recover

Recover the surplus amount of tokens.

\*Emits a {Recover} event. Notes:

- The surplus amount is defined as the difference between the total balance of the contract for the provided ERC-20
  token and the sum of balances of all streams created using the same ERC-20 token. Requirements:
- `msg.sender` must be the comptroller contract.
- The surplus amount must be greater than zero.\*

```solidity
function recover(IERC20 token, address to) external override onlyComptroller;
```

**Parameters**

| Name    | Type      | Description                                              |
| ------- | --------- | -------------------------------------------------------- |
| `token` | `IERC20`  | The contract address of the ERC-20 token to recover for. |
| `to`    | `address` | The address to send the surplus amount.                  |

### refund

Refunds the provided amount of tokens from the stream to the sender's address.

\*Emits a {Transfer}, {RefundFromFlowStream} and {MetadataUpdate} event. Requirements:

- Must not be delegate called.
- `streamId` must not reference a null stream.
- `msg.sender` must be the sender.
- `amount` must be greater than zero and must not exceed the refundable amount.\*

```solidity
function refund(
    uint256 streamId,
    uint128 amount
)
    external
    payable
    override
    noDelegateCall
    notNull(streamId)
    onlySender(streamId)
    updateMetadata(streamId);
```

**Parameters**

| Name       | Type      | Description                                        |
| ---------- | --------- | -------------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to refund from.               |
| `amount`   | `uint128` | The amount to refund, denoted in token's decimals. |

### refundAndPause

Refunds the provided amount of tokens from the stream to the sender's address.

\*Emits a {Transfer}, {RefundFromFlowStream}, {PauseFlowStream} and {MetadataUpdate} event. Notes:

- Refer to the notes in {pause}. Requirements:
- Refer to the requirements in {refund} and {pause}.\*

```solidity
function refundAndPause(
    uint256 streamId,
    uint128 amount
)
    external
    payable
    override
    noDelegateCall
    notNull(streamId)
    notPaused(streamId)
    onlySender(streamId)
    updateMetadata(streamId);
```

**Parameters**

| Name       | Type      | Description                                         |
| ---------- | --------- | --------------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to refund from and then pause. |
| `amount`   | `uint128` | The amount to refund, denoted in token's decimals.  |

### refundMax

Refunds the entire refundable amount of tokens from the stream to the sender's address.

\*Emits a {Transfer}, {RefundFromFlowStream} and {MetadataUpdate} event. Requirements:

- Refer to the requirements in {refund}.\*

```solidity
function refundMax(uint256 streamId)
    external
    payable
    override
    noDelegateCall
    notNull(streamId)
    onlySender(streamId)
    updateMetadata(streamId)
    returns (uint128 refundedAmount);
```

**Parameters**

| Name       | Type      | Description                          |
| ---------- | --------- | ------------------------------------ |
| `streamId` | `uint256` | The ID of the stream to refund from. |

**Returns**

| Name             | Type      | Description                                                            |
| ---------------- | --------- | ---------------------------------------------------------------------- |
| `refundedAmount` | `uint128` | The amount refunded to the stream sender, denoted in token's decimals. |

### restart

Restarts the stream with the provided rate per second.

\*Emits a {RestartFlowStream} and {MetadataUpdate} event. Notes:

- It updates snapshot debt and snapshot time. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null stream, must be paused, and must not be voided.
- `msg.sender` must be the stream's sender.
- `ratePerSecond` must be greater than zero.\*

```solidity
function restart(
    uint256 streamId,
    UD21x18 ratePerSecond
)
    external
    payable
    override
    noDelegateCall
    notNull(streamId)
    notVoided(streamId)
    onlySender(streamId)
    updateMetadata(streamId);
```

**Parameters**

| Name            | Type      | Description                                                                                                                |
| --------------- | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| `streamId`      | `uint256` | The ID of the stream to restart.                                                                                           |
| `ratePerSecond` | `UD21x18` | The amount by which the debt is increasing every second, denoted as a fixed-point number where 1e18 is 1 token per second. |

### restartAndDeposit

Restarts the stream with the provided rate per second, and makes a deposit.

\*Emits a {RestartFlowStream}, {Transfer}, {DepositFlowStream} and {MetadataUpdate} event. Notes:

- Refer to the notes in {restart} and {deposit}. Requirements:
- `amount` must be greater than zero.
- Refer to the requirements in {restart}.\*

```solidity
function restartAndDeposit(
    uint256 streamId,
    UD21x18 ratePerSecond,
    uint128 amount
)
    external
    payable
    override
    noDelegateCall
    notNull(streamId)
    notVoided(streamId)
    onlySender(streamId)
    updateMetadata(streamId);
```

**Parameters**

| Name            | Type      | Description                                                                                                                |
| --------------- | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| `streamId`      | `uint256` | The ID of the stream to restart.                                                                                           |
| `ratePerSecond` | `UD21x18` | The amount by which the debt is increasing every second, denoted as a fixed-point number where 1e18 is 1 token per second. |
| `amount`        | `uint128` | The deposit amount, denoted in token's decimals.                                                                           |

### setNativeToken

Sets the native token address. Once set, it cannot be changed.

\*For more information, see the documentation for {nativeToken}. Emits a {SetNativeToken} event. Requirements:

- `msg.sender` must be the comptroller contract.
- `newNativeToken` must not be zero address.
- The native token must not be already set.\*

```solidity
function setNativeToken(address newNativeToken) external override onlyComptroller;
```

**Parameters**

| Name             | Type      | Description                      |
| ---------------- | --------- | -------------------------------- |
| `newNativeToken` | `address` | The address of the native token. |

### setNFTDescriptor

Sets a new NFT descriptor contract, which produces the URI describing the Sablier stream NFTs.

\*Emits a {SetNFTDescriptor} and {BatchMetadataUpdate} event. Notes:

- Does not revert if the NFT descriptor is the same. Requirements:
- `msg.sender` must be the comptroller contract.\*

```solidity
function setNFTDescriptor(IFlowNFTDescriptor newNFTDescriptor) external override onlyComptroller;
```

**Parameters**

| Name               | Type                 | Description                                     |
| ------------------ | -------------------- | ----------------------------------------------- |
| `newNFTDescriptor` | `IFlowNFTDescriptor` | The address of the new NFT descriptor contract. |

### supportsInterface

_See {IERC165-supportsInterface}._

```solidity
function supportsInterface(bytes4 interfaceId) public view override(IERC165, ERC721) returns (bool);
```

### tokenURI

_See {IERC721Metadata-tokenURI}._

```solidity
function tokenURI(uint256 streamId) public view override(IERC721Metadata, ERC721) returns (string memory uri);
```

### transferTokens

A helper to transfer ERC-20 tokens from the caller to the provided address. Useful for paying one-time bonuses.

\*Emits a {Transfer} event. Requirements:

- `msg.sender` must have approved this contract to spend at least `amount` tokens.\*

```solidity
function transferTokens(IERC20 token, address to, uint128 amount) external payable;
```

**Parameters**

| Name     | Type      | Description                                                    |
| -------- | --------- | -------------------------------------------------------------- |
| `token`  | `IERC20`  | The contract address of the ERC-20 token to be transferred.    |
| `to`     | `address` | The address receiving the tokens.                              |
| `amount` | `uint128` | The amount of tokens to transfer, denoted in token's decimals. |

### void

Voids a stream.

\*Emits a {VoidFlowStream} and {MetadataUpdate} event. Notes:

- It sets snapshot time to the `block.timestamp`.
- Voiding an insolvent stream sets the snapshot debt to the stream's balance making the uncovered debt to become zero.
- Voiding a solvent stream updates the snapshot debt by adding up ongoing debt.
- It sets the rate per second to zero.
- A voided stream cannot be restarted. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null or a voided stream.
- `msg.sender` must either be the stream's sender, recipient or an approved third party.\*

```solidity
function void(uint256 streamId)
    external
    payable
    override
    noDelegateCall
    notNull(streamId)
    notVoided(streamId)
    updateMetadata(streamId);
```

**Parameters**

| Name       | Type      | Description                   |
| ---------- | --------- | ----------------------------- |
| `streamId` | `uint256` | The ID of the stream to void. |

### withdraw

Withdraws the provided `amount` to the provided `to` address.

\*Emits a {Transfer}, {WithdrawFromFlowStream} and {MetadataUpdate} event. Notes:

- It sets the snapshot time to the `block.timestamp` if `amount` is greater than snapshot debt. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null stream.
- `to` must not be the zero address.
- `to` must be the recipient if `msg.sender` is not the stream's recipient or an approved third party.
- `amount` must be greater than zero and must not exceed the withdrawable amount.\*

```solidity
function withdraw(
    uint256 streamId,
    address to,
    uint128 amount
)
    external
    payable
    override
    noDelegateCall
    notNull(streamId)
    updateMetadata(streamId);
```

**Parameters**

| Name       | Type      | Description                                          |
| ---------- | --------- | ---------------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to withdraw from.               |
| `to`       | `address` | The address receiving the withdrawn tokens.          |
| `amount`   | `uint128` | The amount to withdraw, denoted in token's decimals. |

### withdrawMax

Withdraws the entire withdrawable amount to the provided `to` address.

\*Emits a {Transfer}, {WithdrawFromFlowStream} and {MetadataUpdate} event. Notes:

- Refer to the notes in {withdraw}. Requirements:
- Refer to the requirements in {withdraw}.\*

```solidity
function withdrawMax(
    uint256 streamId,
    address to
)
    external
    payable
    override
    noDelegateCall
    notNull(streamId)
    updateMetadata(streamId)
    returns (uint128 withdrawnAmount);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to withdraw from.      |
| `to`       | `address` | The address receiving the withdrawn tokens. |

**Returns**

| Name              | Type      | Description                                                         |
| ----------------- | --------- | ------------------------------------------------------------------- |
| `withdrawnAmount` | `uint128` | The amount withdrawn to the recipient, denoted in token's decimals. |

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

### \_coveredDebtOf

_Calculates the amount of covered debt by the stream balance._

```solidity
function _coveredDebtOf(uint256 streamId) private view returns (uint128);
```

### \_isCallerStreamRecipientOrApproved

Checks whether `msg.sender` is the stream's recipient or an approved third party.

```solidity
function _isCallerStreamRecipientOrApproved(uint256 streamId, address recipient) private view returns (bool);
```

**Parameters**

| Name        | Type      | Description                  |
| ----------- | --------- | ---------------------------- |
| `streamId`  | `uint256` | The stream ID for the query. |
| `recipient` | `address` |                              |

### \_ongoingDebtScaledOf

_Calculates the ongoing debt, as a 18-decimals fixed point number, accrued since last snapshot. Return 0 if the stream
is paused or `block.timestamp` is less than or equal to snapshot time._

```solidity
function _ongoingDebtScaledOf(uint256 streamId) private view returns (uint256);
```

### \_refundableAmountOf

_Calculates the refundable amount._

```solidity
function _refundableAmountOf(uint256 streamId) private view returns (uint128);
```

### \_totalDebtOf

_The total debt is the sum of the snapshot debt and the ongoing debt descaled to token's decimal. This value is
independent of the stream's balance._

```solidity
function _totalDebtOf(uint256 streamId) private view returns (uint256);
```

### \_uncoveredDebtOf

_Calculates the uncovered debt._

```solidity
function _uncoveredDebtOf(uint256 streamId) private view returns (uint256);
```

### \_verifyStreamSenderRecipient

_Checks whether the provided addresses matches stream's sender and recipient._

```solidity
function _verifyStreamSenderRecipient(uint256 streamId, address sender, address recipient) private view;
```

### \_adjustRatePerSecond

_See the documentation for the user-facing functions that call this private function._

```solidity
function _adjustRatePerSecond(uint256 streamId, UD21x18 newRatePerSecond) private;
```

### \_create

_See the documentation for the user-facing functions that call this private function._

```solidity
function _create(
    address sender,
    address recipient,
    UD21x18 ratePerSecond,
    uint40 startTime,
    IERC20 token,
    bool transferable
)
    private
    returns (uint256 streamId);
```

### \_deposit

_See the documentation for the user-facing functions that call this private function._

```solidity
function _deposit(uint256 streamId, uint128 amount) private;
```

### \_pause

_See the documentation for the user-facing functions that call this private function._

```solidity
function _pause(uint256 streamId) private;
```

### \_refund

_See the documentation for the user-facing functions that call this private function._

```solidity
function _refund(uint256 streamId, uint128 amount) private;
```

### \_restart

_See the documentation for the user-facing functions that call this private function._

```solidity
function _restart(uint256 streamId, UD21x18 ratePerSecond) private;
```

### \_void

_See the documentation for the user-facing functions that call this private function._

```solidity
function _void(uint256 streamId) private;
```

### \_withdraw

_See the documentation for the user-facing functions that call this private function._

```solidity
function _withdraw(uint256 streamId, address to, uint128 amount) private;
```
