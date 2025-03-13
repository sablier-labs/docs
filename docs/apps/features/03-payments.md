---
id: "payments"
sidebar_position: 3
title: "Payments"
---

The Sablier Interface displays [Flow](/concepts/flow/overview) streams under the Payments tab. These are token streams
with no end time, an ever-increasing amount (meaning the streams can be topped up), and a flexible rate per second.

![Banner Payments](/banners/docs-payments.webp)

## Features

### Flexible terms

Increase the rate/second, fund the stream with more tokens and keep it alive indefinitely! With Flow streams in the
Payments tab you have the freedom to adapt your distribution schedule based on external KPIs, pivots or executive
decisions.

### Explore the dashboard

Enter the Dashboard and discover a detailed overview of your incoming and outgoing flow streams.

Take advantage of the Search functionality to explore the chain and gain more insight into how others are using Flow for
continuous payments, grants, salaries and more.

|                                                    |
| -------------------------------------------------- |
| ![All](/screenshots/payments-dashboard-split.webp) |

### Top up multiple streams

Select the streams you want to top up, provide the deposit amount for each stream, and confirm the batched top-up with
only one transaction.

You can specify custom amounts for each stream, or top up all streams with the same amount.

|                                                                     |
| ------------------------------------------------------------------- |
| ![Top up multiple streams](/screenshots/topup-multiple-streams.gif) |

### Preview any stream

Gain insight into any stream. Track progress using our very own stream circle. Share the unique URL with recipients or
anyone really to increase transparency of your day to day token distribution.

|                                            |
| ------------------------------------------ |
| ![All](/screenshots/payments-profile.webp) |

### Save URL and top up later

Create a unique URL to easily search the selected group of streams. Use this URL or share it with your partners to top
up the streams at a later time.

|                                                              |
| ------------------------------------------------------------ |
| ![URL for batch streams](/screenshots/batch-streams-url.gif) |

### NFT representation

Each stream in wrapped in an ERC-721 non-fungible token (NFT), making the stream recipient the owner of the NFT.

Thus streams can be transferred, traded, and used as collateral in NFT lending protocols.

### Multi-chain experience

Streaming, everywhere. We enable payments on 11+ EVM chains and testnets where you can stream or get paid using Sablier.

|                                                |
| ---------------------------------------------- |
| ![ChainList](/screenshots/general-chains.webp) |

### Create in bulk

Save time by creating up to 280 streams in bulk for your employees, investors, or community members. Use the forms for a
clean and straightforward UX.

### Create with CSV

As an alternative to manually filling out the form, you can upload a CSV file with your user data.

### Mobile-ready layout

Token streams on the go!

Yes, the Sablier app works on mobile. And yes, we support dark mode by default (light mode coming soon).

### Permissions

We've mapped the most important utilities from the Flow contracts into in-app features. Interact with streams that
reference you as a key participant (e.g. sender, recipient) directly from the interfaces.

| Feature          | Sender | Recipient | Public |
| ---------------- | :----: | :-------: | :----: |
| Create Streams   |   ✅   |    ❌     |   -    |
| Deposit / Top-up |   ✅   |     -     |   ✅   |
| Adjust rate      |   ✅   |    ❌     |   -    |
| Refund           |   ✅   |    ❌     |   -    |
| Void             |   ✅   |    ✅     |   -    |
| Pause            |   ✅   |    ❌     |   -    |
| Restart          |   ✅   |    ❌     |   -    |
| Transfer         |   ❌   |    ✅     |   -    |
| Withdraw         |   ✅   |    ✅     |   ✅   |

### Safe multisig support

Payments are fully integrated with [Safe](https://safe.global). Start streaming from the safety and comfort of your
multisig wallet.
