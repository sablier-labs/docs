---
id: "deployments"
sidebar_position: 2
title: "Deployment Addresses"
toc_max_heading_level: 3
---

This document contains the deployment addresses for the V2.2 release of [@sablier/v2-core][v2-core] and
[@sablier/v2-periphery][v2-periphery].

[v2-core]: https://npmjs.com/package/@sablier/v2-core/v/1.2.0
[v2-periphery]: https://npmjs.com/package/@sablier/v2-periphery/v/1.2.0

A few noteworthy details about the deployments:

- The addresses are final
- All LockupLinear, LockupDynamic, and LockupTranched contracts are non-upgradeable
- The source code is verified on Etherscan across all chains

## Previous Versions

Any updates or additional features will call for a new deployment of the protocol, due to its immutable nature.

Came here looking for the previous V2 deployments? Click below to see other versions as well as the in-app aliases
assigned under our [naming convention](/api/subgraphs/protocol/structure#identifying).

| Version                                | UI Aliases                                                       |
| -------------------------------------- | ---------------------------------------------------------------- |
| v2.2 (current)                         | LD3 (Lockup Dynamic), LL3 (Lockup Linear), LT3 (Lockup Tranched) |
| [v2.1](/contracts/v2/deployments/v2.1) | LD2 (Lockup Dynamic), LL2 (Lockup Linear)                        |
| [v2.0](/contracts/v2/deployments/v2.0) | LD (Lockup Dynamic), LL (Lockup Linear)                          |

Or maybe you're looking for V1? [Click here](/contracts/v1/deployments).

:::info

Stay up to date with any new releases by [subscribing](https://x.com/Sablier/status/1821220784661995627) to the official
Sablier repositories on Github.

:::

## Mainnets

### Ethereum Mainnet

#### Core

| Contract                | Address                                                                                                               | Deployment                                                                          |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x9DeaBf7815b42Bf4E9a03EEc35a486fF74ee7459](https://etherscan.io/address/0x9DeaBf7815b42Bf4E9a03EEc35a486fF74ee7459) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x3962f6585946823440d274aD7C719B02b49DE51E](https://etherscan.io/address/0x3962f6585946823440d274aD7C719B02b49DE51E) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0xf86B359035208e4529686A1825F2D5BeE38c28A8](https://etherscan.io/address/0xf86B359035208e4529686A1825F2D5BeE38c28A8) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0xAE32Ca14d85311A506Bb852D49bbfB315466bA26](https://etherscan.io/address/0xAE32Ca14d85311A506Bb852D49bbfB315466bA26) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                               | Deployment                                                                                    |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0xB5Ec9706C3Be9d22326D208f491E5DEef7C8d9f0](https://etherscan.io/address/0xB5Ec9706C3Be9d22326D208f491E5DEef7C8d9f0) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0xF35aB407CF28012Ba57CAF5ee2f6d6E4420253bc](https://etherscan.io/address/0xF35aB407CF28012Ba57CAF5ee2f6d6E4420253bc) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Arbitrum One

#### Core

| Contract                | Address                                                                                                              | Deployment                                                                          |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x53F5eEB133B99C6e59108F35bCC7a116da50c5ce](https://arbiscan.io/address/0x53F5eEB133B99C6e59108F35bCC7a116da50c5ce) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x05a323a4C936fed6D02134c5f0877215CD186b51](https://arbiscan.io/address/0x05a323a4C936fed6D02134c5f0877215CD186b51) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0x0dA2c7Aa93E7CD43e6b8D043Aab5b85CfDDf3818](https://arbiscan.io/address/0x0dA2c7Aa93E7CD43e6b8D043Aab5b85CfDDf3818) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0xacA12cdC4DcD7063c82E69A358549ba082463608](https://arbiscan.io/address/0xacA12cdC4DcD7063c82E69A358549ba082463608) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                              | Deployment                                                                                    |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x785Edf1e617824A78EFE76295E040B1AE06002bf](https://arbiscan.io/address/0x785Edf1e617824A78EFE76295E040B1AE06002bf) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0xc9A5a0Bc2D8E217BDbdFE7486E9E72c5c3308F01](https://arbiscan.io/address/0xc9A5a0Bc2D8E217BDbdFE7486E9E72c5c3308F01) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Avalanche

#### Core

| Contract                | Address                                                                                                               | Deployment                                                                          |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0xE3826241E5EeBB3F5fEde33F9f677047674D3FBF](https://snowtrace.io/address/0xE3826241E5EeBB3F5fEde33F9f677047674D3FBF) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0xc0bF14AfB95CA4C049BDc19E06a3531D8065F6Fd](https://snowtrace.io/address/0xc0bF14AfB95CA4C049BDc19E06a3531D8065F6Fd) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0xfA536049652BFb5f57ba8DCFbec1B2b2Dd9803D3](https://snowtrace.io/address/0xfA536049652BFb5f57ba8DCFbec1B2b2Dd9803D3) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0xcF24fb2a09227d955F8e9A12f36A26cf1ac079c6](https://snowtrace.io/address/0xcF24fb2a09227d955F8e9A12f36A26cf1ac079c6) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                               | Deployment                                                                                    |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0xaBCdF4dcDBa57a04889784A670b862540758f9E7](https://snowtrace.io/address/0xaBCdF4dcDBa57a04889784A670b862540758f9E7) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x0430ed39EA2789AcdF27b89268117EBABc8176D1](https://snowtrace.io/address/0x0430ed39EA2789AcdF27b89268117EBABc8176D1) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Base

#### Core

| Contract                | Address                                                                                                               | Deployment                                                                          |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0xF9E9eD67DD2Fab3b3ca024A2d66Fcf0764d36742](https://basescan.org/address/0xF9E9eD67DD2Fab3b3ca024A2d66Fcf0764d36742) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x4CB16D4153123A74Bc724d161050959754f378D8](https://basescan.org/address/0x4CB16D4153123A74Bc724d161050959754f378D8) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0xf4937657Ed8B3f3cB379Eed47b8818eE947BEb1e](https://basescan.org/address/0xf4937657Ed8B3f3cB379Eed47b8818eE947BEb1e) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x0fF9d05E6331A43A906fE1440E0C9D0742F475A3](https://basescan.org/address/0x0fF9d05E6331A43A906fE1440E0C9D0742F475A3) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                               | Deployment                                                                                    |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0xc1c548F980669615772dadcBfEBC29937c29481A](https://basescan.org/address/0xc1c548F980669615772dadcBfEBC29937c29481A) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x58A51E5382318EeA6065BB7721eecdF4331c0B90](https://basescan.org/address/0x58A51E5382318EeA6065BB7721eecdF4331c0B90) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Blast

#### Core

| Contract                | Address                                                                                                               | Deployment                                                                          |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear   | [0x9b1468d29b4A5869f00c92517c57f8656E928B93](https://blastscan.io/address/0x9b1468d29b4A5869f00c92517c57f8656E928B93) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupDynamic  | [0xA705DE617673e2Fe63a4Ea0E58c26897601D32A5](https://blastscan.io/address/0xA705DE617673e2Fe63a4Ea0E58c26897601D32A5) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0x91FB72e5297e2728c10FDe73BdE74A4888A68570](https://blastscan.io/address/0x91FB72e5297e2728c10FDe73BdE74A4888A68570) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x5f111b49f8f8bdb4A6001701E0D330fF52D6B370](https://blastscan.io/address/0x5f111b49f8f8bdb4A6001701E0D330fF52D6B370) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                               | Deployment                                                                                    |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0xdc988d7AD6F186ea4a236f3E61A45a7851edF84E](https://blastscan.io/address/0xdc988d7AD6F186ea4a236f3E61A45a7851edF84E) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x3aBCDDa756d069Cf3c7a17410602343966EAFf27](https://blastscan.io/address/0x3aBCDDa756d069Cf3c7a17410602343966EAFf27) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### BNB Smart Chain

#### Core

| Contract                | Address                                                                                                              | Deployment                                                                          |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0xeB6d84c585bf8AEA34F05a096D6fAA3b8477D146](https://bscscan.com/address/0xeB6d84c585bf8AEA34F05a096D6fAA3b8477D146) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x88ad3B5c62A46Df953A5d428d33D70408F53C408](https://bscscan.com/address/0x88ad3B5c62A46Df953A5d428d33D70408F53C408) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0xAb5f007b33EDDA56962A0fC428B15D544EA46591](https://bscscan.com/address/0xAb5f007b33EDDA56962A0fC428B15D544EA46591) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x27641f29b012d0d523EB5943011148c42c98e7F1](https://bscscan.com/address/0x27641f29b012d0d523EB5943011148c42c98e7F1) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                              | Deployment                                                                                    |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x70998557980CB6E8E63c46810081262B6c343051](https://bscscan.com/address/0x70998557980CB6E8E63c46810081262B6c343051) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x96Aa12809CAC29Bba4944fEca1dFDC8e1704e6c1](https://bscscan.com/address/0x96Aa12809CAC29Bba4944fEca1dFDC8e1704e6c1) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Gnosis

#### Core

| Contract                | Address                                                                                                                | Deployment                                                                          |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x555eb55cbc477Aebbe5652D25d0fEA04052d3971](https://gnosisscan.io/address/0x555eb55cbc477Aebbe5652D25d0fEA04052d3971) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0xf1cAeB104AB29271463259335357D57772C90758](https://gnosisscan.io/address/0xf1cAeB104AB29271463259335357D57772C90758) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0x59A4B7255A5D01247837600e7828A6F77f664b34](https://gnosisscan.io/address/0x59A4B7255A5D01247837600e7828A6F77f664b34) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0xA0B5C851E3E9fED83f387f4D8847DA398Da4A8E2](https://gnosisscan.io/address/0xA0B5C851E3E9fED83f387f4D8847DA398Da4A8E2) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                | Deployment                                                                                    |
| :--------------------------- | :--------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x0F324E5CB01ac98b2883c8ac4231aCA7EfD3e750](https://gnosisscan.io/address/0x0F324E5CB01ac98b2883c8ac4231aCA7EfD3e750) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x5f12318fc6cCa518A950e2Ee16063a6317C2a9Ef](https://gnosisscan.io/address/0x5f12318fc6cCa518A950e2Ee16063a6317C2a9Ef) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### IoTeX

#### Core

| Contract                | Address                                                                                                               | Deployment                                                                          |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x6FcAB41e3b62d05aB4fC729586CB06Af2a2662D0](https://iotexscan.io/address/0x6FcAB41e3b62d05aB4fC729586CB06Af2a2662D0) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x84f092cf4d7d36c2d4987f672df81a39200a7146](https://iotexscan.io/address/0x84f092cf4d7d36c2d4987f672df81a39200a7146) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0x179536f3289fb50076968b339C7EF0Dc0B38E3AF](https://iotexscan.io/address/0x179536f3289fb50076968b339C7EF0Dc0B38E3AF) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x28eAB88ee8a951F78e1028557D0C3fD97af61A33](https://iotexscan.io/address/0x28eAB88ee8a951F78e1028557D0C3fD97af61A33) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                               | Deployment                                                                                    |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x711900e5f55d427cd88e5E3FCAe54Ccf02De71F4](https://iotexscan.io/address/0x711900e5f55d427cd88e5E3FCAe54Ccf02De71F4) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0xf978034bb3CAB5fe88d23DB5Cb38D510485DaB90](https://iotexscan.io/address/0xf978034bb3CAB5fe88d23DB5Cb38D510485DaB90) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### LightLink

#### Core

| Contract                | Address                                                                                                                       | Deployment                                                                          |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0xAa05E418Fb7851C211351C65435F1b17cbFa88Bf](https://phoenix.lightlink.io/address/0xAa05E418Fb7851C211351C65435F1b17cbFa88Bf) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x6329591464FA6721c8E1c1271e4c6C41531Aea6b](https://phoenix.lightlink.io/address/0x6329591464FA6721c8E1c1271e4c6C41531Aea6b) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0x83403c6426E6D044bF3B84EC1C007Db211AaA140](https://phoenix.lightlink.io/address/0x83403c6426E6D044bF3B84EC1C007Db211AaA140) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x5881ef3c0D3eB21b1b40E13b4a69c50754bc77C7](https://phoenix.lightlink.io/address/0x5881ef3c0D3eB21b1b40E13b4a69c50754bc77C7) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                       | Deployment                                                                                    |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x5C847244649BD74aB41f09C893aF792AD87D32aA](https://phoenix.lightlink.io/address/0x5C847244649BD74aB41f09C893aF792AD87D32aA) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x278AC15622846806BD46FBDbdB8dB8d09614173A](https://phoenix.lightlink.io/address/0x278AC15622846806BD46FBDbdB8dB8d09614173A) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Linea

#### Core

| Contract                | Address                                                                                                                  | Deployment                                                                          |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0xF2E46B249cFe09c2b3A2022dc81E0bB4bE3336F1](https://lineascan.build/address/0xF2E46B249cFe09c2b3A2022dc81E0bB4bE3336F1) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0xB5d39049510F47EE7f74c528105D225E42747d63](https://lineascan.build/address/0xB5d39049510F47EE7f74c528105D225E42747d63) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0xC46ce4B77cBc46D17A2EceB2Cc8e2EE23D96529F](https://lineascan.build/address/0xC46ce4B77cBc46D17A2EceB2Cc8e2EE23D96529F) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x2E72F7523cFeaed6B841aCe20060E0b203c312F5](https://lineascan.build/address/0x2E72F7523cFeaed6B841aCe20060E0b203c312F5) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                  | Deployment                                                                                    |
| :--------------------------- | :----------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x4259557F6665eCF5907c9019a30f3Cb009c20Ae7](https://lineascan.build/address/0x4259557F6665eCF5907c9019a30f3Cb009c20Ae7) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x35E9C3445A039B258Eb7112A5Eea259a825E8AC0](https://lineascan.build/address/0x35E9C3445A039B258Eb7112A5Eea259a825E8AC0) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Meld

#### Core

| Contract                | Address                                                                                                              | Deployment                                                                          |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0xCff4a803b0Bf55dD1BE38Fb96088478F3D2eeCF2](https://meldscan.io/address/0xCff4a803b0Bf55dD1BE38Fb96088478F3D2eeCF2) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0xDf578C2c70A86945999c65961417057363530a1c](https://meldscan.io/address/0xDf578C2c70A86945999c65961417057363530a1c) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0xcb099EfC90e88690e287259410B9AE63e1658CC6](https://meldscan.io/address/0xcb099EfC90e88690e287259410B9AE63e1658CC6) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x2De92156000269fa2fde7544F10f01E8cBC80fFa](https://meldscan.io/address/0x2De92156000269fa2fde7544F10f01E8cBC80fFa) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                              | Deployment                                                                                    |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x0eDA15D606733f6CDe9DB67263E546bfcDDe9264](https://meldscan.io/address/0x0eDA15D606733f6CDe9DB67263E546bfcDDe9264) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x92FC05e49c27884d554D98a5C01Ff0894a9DC29a](https://meldscan.io/address/0x92FC05e49c27884d554D98a5C01Ff0894a9DC29a) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Mode

#### Core

| Contract                | Address                                                                                                                        | Deployment                                                                          |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x704552099f5aD679294D337638B9a57Fd4726F52](https://explorer.mode.network/address/0x704552099f5aD679294D337638B9a57Fd4726F52) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0xD8C65Bd7CB6924EF895b2eDcA03407c652f5a2C5](https://explorer.mode.network/address/0xD8C65Bd7CB6924EF895b2eDcA03407c652f5a2C5) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0xBbfA51A10bE68714fa33281646B986dae9f52021](https://explorer.mode.network/address/0xBbfA51A10bE68714fa33281646B986dae9f52021) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0xA1976d4bd6572B68A677037B496D806ACC2cBdB3](https://explorer.mode.network/address/0xA1976d4bd6572B68A677037B496D806ACC2cBdB3) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                        | Deployment                                                                                    |
| :--------------------------- | :----------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x641A10A2c9e0CeB94F406e1EF68b1E1da002662d](https://explorer.mode.network/address/0x641A10A2c9e0CeB94F406e1EF68b1E1da002662d) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x0Fd01Dd30F96A15dE6AfAd5627d45Ef94752460a](https://explorer.mode.network/address/0x0Fd01Dd30F96A15dE6AfAd5627d45Ef94752460a) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Optimism

#### Core

| Contract                | Address                                                                                                                          | Deployment                                                                          |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x4994325F8D4B4A36Bd643128BEb3EC3e582192C0](https://optimistic.etherscan.io/address/0x4994325F8D4B4A36Bd643128BEb3EC3e582192C0) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x5C22471A86E9558ed9d22235dD5E0429207ccf4B](https://optimistic.etherscan.io/address/0x5C22471A86E9558ed9d22235dD5E0429207ccf4B) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0x90952912a50079bef00D5F49c975058d6573aCdC](https://optimistic.etherscan.io/address/0x90952912a50079bef00D5F49c975058d6573aCdC) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x1a4837b8c668b8F7BE22Ba156419b7b823Cfd05c](https://optimistic.etherscan.io/address/0x1a4837b8c668b8F7BE22Ba156419b7b823Cfd05c) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                          | Deployment                                                                                    |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x6cd7bB0f63aFCc9F6CeDd1Bf1E3Bd4ED078CD019](https://optimistic.etherscan.io/address/0x6cd7bB0f63aFCc9F6CeDd1Bf1E3Bd4ED078CD019) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0xe041629D99730b3EE4d6518097C45b4E3591992b](https://optimistic.etherscan.io/address/0xe041629D99730b3EE4d6518097C45b4E3591992b) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Polygon

#### Core

| Contract                | Address                                                                                                                  | Deployment                                                                          |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x8D4dDc187a73017a5d7Cef733841f55115B13762](https://polygonscan.com/address/0x8D4dDc187a73017a5d7Cef733841f55115B13762) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x8D87c5eddb5644D1a714F85930Ca940166e465f0](https://polygonscan.com/address/0x8D87c5eddb5644D1a714F85930Ca940166e465f0) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0xBF67f0A1E847564D0eFAD475782236D3Fa7e9Ec2](https://polygonscan.com/address/0xBF67f0A1E847564D0eFAD475782236D3Fa7e9Ec2) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0xf28BF9390fb57BB68386430550818D312699ED15](https://polygonscan.com/address/0xf28BF9390fb57BB68386430550818D312699ED15) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                  | Deployment                                                                                    |
| :--------------------------- | :----------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0xD29EC4B9203f2d1C9Cd4Ba8c68FCFE4ECd85f6f5](https://polygonscan.com/address/0xD29EC4B9203f2d1C9Cd4Ba8c68FCFE4ECd85f6f5) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0xC28872e0c1f3633EeD467907123727ac0155029D](https://polygonscan.com/address/0xC28872e0c1f3633EeD467907123727ac0155029D) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Scroll

#### Core

| Contract                | Address                                                                                                                 | Deployment                                                                          |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0xAc199bFea92aa4D4C3d8A49fd463EAD99C7a6A8f](https://scrollscan.com/address/0xAc199bFea92aa4D4C3d8A49fd463EAD99C7a6A8f) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0xBc5DC6D77612E636DA32af0d85Ca3179a57330fd](https://scrollscan.com/address/0xBc5DC6D77612E636DA32af0d85Ca3179a57330fd) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0xb0f78dDc01D829d8b567821Eb193De8082b57D9D](https://scrollscan.com/address/0xb0f78dDc01D829d8b567821Eb193De8082b57D9D) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0xA1A281BbcaED8f0A9Dcd0fe67cbC53e0993C24cb](https://scrollscan.com/address/0xA1A281BbcaED8f0A9Dcd0fe67cbC53e0993C24cb) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                 | Deployment                                                                                    |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x4B8BF9cD3274517609e7Fe905740fa151C9aa711](https://scrollscan.com/address/0x4B8BF9cD3274517609e7Fe905740fa151C9aa711) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x344afe8ad5dBA3d55870dc398e0F53B635B2ed0d](https://scrollscan.com/address/0x344afe8ad5dBA3d55870dc398e0F53B635B2ed0d) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Taiko Mainnet

#### Core

| Contract                | Address                                                                                                               | Deployment                                                                          |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x238C830FA8E4ED0f0A4bc9C986BF338aEC9e38D1](https://taikoscan.io/address/0x238C830FA8E4ED0f0A4bc9C986BF338aEC9e38D1) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x5Ec0a2e88dAd09ad940Be2639c9aDb24D186989E](https://taikoscan.io/address/0x5Ec0a2e88dAd09ad940Be2639c9aDb24D186989E) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0x6a619d35972578E8458E33B7d1e07b155A51585E](https://taikoscan.io/address/0x6a619d35972578E8458E33B7d1e07b155A51585E) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0xBFD6048C80665792d949692CE77307e55dbb8986](https://taikoscan.io/address/0xBFD6048C80665792d949692CE77307e55dbb8986) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                               | Deployment                                                                                    |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x65E2C9990d4CAc5E54E65c1BD625CdcC9FDd1292](https://taikoscan.io/address/0x65E2C9990d4CAc5E54E65c1BD625CdcC9FDd1292) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0xd7df0b795756b60ab51a37e26f1edb7ef9e78828](https://taikoscan.io/address/0xd7df0b795756b60ab51a37e26f1edb7ef9e78828) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### zkSync Era

:::note

Unlike other EVM chains, zkSync requires the libraries to be deployed, too. Please refer to
[their docs](https://docs.zksync.io/build/developer-reference/ethereum-differences/libraries).

:::

#### Core

| Contract                | Address                                                                                                                     | Deployment                                                                          |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0xf03f4Bf48b108360bAf1597Fb8053Ebe0F5245dA](https://explorer.zksync.io/address/0xf03f4Bf48b108360bAf1597Fb8053Ebe0F5245dA) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x8cB69b514E97a904743922e1adf3D1627deeeE8D](https://explorer.zksync.io/address/0x8cB69b514E97a904743922e1adf3D1627deeeE8D) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0x1fB145A47Eb9b8bf565273e137356376197b3559](https://explorer.zksync.io/address/0x1fB145A47Eb9b8bf565273e137356376197b3559) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x99BA0D464942e7166dEBb8BAaAF1192F8d4117eb](https://explorer.zksync.io/address/0x99BA0D464942e7166dEBb8BAaAF1192F8d4117eb) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| NFTSVG                  | [0xdCAaF1fC014BCdB5568Dc5CA8c22de4BE8829dCd](https://explorer.zksync.io/address/0xdCAaF1fC014BCdB5568Dc5CA8c22de4BE8829dCd) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SVGElements             | [0x500b6f2624662b1e2E0a144ceF24117B39F09DA5](https://explorer.zksync.io/address/0x500b6f2624662b1e2E0a144ceF24117B39F09DA5) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                     | Deployment                                                                                    |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0xAE1A55205A0499d6BBb0Cf0f1210641957e9cb7e](https://explorer.zksync.io/address/0xAE1A55205A0499d6BBb0Cf0f1210641957e9cb7e) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x8a84fCF962163A7E98Bf0daFD918973c846fa5C8](https://explorer.zksync.io/address/0x8a84fCF962163A7E98Bf0daFD918973c846fa5C8) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

## Testnets

### Sepolia

#### Core

| Contract                | Address                                                                                                                       | Deployment                                                                          |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x73BB6dD3f5828d60F8b3dBc8798EB10fbA2c5636](https://sepolia.etherscan.io/address/0x73BB6dD3f5828d60F8b3dBc8798EB10fbA2c5636) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x3E435560fd0a03ddF70694b35b673C25c65aBB6C](https://sepolia.etherscan.io/address/0x3E435560fd0a03ddF70694b35b673C25c65aBB6C) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0x3a1beA13A8C24c0EA2b8fAE91E4b2762A59D7aF5](https://sepolia.etherscan.io/address/0x3a1beA13A8C24c0EA2b8fAE91E4b2762A59D7aF5) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x56F2f7f4d15d1A9FF9d3782b6F6bB8f6fd690D33](https://sepolia.etherscan.io/address/0x56F2f7f4d15d1A9FF9d3782b6F6bB8f6fd690D33) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                       | Deployment                                                                                    |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x04A9c14b7a000640419aD5515Db4eF4172C00E31](https://sepolia.etherscan.io/address/0x04A9c14b7a000640419aD5515Db4eF4172C00E31) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x56E9180A8d2C35c99F2F8a1A5Ab8aBe79E876E8c](https://sepolia.etherscan.io/address/0x56E9180A8d2C35c99F2F8a1A5Ab8aBe79E876E8c) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Arbitrum Sepolia

#### Core

| Contract                | Address                                                                                                                      | Deployment                                                                          |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x8127E8081C22807c8a786Af1e1b174939577144A](https://sepolia.arbiscan.io/address/0x8127E8081C22807c8a786Af1e1b174939577144A) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x9D1C257d9bc09E6E6B8E7e7c2496C12000f55457](https://sepolia.arbiscan.io/address/0x9D1C257d9bc09E6E6B8E7e7c2496C12000f55457) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0xaff2efFCF38Ea4A92E0cC5D7c48456C53358fE1a](https://sepolia.arbiscan.io/address/0xaff2efFCF38Ea4A92E0cC5D7c48456C53358fE1a) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x46AEd4FE32aE1306d8073FE54A4E844e10a3ca16](https://sepolia.arbiscan.io/address/0x46AEd4FE32aE1306d8073FE54A4E844e10a3ca16) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                      | Deployment                                                                                    |
| :--------------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0xC1FD380b3B0fF989C259D0b45B97F9663B638aA4](https://sepolia.arbiscan.io/address/0xC1FD380b3B0fF989C259D0b45B97F9663B638aA4) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0xa11561F9e418f2C431B411E1CA22FD3F85D4c831](https://sepolia.arbiscan.io/address/0xa11561F9e418f2C431B411E1CA22FD3F85D4c831) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Base Sepolia

#### Core

| Contract                | Address                                                                                                                       | Deployment                                                                          |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x6DCB73E5F7e8e70bE20b3B9CF50E3be4625A91C3](https://sepolia.basescan.org/address/0x6DCB73E5F7e8e70bE20b3B9CF50E3be4625A91C3) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0xFE7fc0Bbde84C239C0aB89111D617dC7cc58049f](https://sepolia.basescan.org/address/0xFE7fc0Bbde84C239C0aB89111D617dC7cc58049f) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0xb8c724df3eC8f2Bf8fA808dF2cB5dbab22f3E68c](https://sepolia.basescan.org/address/0xb8c724df3eC8f2Bf8fA808dF2cB5dbab22f3E68c) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x474dFf3Cdd6489523947bf08D538F56d07Ca699e](https://sepolia.basescan.org/address/0x474dFf3Cdd6489523947bf08D538F56d07Ca699e) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                       | Deployment                                                                                    |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x23d0B7691F4Ca0E5477132a7C7F54fdCEd1814B9](https://sepolia.basescan.org/address/0x23d0B7691F4Ca0E5477132a7C7F54fdCEd1814B9) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x899a05feb160fe912f621733A1d0b39C1446B3eB](https://sepolia.basescan.org/address/0x899a05feb160fe912f621733A1d0b39C1446B3eB) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Berachain Bartio

#### Core

| Contract                | Address                                                                                                                      | Deployment                                                                          |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x1EA807A7CeAd9547d1dB14B4249b215C01c0B4D4](https://bartio.beratrail.io/address/0x1EA807A7CeAd9547d1dB14B4249b215C01c0B4D4) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0xfB603381EdfaF3A67e8332c14f9453E073A1BeF6](https://bartio.beratrail.io/address/0xfB603381EdfaF3A67e8332c14f9453E073A1BeF6) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0xE92893Ee49b6Ae9e468B332cc5A3FdEA8cb7FEBf](https://bartio.beratrail.io/address/0xE92893Ee49b6Ae9e468B332cc5A3FdEA8cb7FEBf) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x5A67965B0f8d8202121b965a4ad977706329e607](https://bartio.beratrail.io/address/0x5A67965B0f8d8202121b965a4ad977706329e607) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                      | Deployment                                                                                    |
| :--------------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0xf43Df76b7533245da6F194a58Cb82533479b2100](https://bartio.beratrail.io/address/0xf43Df76b7533245da6F194a58Cb82533479b2100) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x5ED2465370adBC11D6e651002d70C476fd9106Cb](https://bartio.beratrail.io/address/0x5ED2465370adBC11D6e651002d70C476fd9106Cb) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Blast Sepolia

#### Core

| Contract                | Address                                                                                                                       | Deployment                                                                          |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x9dA09f4887FD3a78Ea237F74a456a82e4301F3D4](https://sepolia.blastscan.io/address/0x9dA09f4887FD3a78Ea237F74a456a82e4301F3D4) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x07f1386803ab6e1D8b6AABD50A9772E45bEA08f1](https://sepolia.blastscan.io/address/0x07f1386803ab6e1D8b6AABD50A9772E45bEA08f1) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0x7eB79ab3652713bBE989e7A0dCA61ba484CAED85](https://sepolia.blastscan.io/address/0x7eB79ab3652713bBE989e7A0dCA61ba484CAED85) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x93c0c4a57573C7056D7d63B536e33E28FB3ec2EE](https://sepolia.blastscan.io/address/0x93c0c4a57573C7056D7d63B536e33E28FB3ec2EE) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                       | Deployment                                                                                    |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0xAC83E6aDA41a9251516601d8D5D0188466044Cc1](https://sepolia.blastscan.io/address/0xAC83E6aDA41a9251516601d8D5D0188466044Cc1) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0xb9fCF1f73DD941Dd1C589fCf8545E60133EE5eC2](https://sepolia.blastscan.io/address/0xb9fCF1f73DD941Dd1C589fCf8545E60133EE5eC2) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Linea Sepolia

#### Core

| Contract                | Address                                                                                                                          | Deployment                                                                          |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x95D29708be647BDD8dA0bdF82B84eB5f42d45918](https://sepolia.lineascan.build/address/0x95D29708be647BDD8dA0bdF82B84eB5f42d45918) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x435F33C21B9Ea8BF207785616Bb28C46eDeD7366](https://sepolia.lineascan.build/address/0x435F33C21B9Ea8BF207785616Bb28C46eDeD7366) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0x5A52E9F4dFcdBcd68E50386D484378718167aB60](https://sepolia.lineascan.build/address/0x5A52E9F4dFcdBcd68E50386D484378718167aB60) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x237f114a9cF62b87383684529d889DdfEd917f0c](https://sepolia.lineascan.build/address/0x237f114a9cF62b87383684529d889DdfEd917f0c) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                          | Deployment                                                                                    |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x8224eb5D7d76B2D7Df43b868D875E79B11500eA8](https://sepolia.lineascan.build/address/0x8224eb5D7d76B2D7Df43b868D875E79B11500eA8) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x83Dd52FCA44E069020b58155b761A590F12B59d3](https://sepolia.lineascan.build/address/0x83Dd52FCA44E069020b58155b761A590F12B59d3) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Mode Sepolia

#### Core

| Contract                | Address                                                                                                                                | Deployment                                                                          |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x5cD39Ec69F0Ed62733d0DA3E083E451334bA1f70](https://sepolia.explorer.mode.network/address/0x5cD39Ec69F0Ed62733d0DA3E083E451334bA1f70) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x61861e4C72EE2F6967C852FE79Eac0E7a9C4f466](https://sepolia.explorer.mode.network/address/0x61861e4C72EE2F6967C852FE79Eac0E7a9C4f466) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0xc51346d1FD003E536530584eb4c8974BB279712D](https://sepolia.explorer.mode.network/address/0xc51346d1FD003E536530584eb4c8974BB279712D) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0xD3c856A7333c264475aD87F9E6f84Ef376AE250D](https://sepolia.explorer.mode.network/address/0xD3c856A7333c264475aD87F9E6f84Ef376AE250D) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                                | Deployment                                                                                    |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0xece83740834694A6E204825e5bcD8774F26a2665](https://sepolia.explorer.mode.network/address/0xece83740834694A6E204825e5bcD8774F26a2665) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x900de6cC1021afa13f41e1067bEE681BbD661C69](https://sepolia.explorer.mode.network/address/0x900de6cC1021afa13f41e1067bEE681BbD661C69) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Morph Holesky

| Contract                | Address                                                                                                                              | Deployment                                                                          |
| :---------------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x36477f8FEf1fC3B0fe7F24b8F6d9561f0BeC30e7](https://explorer-holesky.morphl2.io/address/0x36477f8FEf1fC3B0fe7F24b8F6d9561f0BeC30e7) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x4b4126036726085636BC2A4788a448d5C26705E4](https://explorer-holesky.morphl2.io/address/0x4b4126036726085636BC2A4788a448d5C26705E4) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0x6AF155530D6360E789deD0CF88219f855CCb158F](https://explorer-holesky.morphl2.io/address/0x6AF155530D6360E789deD0CF88219f855CCb158F) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x33BE6a7810B464B913052EC0436A067de25C164c](https://explorer-holesky.morphl2.io/address/0x33BE6a7810B464B913052EC0436A067de25C164c) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                              | Deployment                                                                                    |
| :--------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x728Ec8260Ea1115252D33c0D563d78CA18990dE4](https://explorer-holesky.morphl2.io/address/0x728Ec8260Ea1115252D33c0D563d78CA18990dE4) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x4B5F6B967dC61c2B39fa233092745B460eA1b433](https://explorer-holesky.morphl2.io/address/0x4B5F6B967dC61c2B39fa233092745B460eA1b433) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Optimism Sepolia

#### Core

| Contract                | Address                                                                                                                                  | Deployment                                                                          |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x89EC3830040dec63E9dF0C904d649fda4d49DF16](https://sepolia-optimistic.etherscan.io/address/0x89EC3830040dec63E9dF0C904d649fda4d49DF16) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x0a881bbd71a21710D56Ff1931EC8189d94019D60](https://sepolia-optimistic.etherscan.io/address/0x0a881bbd71a21710D56Ff1931EC8189d94019D60) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0xb971A93608413C54F407eE86C7c15b295E0004bB](https://sepolia-optimistic.etherscan.io/address/0xb971A93608413C54F407eE86C7c15b295E0004bB) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x48F8C05C721E27FA82aD6c8ddB1a88eF43864A9A](https://sepolia-optimistic.etherscan.io/address/0x48F8C05C721E27FA82aD6c8ddB1a88eF43864A9A) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                                  | Deployment                                                                                    |
| :--------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0xC1FD380b3B0fF989C259D0b45B97F9663B638aA4](https://sepolia-optimistic.etherscan.io/address/0xd9dD971D4800100aED0BfF3535aB116D4Be5c420) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0xa11561F9e418f2C431B411E1CA22FD3F85D4c831](https://sepolia-optimistic.etherscan.io/address/0x6CBe6e298A9354306e6ee65f63FF85CFA7062a39) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Superseed Sepolia

#### Core

| Contract                | Address                                                                                                                                 | Deployment                                                                          |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0xCff4a803b0Bf55dD1BE38Fb96088478F3D2eeCF2](https://sepolia-explorer.superseed.xyz/address/0xCff4a803b0Bf55dD1BE38Fb96088478F3D2eeCF2) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0xDf578C2c70A86945999c65961417057363530a1c](https://sepolia-explorer.superseed.xyz/address/0xDf578C2c70A86945999c65961417057363530a1c) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0xcb099EfC90e88690e287259410B9AE63e1658CC6](https://sepolia-explorer.superseed.xyz/address/0xcb099EfC90e88690e287259410B9AE63e1658CC6) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x2De92156000269fa2fde7544F10f01E8cBC80fFa](https://sepolia-explorer.superseed.xyz/address/0x2De92156000269fa2fde7544F10f01E8cBC80fFa) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                                 | Deployment                                                                                    |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x0eDA15D606733f6CDe9DB67263E546bfcDDe9264](https://sepolia-explorer.superseed.xyz/address/0x0eDA15D606733f6CDe9DB67263E546bfcDDe9264) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x92FC05e49c27884d554D98a5C01Ff0894a9DC29a](https://sepolia-explorer.superseed.xyz/address/0x92FC05e49c27884d554D98a5C01Ff0894a9DC29a) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### Taiko Hekla

#### Core

| Contract                | Address                                                                                                                           | Deployment                                                                          |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0x01565a1298d631302c114E13C431c9345ae5532e](https://explorer.hekla.taiko.xyz/address/0x01565a1298d631302c114E13C431c9345ae5532e) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x640376B26E5f57dCD385b394a24c91F4C60E4fAc](https://explorer.hekla.taiko.xyz/address/0x640376B26E5f57dCD385b394a24c91F4C60E4fAc) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0xd040fa437021F771C307178F06183bffC36cb4A5](https://explorer.hekla.taiko.xyz/address/0xd040fa437021F771C307178F06183bffC36cb4A5) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x49Fd46F7d897778205c00D5c1D943fCDc26Ed9E8](https://explorer.hekla.taiko.xyz/address/0x49Fd46F7d897778205c00D5c1D943fCDc26Ed9E8) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                           | Deployment                                                                                    |
| :--------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x6C6a4Ef6C0C1318C9FD60b5084B68E04FB5e9Db9](https://explorer.hekla.taiko.xyz/address/0x6C6a4Ef6C0C1318C9FD60b5084B68E04FB5e9Db9) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x4F0d64365EfA9D6D1B88FfC387Ce02e4A71d9f9f](https://explorer.hekla.taiko.xyz/address/0x4F0d64365EfA9D6D1B88FfC387Ce02e4A71d9f9f) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |

### zkSync Sepolia

:::note

Unlike other EVM chains, zkSync requires the libraries to be deployed, too. Please refer to
[their docs](https://docs.zksync.io/build/developer-reference/ethereum-differences/libraries).

:::

#### Core

| Contract                | Address                                                                                                                             | Deployment                                                                          |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupDynamic  | [0xc4311a5913953162111bF75530f7BB14ec24e014](https://sepolia.explorer.zksync.io/address/0xc4311a5913953162111bF75530f7BB14ec24e014) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupLinear   | [0x43864C567b89FA5fEE8010f92d4473Bf19169BBA](https://sepolia.explorer.zksync.io/address/0x43864C567b89FA5fEE8010f92d4473Bf19169BBA) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2LockupTranched | [0xF6e869b73E20b812dcf0E850AA8822F74f67f670](https://sepolia.explorer.zksync.io/address/0xF6e869b73E20b812dcf0E850AA8822F74f67f670) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SablierV2NFTDescriptor  | [0x477DDC91a7e13CBaC01c06737abF96d50ECa7961](https://sepolia.explorer.zksync.io/address/0x477DDC91a7e13CBaC01c06737abF96d50ECa7961) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| NFTSVG                  | [0x622e3bfA60486Fc7319cA370BfB81E713fd10c0f](https://sepolia.explorer.zksync.io/address/0x622e3bfA60486Fc7319cA370BfB81E713fd10c0f) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |
| SVGElements             | [0x41602e7D355A15b76D43F84183831836eC498678](https://sepolia.explorer.zksync.io/address/0x41602e7D355A15b76D43F84183831836eC498678) | [core-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.2.0) |

#### Periphery

| Contract                     | Address                                                                                                                             | Deployment                                                                                    |
| :--------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2BatchLockup         | [0x1D68417ff71855Eb0237Ff03a8FfF02Ef67e4AFb](https://sepolia.explorer.zksync.io/address/0x1D68417ff71855Eb0237Ff03a8FfF02Ef67e4AFb) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
| SablierV2MerkleLockupFactory | [0x2CEf8C06dDF7a1440Ad2561c53821e43adDbfA31](https://sepolia.explorer.zksync.io/address/0x2CEf8C06dDF7a1440Ad2561c53821e43adDbfA31) | [periphery-v1.2.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.2.0) |
