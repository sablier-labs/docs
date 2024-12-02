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

## Token Balance Actions

```mermaid
flowchart LR
    erc_transfers[(ERC20 Transfer Actions)]
    dep([Deposit - add])
    ref([Refund - remove])
    wtd([Withdraw - remove])

    erc_transfers --> dep
    erc_transfers --> ref
    erc_transfers --> wtd
```

$~$

## Debts

### Ongoing Debt

```mermaid
flowchart TD
rca([Ongoing Debt - od])
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

### Uncovered Debt

**Notes:** A non-zero uncovered debt implies:

1. `bal < sd` when the status is `PAUSED`
2. `bal < sd + od` when the status is `STREAMING`

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
    di2{ }:::blue0
    cd([Covered Debt - cd])
    res_0([0 ])
    res_bal([bal])
    res_sd([sd])
    res_sum([td])


    cd --> di0
    di0 -- "bal = 0" --> res_0
    di0 -- "bal > 0" --> di1
    di1 -- "ud > 0" --> res_bal
    di1 -- "ud = 0" --> di2
    di2 -- "paused" --> res_sd
    di2 -- "streaming" --> res_sum
```

### Refundable Amount

```mermaid
    flowchart TD
    ra([Refundable Amount - ra])
    res_ra([bal - cd])
    ra --> res_ra
```