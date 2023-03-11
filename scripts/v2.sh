#!/usr/bin bash

# Pre-requisities:
# - foundry (https://getfoundry.sh/)
# - rsync (https://formulae.brew.sh/formula/rsync)

# Strict mode: https://gist.github.com/vncsna/64825d5609c146e80de8b1fd623011ca
set -euxo pipefail

# Delete the current V2 reference Markdown files
rm -rf docs/v2/technical-reference/**/*.md

# Clone sablierhq/v2-core and cd into it
git clone git@github.com:sablierhq/v2-core.git
cd v2-core

# Auto-generate the V2 reference Markdown files with Forge
forge doc

# Go back to the root
cd ../

# Copy over the auto-generated files
rsync --archive --exclude "{README,SUMMARY}.md" --recursive \
./v2-core/docs/src/src \
./docs/v2/technical-reference
