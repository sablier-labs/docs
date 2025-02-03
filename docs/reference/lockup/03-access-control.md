---
id: "access-control"
sidebar_position: 3
title: "Access Control"
---

With the exception of the [admin functions](/concepts/governance#lockup), all functions in Lockup can only be triggered
by users. The Protocol Admin has no control over any stream or any part of the protocol.

This article will provide a comprehensive overview of the actions that can be performed on streams once they are
created, as well as the corresponding user permissions for each action.

:::note

Every stream has a sender and a recipient. Recipients can approve third parties to take actions on their behalf. An
'public' caller is any address outside of sender and recipient.

:::

## Overview

The table below offers a quick overview of the access control for each action that can be performed on a stream.

| Action                  | Sender | Recipient / Approved third party | Public |
| ----------------------- | :----: | :------------------------------: | :----: |
| Burn NFT                |   ❌   |                ✅                |   ❌   |
| Cancel                  |   ✅   |                ❌                |   ❌   |
| Cancel Multiple         |   ✅   |                ❌                |   ❌   |
| Renounce                |   ✅   |                ❌                |   ❌   |
| Transfer NFT            |   ❌   |                ✅                |   ❌   |
| Withdraw to any address |   ❌   |                ✅                |   ❌   |
| Withdraw to recipient   |   ✅   |                ✅                |   ✅   |
| Withdraw Multiple       |   ✅   |                ✅                |   ✅   |

## Burn NFT

Either the recipient or an approved operator can burn the NFT associated with a stream.

```mermaid
sequenceDiagram
  actor Recipient

  Recipient ->> Lockup: burn()
  Recipient -->> address(0): Transfer stream NFT
```

#### With Operator:

```mermaid
sequenceDiagram
  actor Recipient
  actor Operator

  Recipient ->> Lockup: approve(operator)
  Operator ->> Lockup: burn()
  Recipient -->> address(0): Transfer stream NFT
```

## Cancel

Only the sender can cancel a stream.

```mermaid
sequenceDiagram
  actor Sender

  Sender ->> Lockup: cancel()
  Lockup -->> Sender: Transfer unvested tokens
```

## Cancel Multiple

Only the sender can cancel multiple streams.

```mermaid
sequenceDiagram
  actor Sender

  Sender ->> Lockup: cancelMultiple()
  Lockup -->> Sender: Transfer unvested tokens from multiple streams
```

## Renounce

Only the sender can renounce a stream.

```mermaid
sequenceDiagram
  actor Sender

  Sender ->> Lockup: renounce()
```

## Transfer NFT

Either the recipient or an approved operator can transfer the NFT associated with a stream.

- Only if the stream is transferable.

```mermaid
sequenceDiagram
  actor Recipient

  Recipient ->> Lockup: transfer(toAddress)
  Create actor toAddress
  Recipient -->> toAddress: Transfer NFT
```

#### With Operator:

```mermaid
sequenceDiagram
  actor Recipient
  actor Operator

  Recipient ->> Lockup: approve(operator)
  Operator ->> Lockup: transfer(toAddress)
  Create actor toAddress
  Recipient -->> toAddress: Transfer NFT
```

## Withdraw Multiple

Anybody can withdraw tokens from multiple streams to the recipients of each stream.

```mermaid
sequenceDiagram
  actor Anyone

  Anyone ->> Lockup: withdrawMultiple()
  Create actor getRecipient(1)
  Lockup -->> getRecipient(1): Transfer vested tokens from stream 1
  Create actor getRecipient(2)
  Lockup -->> getRecipient(2): Transfer vested tokens from stream 2
  Create actor getRecipient(3)
  Lockup -->> getRecipient(3): Transfer vested tokens from stream 3
```

## Withdraw to Any Address

The tokens in a stream can be withdrawn to any address only by the recipient or an approved third party.

```mermaid
sequenceDiagram
  actor Recipient

  Recipient ->> Lockup: withdraw(toAddress)
  Create actor toAddress
  Lockup -->> toAddress: Transfer vested tokens
```

#### With Operator:

```mermaid
sequenceDiagram
  actor Recipient
  actor Operator

  Recipient ->> Lockup: approve(operator)
  Operator ->> Lockup: withdraw(toAddress)
  Create actor toAddress
  Lockup -->> toAddress: Transfer vested tokens
```

## Withdraw to Recipient

The tokens in a stream can be withdrawn to the recipient by anyone including the sender, recipient, or an approved third
party.

```mermaid
sequenceDiagram
  actor Anyone

  Anyone ->> Lockup: withdraw(recipient)
  Create actor Recipient
  Lockup -->> Recipient: Transfer vested tokens
```
