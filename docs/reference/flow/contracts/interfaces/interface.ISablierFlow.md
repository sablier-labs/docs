# ISablierFlow

[Git Source](https://github.com/sablier-labs/flow/blob/a4143de45478f508bca8305fec2bd81b7ad25fe9/src/interfaces/ISablierFlow.sol)

**Inherits:** IBatch, IComptrollerable, IERC4906, IERC721Metadata,
[ISablierFlowState](/docs/reference/flow/contracts/interfaces/interface.ISablierFlowState.md)

Creates and manages Flow streams with linear streaming functions.

## Functions

### calculateMinFeeWei

Calculates the minimum fee in wei required to withdraw from the given stream ID.

_Reverts if `streamId` references a null stream._

```solidity
function calculateMinFeeWei(uint256 streamId) external view returns (uint256 minFeeWei);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

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

Returns the time at which the total debt exceeds stream balance. If the total debt exceeds the stream balance, it
returns 0.

\*Reverts on the following conditions:

- If `streamId` references a paused or a null stream.
- If stream balance is zero.\*

```solidity
function depletionTimeOf(uint256 streamId) external view returns (uint256 depletionTime);
```

**Parameters**

| Name       | Type      | Description                  |
| ---------- | --------- | ---------------------------- |
| `streamId` | `uint256` | The stream ID for the query. |

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

### ongoingDebtScaledOf

Returns the amount of debt accrued since the snapshot time until now, denoted as a fixed-point number where 1e18 is 1
token. If the stream is pending, it returns zero.

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

\*Emits a [AdjustFlowStream](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md#adjustflowstream) and
{MetadataUpdate} event. Notes:

- If the snapshot time is not in the future, it updates both the snapshot time and snapshot debt. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null, paused, or voided stream.
- `msg.sender` must be the stream's sender.
- `newRatePerSecond` must be greater than zero and must be different from the current rate per second.\*

```solidity
function adjustRatePerSecond(uint256 streamId, UD21x18 newRatePerSecond) external payable;
```

**Parameters**

| Name               | Type      | Description                                                                                |
| ------------------ | --------- | ------------------------------------------------------------------------------------------ |
| `streamId`         | `uint256` | The ID of the stream to adjust.                                                            |
| `newRatePerSecond` | `UD21x18` | The new rate per second, denoted as a fixed-point number where 1e18 is 1 token per second. |

### create

Creates a new Flow stream by setting the snapshot time to `startTime` and leaving the balance to zero. The stream is
wrapped in an ERC-721 NFT.

\*Emits a [CreateFlowStream](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md#createflowstream) and
{MetadataUpdate} event. Requirements:

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

\*Emits a {Transfer}, {DepositFlowStream}, {PauseFlowStream} and {MetadataUpdate} event. Notes:

- Refer to the notes in {deposit} and {pause}. Requirements:
- Refer to the requirements in {deposit} and {pause}.\*

```solidity
function depositAndPause(uint256 streamId, uint128 amount) external payable;
```

**Parameters**

| Name       | Type      | Description                                         |
| ---------- | --------- | --------------------------------------------------- |
| `streamId` | `uint256` | The ID of the stream to deposit to, and then pause. |
| `amount`   | `uint128` | The deposit amount, denoted in token's decimals.    |

### pause

Pauses the stream.

\*Emits a [PauseFlowStream](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md#pauseflowstream) and
{MetadataUpdate} event. Notes:

- It updates snapshot debt and snapshot time.
- It sets the rate per second to zero. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null, pending or paused stream.
- `msg.sender` must be the stream's sender.\*

```solidity
function pause(uint256 streamId) external payable;
```

**Parameters**

| Name       | Type      | Description                    |
| ---------- | --------- | ------------------------------ |
| `streamId` | `uint256` | The ID of the stream to pause. |

### recover

Recover the surplus amount of tokens.

\*Emits a [Recover](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md#recover) event. Notes:

- The surplus amount is defined as the difference between the total balance of the contract for the provided ERC-20
  token and the sum of balances of all streams created using the same ERC-20 token. Requirements:
- `msg.sender` must be the comptroller contract.
- The surplus amount must be greater than zero.\*

```solidity
function recover(IERC20 token, address to) external;
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
function refund(uint256 streamId, uint128 amount) external payable;
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
function refundAndPause(uint256 streamId, uint128 amount) external payable;
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
function refundMax(uint256 streamId) external payable returns (uint128 refundedAmount);
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

\*Emits a [RestartFlowStream](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md#restartflowstream) and
{MetadataUpdate} event. Notes:

- It updates snapshot debt and snapshot time. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null stream, must be paused, and must not be voided.
- `msg.sender` must be the stream's sender.
- `ratePerSecond` must be greater than zero.\*

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

\*Emits a [RestartFlowStream](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md#restartflowstream),
{Transfer}, {DepositFlowStream} and {MetadataUpdate} event. Notes:

- Refer to the notes in {restart} and {deposit}. Requirements:
- `amount` must be greater than zero.
- Refer to the requirements in {restart}.\*

```solidity
function restartAndDeposit(uint256 streamId, UD21x18 ratePerSecond, uint128 amount) external payable;
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
function setNativeToken(address newNativeToken) external;
```

**Parameters**

| Name             | Type      | Description                      |
| ---------------- | --------- | -------------------------------- |
| `newNativeToken` | `address` | The address of the native token. |

### setNFTDescriptor

Sets a new NFT descriptor contract, which produces the URI describing the Sablier stream NFTs.

\*Emits a [SetNFTDescriptor](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md#setnftdescriptor) and
{BatchMetadataUpdate} event. Notes:

- Does not revert if the NFT descriptor is the same. Requirements:
- `msg.sender` must be the comptroller contract.\*

```solidity
function setNFTDescriptor(IFlowNFTDescriptor newNFTDescriptor) external;
```

**Parameters**

| Name               | Type                 | Description                                     |
| ------------------ | -------------------- | ----------------------------------------------- |
| `newNFTDescriptor` | `IFlowNFTDescriptor` | The address of the new NFT descriptor contract. |

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

\*Emits a [VoidFlowStream](/docs/reference/flow/contracts/interfaces/interface.ISablierFlow.md#voidflowstream) and
{MetadataUpdate} event. Notes:

- It sets snapshot time to the `block.timestamp`.
- Voiding an insolvent stream sets the snapshot debt to the stream's balance making the uncovered debt to become zero.
- Voiding a solvent stream updates the snapshot debt by adding up ongoing debt.
- It sets the rate per second to zero.
- A voided stream cannot be restarted. Requirements:
- Must not be delegate called.
- `streamId` must not reference a null or a voided stream.
- `msg.sender` must either be the stream's sender, recipient or an approved third party.\*

```solidity
function void(uint256 streamId) external payable;
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
function withdraw(uint256 streamId, address to, uint128 amount) external payable;
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
function withdrawMax(uint256 streamId, address to) external payable returns (uint128 withdrawnAmount);
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
    address creator,
    address indexed sender,
    address indexed recipient,
    UD21x18 ratePerSecond,
    uint40 snapshotTime,
    IERC20 indexed token,
    bool transferable
);
```

**Parameters**

| Name            | Type      | Description                                                                                                                |
| --------------- | --------- | -------------------------------------------------------------------------------------------------------------------------- |
| `streamId`      | `uint256` | The ID of the newly created stream.                                                                                        |
| `creator`       | `address` | The address creating the stream.                                                                                           |
| `sender`        | `address` | The address streaming the tokens, which is able to adjust and pause the stream.                                            |
| `recipient`     | `address` | The address receiving the tokens, as well as the NFT owner.                                                                |
| `ratePerSecond` | `UD21x18` | The amount by which the debt is increasing every second, denoted as a fixed-point number where 1e18 is 1 token per second. |
| `snapshotTime`  | `uint40`  | The timestamp when the stream begins accumulating debt.                                                                    |
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

### Recover

Emitted when the comptroller recovers the surplus amount of token.

```solidity
event Recover(ISablierComptroller indexed comptroller, IERC20 indexed token, address to, uint256 surplus);
```

**Parameters**

| Name          | Type                  | Description                                                                |
| ------------- | --------------------- | -------------------------------------------------------------------------- |
| `comptroller` | `ISablierComptroller` | The address of the current comptroller.                                    |
| `token`       | `IERC20`              | The address of the ERC-20 token the surplus amount has been recovered for. |
| `to`          | `address`             | The address the surplus amount has been sent to.                           |
| `surplus`     | `uint256`             | The amount of surplus tokens recovered.                                    |

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

### SetNativeToken

Emitted when the native token address is set by the comptroller.

```solidity
event SetNativeToken(ISablierComptroller indexed comptroller, address nativeToken);
```

### SetNFTDescriptor

Emitted when the comptroller sets a new NFT descriptor contract.

```solidity
event SetNFTDescriptor(
    ISablierComptroller indexed comptroller, IFlowNFTDescriptor oldNFTDescriptor, IFlowNFTDescriptor newNFTDescriptor
);
```

**Parameters**

| Name               | Type                  | Description                                     |
| ------------------ | --------------------- | ----------------------------------------------- |
| `comptroller`      | `ISablierComptroller` | The address of the current comptroller.         |
| `oldNFTDescriptor` | `IFlowNFTDescriptor`  | The address of the old NFT descriptor contract. |
| `newNFTDescriptor` | `IFlowNFTDescriptor`  | The address of the new NFT descriptor contract. |

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
    uint256 indexed streamId, address indexed to, IERC20 indexed token, address caller, uint128 withdrawAmount
);
```

**Parameters**

| Name             | Type      | Description                                                                                    |
| ---------------- | --------- | ---------------------------------------------------------------------------------------------- |
| `streamId`       | `uint256` | The ID of the stream.                                                                          |
| `to`             | `address` | The address that received the withdrawn tokens.                                                |
| `token`          | `IERC20`  | The contract address of the ERC-20 token that was withdrawn.                                   |
| `caller`         | `address` | The address that performed the withdrawal, which can be the recipient or an approved operator. |
| `withdrawAmount` | `uint128` | The amount withdrawn to the recipient, denoted in token's decimals.                            |
