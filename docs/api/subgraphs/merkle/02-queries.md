---
id: "queries"
sidebar_position: 2
title: "Queries"
---

Building on top of the [entity structure](/api/subgraphs/merkle/entities) defined earlier, here are some common GraphQL
queries for fetching data from the Sablier V2 subgraph.

### Recent streams

```graphql title="The 10 most recent campaigns"
campaigns(
  first: 10
  orderBy: timestamp
  orderDirection: desc
) {
  id
}
```

### Paginated campaigns

To query campaigns in sets/pages we can use the unique `subgraphId`.

This query includes pagination.

```graphql title="The next campaigns indexed before the last seen subgraphId"
campaigns(
  first: $first
  skip: $skip
  orderBy: subgraphId
  orderDirection: desc
  where: { subgraphId_lt: $subgraphId }
) {
  id
}
```

### Campaigns by admin and asset

To search for campaigns deployed by a certain address (e.g. a DAO or a popular token issuer), we can filter using the
`admin` field. Even more, we can use the token address to restrict the search further.

This query includes pagination.

:::info

This examples is fully configured with a query "name" (and expected variables) as well as a "fragment". The fragment is
a simple GraphQL description of what a certain entity (here the campaign) looks like.

:::

```graphql title="The next campaigns created by an address with a certain asset"
query getAirstreams_ByAsset($first: Int!, $skip: Int!, $asset: String!, $subgraphId: BigInt!, $chainId: BigInt!) {
  campaigns(
    first: $first
    skip: $skip
    orderBy: subgraphId
    orderDirection: desc
    where: { asset: $asset, subgraphId_lt: $subgraphId, chainId: $chainId }
  ) {
    ...CampaignFragment
  }
}

const CampaignFragment = gql(/* GraphQL */ `
  fragment CampaignFragment on Campaign {
    id
    subgraphId
    address
    chainId
    category
    hash
    timestamp
    admin
    lockup
    root
    expires
    expiration
    ipfsCID
    aggregateAmount
    totalRecipients
    clawbackTime
    streamCliff
    streamCliffDuration
    streamTotalDuration
    streamCancelable
    streamTransferable
    claimedAmount
    claimedCount
    version
    asset {
      ...AssetFragment
    }
    factory {
      ...FactoryFragment
    }
  }
`);

```

### Claim actions of a user on a certain campaign

To check if a user has claimed their share from a distribution campaign we can look for a "Claim" action performed by or
on behalf of that user. If the query yields a result, it means the uses has already claimed from the Airstream.

```graphql title="Claim action of a user on a certain campaign"
query getClaim($campaignId: ID!, $user: String!) {
  actions(where: { campaign: $campaignId, category: Claim, claimRecipient: $user }) {
    campaign {
      id
      lockup
    }
    claimStreamId
    claimTokenId
    claimRecipient
    category
  }
}
```
