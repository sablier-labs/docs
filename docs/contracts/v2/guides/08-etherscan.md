---
draft: false
id: "etherscan"
sidebar_position: 8
title: "Manual Protocol Interactions Through Etherscan"
---

Just like with any other truly open protocol, Sablier V2 can be interacted with directly through an explorer like
Etherscan.

In this guide, we will go over how to create a stream and how to withdraw from a stream by manually interacting with the
Sablier V2 contracts on Etherscan.

## Creating a stream

First step is to head over to our [deployments page](/contracts/v2/deployments) and select the contract you want to
interact with. For every chain, that will either be `SablierV2LockupLinear` or `SablierV2LockupDynamic`. In this
tutorial, we will show how to create a stream using `SablierV2LockupLinear` on Goerli, but feel free to pick
`SablierV2LockupDynamic`, or another chain.

Once you found the right contract, click on the address to access its explorer's page, click on the "Contract" button,
and then on the "Write Contract" button.

![](/img/etherscan-tutorial/01.png)

![](/img/etherscan-tutorial/02.png)

You can now connect your wallet to the interface by clicking on "Connect to Web3".

![](/img/etherscan-tutorial/03.png)

We will now proceed by creating a 1-year long linear stream without a cliff, using the `createWithRange` function.
Please note, however, that using the `createWithDurations` functions is possible too. To learn more about the difference
between these two functions, head over
[here](/contracts/v2/reference/core/interfaces/interface.ISablierV2LockupLinear#createwithdurations).

Open the `createWithRange` section, and you can now start putting in the stream settings.

![](/img/etherscan-tutorial/04.png)

- The `sender` is the wallet that will have the ability to cancel the stream, if the stream is cancelable. If it's
  uncancelable, the sender address is just there for purely informative purposes. Most users will put their own wallet
  address there.
- The `recipient` is the address you want to stream tokens to.
- The `totalAmount` is the total amount of tokens you want to stream, **DECIMALS INCLUDED**. If the token you are
  looking to stream has 18 decimals, for example, you will need to add eighteen zeros after the amount you are looking
  to stream. Let's say you want to stream 20,000 DAI like in this example, you will need to put in
  `20000000000000000000000`.
- The `asset` is the contract address of the token you are looking to stream.
- The `cancelable` field is there to set whether or not you want the stream to be cancelable. This can be set to either
  `true` or `false`.
- The `range` contains the start, end of cliff, and end of stream dates, respectively. They should be put in as Unix
  timestamps. You can find a Unix timestamp converter [here](https://www.unixtimestamp.com/). If you prefer to not have
  a cliff, you can simply put the same timestamp for the cliff as the start timestamp of the stream, like in this
  example. If, however, you want to have a cliff, put in the end date of the cliff there (as a Unix timestamp, of
  course). Make sure to **not** leave spaces between the values, including after the commas. Here is how it should look
  like `[<start timestamp>,<end of cliff timestamp>,<end of stream timestamp>]`
- You can set the `broker` field as `["0x0000000000000000000000000000000000000000",0]`

Once the data is put in, and after you double-checked, click on the "Write" button and confirm the transaction prompt in
your wallet. That's it! You are done. You can now head over to [our online app interface](https://app.sablier.com),
connect your wallet, and your stream should appear:

![](/img/etherscan-tutorial/05.png)

## Withdrawing from a stream

To withdraw from a stream using Etherscan, you will need the Token ID of your stream's NFT. To get it without relying on
our own interface, locate the transaction in which the stream was created on Etherscan.
[Here](https://goerli.etherscan.io/tx/0xa4ed68ab0c6bbedb2720ba9f7366abc12dfffc5f139ea6d7bcb967e28abc4ecb) is what it
should look like, as an example.

Once found, you will find your Token ID between the two brackets.

![](/img/etherscan-tutorial/06.png)

First step is to head over to our [deployments page](/contracts/v2/deployments) and select the contract you want to
interact with. For every chain, that will either be `SablierV2LockupLinear` or `SablierV2LockupDynamic`. In this
tutorial, we will show how to create a stream using `SablierV2LockupLinear` on Goerli, but feel free to pick
`SablierV2LockupDynamic`, or another chain.

Once you found the right contract, click on the address to access its explorer's page, click on the "Contract" button,
and then on the "Write Contract" button.

![](/img/etherscan-tutorial/01.png)

![](/img/etherscan-tutorial/02.png)

You can now connect your wallet to the interface by clicking on "Connect to Web3".

![](/img/etherscan-tutorial/03.png)

Head over to the `withdraw` section, and put in the data.

![](/img/etherscan-tutorial/07.png)

- The `streamId` is your Token ID that you previously located in the transaction in which the stream was created.
- The `to (address)` field is there for the stream's recipient address. This will most likely be your own wallet
  assuming you are the recipient of the stream.
- The `amount` is the amount of tokens that you want to withdraw, **DECIMALS INCLUDED**. If the token you are looking to
  withdraw has 18 decimals, for example, you will need to add eighteen zeros after the amount you are looking to stream.
  Let's say you want to withdraw 100 DAI like in this example, you will need to put in `100000000000000000000`. Oh, and
  make sure that that amount has already been streamed, you cannot withdraw funds that haven't yet been streamed over to
  you.

Once ready, click on the "Write" button, and confirm the transaction prompt in your wallet. You are done!
