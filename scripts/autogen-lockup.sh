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

# Define the reference directories
all=docs/reference/lockup
core=docs/reference/lockup/core
periphery=docs/reference/lockup/periphery

# Delete the current reference documentations
find $core -type f -name "*.md" -delete
find $periphery -type f -name "*.md" -delete

run() {
  # This is either "core" or "periphery"
  repo=$1

  # cd into the repo
  cd repos/lockup/v2-$repo

  # Delete the previously generated docs
  rm -rf ./docs

  # Auto-generate the Lockup reference with Forge
  forge doc

  # Go back to the root
  cd ../../../

  # Define the reference directory
  reference=docs/reference/lockup/$repo

  # Delete the current Lockup reference
  find $reference -type f -name "*.md" -delete

  # Copy over the auto-generated files
  rsync --archive \
  --exclude "README.md" \
  --exclude "SUMMARY.md" \
  repos/lockup/v2-$repo/docs/src/src/* \
  $reference

  # Move all Markdown files one level up
  find $reference -type f -name "*.md" -execdir mv {} .. \;

  # Delete empty *.sol directories
  find $reference -type d -empty -delete

  # The Periphery has certain references to the Core
  sd "\{SablierV2Lockup\}" "[SablierV2Lockup]($core/abstracts/abstract.SablierV2Lockup.md)" $(find $reference -type f -name "*.md")
  sd "\{SablierV2LockupDynamic\}" "[SablierV2LockupDynamic]($core/contract.SablierV2LockupDynamic.md)" $(find $reference -type f -name "*.md")
  sd "\{SablierV2LockupLinear\}" "[SablierV2LockupLinear]($core/contract.SablierV2LockupLinear.md)" $(find $reference -type f -name "*.md")
  sd "\{SablierV2LockupTranched\}" "[SablierV2LockupTranched]($core/contract.SablierV2LockupTranched.md)" $(find $reference -type f -name "*.md")

  # Replace the interface references, e.g. {ISablierV2Lockup}, with hyperlinks
  sd "\{I(\w+)\}" "[I\$1](/$reference/interfaces/interface.I\$1.md)" $(find $reference -type f -name "*.md")

  # Replace the contract references, e.g. {SablierV2LockupLinear}, with hyperlinks
  # Note: abstract contracts won't work
  sd "\{SablierV2(\w+)\}" "[SablierV2\$1](/$reference/contract.SablierV2\$1.md)" $(find $reference -type f -name "*.md")
}

# ---------------------------------------------------------------------------- #
#                                Lockup Core                                   #
# ---------------------------------------------------------------------------- #

# Generate the raw docs with Forge
run "core"

# Update the hyperlinks to use the directory structure of the docs website
# We need the capturing group to avoid replacing the "Git Source" URLs
sd "src/abstracts/\w+\.sol/([\w.]+)" $core'/abstracts/$1' $(find $core -type f -name "*.md")
sd "src/interfaces/\w+\.sol/([\w.]+)" $core'/interfaces/$1' $(find $core -type f -name "*.md")
sd "src/\w+\.sol/([\w.]+)" $core/'$1' $(find $core -type f -name "*.md")

# Reorder the contracts in the sidebar
contract=$core/contract.SablierV2LockupLinear.md
echo "$(echo -en '---\nsidebar_position: 1\n---\n'; cat $contract)" > $contract

contract=$core/contract.SablierV2LockupDynamic.md
echo "$(echo -en '---\nsidebar_position: 2\n---\n'; cat $contract)" > $contract

contract=$core/contract.SablierV2LockupTranched.md
echo "$(echo -en '---\nsidebar_position: 2\n---\n'; cat $contract)" > $contract

contract=$core/contract.SablierV2NFTDescriptor.md
echo "$(echo -en '---\nsidebar_position: 3\n---\n'; cat $contract)" > $contract

# ---------------------------------------------------------------------------- #
#                             Lockup Periphery                                 #
# ---------------------------------------------------------------------------- #

# Generate the raw docs with Forge
run "periphery"

# Update the hyperlinks to use the directory structure of the docs website
sd "src/abstracts/\w+\.sol/([\w.]+)" $periphery'/abstracts/$1' $(find $periphery -type f -name "*.md")
sd "src/interfaces/\w+\.sol/([\w.]+)" $periphery'/interfaces/$1' $(find $periphery -type f -name "*.md")
sd "src/\w+\.sol/([\w.]+)" $periphery'/$1' $(find $periphery -type f -name "*.md")

# Reorder the contracts in the sidebar
contract=$periphery/contract.SablierV2BatchLockup.md
echo "$(echo -en '---\nsidebar_position: 1\n---\n'; cat $contract)" > $contract

contract=$periphery/contract.SablierV2MerkleLockupFactory.md
echo "$(echo -en '---\nsidebar_position: 2\n---\n'; cat $contract)" > $contract

contract=$periphery/contract.SablierV2MerkleLL.md
echo "$(echo -en '---\nsidebar_position: 3\n---\n'; cat $contract)" > $contract

contract=$periphery/contract.SablierV2MerkleLT.md
echo "$(echo -en '---\nsidebar_position: 3\n---\n'; cat $contract)" > $contract

# ---------------------------------------------------------------------------- #
#                                  Final Steps                                 #
# ---------------------------------------------------------------------------- #

# Format the docs with Prettier
bun prettier --log-level silent --write $all

# Remove the italic asterisks added by `forge doc`: https://github.com/foundry-rs/foundry/issues/4540
sd --string-mode "\*" "" $(find $all -type f -name "*.md")

# Re-format the docs with Prettier
bun prettier --log-level silent --write $all
