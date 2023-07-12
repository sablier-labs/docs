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

## Lockup Linear

An example of two streams being stored in the Lockup Linear contract.

```mermaid
flowchart LR;
		classDef object stroke:#ff9C00,color:#ffffff;
    contract["Lockup Linear
		contract"];
		stream_1[(Stream LL-1-1)];
		property_1([Start time]);
		property_2([End time]);
		property_3([Deposit amount]);
		stream_1 --> property_1;
		stream_1 --> property_2;
		stream_1 --> property_3;
		contract --> stream_1;

		stream_2[(Stream LL-1-2)];
		property_4([Start time]);
		property_5([Stop time]);
		property_6([Deposit amount]);
		stream_2 --> property_4;
		stream_2 --> property_5;
		stream_2 --> property_6;
		contract --> stream_2;
		class contract,stream_1,stream_2,property_1,property_2,property_3,property_4,property_5,property_6 object;
```

## Lockup Dynamic

An example of two streams being stored in the Lockup Dynamic contract.

```mermaid
flowchart LR;
		classDef object stroke:#ff9C00,color:#ffffff;
    contract["Lockup Dynamic
		contract"];
		stream_1[(Stream LD-1-1)];
		property_1([Start time]);
		property_2([End time]);
		property_3([Deposit amount]);
		property_4["segment 1
		segment 2
		segment 3
		segment 4
		...
		segment n"]
		stream_1 --> property_1;
		stream_1 --> property_2;
		stream_1 --> property_3;
		stream_1 --> property_4;
		contract --> stream_1;

		stream_2[(Stream LD-1-2)];
		property_5([Start time]);
		property_6([Stop time]);
		property_7([Deposit amount]);
		property_8["segment 1
		segment 2
		segment 3
		segment 4
		...
		segment n"]
		stream_2 --> property_5;
		stream_2 --> property_6;
		stream_2 --> property_7;
		stream_2 --> property_8;
		contract --> stream_2;

		class contract,stream_1,stream_2,property_1,property_2,property_3,property_4,property_5,property_6,property_7,property_8 object;
```

## Protocol participants

```mermaid
flowchart LR;
		classDef object stroke:#ff9C00,color:#ffffff;
    contract[Sablier V2];
		developers[Developers]
		governance[Protocol Admin]
		users[Stream creators/recipients]

		governance--"governs"-->contract;
		users--"use"-->contract;
		developers--"maintain"-->contract;

		class contract,developers,governance,users object;
```

## Set up proxy

This is the first action that the sender needs to take in order to create a stream via the Sablier Interface. It is a
one-time action that deploy a [PRBProxy](https://github.com/PaulRBerg/prb-proxy) contract for senders.

```mermaid
flowchart LR
	classDef object stroke:#ff9C00,color:#ffffff;
  S((Sender))
  PR[PRBProxyRegistry]
  P[PRBProxy]
  PP[SablierV2ProxyPlugin]
  S -- "deployAndInstallPlugin" --> PR
  PR -- "deploy" --> P
  PR -- "installPlugin" --> PP
	class S,PR,P,PP object;
```

## Create a stream

```mermaid
flowchart LR
	classDef object stroke:#ff9C00,color:#ffffff;
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
	class S,P,PT,P2,LL object;
```

### Withdraw from a stream

### Sender withdraws

```mermaid
flowchart LR
	classDef object stroke:#ff9C00,color:#ffffff;
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
	class E,S,P,PT,LL object;
```

### Recipient withdraws

```mermaid
flowchart LR
	classDef object stroke:#ff9C00,color:#ffffff;
  E[ERC20]
  subgraph Core
    LL[LockupLinear]
  end
  R((Recipient))
  R -- "withdraw" --> LL
  LL -- "transfer(Recipient)" --> E
	class E,R,LL object;
```

## Cancel a stream

### Sender cancels

```mermaid
flowchart LR
	classDef object stroke:#ff9C00,color:#ffffff;
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
	class E,S,P,PT,LL object;
```

### Recipient cancels

When the recipient cancels a stream, the sender is automatically refunded the remaining balance.

If the sender create the stream via a proxy, the proxy plugin will be notified of the cancellation and will auto-forward
the refund to the sender.

```mermaid
flowchart RL
	classDef object stroke:#ff9C00,color:#ffffff;
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
	class R,E,LL,P,PP object;
```
