---
id: "cancelability"
sidebar_position: 10
title: "Cancelability"
---

## Streams

When creating a Sablier stream, users have the ability to set the stream as cancelable, or uncancelable.

If **cancelable**, the stream can be stopped at any time by the stream creator, with the unstreamed funds being returned
over to the stream creator.

**Example:** If you are using Sablier to pay your employees, and one of your employees leaves your company, you can
cancel the stream and get the funds back which haven't yet been paid out to the ex-employee at that specific time. Any
funds paid out before that are obviously now owned by the recipient.

:::info

When a stream is canceled (stopped), there is no way to uncancel it (start it again). You will need to create a new
stream in that case.

:::

If **uncancelable**, there is no way to cancel the stream, and the recipient is guaranteed to receive the funds.

A cancelable stream can be set as uncancelable at any point in time by the stream creator. On the other hand, an
uncancelable stream cannot be set as cancelable by the stream creator.

Recipients do not have the ability to cancel a stream.

## Airstream campaigns

If you have created an Airstream campaign and made a mistake, you can recover the funds from the campaign that haven't
yet been claimed in the following cases:

- Before any user claimed from the campaign
- Up until 7 days after the first claim took place
- After the claim window ends (assuming it's enabled)

If you haven't set up a claim window, you can only recover the funds you deposited into the Airstream campaign up until
7 days after the first claim took place, or as long as you like if there are no claims. Assuming there are claims, after
the 7-day period passes, you will not have the ability anymore to recover the funds deposited into the campaign
contract. They will stay there forever until claimed by eligible recipients.

If you have set up a claim window, after the claim window ends, you have the ability to get the funds back which haven't
yet been claimed by that time.

It's important to mention that the streams created through the Airstream campaign can be set as cancelable, the above
points are related to the campaign itself, not the streams created through users claiming from the campaign.

**Example:** you create an Airstream campaign. You deposit 1000 USDC in it. You set up the streams as cancelable, but
there is no claim window. All eligible users claim from the campaign at the same time, and 8 days later, you realize you
made a mistake. While you cannot recover the funds through the campaign as the 7-day period has passed, you can cancel
the streams that were created and get the funds back which haven't been paid out at that specific time to the
recipients.
