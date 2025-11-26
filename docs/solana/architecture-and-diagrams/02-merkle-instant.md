---
id: "merkle-instant"
sidebar_position: 2
title: "Merkle Instant"
---

This section covers the program architecture, as well as the account structure and the token flow for the most important
instructions of the Merkle Instant program.

## Program Architecture

The `sablier_merkle_instant` program implements the following main functionalities:

- `initialize`
- `create_campaign`
- `claim`
- `clawback`

```mermaid
flowchart TD
    A[Sablier Merkle Instant Program] --> B[initialize]
    A --> C[create_campaign]
    A --> D[claim]
    A --> E[clawback]
```

## Ix Account Architecture

The following sections detail the accounts created by each instruction.

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

## Airdrop Token Flow

The airdrop token flow begins when the campaign creator funds the campaign's ATA. Once funded and the campaign has
started, eligible recipients can claim their tokens. The campaign creator can clawback any remaining tokens after the
campaign expires. The following diagrams illustrate how tokens move between accounts when each instruction is executed.

### `create_campaign` Instruction

This instruction creates the campaign account and its ATA, but does not perform the airdrop token transfer. The campaign
creator must fund the campaign ATA in a separate transaction after campaign creation. After that, the campaign ATA will
hold all tokens available for distribution to eligible recipients.

### `claim` Instruction

Eligible recipients can claim their airdrop tokens by providing a valid Merkle proof. When claimed, tokens are
transferred from the campaign ATA to the recipient's ATA.

```mermaid
sequenceDiagram
    actor Claimer
    participant MerkleInstant
    participant TokenProgram as Token Program
    participant Accounts as Token Accounts<br/>Campaign ATA & Recipient ATA

    Claimer->>MerkleInstant: claim(recipient)
    MerkleInstant->>TokenProgram: CPI: transfer()
    TokenProgram-->>Accounts: Move tokens<br/>Campaign ATA → Recipient ATA
```

### `clawback` Instruction

After the campaign expiration time, the campaign creator can clawback any remaining/unclaimed tokens. These tokens are
transferred from the campaign ATA back to the campaign creator's ATA.

```mermaid
sequenceDiagram
    actor CampaignCreator
    participant MerkleInstant
    participant TokenProgram as Token Program
    participant Accounts as Token Accounts<br/>Campaign ATA & CampaignCreator ATA

    CampaignCreator->>MerkleInstant: clawback()
    MerkleInstant->>TokenProgram: CPI: transfer()
    TokenProgram-->>Accounts: Move tokens<br/>Campaign ATA → CampaignCreator ATA
```
