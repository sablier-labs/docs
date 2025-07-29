---
id: "overview"
sidebar_position: 1
title: "Overview"
---

Flow is a debt tracking protocol that tracks tokens owed between two parties, enabling indefinite token streaming. A
Flow stream is characterized by its rate per second (rps). The relationship between the amount owed and time elapsed is
linear and can be defined as:

```math
\text{amount owed} = rps \cdot \text{elapsed time}
```

The Flow protocol can be used in several areas of everyday finance, such as payroll, distributing grants, insurance
premiums, loans interest, token ESOPs etc. If you are looking for vesting and airdrops, please refer to our
[Lockup](../lockup/overview) protocol.

## Features

1. **Flexible deposit:** A stream can be funded with any amount, at any time, by anyone, in full or in parts.
2. **Flexible duration:** A stream can be created with no specific start or end time. It can run indefinitely.
3. **Pause:** A stream can be paused by the sender and can later be restarted without losing track of previously accrued
   debt.
4. **Refund:** Unstreamed amount can be refunded back to the sender at any time.
5. **Void:** Voiding a stream implies it cannot be restarted anymore. Voiding an insolvent stream forfeits the uncovered
   debt. Either party can void a stream at any time.
6. **Withdraw:** it is publicly callable as long as `to` is set to the recipient. However, a stream’s recipient is
   allowed to withdraw funds to any address.

## Key Definitions

The definitions below will help you understand some terms used in Sablier Flow:

## Open-Ended Streams

Open-ended streams on Sablier are token streams without a predefined end date. They continue indefinitely until voided
by the sender.

Key traits:

- No end time: the stream has a start date but no fixed stop.
- Funds are streamed continuously at a fixed rate per second.
- Stream must be topped up periodically to maintain solvency,
  [debt is otherwise accumulated](/concepts/flow/overview#total-debt).
- Useful for ongoing payments like salaries, grants, or subscriptions.

### Stream balance

Stream balance is the token balance of a stream. It increases when funds are deposited into a stream, and decreases when
the sender refunds from it or when a withdrawal happens.

### Total debt

Total debt is the amount of tokens owed to the recipient. This value is further divided into two sub-categories:

- **Covered debt:** The part of the total debt that covered by the stream balance. This is the same as the
  **withdrawable amount**, which is an alias.
- **Uncovered debt:** The part of the total debt that is not covered by the stream balance. This is what the sender owes
  to the stream.

```math
\text{total debt} = \text{covered debt} + \text{uncovered debt}
```

### Snapshot debt and Snapshot time

A snapshot is an event during which snapshot debt and snapshot time of a Flow stream are updated. **Snapshot debt** is
the debt accumulated until the previous snapshot. The UNIX timestamp at which snapshot debt is updated is called
**Snapshot time**.

At snapshot, the following operations are taking place:

```math
\text{snapshot debt} = \text{previous snapshot debt} + \underbrace{
rps \cdot (\text{block.timestamp} - \text{snapshot time})}_\text{ongoing debt}
```

```math
\text{snapshot time} = \text{block.timestamp}
```

### Ongoing debt

Ongoing debt is the debt accumulated since the previous snapshot. It is calculated as the following:

```math
\text{ongoing debt} = rps \cdot (\text{block.timestamp} - \text{snapshot time})
```

Therefore, at any point in time, total debt can also be defined as:

```math
\text{total debt} = \text{snapshot debt} + \text{ongoing debt}
```

## Lifecycle

1. A Flow stream is created with an `rps`, a `sender` and a `recipient` address.
2. During the lifecycle of the stream, all the functions enclosed inside the dotted rectangle (diagram below) can be
   called any number of times. There are some limitations though, such as `restart` can only be called if the stream is
   `paused`.
3. Any party can call `void` to terminate it. Only withdraw and refund are allowed on a voided stream.
