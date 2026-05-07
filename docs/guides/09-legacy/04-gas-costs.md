---
id: gas-costs
title: Gas Costs
sidebar_position: 4
---

The gas usage of Sablier Legacy is not deterministic and varies by user. Calls to third-party contracts, such as
[ERC-20](https://eips.ethereum.org/EIPS/eip-20) tokens, may use an arbitrary amount of gas. The values in the table
below are rough estimations - you shouldn't take them for granted:

| Action               | Typical Gas Cost |
| -------------------- | ---------------- |
| Create stream        | ~240K            |
| Withdraw from stream | ~80K             |
| Cancel stream        | ~90K             |
