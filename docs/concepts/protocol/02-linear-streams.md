---
id: "linear-streams"
sidebar_position: 2
title: "Linear Streams"
---

Linear streams are the simplest type of stream. They follow a straight line that goes up and to the right on a graph,
which corresponds to the identity function $f(x) = x$.

With linear streams, the payment rate remains constant, meaning that the same fraction of the deposit amount is streamed
to the recipient every second. This provides greater predictability and is very easy to understand because of how
intuitive it is. Imagine a diagonal line going up and to the right – that's how simple it is.

## Cliffs

It is possible to add a **cliff** to a linear stream, which sets a cut-off point for releasing assets. Prior to the
cliff ,the recipient cannot withdraw any assets, although the stream continues to accrue them. After the cliff, the
stream operates like a typical linear stream.

Cliffs a great fit if you are looking to vest ERC-20 assets, as it allows you to, for example, have a 1-year cliff, and
then 3 additional years of linear streaming. If the stream is meant for an employee, you can make it cancellable so that
if the employee leaves your company during the stream, you can cancel it at any time and recover the assets not streamed
already.

This feature is especially useful for vesting ERC-20 assets, as it allows you to have, for example, a 1-year cliff, and
then 3 additional years of linear streaming. If the stream is for an employee, you can make it cancellable so that if
the employee leaves your company during the stream, you can cancel it at any time and recover the assets that have not
yet been streamed.
