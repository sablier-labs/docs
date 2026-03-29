---
id: "access-control"
sidebar_position: 3
title: "Access Control"
---

With the exception of the [admin functions](/concepts/governance#bob), all functions in Bob and Escrow can be triggered
by users. The Comptroller has no control over any vault, order, or deposited tokens.

## Bob

| Action              | Anyone | Share Holder | Comptroller |
| ------------------- | :----: | :----------: | :---------: |
| Create Vault        |   ✅   |      ✅      |     ✅      |
| Enter               |   ✅   |      ✅      |     ✅      |
| Enter with Native   |   ✅   |      ✅      |     ✅      |
| Sync Price          |   ✅   |      ✅      |     ✅      |
| Unstake via Adapter |   ✅   |      ✅      |     ✅      |
| Redeem              |   ❌   |      ✅      |     ❌      |
| Transfer Shares     |   ❌   |      ✅      |     ❌      |
| Set Default Adapter |   ❌   |      ❌      |     ✅      |
| Set Native Token    |   ❌   |      ❌      |     ✅      |

### Create Vault

Anyone can create a vault.

```mermaid
sequenceDiagram
  actor Anyone

  Anyone ->> SablierBob: createVault()
```

### Enter

Anyone can deposit tokens into an active vault.

```mermaid
sequenceDiagram
  actor Anyone

  Anyone ->> SablierBob: enter()
  Anyone -->> SablierBob: Transfer tokens
```

### Sync Price

Anyone can trigger a price sync on any active vault.

```mermaid
sequenceDiagram
  actor Anyone

  Anyone ->> SablierBob: syncPriceFromOracle()
```

### Redeem

Only a share holder can redeem from a settled or expired vault.

```mermaid
sequenceDiagram
  actor ShareHolder

  ShareHolder ->> SablierBob: redeem()
  SablierBob -->> ShareHolder: Transfer tokens
```

## Escrow

For orders with buyer specified:

| Action           | Seller | Buyer | Comptroller |
| ---------------- | :----: | :---: | :---------: |
| Create Order     |   ✅   |  ✅   |     ✅      |
| Fill Order       |   ❌   |  ✅   |     ❌      |
| Cancel Order     |   ✅   |  ❌   |     ❌      |
| Set Trade Fee    |   ❌   |  ❌   |     ✅      |
| Set Native Token |   ❌   |  ❌   |     ✅      |

For orders with no buyer specified:

| Action           | Seller | Buyer | Comptroller |
| ---------------- | :----: | :---: | :---------: |
| Create Order     |   ✅   |  ✅   |     ✅      |
| Fill Order       |   ✅   |  ✅   |     ✅      |
| Cancel Order     |   ✅   |  ❌   |     ❌      |
| Set Trade Fee    |   ❌   |  ❌   |     ✅      |
| Set Native Token |   ❌   |  ❌   |     ✅      |

### Create Order

Anyone can create an escrow order.

```mermaid
sequenceDiagram
  actor Seller

  Seller ->> SablierEscrow: createOrder()
  Seller -->> SablierEscrow: Transfer sell tokens
```

### Fill Order

For orders with buyer specified:

```mermaid
sequenceDiagram
  actor Buyer

  Buyer ->> SablierEscrow: fillOrder()
  Buyer -->> SablierEscrow: Transfer buy tokens
  SablierEscrow -->> Seller: Transfer buy tokens (minus fee)
  SablierEscrow -->> Buyer: Transfer sell tokens (minus fee)
```

For orders with no buyer specified:

```mermaid
sequenceDiagram
  actor Anyone

  Anyone ->> SablierEscrow: fillOrder()
  Anyone -->> SablierEscrow: Transfer buy tokens
  SablierEscrow -->> Seller: Transfer buy tokens (minus fee)
  SablierEscrow -->> Anyone: Transfer sell tokens (minus fee)
```

### Cancel Order

Only the seller can cancel an unfilled order.

```mermaid
sequenceDiagram
  actor Seller

  Seller ->> SablierEscrow: cancelOrder()
  SablierEscrow -->> Seller: Transfer sell tokens
```
