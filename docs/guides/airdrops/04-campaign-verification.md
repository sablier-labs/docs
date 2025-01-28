---
id: "verify-campaign"
sidebar_position: 4
title: "Campaign Verification"
---

# Campaign Verification on Etherscan

When the airdrop campaign contract is deployed for the first time on a chain, the source code has to be verified to make
it public and viewable on Etherscan. This guide will walk you through the process of verifying the campaign contract on
Etherscan. If you get stuck, you can ask for help on [Discord](https://discord.sablier.com).

As an example, we will use the `SablierMerkleLL` contract deployed on Arbitrum Sepolia at
[0x0ef0647b7324238bfa6084b54ad2d4fd58d8e4ef](https://sepolia.arbiscan.io/address/0x0ef0647b7324238bfa6084b54ad2d4fd58d8e4ef).

:::tip Good to Know

Since Etherscan automatically verifies the contracts based on the matching source code criterion, this verification is
only required once per chain.

:::

## Step 1: Identify the transaction hash

Find the transaction that created the contract. For our example, this is the
[transaction](https://sepolia.arbiscan.io//tx/0x6bad05e2963db82cfada58e9ed990651c8efb04b3203037b3cf9c6c4b2d1a232).

## Step 2: Identify the function name

On the transaction page, locate the "Click to show more" button, and click it:

<img src="/img/campaign-verification/01.webp" alt="Campaign Verification 01" width="400">

In this case, the function name is `createMerkleLL`. Then, locate and note down the function name.

<img src="/img/campaign-verification/02.webp" alt="Campaign Verification 02" width="800">

## Step 3: Copy the input data and campaign creator address

Click on the "View Input As" button, then change the view to "Original", and copy the input data.

<img src="/img/campaign-verification/03_1.webp" alt="Campaign Verification 03_1" width="800">

Copy the address of the campaign creator from the "From" field.

<img src="/img/campaign-verification/03_2.webp" alt="Campaign Verification 03_2" width="800">

## Step 4: Get the constructor argument

Go to
[SablierMerkleAirdropDecoder](https://sepolia.etherscan.io/address/0x8a85407d8ec568233c15e843534e219697e3da07#readContract)
and make sure you are on the "Read Contract" section.

1. Click on `decodeMerkleInstantArgs` if the function name from step 1 is
   [`createMerkleInstant`](/reference/airdrops/contracts/interfaces/interface.ISablierMerkleFactory#createmerkleinstant).
1. Click on `decodeMerkleLLArgs` if the function name from step 1 is
   [`createMerkleLL`](/reference/airdrops/contracts/interfaces/interface.ISablierMerkleFactory#createmerklell).
1. Click on `decodeMerkleLTArgs` if the function name from step 1 is
   [`createMerkleLT`](/reference/airdrops/contracts/interfaces/interface.ISablierMerkleFactory#createmerklelt).

In this case, since the function name was `createMerkleLL`, we will click on `decodeMerkleLLArgs`.

- In the `txData (bytes)` field, paste the input data copied from Step 2.
- In the `campaignCreator (address)` field, paste the campaign creator address copied from Step 2.

Click on the "Query" button and copy the output, which is also the constructor argument of the campaign contract.

<img src="/img/campaign-verification/04.webp" alt="Campaign Verification 04" width="800">

## Step 5: Build the contracts

Clone the [sablier-labs/airdrops](https://github.com/sablier-labs/airdrops) repo, and build the contracts from the
`release` branch. Note that you will need [Foundry](https://getfoundry.sh/) installed for this.

```bash
git clone git@github.com:sablier-labs/airdrops.git
git switch release
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

The `CONTRACT_TO_VERIFY`, in this example, is `0x0Ef0647B7324238bFA6084b54aD2d4Fd58d8E4ef`.

If the function name from Step 1 is `createMerkleLL`, run the following command:

```bash
FOUNDRY_PROFILE=optimized \
forge verify-contract --etherscan-api-key $ETHERSCAN_API_KEY --verifier-url $ETHERSCAN_URL \
--constructor-args $CONSTRUCTOR_ARG $CONTRACT_TO_VERIFY \
src/SablierMerkleLL.sol:SablierMerkleLL --watch
```

If the function name is `createMerkleLT`, run the following command:

```bash
FOUNDRY_PROFILE=optimized \
forge verify-contract --etherscan-api-key $ETHERSCAN_API_KEY --verifier-url $ETHERSCAN_URL \
--constructor-args $CONSTRUCTOR_ARG $CONTRACT_TO_VERIFY \
src/SablierMerkleLT.sol:SablierMerkleLT --watch
```

If the function name is `createMerkleInstant`, run the following command:

```bash
FOUNDRY_PROFILE=optimized \
forge verify-contract --etherscan-api-key $ETHERSCAN_API_KEY --verifier-url $ETHERSCAN_URL \
--constructor-args $CONSTRUCTOR_ARG $CONTRACT_TO_VERIFY \
src/SablierMerkleInstant.sol:SablierMerkleInstant --watch
```

The campaign contract should now be verified on Etherscan. Thank you for reading! 💚
