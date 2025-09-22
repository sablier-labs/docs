---
id: "context accounts"
sidebar_position: 2
title: "Context Accounts"
---

## State-changing Instructions

### Cancel

**Write account:** the sender of the stream who can cancel it.

```rust
pub sender: Signer<'info>,
```

**Create if needed account:** the deposited token ATA owned by the sender.

```rust
pub sender_ata: Box<InterfaceAccount<'info, TokenAccount>>,
```

**Read account:** the mint account of the deposited token.

```rust
pub deposited_token_mint: Box<InterfaceAccount<'info, Mint>>,
```

**Write account:** the stream data account storing stream details.

```rust
pub stream_data: Box<Account<'info, StreamData>>,
```

**Write account:** the deposited token ATA owned by the stream data account.

```rust
pub stream_data_ata: Box<InterfaceAccount<'info, TokenAccount>>,
```

**Read account:** the mint account for the stream NFT.

```rust
pub stream_nft_mint: Box<InterfaceAccount<'info, Mint>>,
```

**Program account:** the Associated Token program.

```rust
pub associated_token_program: Program<'info, AssociatedToken>,
```

**Program account:** the System program.

```rust
pub deposited_token_program: Interface<'info, TokenInterface>,
```

**Program account:** the Token program of the deposited token.

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

### CreateWithTimestamps

**Write account:** the creator and funder of the stream.

```rust
pub creator: Signer<'info>,
```

**Write account:** the creator's ATA for the deposit token.

```rust
pub creator_ata: Box<InterfaceAccount<'info, TokenAccount>>,
```

**Read account:** the recipient of the stream.

```rust
pub recipient: UncheckedAccount<'info>,
```

**Read account:** the sender of the stream.

```rust
pub sender: UncheckedAccount<'info>,
```

**Write account:** the NFT collection data storing the total supply.

```rust
pub nft_collection_data: Box<Account<'info, NftCollectionData>>,
```

**Write account:** the master edition account for the NFT collection.

```rust
pub nft_collection_master_edition: UncheckedAccount<'info>,
```

**Write account:** the metadata account for the NFT collection.

```rust
pub nft_collection_metadata: UncheckedAccount<'info>,
```

**Read account:** the mint account for the NFT collection.

```rust
pub nft_collection_mint: Box<InterfaceAccount<'info, Mint>>,
```

**Read account:** the mint account for the deposit token.

```rust
pub deposit_token_mint: Box<InterfaceAccount<'info, Mint>>,
```

**Create account:** the mint account for the stream NFT.

```rust
pub stream_nft_mint: Box<InterfaceAccount<'info, Mint>>,
```

**Create account:** the ATA for the stream NFT owned by the recipient.

```rust
pub recipient_stream_nft_ata: Box<InterfaceAccount<'info, TokenAccount>>,
```

**Create account:** the account that will store the stream data.

```rust
pub stream_data: Box<Account<'info, StreamData>>,
```

**Create account:** the ATA for deposit tokens owned by stream data account.

```rust
pub stream_data_ata: Box<InterfaceAccount<'info, TokenAccount>>,
```

**Create account:** the master edition account for the stream NFT.

```rust
pub stream_nft_master_edition: UncheckedAccount<'info>,
```

**Create account:** the metadata account for the stream NFT.

```rust
pub stream_nft_metadata: UncheckedAccount<'info>,
```

**Program account:** the Associated Token program.

```rust
pub associated_token_program: Program<'info, AssociatedToken>,
```

**Program account:** the Token program of the deposit token.

```rust
pub deposit_token_program: Interface<'info, TokenInterface>,
```

**Program account:** the Token program of the stream NFT.

```rust
pub nft_token_program: Interface<'info, TokenInterface>,
```

**Program account:** the Token Metadata program.

```rust
pub token_metadata_program: Program<'info, Metadata>,
```

**Program account:** the System program.

```rust
pub system_program: Program<'info, System>,
```

**Sysvar account:** Rent.

```rust
pub rent: Sysvar<'info, Rent>,
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

**Create account:** the NFT collection data account storing collection metadata.

```rust
pub nft_collection_data: Box<Account<'info, NftCollectionData>>,
```

**Create account:** the master edition account for the NFT collection.

```rust
pub nft_collection_master_edition: UncheckedAccount<'info>,
```

**Create account:** the metadata account for the NFT collection.

```rust
pub nft_collection_metadata: UncheckedAccount<'info>,
```

**Create account:** the mint account for the NFT collection.

```rust
pub nft_collection_mint: Box<InterfaceAccount<'info, Mint>>,
```

**Create account:** the ATA for the NFT collection owned by treasury.

```rust
pub nft_collection_ata: Box<InterfaceAccount<'info, TokenAccount>>,
```

**Program account:** the Associated Token program.

```rust
pub associated_token_program: Program<'info, AssociatedToken>,
```

**Program account:** the Token program of the collection NFT.

```rust
pub nft_token_program: Interface<'info, TokenInterface>,
```

**Program account:** the Token Metadata program.

```rust
pub token_metadata_program: Program<'info, Metadata>,
```

**Sysvar account:** Rent.

```rust
pub rent: Sysvar<'info, Rent>,
```

**Program account:** the System program.

```rust
pub system_program: Program<'info, System>,
```

### Renounce

**Write account:** the sender of the stream.

```rust
pub sender: Signer<'info>,
```

**Write account:** the stream data account storing stream details.

```rust
pub stream_data: Box<Account<'info, StreamData>>,
```

**Read account:** the mint account for the stream NFT.

```rust
pub stream_nft_mint: Box<InterfaceAccount<'info, Mint>>,
```

### Withdraw

**Write account:** the signer of the withdrawal who pays the withdrawal fee.

```rust
pub signer: Signer<'info>,
```

**Read account:** the recipient of the stream who owns the stream NFT.

```rust
pub stream_recipient: UncheckedAccount<'info>,
```

**Read account:** the account that will receive the withdrawn tokens.

```rust
pub withdrawal_recipient: UncheckedAccount<'info>,
```

**Create if needed account:** the ATA for deposited tokens owned by withdrawal recipient.

```rust
pub withdrawal_recipient_ata: Box<InterfaceAccount<'info, TokenAccount>>,
```

**Write account:** the treasury account that receives the withdrawal fee.

```rust
pub treasury: Box<Account<'info, Treasury>>,
```

**Read account:** the mint account for the deposited token.

```rust
pub deposited_token_mint: Box<InterfaceAccount<'info, Mint>>,
```

**Read account:** the ATA for the stream NFT owned by recipient.

```rust
pub recipient_stream_nft_ata: Box<InterfaceAccount<'info, TokenAccount>>,
```

**Write account:** the account storing the stream data.

```rust
pub stream_data: Box<Account<'info, StreamData>>,
```

**Write account:** the ATA for deposited tokens owned by stream data.

```rust
pub stream_data_ata: Box<InterfaceAccount<'info, TokenAccount>>,
```

**Read account:** the mint account for the stream NFT.

```rust
pub stream_nft_mint: Box<InterfaceAccount<'info, Mint>>,
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

**Program account:** the Token program of the deposited token.

```rust
pub deposited_token_program: Interface<'info, TokenInterface>,
```

**Program account:** the Token program of the stream NFT.

```rust
pub nft_token_program: Interface<'info, TokenInterface>,
```

**Program account:** the System program.

```rust
pub system_program: Program<'info, System>,
```

## Read-only Instructions

### StreamExists

**Read account:** the mint account for the stream NFT.

```rust
pub stream_nft_mint: UncheckedAccount<'info>,
```

### StreamView

**Read account:** the account storing stream details.

```rust
pub stream_data: Box<Account<'info, StreamData>>,
```

**Read account:** the mint account for the stream NFT.

```rust
pub stream_nft_mint: Box<InterfaceAccount<'info, Mint>>,
```

### TreasuryView

**Read account:** the account storing the treasury details.

```rust
pub treasury: Box<Account<'info, Treasury>>,
```

### WithdrawalFeeInLamports

**Read account:** the treasury account that receives the withdrawal fee.

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
