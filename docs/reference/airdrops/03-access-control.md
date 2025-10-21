---
id: "access-control"
sidebar_position: 3
title: "Access Control"
---

With the exception of the [admin functions](/concepts/governance#merklefactory), all functions in Merkle campaign can
only be triggered either by the campaign creator or the airdrop recipients. The Protocol Admin has no control over any
funds in the campaign contract.

This article will provide a comprehensive overview of the actions that can be performed on a campaign contract.

:::note

Every campaign has a creator and a recipient. An "public" caller is any address outside of creator and recipient. Anyone
can call `claim` function on a campaign but the tokens will be transferred to the recipient.

:::

## Overview

The table below offers a quick overview of the access control for each action that can be performed on a campaign.

| Action      | Creator | Recipient | Public |
| ----------- | :-----: | :-------: | :----: |
| Claim       |   ✅    |    ✅     |   ✅   |
| ClaimTo     |   ❌    |    ✅     |   ❌   |
| ClaimViaSig |   ✅    |    ✅     |   ✅   |
| Clawback    |   ✅    |    ❌     |   ❌   |

## Claim

Claiming an airdrop using `claim` function requires four values:

1. Address of the eligible user
1. Amount that the user is eligible for
1. Claim index in the bitmap
1. Merkle proof

Anybody can `claim` function with the correct set of values. The `claim` then automatically transfers amount of tokens
to the eligible user. If the campaign requires token vesting, then the `claim` function will create a Sablier stream on
behalf of the eligible user.

```mermaid
sequenceDiagram
  actor Anyone

  Anyone ->> Campaign: claim(..)
  Create actor Recipient
  Campaign -->> Recipient: Transfer tokens/Create Stream
```

## ClaimTo

Claiming an airdrop using `claimTo` function requires four values:

1. Address to which the tokens should be sent on behalf of the eligible user
1. Amount that the user is eligible for
1. Claim index in the bitmap
1. Merkle proof

Only eligible users can call `claimTo` function with the correct set of values. The `claimTo` then automatically
transfers amount of tokens to the provided address (which could be different from the user address). If the campaign
requires token vesting, then the `claimTo` function will create a Sablier stream on behalf of the eligible user.

```mermaid
sequenceDiagram
  actor Recipient

  Recipient ->> Campaign: claimTo(..)
  Create actor Provided Address
  Campaign -->> Provided Address: Transfer tokens/Create Stream
```

## ClaimViaSig

Claiming an airdrop using `claimViaSig` function requires seven values:

1. Address to which the tokens should be sent on behalf of the eligible user
1. Amount that the user is eligible for
1. Claim index in the bitmap
1. Merkle proof
1. Address of the eligible user
1. EIP-712 or EIP-1271 signature from the eligible user
1. A UNIX timestamp from which above signature should be valid

Anybody can call `claimViaSig` function as long as the EIP-721 (or EIP-1271) signature is valid and signed by the
eligible user. The `claimViaSig` then automatically transfers amount of tokens to the provided address (which could be
different from the user address). If the campaign requires token vesting, then the `claimViaSig` function will create a
Sablier stream on behalf of the eligible user.

```mermaid
sequenceDiagram
  actor Anybody

  Anybody ->> Campaign: claimViaSig(..)
  Create actor Provided Address
  Campaign -->> Provided Address: Transfer tokens/Create Stream
```

## Clawback

Only the campaign creator can clawback funds within grace period.

```mermaid
sequenceDiagram
  actor Campaign Creator

  Campaign Creator ->> Campaign: clawback()
  Campaign -->> Campaign Creator: Transfer unclaimed tokens
```
