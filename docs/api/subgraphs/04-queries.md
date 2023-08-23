---
id: "queries"
sidebar_position: 4
title: "Queries"
---

Building on top of the [entity structure](/api/subgraphs/architecture/02-structure) defined earlier, here are some
common GraphQL queries for fetching data from the Sablier V2 subgraph.

### Recent streams

```graphql title="The 10 most recent streams"
streams(
  first: 10
  orderBy: timestamp
  orderDirection: desc
) {
  id
  alias
  category
}
```

### Paginated streams

To query streams in sets/pages (and avoid edge cases where using timestamps may skip simultaneous batched streams), we
can use the unique `subgraphId`.

This query includes pagination.

```graphql title="The next streams indexed before the last seen subgraphId"
streams(
  first: $first
  skip: $skip
  orderBy: $subgraphId
  orderDirection: desc
  where: { subgraphId_lt: $subgraphId }
) {
  id
  alias
  category
}
```

### Streams by sender

To support both [proxy senders](/api/subgraphs/architecture/structure#the-proxender) (case 3) and
[native senders](/api/subgraphs/architecture/structure#the-proxender) (case 2) we query for:

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
    id
    alias
    category
  }
}
```
