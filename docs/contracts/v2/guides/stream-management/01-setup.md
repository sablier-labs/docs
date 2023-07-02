---
id: "setup"
sidebar_position: 1
title: "Set Up Your Contract"
---

The "Stream Management" series will guide you through interacting with Sablier V2 Core, showing how to withdraw, cancel,
renounce, and transfer ownership of streams.

Before diving in, please note the following:

1. We assume you are already familiar with [creating streams](/contracts/v2/guides/create-stream/lockup-linear).
2. We also assume that the stream management contract possesses the necessary permissions to invoke each respective
   function. To learn more about access control in Sablier, refer to the
   [Access Control](/contracts/v2/guides/access-control) guide.

With that said, let's begin. First, declare the Solidity version used to compile the contract:

```solidity
// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity >=0.8.19;
```

Import the relevant symbols from `@sablier/v2-core`:

```solidity
import { ISablierV2Lockup } from "@sablier/v2-core/interfaces/ISablierV2Lockup.sol";
```

:::info

`ISablierV2Lockup` is a common interface for `ISablierV2LockupLinear` and `ISablierV2LockupDynamic`, allowing users to
interact with both contract types using a single interface.

:::

Create a contract called `StreamManagement` and declare an immutable variable `sablier` of type `ISablierV2Lockup`:

```solidity
contract StreamManagement {
    ISablierV2Lockup public immutable sablier;
}
```

Just like in the create stream guides, the next step requires you to head over to the
[Deployment Addresses](/contracts/v2/addresses) page and copy the address of the Sablier contract you intend to use
(either Lockup Linear or Lockup Dynamic). Then, you can deploy the stream management contract:

```solidity
constructor(ISablierV2Lockup sablier_) {
    sablier = sablier_;
}
```

You're all set! You can now move on to the next page, which will teach you how to withdraw from a stream.
