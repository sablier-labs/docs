#!/usr/bin/env bash

# Pre-requisites:
# - foundry (https://getfoundry.sh/)
# - rsync (https://github.com/WayneD/rsync)
# - pnpm (https://pnpm.io)
# - sd (https://github.com/chmln/sd)

# Strict mode: https://gist.github.com/vncsna/64825d5609c146e80de8b1fd623011ca
set -euo pipefail

# cd into sablier-labs/v2-core
cd repos/v2-core

# Delete the previously generated docs
rm -rf docs

# Auto-generate the V2 reference with Forge
forge doc

# Go back to the root
cd ../../

# Define the reference directory
docs=docs/contracts/v2/reference/core

# Delete the current V2 reference
find $docs -type f -name "*.md" -delete

# Copy over the auto-generated files
rsync --archive \
--exclude "README.md" \
--exclude "SUMMARY.md" \
--exclude "SablierV2NFTDescriptor.sol" \
repos/v2-core/docs/src/src/* \
$docs

# Move all Markdown files one level up
find $docs -type f -name "*.md" -execdir mv {} .. \;

# Delete empty *.sol directories
find $docs -type d -empty -delete

# Update the hyperlinks to use the directory structure of this website
sd "src/abstracts/\w+\.sol" $docs/abstracts $(find $docs -type f -name "*.md")
sd "src/interfaces/erc3156/\w+\.sol" $docs/interfaces/erc3156 $(find $docs -type f -name "*.md")
sd "src/interfaces/\w+\.sol" $docs/interfaces $(find $docs -type f -name "*.md")
sd "src/\w+\.sol" $docs $(find $docs -type f -name "*.md")

# # Replace the interface references, e.g. {ISablierV2Lockup}, with hyperlinks
sd "\{I(\w+)\}" "[I\$1]($docs/interfaces/interface.I\$1.md)" $(find $docs -type f -name "*.md")

# Replace the contract references, e.g. {SablierV2LockupLinear}, with hyperlinks
# Note: abstract contracts won't work
sd "\{SablierV2(\w+)\}" "[SablierV2\$1]($docs/contract.SablierV2\$1.md)" $(find $docs -type f -name "*.md")

# Format the docs with Prettier
pnpm prettier --loglevel silent --write $docs

# Remove the italic asterisks added by `forge doc`: https://github.com/foundry-rs/foundry/issues/4540
sd --string-mode "\*" "" $(find $docs -type f -name "*.md")

# Re-format the docs with Prettier
pnpm prettier --loglevel silent --write $docs

# Reorder the contracts in the sidebar
contract=$docs/contract.SablierV2LockupLinear.md
echo "$(echo -en '---\nsidebar_position: 1\n---\n'; cat $contract)" > $contract

contract=$docs/contract.SablierV2LockupDynamic.md
echo "$(echo -en '---\nsidebar_position: 2\n---\n'; cat $contract)" > $contract

contract=$docs/contract.SablierV2Comptroller.md
echo "$(echo -en '---\nsidebar_position: 3\n---\n'; cat $contract)" > $contract
