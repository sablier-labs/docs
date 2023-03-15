---
sidebar_position: 1
title: "Frequently Asked Questions"
---

## What is Ethereum?

Sablier is built on top of Ethereum (as well as other smart contract blockchains), a global, open-source platform for
decentralized applications. You can read more about it on their [official website](https://ethereum.org).

## What are smart contracts?

Permission-less scripts that:

- Run on a smart contract blockchain like Ethereum
- Cannot be modified once deployed
- Do exactly what you tell them to do

## What are Arbitrum, Avalanche, BSC, Optimism, Polygon and Ronin?

These are Ethereum-like chains that can run Ethereum smart contracts. Sablier is available on all of these chains.
Please refer to their associated documentation for more information:

- [Arbitrum One](https://developer.offchainlabs.com/)
- [Avalanche](https://docs.avax.network/)
- [BSC](https://docs.binance.org/)
- [Optimism](https://community.optimism.io/)
- [Polygon](https://docs.polygon.technology/)
- [Ronin](https://twitter.com/ronin_network)

## What is ERC-20?

Acronym that stands the "Ethereum Requests for Comments" number 20. It is the most popular technical standard on
Ethereum and can be used for printing a currency.

Sablier is compatible with ERC-20 tokens only, such as [DAI](https://makerdao.com/) or
[USDC](https://www.coinbase.com/usdc).

## What is a stream?

A real-time payment, made up of six properties:

| Name       | Description                                  |
| ---------- | -------------------------------------------- |
| Sender     | Ethereum address                             |
| Recipient  | Ethereum address                             |
| Deposit    | Total amount of tokens to stream             |
| Token      | ERC-20 token address                         |
| Start time | The Unix timestamp when the streaming starts |
| Stop time  | The Unix timestamp when the streaming stops  |

## Where can I access the Sablier protocol?

You can access Sablier through the following web interfaces:

- [app.sablier.finance](https://pay.sablier.finance) (official interface)
- [safe.global](https://safe.global/) (multi-signature wallet)

We're working with various projects in the DeFi ecosystem to make Sablier accessible through more and more interfaces.

## What is real-time finance?

A term coined by us to emphasize the wide-ranging use cases for the Sablier protocol. We like to think about work as an
attempt to rethink the way trust is established in financial contracts.

## What is token streaming?

An alternative wording, [coined](https://www.youtube.com/watch?v=gF_ZQ_eijPs) by Andreas Antonopoulos in 2017. Just like
you can stream movies on Netflix or music on Spotify, so you can stream tokens by the second on Sablier.

## How does streaming work on Sablier?

Imagine Alice wants to make a 3,000 DAI payment to Bob during the whole month of January.

1. Alice deposits the 3,000 DAI in Sablier _before_ Jan 1, setting the stop time to Feb 1.
2. Bob's crypto earnings increase every second beginning Jan 1.
3. On Jan 10, Bob will have earned approximately 1,000 DAI.
4. If at any point during January Alice wishes to recover her tokens, she can cancel the stream and recover what has not
   been streamed yet.

## Is the Sablier protocol safe?

The security of the Sablier protocol is our outmost priority. Our team, accompanied by external auditors and
consultants, has invested considerable effort to create a protocol that is safe and reliable. All contract code is
publicly verifiable in our [GitHub repository](https://github.com/sablierhq/v2-core).

## Is the Sablier protocol transparent?

As transparent as it can be. Verify the smart contracts by yourself on [GitHub](https://github.com/sablierhq/v2-core/)
and [Etherscan](https://etherscan.io/labelcloud/sablier).

## Does the Sablier protocol have an administrator?

No. The contracts do not have any owner or administrator. They are as trustless as the smart contract blockchain they
are deployed on.

## How can I create a stream?

You need an Ethereum wallet, some Ether and an ERC-20 token like DAI. Then, choose your favorite interface for accessing
the Sablier protocol (such as [app.sablier.com](https://app.sablier.com)) and fill in the recipient's address, the
deposit amount and the total duration.

## How is the start time set?

You have full control over the start time, which is a unix timestamp measured in seconds. However, the Ethereum
transaction that creates the stream must be finalized before this start time, or otherwise the smart contract reverts
with an error:

> start time before block.timestamp

In our web interface, the start time is automatically set to ~15 minutes after the time at which the user sends the
transaction to the mempool.

## How does streaming work?

Dividing the deposit amount by the difference between the stop time and the start time gives us a payment rate per
second. Sablier uses this rate to transfer a small portion of tokens from the sender to the recipient once every second.

For instance, if the payment rate was 0.01 DAI per second, the recipient would receive:

- 0.01 \* 60 = 0.6 DAI / minute
- 0.01 \* 60 \* 60 = 36 DAI / hour
- 0.01 \* 60 \* 60 \* 24 = 864 DAI / day

## Where are the tokens held?

In our smart contracts. You can verify this assertion by inspecting
[Etherscan](https://etherscan.io/address/0xCD18eAa163733Da39c232722cBC4E8940b1D8888) or any other blockchain explorer.

## How can recipients access their tokens?

As the tokens are being streamed at the smart contract level, recipients can consider Sablier their real-time wallet for
digital currency.

To make withdrawals, recipients can:

- Use a web interface (e.g. [app.sablier.com](https://app.sablier.com)).
- Call the contract directly on a blockchain explorer.

## Can I cancel streams?

Yes, both as a sender and a recipient, assuming the stream was set up as cancellable when it was created. If the stream
was explicitly set as uncancelable, it is obviously not cancelable.

- If the stream is canceled before the start time, the whole deposit amount is returned in full to you.
- If the stream is canceled while the stream is active, the smart contracts calculate how much has been streamed,
  transfer that to the recipient and return the remainder to you.
- If the stream is canceled after the stream has stopped, the smart contracts transfers all the remaining funds (if any)
  to the recipient.

## Can I modify the streaming rate?

No. Once a stream is created, it is set in stone on the blockchain.

In a future version of the Sablier protocol, we may add the option to refill an active stream and even extend it.

## What can Sablier be used for?

We came up with a few ideas in [this discussion on Twitter](https://twitter.com/SablierHQ/status/1205533344886411264),
but the sky is the limit.

## Who can use Sablier?

Anyone in the world with an Internet connection and an Ethereum wallet.

## The Sablier web interface is down, what can I do?

The Sablier protocol is "always-on", but, in the event that MetaMask or our web interfaces are malfunctioning, you can
access Sablier manually on [Etherscan](https://etherscan.io/address/0xcd18eaa163733da39c232722cbc4e8940b1d8888). We
wrote a guide about this on [Medium](https://medium.com/sablier/operating-the-sablier-protocol-manually-e6569092c533).
