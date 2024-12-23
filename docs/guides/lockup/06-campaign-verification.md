---
id: "verify-campaign"
sidebar_position: 6
title: "Campaign Verification"
---

# Campaign Verification on Etherscan

If the campaign contract is deployed for the first time on a chain, it requires manual verification to make the contract
code public and viewable on Etherscan.

:::tip

Since Etherscan automatically verifies the contracts based on the matching source code criterion, this verification is
only required once per chain.

:::

In this guide, we will walk you through the process of verifying the campaign contract on Etherscan. We will use the
following `SablierV2MerkleLL` contract, deployed on Polygon,
[0x8BBe....7776](https://polygonscan.com/address/0x8bbe24ceee464e8a136fa19d2d099e2917837776).

## Step 1: Identify the function name

Click the "Creator Transaction Hash" in the **More Info** section.

<img src="/img/campaign-verification/01.webp" alt="Campaign Verification 01" width="400">

It should take you to the
[transaction page](https://polygonscan.com/tx/0xac2f5a97a863f8ecc1a3f6a9d906c15a8ea5f1304ddf26183f1b53662ef4ced0) of the
contract deployment. On the transaction page, "click to show more", and note down the function name.

<img src="/img/campaign-verification/02.webp" alt="Campaign Verification 02" width="800">

In this case, the function name is `createMerkleLL`.

## Step 2: Copy the input data

Click on the "View Input As" button, then change the view to "Original", and copy the input data.

<img src="/img/campaign-verification/03.webp" alt="Campaign Verification 03" width="800">

## Step 3: Get the constructor argument

Go to
[SablierMerkleLockupDecoder](https://sepolia.etherscan.io/address/0xa9fb181be1c9e8b294925964294c9aae86c7a5e9#readContract)
and make sure you are on the "Read Contract" section.

1. Click on `decodeMerkleLLArgs` if the function name from step 1 is `createMerkleLL`.
2. Click on `decodeMerkleLTArgs` if the function name from step 1 is `createMerkleLT`.

In this case, since the function name was `createMerkleLL`, we will click on `decodeMerkleLLArgs`. Then in the
`txData(bytes)` field, paste the input data copied from Step 2.

Click on "Query" button and copy the output, which is also the constructor argument of the campaign contract.

<img src="/img/campaign-verification/04.webp" alt="Campaign Verification 04" width="800">

## Step 4: Build periphery contracts

Clone [v2-periphery](https://github.com/sablier-labs/v2-periphery) repo and build the contracts.

```bash
git clone git@github.com:sablier-labs/v2-periphery.git
git checkout v1.2.0
bun install --frozen-lockfile
bun run build:optimized
```

## Step 5: Run the verification command

Next, load the following environment variables into the shell.

```bash
export ETHERSCAN_API_KEY= # Your Etherscan API key
export ETHERSCAN_URL= # The Etherscan URL for the chain
export CONSTUCTOR_ARG= # The constructor argument copied from Step 3
export CONTRACT_TO_VERIFY= # The contract address to verify
```

The `CONTRACT_TO_VERIFY`, in this example, is
[0x8bbe24ceee464e8a136fa19d2d099e2917837776](https://polygonscan.com/address/0x8bbe24ceee464e8a136fa19d2d099e2917837776).

If the function name from Step 1 is `createMerkleLL`, run the following command into your terminal.

```bash
FOUNDRY_PROFILE=optimized \
forge verify-contract --etherscan-api-key $ETHERSCAN_API_KEY --verifier-url $ETHERSCAN_URL \
--constructor-args $CONSTUCTOR_ARG $CONTRACT_TO_VERIFY \
src/SablierV2MerkleLL.sol:SablierV2MerkleLL --watch
```

If the function name from Step 1 is `createMerkleLT`, run the following command into your terminal.

```bash
FOUNDRY_PROFILE=optimized \
forge verify-contract --etherscan-api-key $ETHERSCAN_API_KEY --verifier-url $ETHERSCAN_URL \
--constructor-args $CONSTUCTOR_ARG $CONTRACT_TO_VERIFY \
src/SablierV2MerkleLT.sol:SablierV2MerkleLT --watch
```

The campaign contract should now be verified on Etherscan. Thank you for reading! 💚
