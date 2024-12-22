---
id: "diagrams"
sidebar_position: 1
title: "Diagrams"
---

## Abbreviations

| Abbreviation | Full name       | Description                                                 |
| ------------ | --------------- | ----------------------------------------------------------- |
| bal          | Stream balance  | Balance of the stream                                       |
| cd           | Covered debt    | Portion of the total debt covered by the stream balance     |
| elt          | Elapsed time    | Time elapsed in seconds since the last snapshot             |
| od           | Ongoing debt    | Debt accumulated since the last snapshot                    |
| now          | Current time    | Same as `block.timestamp`                                   |
| rps          | Rate per second | Rate at which tokens are streamed per second                |
| sd           | Snapshot debt   | Debt accumulated until the last snapshot                    |
| st           | Snapshot time   | Time of the last snapshot                                   |
| td           | Total debt      | Sum of sd and od, also same as sum of cd and ud             |
| ud           | Uncovered debt  | Portion of the total debt not covered by the stream balance |

## Flow Storage Layout

The Flow is a singleton contract that stores all streams created by that contract's users. The following diagrams
provide insight into the storage layout of each stream. To see the full list of storage variables,
[click here](/reference/flow/contracts/types/library.Flow#structs).

```mermaid
flowchart TD;
  F["Flow contract"];

  S0[(Stream 1)];
  b0([bal])
  r0([rps])
  sd0([sd])
  st0([st])
  F --> S0;
  S0 --> b0;
  S0 --> r0;
  S0 --> sd0;
  S0 --> st0;

  S1[(Stream 2)];
  b1([bal])
  r1([rps])
  sd1([sd])
  st1([st])
  F --> S1;
  S1 --> b1;
  S1 --> r1;
  S1 --> sd1;
  S1 --> st1;
```

## Token Flows

The following three functions lead to tokens flow in and out of a stream:

### Deposit

Anyone can deposit into a stream.

```mermaid
sequenceDiagram
  actor Anyone

  Anyone ->> Flow: deposit()
  Anyone -->> Flow: Transfer tokens
```

### Refund

Only sender can refund from the stream that he created.

```mermaid
sequenceDiagram
  actor Sender

  Sender ->> Flow: refund()
  Flow -->> Sender: Transfer unstreamed tokens
```

### Withdraw

Anyone can call withdraw on a stream as long as `to` address matches the recipient. If recipient/operator is calling
withdraw on a stream, they can choose to withdraw to any address.

```mermaid
sequenceDiagram
  actor Anyone

  Anyone ->> Flow: withdraw()
  activate Flow
  Create actor Recipient
  Flow -->> Recipient: Transfer streamed tokens
  deactivate Flow

  Recipient ->> Flow: withdraw()
  activate Flow
  Create actor toAddress
  Flow -->> toAddress: Transfer streamed tokens
  deactivate Flow
```

## Debts

### Covered debt

```mermaid
flowchart TD
    di0{ }:::blue0
    di1{ }:::blue0
    cd([cd])
    res_0([0 ])
    res_bal([bal])
    res_sum([td])


    cd --> di0
    di0 -- "bal = 0" --> res_0
    di0 -- "bal > 0" --> di1
    di1 -- "ud > 0" --> res_bal
    di1 -- "ud = 0" --> res_sum
```

### Ongoing Debt

```mermaid
flowchart TD
rca([od])
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

```mermaid
flowchart TD
    di0{ }:::red1
    sd([ud])
    res_sd(["td - bal"])
    res_zero([0])

    sd --> di0
    di0 -- "bal < td" --> res_sd
    di0 -- "bal >= td" --> res_zero
```

### Total Debt

```mermaid
flowchart TD
rca([td])
di0{ }
res_00([sd ])
res_01(["sd + od"])

rca --> di0
di0 -- "rps == 0" --> res_00
di0 -- "rps > 0" --> res_01
```

## Refundable Amount

```mermaid
    flowchart TD
    ra([Refundable Amount])
    res_ra([bal - cd])
    ra --> res_ra
```
