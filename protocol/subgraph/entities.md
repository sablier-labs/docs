---
sidebar_position: 2
title: Entities
---

- [`Token`](#token)
- [`Cancellation`](#cancellation)
- [`Stream`](#stream)
- [`StreamToSalary`](#streamtosalary)
- [`StreamTransaction`](#streamtransaction)
- [`Withdrawal`](#withdrawal)

## Token

Description: Generic type for ERC-20 tokens.

| Field    | Type   | Description          |
| -------- | ------ | -------------------- |
| id       | ID!    | The contract address |
| decimals | Int    | The ERC-20 decimals  |
| name     | String | The ERC-20 name      |
| symbol   | String | The ERC-20 symbol    |

## Cancellation

Description: Generic type for Sablier cancellations

| Field            | Type    | Description                                    |
| ---------------- | ------- | ---------------------------------------------- |
| id               | ID!     | The same as the stream id                      |
| recipientBalance | BigInt! | Amount of tokens the recipient was distributed |
| senderBalance    | BigInt! | Amount of tokens the sender was distributed    |
| timestamp        | BigInt! | The time when the cancellation was made        |
| token            | Token   | The token used for payment                     |
| txhash           | String! | Transaction hash                               |

## Stream

Description: Generic type for Sablier streams.

| Field         | Type                                              | Description                                                         |
| ------------- | ------------------------------------------------- | ------------------------------------------------------------------- |
| cancellation  | Cancellation                                      | Details about cancellation time and the distributed amounts         |
| deposit       | BigInt!                                           | The address of the recipient account                                |
| id            | ID!                                               | The salary id in v1.0.0 and the actual stream id in v1.1.0          |
| ratePerSecond | BigInt!                                           | How much is being streamed every second                             |
| recipient     | Bytes!                                            | The address of the recipient account                                |
| sender        | Bytes!                                            | The address of the sender account, who created the streamed         |
| startTime     | BigInt!                                           | The time when the stream commences                                  |
| stopTime      | BigInt!                                           | The time when the stream stops                                      |
| timestamp     | BigInt!                                           | The time when the stream was created                                |
| token         | Token                                             | The token used for payment                                          |
| txs           | [StreamTransaction!]@derivedFrom(field: "stream") | Exhaustive list of all transactions that interacted with the stream |
| withdrawals   | [Withdrawal!]                                     | Exhaustive list of all withdrawals made from the stream             |

## StreamToSalary

Description: Needed for retroactively indexing cancellations and withdrawals for v1.0.0 streams.

| Field    | Type    | Description   |
| -------- | ------- | ------------- |
| id       | ID!     | The stream id |
| salaryId | BigInt! | The salary id |

## StreamTransaction

Description: Transaction that interacted with a stream.

| Field     | Type    | Description                                        |
| --------- | ------- | -------------------------------------------------- |
| id        | ID!     | Transaction hash concatenated with log index       |
| block     | Int!    | Block number                                       |
| event     | String! | The name of the event emitted                      |
| from      | Bytes!  | The caller, or msg.sender                          |
| stream    | Stream! | The stream entity associated with this transaction |
| timestamp | BigInt! | Block timestamp                                    |
| to        | Bytes   | The contract address                               |
| txhash    | String! | Transaction hash                                   |

## Withdrawal

Description: Generic type for Sablier withdrawals.

| Field     | Type    | Description                                       |
| --------- | ------- | ------------------------------------------------- |
| id        | ID!     | Transaction hash concatenated with log index      |
| amount    | BigInt! | How many tokens were withdrawn                    |
| stream    | Stream! | The stream entity associated with this withdrawal |
| timestamp | BigInt! | The time when the cancellation was made           |
| txhash    | String! | Transaction hash                                  |
