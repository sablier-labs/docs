---
id: "queries"
sidebar_position: 2
title: "Queries"
---

Building on top of the [entity structure](/api/airdrops/the-graph/entities) defined earlier, here are some common
GraphQL queries for fetching data from the Sablier subgraph.

## Campaigns

### Recent campaigns

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
query getCampaigns_ByAsset($first: Int!, $skip: Int!, $asset: String!, $subgraphId: BigInt!, $chainId: BigInt!) {
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

## Actions (e.g. Claim)

### Claim actions of a user on a certain campaign

To check if a user has claimed their share from a distribution campaign we can look for a "Claim" action performed by or
on behalf of that user. If the query yields a result, it means the uses has already claimed from the Airstream.

```graphql title="Claim actions of a user on a certain campaign"
query getClaim_ByUserByCampaign($campaignId: String!, $user: String!) {
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

### Claim actions for campaigns with a certain asset

This query yields all "Claim" actions for a given asset / token. These actions can be sourced from multiple airdrop
campaigns, for all users.

```graphql title="Claim actions for campaigns with a certain token"
query getClaims_ByAsset($asset: String!) {
  actions(where: { campaign_: { asset: $asset, category: "Claim" } }) {
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

## Streams

### Stream identifiers for a campaign's claims (airstream)

This query yields all the IDs of the streams claimed as part of a certain campaign (airstream).

```graphql title="Claim actions for campaigns with a certain token"
query getStreamIds_ByCampaign($campaignId: String!) {
  actions(where: { campaign: $campaignId, category: "Claim" }) {
    claimStreamId
  }
}
```

:::tip

To source more details regarding these streams you can head over to the `Lockup` subgraph and look for streams where the
`stream.funder` is the address of your airdrop campaign.
[Here's an example query](/api/lockup/the-graph/queries/#streams-by-campaign).

:::
