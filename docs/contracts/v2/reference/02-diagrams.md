---
id: "diagrams"
sidebar_position: 2
title: "Diagrams"
---

## Storage layout

Each Lockup contract is a singleton that stores all streams created by all users. The following diagrams will give you
an idea of how the storage layout looks like.

:::note

In the diagrams below, we will show only some of the storage properties. The full list for `LockupLinear` can be found
[here](/contracts/v2/reference/core/types/library.LockupLinear#stream), and for `LockupDynamic`
[here](/contracts/v2/reference/core/types/library.LockupDynamic#stream).

:::

### Lockup Linear

```mermaid
flowchart LR;
  C["LockupLinear\ncontract"];
  S0[(Stream LL-1-1)];
  P0([Start time]);
  P1([End time]);
  P2([Deposit amount]);
  S0 --> P0;
  S0 --> P1;
  S0 --> P2;
  C --> S0;

  S1[(Stream LL-1-2)];
  P3([Start time]);
  P4([Stop time]);
  P5([Deposit amount]);
  S1 --> P3;
  S1 --> P4;
  S1 --> P5;
  C --> S1;
```

### Lockup Dynamic

An example of two streams being stored in the Lockup Dynamic contract.

```mermaid
flowchart LR;
  C["LockupDynamic\ncontract"];
  S0[(Stream LD-1-1)];
  P0([Start time]);
  P1([End time]);
  P2([Deposit amount]);
  P3["Segment 1
  Segment 2
  ...
  Segment n"]

  S0 --> P0;
  S0 --> P1;
  S0 --> P2;
  S0 --> P3;
  C --> S0;

  S1[(Stream LD-1-2)];
  P4([Start time]);
  P5([Stop time]);
  P6([Deposit amount]);
  P7["Segment 1
  Segment 2
  ...
  Segment n"]
  S1 --> P4;
  S1 --> P5;
  S1 --> P6;
  S1 --> P7;
  C --> S1;
```

### Airstream Campaign

An example of a user creating an Airstream campaign.

![](/img/diagram-airstream-campaign.png)

```mermaid
flowchart LR
  S((Airstream Creator))
  subgraph Periphery
    MSF[MerkleStreamFactory]
    MS[(MerkleStream)]
  end
  subgraph Core
    LL[LockupLinear]
  end
  R1((Recipient1))
  R2((Recipient2))
  S -- "createCampaign" --> MSF
  MSF -- "deployCampaign" --> MS
  R1 -- "claim" --> MS
  R2 -- "claim" --> MS
  MS -- "createStream" --> LL
  MS -- "createStream" --> LL
```
