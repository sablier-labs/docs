---
id: "lockup"
title: "Lockup"
---

# Client Integration

In this guide, we will go through the steps to set up a local development environment for building onchain integrations
with Lockup using TypeScript and Anchor's [IDL](https://www.anchor-lang.com/docs/basics/idl).

:::caution

The following code examples are for demonstration purposes only and are not production-ready. They are intended to
provide guidance on how to interact with the Lockup program.

:::

## Dependencies

### Download Types

First, download the TypeScript types for the Lockup program from the GitHub release:

```bash
curl -L -o sablier_lockup.ts \
  https://github.com/sablier-labs/solsab/releases/download/v1.0.0/sablier_lockup.ts
```

### Install NPM Packages

Install the required Solana and Anchor packages:

```bash
bun add @coral-xyz/anchor@0.31.1 @solana/web3.js@1.98.2 bn.js@5.2.2
```

## Setup

Import the necessary modules and types:

```typescript
import * as anchor from "@coral-xyz/anchor";
import { Connection, PublicKey, Keypair } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { SablierLockup } from "./sablier_lockup"; // Path to your downloaded types
import BN from "bn.js";
```

Set up the Anchor provider and program instance:

```typescript
// Create connection to Solana cluster
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// Set up wallet (example using a keypair)
const wallet = new anchor.Wallet(yourKeypair);

// Create provider
const provider = new anchor.AnchorProvider(connection, wallet, {
  commitment: "confirmed",
});

// Set the provider
anchor.setProvider(provider);

// Initialize the program (PROGRAM_ID is included in the types)
const program = new anchor.Program<SablierLockup>(
  idl as SablierLockup, // Your IDL object
  provider,
);
```

## Creating a Stream

### Using `createWithTimestampsLL`

Create a linear lockup stream with specific timestamps:

```typescript
async function createStream() {
  // Using the current timestamp as the unique identifier
  const salt = new BN(Date.now());
  // 1000 tokens (assuming 6 decimals)
  const depositAmount = new BN(1000 * 10 ** 6);
  // Current timestamp
  const startTime = new BN(Math.floor(Date.now()));
  // No cliff
  const cliffTime = new BN(0);
  // 1 hour from start time
  const endTime = new BN(startTime.add(new BN(3600)));
  // No unlock amounts
  const startUnlockAmount = new BN(0);
  const cliffUnlockAmount = new BN(0);
  const isCancelable = true;

  // Account addresses
  const creator = provider.wallet.publicKey;
  const recipient = new PublicKey("YOUR_RECIPIENT_HERE");
  const sender = creator;
  const depositTokenMint = new PublicKey("YOUR_TOKEN_MINT_HERE");

  // Set a higher compute unit limit so that the transaction doesn't fail
  const increaseCULimitIx = ComputeBudgetProgram.setComputeUnitLimit({ units: 1_000_000 });

  const txSignature = await program.methods
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
      recipient,
      sender,
      depositTokenMint,
      depositTokenProgram: TOKEN_PROGRAM_ID,
      nftTokenProgram: TOKEN_PROGRAM_ID,
    })
    .preInstructions([increaseCULimitIx])
    .rpc();

  console.log("Stream created successfully!");
  console.log("Transaction signature:", txSignature);

  return txSignature;
}
```

## Withdrawing from a Stream

### Using `withdraw`

Withdraw tokens from an existing stream:

```typescript
async function withdrawFromStream(streamNftMint: PublicKey, amount: BN) {
  // Required account addresses
  const signer = provider.wallet.publicKey;
  const streamRecipient = signer; // The recipient of the stream
  const withdrawalRecipient = signer; // Where to send withdrawn tokens
  const depositedTokenMint = new PublicKey("YOUR_TOKEN_MINT_HERE");

  // Chainlink program and feed addresses
  const chainlinkProgram = new PublicKey("HEvSKofvBgfaexv23kMabbYqxasxU3mQ4ibBMEmJWHny");
  const chainlinkSolUsdFeed = new PublicKey("99B2bTijsU6f1GCT73HmdR7HCFFjGMBcPZY6jZ96ynrR");

  const txSignature = await program.methods
    .withdraw(amount)
    .accounts({
      chainlinkProgram,
      chainlinkSolUsdFeed,
      depositedTokenMint,
      depositedTokenProgram,
      nftTokenProgram: token.TOKEN_PROGRAM_ID,
      signer: signer.publicKey,
      streamNftMint,
      streamRecipient,
      withdrawalRecipient,
    })
    .rpc();

  console.log("Withdrawal successful!");
  console.log("Transaction signature:", txSignature);

  return txSignature;
}
```

### Using `withdrawMax`

Withdraw the maximum available amount from a stream:

```typescript
async function withdrawMaxFromStream(streamNftMint: PublicKey) {
  // Same account setup as withdraw
  const signer = provider.wallet.publicKey;
  const streamRecipient = signer;
  const withdrawalRecipient = signer;
  const depositedTokenMint = new PublicKey("YOUR_TOKEN_MINT_HERE");

  // Chainlink program and feed addresses
  const chainlinkProgram = new PublicKey("HEvSKofvBgfaexv23kMabbYqxasxU3mQ4ibBMEmJWHny");
  const chainlinkSolUsdFeed = new PublicKey("99B2bTijsU6f1GCT73HmdR7HCFFjGMBcPZY6jZ96ynrR");

  const txSignature = await program.methods
    .withdrawMax()
    .accounts({
      signer,
      streamRecipient,
      withdrawalRecipient,
      depositedTokenMint,
      streamNftMint,
      depositedTokenProgram: TOKEN_PROGRAM_ID,
      nftTokenProgram: TOKEN_PROGRAM_ID,
      chainlinkProgram,
      chainlinkSolUsdFeed,
    })
    .rpc();

  console.log("Max withdrawal successful!");
  console.log("Transaction signature:", txSignature);

  return txSignature;
}
```

## Cancel a Stream

```typescript
async function cancelStream(streamNftMint: PublicKey) {
  const sender = provider.wallet.publicKey; // The sender of the stream

  const txSignature = await this.lockup.methods
    .cancel()
    .accounts({
      depositedTokenMint,
      depositedTokenProgram,
      sender,
      streamNftMint,
    })
    .rpc();

  console.log("Stream canceled successfully!");
  console.log("Transaction signature:", txSignature);
}
```

For more examples and advanced usage, refer to the SolSab repository
[test](https://github.com/sablier-labs/solsab/blob/e1085fe87ea3d02556156ee446e820d150af483e/tests/lockup/) files and
[scripts](https://github.com/sablier-labs/solsab/tree/e1085fe87ea3d02556156ee446e820d150af483e/scripts/ts).
