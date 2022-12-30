---
id: non-constant-functions
title: Non-Constant Functions
sidebar_position: 4
---

:::caution
v1.0 and v1.1 are outdated versions of the battle-tested Sablier protocol, and are both no longer maintained. They also both have a set of [known issues](/protocol/technical-reference-v1/known-issues) which were fixed in Sablier v2.

Unless there is a very specific reason, it's highly advised to use the latest version of the protocol instead.
:::

## Create stream

The create stream function transfers the tokens into the Sablier smart contract, stamping the rules of the stream into
the blockchain. As soon as the chain clock hits the start time of the stream, a small portion of tokens starts getting
"transferred" from the sender to the recipient once every second.

We used scare quotes because what actually happens is not a transfer, but rather an abstract allocation of funds. Every
second, the in-contract allowance of the sender decreases. while the recipient's allocation increases, even if the tokens are not transferred
to the recipient. Actually transferring the tokens would be excessively expensive in terms of gas costs.

```solidity
function createStream(address recipient, uint256 deposit, address tokenAddress, uint256 startTime, uint256 stopTime) returns (uint256)
```

- `msg.sender`: The account who funds the stream, and pay the recipient in real-time.
- `recipient`: The account toward which the tokens will be streamed.
- `deposit`: The amount of tokens to be streamed, in units of the streaming currency.
- `tokenAddress`: The address of the ERC-20 token to use as streaming currency.
- `startTime`: The unix timestamp for when the stream starts, in seconds.
- `stopTime`: The unix timestamp for when the stream stops, in seconds.
- `RETURN`: The stream's id as an unsigned integer on success, reverts on error.

:::caution
Before creating a stream, users must first [approve](https://eips.ethereum.org/EIPS/eip-20#approve) the Sablier contract to access their token balance.
:::

:::warning
The transaction must be processed by the Ethereum blockchain before the start time of the stream, or otherwise the contract reverts with a "start time before block.timestamp" message.
:::

### The Deposit Gotcha

The deposit must be a multiple of the difference between the stop time and the start time, or otherwise the contract
reverts with a "deposit not multiple of time delta" message. In practice, this means that you may not able to always use exact
amounts like 3,000. You may have to divide the fixed deposit by the time delta and subtract the remainder from the
initial number. Thus you may have to stream a value that is very, very close to the fixed deposit, but not quite it.

For example, if:

- The token has 18 decimals
- The time delta is 2592000 (30 days)

You will have to stream 2999999999999998944000 instead of 3000000000000000000000. The former divides evenly by 2592000,
but the latter doesn't.

### Solidity

```solidity
Sablier sablier = Sablier(0xabcd...); // get a handle for the Sablier contract
address recipient = 0xcdef...;
uint256 deposit = 2999999999999998944000; // almost 3,000, but not quite
uint256 startTime = block.timestamp + 3600; // 1 hour from now
uint256 stopTime = block.timestamp + 2592000 + 3600; // 30 days and 1 hour from now

Erc20 token = Erc20(0xcafe...); // get a handle for the token contract
token.approve(address(sablier), deposit); // approve the transfer

// the stream id is needed later to withdraw from or cancel the stream
uint256 streamId = sablier.createStream(recipient, deposit, address(token), startTime, stopTime);
```

### Ethers.js

```javascript
const sablier = new ethers.Contract(0xabcd..., sablierABI, signerOrProvider); // get a handle for the Sablier contract
const recipient = 0xcdef...;
const deposit = "2999999999999998944000"; // almost 3,000, but not quite
const now = Math.round(new Date().getTime() / 1000); // get seconds since unix epoch
const startTime = now + 3600; // 1 hour from now
const stopTime = now + 2592000 + 3600; // 30 days and 1 hour from now

const token = new ethers.Contract(0xcafe..., erc20ABI, signerOrProvider); // get a handle for the token contract
const approveTx = await token.approve(sablier.address, deposit); // approve the transfer
await approveTx.wait();

const createStreamTx = await sablier.createStream(recipient, deposit, token.address, startTime, stopTime);
await createStreamTx.wait();
```

---

## Withdraw from Stream

The withdraw from stream function transfers an amount of tokens from the Sablier contract to the recipient's account. The
withdrawn amount must be less than or equal to the available [balance](./constant-functions#balance-of). This function can only be
called by the sender or the recipient of the stream, not any third-party.

```solidity
function withdrawFromStream(uint256 streamId, uint256 amount) returns (bool);
```

- `streamId`: The id of the stream to withdraw tokens from.
- `amount`: The amount of tokens to withdraw.
- `RETURN`: True on success, reverts on error.

:::info
To be able to call this function, you have to wait until the clock goes past the start time of the stream.
:::

### Solidity

```solidity
Sablier sablier = Sablier(0xabcd...);
uint256 streamId = 42;
uint256 amount = 100;
require(sablier.withdrawFromStream(streamId, amount), "something went wrong");‌
```

### Ethers.js

```javascript
‌const sablier = new ethers.Contract(0xabcd..., sablierABI, signerOrProvider);
const streamId = 42;
const amount = 100;
const withdrawFromStreamTx = await sablier.withdrawFromStream(streamId, amount);
await withdrawFromStreamTx.wait();
```

---

## Cancel Stream

The cancel stream function revokes a previously created stream and returns the tokens back to the sender and/or the
recipient. If the chain clock did not hit the start time, all the tokens is returned to the sender. If the chain clock did go
past the start time, but not past the stop time, the sender and the recipient each get a pro-rata amount. Finally, if
the chain clock went past the stop time, all the tokens goes the recipient. This function can be called only by the sender.

```solidity
function cancelStream(uint256 streamId) returns (bool);
```

- `streamId`: The id of the stream to cancel.
- `RETURN`: True on success, reverts on error.

### Solidity

```solidity
Sablier sablier = Sablier(0xabcd...);
uint256 streamId = 42;
require(sablier.cancelStream(streamId), "something went wrong");
```

### Ethers.js

```javascript
const sablier = new ethers.Contract(0xabcd..., sablierABI, signerOrProvider);
const streamId = 42;
const cancelStreamTx = await sablier.cancelStream(streamId);
await cancelStreamTx.wait();
```
