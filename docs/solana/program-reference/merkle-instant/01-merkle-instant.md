---
id: "merkle-instant"
sidebar_position: 1
title: "Program Declaration"
---

# `lib.rs`

[Git Source](https://github.com/sablier-labs/solsab/blob/main/programs/merkle-instant/src/lib.rs)

Sablier Merkle Instant program for creating and managing Merkle tree-based airdrop campaigns.

## State-changing Instructions

### claim

Claims airdrop on behalf of eligible recipient and transfers it to the recipient ATA.

**Accounts Expected**

- `claimer` The transaction signer.
- `campaign` The account that stores the campaign details.
- `recipient` The address of the airdrop recipient.
- `airdrop_token_mint` The mint of the airdropped token.
- `airdrop_token_program` The Token Program of the airdropped token.
- `chainlink_program`: The Chainlink program used to retrieve on-chain price feeds.
- `chainlink_sol_usd_feed`: The account providing the SOL/USD price feed data.

**Parameters**

- `index` The index of the recipient in the Merkle tree.
- `amount` The amount allocated to the recipient.
- `merkle_proof` The proof of inclusion in the Merkle tree.

**Notes**

- Emits a [`crate::utils::events::Claim`] event.

**Requirements**

- The current time must be greater than or equal to the campaign start time.
- The campaign must not have expired.
- The recipient's airdrop has not been claimed yet.
- The Merkle proof must be valid.
- `chainlink_program` and `chainlink_sol_usd_feed` must match the ones stored in the treasury.

```rust
pub fn claim(ctx: Context<Claim>, index: u32, amount: u64, merkle_proof: Vec<[u8; 32]>) -> Result<()>
```

### clawback

Claws back the unclaimed tokens from the campaign.

**Accounts Expected**

- `campaign` The account that stores the campaign details.
- `campaign_creator` The transaction signer.
- `airdrop_token_mint` The mint of the airdropped token.
- `airdrop_token_program` The Token Program of the airdropped token.

**Parameters**

- `amount` The amount to claw back.

**Notes**

- Emits a [`crate::utils::events::Clawback`] event.

**Requirements**

- The signer must be the actual campaign creator.
- No claim must be made, OR the current timestamp must not exceed 7 days after the first claim, OR the campaign must be
  expired.

```rust
pub fn clawback(ctx: Context<Clawback>, amount: u64) -> Result<()>
```

### collect_fees

Collects the fees accumulated in the treasury by transferring them to the fee recipient.

**Accounts Expected**

- `fee_collector` The transaction signer and the fee collector.
- `fee_recipient` The address receiving the collected fees.

**Notes**

- To calculate the "collectable amount", the rent-exempt minimum balance and a 0.001 SOL buffer are deducted from the
  treasury SOL balance.
- Emits a [`crate::utils::events::FeesCollected`] event.

**Requirements**

- `fee_collector` must be authorized for fee collection.
- The "collectable amount" must be greater than zero.

```rust
pub fn collect_fees(ctx: Context<CollectFees>) -> Result<()>
```

### create_campaign

Creates a Merkle Instant airdrop campaign.

**Accounts Expected**

- `creator` The transaction signer and the campaign creator.
- `airdrop_token_mint` The mint of the airdropped token.
- `airdrop_token_program` The Token Program of the airdropped token.

**Parameters**

- `merkle_root` The Merkle root of the claim data.
- `campaign_start_time` The time when the campaign starts, in seconds since the Unix epoch.
- `expiration_time` The time when the campaign expires, in seconds since the Unix epoch. A value of zero means the
  campaign does not expire.
- `name` The name of the campaign.
- `ipfs_cid` The content identifier for indexing the campaign on IPFS. An empty value may break some UI features that
  depend upon the IPFS CID.
- `aggregate_amount` The total amount of tokens to be distributed to all recipients.
- `recipient_count` The total number of recipient addresses eligible for the airdrop.

**Notes**

- Emits a [`crate::utils::events::CreateCampaign`] event.

```rust
pub fn create_campaign(
    ctx: Context<CreateCampaign>,
    merkle_root: [u8; 32],
    campaign_start_time: u64,
    expiration_time: u64,
    name: String,
    ipfs_cid: String,
    aggregate_amount: u64,
    recipient_count: u32,
) -> Result<()>
```

### initialize

Initializes the program with the provided fee collector address.

**Accounts Expected**

- `initializer` The transaction signer.

**Parameters**

- `fee_collector` The address that will have the authority to collect fees.
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

## Read-only Instructions

### campaign_view

Retrieves the campaign details.

**Accounts Expected**

- `campaign` The account that stores the campaign details.

```rust
pub fn campaign_view(ctx: Context<CampaignView>) -> Result<state::Campaign>
```

### claim_fee_in_lamports

Calculates the claim fee in lamports.

**Accounts Expected**:

- `chainlink_program`: The Chainlink program used to retrieve on-chain price feeds.
- `chainlink_sol_usd_feed`: The account providing the SOL/USD price feed data.

```rust
pub fn claim_fee_in_lamports(ctx: Context<ClaimFeeInLamports>) -> Result<u64>
```

### has_claimed

Returns a flag indicating whether a claim has been made for the given index.

**Accounts Expected**

- `campaign` The account that stores the campaign details.

**Parameters**

- `_index` The index of the recipient in the Merkle tree.

```rust
pub fn has_claimed(ctx: Context<HasClaimed>, _index: u32) -> Result<bool>
```

### has_expired

Returns a flag indicating whether the campaign has expired.

**Accounts Expected**

- `campaign` The account that stores the campaign details.

```rust
pub fn has_expired(ctx: Context<CampaignView>) -> Result<bool>
```

### has_grace_period_passed

Returns a flag indicating whether the grace period of the campaign has passed.

**Accounts Expected**

- `campaign` The account that stores the campaign details.

**Notes**

- A return value of `false` indicates: No claim has been made yet, OR the current timestamp does not exceed seven days
  after the first claim.

```rust
pub fn has_grace_period_passed(ctx: Context<CampaignView>) -> Result<bool>
```

### has_campaign_started

Returns a flag indicating whether the campaign has started.

**Accounts expected**:

- `campaign` The account that stores the campaign details.

```rust
pub fn has_campaign_started(ctx: Context<CampaignView>) -> Result<bool>
```

### treasury_view

Returns the treasury details.

```rust
pub fn treasury_view(ctx: Context<TreasuryView>) -> Result<state::Treasury>
```
