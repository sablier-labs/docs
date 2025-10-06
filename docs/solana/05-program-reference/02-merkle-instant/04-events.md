---
id: "events"
sidebar_position: 4
title: "Events"
---

[Git Source](https://github.com/sablier-labs/solsab/blob/e1085fe87ea3d02556156ee446e820d150af483e/programs/merkle_instant/src/utils/events.rs)

### Claim

Emitted when an airdrop is claimed on behalf of an eligible recipient.

```rust
pub struct Claim {
    pub amount: u64,
    pub campaign: Pubkey,
    pub claimer: Pubkey,
    pub claim_receipt: Pubkey,
    pub fee_in_lamports: u64,
    pub index: u32,
    pub recipient: Pubkey,
}
```

### Clawback

Emitted when the campaign creator claws back the unclaimed tokens.

```rust
pub struct Clawback {
    pub amount: u64,
    pub campaign: Pubkey,
    pub campaign_creator: Pubkey,
    pub clawback_recipient: Pubkey,
}
```

### CreateCampaign

Emitted when a Merkle Instant campaign is created.

```rust
pub struct CreateCampaign {
    pub aggregate_amount: u64,
    pub campaign: Pubkey,
    pub campaign_name: String,
    pub campaign_start_time: u64,
    pub creator: Pubkey,
    pub expiration_time: u64,
    pub ipfs_cid: String,
    pub merkle_root: [u8; 32],
    pub recipient_count: u32,
    pub token_decimals: u8,
    pub token_mint: Pubkey,
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
