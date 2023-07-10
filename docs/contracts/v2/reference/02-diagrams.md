---
id: "diagrams"
sidebar_position: 2
title: "Diagrams"
---

A collection of scenarios to help you understand how the Sablier Protocol works from end to end.

:::note

In the diagrams below, LockupLinear is used as an example, but LockupDynamic could be used in its place and the diagrams
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
