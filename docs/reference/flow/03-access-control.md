---
id: "access-control"
sidebar_position: 3
title: "Access Control"
---

With the exception of the [admin functions](/concepts/governance#flow), all functions in Flow can only be triggered by
users. The Protocol Admin has no control over any stream or any part of the protocol.

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
| AdjustRatePerSecond     |   ✅   |                ❌                |   ❌   |
| Deposit                 |   ✅   |                ✅                |   ✅   |
| Pause                   |   ✅   |                ❌                |   ❌   |
| Refund                  |   ✅   |                ❌                |   ❌   |
| Restart                 |   ✅   |                ❌                |   ❌   |
| Transfer NFT            |   ❌   |                ✅                |   ❌   |
| Withdraw to any address |   ❌   |                ✅                |   ❌   |
| Withdraw to recipient   |   ✅   |                ✅                |   ✅   |
| Void                    |   ✅   |                ✅                |   ❌   |

## Adjust rate per second

Only the sender can adjust the rate per second of a stream.

```mermaid
sequenceDiagram
  actor Sender

  Sender ->> Flow: adjustRatePerSecond()
  Flow -->> Flow: update rps
```

## Create stream

```mermaid
sequenceDiagram
  actor Sender

  Sender ->> Flow: create()
  Create actor Recipient
  Flow -->> Recipient: mint NFT
```

## Deposit into a stream

Anyone can deposit into a stream.

```mermaid
sequenceDiagram
  actor Anyone

  Anyone ->> ERC20: approve()
  Anyone ->> Flow: deposit()
  Flow ->> ERC20: transferFrom()
  Anyone -->> Flow: Transfer tokens
```

## Pause

Only the sender can pause a stream.

```mermaid
sequenceDiagram
  actor Sender

  Sender ->> Flow: pause()
  Flow -->> Flow: set rps = 0
```

## Refund from a stream

Only the sender can refund from a stream.

```mermaid
sequenceDiagram
  actor Sender

  Sender ->> Flow: refund()
  Flow ->> ERC20: transfer()
  Flow -->> Sender: Transfer unstreamed tokens
```

## Restarting a stream

Only the sender can restart a stream.

```mermaid
sequenceDiagram
  actor Sender

  Sender ->> Flow: restart()
  Flow -->> Flow: set rps > 0
```

## Voiding a stream

Both Sender and Recipient can void a stream.

```mermaid
  sequenceDiagram
    actor Sender

    Sender ->> Flow: void()
    activate Flow
    Flow -->> Flow: set rps = 0,
    Flow -->> Flow: set st = now & sd = cd
    deactivate Flow

    actor Recipient
    Recipient ->> Flow: void()
    activate Flow
    Flow -->> Flow: set rps = 0
    Flow -->> Flow: set st = now & sd = cd
    deactivate Flow
```

## Withdraw from a stream

Anyone can call withdraw on a stream as long as `to` address matches the recipient. If recipient/operator is calling
withdraw on a stream, they can choose to withdraw to any address.

```mermaid
sequenceDiagram
  actor Anyone

  Anyone ->> Flow: withdraw()
  activate Flow
  Flow ->> ERC20: transfer()
  Create actor Recipient
  Flow -->> Recipient: Transfer tokens
  deactivate Flow

  Recipient ->> Flow: withdraw()
  activate Flow
  Flow ->> ERC20: transfer()
  Create actor Any Address
  Flow -->> Any Address : Transfer tokens
  deactivate Flow
```
