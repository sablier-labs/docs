---
id: "access-control"
sidebar_position: 3
title: "Access Control"
---

With the exception of the [admin functions](/concepts/governance#flow), all functionalities in Flow can only be
triggered by users. The Protocol Admin has no control over any stream or any part of the protocol.

This article will provide a comprehensive overview of the actions that can be performed on streams once they are
created, as well as the corresponding user permissions for each action.

:::note

Every stream has a sender and a recipient. Recipients can approve third parties to take actions on their behalf. An
'unknown' caller is any address outside of sender and recipient.

:::

## Overview

The table below offers a quick overview of the access control for each action that can be performed on a stream.

| Action                  | Sender | Recipient / Approved third party | Unknown Caller |
| ----------------------- | :----: | :------------------------------: | :------------: |
| Deposit                 |   ✅   |                ✅                |       ✅       |
| Pause                   |   ✅   |                ❌                |       ❌       |
| Refund                  |   ✅   |                ❌                |       ❌       |
| Restart                 |   ✅   |                ❌                |       ❌       |
| Transfer NFT            |   ❌   |                ✅                |       ❌       |
| Withdraw to any address |   ❌   |                ✅                |       ❌       |
| Withdraw to recipient   |   ✅   |                ✅                |       ✅       |
| Void                    |   ✅   |                ✅                |       ❌       |
