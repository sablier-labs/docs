---
id: "snapshot-voting"
sidebar_position: 8
title: "Snapshot Strategies"
---

# Snapshot Voting Strategies

To enable off-chain governance, we designed a set of Snapshot Strategies which compute voting power for assets used in
Sablier streams.

## Sablier V2

- [Snapshot playground](https://snapshot.org/#/playground/sablier-v2) - test the strategies
- [Snapshot code repository](https://github.com/snapshot-labs/snapshot-strategies/tree/master/src/strategies/sablier-v2) -
  dive into the implementation

In Sablier V2, a stream creator locks up an amount of ERC-20 tokens in a contract that progressively allocates the funds
to the designated recipient. The tokens are released by the second, and the recipient can withdraw them at any time.

The following strategies will read the various amounts that can be found in Sablier V2 streams. The voting power will be
decided based on some sub-strategies called `policies`.

| Snapshot Playground                                  |
| :--------------------------------------------------- |
| ![Snapshot Playground](/img/snapshot/playground.png) |

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

| Policy ⭐️             | Methodology                                                               |
| :--------------------- | :------------------------------------------------------------------------ |
| withdrawable-recipient | Tokens available/withdrawable by the stream's recipient.                  |
| reserved-recipient     | Tokens available/withdrawable aggregated with unstreamed tokens (future). |

#### Secondary policies

These computation methods are here to aid with special use cases. We still recommend using the primary policies to avoid
most caveats.

| Policy               | Methodology                                                                           |
| :------------------- | :------------------------------------------------------------------------------------ |
| deposited-recipient  | Tokens that have been deposited in streams the recipient owned at snapshot time.      |
| deposited-sender     | Tokens that have been deposited in streams started by the sender before the snapshot. |
| streamed-recipient   | Tokens that have been streamed to the recipient until the snapshot.                   |
| unstreamed-recipient | Tokens that have not yet been streamed to the recipient at the time of snapshot.      |

### Example

```text
Sablier V2 Stream #000001
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

1. The first option is to use the `withdrawable-recipient` policy alongside `erc20-balance-of`. Doing so will aggregate
   tokens streamed but not withdrawn yet, as well as tokens in the user's wallet.
2. The second best option is using `reserved-recipient` with `erc20-balance-of`. It will aggregate: tokens streamed but
   not withdrawn yet, unstreamed funds (accessible in the future) and finally, tokens in the user's wallet.

### Details and Caveats

#### `withdrawable-recipient` ⭐️

The withdrawable amount counts tokens that have been streamed but not withdrawn yet by the recipient.

This is provided using the
[`withdrawableAmountOf`](/contracts/v2/reference/core/abstracts/abstract.SablierV2Lockup#withdrawableamountof) contract
method.

Voting power: realized (present).

#### `reserved-recipient` ⭐️

The reserved amount combines tokens that have been streamed but not withdrawn yet (similar to `withdrawable-recipient`)
with tokens that haven't been streamed (still locked yet accessible in the future). It can be computed as
`reserved = withdrawable + unstreamed === deposited - withdrawn`. Canceled streams will only count the final
withdrawable amount, if any.

Voting power: realized (present) + expected (future).

---

#### `deposited-recipient`

It aggregates historical deposits up to the snapshot time, counting only the streams owned by the recipient.

:::caution Caveat

- Streaming, canceling and streaming again will cause tokens to be counted multiple times.

:::

#### `deposited-sender`

It aggregates historical deposits up to the snapshot time, counting only the streams started by the sender.

:::caution Caveats

- Streaming, canceling and streaming again will cause tokens to be counted multiple times.
- It takes into account streams created through [PRBProxy](/contracts/v2/reference/overview#periphery) instances
  configured through the official [Sablier Interface](https://app.sablier.com/).

:::

#### `streamed-recipient`

It aggregates historical amounts that have already been streamed to the recipient. Crucially, it includes already
withdrawn tokens.

It relies on the `streamedAmountOf` methods in the
[LockupLinear](contracts/v2/reference/core/contract.SablierV2LockupLinear#streamedamountof) and
[LockupDynamic](contracts/v2/reference/core/contract.SablierV2LockupDynamic#streamedamountof) contracts.

:::caution Caveats

- Using this policy alongside `erc20-balance-of` may double count tokens. In the example above, `TNK 500` was streamed,
  but the recipient withdrew `TKN 450`, so the total voting power would be `TKN 950`.
- If funds are recycled (streamed, withdrawn and streamed again) the voting power may be increased artificially.

:::

#### `unstreamed-recipient`

The opposite of `streamed-recipient`, counting amounts that have not been streamed yet (locked, but will become
available in the future). It subtracts the `streamed` amount from the initial `deposit`. For canceled streams, the
unstreamed amount will be `0`.

## Sablier V1

- [Snapshot playground](https://snapshot.org/#/playground/sablier-v1-deposit) - test the strategies
- [Snapshot code repository](https://github.com/snapshot-labs/snapshot-strategies/tree/master/src/strategies/sablier-v1-deposit) -
  dive into the implementation

The Sablier V1 strategy will regard the voter as a stream recipient. It returns the voting power for any voter as the
**sum of all deposits** made by a sender towards the recipient (the **voter**) for a specific ERC20 token.

:::caution Caveats

- Similar to the Sablier V2 [`streamed-recipient`](#streamed-recipient) strategy, the voting power can be increased
  artificially.

:::

### Example Setup

```json
{
  "sender": "0xC9F2D9adfa6C24ce0D5a999F2BA3c6b06E36F75E",
  "token": "0x7f8F6E42C169B294A384F5667c303fd8Eedb3CF3"
}
```
