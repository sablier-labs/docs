---
id: "errors"
sidebar_position: 3
title: "Errors"
---

[Git Source](https://github.com/sablier-labs/solsab/blob/main/programs/merkle_instant/src/utils/errors.rs)

### CampaignExpired

**Message log:** Campaign has expired!

| Name            | Code Num | Code Hex |
| --------------- | :------: | :------: |
| CampaignExpired |   6000   |  0x1770  |

### InvalidMerkleProof

**Message log:** Invalid Merkle proof!

| Name               | Code Num | Code Hex |
| ------------------ | :------: | :------: |
| InvalidMerkleProof |   6001   |  0x1771  |

### CampaignNotStarted

**Message log:** Campaign has not started yet!

| Name               | Code Num | Code Hex |
| ------------------ | :------: | :------: |
| CampaignNotStarted |   6002   |  0x1772  |

### ClawbackNotAllowed

**Message log:** Clawback not allowed past the grace period and before campaign expiration!

| Name               | Code Num | Code Hex |
| ------------------ | :------: | :------: |
| ClawbackNotAllowed |   6003   |  0x1773  |

### CantCollectZeroFees

**Message log:** Can't collect zero fees!

| Name                | Code Num | Code Hex |
| ------------------- | :------: | :------: |
| CantCollectZeroFees |   6004   |  0x1774  |
