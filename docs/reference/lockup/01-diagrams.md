---
id: "diagrams"
sidebar_position: 1
title: "Diagrams"
---

## Common Storage Layout

Lockup is a singleton contract that stores all streams created by that contract's users. The following diagrams provide
insight into the shared storage layout of each stream. To see the full list of storage variables, check out
[this reference](/reference/lockup/contracts/types/library.Lockup#structs).

```mermaid
flowchart TD;
  L["Lockup contract"];

  S0[(Stream 1)];
  S01([amounts])
  S02([isCancelable])
  S03([isTransferable])
  S04([endTime])
  S05([lockupModel])
  S06([sender])
  S07([startTime])
  S08([token])
  L --> S0;
  S0 --> S01;
  S0 --> S02;
  S0 --> S03;
  S0 --> S04;
  S0 --> S05;
  S0 --> S06;
  S0 --> S07;
  S0 --> S08;
```

Each [amounts storage](/reference/lockup/contracts/types/library.Lockup#amounts) is made of the following components:

```mermaid
flowchart TD;
  S01([amounts])

  A1([deposited])
  A2([withdrawn])
  A3([refunded])
  S01 --> A1;
  S01 --> A2;
  S01 --> A3;
```

:::info

Each stream belongs to one of the three models: Linear, Dynamic and Tranched. Each of these model has its own storage as
outlined below.

:::

## Linear Stream

Apart from the above storage layout, Linear stream requires storing
[unlock amounts](/reference/lockup/contracts/types/library.LockupLinear#unlockamounts) and cliff time.

```mermaid
flowchart TD;
  L[(Linear stream)];

  S0([common storage])
  S1([cliff])
  S2([start amount])
  S3([cliff amount])
  L --> S0;
  L --> S1;
  L --> S2;
  L --> S3;
```

## Dynamic Stream

Similarly, Dynamic stream requires an array of
[segments](/reference/lockup/contracts/types/library.LockupDynamic#segment).

```mermaid
flowchart TD;
  L[(Dynamic stream)];

  S0([common storage])
  S1([segment 1])
  S2([segment 2])
  S3([segment 3])
  L --> S0;
  L --> S1;
  L --> S2;
  L --> S3;
```

Where each segment is made of three components:

```mermaid
flowchart TD;
  S1([segment 1])

  S1 --> A01([amount])
  S1 --> A02([exponent])
  S1 --> A03([timestamp])

  S2([segment 2])

  S2 --> A11([amount])
  S2 --> A12([exponent])
  S2 --> A13([timestamp])
```

## Tranched Stream

A Tranched stream requires an array of [tranches](/reference/lockup/contracts/types/library.LockupTranched#tranche).

```mermaid
flowchart TD;
  L[(Tranched stream)];

  S0([common storage])
  S1([tranche 1])
  S2([tranche 2])
  S3([tranche 3])
  L --> S0;
  L --> S1;
  L --> S2;
  L --> S3;
```

Where each tranche is made of two components:

```mermaid
flowchart TD;
  S1([tranche 1])

  S1 --> A01([amount])
  S1 --> A02([timestamp])

  S2([tranche 2])

  S2 --> A11([amount])
  S2 --> A12([timestamp])
```
