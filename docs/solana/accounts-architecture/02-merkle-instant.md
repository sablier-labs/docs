---
id: "merkle-instant"
sidebar_position: 2
title: "Merkle Instant"
---

This section focuses on the architecture of accounts created or used in the most important instructions of the Merkle
Instant program.

## Account architecture

### Sablier Merkle Instant program

The `sablier_merkle_instant` program implements the following main functionalities:

- `initialize`
- `create_campaign`
- `claim`
- `clawback`

We will go into the details and specifics of each one later. For now, we will focus only on the accounts being created.

```mermaid
flowchart TD
    A[Sablier Merkle Instant Program] --> B[initialize]
    A --> C[create_campaign]
    A --> D[claim]
    A --> E[clawback]
```

### `initialize` Instruction

```mermaid
flowchart TD
    A[Initializer] --> |calls| B[initialize]

    B --> |creates| C((treasury))
```

The
[Treasury PDA](https://github.com/sablier-labs/solsab/blob/e1085fe87ea3d02556156ee446e820d150af483e/programs/merkle_instant/src/state/treasury.rs#L5-L10)
stores this data:

```mermaid
flowchart TD
    C((treasury)) --> C1([fee_collector])
    C --> C2([chainlink_program])
    C --> C3([chainlink_sol_usd_feed])
```

### `create_campaign` Instruction

```mermaid
flowchart TD
    A[Campaign Creator] --> |calls| B[create_campaign]

    B --> |creates| C((campaign))
    B --> |creates| D((campaign_ata))
    D -.-> |for| D1((airdrop_token_mint))
```

Each
[Campaign](https://github.com/sablier-labs/solsab/blob/e1085fe87ea3d02556156ee446e820d150af483e/programs/merkle_instant/src/state/campaign.rs#L8-L20)
account stores the following parameters:

```mermaid
flowchart TD
    A((campaign)) --> A1([airdrop_token_mint])
    A --> A2([campaign_start_time])
    A --> A3([creator])
    A --> A4([expiration_time])
    A --> A5([first_claim_time])
    A --> A6([ipfs_cid])
    A --> A7([merkle_root])
    A --> A8([name])
```

### `claim` Instruction

```mermaid
flowchart TD
    A[Claimer] -->|calls| B[claim]

    B --> |creates| C((claim_receipt))
    B --> |creates| D((recipient_ata))
    D -.-> |for| D1((airdrop_token_mint))
```

The
[Claim receipt](https://github.com/sablier-labs/solsab/blob/e1085fe87ea3d02556156ee446e820d150af483e/programs/merkle_instant/src/state/claim_receipt.rs#L6)
account serves as proof of claim for the given recipient.

## The Flow of the Airdrop Token

### `create_campaign` Instruction

This instruction does not perform the airdrop token transfer, but the transfer is expected to be made as a separate
transaction. Therefore, the campaign ATA is assumed to be funded after the campaign creation.

### `claim` Instruction

```mermaid
sequenceDiagram
    actor Claimer

    Claimer->>MerkleInstant: claim(recipient)
    MerkleInstant -->> CampaignATA: Transfer tokens From
    CampaignATA -->> RecipientATA: Transfer tokens To
```

### `clawback` Instruction

```mermaid
sequenceDiagram
    actor CampaignCreator

    CampaignCreator->>MerkleInstant: clawback()
    MerkleInstant -->> CampaignATA: Transfer unclaimed tokens From
    CampaignATA -->> CampaignCreatorATA: Transfer unclaimed tokens To
```
