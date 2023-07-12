---
id: "diagrams"
sidebar_position: 2
title: "Diagrams"
---

## Storage layout

Each Lockup contract is a singleton that stores all streams created by all users. The following diagrams will give you
an idea of how the storage layout looks like.

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

In the diagrams below, LockupLinear is used as an example. LockupDynamic could be used in its place and the diagrams
would still be valid.

"ERC20" can be any ERC20-compliant token.

:::

## Set up proxy

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

## Create a stream

```mermaid
flowchart LR
  S((Sender))
  P2[Permit2]
  subgraph Periphery
    P[Proxy]
    PT[ProxyTarget]
  end
  subgraph Core
    LL[LockupLinear]
  end
  S -- "create" --> P
  P -- "execute" --> PT
  PT -- "transferFrom" --> P2
  PT -- "create" --> LL
```

### Withdraw from a stream

### Sender withdraws

```mermaid
flowchart LR
  S((Sender))
  subgraph Periphery
    P[Proxy]
    PT[ProxyTarget]
  end
  subgraph Core
    LL[LockupLinear]
  end
  E[ERC20]
  S -- "withdraw" --> P
  P -- "execute" --> PT
  PT -- "withdraw" --> LL
  LL -- "transfer(Recipient)" --> E
```

### Recipient withdraws

```mermaid
flowchart LR
  E[ERC20]
  subgraph Core
    LL[LockupLinear]
  end
  R((Recipient))
  R -- "withdraw" --> LL
  LL -- "transfer(Recipient)" --> E
```

## Cancel a stream

### Sender cancels

```mermaid
flowchart LR
  S((Sender))
  subgraph Periphery
    P[Proxy]
    PT[ProxyTarget]
  end
  subgraph Core
    LL[LockupLinear]
  end
  E[ERC20]
  S -- "cancel" --> P
  P -- "execute" --> PT
  PT -- "cancel" --> LL
  LL -- "transfer(Sender)" --> E
```

### Recipient cancels

When the recipient cancels a stream, the sender is automatically refunded the remaining balance.

If the sender create the stream via a proxy, the proxy plugin will be notified of the cancellation and will auto-forward
the refund to the sender.

```mermaid
flowchart RL
  subgraph Periphery
    P[Sender's Proxy]
    PP[Sender's ProxyPlugin]
  end
  subgraph Core
    LL[LockupLinear]
  end
  R((Recipient))
  E[ERC20]
  R -- "cancel" --> LL
  LL -- "onStreamCanceled" --> P
  P -- "onStreamCanceled" --> PP
  PP -- "transfer(Sender)" --> E
```
