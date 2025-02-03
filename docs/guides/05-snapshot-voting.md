---
id: "snapshot-voting"
sidebar_position: 5
title: "Snapshot Voting"
---

# Snapshot Voting Strategies

To enable off-chain governance, we created a collection of Snapshot Strategies that calculate the voting power of tokens
stored in Lockup streams.

## Lockup

If you started using Sablier in July 2023 or later, you should be using the Lockup strategies.

- [Snapshot playground](https://snapshot.org/#/playground/sablier-v2) - test the strategies
- [Snapshot code repository](https://github.com/snapshot-labs/snapshot-strategies/tree/master/src/strategies/sablier-v2) -
  see the implementation

The following strategies will read the various amounts that can be found in Lockup streams. The voting power will be
calculated based on some sub-strategies called `policies`.

| Snapshot Playground                                   |
| :---------------------------------------------------- |
| ![Snapshot Playground](/img/snapshot/playground.webp) |

### Example Setup

```json
{
  "address": "0x97cb342cf2f6ecf48c1285fb8668f5a4237bf862",
  "symbol": "DAI",
  "decimals": 18,
  "policy": "withdrawable-recipient" // recommended,
}
```

#### Other parameters

Aside from this example setup, we use Snapshot's base parameters `Network`, `Snapshot` (block), and `Addresses`.

Based on the chosen strategy, the values filled in the `Addresses` field will represent a list (>= 1) of senders or
recipients.

### Policies

#### Primary policies

| Policy                 | Methodology                                                       |
| :--------------------- | :---------------------------------------------------------------- |
| withdrawable-recipient | Tokens that are available for the stream's recipient to withdraw. |
| reserved-recipient     | Tokens available for withdraw aggregated with unstreamed tokens.  |

#### Secondary policies

These policies are designed to address specific edge cases. We strongly recommend using the primary policies.

| Policy               | Methodology                                                                           |
| :------------------- | :------------------------------------------------------------------------------------ |
| deposited-recipient  | Tokens that have been deposited in streams the recipient owned at snapshot time.      |
| deposited-sender     | Tokens that have been deposited in streams started by the sender before the snapshot. |
| streamed-recipient   | Tokens that have been streamed to the recipient until the snapshot.                   |
| unstreamed-recipient | Tokens that have not yet been streamed to the recipient at the time of snapshot.      |

### Example

```text
Lockup Stream #000001
---
Deposited: TKN 1000 for 30 days
Withdrawn: TKN 450 before snapshot
Snapshot: Day 15 (midway) with a streamed amount of TKN 500

+------------------------+----------+
| POLICY                 | POWER    |
+------------------------+----------+
| erc20-balance-of       | TKN 450  |
+------------------------+----------+
| withdrawable-recipient | TKN 50   |
+------------------------+----------+
| reserved-recipient     | TKN 550  |
+------------------------+----------+
| deposited-recipient    | TKN 1000 |
+------------------------+----------+
| deposited-sender       | TKN 1000 |
+------------------------+----------+
| streamed-recipient     | TKN 500  |
+------------------------+----------+
| unstreamed-recipient   | TKN 500  |
+------------------------+----------+
```

### Recommendation

For the best results, we recommend using the primary policies.

1. The best option is to combine the `withdrawable-recipient` policy with `erc20-balance-of`. Doing so will aggregate
   tokens streamed but not withdrawn yet, as well as tokens in the user's wallet.
2. The second best option is to combine `reserved-recipient` with `erc20-balance-of`. They will aggregate (i) tokens
   streamed but not withdrawn yet, (ii) unstreamed funds (which will become available in the future), and (iii) the
   tokens in the user's wallet.

### Details and Caveats

#### `withdrawable-recipient` ⭐️

The withdrawable amount counts tokens that have been streamed but not withdrawn yet by the recipient.

This is provided using the
[`withdrawableAmountOf`](/reference/lockup/contracts/abstracts/abstract.SablierLockupBase#withdrawableamountof) contract
method.

Voting power: realized (present).

#### `reserved-recipient` ⭐️

The reserved amount combines tokens that have been streamed but not withdrawn yet (similar to `withdrawable-recipient`)
with tokens that haven't been streamed (which will become available in the future). Can be computed as
`reserved = withdrawable + unstreamed === deposited - withdrawn`. Canceled streams will only count the final
withdrawable amount, if any.

Voting power: realized (present) + expected (future).

---

#### `deposited-recipient`

Aggregates historical deposits up to the snapshot time, counting only the streams owned by the recipient.

:::caution Caveat

- Streaming, canceling and streaming again will cause tokens to be counted multiple times.

:::

#### `deposited-sender`

Aggregates historical deposits up to the snapshot time, counting only the streams started by the sender.

:::caution Caveats

- Streaming, canceling and streaming again will cause tokens to be counted multiple times.
- Takes into account streams created through [PRBProxy](/reference/lockup/contracts/contract.SablierBatchLockup)
  instances configured through the official [Sablier Interface](https://app.sablier.com/).

:::

#### `streamed-recipient`

Aggregates historical amounts that have already been streamed to the recipient. Crucially, withdrawn tokens are
included.

It relies on the `streamedAmountOf` method in the
[SablierLockupBase](/reference/lockup/contracts/abstracts/abstract.SablierLockupBase#streamedamountof) contract.

:::caution Caveats

- Using this policy alongside `erc20-balance-of` may double count tokens. In the example above, `TNK 500` was streamed,
  but the recipient withdrew `TKN 450`, so the total voting power would be `TKN 950`.
- If funds are recycled (streamed, withdrawn and streamed again) the voting power may be increased artificially.

:::

#### `unstreamed-recipient`

The opposite of `streamed-recipient`, counting amounts that have not been streamed yet (locked, but will become
available in the future). Subtracts the `streamed` amount from the initial `deposit`. For canceled streams, the
unstreamed amount will be `0`.

## Legacy

If you started using Sablier before July 2023, you should be using the Legacy strategies.

- [Snapshot playground](https://snapshot.org/#/playground/sablier-v1-deposit) - test the strategies
- [Snapshot code repository](https://github.com/snapshot-labs/snapshot-strategies/tree/master/src/strategies/sablier-v1-deposit) -
  dive into the implementation

The Legacy strategy regards the stream recipient as the voter. It returns the voting power for any voter as the **sum of
all deposits** made by a sender towards the recipient (the **voter**) for a specific ERC-20 token.

:::caution Caveats

- Similar to the Sablier Lockup [`streamed-recipient`](#streamed-recipient) strategy, the voting power can be increased
  artificially.

:::

### Example Setup

```json
{
  "sender": "0xC9F2D9adfa6C24ce0D5a999F2BA3c6b06E36F75E",
  "token": "0x7f8F6E42C169B294A384F5667c303fd8Eedb3CF3"
}
```
