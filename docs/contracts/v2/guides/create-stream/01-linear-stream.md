---
id: "linear-stream"
sidebar_position: 1
title: "Linear Stream"
---

Linear streams are streams created via the
[`SablierV2LockupLinear`](/docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) contract.

This is how you can create a linear stream programmatically:

1. Set up a contract.
2. Initialize the Sablier contract.
3. Fund your contract with ERC-20 assets[^1].
4. Approve the Sablier contract to spend the ERC-20 assets from your contract.
5. Decide what create function you want to use: either `createWithDurations` or `createWithRange`.
6. Prepare the parameters for the chosen create function.
7. Invoke the create function by passing in the prepared parameters.

:::note

This guide assumes that you have already read the [Protocol Concepts](/docs/concepts/protocol/01-streaming.md) section.

:::

:::caution

The code in this guide is not production-ready, and is implemented in a simplistic manner for the purpose of learning.

:::

## Set up a contract

Declare the Solidity version used to compile the contract:

```solidity
// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity >=0.8.13;
```

Import the relevant symbols from `@sablier/v2-core`:

```solidity
import { ISablierV2LockupLinear } from "@sablier/v2-core/interfaces/ISablierV2LockupLinear.sol";
import { Broker, LockupLinear } from "@sablier/v2-core/types/DataTypes.sol";
import { ud60x18 } from "@sablier/v2-core/types/Math.sol";
import { IERC20 } from "@sablier/v2-core/types/Tokens.sol";
```

Create a contract called `LinearStreamCreator`, and declare a constant `DAI` of type `IERC20` and an immutable variable
`sablier` of type `ISablierV2LockupLinear`:

```solidity
contract LinearStreamCreator {
    IERC20 public constant DAI = IERC20(0x6B175474E89094C44Da98b954EedeAC495271d0F);
    ISablierV2LockupLinear public immutable sablier;
}
```

In the code above, the address of the [DAI](https://makerdao.com) stablecoin is hardcoded. However, in production, you
would likely use an input parameter for this and pass the input into a memory variable, allowing the contract to change
the assets it interacts with on a per transaction basis.

## Initialization

To initialize the Sablier contract, you first need to grab its address from the
[Deployment Addresses](/docs/contracts/v2/02-addresses.md) page. Once you have obtained it, pass it to the constructor
of the creator contract:

```solidity
constructor(ISablierV2LockupLinear sablier_) {
    sablier = sablier_;
}
```

## ERC-20 Steps

To create a stream, the caller must `approve` the creator contract to pull the tokens from the calling address's
account. This is necessary because we must also approve the Sablier contract to pull the assets that the creator
contract will be in possession of after they are transferred from the calling address (you):

```solidity
function createLinearStream(uint256 amount) external returns (uint256 streamId) {
    // Transfer the provided amount of DAI tokens to this contract
    DAI.transferFrom(msg.sender, address(this), amount);

    // Approve the Sablier contract to spend DAI
    DAI.approve(address(sablier), amount);
```

For more guidance on how to approve and transfer ERC-20 assets, see
[this article](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) on the Ethereum website.

## Create functions

There are two create functions available in the linear contract:

- `createWithDurations`: sets the start time to
  [`block.timestamp`](https://docs.soliditylang.org/en/v0.8.19/cheatsheet.html#global-variables)
- `createWithRange`: uses specific start and end times

Which one you choose depends on your use case. In this guide, we will use `createWithDurations`.

## Parameters

Sablier uses structs to encode the parameters of its create functions.

Since we're using `createWithDurations`, we have to use the struct
[`LockupLinear.CreateWithDurations`](/docs/contracts/v2/reference/core/types/library.LockupLinear.md):

```solidity
LockupLinear.CreateWithDurations memory params;
```

Let's review each parameter in detail.

### Sender

The address from which to stream the assets, which will have the ability to cancel the stream:

```solidity
params.sender = msg.sender;
```

### Recipient

The address toward which to stream the assets:

```solidity
params.recipient = recipient;
```

### Total amount

The total amount of ERC-20 assets to be paid, which includes the stream deposit and any potential
[fees](/docs/concepts/protocol/04-fees.mdx). This is represented in units of the asset's decimals.

```solidity
params.totalAmount = amount;
```

### Asset

The contract address of the ERC-20 asset to use for streaming. In this example, we will use DAI:

```solidity
params.asset = DAI;
```

### Cancelable

Boolean that indicates whether the stream will be cancelable or not.

```solidity
params.cancelable = true;
```

### Durations

Struct that encapsulates (i) the start time of the stream, (ii) the cliff time of the stream, and (iii) the end time of
the stream, all as Unix timestamps.

```solidity
params.durations = LockupLinear.Durations({
    cliff: 4 weeks,
    total: 52 weeks
});
```

### Broker

An optional parameter that can be used to charge a fee as a percentage of `totalAmount`.

In the following example, we will leave this parameter uninitialized (i.e. set to zero), because it doesn't make sense
to charge yourself a fee. In practice, this parameter will mostly be used by
[front-end applications](/docs/contracts/v2/guides/05-frontend.md).

```solidity
params.broker = Broker(address(0), ud60x18(0));
```

:::tip

Wondering what's up with that `ud60x18` function? It's a casting function that wraps a basic integer to the `UD60x18`
value type. This type is part of the math library [PRBMath](https://github.com/PaulRBerg/prb-math), which is used in
Sablier for fixed-point calculations.

:::

## Invoke the create function

With all parameters set, we can now call the `createWithDurations` function, and assign the id of the newly created
stream to a variable:

```solidity
streamId = sablier.createWithDurations(params);
```

## The full contract

Below you can see the complete functioning code example: a contract that generates linear streams that start at
`block.timestamp`. You can access the code on GitHub through
[this link](https://github.com/sablierhq/examples/blob/main/v2/core/LinearStreamCreator.sol).

```solidity reference title="Linear Stream Creator" showGithubLink
https://github.com/sablierhq/examples/blob/main/v2/core/LinearStreamCreator.sol
```

[^1]: If creating streams on behalf of end users, they will have to approve your contract first.
