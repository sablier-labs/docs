---
id: "merkle-instant"
sidebar_position: 2
title: "Merkle Instant"
---

# Client Integration with Merkle Instant

In this guide, we will go through the steps to set up a local development environment for building onchain integrations
with Merkle Instant using TypeScript and Anchor's [IDL](https://www.anchor-lang.com/docs/basics/idl). For more examples
and advanced usage, refer to the SolSab repository
[tests](https://github.com/sablier-labs/solsab/tree/e1085fe87ea3d02556156ee446e820d150af483e/tests/merkle-instant) files
and [scripts](https://github.com/sablier-labs/solsab/tree/e1085fe87ea3d02556156ee446e820d150af483e/scripts/ts).

:::caution

The following code examples are for demonstration purposes only and are not production-ready. They are intended to
provide guidance on how to interact with the Merkle Instant program.

:::

:::note

The examples in this guide use Devnet. Make sure your wallet has enough SOL for testing.

:::

## Dependencies

### Download Types

First, download the IDL and the TypeScript types for the Lockup program from the GitHub release. For this example, we
will place the types under the `target` directory.

```bash
# Create target directories
mkdir -p target/idl
mkdir -p target/types
```

```bash
# Download the IDL to the target directory
curl -L -o target/idl/sablier_merkle_instant.json \
  https://github.com/sablier-labs/solsab/releases/download/v1.0.0/sablier_merkle_instant.json
```

and:

```bash
# Download the types to the target directory
curl -L -o target/types/sablier_merkle_instant.ts \
  https://github.com/sablier-labs/solsab/releases/download/v1.0.0/sablier_merkle_instant.ts
```

### Install NPM Packages

Install the required Solana and Anchor packages:

```bash
bun add @coral-xyz/anchor@0.31.1 @solana/web3.js@1.98.2 bn.js@5.2.2 @solana/spl-token@0.4.13
```

## Setup

Create a file:

```bash
touch merkle-instant-example.ts
```

Then, import the necessary modules and types into it.

```typescript
import * as anchor from "@coral-xyz/anchor";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { ComputeBudgetProgram, PublicKey } from "@solana/web3.js";
import { type SablierMerkleInstant } from "./target/types/sablier_merkle_instant";
import BN from "bn.js";
```

Set up the Anchor provider and program instance:

```typescript
let anchorProvider: anchor.AnchorProvider;
let merkleInstantProgram: anchor.Program<SablierMerkleInstant>;
let signerKeys: anchor.web3.Keypair;

async function setUp() {
  // Configure the Anchor provider
  anchorProvider = anchor.AnchorProvider.env();
  anchor.setProvider(anchorProvider);

  // Declare the merkle instant program based on the IDL downloaded
  merkleInstantProgram = anchor.workspace.SablierMerkleInstant as anchor.Program<SablierMerkleInstant>;

  // Define the signer wallet
  signerKeys = (anchorProvider.wallet as anchor.Wallet).payer;
}
```

## Create an Airdrop Campaign

Create a new airdrop campaign with merkle tree distribution:

```typescript
async function createAirdropCampaign(merkleRoot: number[], ipfsCid: string) {
  // Ensure the set up is done
  await setUp();

  // The signer is the creator
  const creator = signerKeys.publicKey;

  const name = "My Airdrop Campaign";

  // Campaign timing
  const startTime = new BN(Math.floor(Date.now() / 1000));
  const expirationTime = startTime.add(new BN(24 * 60 * 60 * 30)); // 30 days later

  // Distribution parameters
  const aggregateAmount = new BN(10000 * 10 ** 6); // 10,000 tokens (assuming 6 decimals)
  const recipientCount = 10;
  const airdropTokenMint = new PublicKey("AIRDROP_TOKEN_MINT");

  // Set a higher compute unit limit so that the transaction doesn't fail
  const increaseCULimitIx = ComputeBudgetProgram.setComputeUnitLimit({
    units: 1_000_000,
  });

  // Call the `createCampaign` instruction
  const txSignature = await merkleInstantProgram.methods
    .createCampaign(merkleRoot, startTime, expirationTime, name, ipfsCid, aggregateAmount, recipientCount)
    .accounts({
      airdropTokenMint,
      airdropTokenProgram: TOKEN_PROGRAM_ID,
      creator,
    })
    .preInstructions([increaseCULimitIx])
    .rpc();

  console.log("Airdrop campaign created successfully!");
  console.log("Transaction signature:", txSignature);
}
```

Make sure to call the `createAirdropCampaign` function to execute it on-chain:

```typescript
// Some dummy values for demonstration
const merkleRoot = Array.from(Buffer.from("d52549cb072a1fcd052412fc80f678effe92aeeedccd1cae632c5c6e1de89379", "hex"));
const ipfsCid = "bafkreiecpwdhvkmw4y6iihfndk7jhwjas3m5htm7nczovt6m37mucwgsrq";
createAirdropCampaign(merkleRoot, ipfsCid);
```

Execute the script using `bun`:

```shell
ANCHOR_WALLET=~/.config/solana/id.json \
ANCHOR_PROVIDER_URL="https://api.devnet.solana.com" \
bun run merkle-instant-example.ts
```

:::note

The default path for the Solana wallet is `~/.config/solana/id.json`. If you have your wallet configured in other path,
make sure to edit the this accordingly.

:::

## Claim from an Airdrop Campaign

Claim tokens from an existing airdrop campaign:

```typescript
async function claimFromAirdropCampaign(campaign: PublicKey, merkleProof: number[][]) {
  // Ensure the set up is done
  await setUp();

  const claimer = signerKeys.publicKey;
  const recipient = claimer; // The recipient of the airdrop

  // The index from the Merkle tree
  const index = 1;
  // Amount allocated to the recipient
  const amount = new BN(1000 * 10 ** 6); // 1000 tokens (assuming 6 decimals)

  // Chainlink program and feed addresses
  const chainlinkProgram = new PublicKey("HEvSKofvBgfaexv23kMabbYqxasxU3mQ4ibBMEmJWHny");
  const chainlinkSolUsdFeed = new PublicKey("99B2bTijsU6f1GCT73HmdR7HCFFjGMBcPZY6jZ96ynrR");

  const airdropTokenMint = new PublicKey("AIRDROP_TOKEN_MINT");

  // Call the `claim` instruction
  const txSignature = await merkleInstantProgram.methods
    .claim(index, amount, merkleProof)
    .accounts({
      airdropTokenMint,
      airdropTokenProgram: TOKEN_PROGRAM_ID,
      campaign,
      chainlinkProgram,
      chainlinkSolUsdFeed,
      claimer,
      recipient,
    })
    .rpc();

  console.log("Airdrop claimed successfully!");
  console.log("Transaction signature:", txSignature);
}
```

Make sure to call the `claimFromAirdropCampaign` function to execute it on-chain:

```typescript
// Example merkle proof (you need to generate this based on your merkle tree)
const merkleProof = [
  [1, 2, 3 /* ... 32 bytes */],
  [4, 5, 6 /* ... 32 bytes */],
  // ... additional proof nodes
];
claimFromAirdropCampaign(new PublicKey("YOUR_CAMPAIGN_ADDRESS_HERE"), merkleProof);
```

Execute the script using `bun`:

```shell
ANCHOR_WALLET=~/.config/solana/id.json \
ANCHOR_PROVIDER_URL="https://api.devnet.solana.com" \
bun run merkle-instant-example.ts
```

:::note

The default path for the Solana wallet is `~/.config/solana/id.json`. If you have your wallet configured in other path,
make sure to edit the this accordingly.

:::
