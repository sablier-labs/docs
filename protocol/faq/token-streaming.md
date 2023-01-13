---
id: token-streaming
title: Token Streaming
sidebar_position: 3
---

### How can I create a stream?

You need an Ethereum wallet, some Ether and an ERC-20 token like DAI. Then, choose your favorite interface for accessing the Sablier protocol (such as [app.sablier.com](https://app.sablier.com)) and fill in the recipient's address, the deposit amount and the total duration.

Alternatively, head to our [documentation](../guides/getting-started) to learn how to interact directly with the Sablier smart contracts.

### How is the start time set?

You have full control over the start time, which is a unix timestamp measured in seconds. However, the Ethereum
transaction that creates the stream must be finalized before this start time, or otherwise the smart contract reverts
with an error:

> start time before block.timestamp

In our web interface, the start time is automatically set to ~15 minutes after the time at which the user sends the transaction to the mempool.

### How does streaming work?

Dividing the deposit amount by the difference between the stop time and the start time gives us a payment rate per second. Sablier uses this rate to transfer a small portion of tokens from the sender to the recipient once every second.

For instance, if the payment rate was 0.01 DAI per second, the recipient would receive:

- 0.01 \* 60 = 0.6 DAI / minute
- 0.01 \* 60 \* 60 = 36 DAI / hour
- 0.01 \* 60 \* 60 \* 24 = 864 DAI / day

### Where are the tokens held?

In our smart contracts. You can verify this assertion by inspecting [Etherscan](https://etherscan.io/address/0xCD18eAa163733Da39c232722cBC4E8940b1D8888) or any other blockchain explorer.

### How can recipients access their tokens?

As the tokens are being streamed at the smart contract level, recipients can consider Sablier their real-time wallet for digital currency.

To make withdrawals, recipients can:

- Use a web interface (e.g. [app.sablier.com](https://app.sablier.com)).
- Call the contract directly on a blockchain explorer.

### Can I cancel streams?

Yes, both as a sender and a recipient, assuming the stream was set up as cancellable when it was created. If the stream was explicitly set as uncancelable, it is obviously not cancelable.

- If the stream is canceled before the start time, the whole deposit amount is returned in full to you.
- If the stream is canceled while the stream is active, the smart contracts calculate how much has been streamed, transfer that to the recipient and return the remainder to you.
- If the stream is canceled after the stream has stopped, the smart contracts transfers all the remaining funds (if any) to the recipient.

### Can I modify the streaming rate?

No. Once a stream is created, it is set in stone on the blockchain.

In a future version of the Sablier protocol, we may add the option to refill an active stream and even extend it.
