---
id: "statuses"
sidebar_position: 7
title: "Statuses"
---

# Stream Statuses

A Lockup stream can have one of five distinct statuses:

| Status    | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| Pending   | Stream created but not started; assets are in a pending state.    |
| Streaming | Active stream where assets are currently being streamed.          |
| Settled   | All assets have been streamed; recipient is due to withdraw them. |
| Canceled  | Canceled stream; remaining assets await recipient's withdrawal.   |
| Depleted  | Depleted stream; all assets have been withdrawn and/or refunded.  |

## Temperature

A stream status can have one out of two "temperatures":

| Temperature | Statuses                    | Description                                                                                                           |
| :---------- | :-------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| Warm        | Pending, Streaming          | The passage of time <ins>can</ins> change the temperature from warm to cold.                                          |
| Cold        | Settled, Canceled, Depleted | The passage of time alone <ins>cannot</ins> change the temperature from cold to warm. Only a user action can do this. |

## Diagram

The following diagram illustrates the statuses and the allowed transitions between them:

```mermaid
stateDiagram-v2
  direction LR
  state Warm {
    Pending
    Streaming
  }
  state Cold {
    Settled
    Canceled
    Depleted
  }
  Null --> Pending
  Null --> Settled
  Pending --> Streaming
  Pending --> Settled
  Pending --> Canceled
  Streaming --> Settled
  Streaming --> Canceled
  Streaming --> Depleted
  Settled --> Depleted
  Canceled --> Depleted
```

## Q&A

### Q: What is a null stream?

A: An id that does not reference a created stream. Trying to interact with a null stream will result in a revert.

### Q: What to do with a stream status?

A: Knowing the status of a stream can inform your decision making. For example, if a stream is canceled, you know that
you can't cancel it again. Or, if a stream is depleted, you know that you can't withdraw any more assets from it.

### Q: How can a stream enter the `SETTLED` status directly?

A: This is a peculiarity of the [Lockup Dynamic](/concepts/protocol/stream-types#lockup-dynamic) type of stream. Segment
amounts can be zero, and the segment milestones can be set in such a way that all non-zero segments are in the past.
This will cause the stream to enter the `SETTLED` status directly.
