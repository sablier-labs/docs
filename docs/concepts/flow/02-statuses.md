---
id: "statuses"
sidebar_position: 2
title: "Statuses"
---

# Stream Statuses

A Flow stream can have one of five distinct statuses:

| Status                | Description                                                                         |
| --------------------- | ----------------------------------------------------------------------------------- |
| `PENDING`             | Stream created but not started.                                                     |
| `STREAMING_SOLVENT`   | Active stream with total debt <ins>not exceeding</ins> stream balance.              |
| `STREAMING_INSOLVENT` | Active stream with total debt <ins>exceeding</ins> stream balance.                  |
| `PAUSED_SOLVENT`      | Paused stream with total debt <ins>not exceeding</ins> stream balance.              |
| `PAUSED_INSOLVENT`    | Paused stream with total debt <ins>exceeding</ins> stream balance.                  |
| `VOIDED`              | Paused stream that can no longer be restarted and has forfeited its uncovered debt. |

## Stream characteristics

A stream can have the following characteristics:

| Characteristic | Statuses                                        | Description                                             |
| :------------- | :---------------------------------------------- | :------------------------------------------------------ |
| Pending        | `PENDING`                                       | Start time in future, and non-zero rps.                 |
| Streaming      | `STREAMING_SOLVENT`, `STREAMING_INSOLVENT`      | Non-zero rps.                                           |
| Paused         | `PAUSED_SOLVENT`, `PAUSED_INSOLVENT`, `VOIDED`  | Zero rps.                                               |
| Solvent        | `STREAMING_SOLVENT`, `PAUSED_SOLVENT`, `VOIDED` | Total debt <ins>not exceeding</ins> the stream balance. |
| Insolvent      | `STREAMING_INSOLVENT`, `PAUSED_INSOLVENT`       | Total debt <ins>exceeding</ins> the stream balance.     |

## State transitions

The following diagram illustrates the statuses and the allowed transitions between them:

```mermaid
flowchart LR
  subgraph PAUSED
    direction RL
    PS(SOLVENT)
    PI(INSOLVENT)
    PI -- "deposit" --> PS
  end

  subgraph STREAMING
    direction LR
    SS(SOLVENT)
    SI(INSOLVENT)
    SI -- "deposit" --> SS
    SS -- "time" --> SI
  end

  PENDING -- "time" --> STREAMING
  STREAMING -- pause --> PAUSED
  STREAMING -- void --> VOIDED
  PAUSED -- restart --> STREAMING
  PAUSED -- void --> VOIDED
  PENDING -- void --> VOIDED

  NULL -- create (rps > 0, startTime > blockTime) --> PENDING
  NULL -- create (rps > 0, startTime <= blockTime) --> STREAMING
  NULL -- create (rps = 0, startTime <= blockTime) --> PAUSED
```

## Functions Statuses Interaction

### NULL stream

```mermaid
flowchart LR
    CR([CREATE]) --> NULL((NULL))
```

### PENDING stream

```mermaid
flowchart TD
  P((PENDING))

  ADJRPS([ADJUST_RPS]) -->  P
  DP([DEPOSIT]) --> P
  RFD([REFUND]) --> P
  VD([VOID]) --> P
```

### STREAMING stream

```mermaid
flowchart TD
    STR((STREAMING))

    ADJRPS([ADJUST_RPS]) -->  STR
    DP([DEPOSIT]) --> STR
    RFD([REFUND]) --> STR
    PS([PAUSE]) --> STR
    VD([VOID]) --> STR
    WTD([WITHDRAW]) --> STR
```

### PAUSED stream

```mermaid
flowchart TD
    PSED((PAUSED))

    DP([DEPOSIT]) --> PSED
    RFD([REFUND]) --> PSED
    RST([RESTART]) --> PSED
    VD([VOID]) --> PSED
    WTD([WITHDRAW]) --> PSED
```

### VOIDED stream

```mermaid
flowchart LR
    VOID((VOIDED))

    RFD([REFUND]) --> VOID
    WTD([WITHDRAW]) --> VOID
```

## Q&A

### Q: What is a null stream?

A: An ID that does not reference a created stream. Trying to interact with a null stream will result in a revert.

### Q: What to do with a stream status?

A: Knowing the status of a stream can inform your decision making. For example, if a stream is `STREAMING_INSOLVENT`,
that means the stream is active but has insufficient balance. As a sender, you should deposit into the stream so that
your recipient can withdraw the streamed amount without any hiccups. And if you don't want to continue the stream, you
can pause it.

### Q: Who can make a stream `VOIDED`?

A: Both sender and recipient can void the stream. This is especially useful when either party wants to stop the stream
immediately. Once a stream is voided, it cannot be restarted. If there is uncovered debt, it will be reset to 0. So to
ensure that your recipient does not lose on any streamed amount, you can deposit into the stream before voiding it.
