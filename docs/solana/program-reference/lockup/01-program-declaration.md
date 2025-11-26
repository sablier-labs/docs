---
id: "program-declaration"
sidebar_position: 1
title: "Program Declaration"
---

# `lib.rs`

[Git Source](https://github.com/sablier-labs/solsab/blob/e1085fe87ea3d02556156ee446e820d150af483e/programs/lockup/src/lib.rs)

Sablier Lockup program for creating and managing token streams.

## State-changing Instructions

### cancel

Cancels the stream and refunds any remaining tokens to the sender ATA.

**Accounts Expected**

- `sender` The transaction signer and the stream's sender.
- `deposited_token_mint` The mint of the deposited token.
- `stream_nft_mint` The stream NFT mint uniquely identifying the stream.
- `deposited_token_program` The Token Program of the deposited token.

**Notes**

- If there are any tokens left for the recipient to withdraw, the stream is marked as canceled. Otherwise, the stream is
  marked as depleted.
- If the sender does not have an ATA for the deposited token, it is created.
- Emits a [CancelLockupStream](04-events.md#cancellockupstream) event.

**Requirements**

- The signer must be the stream's sender.
- The `stream_nft_mint` must exist.
- The stream must be cancelable.
- The stream must be Pending or Streaming.

```rust
pub fn cancel(ctx: Context<Cancel>) -> Result<()>
```

### collect_fees

Collects the fees accumulated in the treasury by transferring them to the fee recipient.

**Accounts Expected**

- `fee_collector` The transaction signer and the fee collector.
- `fee_recipient` The address receiving the collected fees.

**Notes**

- Leaves a buffer of 0.001 SOL to ensure the account remains rent-exempt after the fee collection.
- Emits a [FeesCollected](04-events.md#feescollected) event.

**Requirements**

- `fee_collector` must be authorized for fee collection.

```rust
pub fn collect_fees(ctx: Context<CollectFees>) -> Result<()>
```

### create_with_durations_ll

Creates a stream by setting the start time to the current timestamp, and the end time to the sum of the current
timestamp and the total duration The stream is funded by the signer and wrapped in a Metaplex NFT.

**Accounts Expected**

Refer to the accounts in [create_with_timestamps_ll](#create_with_timestamps_ll).

**Parameters**

Refer to the parameters in [create_with_timestamps_ll](#create_with_timestamps_ll).

**Notes**

Refer to the notes in [create_with_timestamps_ll](#create_with_timestamps_ll).

**Requirements**

Refer to the requirements in [create_with_timestamps_ll](#create_with_timestamps_ll).

```rust
pub fn create_with_durations_ll(
  ctx: Context<CreateWithTimestamps>,
  salt: u128,
  deposit_amount: u64,
  cliff_duration: u64,
  total_duration: u64,
  start_unlock_amount: u64,
  cliff_unlock_amount: u64,
  is_cancelable: bool,
) -> Result<()>
```

### create_with_timestamps_ll

Creates a stream with the provided start and end times. The stream is funded by the signer and wrapped in a Metaplex
NFT.

**Accounts Expected**

- `creator` The transaction signer.
- `sender` The account that will have authority to cancel or renounce the stream.
- `deposit_token_mint` The mint of the tokens to be deposited.
- `recipient` The address receiving the tokens, as well as the NFT owner.
- `deposit_token_program` The Token Program of the deposit token.
- `nft_token_program` The Token Program of the NFT.

**Parameters**

- `salt` A unique salt used to derive the address of the stream NFT mint.
- `deposit_amount` The deposit amount, denoted in units of the token's decimals.
- `start_time` The Unix timestamp indicating the stream's start.
- `cliff_time` The Unix timestamp indicating the stream's cliff.
- `end_time` The Unix timestamp indicating the stream's end.
- `start_unlock_amount` The amount to be unlocked at the start time.
- `cliff_unlock_amount` The amount to be unlocked at the cliff time.
- `is_cancelable` Indicates if the stream is cancelable.

**Notes**

- The passed sender of the stream doesn't have to be the same as its creator.
- A cliff time of zero means there is no cliff.
- As long as the times are ordered, it is not an error for the start or the cliff time to be in the past.
- The stream recipient is given solely by the ownership of the stream NFT, which is minted to the passed `recipient`.
- Emits a [CreateLockupLinearStream](04-events.md#createlockuplinearstream) event.

**Requirements**

- `deposit_amount` must be greater than zero.
- `start_time` must be greater than zero and less than `end_time`.
- If set, `cliff_time` must be greater than `start_time` and less than `end_time`.
- The sum of `start_unlock_amount` and `cliff_unlock_amount` must be less than or equal to deposit amount.
- If `cliff_time` is not set, the `cliff_unlock_amount` amount must be zero.

```rust
pub fn create_with_timestamps_ll(
  ctx: Context<CreateWithTimestamps>,
  salt: u128,
  deposit_amount: u64,
  start_time: u64,
  cliff_time: u64,
  end_time: u64,
  start_unlock_amount: u64,
  cliff_unlock_amount: u64,
  is_cancelable: bool,
) -> Result<()>
```

### initialize

Initializes the program with the provided fee collector address by creating a Metaplex NFT collection.

**Accounts Expected**

- `initializer` The transaction signer.
- `nft_token_program` The Token Program of the NFT collection.

**Parameters**:

- `fee_collector`: The address that will have the authority to collect fees.
- `chainlink_program`: The Chainlink program used to retrieve on-chain price feeds.
- `chainlink_sol_usd_feed`: The account providing the SOL/USD price feed data.

```rust
pub fn initialize(
  ctx: Context<Initialize>,
  fee_collector: Pubkey,
  chainlink_program: Pubkey,
  chainlink_sol_usd_feed: Pubkey,
) -> Result<()>
```

### renounce

Removes the right of the stream's sender to cancel the stream.

**Accounts Expected**

- `sender` The transaction signer and the stream's sender.
- `stream_nft_mint` The stream NFT mint uniquely identifying the stream.

**Notes**

- Emits a [RenounceLockupStream](04-events.md#renouncelockupstream) event.

```rust
pub fn renounce(ctx: Context<Renounce>) -> Result<()>
```

### withdraw

Withdraws the provided amount of tokens from the stream data ATA to the provided account.

**Accounts Expected**

- `signer` The transaction signer.
- `deposited_token_mint` The mint of the deposited token.
- `stream_nft_mint` The stream NFT mint uniquely identifying the stream.
- `withdrawal_recipient` The address of the recipient receiving the withdrawn tokens.
- `deposited_token_program` The Token Program of the deposited token.
- `nft_token_program` The Token Program of the NFT.
- `chainlink_program`: The Chainlink program used to retrieve on-chain price feeds.
- `chainlink_sol_usd_feed`: The account providing the SOL/USD price feed data.

**Parameters**

- `amount` The amount to withdraw, denoted in units of the token's decimals.

**Notes**

- If the withdrawal recipient does not have an ATA for the deposited token, one is created.
- The instruction charges a fee in the native token (SOL), equivalent to $1 USD.
- Emits [WithdrawFromLockupStream](04-events.md#withdrawfromlockupstream) event.

**Requirements**

- `stream_nft_mint` must exist.
- `withdrawal_recipient` must be the recipient if the signer is not the stream's recipient.
- `amount` must be greater than zero and must not exceed the withdrawable amount.
- The stream must not be Depleted.
- `chainlink_program` and `chainlink_sol_usd_feed` must match the ones stored in the treasury.

```rust
pub fn withdraw(ctx: Context<Withdraw>, amount: u64) -> Result<()>
```

### withdraw_max

Withdraws the maximum withdrawable amount from the stream data ATA to the provided account.

**Accounts Expected**

Refer to the accounts in [withdraw`](#withdraw).

**Notes**

Refer to the notes in [withdraw`](#withdraw).

**Requirements**

Refer to the requirements in [withdraw`](#withdraw).

```rust
pub fn withdraw_max(ctx: Context<Withdraw>) -> Result<()>
```

## Read-only Instructions

### refundable_amount_of

Calculates the amount that the sender would be refunded if the stream were canceled, denoted in units of the token's
decimals.

**Accounts Expected**

- `stream_nft_mint` The stream NFT mint uniquely identifying the stream.

**Requirements**

- The stream must exist.

```rust
pub fn refundable_amount_of(ctx: Context<StreamView>) -> Result<u64>
```

### status_of

Retrieves the stream's status.

**Accounts Expected**

- `stream_nft_mint` The stream NFT mint uniquely identifying the stream.

**Requirements**

- The stream must exist.

```rust
pub fn status_of(ctx: Context<StreamView>) -> Result<StreamStatus>
```

### stream_exists

Returns a flag indicating whether a stream based on the `_sender` and the `_salt` already exists.

**Parameters**

- `_sender` The sender of the stream.
- `_salt` The unique salt used to derive the stream NFT mint address.

```rust
pub fn stream_exists(ctx: Context<StreamExists>, _sender: Pubkey, _salt: u128) -> Result<bool>
```

### streamed_amount_of

Calculates the amount streamed to the recipient, denoted in units of the token's decimals.

**Accounts Expected**

- `stream_nft_mint` The stream NFT mint uniquely identifying the stream.

**Notes**

- Upon cancellation of the stream, the amount streamed is calculated as the difference between the deposited amount and
  the refunded amount. Ultimately, when the stream becomes depleted, the streamed amount is equivalent to the total
  amount withdrawn.

**Requirements**

- The stream must exist.

```rust
pub fn streamed_amount_of(ctx: Context<StreamView>) -> Result<u64>
```

### treasury_view

Returns the treasury details.

```rust
pub fn treasury_view(ctx: Context<TreasuryView>) -> Result<state::Treasury>
```

### withdrawable_amount_of

Calculates the amount that the recipient can withdraw from the stream, denoted in units of the token's decimals.

**Accounts Expected**

- `stream_nft_mint` The stream NFT mint uniquely identifying the stream.

**Requirements**

- The stream must exist.

```rust
pub fn withdrawable_amount_of(ctx: Context<StreamView>) -> Result<u64>
```

### withdrawal_fee_in_lamports

Calculates the withdrawal fee in lamports.

**Accounts Expected**:

- `chainlink_program`: The Chainlink program used to retrieve on-chain price feeds.
- `chainlink_sol_usd_feed`: The account providing the SOL/USD price feed data.

```rust
pub fn withdrawal_fee_in_lamports(ctx: Context<WithdrawalFeeInLamports>) -> Result<u64>
```
