---
id: "fees"
sidebar_position: 5
title: "Fees"
---

There three types of fees in Sablier v2.0: the protocol fee, the broker fee, and the flash loan fee.

### Protocol Fee

The protocol fee is a fee that can be adjusted by the admin multisig (which is currently controlled by the Sablier team)
and is set for specific tokens. Each time a stream is created using the token the fee is set for, a fee is charged on
the total amount being streamed.

**There is currently protocol fee active.**

### Broker fee

The broker fee is a special type of fee made for frontends looking to integrate the Sablier protocol. It allows frontend
operators to charge a fee on every stream created from their frontend.

**The official [Sablier interface](https://app.sablier.com) does not charge any broker fee.**

### Flash loan fee

Sablier v2 allows anyone to create flash loans for assets which have been approved for floash loans in the protocol. The
flash loan fee is a fee charged on every flash loan made using that specific token.

**There is currently no flash loan fee active.**
