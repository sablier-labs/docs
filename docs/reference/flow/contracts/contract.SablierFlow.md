---
sidebar_position: 1
---

# SablierFlow

[Git Source](https://github.com/sablier-labs/flow/blob/a0fa33d2843af0817e34970cdc05822ead31daaa/src/SablierFlow.sol)

**Inherits:** [Batch](/docs/reference/flow/contracts/abstracts/abstract.Batch.md),
[NoDelegateCall](/docs/reference/flow/contracts/abstracts/abstract.NoDelegateCall.md),
[ISablierFlow](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md),
[SablierFlowBase](/docs/reference/flow/contracts/abstracts/abstract.SablierFlowBase.md)

See the documentation in [ISablierFlow](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md).

## Functions

### constructor

_Emits {TransferAdmin} event._

```solidity
constructor(
    address initialAdmin,
    IFlowNFTDescriptor initialNFTDescriptor
)
    ERC721("Sablier Flow NFT", "SAB-FLOW")
    SablierFlowBase(initialAdmin, initialNFTDescriptor);
```

**Parameters**

| Name                   | Type                 | Description                                |
| ---------------------- | -------------------- | ------------------------------------------ |
| `initialAdmin`         | `address`            | The address of the initial contract admin. |
| `initialNFTDescriptor` | `IFlowNFTDescriptor` | The address of the initial NFT descriptor. |

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

Returns the time at which the total debt exceeds stream balance. If the total debt is less than or equal to stream
balance, it returns 0.

Reverts on the following conditions:

- If `streamId` references a paused or a null stream.
- If stream balance is zero.

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

### ongoingDebtScaledOf

Returns the amount of debt accrued since the snapshot time until now, denoted as a fixed-point number where 1e18 is 1
token.

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

Emits a {AdjustFlowStream} and {MetadataUpdate} event. Notes:

- It updates snapshot debt and snapshot time. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null or a paused stream.
- `msg.sender` must be the stream's sender.
- `newRatePerSecond` must not equal to the current rate per second.

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

Creates a new Flow stream by setting the snapshot time to `block.timestamp` and leaving the balance to zero. The stream
is wrapped in an ERC-721 NFT.

Emits {CreateFlowStream} event. Requirements:

- Must not be delegate called.
- `sender` must not be the zero address.
- `recipient` must not be the zero address.
- The `token`'s decimals must be less than or equal to 18.

```solidity
function create(
    address sender,
    address recipient,
    UD21x18 ratePerSecond,
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

| Name            | Type      | Description                                                                                                                     |
| --------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `sender`        | `address` | The address streaming the tokens, which is able to adjust and pause the stream. It doesn't have to be the same as `msg.sender`. |
| `recipient`     | `address` | The address receiving the tokens.                                                                                               |
| `ratePerSecond` | `UD21x18` | The amount by which the debt is increasing every second, denoted as a fixed-point number where 1e18 is 1 token per second.      |
| `token`         | `IERC20`  | The contract address of the ERC-20 token to be streamed.                                                                        |
| `transferable`  | `bool`    | Boolean indicating if the stream NFT is transferable.                                                                           |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

### createAndDeposit

Creates a new Flow stream by setting the snapshot time to `block.timestamp` and the balance to `amount`. The stream is
wrapped in an ERC-721 NFT.

Emits a {Transfer}, {CreateFlowStream}, and {DepositFlowStream} event. Notes:

- Refer to the notes in {deposit}. Requirements:
- Refer to the requirements in {create} and {deposit}.

```solidity
function createAndDeposit(
    address sender,
    address recipient,
    UD21x18 ratePerSecond,
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

| Name            | Type      | Description                                                                                                                |
| --------------- | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| `sender`        | `address` | The address streaming the tokens. It doesn't have to be the same as `msg.sender`.                                          |
| `recipient`     | `address` | The address receiving the tokens.                                                                                          |
| `ratePerSecond` | `UD21x18` | The amount by which the debt is increasing every second, denoted as a fixed-point number where 1e18 is 1 token per second. |
| `token`         | `IERC20`  | The contract address of the ERC-20 token to be streamed.                                                                   |
| `transferable`  | `bool`    | Boolean indicating if the stream NFT is transferable.                                                                      |
| `amount`        | `uint128` | The deposit amount, denoted in token's decimals.                                                                           |

**Returns**

| Name       | Type      | Description                         |
| ---------- | --------- | ----------------------------------- |
| `streamId` | `uint256` | The ID of the newly created stream. |

### deposit

Makes a deposit in a stream.

Emits a {Transfer} and {DepositFlowStream} event. Requirements:

- Must not be delegate called.
- `streamId` must not reference a null or a voided stream.
- `amount` must be greater than zero.
- `sender` and `recipient` must match the stream's sender and recipient addresses.

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

Emits a {Transfer}, {DepositFlowStream} and {PauseFlowStream} event. Notes:

- Refer to the notes in {deposit} and {pause}. Requirements:
- Refer to the requirements in {deposit} and {pause}.

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

### depositViaBroker

Deposits tokens in a stream.

Emits a {Transfer} and {DepositFlowStream} event. Notes:

- Refer to the notes in {deposit}. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null stream.
- `totalAmount` must be greater than zero. Otherwise it will revert inside {deposit}.
- `broker.account` must not be 0 address.
- `broker.fee` must not be greater than `MAX_FEE`. It can be zero.

```solidity
function depositViaBroker(
    uint256 streamId,
    uint128 totalAmount,
    address sender,
    address recipient,
    Broker calldata broker
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

| Name          | Type      | Description                                                                                                                                                                                  |
| ------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `streamId`    | `uint256` | The ID of the stream to deposit on.                                                                                                                                                          |
| `totalAmount` | `uint128` | The total amount, including the deposit and any broker fee, denoted in token's decimals.                                                                                                     |
| `sender`      | `address` | The stream's sender address.                                                                                                                                                                 |
| `recipient`   | `address` | The stream's recipient address.                                                                                                                                                              |
| `broker`      | `Broker`  | Struct encapsulating (i) the address of the broker assisting in creating the stream, and (ii) the percentage fee paid to the broker from `totalAmount`, denoted as a fixed-point percentage. |

### pause

Pauses the stream.

Emits {PauseFlowStream} event. Notes:

- It updates snapshot debt and snapshot time.
- It sets the rate per second to zero. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null or an already paused stream.
- `msg.sender` must be the stream's sender.

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

### refund

Refunds the provided amount of tokens from the stream to the sender's address.

Emits a {Transfer} and {RefundFromFlowStream} event. Requirements:

- Must not be delegate called.
- `streamId` must not reference a null stream.
- `msg.sender` must be the sender.
- `amount` must be greater than zero and must not exceed the refundable amount.

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

Emits a {Transfer}, {RefundFromFlowStream} and {PauseFlowStream} event. Notes:

- Refer to the notes in {pause}. Requirements:
- Refer to the requirements in {refund} and {pause}.

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

Emits a {Transfer} and {RefundFromFlowStream} event. Requirements:

- Refer to the requirements in {refund}.

```solidity
function refundMax(uint256 streamId)
    external
    payable
    override
    noDelegateCall
    notNull(streamId)
    onlySender(streamId)
    updateMetadata(streamId);
```

**Parameters**

| Name       | Type      | Description                          |
| ---------- | --------- | ------------------------------------ |
| `streamId` | `uint256` | The ID of the stream to refund from. |

### restart

Restarts the stream with the provided rate per second.

Emits {RestartFlowStream} event. Notes:

- It updates snapshot debt and snapshot time. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null, or a voided stream.
- `msg.sender` must be the stream's sender.
- `ratePerSecond` must be greater than zero.

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

Emits a {RestartFlowStream}, {Transfer}, and {DepositFlowStream} event. Notes:

- Refer to the notes in {restart} and {deposit}. Requirements:
- `amount` must be greater than zero.
- Refer to the requirements in {restart}.

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

### void

Voids a stream.

Emits {VoidFlowStream} event. Notes:

- It sets snapshot time to the `block.timestamp`
- Voiding an insolvent stream sets the snapshot debt to the stream's balance making the uncovered debt to become zero.
- Voiding a solvent stream updates the snapshot debt by adding up ongoing debt.
- It sets the rate per second to zero.
- A voided stream cannot be restarted. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null or a voided stream.
- `msg.sender` must either be the stream's sender, recipient or an approved third party.

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

Withdraws the provided `amount` minus the protocol fee to the provided `to` address.

Emits a {Transfer} and {WithdrawFromFlowStream} event. Notes:

- It sets the snapshot time to the `block.timestamp` if `amount` is greater than snapshot debt.
- A protocol fee may be charged on the withdrawn amount if the protocol fee is enabled for the streaming token.
  Requirements:
- Must not be delegate called.
- `streamId` must not reference a null stream.
- `to` must not be the zero address.
- `to` must be the recipient if `msg.sender` is not the stream's recipient.
- `amount` must be greater than zero and must not exceed the withdrawable amount.

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
    updateMetadata(streamId)
    returns (uint128 withdrawnAmount, uint128 protocolFeeAmount);
```

**Parameters**

| Name       | Type      | Description                                          |
| ---------- | --------- | ---------------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to withdraw from.               |
| `to`       | `address` | The address receiving the withdrawn tokens.          |
| `amount`   | `uint128` | The amount to withdraw, denoted in token's decimals. |

**Returns**

| Name                | Type      | Description                                                                                                      |
| ------------------- | --------- | ---------------------------------------------------------------------------------------------------------------- |
| `withdrawnAmount`   | `uint128` | The amount withdrawn to the recipient, denoted in token's decimals. This is input amount minus the protocol fee. |
| `protocolFeeAmount` | `uint128` | The protocol fee amount, denoted in the token's decimals.                                                        |

### withdrawMax

Withdraws the entire withdrawable amount minus the protocol fee to the provided `to` address.

Emits a {Transfer} and {WithdrawFromFlowStream} event. Notes:

- Refer to the notes in {withdraw}. Requirements:
- Refer to the requirements in {withdraw}.

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
    returns (uint128 withdrawnAmount, uint128 protocolFeeAmount);
```

**Parameters**

| Name       | Type      | Description                                 |
| ---------- | --------- | ------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to withdraw from.      |
| `to`       | `address` | The address receiving the withdrawn tokens. |

**Returns**

| Name                | Type      | Description                                                         |
| ------------------- | --------- | ------------------------------------------------------------------- |
| `withdrawnAmount`   | `uint128` | The amount withdrawn to the recipient, denoted in token's decimals. |
| `protocolFeeAmount` | `uint128` | The protocol fee amount, denoted in the token's decimals.           |

### \_coveredDebtOf

_Calculates the amount of covered debt by the stream balance._

```solidity
function _coveredDebtOf(uint256 streamId) internal view returns (uint128);
```

### \_ongoingDebtScaledOf

_Calculates the ongoing debt, as a 18-decimals fixed point number, accrued since last snapshot. Return 0 if the stream
is paused or `block.timestamp` is less than or equal to snapshot time._

```solidity
function _ongoingDebtScaledOf(uint256 streamId) internal view returns (uint256);
```

### \_refundableAmountOf

_Calculates the refundable amount._

```solidity
function _refundableAmountOf(uint256 streamId) internal view returns (uint128);
```

### \_totalDebtOf

_The total debt is the sum of the snapshot debt and the ongoing debt descaled to token's decimal. This value is
independent of the stream's balance._

```solidity
function _totalDebtOf(uint256 streamId) internal view returns (uint256);
```

### \_uncoveredDebtOf

_Calculates the uncovered debt._

```solidity
function _uncoveredDebtOf(uint256 streamId) internal view returns (uint256);
```

### \_verifyStreamSenderRecipient

_Checks whether the provided addresses matches stream's sender and recipient._

```solidity
function _verifyStreamSenderRecipient(uint256 streamId, address sender, address recipient) internal view;
```

### \_adjustRatePerSecond

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _adjustRatePerSecond(uint256 streamId, UD21x18 newRatePerSecond) internal;
```

### \_create

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _create(
    address sender,
    address recipient,
    UD21x18 ratePerSecond,
    IERC20 token,
    bool transferable
)
    internal
    returns (uint256 streamId);
```

### \_deposit

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _deposit(uint256 streamId, uint128 amount) internal;
```

### \_depositViaBroker

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _depositViaBroker(uint256 streamId, uint128 totalAmount, Broker memory broker) internal;
```

### \_pause

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _pause(uint256 streamId) internal;
```

### \_refund

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _refund(uint256 streamId, uint128 amount) internal;
```

### \_restart

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _restart(uint256 streamId, UD21x18 ratePerSecond) internal;
```

### \_void

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _void(uint256 streamId) internal;
```

### \_withdraw

_See the documentation for the user-facing functions that call this internal function._

```solidity
function _withdraw(
    uint256 streamId,
    address to,
    uint128 amount
)
    internal
    returns (uint128 withdrawnAmount, uint128 protocolFeeAmount);
```
