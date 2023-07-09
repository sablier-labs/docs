---
id: "development"
sidebar_position: 5
title: "Development"
---

import LinkPreview from "@site/src/components/LinkPreview";

# Development

To integrate the Sablier V2 subgraph into your own product, start from the official subgraph repository. We recommend
using:

- [GraphQL Code Generator](https://the-guild.dev/graphql/codegen/docs/getting-started) to create types from your GraphQL
  fragments and queries
- [TanStack Query](tanstack.com/query/) to fetch results from the exposed endpoints.

<LinkPreview
  href="https://github.com/sablier-labs/v2-subgraphs"
  icon="github"
  subtitle="GitHub"
  title="Github - sablier-labs/v2-subgraphs: Sablier V2 Subgraphs"
/>

## Contributing

To contribute to the V2 subgraphs or deploy your own, head over to the GitHub
[`v2-subgraphs`](https://github.com/sablier-labs/v2-subgraphs) repository. Get started by reviewing the `packages/core`
directory.

To bootstrap a subgraph project, run the following commands. These will install all the necessary dependencies and
generate the code for a possible `goerli` deployment.

```bash
cd ./packages/core
yarn install
yarn setup:goerli
```

To deploy a new subgraph (e.g. on Goerli):

1. make sure to create a new item (e.g. using The Graph's hosted network)
2. add its name/endpoint under the `deploy:goerli` script in `package.json`
3. add your own Sablier V2 contract addresses in `./constants/chains/goerli.ts`
4. make sure you're [authenticated](the-graph-auth) in the terminal
5. run `yarn deploy:goerli`

Read more about the way The Graph works in their official [docs](the-graph-docs).

[the-graph-auth]: https://thegraph.com/docs/en/deploying/deploying-a-subgraph-to-hosted/#store-the-access-token
[the-graph-docs]: https://thegraph.com/docs/en/
