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

set_sidebar_position() {
  local file=$1
  local position=$2
  echo "$(echo -en '---\nsidebar_position: '$position'\n---\n'; cat $file)" > $file
}

lint() {
  contracts=docs/reference/$1/contracts

  # Cache find result to avoid redundant filesystem scan
  all_md_files=$(find $contracts -type f -name "*.md")

  # Fix malformed code block endings with asterisks (e.g., ```* should be ```)
  # This pattern appears in forge-generated docs and breaks markdown rendering
  sd '```\*' '```' $all_md_files

  # Remove remaining italic asterisks added by `forge doc`: https://github.com/foundry-rs/foundry/issues/4540
  sd --string-mode "\*" "" $all_md_files

  # Format the docs with Prettier
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

  # Cache find result to avoid redundant filesystem scans throughout this function
  all_md_files=$(find $contracts -type f -name "*.md")

  # Replace the interface with hyperlinks
  sd "\{I(\w+)\}" "[I\$1](/$contracts/interfaces/interface.I\$1.md)" $all_md_files

  if [ "$repo" = "airdrops" ]; then
    # Airdrops-specific abstract patterns
    sd "\{Sablier(\w+)Base\}" "[Sablier\${1}Base]($contracts/abstracts/abstract.Sablier\${1}Base.md)" $all_md_files
    sd "\{SablierFactoryMerkle(\w+)\}" "[SablierFactoryMerkle\$1](/$contracts/contract.SablierFactoryMerkle\$1.md)" $all_md_files
    sd "\{SablierMerkleLockup\}" "[SablierMerkleLockup]($contracts/abstracts/abstract.SablierMerkleLockup.md)" $all_md_files

    # The Airdrops has certain references to the Lockup
    sd "\{SablierLockup\}" "[SablierLockup](/reference/lockup/contracts/contract.SablierLockup.md)" $all_md_files

    # Airdrops-only evm-utils abstract
    sd "\bAdminable\b" "[Adminable](/$contracts/abstracts/abstract.Adminable.md)" $all_md_files
  fi

  if [ "$repo" = "lockup" ]; then
    # Lockup-specific abstract patterns
    sd "\{SablierLockup(Dynamic|Linear|Tranched)\}" "[SablierLockup\$1]($contracts/abstracts/abstract.SablierLockup\$1.md)" $all_md_files
    sd "\{SablierLockup(Dynamic|Linear|Tranched)\.(\w+)\}" "[SablierLockup\$1.\$2]($contracts/abstracts/abstract.SablierLockup\$1.md#\$2)" $all_md_files

    # Fix anchor casing for createWith* functions in types/ (Docusaurus lowercases all anchors)
    types_files=$(find $contracts/types -type f -name "*.md")
    sd "(#createWithDurationsLD)" "#createwithdurationsld" $types_files
    sd "(#createWithDurationsLL)" "#createwithdurationsll" $types_files
    sd "(#createWithDurationsLT)" "#createwithdurationslt" $types_files
    sd "(#createWithTimestampsLD)" "#createwithtimestampsld" $types_files
    sd "(#createWithTimestampsLL)" "#createwithtimestampsll" $types_files
    sd "(#createWithTimestampsLT)" "#createwithtimestampslt" $types_files

    # Fix some invalid references in Lockup
    sd "InvalidWithdrawalInWithdrawMultiple.md" "ISablierLockup.md#invalidwithdrawalinwithdrawmultiple" $all_md_files
    sd "/docs/reference/lockup/contracts/interfaces/interface.InvalidStreamInCancelMultiple.md" "/docs/reference/lockup/contracts/interfaces/interface.ISablierLockup.md#invalidstreamincancelmultiple" $all_md_files
    sd "/node_modules/forge-std/src/mocks/MockERC721.sol/contract.MockERC721.md" "https://eips.ethereum.org/EIPS/eip-165" $all_md_files
    sd "/node_modules/@arbitrum/token-bridge-contracts/contracts/tokenbridge/libraries/ERC165.sol/abstract.ERC165.md#supportsinterface" "https://eips.ethereum.org/EIPS/eip-165" $all_md_files
  fi

  if [ "$repo" = "flow" ]; then
    # Flow-specific abstract patterns
    sd "\{SablierFlowState\}" "[SablierFlowState]($contracts/abstracts/abstract.SablierFlowState.md)" $all_md_files
  fi

  # Link to evm-utils abstracts (plain text - copied locally)
  # Comptrollerable: all repos (airdrops, lockup, flow)
  sd "\bComptrollerable\b" "[Comptrollerable](/$contracts/abstracts/abstract.Comptrollerable.md)" $all_md_files

  # Batch and NoDelegateCall: lockup and flow only
  if [ "$repo" = "lockup" ] || [ "$repo" = "flow" ]; then
    sd "\bBatch\b" "[Batch](/$contracts/abstracts/abstract.Batch.md)" $all_md_files
    sd "\bNoDelegateCall\b" "[NoDelegateCall](/$contracts/abstracts/abstract.NoDelegateCall.md)" $all_md_files
  fi

  # Replace the abstract contract references with hyperlinks (global fallback)
  sd "\{Sablier(\w+)State\}" "[Sablier\${1}State]($contracts/abstracts/abstract.Sablier\${1}State.md)" $all_md_files

  # Replace the contract references with hyperlinks
  sd "\{Sablier(\w+)\}" "[Sablier\$1](/$contracts/contract.Sablier\$1.md)" $all_md_files

  # Fix external contract references that don't have docs
  if [ "$repo" = "lockup" ]; then
    sd "\[SablierComptroller\]\(/docs/reference/lockup/contracts/contract\.SablierComptroller\.md\)" "**SablierComptroller**" $all_md_files
  fi

  # Update the hyperlinks to use the directory structure of the docs website
  # We need the capturing group to avoid replacing the "Git Source" URLs
  sd "src/abstracts/\w+\.sol/([\w.]+)" $contracts'/abstracts/$1' $all_md_files
  sd "src/interfaces/\w+\.sol/([\w.]+)" $contracts'/interfaces/$1' $all_md_files
  sd "src/\w+\.sol/([\w.]+)" $contracts/'$1' $all_md_files
}

# ---------------------------------------------------------------------------- #
#                                     Lockup                                   #
# ---------------------------------------------------------------------------- #

# Generate the raw docs with Forge
run "lockup"

# Reorder the contracts in the sidebar
set_sidebar_position $lockup/contract.SablierLockup.md 1
set_sidebar_position $lockup/contract.SablierBatchLockup.md 1
set_sidebar_position $lockup/contract.LockupNFTDescriptor.md 3

lint "lockup"

# ---------------------------------------------------------------------------- #
#                                   Airdrops                                   #
# ---------------------------------------------------------------------------- #

# Generate the raw docs with Forge
run "airdrops"

# Reorder the contracts in the sidebar
set_sidebar_position $airdrops/contract.SablierFactoryMerkleInstant.md 2
set_sidebar_position $airdrops/contract.SablierFactoryMerkleLL.md 2
set_sidebar_position $airdrops/contract.SablierFactoryMerkleLT.md 2
set_sidebar_position $airdrops/contract.SablierFactoryMerkleVCA.md 2
set_sidebar_position $airdrops/contract.SablierMerkleInstant.md 3
set_sidebar_position $airdrops/contract.SablierMerkleLL.md 3
set_sidebar_position $airdrops/contract.SablierMerkleLT.md 3
set_sidebar_position $airdrops/contract.SablierMerkleVCA.md 3

lint "airdrops"

# ---------------------------------------------------------------------------- #
#                                      Flow                                    #
# ---------------------------------------------------------------------------- #

# Generate the raw docs with Forge
run "flow"

# Reorder the contracts in the sidebar
set_sidebar_position $flow/contract.SablierFlow.md 1
set_sidebar_position $flow/contract.FlowNFTDescriptor.md 2

lint "flow"

# ---------------------------------------------------------------------------- #
#                                   EVM Utils                                  #
# ---------------------------------------------------------------------------- #

# Generate the raw docs with Forge for evm-utils (temporarily)
cd repos/evm-utils
rm -rf ./docs
forge doc
cd ../../

# Define evm-utils contracts directory (temporary)
evmutils_temp=repos/evm-utils/docs/src/src

# Copy relevant evm-utils abstracts to each repo
# Airdrops: Adminable, Comptrollerable
cp $evmutils_temp/Adminable.sol/abstract.Adminable.md $airdrops/abstracts/ 2>/dev/null || true
cp $evmutils_temp/Comptrollerable.sol/abstract.Comptrollerable.md $airdrops/abstracts/ 2>/dev/null || true

# Lockup: Batch, Comptrollerable, NoDelegateCall
cp $evmutils_temp/Batch.sol/abstract.Batch.md $lockup/abstracts/ 2>/dev/null || true
cp $evmutils_temp/Comptrollerable.sol/abstract.Comptrollerable.md $lockup/abstracts/ 2>/dev/null || true
cp $evmutils_temp/NoDelegateCall.sol/abstract.NoDelegateCall.md $lockup/abstracts/ 2>/dev/null || true

# Flow: Batch, Comptrollerable, NoDelegateCall
cp $evmutils_temp/Batch.sol/abstract.Batch.md $flow/abstracts/ 2>/dev/null || true
cp $evmutils_temp/Comptrollerable.sol/abstract.Comptrollerable.md $flow/abstracts/ 2>/dev/null || true
cp $evmutils_temp/NoDelegateCall.sol/abstract.NoDelegateCall.md $flow/abstracts/ 2>/dev/null || true

# Fix broken links in copied evm-utils abstracts (remove interface links that don't exist)
sd "\[IAdminable\]\(/src/interfaces/IAdminable\.sol/interface\.IAdminable\.md\)" "IAdminable" $airdrops/abstracts/abstract.Adminable.md
sd "\[IComptrollerable\]\(/src/interfaces/IComptrollerable\.sol/interface\.IComptrollerable\.md\)" "IComptrollerable" $airdrops/abstracts/abstract.Comptrollerable.md $lockup/abstracts/abstract.Comptrollerable.md $flow/abstracts/abstract.Comptrollerable.md
sd "\[IBatch\]\(/src/interfaces/IBatch\.sol/interface\.IBatch\.md\)" "IBatch" $lockup/abstracts/abstract.Batch.md $flow/abstracts/abstract.Batch.md
sd "\[INoDelegateCall\]\(/src/interfaces/INoDelegateCall\.sol/interface\.INoDelegateCall\.md\)" "INoDelegateCall" $lockup/abstracts/abstract.NoDelegateCall.md $flow/abstracts/abstract.NoDelegateCall.md

# Clean up the evm-utils temp docs (we don't need to keep them)
rm -rf repos/evm-utils/docs
