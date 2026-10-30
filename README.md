# Sablier Documentation

This website contains all documentation for Sablier, including older protocol releases. It is built using
[Docusaurus](https://docusaurus.io/), a modern static website generator.

## Commands

### Installation

```sh
$ bun install
```

### Local Development

```sh
$ just start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

### Build

```sh
$ just build
```

This command generates static content into the `build` directory, and can be served using any static contents hosting
service.

### Preview Envio GraphQL references

GraphQL references are generated explicitly with `just autogen-graphql <indexer> envio`. To inspect a nonproduction
schema, resolve its public query URL from a local indexers checkout, then pass it only to the generation command:

```sh
indexers_root="$HOME/sablier/backend/indexers"
streams_url="$(just --justfile "$indexers_root/justfile" envio::endpoint streams latest-nonproduction)" &&
  CODEGEN_ENVIO_STREAMS_URL="$streams_url" just autogen-graphql streams envio

airdrops_url="$(just --justfile "$indexers_root/justfile" envio::endpoint airdrops latest-nonproduction)" &&
  CODEGEN_ENVIO_AIRDROPS_URL="$airdrops_url" just autogen-graphql airdrops envio
```

Each override affects only its Envio indexer's schema reference generation. Without an override, generation uses the
existing production endpoint. The Graph generation, normal `just autogen` endpoint tables, and static page behavior are
unchanged. The docs app needs only the resolved query URL. Authenticate through the indexers CLI; do not copy Envio
management credentials into this repository.

Prefer replacing `latest-nonproduction` with a specific prepared commit for repeatable generation; the latest selector
can resolve to a different deployment on the next run. Resolution failures stop generation instead of falling back to
production.

Use a disposable checkout to review preview references locally. These commands overwrite the reference files under
`docs/api/`; do not commit or publish preview-generated references accidentally. Regenerate with production endpoints
before publishing.

### Clear cache

```sh
$ just clean
```

## License

This repo is licensed under GPL 3.0 or later.
