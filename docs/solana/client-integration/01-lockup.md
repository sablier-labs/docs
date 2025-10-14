---
id: "lockup"
title: "Lockup"
---

# Client Integration

In this guide, we will go through the steps to set up a local development environment for building onchain integrations
with Lockup using TypeScript and Anchor's [IDL](https://www.anchor-lang.com/docs/basics/idl). For more examples and
advanced usage, refer to the SolSab repository
[test](https://github.com/sablier-labs/solsab/blob/e1085fe87ea3d02556156ee446e820d150af483e/tests/lockup/) files and
[scripts](https://github.com/sablier-labs/solsab/tree/e1085fe87ea3d02556156ee446e820d150af483e/scripts/ts).

:::caution

The following code examples are for demonstration purposes only and are not production-ready. They are intended to
provide guidance on how to interact with the Lockup program.

:::

## Dependencies

### Download Types

First, download the IDL and the TypeScript types for the Lockup program from the GitHub release.

:::important

Make sure to place them under the `target` directory, as it's seen below, otherwise anchor would throw warnings.

:::

```bash
curl -L -o target/idl/sablier_lockup.json \
  https://github.com/sablier-labs/solsab/releases/download/v1.0.0/sablier_lockup.json
```

and:

```bash
curl -L -o target/types/sablier_lockup.ts \
  https://github.com/sablier-labs/solsab/releases/download/v1.0.0/sablier_lockup.ts
```

### Install NPM Packages

Install the required Solana and Anchor packages:

```bash
bun add @coral-xyz/anchor@0.31.1 @solana/web3.js@1.98.2 bn.js@5.2.2 @solana/spl-token@0.4.13
```

## Setup

Import the necessary modules and types:

```typescript
import * as anchor from "@coral-xyz/anchor";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { ComputeBudgetProgram, PublicKey } from "@solana/web3.js";
import { type SablierLockup } from "<based_on_your_file_path>/target/types/sablier_lockup";
import BN from "bn.js";
```

Set up the Anchor provider and program instance:

```typescript
let anchorProvider: anchor.AnchorProvider;
let lockupProgram: anchor.Program<SablierLockup>;
let signerKeys: anchor.web3.Keypair;

async function setUp() {
  // Configure the Anchor provider
  anchorProvider = anchor.AnchorProvider.env();
  anchor.setProvider(anchorProvider);

  // Declare the lockup program based on the IDL downloaded
  lockupProgram = anchor.workspace.SablierLockup as anchor.Program<SablierLockup>;

  // Define the signer wallet
  signerKeys = (anchorProvider.wallet as anchor.Wallet).payer;
}
```

:::note

The examples in this guide use Devnet. Make sure your wallet has enough SOL and the appropriate SPL tokens for testing.

:::

## Creating a Stream

### Using `createWithTimestampsLl`

Create a linear lockup stream with specific timestamps:

```typescript
async function createStreams() {
  // Ensure the set up is done
  await setUp();

  // Using the current timestamp in milliseconds as the unique identifier
  const salt = new BN(Date.now());
  // 1000 tokens (assuming 6 decimals)
  const depositAmount = new BN(1000 * 10 ** 6);
  // Current timestamp in seconds
  const startTime = new BN(Math.floor(Date.now() / 1000));
  // No cliff
  const cliffTime = new BN(0);
  // 1 hour from start time
  const endTime = new BN(startTime.add(new BN(3600)));
  // No unlock amounts
  const startUnlockAmount = new BN(0);
  const cliffUnlockAmount = new BN(0);
  const isCancelable = true;

  // Account addresses
  const creator = signerKeys.publicKey; // The signer is the creator
  const recipient = new PublicKey("RECIPIENT_WALLET_ADDRESS_HERE");
  const sender = creator; // Use the creator as the sender
  const depositTokenMint = new PublicKey("YOUR_TOKEN_MINT_HERE");

  // Set a higher compute unit limit so that the transaction doesn't fail
  const increaseCULimitIx = ComputeBudgetProgram.setComputeUnitLimit({
    units: 1_000_000,
  });

  // Call the `createWithTimestampsLl` instruction
  const txSignature = await lockupProgram.methods
    .createWithTimestampsLl(
      salt,
      depositAmount,
      startTime,
      cliffTime,
      endTime,
      startUnlockAmount,
      cliffUnlockAmount,
      isCancelable,
    )
    .accounts({
      creator,
      depositTokenMint,
      depositTokenProgram: TOKEN_PROGRAM_ID,
      nftTokenProgram: TOKEN_PROGRAM_ID,
      recipient,
      sender,
    })
    .preInstructions([increaseCULimitIx])
    .rpc();

  console.log("Stream created successfully!");
  console.log("Transaction signature:", txSignature);
}
```

Make sure to call the `createStreams` function to execute the stream creation:

```typescript
createStreams();
```

Execute the script using `bun`:

```shell
ANCHOR_WALLET=~/.config/solana/id.json \ # or your wallet path
ANCHOR_PROVIDER_URL="https://api.devnet.solana.com" \
bun run <your_file_path>.ts
```

## Withdrawing from a Stream

### Using `withdraw`

Withdraw tokens from an existing stream:

```typescript
async function withdrawFromStream(streamNftMint: PublicKey, amount: BN) {
  // Ensure the set up is done
  await setUp();

  // Same account setup as withdraw
  const signer = signerKeys.publicKey;
  const streamRecipient = signer;
  const withdrawalRecipient = signer;
  const depositedTokenMint = new PublicKey("YOUR_TOKEN_MINT_HERE");

  // Chainlink program and feed addresses
  const chainlinkProgram = new PublicKey("HEvSKofvBgfaexv23kMabbYqxasxU3mQ4ibBMEmJWHny");
  const chainlinkSolUsdFeed = new PublicKey("99B2bTijsU6f1GCT73HmdR7HCFFjGMBcPZY6jZ96ynrR");

  // Call the `withdraw` instruction
  const txSignature = await lockupProgram.methods
    .withdraw(amount)
    .accounts({
      chainlinkProgram,
      chainlinkSolUsdFeed,
      depositedTokenMint,
      depositedTokenProgram: TOKEN_PROGRAM_ID,
      nftTokenProgram: TOKEN_PROGRAM_ID,
      signer,
      streamNftMint,
      streamRecipient,
      withdrawalRecipient,
    })
    .rpc();

  console.log("Withdrawal successful!");
  console.log("Transaction signature:", txSignature);
}
```

Make sure to call the `withdrawFromStream` function to execute the withdrawal:

```typescript
// Withdraw 100 tokens (assuming 6 decimals)
withdrawFromStream("YOUR_STREAM_NFT_MINT_HERE", new BN(100 * 10 ** 6));
```

Execute the script using `bun`:

```shell
ANCHOR_WALLET=~/.config/solana/id.json \ # or your wallet path
ANCHOR_PROVIDER_URL="https://api.devnet.solana.com" \
bun run <your_file_path>.ts
```

### Using `withdrawMax`

Withdraw the maximum available amount from a stream:

```typescript
async function withdrawMaxFromStream(streamNftMint: PublicKey) {
  // Ensure the set up is done
  await setUp();

  // Same account setup as withdraw
  const signer = signerKeys.publicKey;
  const streamRecipient = signer;
  const withdrawalRecipient = signer;
  const depositedTokenMint = new PublicKey("YOUR_TOKEN_MINT_HERE");

  // Chainlink program and feed addresses
  const chainlinkProgram = new PublicKey("HEvSKofvBgfaexv23kMabbYqxasxU3mQ4ibBMEmJWHny");
  const chainlinkSolUsdFeed = new PublicKey("99B2bTijsU6f1GCT73HmdR7HCFFjGMBcPZY6jZ96ynrR");

  // Call the `withdrawMax` instruction
  const txSignature = await lockupProgram.methods
    .withdrawMax()
    .accounts({
      chainlinkProgram,
      chainlinkSolUsdFeed,
      depositedTokenMint,
      depositedTokenProgram: TOKEN_PROGRAM_ID,
      nftTokenProgram: TOKEN_PROGRAM_ID,
      signer,
      streamNftMint,
      streamRecipient,
      withdrawalRecipient,
    })
    .rpc();

  console.log("Max withdrawal successful!");
  console.log("Transaction signature:", txSignature);
}
```

Make sure to call the `withdrawMaxFromStream` function to execute the withdrawal:

```typescript
withdrawMaxFromStream("YOUR_STREAM_NFT_MINT_HERE");
```

Execute the script using `bun`:

```shell
ANCHOR_WALLET=~/.config/solana/id.json \ # or your wallet path
ANCHOR_PROVIDER_URL="https://api.devnet.solana.com" \
bun run <your_file_path>.ts
```

## Cancel a Stream

```typescript
async function cancelStream(streamNftMint: PublicKey) {
  // Ensure the set up is done
  await setUp();

  // The sender of the stream
  const sender = signerKeys.publicKey;
  const depositedTokenMint = new PublicKey("YOUR_TOKEN_MINT_HERE");

  // Call the `cancel` instruction
  const txSignature = await lockupProgram.methods
    .cancel()
    .accounts({
      depositedTokenMint,
      depositedTokenProgram: TOKEN_PROGRAM_ID,
      sender,
      streamNftMint,
    })
    .rpc();

  console.log("Stream canceled successfully!");
  console.log("Transaction signature:", txSignature);
}
```

Make sure to call the `cancelStream` function to execute the cancellation:

```typescript
cancelStream("YOUR_STREAM_NFT_MINT_HERE");
```

Execute the script using `bun`:

```shell
ANCHOR_WALLET=~/.config/solana/id.json \ # or your wallet path
ANCHOR_PROVIDER_URL="https://api.devnet.solana.com" \
bun run <your_file_path>.ts
```
