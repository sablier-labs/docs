#!/usr/bin bash

# Pre-requisites:
# - foundry (https://getfoundry.sh/)
# - rsync (https://formulae.brew.sh/formula/rsync)
# - pnpm (https://pnpm.io)

# Strict mode: https://gist.github.com/vncsna/64825d5609c146e80de8b1fd623011ca
set -euxo pipefail

# Delete the current V2 reference Markdown files
rm -rf docs/contracts/v2/reference/**/*.md

# Clone sablierhq/v2-core and cd into it
git clone git@github.com:sablierhq/v2-core.git
cd v2-core

# Auto-generate the V2 reference Markdown files with Forge
forge doc

# Go back to the root
cd ../

# Copy over the auto-generated files
reference_dir=docs/contracts/v2/reference/core
rsync --archive --exclude "README.md" --exclude "SUMMARY.md" v2-core/docs/src/src/* $reference_dir

# Move all Markdown files one level up
find $reference_dir -type f -name "*.md" -execdir mv {} .. \;

# Delete empty *.sol directories
find $reference_dir -type d -empty -delete

# Format the Markdown files with Prettier
pnpm prettier:write $reference_diir

# Update the hyperlinks
grep -lr 'src/interfaces/.*\.sol' docs/contracts/v2/reference/core | xargs sed -i '' 's/src\/interfaces\/.*\.sol/docs\/contracts\/v2\/reference\/core\/interfaces/g'
grep -lr 'src/abstracts/.*\.sol' $reference_dir | xargs sed -i '' 's/src\/abstracts\/.*\.sol/docs\/contracts\/v2\/reference\/core\/abstracts/g'
grep -lr 'src/.*\.sol' $reference_dir | xargs sed -i '' 's/src\/.*\.sol/docs\/contracts\/v2\/reference\/core\/abstracts/g'

# Delete the sablierhq/v2-core clone
rm -rf v2-core
