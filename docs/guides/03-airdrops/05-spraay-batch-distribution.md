---
id: "spraay-batch-distribution"
sidebar_position: 5
title: "Direct Batch Distribution with Spraay"
---

# Direct Batch Distribution with Spraay Protocol

## When to Use Direct Batch vs Merkle Airdrops

Sablier Merkle Airdrops are ideal for large-scale token distributions with thousands of recipients, vesting schedules, and claim-based UX. However, not every distribution needs a Merkle tree.

For smaller, immediate distributions — paying contributors, disbursing grants, or splitting revenue among a group — a direct batch transfer is simpler and faster.

[Spraay Protocol](https://spraay.app) enables direct ERC20 batch transfers on Base and 14 other chains, complementing Sablier's Merkle-based distribution tools.

## Comparison

| Feature | Sablier Merkle Airdrops | Spraay Direct Batch |
|---|---|---|
| Distribution model | Pull-based (recipients claim) | Push-based (sender distributes) |
| Setup required | Merkle tree computation | List of addresses and amounts |
| Best for | 100+ recipients, vesting/streaming | 1-100 recipients, instant payments |
| Vesting support | Yes (linear, tranched, VCA) | No (instant only) |
| Campaign contract | Deployed per campaign | Single reusable contract |
| Gas cost structure | Recipients pay claim gas | Sender pays one batch transaction |

## Use Cases

### DAO Contributor Payments

Pay 10-50 contributors in USDC or governance tokens in a single transaction — no need to deploy a campaign contract or compute a Merkle tree.

### Grant Disbursements

After a governance vote approves grants to multiple recipients, distribute funds instantly without requiring each recipient to claim.

### Revenue Sharing

Split protocol revenue or LP rewards among a small group of stakeholders in one transaction.

### Quick Community Rewards

Distribute token rewards to event participants, hackathon winners, or contest finalists without the overhead of a full airdrop campaign.

## How It Works

1. **Connect your wallet** on [spraay.app](https://spraay.app)
2. **Select the token** to distribute (USDC, WETH, or any ERC20)
3. **Enter recipients** — paste addresses and amounts, or upload a CSV
4. **Approve & send** — one approval + one batch transaction

Spraay charges a 0.3% protocol fee per batch transaction.

## Links

- Website: [spraay.app](https://spraay.app)
- Documentation: [docs.spraay.app](https://docs.spraay.app)
- GitHub: [github.com/plagtech/spraay-app](https://github.com/plagtech/spraay-app)