#!/usr/bin bash

# Pre-requisites:
# - foundry (https://getfoundry.sh/)
# - rsync (https://github.com/WayneD/rsync)
# - pnpm (https://pnpm.io)
# - sd (https://github.com/chmln/sd)

# Strict mode: https://gist.github.com/vncsna/64825d5609c146e80de8b1fd623011ca
set -euo pipefail

# Delete the sablierhq/v2-core clone if it exists
if [ -d v2-core ]; then
  rm -rf v2-core
fi

# Define the reference directory
docs=docs/contracts/v2/reference/core

# Delete the current V2 reference
find $docs -type f -name "*.md" -delete

# Clone sablierhq/v2-core and cd into it
git clone git@github.com:sablierhq/v2-core.git
cd v2-core

# Auto-generate the V2 reference with Forge
forge doc

# Go back to the root
cd ../

# Copy over the auto-generated files
rsync --archive \
--exclude "README.md" \
--exclude "SUMMARY.md" \
--exclude "SablierV2NFTDescriptor.sol" \
v2-core/docs/src/src/* \
$docs

# Move all Markdown files one level up
find $docs -type f -name "*.md" -execdir mv {} .. \;

# Delete empty *.sol directories
find $docs -type d -empty -delete

# Update the hyperlinks to use the directory structure of this website
sd "src/abstracts/.*\.sol" $docs/abstracts $(find $docs -type f -name "*.md")
sd "src/interfaces/.*\.sol" $docs/interfaces $(find $docs -type f -name "*.md")
sd "src/.*\.sol" $docs $(find $docs -type f -name "*.md")

# Reorder the contracts in the sidebar
contract=$docs/contract.SablierV2LockupLinear.md
echo "$(echo -en '---\nsidebar_position: 1\n---\n'; cat $contract)" > $contract

contract=$docs/contract.SablierV2LockupPro.md
echo "$(echo -en '---\nsidebar_position: 2\n---\n'; cat $contract)" > $contract

contract=$docs/contract.SablierV2Comptroller.md
echo "$(echo -en '---\nsidebar_position: 3\n---\n'; cat $contract)" > $contract

# Format the Markdown files with Prettier
pnpm prettier --loglevel silent --write $docs

# Delete the sablierhq/v2-core clone
rm -rf v2-core
