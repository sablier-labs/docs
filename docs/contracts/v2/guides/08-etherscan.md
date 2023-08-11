---
draft: false
id: "etherscan"
sidebar_position: 8
title: "Etherscan - Manual Interactions"
---

## Introduction

Just like with any other truly open protocol, Sablier V2 can be interacted with directly through an explorer like
Etherscan.

In this guide, we will go over how to create a stream and how to withdraw from a stream by manually interacting with the
Sablier V2 contracts on Etherscan.

## Creating a Stream

### Prerequisites

Before being able to create a stream using the Sablier V2 Core contracts you need to grant the right allowance. See the
[Allowances](#allowances) section for a guide on how to do that.

### Step 1: Go to contract page

Head over to our [deployments](/contracts/v2/deployments) list and select the contract address you want to interact
with. For every chain, that will either be `SablierV2LockupLinear` or `SablierV2LockupDynamic`. In this tutorial, we
will show how to create a stream using **Linear** variant on Goerli.

Once you found the right contract, click on the address to access its explorer's page. Click on the "Contract" tab, and
then on the "Write Contract" sub-tab.

![](/img/etherscan-tutorial/01.png)

![](/img/etherscan-tutorial/02.png)

You can now connect your wallet to the interface by clicking on "Connect to Web3".

![](/img/etherscan-tutorial/03.png)

### Step 2: Fill in parameters

We will now proceed by creating our first stream. Let's go with:

- a Linear stream
- of 20,000 DAI
- starting Jan 1, 2024 ending Jan 1, 2025
- with no cliff
- and non-cancelable

As the start and end date are fixed, we'll be using the `createWithRange` method. Please note, however, that using
`createWithDurations` is possible too. To learn more about the difference between these two functions, head over
[here](/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupLinear#createwithdurations).

Open the **"createWithRange"** method, and you start filling in the stream details.

![](/img/etherscan-tutorial/04.png)

```ts
{
  sender: "0xe0ae83a6b9cc4f24d0638dc27179f311671e4e2a",
  recipient: "0xb4bf8a8475d1e8e9a2088f118ad0e2cdc2896183",
  totalAmount: 20000000000000000000000,
  asset: "0x97cb342cf2f6ecf48c1285fb8668f5a4237bf862",
  cancelable: false,
  range: [1704067200,1704067200,1735689600],
  broker: ["0x0000000000000000000000000000000000000000",0]
}
```

#### Sender

The `sender` is the wallet that will have the ability to cancel the stream, if the stream is cancelable. If it's
non-cancelable, the sender address will keep some limited capabilities (as mapped
[here](/contracts/v2/reference/access-control#overview)).

Most users will put their own wallet address there.

#### Recipient

The address you want to stream tokens to. They will be able to [withdraw](#withdrawing-from-a-stream) tokens as they
become available.

#### Total Amount

The `totalAmount` is the total amount of tokens you want to stream, **DECIMALS INCLUDED**. If the token you are looking
to stream has 18 decimals, for example, you will need to add eighteen zeros after the amount you are looking to stream.
Let's say you want to stream 20,000 DAI like in this example, you will need to fill in `20000000000000000000000`.

#### Asset

The `asset` is the contract address of the token you are looking to stream. You can get this from the
[frontend interface](#step-1-go-to-token-page) or from any other wallet/explorer. Please double check the token is
correct before continuing the process.

#### Cancelable

The `cancelable` field is there to set whether or not you want the stream to be cancelable. This can be set to either
`true` or `false`. If set to true, the stream remains cancelable - this flag can be switched off later, but never
switched back on.

#### Range

The `range` contains the start, end of cliff, and end of stream dates, respectively. They should be put in as UNIX
timestamps (represented as **seconds**). You can find a Unix timestamp converter [here](https://www.unixtimestamp.com/).

If you prefer to not have a cliff, you can simply put the same timestamp for the cliff as the start timestamp of the
stream, like in this example (a.k.a. the duration of the cliff is kept as `0`). If, however, you want to have a cliff,
fill in the end date of the cliff there, as the middle parameter (as a Unix timestamp, of course). Make sure to **not**
leave spaces between the values, including after the commas. Here is how it should look like
`[<start timestamp>,<end of cliff timestamp>,<end of stream timestamp>]`

| Ranges              |                                      |
| ------------------- | ------------------------------------ |
| 1 year, no cliff    | `[1704067200,1704067200,1735689600]` |
| 1 year, 1 day cliff | `[1704067200,1704153600,1735689600]` |

#### Broker

You can set the `broker` field to address zero and `zero` fees. Read about fees
[here](/concepts/protocol/fees#broker-fees).

:::caution

Inside tuples/arrays (the `[ ... ]` structures in the example) make sure that you:

- don't leave empty spaces after `,` (e.g. `[a,b]` is fine, but `[a, b]` isn't)
- wrap addresses between `" "`

:::

Once the data is filled, and after you double-checked, click on the "Write" button and confirm the transaction prompt in
your wallet. That's it! You are done. You can now head over to [our online app interface](https://app.sablier.com),
connect your wallet, and your stream should appear:

![](/img/etherscan-tutorial/05.png)

## Withdrawing from a Stream

### Prerequisites

To withdraw from a stream using Etherscan, you will need the Token ID of your stream's NFT. To get it without relying on
our own interface, locate the transaction in which the stream was created on Etherscan.
[Here](https://goerli.etherscan.io/tx/0xa4ed68ab0c6bbedb2720ba9f7366abc12dfffc5f139ea6d7bcb967e28abc4ecb) is what it
should look like, as an example.

Once found, you will find your Token ID between the two brackets.

:::info

You may withdraw from streams where you control the address marked as the "recipient". You may allow other parties to
withdraw on your behalf (e.g. ask them to pay for the gas fee) but you can read more about these advanced flows
[here](/contracts/v2/reference/access-control#overview).

:::

![](/img/etherscan-tutorial/06.png)

### Step 1: Go to contract page

Head over to our [deployments](/contracts/v2/deployments) list and select the contract address you want to interact
with. For every chain, that will either be `SablierV2LockupLinear` or `SablierV2LockupDynamic`. In this tutorial, we
will show how to create a stream using **Linear** variant on Goerli.

Once you found the right contract, click on the address to access its explorer's page. Click on the "Contract" tab, and
then on the "Write Contract" sub-tab.

![](/img/etherscan-tutorial/01.png)

![](/img/etherscan-tutorial/02.png)

You can now connect your wallet to the interface by clicking on "Connect to Web3".

![](/img/etherscan-tutorial/03.png)

### Step 2: Fill in parameters

Head over to the **`withdraw`** method, and fill in the data.

![](/img/etherscan-tutorial/07.png)

```ts
{
  streamId: 169,
  to: "0xb4bf8a8475d1e8e9a2088f118ad0e2cdc2896183",
  amount: 100000000000000000000,
}
```

#### Stream Id

The `streamId` is your Token ID that you previously located in the transaction in which the stream was created.

#### To

The `to (address)` field is there for the stream's recipient address. This will most likely be your own wallet , but
(assuming you are the recipient of the stream) you can also withdraw/redirect these funds to another wallet (e.g. a
different cold wallet).

#### Amount

This represents the amount of tokens that you want to withdraw, **DECIMALS INCLUDED**. If the token you are looking to
withdraw has 18 decimals, for example, you will need to add eighteen zeros after the amount you are looking to stream.
Let's say you want to withdraw 100 DAI like in this example, you will need to put in `100000000000000000000`. Oh, and
make sure that that amount has already been streamed, you cannot withdraw funds that haven't yet been streamed over to
you.

Once ready, click on the "Write" button, and confirm the transaction prompt in your wallet. You are done!

---

Apart from the main flows, you may be required to do some other actions, usually listed as prerequisites.

## ERC20 Allowances / Approvals

Before interacting directly with the Sablier V2 [contracts](/contracts/v2/deployments) to
[create a stream](#creating-a-stream) you will need to manually grant proper ERC20 allowances.

### Step 1: Go to token page

Pick a token you want to stream e.g. Ethereum's
[DAI](https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f). Using its address, visit the token page on
Etherscan (in this example we're using the one on Ethereum): `https://etherscan.io/token/<INSERT-TOKEN-ADDRESS>`

:::info

To get the address of an asset in the [app](/apps/overview) you can click on its name in the token list dialog or find
an existing stream with that token and click on the icon inside the stream circle.

![](/img/etherscan-tutorial/09.png) ![](/img/etherscan-tutorial/10.png)

:::

### Step 2: Go to `approve`

Next, look for the "Contract" tab and the "Write Contract" sub-tab.

You'll see a list of methods that can be called for that token. Pick the `approve` method (e.g.
[DAI's approve](https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f#writeContract#F1)). Most ERC20
approve methods will contain two fields:

1. The spender (sometimes labeled as `usr` _... yes DAI, we're looking at you_).
2. The amount (sometimes labeled as `wad`)

:::info

Some tokens like [USDC](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48?a=#writeProxyContract) or
[AAVE](https://etherscan.io/token/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9?a=#writeProxyContract) are upgradeable and
use a proxy pattern. For these you have to search for the "Write as Proxy" tab.

:::

### Step 3: Send transaction

For the purpose of creating a **Linear** stream with Sablier V2, the spender will be the
[SablierV2LockupLinear](/contracts/v2/deployments#core) contract.

As for the amount, you'll have to pad it with the right number of decimals. For DAI (18 decimals) a value of `100` will
turn into `100 * 1e18` (100 followed by 18 zeroes), while for USDC, a value of `100` transforms into `100 * 100000000`
(100 followed by 8 zeroes). Same system applies to the total amounts when creating the stream (see
[section](#total-amount)).

```ts
{
  spender: "0xB10daee1FCF62243aE27776D7a92D39dC8740f95",
  amount: 100000000000000000000
}
```

![](/img/etherscan-tutorial/11.png)

Before clicking on the "Write" button to submit your transactions (and update the allowance) make sure to connect your
wallet to the interface by clicking on "Connect to Web3".
