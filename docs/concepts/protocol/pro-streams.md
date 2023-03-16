---
sidebar_position: 3
title: "Pro Streams"
---

Pro streams are what makes Sablier so unique. Another way to describe Pro streams would be by calling them "non linear streams". Why you ask? Well, because they aren't linear, of course!

**Theoretically, any type of stream can be created using the Sablier protocol, not just linear streams**. On our [user interface](https://app.sablier.com), we allow for the creation of exponential streams, for example.

We will go over what these are later in this article, but what's important to note here is that while we don't offer many other types of streams on the interface, you should be able to create any type of stream by interacting programmatically with our contracts. You could create a logarithmic stream, for example, which would more or less follow the $f(x) = log(x)$ function.

### Exponential Streams
Part of the Sablier Pro offering, **exponential streams allow for streams where the recipients receive more and more tokens as time moves forward**.

For our math junkies out there, it's somewhat similar to the $f(x) = e^x - 1$ function. This is especially a great fit if you are looking to airdrop tokens to your community, as instead of receiving the tokens all at once (no streaming) or in a linear fashion (linear stream), your community members will receive the majority of the tokens towards the end of the stream. **This incentivizes long-term behavior and a constructive attitude**.

### Exponential Cliff Streams
Part of the Sablier Pro offering, the Exponential Cliff streaming curve is a mix between the Cliff Stream and the Exponential streaming curves.

**The stream starts with a cliff** (however long you want), a specific amount is then instantly unlocked and streamed over to the recipient, and from the rest of the streaming curve is an exponential.

**This is an excellent fit if you are a company looking to vest tokens for your employees**. It will incentivize your employees to stay at the company for the long run, as the more time moves forward the more they will earn until the stream ends.

### Traditional Unlock Streams
Part of the Sablier Pro offering, the Traditional Unlock streaming curve is literally just that: a traditional vesting contract with periodic unlocks.

Every month, quarter or year (or an other time setting) depending on how you configure it, a specific amount will be unlocked and sent over to the recipient.

**The advantage of using Traditional Unlock instead of a normal vesting contract, is that using Sablier provides both parties (senders and recipients) a great user experience.**

Instead of having to manually claim the tokens by interacting with the contract on Etherscan, **Sablier provides a native and easy-to-understand experience where your employees/investors/… will feel right at home.**
