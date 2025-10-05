---
id: "setup"
sidebar_position: 1
title: "Set Up Your Contract"
---

The "Stream Management" series will guide you through how to withdraw, cancel, renounce, and transfer ownership of
streams.

Before diving in, please note the following:

1. We assume you are already familiar with [creating streams](/guides/lockup/examples/create-stream/lockup-linear).
2. We also assume that the stream management contract is authorized to invoke each respective function. To learn more
   about access control in Lockup, see the [Access Control](/reference/lockup/access-control) guide.

With that said, let's begin. First, declare the Solidity version used to compile the contract:

```solidity
// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity >=0.8.22;
```

Import the relevant symbols from `@sablier/core`:

```solidity
import { ISablierLockup } from "@sablier/lockup/src/interfaces/ISablierLockup.sol";
```

Create a contract called `StreamManagement` and declare an immutable variable `sablier` of type `ISablierLockup`:

```solidity
contract StreamManagement {
    ISablierLockup public immutable sablier;
}
```

Just like in the create stream guides, the next step requires you to head over to the
[Deployment Addresses](/guides/lockup/deployments) page and copy the address of the Lockup contract. Then, you can
deploy the stream management contract:

```solidity
constructor(ISablierLockup sablier_) {
    sablier = sablier_;
}
```

You're all set! You can now move on to the next page, which will teach you how to withdraw from a stream.
