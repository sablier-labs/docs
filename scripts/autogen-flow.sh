#!/usr/bin/env bash

# Pre-requisites:
# - foundry (https://getfoundry.sh/)
# - rsync (https://github.com/WayneD/rsync)
# - bun (https://bun.sh)
# - sd (https://github.com/chmln/sd)

# Strict mode: https://gist.github.com/vncsna/64825d5609c146e80de8b1fd623011ca
set -euo pipefail

# ---------------------------------------------------------------------------- #
#                                    Common                                    #
# ---------------------------------------------------------------------------- #

# Define the reference directory
reference=docs/reference/flow/contracts

# Delete the current reference documentations
find $reference -type f -name "*.md" -delete

# cd into the repo
cd repos/flow

# Delete the previously generated docs
rm -rf ./docs

# Auto-generate the Flow reference with Forge
forge doc

# Go back to the root
cd ../../

# Delete the current Flow reference
find $reference -type f -name "*.md" -delete

# Copy over the auto-generated files
rsync --archive \
--exclude "README.md" \
--exclude "SUMMARY.md" \
repos/flow/docs/src/src/* \
$reference

# Move all Markdown files one level up
find $reference -type f -name "*.md" -execdir mv {} .. \;

# Delete empty *.sol directories
find $reference -type d -empty -delete

# Replace the interface references, e.g. {ISablierFlow}, with hyperlinks
sd "\{I(\w+)\}" "[I\$1](/$reference/interfaces/interface.I\$1.md)" $(find $reference -type f -name "*.md")

# Replace the contract references, e.g. {SablierFlow}, with hyperlinks
# Note: abstract contracts won't work
sd "\{Sablier(\w+)\}" "[Sablier\$1](/$reference/contract.Sablier\$1.md)" $(find $reference -type f -name "*.md")

# Update the hyperlinks to use the directory structure of the docs website
# We need the capturing group to avoid replacing the "Git Source" URLs
sd "src/abstracts/\w+\.sol/([\w.]+)" $reference'/abstracts/$1' $(find $reference -type f -name "*.md")
sd "src/interfaces/\w+\.sol/([\w.]+)" $reference'/interfaces/$1' $(find $reference -type f -name "*.md")
sd "src/\w+\.sol/([\w.]+)" $reference/'$1' $(find $reference -type f -name "*.md")

# Reorder the contracts in the sidebar
contract=$reference/contract.SablierFlow.md
echo "$(echo -en '---\nsidebar_position: 1\n---\n'; cat $contract)" > $contract

contract=$reference/contract.FlowNFTDescriptor.md
echo "$(echo -en '---\nsidebar_position: 2\n---\n'; cat $contract)" > $contract

# ---------------------------------------------------------------------------- #
#                                  Final Steps                                 #
# ---------------------------------------------------------------------------- #

# Format the docs with Prettier
bun prettier --log-level silent --write $reference

# Remove the italic asterisks added by `forge doc`: https://github.com/foundry-rs/foundry/issues/4540
sd --string-mode "\*" "" $(find $reference -type f -name "*.md")

# Re-format the docs with Prettier
bun prettier --log-level silent --write $reference
