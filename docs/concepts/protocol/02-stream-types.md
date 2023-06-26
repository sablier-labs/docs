---
id: "stream-types"
sidebar_position: 2
title: "Types of Streams"
---

## Linear Streams

Linear streams are the simplest type of stream. They follow a straight line that goes up and to the right on a graph,
which corresponds to the identity function $f(x) = x$ ([see on Desmos](https://www.desmos.com/calculator/fqajxzhbx8)).

With linear streams, the payment rate remains constant, meaning that the same fraction of the deposit amount is streamed
to the recipient every second. This provides greater predictability and is very easy to understand because of how
intuitive it is. Imagine a diagonal line going up and to the right – that's how simple it is.

### Cliffs

It is possible to add a **cliff** to a linear stream, which sets a cut-off point for releasing assets. Prior to the
cliff ,the recipient cannot withdraw any assets, although the stream continues to accrue them. After the cliff, the
stream operates like a typical linear stream ([see on Desmos](https://www.desmos.com/calculator/mk7422ivwp)).

Cliffs a great fit if you are looking to vest ERC-20 assets, as it allows you to, for example, have a 1-year cliff, and
then 3 additional years of linear streaming. If the stream is meant for an employee, you can make it cancellable so that
if the employee leaves your company during the stream, you can cancel it at any time and recover the assets not streamed
already.

This feature is especially useful for vesting ERC-20 assets, as it allows you to have, for example, a 1-year cliff, and
then 3 additional years of linear streaming. If the stream is for an employee, you can make it cancellable so that if
the employee leaves your company during the stream, you can cancel it at any time and recover the assets that have not
yet been streamed.

## Dynamic Streams

Dynamic streams are what makes Sablier so unique. Another way to describe Dynamic streams would be by calling them "non
linear streams". Why you ask? Well, because they aren't linear, of course!

**Theoretically, any type of stream can be created using the Sablier protocol, not just linear streams**. On our
[user interface](https://app.sablier.com), we allow for the creation of exponential streams, for example.

We will go over what these are later in this article, but what's important to note here is that while we don't offer
many other types of streams on the interface, you should be able to create any type of stream by interacting
programmatically with our contracts. You could create a logarithmic stream, for example, which would more or less follow
the $f(x) = log(x)$ function.

### Exponential Streams

Part of the Sablier Dynamic offering, **exponential streams allow for streams where the recipients receive more and more
tokens as time moves forward** ([see on Desmos](https://www.desmos.com/calculator/xgzguiata7)).

This is especially a great fit if you are looking to airdrop tokens to your community, as instead of receiving the
tokens all at once (no streaming) or in a linear fashion (linear stream), your community members will receive the
majority of the tokens towards the end of the stream. **This incentivizes long-term behavior and a constructive
attitude**.

### Exponential Cliff Streams

Part of the Sablier Dynamic offering, the Exponential Cliff streaming curve is a mix between the Cliff Stream and the
Exponential streaming curves ([see on Desmos](https://www.desmos.com/calculator/rzoygqlixt)).

**The stream starts with a cliff** (however long you want), a specific amount is then instantly unlocked and streamed
over to the recipient, and from the rest of the streaming curve is an exponential.

**This is an excellent fit if you are a company looking to vest tokens for your employees**. It will incentivize your
employees to stay at the company for the long run, as the more time moves forward the more they will earn until the
stream ends.

### Traditional Unlock Streams

Part of the Sablier Dynamic offering, the Traditional Unlock streaming curve is literally just that: a traditional
vesting contract with periodic unlocks ([see on Desmos](https://www.desmos.com/calculator/wf6uogrwei)).

Every month, quarter or year (or an other time setting) depending on how you configure it, a specific amount will be
unlocked and sent over to the recipient.

**The advantage of using Traditional Unlock instead of a normal vesting contract, is that using Sablier provides both
parties (senders and recipients) a great user experience.**

Instead of having to manually claim the tokens by interacting with the contract on Etherscan, **Sablier provides a
native and easy-to-understand experience where your employees/investors/… will feel right at home.**
