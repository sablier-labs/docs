---
id: "diagrams"
sidebar_position: 1
title: "Diagrams"
---

## Airstream Campaigns

In an airstream campaign, there is a vesting of tokens which is powered by Sablier Lockup protocol. A typical airstream
campaign creation flow looks like the following:

```mermaid
sequenceDiagram
  actor Campaign admin

  Campaign admin ->> FactoryMerkleLL: createMerkleLL()
  FactoryMerkleLL -->> MerkleLL: Deploy a new contract
```

And this is how the claim flow looks like for recipients:

```mermaid
sequenceDiagram
  actor Airdrop recipient

  Airdrop recipient ->> MerkleLL: claim()
  MerkleLL -->> SablierLockup: Create vesting stream
  MerkleLL -->> SablierLockup: Transfer tokens
  SablierLockup -->> Airdrop recipient: Mint Stream NFT
```

If recipient claims after the vesting end date, then no stream is created and the full allocation is transferred
directly to the recipient's wallet.

```mermaid
sequenceDiagram
  actor Airdrop recipient

  Airdrop recipient ->> MerkleLL: claim()
  MerkleLL -->> Airdrop recipient: Transfer tokens
```

## Instant Airdrop Campaigns

In an instant airdrop campaign, there is no vesting and airdropped tokens are claimed directly to the users' wallets. A
typical instant airdrop campaign creation flow looks like the following:

```mermaid
sequenceDiagram
  actor Campaign admin

  Campaign admin ->> FactoryMerkleInstant: createMerkleInstant()
  FactoryMerkleInstant -->> MerkleInstant: Deploy a new contract
```

And this is how the claim flow looks like for recipients:

```mermaid
sequenceDiagram
  actor Airdrop recipient

  Airdrop recipient ->> MerkleInstant: claim()
  MerkleInstant -->> Airdrop recipient: Transfer tokens
```

## Variable Claim Airdrop Campaigns

In a variable claim airdrop campaign, there is a vesting of tokens similar to Airstream campaigns, however, user only
receives an amount of token depending on the time elapsed since the start of the campaign. The forfeited amount of
tokens is returned back the project.

```mermaid
sequenceDiagram
  actor Campaign admin

  Campaign admin ->> FactoryMerkleVCA: createMerkleVCA()
  FactoryMerkleVCA -->> MerkleVCA: Deploy a new contract
```

And this is how a typical claim flow looks like for recipients: Transfer

```mermaid
sequenceDiagram
  actor Airdrop recipient

  Airdrop recipient ->> MerkleVCA: claim()
  MerkleVCA -->> Airdrop recipient: Transfer vested tokens
  MerkleVCA -->> MerkleVCA:  unvested tokens are kept for Campaign admin
```

## Clawback

For campaign admins, we offer `clawback` functionality which can be used to retrieve unclaimed funds after expiration.
In case of variable claim campaign, `clawback` can be used to retrieve forfeited tokens.

There is also a grace period that ends 7 days after the first claim is made. During the grace period, admin can
`clawback` to return funds from the campaign contract. This is useful in case there had been an accidental transfer of
funds.

```mermaid
sequenceDiagram
  actor Campaign admin

  Campaign admin ->> Merkle Campaign: clawback()
  Merkle Campaign -->> Campaign admin: Transfer unclaimed/forfeited tokens
```
