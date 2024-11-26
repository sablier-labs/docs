---
id: "queries"
sidebar_position: 4
title: "Queries"
---

Building on top of the [entity structure](/api/flow/the-graph/structure) defined earlier, here are some common GraphQL
queries for fetching data from the Sablier subgraph.

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

### Streams by sender

```graphql title="The next streams created by an address"
streams(
  first: $first
  skip: $skip
  orderBy: $subgraphId
  orderDirection: desc
  where: {
    and: [{ sender: $sender }, { subgraphId_lt: $subgraphId }]
  }
) {
  id
  alias
  category
}
```

### Streams by sender or recipient

To show all streams that have an address marked as a sender or a recipient, extend the example above to account for the
recipient aspect.

This query includes pagination.

```graphql title="The next streams related to an address, as a sender or recipient"
streams(
  first: $first
  skip: $skip
  orderBy: $subgraphId
  orderDirection: desc
  where: {
    or: [
      { and: [{ sender: $sender }, { subgraphId_lt: $subgraphId }] }
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
        { recipient: $recipient }
        { id_in: $streamIds }
        { subgraphId_lt: $subgraphId }
      ]
    }
  ]
}
```

### Actions by stream

:::tip

To avoid writing the same entity definitions over and over again, check out Fragments.

:::

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
