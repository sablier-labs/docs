---
id: "diagrams"
sidebar_position: 2
title: "Diagrams"
---

## Storage layout

Each Lockup contract is a singleton that stores all streams created by all users. The following diagrams will give you
an idea of how the storage layout looks like.

:::note

In the diagrams below, we will be showing only a few of the storage variables, you can find the complete list for the
`Lockup Linear` [here](/contracts/v2/reference/core/types/library.LockupLinear#stream), and for the `Lockup Dynamic`
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

In the diagrams below, we use `Core Contract` to refer to either the `LockupLinear` or `LockupDynamic` contract.

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
  subgraph Periphery
    P[Proxy]
    PT[ProxyTarget]
    P2[Permit2]
  end
  CC[Core Contract]

  S -- "execute" --> P
  P -- "create-delegatecall" --> PT
  PT -- "createLogic" --> P
  P -- "permit" --> P2
  P2 -- "transferFrom" --> P
  P -- "create" --> CC
```

### Withdraw from a stream

### Sender withdraws

```mermaid
flowchart LR
  S((Sender))
  R((Recipient))
  P[Proxy]
  PT[ProxyTarget]
  CC[Core Contract]

  S -- "execute" --> P
  P -- "withdraw-delegatecall" --> PT
  PT -- "withdrawLogic" --> P
  P -- "withdraw" --> CC
  CC -- "transfer" --> R
```

### Recipient withdraws

In the diagram below, we've numbered the functions to indicate their sequence. This is due to limitation in the
[Mermaid](https://github.com/mermaid-js/mermaid) library, which we're using to generate these diagrams. The library does
not currently support the custom ordering of lines

```mermaid
flowchart RL
  CC[Core Contract]
  R((Recipient))

  R -- "1-withdraw" --> CC
  CC -- "2-transfer" --> R
```

## Cancel a stream

### Sender cancels

```mermaid
flowchart LR
  S((Sender))
  P[Proxy]
  PT[ProxyTarget]
  CC[Core Contract]

  S -- "execute" --> P
  P -- "cancel-delegatecall" --> PT
  PT -- "cancelLogic" --> P
  P -- "cancel" --> CC
  CC -- "transfer" --> P
  P -- "transfer" --> S
```

### Recipient cancels

When the recipient cancels a stream, the sender is automatically refunded the remaining balance.

If the sender create the stream via a proxy, the proxy plugin will be notified of the cancellation and will auto-forward
the refund to the sender.

```mermaid
flowchart LR
  subgraph Periphery
    P[Sender's Proxy]
    PP[SablierV2ProxyPlugin]
  end
  CC[Core Contract]

  R((Recipient))
  S((Sender))
  R -- "cancel" --> CC
  CC -- "transfer" --> P
  CC -- "onStreamCanceled" --> P
  P -- "fallback-delegatecall" --> PP
  PP -- "pluginLogic" --> P
  P -- "transfer" --> S
```
