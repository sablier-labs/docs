---
id: "diagrams"
sidebar_position: 1
title: "Diagrams"
---

## Flow Storage Layout

Each Flow contract is a singleton that stores all streams created by that contract's users. The following diagrams
provide insight into the storage layout. To see the list of all storage variables,
[click here](/reference/flow/contracts/types/library.Flow#structs).

```mermaid
flowchart LR
    storage[(Storage)]
    bal([Balance - bal])
    rps([RatePerSecond - rps])
    sd([SnapshotDebtScaled - sd])
    st([Snapshot Time - st])

    storage --> bal
    storage --> rps
    storage --> sd
    storage --> st
```

## Token Flows

```mermaid
sequenceDiagram
  actor Sender

  Sender ->> Flow: deposit()
  activate Flow
  Sender -->> Flow: Transfer tokens
  deactivate Flow

  Sender ->> Flow: refund()
  activate Flow
  Flow -->> Sender: Transfer tokens
  deactivate Flow

  Sender ->> Flow: withdraw()
  activate Flow
  Create actor Recipient
  Flow -->> Recipient: Transfer tokens
  deactivate Flow
```

## Flow Actors with Actions

```mermaid
sequenceDiagram
  actor Sender

  Sender ->> Flow: create()
  activate Flow
  Create actor Recipient
  Flow -->> Recipient: mint NFT
  deactivate Flow

  Sender ->> Flow: deposit(streamId)
  activate Flow
  Sender -->> Flow: Transfer tokens
  deactivate Flow

  Sender ->> Flow: pause(streamId)
  activate Flow
  Flow -->> Flow: set rps = 0
  deactivate Flow

  Sender ->> Flow: refund(streamId)
  activate Flow
  Flow -->> Sender: Transfer tokens
  deactivate Flow

  Sender ->> Flow: restart(streamId)
  activate Flow
  Flow -->> Flow: set rps > 0
  deactivate Flow

  Sender ->> Flow: void(streamId)
  activate Flow
  Flow -->> Flow: set rps = 0
  Flow -->> Flow: set ud = 0
  deactivate Flow

  Recipient ->> Flow: void(streamId)
  activate Flow
  Flow -->> Flow: set rps = 0
  Flow -->> Flow: set ud = 0
  deactivate Flow

  Sender ->> Flow: withdraw(streamId)
  activate Flow
  Flow -->> Recipient: Transfer tokens
  deactivate Flow

  Recipient ->> Flow: withdraw(streamId)
  activate Flow
  Create actor Any Address
  Flow -->> Any Address : Transfer tokens
  deactivate Flow
```

## Debts

### Ongoing Debt

```mermaid
flowchart TD
rca([Ongoing Debt])
di0{ }
di1{ }
res_00([0 ])
res_01([0 ])
res_rca(["rps &sdot; elt"])

rca --> di0
di0 -- "rps > 0" --> di1
di0 -- "rps == 0" --> res_00
di1 -- "now <= st" --> res_01
di1 -- "now > st" --> res_rca
```

### Total Debt

```mermaid
flowchart TD
rca([Total Debt])
di0{ }
res_00([sd ])
res_01(["sd + od"])

rca --> di0
di0 -- "rps == 0" --> res_00
di0 -- "rps > 0" --> res_01
```

### Uncovered Debt

```mermaid
flowchart TD
    di0{ }:::red1
    sd([Uncovered Debt - ud])
    res_sd(["td - bal"])
    res_zero([0])

    sd --> di0
    di0 -- "bal < td" --> res_sd
    di0 -- "bal >= td" --> res_zero
```

### Covered debt

```mermaid
flowchart TD
    di0{ }:::blue0
    di1{ }:::blue0
    cd([Covered Debt - cd])
    res_0([0 ])
    res_bal([bal])
    res_sum([td])


    cd --> di0
    di0 -- "bal = 0" --> res_0
    di0 -- "bal > 0" --> di1
    di1 -- "ud > 0" --> res_bal
    di1 -- "ud = 0" --> res_sum
```

### Refundable Amount

```mermaid
    flowchart TD
    ra([Refundable Amount - ra])
    res_ra([bal - cd])
    ra --> res_ra
```
