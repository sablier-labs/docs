---
id: "governance"
sidebar_position: 5
title: "Governance"
---

The protocol admin is an entity with exclusive access to specific functions of the protocol. More concretely, the admin
is a multisig wallet currently in control of Sablier Labs, which has the following permissions:

| Permission              | Function                | Contract(s)                                       |
| ----------------------- | ----------------------- | ------------------------------------------------- |
| Claim Protocol Revenues | `claimProtocolRevenues` | `SablierV2LockupLinear`, `SablierV2LockupDynamic` |
| Set Comptroller         | `setComptroller`        | `SablierV2LockupLinear`, `SablierV2LockupDynamic` |
| Set NFT Descriptor      | `setNFTDescriptor`      | `SablierV2LockupLinear`, `SablierV2LockupDynamic` |
| Set Flash Fee           | `setFlashFee`           | `SablierV2Comptroller`                            |
| Set Protocol Fee        | `setProtocolFee`        | `SablierV2Comptroller`                            |
| Toggle Flash Asset      | `toggleFlashAsset`      | `SablierV2Comptroller`                            |

The comptroller is a special contract that holds configuration parameters. To learn more about the comptroller, see the
[reference](/contracts/v2/reference/core/contract.SablierV2Comptroller).

## Trustlessness

Despite having an admin, the Sablier Protocol remains trustless. This is because:

1. The protocol is permissionless, i.e. it can be freely accessed by anyone with an Internet connection.
2. The protocol is persistent, i.e. the admin cannot pause it.
3. The streaming logic is non-upgradeable, i.e. the admin cannot tamper with the streams created by users.
4. There are no escape hatches that allow the admin to withdraw funds.
5. There is a hard-coded upper limit of 10% to the fees that the admin can set.

## Governance

As a startup, Sablier has to deal with uncertainty regarding:

1. Protocol-market fit
2. Smart contract security

Attaining success in these areas is no easy feat, and as such, decentralizing the protocol's governance will not be an
initial priority.

Nonetheless, we believe that progressive decentralization is the most effective approach to scaling a smart contract
protocol. As the protocol matures, we will decentralize its governance incrementally.
