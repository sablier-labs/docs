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

# Define the contracts directories
airdrops=docs/reference/airdrops/contracts
flow=docs/reference/flow/contracts
lockup=docs/reference/lockup/contracts

# Delete the current contracts documentations
find $airdrops -type f -name "*.md" -delete
find $flow -type f -name "*.md" -delete
find $lockup -type f -name "*.md" -delete

lint() {
  contracts=docs/reference/$1/contracts

  # Format the docs with Prettier
  bun prettier --log-level silent --write $contracts

  # Remove the italic asterisks added by `forge doc`: https://github.com/foundry-rs/foundry/issues/4540
  sd --string-mode "\*" "" $(find $contracts -type f -name "*.md")

  # Re-format the docs with Prettier
  bun prettier --log-level silent --write $contracts
}

run() {
  # This is either "airdrops", "flow" or "lockup"
  repo=$1

  # cd into the repo
  cd repos/$repo

  # Delete the previously generated docs
  rm -rf ./docs

  # Auto-generate the reference with Forge
  forge doc

  # Go back to the root
  cd ../../

  # Define the contracts directory
  contracts=docs/reference/$repo/contracts

  # Delete the current contracts references
  find $contracts -type f -name "*.md" -delete

  # Copy over the auto-generated files
  rsync --archive \
  --exclude "README.md" \
  --exclude "SUMMARY.md" \
  repos/$repo/docs/src/src/* \
  $contracts

  # Move all Markdown files one level up
  find $contracts -type f -name "*.md" -execdir mv {} .. \;

  # Delete empty *.sol directories
  find $contracts -type d -empty -delete

  # Replace the interface with hyperlinks
  sd "\{I(\w+)\}" "[I\$1](/$contracts/interfaces/interface.I\$1.md)" $(find $contracts -type f -name "*.md")

  if [ "$repo" = "airdrops" ]; then
    # The Airdrops has certain references to the Lockup
    sd "\{SablierLockup\}" "[SablierLockup](/reference/lockup/contracts/contract.SablierLockup.md)" $(find $airdrops -type f -name "*.md")
  fi

  if [ "$repo" = "lockup" ]; then
    # Fix some invalid references in Lockup
    sd "InvalidWithdrawalInWithdrawMultiple.md" "ISablierLockupBase.md#invalidwithdrawalinwithdrawmultiple" $(find $contracts -type f -name "*.md")
    sd "/node_modules/forge-std/src/mocks/MockERC721.sol/contract.MockERC721.md" "https://eips.ethereum.org/EIPS/eip-165" $(find $contracts -type f -name "*.md")
  fi

  # Replace the contract references with hyperlinks
  # Note: abstract contracts won't work
  sd "\{Sablier(\w+)Base\}" "[Sablier\${1}Base]($contracts/abstracts/abstract.Sablier\${1}Base.md)" $(find $contracts -type f -name "*.md")
  sd "\{Sablier(\w+)\}" "[Sablier\$1](/$contracts/contract.Sablier\$1.md)" $(find $contracts -type f -name "*.md")

  # Update the hyperlinks to use the directory structure of the docs website
  # We need the capturing group to avoid replacing the "Git Source" URLs
  sd "src/abstracts/\w+\.sol/([\w.]+)" $contracts'/abstracts/$1' $(find $contracts -type f -name "*.md")
  sd "src/interfaces/\w+\.sol/([\w.]+)" $contracts'/interfaces/$1' $(find $contracts -type f -name "*.md")
  sd "src/\w+\.sol/([\w.]+)" $contracts/'$1' $(find $contracts -type f -name "*.md")
}

# ---------------------------------------------------------------------------- #
#                                     Lockup                                   #
# ---------------------------------------------------------------------------- #

# Generate the raw docs with Forge
run "lockup"

# Reorder the contracts in the sidebar
contract=$lockup/contract.SablierLockup.md
echo "$(echo -en '---\nsidebar_position: 1\n---\n'; cat $contract)" > $contract

contract=$lockup/contract.SablierBatchLockup.md
echo "$(echo -en '---\nsidebar_position: 1\n---\n'; cat $contract)" > $contract

contract=$lockup/contract.LockupNFTDescriptor.md
echo "$(echo -en '---\nsidebar_position: 3\n---\n'; cat $contract)" > $contract

lint "lockup"

# ---------------------------------------------------------------------------- #
#                                   Airdrops                                   #
# ---------------------------------------------------------------------------- #

# Generate the raw docs with Forge
run "airdrops"

# Reorder the contracts in the sidebar
contract=$airdrops/contract.SablierMerkleFactory.md
echo "$(echo -en '---\nsidebar_position: 2\n---\n'; cat $contract)" > $contract

contract=$airdrops/contract.SablierMerkleInstant.md
echo "$(echo -en '---\nsidebar_position: 3\n---\n'; cat $contract)" > $contract

contract=$airdrops/contract.SablierMerkleLL.md
echo "$(echo -en '---\nsidebar_position: 3\n---\n'; cat $contract)" > $contract

contract=$airdrops/contract.SablierMerkleLT.md
echo "$(echo -en '---\nsidebar_position: 3\n---\n'; cat $contract)" > $contract

lint "airdrops"

# ---------------------------------------------------------------------------- #
#                                      Flow                                    #
# ---------------------------------------------------------------------------- #

# Generate the raw docs with Forge
run "flow"

# Reorder the contracts in the sidebar
contract=$flow/contract.SablierFlow.md
echo "$(echo -en '---\nsidebar_position: 1\n---\n'; cat $contract)" > $contract

contract=$flow/contract.FlowNFTDescriptor.md
echo "$(echo -en '---\nsidebar_position: 2\n---\n'; cat $contract)" > $contract

lint "flow"
