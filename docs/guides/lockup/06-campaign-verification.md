---
id: "verify-campaign"
sidebar_position: 6
title: "Campaign Verification"
---

# Campaign Verification on Etherscan

When the airdrop campaign contract is deployed for the first time on a chain, the source code has to be verified to make
it public and viewable on Etherscan. This guide will walk you through the process of verifying the campaign contract on
Etherscan. If you get stuck, you can ask for help on [Discord](https://discord.sablier.com).

As an example, we will use the `SablierV2MerkleLL` contract deployed on Polygon at
[0x8BBe24ceee464e8A136fA19D2D099E2917837776](https://polygonscan.com/address/0x8bbe24ceee464e8a136fa19d2d099e2917837776).

:::tip Good to Know

Since Etherscan automatically verifies the contracts based on the matching source code criterion, this verification is
only required once per chain.

:::

## Step 1: Identify the transaction hash

Find the transaction that created the contract. For our example, this is the
[transaction](https://polygonscan.com/tx/0xac2f5a97a863f8ecc1a3f6a9d906c15a8ea5f1304ddf26183f1b53662ef4ced0).

## Step 2: Identify the function name

On the transaction page, locate the "Click to show more" button, and click it:

<img src="/img/campaign-verification/01.webp" alt="Campaign Verification 01" width="400">

In this case, the function name is `createMerkleLL`. Then, locate and note down the function name.

<img src="/img/campaign-verification/02.webp" alt="Campaign Verification 02" width="800">

## Step 3: Copy the input data

Click on the "View Input As" button, then change the view to "Original", and copy the input data.

<img src="/img/campaign-verification/03.webp" alt="Campaign Verification 03" width="800">

## Step 4: Get the constructor argument

Go to
[SablierMerkleLockupDecoder](https://sepolia.etherscan.io/address/0xa9fb181be1c9e8b294925964294c9aae86c7a5e9#readContract)
and make sure you are on the "Read Contract" section.

1. Click on `decodeMerkleLLArgs` if the function name from step 1 is `createMerkleLL`.
2. Click on `decodeMerkleLTArgs` if the function name from step 1 is `createMerkleLT`.

In this case, since the function name was `createMerkleLL`, we will click on `decodeMerkleLLArgs`. Then, in the
`txData(bytes)` field, paste the input data copied from Step 2.

Click on the "Query" button and copy the output, which is also the constructor argument of the campaign contract.

<img src="/img/campaign-verification/04.webp" alt="Campaign Verification 04" width="800">

## Step 5: Build the contracts

Clone the [sablier-labs/v2-periphery](https://github.com/sablier-labs/v2-periphery) repo, and build the contracts from
the `release` branch. Note that you will need [Foundry](https://getfoundry.sh/) installed for this.

```bash
git clone git@github.com:sablier-labs/v2-periphery.git
git checkout release
bun install --frozen-lockfile
bun run build:optimized
```

## Step 6: Run the verification command

Next, load the following environment variables into the shell.

```bash
export ETHERSCAN_API_KEY= # Your Etherscan API key
export ETHERSCAN_URL= # The Etherscan URL for the chain
export CONSTRUCTOR_ARG= # The constructor argument copied from Step 3
export CONTRACT_TO_VERIFY= # The contract address to verify
```

The `CONTRACT_TO_VERIFY`, in this example, is `0x8bbe24ceee464e8a136fa19d2d099e2917837776`.

If the function name from Step 1 is `createMerkleLL`, run the following command:

```bash
FOUNDRY_PROFILE=optimized \
forge verify-contract --etherscan-api-key $ETHERSCAN_API_KEY --verifier-url $ETHERSCAN_URL \
--constructor-args $CONSTRUCTOR_ARG $CONTRACT_TO_VERIFY \
src/SablierV2MerkleLL.sol:SablierV2MerkleLL --watch
```

If the function name is `createMerkleLT`, run the following command:

```bash
FOUNDRY_PROFILE=optimized \
forge verify-contract --etherscan-api-key $ETHERSCAN_API_KEY --verifier-url $ETHERSCAN_URL \
--constructor-args $CONSTRUCTOR_ARG $CONTRACT_TO_VERIFY \
src/SablierV2MerkleLT.sol:SablierV2MerkleLT --watch
```

The campaign contract should now be verified on Etherscan. Thank you for reading! 💚
