---
id: "events"
sidebar_position: 4
title: "Events"
---

[Git Source](https://github.com/sablier-labs/solsab/blob/main/programs/lockup/src/utils/events.rs)

### CancelLockupStream

Emitted when a stream is canceled.

```rust
pub struct CancelLockupStream {
    pub deposited_token_mint: Pubkey,
    pub recipient_amount: u64,
    pub sender_amount: u64,
    pub stream_data: Pubkey,
    pub stream_nft_mint: Pubkey,
}
```

### CreateLockupLinearStream

Emitted when an LL stream is created.

```rust
pub struct CreateLockupLinearStream {
    pub deposit_token_decimals: u8,
    pub deposit_token_mint: Pubkey,
    pub recipient: Pubkey,
    pub salt: u128,
    pub stream_data: Pubkey,
    pub stream_nft_mint: Pubkey,
}
```

### FeesCollected

Emitted when fees are collected from the treasury.

```rust
pub struct FeesCollected {
    pub fee_amount: u64,
    pub fee_collector: Pubkey,
    pub fee_recipient: Pubkey,
}
```

### RenounceLockupStream

Emitted when a sender gives up the right to cancel a stream.

```rust
pub struct RenounceLockupStream {
    pub deposited_token_mint: Pubkey,
    pub stream_data: Pubkey,
    pub stream_nft_mint: Pubkey,
}
```

### WithdrawFromLockupStream

Emitted when tokens are withdrawn from a stream.

```rust
pub struct WithdrawFromLockupStream {
    pub deposited_token_mint: Pubkey,
    pub fee_in_lamports: u64,
    pub stream_data: Pubkey,
    pub stream_nft_mint: Pubkey,
    pub withdrawn_amount: u64,
}
```
