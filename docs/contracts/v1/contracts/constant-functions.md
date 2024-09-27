---
id: constant-functions
title: Constant Functions
sidebar_position: 3
---

## Get Stream

Returns all properties for the provided stream id.

```solidity
function getStream(uint256 streamId) view returns (address sender, address recipient, address tokenAddress, uint256 balance, uint256 startTime, uint256 stopTime, uint256 remainingBalance, uint256 ratePerSecond)
```

- `streamId`: The id of the stream to query.
- `RETURN`
  - `sender`: The address that created and funded the stream.
  - `recipient`: The address towards which the tokens are streamed.
  - `tokenAddress`: The address of the ERC-20 token used as streaming currency.
  - `startTime`: The unix timestamp for when the stream starts, in seconds.
  - `stopTime`: The unix timestamp for when the stream stops, in seconds.
  - `remainingBalance`: How much tokens are still allocated to this stream, in the smart contract.
  - `ratePerSecond`: How much tokens are allocated from the sender to the recipient every second.

### Solidity

```solidity
Sablier sablier = Sablier(0xabcd...);
uint256 streamId = 42;
(uint256 sender, uint256 recipient, uint256 deposit, address tokenAddress, uint256 startTime, uint256 stopTime, uint256 remainingBalance, uint256 ratePerSecond) = sablier.getStream(streamId);
```

### Ethers.js

```javascript
const sablier = new ethers.Contract(0xabcd..., sablierABI, signerOrProvider);
const streamId = 42;
const stream = await sablier.getStream(streamId);‌
```

---

## Balance Of

Returns the real-time balance of an account with regards to a specific stream.

```solidity
function balanceOf(uint256 streamId, address who) view returns (uint256)
```

- `streamId`: The id of the stream for which to query the balance.
- `who`: The address for which to query the balance.
- `RETURN`: The available balance in units of the underlying ERC-20 token.

:::info

This is the amount of tokens that can be withdrawn from the contract, not the total amount of tokens streamed. If the
contract streamed 1,000 tokens to Bob, but Bob withdrew 400 tokens already, this function will return 600 and not 1,000.

:::

### Solidity

```solidity
Sablier sablier = Sablier(0xabcd...);
uint256 streamId = 42;
uint256 senderAddress = 0xcdef...;
uint256 balance = sablier.balanceOf(streamId, senderAddress);
```

### Javascript

```javascript
const sablier = new ethers.Contract(0xabcd..., sablierABI, signerOrProvider);
const streamId = 42;
const senderAddress = 0xcdef...;
const balance = await sablier.balanceOf(streamId, senderAddress);
```

---

## Delta of

Returns either the difference between now and the start time of the stream OR between the stop time and the start time
of the stream, whichever is smaller. However, if the clock did not hit the start time of the stream, the value returned
is 0 instead.

```solidity
function deltaOf(uint256 streamId) view returns (uint256)‌
```

`streamId`: The id of the stream for which to query the delta. `RETURN`: The time delta in seconds.

### Solidity

```solidity
Sablier sablier = Sablier(0xabcd...);
uint256 streamId = 42;
uint256 delta = sablier.deltaOf(streamId);‌
```

### Ethers.js

```javascript
const sablier = new ethers.Contract(0xabcd..., sablierABI, signerOrProvider);
const streamId = 42;
const delta = await sablier.deltaOf(streamId);
```

---

## Error Table

The table below lists all possible reasons for reverting a contract call that creates, withdraws from or cancels a
stream. The "Id" column is just a counter used in this table - the smart contract does not yield error codes, just
strings.

| Number | Error                                                   | Reason                                                                                                                  |
| ------ | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 1      | stream does not exist                                   | The provided stream id does not point to a valid stream                                                                 |
| 2      | caller is not the sender or the recipient of the stream | The contract call originates from an unauthorized third-party                                                           |
| 3      | SafeERC20: low-level call failed                        | Possibly insufficient allowance, but not necessarily so                                                                 |
| 4      | stream to the zero address                              | Attempt to stream tokens to the [zero address](https://etherscan.io/address/0x0000000000000000000000000000000000000000) |
| 5      | stream to the contract itself                           | Attempt to stream tokens to the Sablier contract                                                                        |
| 6      | stream to the caller                                    | Happens when the caller attempts to stream tokens to herself                                                            |
| 7      | deposit is zero                                         | Attempt to stream 0 tokens                                                                                              |
| 8      | start time before block.timestamp                       | Tokens cannot be streamed retroactively                                                                                 |
| 9      | stop time before the start time                         | Negative streaming is not allowed                                                                                       |
| 10     | deposit smaller than time delta                         | The deposit, measured in units of the token, is smaller than the time delta                                             |
| 11     | deposit not multiple of time delta                      | The deposit has a non-zero remainder when divided by the time delta                                                     |
| 12     | amount is zero                                          | Attempt to withdraw 0 tokens                                                                                            |
| 13     | amount exceeds the available balance                    | Attempt to withdraw more tokens than the available balance                                                              |
| 14     | recipient balance calculation error                     | Happens only when streaming an absurdly high number of tokens (close to 2^256)                                          |

:::info

The contract call could revert with [no reason](https://vmexceptionwhileprocessingtransactionrevert.com/) provided. In
this case, you probably did not approve the Sablier contract to spend your token balance, although this is not
necessarily the case. Ping us on [Discord](https://discord.sablier.com) if you get stuck.

:::
