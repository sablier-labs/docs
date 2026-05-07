---
id: "diagrams"
sidebar_position: 1
title: "Diagrams"
---

## Tokens Flow

### Creating a Vault

```mermaid
sequenceDiagram
  actor Anyone

  Anyone ->> SablierBob: createVault()
  Create participant BobVaultShare
  SablierBob ->> BobVaultShare: Deploy share token
```

### Depositing Tokens

```mermaid
sequenceDiagram
  actor Anyone

  Anyone ->> SablierBob: enter()
  SablierBob ->> Oracle: latestRoundData()
  Oracle -->> SablierBob: Sync price
  Anyone -->> SablierBob: Transfer tokens
  SablierBob ->> BobVaultShare: mint()
  BobVaultShare -->> Anyone: Mint shares
```

### Depositing Tokens (with Lido adapter)

```mermaid
sequenceDiagram
  actor Anyone

  Anyone ->> SablierBob: enter()
  SablierBob ->> Oracle: latestRoundData()
  Oracle -->> SablierBob: Sync price
  Anyone -->> LidoAdapter: Transfer WETH
  SablierBob ->> LidoAdapter: stake()
  LidoAdapter ->> WETH: withdraw()
  WETH -->> LidoAdapter: Unwrap WETH into ETH
  LidoAdapter ->> Lido: submit()
  Lido -->> LidoAdapter: Mint stETH
  LidoAdapter ->> wstETH: wrap()
  wstETH -->> LidoAdapter: Wrap stETH into wstETH
  SablierBob ->> BobVaultShare: mint()
  BobVaultShare -->> Anyone: Mint shares
```

### Redeeming Shares

```mermaid
sequenceDiagram
  actor ShareHolder

  ShareHolder ->> SablierBob: redeem()
  SablierBob ->> Oracle: latestRoundData()
  Oracle -->> SablierBob: Sync price
  SablierBob ->> BobVaultShare: burn()
  ShareHolder -->> BobVaultShare: Burn shares
  SablierBob -->> ShareHolder: Transfer tokens
```

### Redeeming Shares (With Lido Adapter)

First user who redeems shares unstakes from Lido adapter.

```mermaid
sequenceDiagram
  actor ShareHolder

  ShareHolder ->> SablierBob: redeem()
  SablierBob ->> Oracle: latestRoundData()
  Oracle -->> SablierBob: Sync price
  SablierBob ->> LidoAdapter: unstakeFullAmount()
  LidoAdapter ->> wstETH: unwrap()
  wstETH -->> LidoAdapter: Unwrap wstETH into stETH
  LidoAdapter ->> Curve: exchange stETH to ETH
  Curve -->> LidoAdapter: Transfer ETH
  LidoAdapter ->> WETH: deposit()
  WETH -->> LidoAdapter: Wrap ETH into WETH
  LidoAdapter -->> SablierBob: Transfer WETH
  SablierBob ->> BobVaultShare: burn()
  ShareHolder -->> BobVaultShare: Burn shares
  SablierBob -->> ShareHolder: Transfer WETH
```

Subsequent users receives WETH directly from the Bob contract.

```mermaid
sequenceDiagram
  actor ShareHolder

  ShareHolder ->> SablierBob: redeem()
  SablierBob ->> BobVaultShare: burn()
  ShareHolder -->> BobVaultShare: Burn shares
  SablierBob -->> ShareHolder: Transfer WETH
```
