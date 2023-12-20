---
id: "deployments"
sidebar_position: 2
title: "Deployment Addresses"
toc_max_heading_level: 2
---

This document contains the deployment addresses for the V2.1 release of [@sablier/v2-core][v2-core] and
[@sablier/v2-periphery][v2-periphery].

[v2-core]: https://npmjs.com/package/@sablier/v2-core
[v2-periphery]: https://npmjs.com/package/@sablier/v2-periphery

A few noteworthy details about the deployments:

- The addresses are final
- All LockupLinear and LockupDynamic contracts are non-upgradeable (see [Governance](/concepts/governance))
- The source code is verified on Etherscan across all chains

:::info

Came here looking for the V2.0 deployments? [Click here](/contracts/v2/deployments/v2.0).

Or maybe you're looking for V1? [Click here](/contracts/v1/deployments).

:::

## Mainnet

### Core

| Contract               | Address                                                                                                               | Deployment                                                                          |
| :--------------------- | :-------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0xAFb979d9afAd1aD27C5eFf4E27226E3AB9e5dCC9](https://etherscan.io/address/0xAFb979d9afAd1aD27C5eFf4E27226E3AB9e5dCC9) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2LockupDynamic | [0x7CC7e125d83A581ff438608490Cc0f7bDff79127](https://etherscan.io/address/0x7CC7e125d83A581ff438608490Cc0f7bDff79127) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2NFTDescriptor | [0x23eD5DA55AF4286c0dE55fAcb414dEE2e317F4CB](https://etherscan.io/address/0x23eD5DA55AF4286c0dE55fAcb414dEE2e317F4CB) | [core-v1.1.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.1) |
| SablierV2Comptroller   | [0xC3Be6BffAeab7B297c03383B4254aa3Af2b9a5BA](https://etherscan.io/address/0xC3Be6BffAeab7B297c03383B4254aa3Af2b9a5BA) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract                       | Address                                                                                                               | Deployment                                                                                    |
| :----------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Batch                 | [0xEa07DdBBeA804E7fe66b958329F8Fa5cDA95Bd55](https://etherscan.io/address/0xEa07DdBBeA804E7fe66b958329F8Fa5cDA95Bd55) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |
| SablierV2MerkleStreamerFactory | [0x1A272b596b10f02931480BC7a3617db4a8d154E3](https://etherscan.io/address/0x1A272b596b10f02931480BC7a3617db4a8d154E3) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |

## Arbitrum One

### Core

| Contract               | Address                                                                                                              | Deployment                                                                          |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0xFDD9d122B451F549f48c4942c6fa6646D849e8C1](https://arbiscan.io/address/0xFDD9d122B451F549f48c4942c6fa6646D849e8C1) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2LockupDynamic | [0xf390cE6f54e4dc7C5A5f7f8689062b7591F7111d](https://arbiscan.io/address/0xf390cE6f54e4dc7C5A5f7f8689062b7591F7111d) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2NFTDescriptor | [0x2fb103fC853b2F5022a840091ab1cDf5172E7cfa](https://arbiscan.io/address/0x2fb103fC853b2F5022a840091ab1cDf5172E7cfa) | [core-v1.1.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.1) |
| SablierV2Comptroller   | [0x17Ec73692F0aDf7E7C554822FBEAACB4BE781762](https://arbiscan.io/address/0x17Ec73692F0aDf7E7C554822FBEAACB4BE781762) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract                       | Address                                                                                                              | Deployment                                                                                    |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Batch                 | [0xAFd1434296e29a0711E24014656158055F00784c](https://arbiscan.io/address/0xAFd1434296e29a0711E24014656158055F00784c) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |
| SablierV2MerkleStreamerFactory | [0x237400eF5a41886a75B0e036228221Df075b3B80](https://arbiscan.io/address/0x237400eF5a41886a75B0e036228221Df075b3B80) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |

## Base

### Core

| Contract               | Address                                                                                                               | Deployment                                                                          |
| :--------------------- | :-------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0xFCF737582d167c7D20A336532eb8BCcA8CF8e350](https://basescan.org/address/0xFCF737582d167c7D20A336532eb8BCcA8CF8e350) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2LockupDynamic | [0x461E13056a3a3265CEF4c593F01b2e960755dE91](https://basescan.org/address/0x461E13056a3a3265CEF4c593F01b2e960755dE91) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2NFTDescriptor | [0x67e0a126b695DBA35128860cd61926B90C420Ceb](https://basescan.org/address/0x67e0a126b695DBA35128860cd61926B90C420Ceb) | [core-v1.1.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.1) |
| SablierV2Comptroller   | [0x7Faaedd40B1385C118cA7432952D9DC6b5CbC49e](https://basescan.org/address/0x7Faaedd40B1385C118cA7432952D9DC6b5CbC49e) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract                       | Address                                                                                                               | Deployment                                                                                    |
| :----------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Batch                 | [0x94E596EEd73b4e3171c067f05A87AB0268cA993c](https://basescan.org/address/0x94E596EEd73b4e3171c067f05A87AB0268cA993c) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |
| SablierV2MerkleStreamerFactory | [0x5545c8E7c3E1F74aDc98e518F2E8D23A002C4412](https://basescan.org/address/0x5545c8E7c3E1F74aDc98e518F2E8D23A002C4412) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |

## BNB Smart Chain

### Core

| Contract               | Address                                                                                                              | Deployment                                                                          |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0x14c35E126d75234a90c9fb185BF8ad3eDB6A90D2](https://bscscan.com/address/0x14c35E126d75234a90c9fb185BF8ad3eDB6A90D2) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2LockupDynamic | [0xf900c5E3aA95B59Cc976e6bc9c0998618729a5fa](https://bscscan.com/address/0xf900c5E3aA95B59Cc976e6bc9c0998618729a5fa) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2NFTDescriptor | [0xEcAfcF09c23057210cB6470eB5D0FD8Bafd1755F](https://bscscan.com/address/0xEcAfcF09c23057210cB6470eB5D0FD8Bafd1755F) | [core-v1.1.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.1) |
| SablierV2Comptroller   | [0x33511f69A784Fd958E6713aCaC7c9dCF1A5578E8](https://bscscan.com/address/0x33511f69A784Fd958E6713aCaC7c9dCF1A5578E8) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract                       | Address                                                                                                              | Deployment                                                                                    |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Batch                 | [0x2E30a2ae6565Db78C06C28dE937F668597c80a1c](https://bscscan.com/address/0x2E30a2ae6565Db78C06C28dE937F668597c80a1c) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |
| SablierV2MerkleStreamerFactory | [0x434D73465aAc4125d204A6637eB6C579d8D69f48](https://bscscan.com/address/0x434D73465aAc4125d204A6637eB6C579d8D69f48) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |

## Gnosis

### Core

| Contract               | Address                                                                                                                | Deployment                                                                          |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0xce49854a647a1723e8Fb7CC3D190CAB29A44aB48](https://gnosisscan.io/address/0xce49854a647a1723e8Fb7CC3D190CAB29A44aB48) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2LockupDynamic | [0x1DF83C7682080B0f0c26a20C6C9CB8623e0Df24E](https://gnosisscan.io/address/0x1DF83C7682080B0f0c26a20C6C9CB8623e0Df24E) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2NFTDescriptor | [0x01dbFE22205d8B109959e2Be02d0095379309eed](https://gnosisscan.io/address/0x01dbFE22205d8B109959e2Be02d0095379309eed) | [core-v1.1.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.1) |
| SablierV2Comptroller   | [0x73962c44c0fB4cC5e4545FB91732a5c5e87F55C2](https://gnosisscan.io/address/0x73962c44c0fB4cC5e4545FB91732a5c5e87F55C2) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract                       | Address                                                                                                                | Deployment                                                                                    |
| :----------------------------- | :--------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Batch                 | [0xBd9DDbC55B85FF6Dc0b76E9EFdCd2547Ab482501](https://gnosisscan.io/address/0xBd9DDbC55B85FF6Dc0b76E9EFdCd2547Ab482501) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |
| SablierV2MerkleStreamerFactory | [0x777F66477FF83aBabADf39a3F22A8CC3AEE43765](https://gnosisscan.io/address/0x777F66477FF83aBabADf39a3F22A8CC3AEE43765) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |

## Optimism

### Core

| Contract               | Address                                                                                                                          | Deployment                                                                          |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0x4b45090152a5731b5bc71b5baF71E60e05B33867](https://optimistic.etherscan.io/address/0x4b45090152a5731b5bc71b5baF71E60e05B33867) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2LockupDynamic | [0xd6920c1094eABC4b71f3dC411A1566f64f4c206e](https://optimistic.etherscan.io/address/0xd6920c1094eABC4b71f3dC411A1566f64f4c206e) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2NFTDescriptor | [0xF5050c04425E639C647F5ED632218b16ce96694d](https://optimistic.etherscan.io/address/0xF5050c04425E639C647F5ED632218b16ce96694d) | [core-v1.1.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.1) |
| SablierV2Comptroller   | [0x1EECb6e6EaE6a1eD1CCB4323F3a146A7C5443A10](https://optimistic.etherscan.io/address/0x1EECb6e6EaE6a1eD1CCB4323F3a146A7C5443A10) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract                       | Address                                                                                                                          | Deployment                                                                                    |
| :----------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Batch                 | [0x8145429538dDBdDc4099B2bAfd24DD8958fa03b8](https://optimistic.etherscan.io/address/0x8145429538dDBdDc4099B2bAfd24DD8958fa03b8) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |
| SablierV2MerkleStreamerFactory | [0x044EC80FbeC40f0eE7E7b3856828170971796C19](https://optimistic.etherscan.io/address/0x044EC80FbeC40f0eE7E7b3856828170971796C19) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |

## Polygon

### Core

| Contract               | Address                                                                                                                  | Deployment                                                                          |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0x5f0e1dea4A635976ef51eC2a2ED41490d1eBa003](https://polygonscan.com/address/0x5f0e1dea4A635976ef51eC2a2ED41490d1eBa003) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2LockupDynamic | [0xB194c7278C627D52E440316b74C5F24FC70c1565](https://polygonscan.com/address/0xB194c7278C627D52E440316b74C5F24FC70c1565) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2NFTDescriptor | [0x8683da9DF8c5c3528e8251a5764EC7DAc7264795](https://polygonscan.com/address/0x8683da9DF8c5c3528e8251a5764EC7DAc7264795) | [core-v1.1.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.1) |
| SablierV2Comptroller   | [0x9761692EDf10F5F2A69f0150e2fd50dcecf05F2E](https://polygonscan.com/address/0x9761692EDf10F5F2A69f0150e2fd50dcecf05F2E) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract                       | Address                                                                                                                  | Deployment                                                                                    |
| :----------------------------- | :----------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Batch                 | [0x5865C73789C4496665eDE1CAF018dc52ac248598](https://polygonscan.com/address/0x5865C73789C4496665eDE1CAF018dc52ac248598) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |
| SablierV2MerkleStreamerFactory | [0xF4906225e783fb8977410BDBFb960caBed6C2EF4](https://polygonscan.com/address/0xF4906225e783fb8977410BDBFb960caBed6C2EF4) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |

## Scroll

### Core

| Contract               | Address                                                                                                                 | Deployment                                                                          |
| :--------------------- | :---------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0x57e14AB4DAd920548899d86B54AD47Ea27F00987](https://scrollscan.com/address/0x57e14AB4DAd920548899d86B54AD47Ea27F00987) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2LockupDynamic | [0xAaff2D11f9e7Cd2A9cDC674931fAC0358a165995](https://scrollscan.com/address/0xAaff2D11f9e7Cd2A9cDC674931fAC0358a165995) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2NFTDescriptor | [0xB71440B85172332E8B768e85EdBfdb34CB457c1c](https://scrollscan.com/address/0xB71440B85172332E8B768e85EdBfdb34CB457c1c) | [core-v1.1.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.1) |
| SablierV2Comptroller   | [0x859708495E3B3c61Bbe19e6E3E1F41dE3A5C5C5b](https://scrollscan.com/address/0x859708495E3B3c61Bbe19e6E3E1F41dE3A5C5C5b) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract                       | Address                                                                                                                 | Deployment                                                                                    |
| :----------------------------- | :---------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Batch                 | [0xD18faa233E02d41EDFFdb64f20281dE0592FA3b5](https://scrollscan.com/address/0xD18faa233E02d41EDFFdb64f20281dE0592FA3b5) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |
| SablierV2MerkleStreamerFactory | [0xb3ade5463000E6c0D376e7d7570f372eBf98BDAf](https://scrollscan.com/address/0xb3ade5463000E6c0D376e7d7570f372eBf98BDAf) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |

## Arbitrum Sepolia

### Core

| Contract               | Address                                                                                                                      | Deployment                                                                          |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0x483bdd560dE53DC20f72dC66ACdB622C5075de34](https://sepolia.arbiscan.io/address/0x483bdd560dE53DC20f72dC66ACdB622C5075de34) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2LockupDynamic | [0x8c8102b92B1f31cC304A085D490796f4DfdF7aF3](https://sepolia.arbiscan.io/address/0x8c8102b92B1f31cC304A085D490796f4DfdF7aF3) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2NFTDescriptor | [0x593050f0360518C3A4F11c32Eb936146e1096FD1](https://sepolia.arbiscan.io/address/0x593050f0360518C3A4F11c32Eb936146e1096FD1) | [core-v1.1.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.1) |
| SablierV2Comptroller   | [0xA6A0cfA3442053fbB516D55205A749Ef2D33aed9](https://sepolia.arbiscan.io/address/0xA6A0cfA3442053fbB516D55205A749Ef2D33aed9) | [core-v1.1.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract                       | Address                                                                                                                      | Deployment                                                                                    |
| :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Batch                 | [0x72D921E579aB7FC5D19CD398B6be24d626Ccb6e7](https://sepolia.arbiscan.io/address/0x72D921E579aB7FC5D19CD398B6be24d626Ccb6e7) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |
| SablierV2MerkleStreamerFactory | [0xcc87b1A4de285832f226BD585bd54a2184D32105](https://sepolia.arbiscan.io/address/0xcc87b1A4de285832f226BD585bd54a2184D32105) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |

## Sepolia

### Core

| Contract               | Address                                                                                                                       | Deployment                                                                          |
| :--------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0x7a43F8a888fa15e68C103E18b0439Eb1e98E4301](https://sepolia.etherscan.io/address/0x7a43F8a888fa15e68C103E18b0439Eb1e98E4301) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2LockupDynamic | [0xc9940AD8F43aAD8e8f33A4D5dbBf0a8F7FF4429A](https://sepolia.etherscan.io/address/0xc9940AD8F43aAD8e8f33A4D5dbBf0a8F7FF4429A) | [core-v1.1.2](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.2) |
| SablierV2NFTDescriptor | [0xE8fFEbA8963CD9302ffD39c704dc2c027128D36F](https://sepolia.etherscan.io/address/0xE8fFEbA8963CD9302ffD39c704dc2c027128D36F) | [core-v1.1.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.1.1) |
| SablierV2Comptroller   | [0x2006d43E65e66C5FF20254836E63947FA8bAaD68](https://sepolia.etherscan.io/address/0x2006d43E65e66C5FF20254836E63947FA8bAaD68) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract                       | Address                                                                                                                       | Deployment                                                                                    |
| :----------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Batch                 | [0xd2569DC4A58dfE85d807Dffb976dbC0a3bf0B0Fb](https://sepolia.etherscan.io/address/0xd2569DC4A58dfE85d807Dffb976dbC0a3bf0B0Fb) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |
| SablierV2MerkleStreamerFactory | [0xBacC1d151A78eeD71D504f701c25E8739DC0262D](https://sepolia.etherscan.io/address/0xBacC1d151A78eeD71D504f701c25E8739DC0262D) | [periphery-v1.1.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.1.0) |
