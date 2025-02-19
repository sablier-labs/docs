---
id: "queries"
sidebar_position: 4
title: "Queries"
---

Building on top of the [entity structure](/api/lockup/the-graph/structure) defined earlier, here are some common GraphQL
queries for fetching data from the Sablier subgraph.

## Streams (All)

### Recent streams

```graphql title="The 10 most recent streams"
query getStreams {
  streams(first: 10, orderBy: subgraphId, orderDirection: desc) {
    id
    alias
    category
    asset {
      id
      symbol
    }
  }
}
```

### Paginated streams

To query streams in sets/pages (and avoid edge cases where using timestamps may skip simultaneous batched streams), we
can use the unique `subgraphId`.

This query includes pagination.

```graphql title="The next streams indexed before the last seen subgraphId"
query getStreams($first: Int!, $subgraphId: numeric!) {
  streams(first: $first, orderBy: subgraphId, orderDirection: desc, where: { subgraphId_lt: $subgraphId }) {
    id
    alias
    category
    asset {
      id
      symbol
    }
  }
}
```

## Streams (Filtered)

### Streams by sender (with support for the old V2.0)

To support both [proxy senders](/api/lockup/the-graph/structure) (case 3) and
[native senders](/api/lockup/the-graph/structure) (case 2) we query for:

- streams where the connected account is the native sender
- streams where the connected account is the proxender - the owner of the proxy labeled as a sender

This query includes pagination.

```graphql title="The next streams created by an address (natively or through a proxy)"
streams(
  first: $first
  skip: $skip
  orderBy: $subgraphId
  orderDirection: desc
  where: {
    or: [
      { and: [{ sender: $sender }, { subgraphId_lt: $subgraphId }] }
      { and: [{ proxender: $sender }, { subgraphId_lt: $subgraphId }] }
    ]
  }
) {
  id
  alias
  category
}
```

### Streams by sender or recipient

To show all streams that have an address marked as a sender (all cases) or a recipient, extend the example above to
account for the recipient aspect.

This query includes pagination.

```graphql title="The next streams related to an address, as a sender/proxender or recipient"
streams(
  first: $first
  skip: $skip
  orderBy: $subgraphId
  orderDirection: desc
  where: {
    or: [
      { and: [{ sender: $sender }, { subgraphId_lt: $subgraphId }] }
      { and: [{ proxender: $sender }, { subgraphId_lt: $subgraphId }] }
      { and: [{ recipient: $recipient }, { subgraphId_lt: $subgraphId }] }
    ]
  }
) {
    id
    alias
    category
  }
```

### Streams by filters

The official V2 Interfaces will provide a search interface where one may query for a list of streams using the following
filters (the conditions will be combined)

- the sender address
- the recipient address
- a list of stream identifiers

This query includes pagination.

```graphql title="The 'where' clause for a complex paginated search filter"
where: {
  or: [
    {
      and: [
        { sender: $sender }
        { id_in: $streamIds }
        { subgraphId_lt: $subgraphId }
      ]
    }
    {
      and: [
        { proxender: $sender }
        { id_in: $streamIds }
        { subgraphId_lt: $subgraphId }
      ]
    }
    {
      and: [
        { recipient: $recipient }
        { id_in: $streamIds }
        { subgraphId_lt: $subgraphId }
      ]
    }
  ]
}
```

## Streams ( + Airdrop 🪂)

### Streams by campaign

This query yields data about all streams generated by a specific airdrop campaign. It makes use of the fact that
`stream.funder` will be set to the campaign's address (since tokens funding the streams are coming from that contract).

```graphql title="Streams by campaign"
query getStreams_ByCampaignId($campaignId: String!) {
  streams(where: { funder: $campaignId }) {
    ...StreamFragment
  }
}
```

:::tip

To avoid writing the same entity definitions over and over again, check out
[Fragments](https://graphql.org/learn/queries/#fragments).

```graphql

fragment StreamFragment on Stream {
  id
  sender
  recipient
  contract {
    id
    address
  }
}

query getStreams(...){
  streams(...){
    ...StreamFragment
  }
}

```

:::

:::note

Since Sablier uses multiple immutable contract versions and deployments (e.g.
[lockup's variants](/guides/lockup/deployments#versions)), if you're going to perform onchain actions on these streams
(e.g. getting the `streamedAmountOf` for each one) make sure you call those methods on the right contract. For
subgraphs/indexers, we store the source contract under `stream.contract.address`.

:::

## Actions

### Actions by stream

```graphql title="Most recent 100 stream actions such as withdrawals or transfers"
actions(
  first: 100
  orderBy: subgraphId # Action's subgraph id
  orderDirection: desc
  where: { stream: $streamId }
) {
  id
  category
  stream {
    ...StreamFragment
  }
}
```
