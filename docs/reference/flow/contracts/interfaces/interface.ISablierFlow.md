# ISablierFlow

[Git Source](https://github.com/sablier-labs/flow/blob/a0fa33d2843af0817e34970cdc05822ead31daaa/src/interfaces/ISablierFlow.sol)

**Inherits:** [IBatch](/docs/reference/flow/contracts/interfaces/interface.IBatch.md),
[ISablierFlowBase](/docs/reference/flow/contracts/interfaces/interface.ISablierFlowBase.md)

Creates and manages Flow streams with linear streaming functions.

## Functions

### coveredDebtOf

Returns the amount of debt covered by the stream balance, denoted in token's decimals.

_Reverts if `streamId` references a null stream._

```solidity
function coveredDebtOf(uint256 streamId) external view returns (uint128 coveredDebt);
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
function depletionTimeOf(uint256 streamId) external view returns (uint256 depletionTime);
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
function ongoingDebtScaledOf(uint256 streamId) external view returns (uint256 ongoingDebtScaled);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### refundableAmountOf

Returns the amount that the sender can be refunded from the stream, denoted in token's decimals.

_Reverts if `streamId` references a null stream._

```solidity
function refundableAmountOf(uint256 streamId) external view returns (uint128 refundableAmount);
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
function statusOf(uint256 streamId) external view returns (Flow.Status status);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### totalDebtOf

Returns the total amount owed by the sender to the recipient, denoted in token's decimals.

_Reverts if `streamId` references a null stream._

```solidity
function totalDebtOf(uint256 streamId) external view returns (uint256 totalDebt);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

### uncoveredDebtOf

Returns the amount of debt not covered by the stream balance, denoted in token's decimals.

_Reverts if `streamId` references a null stream._

```solidity
function uncoveredDebtOf(uint256 streamId) external view returns (uint256 uncoveredDebt);
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
function withdrawableAmountOf(uint256 streamId) external view returns (uint128 withdrawableAmount);
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

Emits a [AdjustFlowStream](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md#adjustflowstream) and
{MetadataUpdate} event. Notes:

- It updates snapshot debt and snapshot time. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null or a paused stream.
- `msg.sender` must be the stream's sender.
- `newRatePerSecond` must not equal to the current rate per second.

```solidity
function adjustRatePerSecond(uint256 streamId, UD21x18 newRatePerSecond) external payable;
```

**Parameters**

| Name               | Type      | Description                                                                                |
| ------------------ | --------- | ------------------------------------------------------------------------------------------ |
| `streamId`         | `uint256` | The ID of the stream to adjust.                                                            |
| `newRatePerSecond` | `UD21x18` | The new rate per second, denoted as a fixed-point number where 1e18 is 1 token per second. |

### create

Creates a new Flow stream by setting the snapshot time to `block.timestamp` and leaving the balance to zero. The stream
is wrapped in an ERC-721 NFT.

Emits [CreateFlowStream](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md#createflowstream) event.
Requirements:

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
function deposit(uint256 streamId, uint128 amount, address sender, address recipient) external payable;
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
function depositAndPause(uint256 streamId, uint128 amount) external payable;
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
    payable;
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

Emits [PauseFlowStream](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md#pauseflowstream) event.
Notes:

- It updates snapshot debt and snapshot time.
- It sets the rate per second to zero. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null or an already paused stream.
- `msg.sender` must be the stream's sender.

```solidity
function pause(uint256 streamId) external payable;
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
function refund(uint256 streamId, uint128 amount) external payable;
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
function refundAndPause(uint256 streamId, uint128 amount) external payable;
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
function refundMax(uint256 streamId) external payable;
```

**Parameters**

| Name       | Type      | Description                          |
| ---------- | --------- | ------------------------------------ |
| `streamId` | `uint256` | The ID of the stream to refund from. |

### restart

Restarts the stream with the provided rate per second.

Emits [RestartFlowStream](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md#restartflowstream) event.
Notes:

- It updates snapshot debt and snapshot time. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null, or a voided stream.
- `msg.sender` must be the stream's sender.
- `ratePerSecond` must be greater than zero.

```solidity
function restart(uint256 streamId, UD21x18 ratePerSecond) external payable;
```

**Parameters**

| Name            | Type      | Description                                                                                                                |
| --------------- | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| `streamId`      | `uint256` | The ID of the stream to restart.                                                                                           |
| `ratePerSecond` | `UD21x18` | The amount by which the debt is increasing every second, denoted as a fixed-point number where 1e18 is 1 token per second. |

### restartAndDeposit

Restarts the stream with the provided rate per second, and makes a deposit.

Emits a [RestartFlowStream](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md#restartflowstream),
{Transfer}, and {DepositFlowStream} event. Notes:

- Refer to the notes in {restart} and {deposit}. Requirements:
- `amount` must be greater than zero.
- Refer to the requirements in {restart}.

```solidity
function restartAndDeposit(uint256 streamId, UD21x18 ratePerSecond, uint128 amount) external payable;
```

**Parameters**

| Name            | Type      | Description                                                                                                                |
| --------------- | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| `streamId`      | `uint256` | The ID of the stream to restart.                                                                                           |
| `ratePerSecond` | `UD21x18` | The amount by which the debt is increasing every second, denoted as a fixed-point number where 1e18 is 1 token per second. |
| `amount`        | `uint128` | The deposit amount, denoted in token's decimals.                                                                           |

### void

Voids a stream.

Emits [VoidFlowStream](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md#voidflowstream) event. Notes:

- It sets snapshot time to the `block.timestamp`
- Voiding an insolvent stream sets the snapshot debt to the stream's balance making the uncovered debt to become zero.
- Voiding a solvent stream updates the snapshot debt by adding up ongoing debt.
- It sets the rate per second to zero.
- A voided stream cannot be restarted. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null or a voided stream.
- `msg.sender` must either be the stream's sender, recipient or an approved third party.

```solidity
function void(uint256 streamId) external payable;
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

## Events

### AdjustFlowStream

Emitted when the rate per second is updated by the sender.

```solidity
event AdjustFlowStream(uint256 indexed streamId, uint256 totalDebt, UD21x18 oldRatePerSecond, UD21x18 newRatePerSecond);
```

**Parameters**

| Name               | Type      | Description                                                                                |
| ------------------ | --------- | ------------------------------------------------------------------------------------------ |
| `streamId`         | `uint256` | The ID of the stream.                                                                      |
| `totalDebt`        | `uint256` | The total debt at the time of the update, denoted in token's decimals.                     |
| `oldRatePerSecond` | `UD21x18` | The old rate per second, denoted as a fixed-point number where 1e18 is 1 token per second. |
| `newRatePerSecond` | `UD21x18` | The new rate per second, denoted as a fixed-point number where 1e18 is 1 token per second. |

### CreateFlowStream

Emitted when a Flow stream is created.

```solidity
event CreateFlowStream(
    uint256 streamId,
    address indexed sender,
    address indexed recipient,
    UD21x18 ratePerSecond,
    IERC20 indexed token,
    bool transferable
);
```

**Parameters**

| Name            | Type      | Description                                                                                                                |
| --------------- | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| `streamId`      | `uint256` | The ID of the newly created stream.                                                                                        |
| `sender`        | `address` | The address streaming the tokens, which is able to adjust and pause the stream.                                            |
| `recipient`     | `address` | The address receiving the tokens, as well as the NFT owner.                                                                |
| `ratePerSecond` | `UD21x18` | The amount by which the debt is increasing every second, denoted as a fixed-point number where 1e18 is 1 token per second. |
| `token`         | `IERC20`  | The contract address of the ERC-20 token to be streamed.                                                                   |
| `transferable`  | `bool`    | Boolean indicating whether the stream NFT is transferable or not.                                                          |

### DepositFlowStream

Emitted when a stream is funded.

```solidity
event DepositFlowStream(uint256 indexed streamId, address indexed funder, uint128 amount);
```

**Parameters**

| Name       | Type      | Description                                                                  |
| ---------- | --------- | ---------------------------------------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream.                                                        |
| `funder`   | `address` | The address that made the deposit.                                           |
| `amount`   | `uint128` | The amount of tokens deposited into the stream, denoted in token's decimals. |

### PauseFlowStream

Emitted when a stream is paused by the sender.

```solidity
event PauseFlowStream(uint256 indexed streamId, address indexed sender, address indexed recipient, uint256 totalDebt);
```

**Parameters**

| Name        | Type      | Description                                                                            |
| ----------- | --------- | -------------------------------------------------------------------------------------- |
| `streamId`  | `uint256` | The ID of the stream.                                                                  |
| `sender`    | `address` | The stream's sender address.                                                           |
| `recipient` | `address` | The stream's recipient address.                                                        |
| `totalDebt` | `uint256` | The amount of tokens owed by the sender to the recipient, denoted in token's decimals. |

### RefundFromFlowStream

Emitted when a sender is refunded from a stream.

```solidity
event RefundFromFlowStream(uint256 indexed streamId, address indexed sender, uint128 amount);
```

**Parameters**

| Name       | Type      | Description                                                               |
| ---------- | --------- | ------------------------------------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream.                                                     |
| `sender`   | `address` | The stream's sender address.                                              |
| `amount`   | `uint128` | The amount of tokens refunded to the sender, denoted in token's decimals. |

### RestartFlowStream

Emitted when a stream is restarted by the sender.

```solidity
event RestartFlowStream(uint256 indexed streamId, address indexed sender, UD21x18 ratePerSecond);
```

**Parameters**

| Name            | Type      | Description                                                                                                                |
| --------------- | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| `streamId`      | `uint256` | The ID of the stream.                                                                                                      |
| `sender`        | `address` | The stream's sender address.                                                                                               |
| `ratePerSecond` | `UD21x18` | The amount by which the debt is increasing every second, denoted as a fixed-point number where 1e18 is 1 token per second. |

### VoidFlowStream

Emitted when a stream is voided by the sender, recipient or an approved operator.

```solidity
event VoidFlowStream(
    uint256 indexed streamId,
    address indexed sender,
    address indexed recipient,
    address caller,
    uint256 newTotalDebt,
    uint256 writtenOffDebt
);
```

**Parameters**

| Name             | Type      | Description                                                                                      |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------ |
| `streamId`       | `uint256` | The ID of the stream.                                                                            |
| `sender`         | `address` | The stream's sender address.                                                                     |
| `recipient`      | `address` | The stream's recipient address.                                                                  |
| `caller`         | `address` | The address that performed the void, which can be the sender, recipient or an approved operator. |
| `newTotalDebt`   | `uint256` | The new total debt, denoted in token's decimals.                                                 |
| `writtenOffDebt` | `uint256` | The amount of debt written off by the caller, denoted in token's decimals.                       |

### WithdrawFromFlowStream

Emitted when tokens are withdrawn from a stream by a recipient or an approved operator.

```solidity
event WithdrawFromFlowStream(
    uint256 indexed streamId,
    address indexed to,
    IERC20 indexed token,
    address caller,
    uint128 withdrawAmount,
    uint128 protocolFeeAmount
);
```

**Parameters**

| Name                | Type      | Description                                                                                            |
| ------------------- | --------- | ------------------------------------------------------------------------------------------------------ |
| `streamId`          | `uint256` | The ID of the stream.                                                                                  |
| `to`                | `address` | The address that received the withdrawn tokens.                                                        |
| `token`             | `IERC20`  | The contract address of the ERC-20 token that was withdrawn.                                           |
| `caller`            | `address` | The address that performed the withdrawal, which can be the recipient or an approved operator.         |
| `withdrawAmount`    | `uint128` | The amount withdrawn to the recipient after subtracting the protocol fee, denoted in token's decimals. |
| `protocolFeeAmount` | `uint128` | The amount of protocol fee deducted from the withdrawn amount, denoted in token's decimals.            |
