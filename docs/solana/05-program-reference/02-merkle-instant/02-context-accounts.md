---
id: "context accounts"
sidebar_position: 2
title: "Context Accounts"
---

[Git Source](https://github.com/sablier-labs/solsab/blob/e1085fe87ea3d02556156ee446e820d150af483e/programs/merkle_instant/src/instructions/)

## State-changing Instructions

### Claim

**Write account:** the signer of the claim who will pay the claim fee.

```rust
pub claimer: Signer<'info>,
```

**Read account:** the recipient of the airdrop.

```rust
pub recipient: UncheckedAccount<'info>,
```

**Create if needed account:** the ATA for airdrop token owned by the recipient.

```rust
pub recipient_ata: Box<InterfaceAccount<'info, TokenAccount>>,
```

**Write account:** the treasury account that will receive the claim fee.

```rust
pub treasury: Box<Account<'info, Treasury>>,
```

**Read account:** the mint account of the airdrop token.

```rust
pub airdrop_token_mint: Box<InterfaceAccount<'info, Mint>>,
```

**Write account:** the account storing the campaign data.

```rust
pub campaign: Box<Account<'info, Campaign>>,
```

**Write account:** the campaign's ATA for the airdrop token.

```rust
pub campaign_ata: Box<InterfaceAccount<'info, TokenAccount>>,
```

**Create account:** the claim receipt.

```rust
pub claim_receipt: Box<Account<'info, ClaimReceipt>>,
```

**Program account:** the Token program of the airdrop token.

```rust
pub airdrop_token_program: Interface<'info, TokenInterface>,
```

**Program account:** the Associated Token program.

```rust
pub associated_token_program: Program<'info, AssociatedToken>,
```

**Read account:** The Chainlink program used to retrieve on-chain price feeds.

```rust
pub chainlink_program: AccountInfo<'info>,
```

**Read account:** The account providing the SOL/USD price feed data.

```rust
pub chainlink_sol_usd_feed: AccountInfo<'info>,
```

**Program account:** the System program.

```rust
pub system_program: Program<'info, System>,
```

### Clawback

**Write account:** the campaign creator who will claw back the tokens.

```rust
pub campaign_creator: Signer<'info>,
```

**Read account:** the clawback recipient.

```rust
pub clawback_recipient: UncheckedAccount<'info>,
```

**Create if needed account:** the clawback recipient's ATA for the airdrop token.

```rust
pub clawback_recipient_ata: Box<InterfaceAccount<'info, TokenAccount>>,
```

**Read account:** the mint account of the airdrop token.

```rust
pub airdrop_token_mint: Box<InterfaceAccount<'info, Mint>>,
```

**Read account:** the account storing the campaign data.

```rust
pub campaign: Box<Account<'info, Campaign>>,
```

**Write account:** the campaign's ATA for the airdrop token.

```rust
pub campaign_ata: Box<InterfaceAccount<'info, TokenAccount>>,
```

**Program account:** the Token program of the airdrop token.

```rust
pub airdrop_token_program: Interface<'info, TokenInterface>,
```

**Program account:** the Associated Token program.

```rust
pub associated_token_program: Program<'info, AssociatedToken>,
```

**Program account:** the System program.

```rust
pub system_program: Program<'info, System>,
```

### CollectFees

**Write account:** the account authorized to collect fees from the treasury.

```rust
pub fee_collector: Signer<'info>,
```

**Write account:** the address that will receive the collected fees.

```rust
pub fee_recipient: UncheckedAccount<'info>,
```

**Write account:** the treasury account that holds the fees.

```rust
pub treasury: Box<Account<'info, Treasury>>,
```

### CreateCampaign

**Write account:** the creator of the campaign.

```rust
pub creator: Signer<'info>,
```

**Read account:** the mint account of the airdrop token.

```rust
pub airdrop_token_mint: Box<InterfaceAccount<'info, Mint>>,
```

**Create account:** the account storing the campaign data.

```rust
pub campaign: Box<Account<'info, Campaign>>,
```

**Create account:** the campaign's ATA for the airdrop token.

```rust
pub campaign_ata: Box<InterfaceAccount<'info, TokenAccount>>,
```

**Program account:** the Token program of the airdrop token.

```rust
pub airdrop_token_program: Interface<'info, TokenInterface>,
```

**Program account:** the Associated Token program.

```rust
pub associated_token_program: Program<'info, AssociatedToken>,
```

**Program account:** the System program.

```rust
pub system_program: Program<'info, System>,
```

### Initialize

**Write account:** the initializer of the program.

```rust
pub initializer: Signer<'info>,
```

**Create account:** the treasury account that will hold the fees.

```rust
pub treasury: Box<Account<'info, Treasury>>,
```

**Program account:** the System program.

```rust
pub system_program: Program<'info, System>,
```

## Read-only Instructions

### CampaignView

**Read account:** the account storing the campaign data.

```rust
pub campaign: Box<Account<'info, Campaign>>,
```

### ClaimFeeInLamports

**Read account:** the treasury account that receives the claim fee.

```rust
pub treasury: Box<Account<'info, Treasury>>,
```

**Read account:** The Chainlink program used to retrieve on-chain price feeds.

```rust
pub chainlink_program: AccountInfo<'info>,
```

**Read account:** The account providing the SOL/USD price feed data.

```rust
pub chainlink_sol_usd_feed: AccountInfo<'info>,
```

### HasClaimed

**Read account:** the account storing the campaign data.

```rust
pub campaign: Box<Account<'info, Campaign>>,
```

**Read account:** the claim receipt.

```rust
pub claim_receipt: UncheckedAccount<'info>,
```

### TreasuryView

**Read account:** the account storing the treasury details.

```rust
pub treasury: Box<Account<'info, Treasury>>,
```
