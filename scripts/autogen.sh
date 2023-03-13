#!/usr/bin bash

# Pre-requisites:
# - foundry (https://getfoundry.sh/)
# - rsync (https://formulae.brew.sh/formula/rsync)
# - pnpm (https://pnpm.io)
# - ripgrep (https://github.com/BurntSushi/ripgrep)
# - sd (https://github.com/chmln/sd)

# Strict mode: https://gist.github.com/vncsna/64825d5609c146e80de8b1fd623011ca
set -euxo pipefail

# Delete the sablierhq/v2-core clone if it exists
if [ -d v2-core ]; then
  rm -rf v2-core
fi

# Define the reference directory
v2_reference=docs/contracts/v2/reference/core

# Delete the current V2 reference
find $v2_reference -type f -name "*.md" -delete

# Clone sablierhq/v2-core and cd into it
git clone git@github.com:sablierhq/v2-core.git
cd v2-core

# Auto-generate the V2 reference with Forge
forge doc

# Go back to the root
cd ../

# Copy over the auto-generated files
rsync --archive --exclude "README.md" --exclude "SUMMARY.md" v2-core/docs/src/src/* $v2_reference

# Move all Markdown files one level up
find $v2_reference -type f -name "*.md" -execdir mv {} .. \;

# Delete empty *.sol directories
find $v2_reference -type d -empty -delete

# Format the Markdown files with Prettier
pnpm prettier --loglevel=silent --write $v2_reference

# Update the hyperlinks to use the directory structure of this repository
rg -l "src/abstracts/.*\.sol" $v2_reference | xargs sd "src/abstracts/.*\.sol" $v2_reference/abstracts
rg -l "src/interfaces/.*\.sol" $v2_reference | xargs sd "src/interfaces/.*\.sol" $v2_reference/interfaces
rg -l "src/.*\.sol" $v2_reference | xargs sd "src/.*\.sol" $v2_reference

# Delete the sablierhq/v2-core clone
rm -rf v2-core
