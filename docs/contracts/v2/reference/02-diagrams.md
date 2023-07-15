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

## Scenarios

A collection of scenarios to help you understand how the Sablier Protocol works from end to end.

:::note

In the diagrams below, [`LockupLinear`](/contracts/v2/reference/core/contract.SablierV2LockupLinear) is used as an
example. However, [`LockupDynamic`](/contracts/v2/reference/core/contract.SablierV2LockupLinear) could be used in its
place and the diagrams would still be valid.

:::

### Set up proxy

This is the first action that the sender needs to take in order to create a stream via the Sablier Interface. It is a
one-time action that deploy a [PRBProxy](https://github.com/PaulRBerg/prb-proxy) contract for senders.

```mermaid
flowchart LR
  S((Sender))
  PR[PRBProxyRegistry]
  P[PRBProxy]
  PP[SablierV2ProxyPlugin]
  S -- "deployAndInstallPlugin" --> PR
  PR -- "deploy" --> P
  PR -- "installPlugin" --> PP
```

### Create a stream

```mermaid
flowchart LR
  S((Sender))
  subgraph Periphery
    P[Proxy]
    PT[ProxyTarget]
    P2[Permit2]
  end
  subgraph Core
    LL[Lockup Linear]
  end

  S -- "execute" --> P
  P -- "delegatecall" --> PT
  PT -- "create logic" --> P
  P -- "permit" --> P2
  P -- "transferFrom" --> P2
  P -- "create" ---> LL
```

### Withdraw from a stream

#### Sender withdraws

```mermaid
flowchart LR
  S((Sender))
  subgraph Periphery
    P[Proxy]
    PT[ProxyTarget]
  end
  subgraph Core
    LL[Lockup Linear]
  end
  R((Recipient))

  S -- "execute" --> P
  P -- "delegatecall" --> PT
  PT -- "withdraw logic" --> P
  P -- "withdraw" --> LL
  LL -- "transfer" ---> R
```

#### Recipient withdraws

```mermaid
flowchart RL
  LL[Lockup Linear]
  R((Recipient))

  R -- "withdraw" --> LL
  LL -- "transfer" --> R
```

### Cancel a stream

#### Sender cancels

```mermaid
flowchart LR
  S((Sender))
  subgraph Periphery
    P[Proxy]
    PT[ProxyTarget]
  end
  subgraph Core
    LL[Lockup Linear]
  end
  PEnd[Proxy]
  SEnd((Sender))

  S -- "execute" --> P
  P -- "delegatecall" --> PT
  PT -- "cancel logic" --> P
  P -- "cancel" --> LL
  LL -- "transfer" --> PEnd
  PEnd -- "transfer" --> SEnd
```

#### Recipient cancels

When the recipient cancels a stream, the sender is automatically refunded the remaining balance.

If the sender create the stream via a proxy, the proxy plugin will be notified of the cancellation and will auto-forward
the refund to the sender.

```mermaid
flowchart LR
  R((Recipient))
  subgraph Core
    LL[Lockup Linear]
  end
  subgraph Periphery
    P[Sender's Proxy]
    PP[SablierV2ProxyPlugin]
  end
  S((Sender))

  R -- "cancel" --> LL
  LL -- "transfer" --> P
  LL -- "onStreamCanceled" --> P
  P -- "delegatecall" --> PP
  PP -- "plugin logic" --> P
  P -- "transfer" ---> S
```
