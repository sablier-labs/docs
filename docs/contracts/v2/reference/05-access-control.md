---
id: "access-control"
sidebar_position: 5
title: "Access Control"
---

With the exception of the [allow list](/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup#allowtohook), all
functionalities in Sablier can only be triggered by the users. Sablier admin has no control over any stream or any part
of the protocol.

This article will provide a comprehensive overview of the actions that can be performed on streams once they are
created, as well as the corresponding user permissions for each action.

:::note

Every stream has a sender and a recipient. Recipients can approve third parties to take actions on their behalf. An
unknown caller is any address outside of sender and recipient.

:::

## Overview

The table below offers a quick overview of the access control for each action that can be performed on a stream.

| Action                  | Sender | Recipient / Approved third party | Unknown Caller |
| ----------------------- | :----: | :------------------------------: | :------------: |
| Burn NFT                |   ❌   |                ✅                |       ❌       |
| Cancel                  |   ✅   |                ❌                |       ❌       |
| Cancel Multiple         |   ✅   |                ❌                |       ❌       |
| Renounce                |   ✅   |                ❌                |       ❌       |
| Transfer NFT            |   ❌   |                ✅                |       ❌       |
| Withdraw to recipient   |   ✅   |                ✅                |       ✅       |
| Withdraw to any address |   ❌   |                ✅                |       ❌       |
| Withdraw Multiple       |   ✅   |                ✅                |       ✅       |

## Burn NFT

Either the recipient or an approved operator can burn the NFT associated with a stream.

```mermaid
flowchart LR;
    recipient((Recipient));
    operator((Operator));
    nft[(NFT)];

    recipient -- burn -->nft;
    recipient -- approve -->operator;
    operator -- burn -->nft;
```

## Cancel

Only the sender can cancel a stream.

```mermaid
flowchart LR;
    sender((Sender));
    stream[(Stream)];
    sender -- cancel -->stream;
```

## Cancel Multiple

Only the sender can cancel multiple streams.

```mermaid
flowchart LR;
  sender((Sender));
  streams[(Multiple Streams)];

  sender -- cancelMultiple -->streams;
```

## Renounce

Only the sender can renounce a stream.

```mermaid
flowchart LR;
    sender((Sender));
    stream[(Stream)];
    sender -- renounce -->stream;
```

## Transfer NFT

Either the recipient or an approved operator can transfer the NFT associated with a stream.

- Only if the stream is transferable.

```mermaid
flowchart LR;
    recipient((Recipient));
    operator((Operator));
    nft[(NFT)];

    recipient -- transfer -->nft;
    recipient -- approve -->operator;
    operator -- transfer -->nft;
```

## Withdraw to recipient

The assets in a stream can be withdrawn to the recipient by anyone including sender, recipient or an approved third
party.

```mermaid
flowchart LR;
    unknown((Unknown caller));
    recipient((Recipient));
    operator((Operator));
    sender((Sender));
    stream[(Stream)];
    toAddress[Recipient address];

    unknown -- withdraw ----> stream;
    sender -- withdraw --->stream;
    recipient -- withdraw -->stream;
    recipient -- approve -->operator;
    operator -- withdraw -->stream;
    stream -- tokens --> toAddress;
```

## Withdraw to any address

The assets in a stream can be withdrawn to any address only by the recipient and an approved third party.

```mermaid
flowchart LR;
    recipient((Recipient));
    operator((Operator));
    stream[(Stream)];
    toAddress[Any address];

    recipient -- withdraw -->stream;
    recipient -- approve -->operator;
    operator -- withdraw -->stream;
    stream -- tokens --> toAddress;
```

## Withdraw Multiple

Anybody can withdraw assets from multiple streams to the recipients of each stream.

```mermaid
flowchart LR;
    unknown((Unknown caller));
    recipient((Recipient));
    operator((Operator));
    sender((Sender));
    streams[(Stream)];
    toAddress[Recipient address];

    unknown -- withdrawMultiple --> streams;
    sender -- withdrawMultiple --->streams;
    recipient -- withdrawMultiple --->streams
    recipient -- approve -->operator;
    operator -- withdrawMultiple -->streams;
    streams -- tokens --> toAddress;
```
