---
id: "linear-stream"
sidebar_position: 1
title: "Linear Stream"
---

Linear streams are streams created using the
[`SablierV2LockupLinear`](/docs/contracts/v2/reference/core/contract.SablierV2LockupLinear.md) contract.

To create a linear stream programmatically, follow these steps:

1. Initialize the Sablier contract.
2. Fund your contract with ERC-20 assets[^1].
3. Approve the Sablier contract to spend the ERC-20 assets from your contract.
4. Decide what create function you want to use: either `createWithDurations` or `createWithRange`.
5. Prepare the parameters for the chosen create function.
6. Invoke the create function by passing in the prepared parameters.

## Initialization

To initialize the Sablier contract, you first need to grab its address from the
[Deployment Addresses](/docs/contracts/v2/02-addresses.md) page. Once you have obtained the address, you can use it in
this contract:

```solidity
import { ISablierV2LockupLinear } from "@sablier/v2-core/interfaces/ISablierV2LockupLinear.sol";

contract LinearStreamCreator {
    ISablierV2LockupLinear public immutable sablier;

    constructor(ISablierV2LockupLinear sablier_) {
        sablier = sablier_;
    }
}
```

## ERC-20 Steps

Sablier re-exports OpenZeppelin's
[ERC-20 interface](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.8/contracts/token/ERC20/IERC20.sol)
so that you don't have to install it separately:

```solidity
import { IERC20 } from "@sablier/v2-core/types/Tokens.sol";
```

For guidance on how to approve and transfer ERC-20 assets, see
[this article](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) on the Ethereum website.

## Create functions

There are two create functions available in the linear contract:

- `createWithDurations`: sets the start time set to
  [`block.timestamp`](https://docs.soliditylang.org/en/v0.8.19/cheatsheet.html#global-variables)
- `createWithRange`: uses the start time provided by you

Which one you choose depends on your use case. In this guide, we will use `createWithDurations`.

## Parameters

Sablier uses structs to encode the parameters of its create functions.

Since we're using `createWithDurations`, we have to initialize a struct of type
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

The contract address of the ERC-20 asset to use for streaming. In this example, we will use
[DAI](https://makerdao.com/en/):

```solidity
import { IERC20 } from "@sablier/v2-core/types/Tokens.sol";
IERC20 public constant DAI = IERC20(0x6B175474E89094C44Da98b954EedeAC495271d0F);
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
import { LockupLinear } from "@sablier/v2-core/types/DataTypes.sol";
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
import { Broker } from "@sablier/v2-core/types/DataTypes.sol";
import { ud60x18 } from "@sablier/v2-core/types/Math.sol";
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

Below you can see the complete functioning code example: contract that generates linear streams, each starting at
`block.timestamp`. You can access the code on GitHub through
[this link](https://github.com/sablierhq/examples/blob/main/v2/core/LinearStreamCreator.sol).

```solidity reference title="Linear Stream Creator" showGithubLink
https://github.com/sablierhq/examples/blob/main/v2/core/LinearStreamCreator.sol
```

[^1]: If creating streams on behalf of end users, they will have to approve your contract first.
