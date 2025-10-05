---
id: "airdrops"
sidebar_position: 4
title: "Airdrops"
---

# Airdrops

Sablier provides a solution for launching airdrops with up to a million recipients. This is designed to help projects
distribute tokens to a large number of users in a fair and efficient manner. Start exploring at
[app.sablier.com](https://app.sablier.com/airdrops/) or read more about it on
[sablier.com/airdrops](https://sablier.com/airdrops).

## Airstreams (Vested Airdrops)

![Banner Airdrops Vesting](/img/banners/docs-airdrops-airstreams.webp)

**Airdrops should be vested!**

At Sablier, we believe in long-term distributions with aligned incentives. That's why we engineered Airstreams, a
solution which allows you to airdrop streams with a vesting schedule.

Pick a vesting curve (e.g., linear), define the rules (e.g. duration, clawback window), and allow recipients to claim
their airdrops as vesting streams.

## Instant Airdrops

![Banner Airdrops Instant](/img/banners/docs-airdrops-instant.webp)

Sablier also offers an instant airdrop solution, meaning the tokens are immediately released to the recipients upon
claiming.

## Features

### Create with CSV

Generate your list of recipients and put it into a CSV file, upload it to our app, and we'll take care of the rest. We
will sanitize, validate and triple-check the data to ensure everything is formatted correctly.

:::caution Timezone Caveat

All times in the CSV are considered to be in the same timezone as the airdrop creator's device. Visit our
[CSV guide](/apps/guides/csv-support) to read more about the format.

:::

### Easy 3-step process

Creating campaigns involves a simple 3-step process:

1. Configure the initial details (e.g., token, campaign name, etc.)
2. Upload the CSV containing the recipient data
3. Deploy the Airdrop campaign contract

|                                                               |
| ------------------------------------------------------------- |
| ![Airdrop Create: Step 1](/screenshots/airdrop-create-1.webp) |
| ![Airdrop Create: Step 2](/screenshots/airdrop-create-2.webp) |

### Open source

If you'd like to support Airdrops in your UI or have additional requirements, you can do so by using a self-hosted
[Merkle service](/api/airdrops/merkle-api/overview). Reach out to us on [Discord](https://discord.sablier.com) for more
details and customer support.

### Explore the dashboard

Enter the Dashboard and discover a detailed overview of the Airdrops you may be eligible for.

Take advantage of the Search functionality to explore the chain and gain more insight into how others are using Sablier.

|                                                     |
| --------------------------------------------------- |
| ![Airdrop Search](/screenshots/airdrop-search.webp) |

### Support for any ERC-20 token

You can drop your own token!

Thanks to our integration of Token Lists, any ERC-20 token can be airdropped on Sablier.

For your token logo to show up in the Sablier app, add it to our
[token list](https://github.com/sablier-labs/community-token-list/issues/new?template=token-request.md)

|                                                     |
| --------------------------------------------------- |
| ![List of chains](/screenshots/general-chains.webp) |

### Oversight

Have a clear view of how your campaign is performing. Check eligibility or manage your own campaign from a dedicated
interface.

|                                                       |
| ----------------------------------------------------- |
| ![Airdrop Profile](/screenshots/airdrop-profile.webp) |

:::info

To integrate this functionality into your own products/apps, have a look at the [API guides](/api/overview), especially
the [Merkle API](/api/airdrops/merkle-api/overview) and the Merkle subgraphs.

:::

### Advanced Settings

For campaign admins, the interface enables advanced settings like in-app visibility, in-app geographical restrictions,
and campaign-specific items like an eligibility criteria link.

|                                                         |
| ------------------------------------------------------- |
| ![Airdrop Settings](/screenshots/airdrop-settings.webp) |

### Geographical Restrictions

As shown in the image above, you can specify a list of countries where access to the campaign will be restricted on the
Sablier Interface at [app.sablier.com](https://app.sablier.com). Note that this restriction does not apply to the
Sablier Protocol, which runs permissionlessly on the blockchain.

Additionally, some jurisdictions may already be restricted by default — either by your ISP or Vercel, our hosting
provider.
