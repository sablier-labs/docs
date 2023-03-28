---
id: "statuses"
sidebar_position: 4
title: "Statuses"
---

# Stream Statuses

A Sablier stream can have one of four distinct statuses, as shown in the table below:

| Status   | Description                                                                                                                                   |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| NULL     | The stream has not been created yet. This is the default value.                                                                               |
| ACTIVE   | The stream has been created and it is active, indicating that assets are either in the process of being streamed or have yet to be withdrawn. |
| CANCELED | The stream has been canceled.                                                                                                                 |
| DEPLETED | The stream has been depleted, meaning all assets have been withdrawn.                                                                         |

## What to do with a stream status?

Knowing the status of a stream can inform your decision making. For example, if a stream is canceled, you know that you
can't cancel it again. Or, if a stream is depleted, you know that you can't withdraw any more assets from it.
