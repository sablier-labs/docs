# See https://github.com/sablier-labs/devkit/blob/main/just/base.just
import "./node_modules/@sablier/devkit/just/base.just"

# ---------------------------------------------------------------------------- #
#                                    RECIPES                                   #
# ---------------------------------------------------------------------------- #

# Show available commands
default:
    @just --list

# Build the documentation site
build: autogen
    bun docusaurus build

# Remove build files
@clean:
    bun docusaurus clear
    bunx del-cli src/autogen/**/*.mdx

# Deploy website to Vercel
deploy:
    bun vercel pull --environment=production --token=$VERCEL_TOKEN --yes
    bun vercel build --prod --token=$VERCEL_TOKEN
    bun vercel deploy --prebuilt --prod --token=$VERCEL_TOKEN

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

# Serve built site
serve:
    bun docusaurus serve

# Setup Husky git hooks
setup:
    bun husky

# Start development server with autogen
start: autogen
    bun docusaurus start

# Run Jest tests
test:
    bun jest
alias t := test

# ---------------------------------------------------------------------------- #
#                               RECIPES: AUTOGEN                               #
# ---------------------------------------------------------------------------- #

# Run all autogen commands with overwrite
[group("autogen")]
autogen:
    just cli autogen --overwrite

# Generate deployment documentation
[group("autogen")]
autogen-deployments:
    just cli deployments --overwrite

# Generate GraphQL schema documentation
[group("autogen")]
@autogen-graphql vendor="all" protocol="all":
    just cli autogen graphql --vendor {{ vendor }} --protocol {{ protocol }}

# Generate indexer documentation
[group("autogen")]
autogen-indexers:
    just cli indexers --overwrite

# Generate reference documentation
[group("autogen")]
autogen-reference:
    bash cli/autogen-reference.sh

# ---------------------------------------------------------------------------- #
#                               RECIPES: HELPERS                               #
# ---------------------------------------------------------------------------- #

# Helper to run CLI commands through the main entry point
[private]
@cli *args:
    bun run cli/index.ts {{ args }}
