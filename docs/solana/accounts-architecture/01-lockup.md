---
id: "lockup"
sidebar_position: 1
title: "Sablier Lockup"
---

This section focuses on the architecture of accounts created or used in the most important instructions of the Sablier
Lockup program.

## Account architecture

### Sablier Lockup program

The `sablier_lockup` program implements these main functionalities:

- `initialize`
- `create_with_timestamps_ll`
- `cancel`
- `withdraw`
- `renounce`

We will go into the details and specifics of each one later. For now, we will focus only on the accounts being created.

```mermaid
flowchart TD
    A[Sablier Lockup Program] --> B[initialize]
    A --> C[create_with_timestamps_ll]
    A --> D[cancel]
    A --> E[withdraw]
    A --> F[renounce]
```

### `initialize` Instruction

```mermaid
flowchart TD
    A[Initializer] -->|calls| B[initialize]

    B --> |creates| C((treasury))
    B --> |creates| D((nft_collection_ata))
    B --> |creates| E((nft_collection_data))
    B --> |creates| F((nft_collection_master_edition))
    B --> |creates| G((nft_collection_metadata))
    B --> |creates| H((nft_collection_mint))
```

- **NFT collection data PDA**: stores collection configuration and metadata
- **NFT collection mint PDA**: serves as the master mint authority for all stream NFTs
- **NFT collection metadata PDA**: created via Metaplex CPI
- **NFT collection master edition PDA**: created via Metaplex CPI
- **NFT collection ATA**: associated token account owned by treasury to hold the collection NFT token

The **Treasury PDA** stores this data:

```mermaid
flowchart TD
    C((treasury)) --> C1([fee_collector])
    C --> C2([chainlink_program])
    C --> C3([chainlink_sol_usd_feed])
```

### `create_with_timestamps_ll` Instruction

#### Pre-existing accounts required:

- Deposit Token
- NFT Collection

```mermaid
flowchart TD
    A[Sender] -->|calls| B[create_with_timestamps_ll]

    B --> |creates| C((stream_nft_mint))
    C0((nft_collection_mint)) -.-> |authority for| C
    B --> |creates| D((stream_data))
    D --> |creates| H((stream_data_ata))
    H -.-> |for| H1((deposit_token_mint))

    C --> |creates| C1((recipient_stream_nft_ata))
    C --> |creates| C2((stream_nft_master_edition))
    C --> |creates| C3((stream_nft_metadata))
```

The **Stream NFT Mint** also serves as the "Stream ID" for the `cancel`, `renounce`, and `withdraw` instructions.

Each **Stream Data** account stores the following parameters:

```mermaid
flowchart TD
    A((Stream Data))
    A --> A1([amounts])
    A --> A2([deposit_token_mint])
    A --> A3([is_cancelable])
    A --> A4([is_depleted])
    A --> A5([salt])
    A --> A6([sender])
    A --> A7([timestamps])
    A --> A8([was_canceled])
```

Each `amount` data structure consists of the following components:

```mermaid
flowchart TD
  A([amounts])
  A --> A1([deposited])
  A --> A2([withdrawn])
  A --> A3([refunded])
```

Each `timestamps` data structure consists of the following components:

```mermaid
flowchart TD
  A([timestamps])
  A --> A1([cliff])
  A --> A2([end])
  A --> A3([start])
```

## Deposit Token Flow

### `create_with_timestamps_ll` Instruction

```mermaid
sequenceDiagram
    actor Sender

    Sender->>Lockup: create_with_timestamps_ll()
    Lockup -->> SenderATA: Transfer Tokens
    SenderATA -->> StreamDataATA: Transfer Tokens
```

### `cancel` Instruction

Only the sender can cancel a stream.

```mermaid
sequenceDiagram
    actor Sender

    Sender->>Lockup: cancel()
    Lockup -->> StreamDataATA: Transfer Unvested Tokens
    StreamDataATA -->> SenderATA: Transfer Unvested Tokens
```

### `withdraw` Instruction

```mermaid
sequenceDiagram
    actor Anyone

    Anyone->>Lockup: withdraw(withdrawal_recipient)
    Lockup -->> StreamDataATA: Transfer Vested Tokens
    StreamDataATA -->> WithdrawalRecipientATA: Transfer Vested Tokens
```
