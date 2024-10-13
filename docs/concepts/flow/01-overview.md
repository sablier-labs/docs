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

Flow protocol can be used in several areas of everyday finance, such as payroll, distributing grants, insurance
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
