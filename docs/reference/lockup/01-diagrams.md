---
id: "diagrams"
sidebar_position: 1
title: "Diagrams"
---

## Lockup Storage Layout

Each Lockup contract is a singleton that stores all streams created by that contract's users. The following diagrams
provide insight into the storage layout.

### Shared Lockup

To see the list of all common storage variables, [click here](/reference/lockup/core/types/library.Lockup#stream). This
struct is shared across LockupLinear, LockupDynamic, and LockupTranched.

```mermaid
classDiagram
  class slot0 {
    1. sender
    2. startTime
    3. endTime
    4. isCancelable
    5. wasCanceled
  }
  class slot1 {
    1. asset
    2. isDepleted
    3. isStream
    4. isTransferable
  }
  class slot2 {
    1. deposited amount
    2. withdrawn amount
    3. refunded amount
  }
  class `Shared Lockup` {
    stream LL
    stream LD
    stream LT
  }

  `Shared Lockup` --> slot0
  `Shared Lockup` --> slot1
  `Shared Lockup` --> slot2
```

### Lockup Linear

Apart from the shared lockup storage, Lockup Linear requires a
[separate storage](/reference/lockup/core/contract.SablierV2LockupLinear#_cliffs) to store cliff details for each stream
ID.

```mermaid
flowchart LR;
  C["LockupLinear\ncontract"];
  S0[(Stream LL-1-1)];
  P0([Shared Lockup]);
  P1([cliff]);
  S0 --> P0;
  S0 --> P1;
  C --> S0;

  C["LockupLinear\ncontract"];
  S1[(Stream LL-1-2)];
  P2([Shared Lockup]);
  P3([cliff]);
  S1 --> P2;
  S1 --> P3;
  C --> S1;
```

### Lockup Dynamic

Similarly, Lockup Dynamic requires a
[separate storage](/reference/lockup/core/contract.SablierV2LockupDynamic#_segments) to store an array of
[segments](/reference/lockup/core/types/library.LockupDynamic#segment) for each stream ID.

```mermaid
flowchart LR;
  C["LockupDynamic\ncontract"];
  S0[(Stream LD-1-1)];
  P0([Shared Lockup]);
  segments0(segment 1
            segment 2
            ..
            ..
            segment n
            );
  S0 --> P0;
  S0 --> segments0;
  C --> S0;

  C["LockupDynamic\ncontract"];
  S1[(Stream LD-1-2)];
  P2([Shared Lockup]);
  segments1(segment 1
            segment 2
            ..
            ..
            segment n
          );
  S1 --> P2;
  S1 --> segments1;
  C --> S1;
```

### Lockup Tranched

Lockup Tranched requires a [separate storage](/reference/lockup/core/contract.SablierV2LockupTranched#_tranches) to
store an array of [tranches](/reference/lockup/core/types/library.LockupTranched#tranche) for each stream ID.

```mermaid
flowchart LR;
  C["LockupTranched\ncontract"];
  S0[(Stream LT-1-1)];
  P0([Shared Lockup]);
  tranches0(tranche 1
            tranche 2
            ..
            ..
            tranche n
  );
  S0 --> P0;
  S0 --> tranches0;
  C --> S0;

  C["LockupTranched\ncontract"];
  S1[(Stream LT-1-2)];
  P2([Shared Lockup]);
  tranches1(tranche 1
            tranche 2
            ..
            ..
            tranche n
  );
  S1 --> P2;
  S1 --> tranches1;
  C --> S1;
```

## Airstream Campaign

A typical Airstream campaign creation flow looks like the following:

```mermaid
flowchart LR
  MSF[(MerkleLockupFactory Contract)]
  MS[(MerkleLockup Contract)]
  S[Campaign creator] -- "createMerkleLL" --> MSF
  MSF -- "create2" --> MS
```

And this is how the claim flow looks like for recipients:

```mermaid
flowchart LR
  R1[Recipient]
  MS[(MerkleLockup Contract)]
  LL[(LockupLinear Contract)]
  R1 -- "claim" --> MS
  MS -- "createWithDurations" --> LL
  LL -- "Transfer NFT" --> R1
```

For campaign admins, we offer `clawback` functionality which can be used to retrieve unclaimed funds after expiration.
There is also a grace period that ends 7 days after the first claim is made. During the grace period, admin can
`clawback` to return funds from the `MerkleLockup` contract. This is useful in case there had been an accidental
transfer of funds.

```mermaid
flowchart LR
  A[Campaign Admin]
  MS[(MerkleLockup Contract)]
  A -- "clawback" --> MS
  MS -- "unclaimed funds"  --> A
```
