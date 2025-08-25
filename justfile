# See https://github.com/sablier-labs/devkit/blob/main/just/base.just
import "./node_modules/@sablier/devkit/just/base.just"

# ---------------------------------------------------------------------------- #
#                                    RECIPES                                   #
# ---------------------------------------------------------------------------- #

# Show available commands
default:
    @just --list

# Remove build files
@clean:
    bun docusaurus clear
    bunx del-cli src/autogen/**/*.mdx

# Check code with ESLint
eslint-check:
    bun eslint --cache .
alias ec := eslint-check

# Fix code with ESLint
eslint-write:
    bun eslint --cache --fix .
alias ew := eslint-write

# Run all code checks
full-check: biome-check prettier-check eslint-check tsc-check

# Run all code fixes
full-write: biome-write prettier-write eslint-write

# Run Jest tests
test:
    bun jest
alias t := test

# ---------------------------------------------------------------------------- #
#                                    AUTOGEN                                   #
# ---------------------------------------------------------------------------- #

# Run all autogen commands with overwrite
[group("autogen")]
autogen:
    just cli autogen --overwrite

# Generate deployment documentation
[group("autogen")]
autogen-deployments:
    just cli autogen deployments --overwrite

# Generate GraphQL schema documentation
[group("autogen")]
@autogen-graphql vendor="all" protocol="all":
    just cli autogen graphql \
        --vendor {{ vendor }} \
        --protocol {{ protocol }} \
        --overwrite

# Generate indexer documentation
[group("autogen")]
autogen-indexers:
    just cli autogen indexers --overwrite

# Generate reference documentation
[group("autogen")]
autogen-reference:
    bash cli/autogen-reference.sh

# ---------------------------------------------------------------------------- #
#                                  DOCUSAURUS                                  #
# ---------------------------------------------------------------------------- #

# Build the documentation site
[group("docusaurus")]
build: autogen
    bun docusaurus build

# Deploy website to Vercel
[group("docusaurus")]
deploy:
    bun vercel pull --environment=production --token=$VERCEL_TOKEN --yes
    bun vercel build --prod --token=$VERCEL_TOKEN
    bun vercel deploy --prebuilt --prod --token=$VERCEL_TOKEN

# Serve built site
[group("docusaurus")]
serve:
    bun docusaurus serve

# Start development server with autogen
[group("docusaurus")]
start: autogen
    bun docusaurus start

# ---------------------------------------------------------------------------- #
#                                    PRIVATE                                   #
# ---------------------------------------------------------------------------- #

# Helper to run CLI commands through the main entry point
[private]
@cli *args:
    bun run cli/index.ts {{ args }}
