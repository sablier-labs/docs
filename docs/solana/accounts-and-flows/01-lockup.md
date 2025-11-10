---
id: "lockup"
sidebar_position: 1
title: "Lockup"
---

This section covers the program architecture, as well as the account structure and the token flow for the most important
instructions of the Lockup program.

## Program Architecture

The `sablier_lockup` program implements these main functionalities:

- `initialize`
- `create_stream`
- `cancel`
- `withdraw`
- `renounce`

The `create_stream` functionality is represented by the `create_with_timestamps_ll` and `create_with_durations_ll`
instructions. The difference between them is the different kind of inputs required from the ix caller to create the
stream. However, both of them create the same accounts and store the same data on-chain.

```mermaid
flowchart TD
    A[Sablier Lockup Program] --> B[initialize]
    A --> C[create_stream]
    A --> D[cancel]
    A --> E[withdraw]
    A --> F[renounce]
    C --> G[create_with_timestamps_ll]
    C --> H[create_with_durations_ll]
```

## Ix Account Architecture

The following sections detail the accounts created by each instruction.

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

The
[Treasury PDA](https://github.com/sablier-labs/solsab/blob/e1085fe87ea3d02556156ee446e820d150af483e/programs/lockup/src/state/treasury.rs#L5-L10)
stores this data:

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
    B --> |creates| H((stream_data_ata))
    H -.-> |for| H1((deposit_token_mint))

    B --> |creates| C1((recipient_stream_nft_ata))
    B --> |creates| C2((stream_nft_master_edition))
    B --> |creates| C3((stream_nft_metadata))
```

The **Stream NFT Mint** also serves as the "Stream ID" for the `cancel`, `renounce`, and `withdraw` instructions.

Each
[Stream Data](https://github.com/sablier-labs/solsab/blob/e1085fe87ea3d02556156ee446e820d150af483e/programs/lockup/src/state/lockup.rs#L14-L24)
account stores the following parameters:

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

Each
[amount](https://github.com/sablier-labs/solsab/blob/e1085fe87ea3d02556156ee446e820d150af483e/programs/lockup/src/state/lockup.rs#L4-L10)
data structure consists of the following components:

```mermaid
flowchart TD
  A([amounts])
  A --> A1([deposited])
  A --> A2([withdrawn])
  A --> A3([refunded])
```

Each
[timestamps](https://github.com/sablier-labs/solsab/blob/e1085fe87ea3d02556156ee446e820d150af483e/programs/lockup/src/state/lockup.rs#L28-L32)
data structure consists of the following components:

```mermaid
flowchart TD
  A([timestamps])
  A --> A1([cliff])
  A --> A2([end])
  A --> A3([start])
```

## Deposit Token Flow

At stream creation, the deposit token is transferred from the sender to the stream's token account. Then, as it's being
streamed, it can be withdrawn by the recipient. If the stream is canceled, the unstreamed token amount is refunded to
the sender. The following diagrams illustrate how tokens move between accounts when each instruction is executed.

### `create_with_timestamps_ll` Instruction

At stream creation, the deposit tokens are transferred from the sender's associated token account (ATA) to the stream
data's ATA, where they are stored until withdrawn or refunded.

```mermaid
sequenceDiagram
    actor Sender
    participant Lockup
    participant TokenProgram as Token Program
    participant Accounts as Token Accounts<br/>Sender ATA & StreamData ATA

    Sender->>Lockup: create_with_timestamps_ll()
    Lockup->>TokenProgram: CPI: transfer()
    TokenProgram-->>Accounts: Move tokens<br/>Sender ATA → StreamData ATA
```

### `cancel` Instruction

Only the sender can cancel a stream. When canceled, any remaining/unstreamed tokens are refunded from the stream data's
ATA to the sender's ATA.

```mermaid
sequenceDiagram
    actor Sender
    participant Lockup
    participant TokenProgram as Token Program
    participant Accounts as Token Accounts<br/> StreamData ATA & Sender ATA

    Sender->>Lockup: cancel()
    Lockup->>TokenProgram: CPI: transfer()
    TokenProgram-->>Accounts: Move tokens<br/> StreamData ATA → Sender ATA
```

### `withdraw` Instruction

The recipient can withdraw their available/streamed tokens at any time. The tokens are transferred from the stream
data's ATA to the specified withdrawal recipient's ATA (which may be the recipient themselves or another account,
depending on the authority of the tx signer).

```mermaid
sequenceDiagram
    actor Recipient
    participant Lockup
    participant TokenProgram as Token Program
    participant Accounts as Token Accounts<br/> StreamData ATA & WithdrawalRecipient ATA

    Recipient->>Lockup: withdraw(withdrawal_recipient)
    Lockup->>TokenProgram: CPI: transfer()
    TokenProgram -->> Accounts: Move tokens<br/> StreamData ATA → WithdrawalRecipient ATA
```
