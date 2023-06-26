---
id: "stream-types"
sidebar_position: 2
title: "Types of Streams"
---

## Lockup Linear

Lockup Linear streams are the simplest type of stream in Sablier. They follow a straight line that goes up and to the
right on a graph, which corresponds to the identity function $f(x) = x$
([see on Desmos](https://www.desmos.com/calculator/hfqmupvqe3)).

With this type of stream, the payment rate remains constant, meaning that the same fraction of the deposit amount is
streamed to the recipient every second. This provides greater predictability and is easy to understand because of how
intuitive it is. Imagine a diagonal line going up and to the right – that's how simple it is.

:::tip

You will hear the term **"Lockup"** a lot when dealing with Sablier. This is a term coined by us to describe the
requirement that the sender must lock up a certain amount of assets at the beginning of the stream.

:::

### Cliffs

It is possible to attach a "cliff" to a Lockup Linear stream, which sets a cut-off point for releasing assets. Prior to
the cliff, the recipient cannot withdraw any assets, but the stream continues to accrue them. After the cliff, the
constant payment rate per second kicks in ([see on Desmos](https://www.desmos.com/calculator/kigb45ntwp)).

This feature is especially useful for vesting ERC-20 assets as it allows you to have, for example, a 1-year cliff, and
then 3 additional years of linear streaming. If the stream is for an employee, you can make it cancellable so that if
the employee leaves your company during the stream, you can cancel it and recover the assets that have not yet been
streamed.

## Lockup Dynamic

Lockup Dynamic streams are what makes Sablier so unique, since they enable the creation of any type of streaming curve,
including non-linear ones.

On our [user interface](https://app.sablier.com), we support only a few streaming models, such as exponential streams,
but the potential for innovation is limitless when you interact programmatically with the contracts. As an example, one
could design a logarithmic stream that emulates the $f(x) = log(x)$ function.

These streams are powered by a number of user-provided "segments", which we will cover in the next article. What is
important to note here is that with Lockup Dynamic, Sablier has evolved into a universal streaming engine, capable of
supporting any custom streaming curve.

### Exponential

A fantastic use case for Lockup Dynamic is Exponential streams, a streaming model under which the recipient receives
increasingly more tokens as time moves forward ([see on Desmos](https://www.desmos.com/calculator/p0mxvfotlk)).

Exponentials are a great fit if you are looking to airdrop tokens, because your community members will receive the
majority of the tokens towards the end of the stream instead of receiving the tokens all at once (no streaming) or in a
linear fashion (Lockup Linear). This incentivizes long-term behavior and a constructive attitude.

### Exponential Cliff

Another use case for Lockup Dynamic is a variation of the previous design: an Exponential Cliff
([see on Desmos](https://www.desmos.com/calculator/z8ugxfnlqh)).

The stream starts with a cliff (which can be how long you want), a specific amount instantly unlocked when the cliff
ends, and then the rest of the stream is exponentially streamed.

This is an excellent model if you are a company looking to set up a token vesting plan for your employees. Your
employees will have an incentive to remain with your company in the long run, as they will receive an increasingly
larger number of tokens.

### Traditional Unlock

Because Lockup Dynamic is so flexible, it can even be used to create a traditional vesting contract with periodic
unlocks ([see on Desmos](https://www.desmos.com/calculator/ptj2mdnpzx)). In this case, the "streaming" rate would be not
be by the second, but by the week, month, or year.

After each period, a specific amount becomes unlocked and and available for the recipient to withdraw. Past unlocks
accumulate, so if the recipient doesn't withdraw them, they will be able to withdraw them later.

The advantage of using Traditional Unlock instead of a normal vesting contract is that Sablier automates the entire
process. You don't have to worry about setting up a vesting contract or creating a user interface for your employees to
claim their tokens.
