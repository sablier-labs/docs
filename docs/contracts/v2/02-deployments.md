---
id: "deployments"
toc_max_heading_level: 2
sidebar_position: 2
title: "Deployment Addresses"
---

The latest versions of [@sablier/v2-core][v2-core] and [@sablier/v2-periphery][v2-periphery] are deployed at the
addresses listed below.

[v2-core]: https://npmjs.com/package/@sablier/v2-core
[v2-periphery]: https://npmjs.com/package/@sablier/v2-periphery

A few noteworthy details about the deployments:

- The addresses are final
- All LockupLinear and LockupDynamic contracts are non-upgradeable (see [Governance](/concepts/governance))
- The source code is verified on Etherscan across all chains

:::note

Came here looking for the V1 addresses? [Click here](/contracts/v1/guides/deployments).

Or maybe you're looking for the PRBProxy deployments? Check out [prbproxy.com](https://prbproxy.com)

:::

## Mainnet

### Core

| Contract               | Address                                                                                                               | Deployment                                                                          |
| :--------------------- | :-------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0xB10daee1FCF62243aE27776D7a92D39dC8740f95](https://etherscan.io/address/0xB10daee1FCF62243aE27776D7a92D39dC8740f95) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2LockupDynamic | [0x39EFdC3dbB57B2388CcC4bb40aC4CB1226Bc9E44](https://etherscan.io/address/0x39EFdC3dbB57B2388CcC4bb40aC4CB1226Bc9E44) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2NFTDescriptor | [0x98F2196fECc01C240d1429B624d007Ca268EEA29](https://etherscan.io/address/0x98F2196fECc01C240d1429B624d007Ca268EEA29) | [core-v1.0.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.1) |
| SablierV2Comptroller   | [0xC3Be6BffAeab7B297c03383B4254aa3Af2b9a5BA](https://etherscan.io/address/0xC3Be6BffAeab7B297c03383B4254aa3Af2b9a5BA) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract             | Address                                                                                                               | Deployment                                                                                    |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Archive     | [0x0Be20a8242B0781B6fd4d453e90DCC1CcF7DBcc6](https://etherscan.io/address/0x0Be20a8242B0781B6fd4d453e90DCC1CcF7DBcc6) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyPlugin | [0x9bdebF4F9adEB99387f46e4020FBf3dDa885D2b8](https://etherscan.io/address/0x9bdebF4F9adEB99387f46e4020FBf3dDa885D2b8) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyTarget | [0x297b43aE44660cA7826ef92D8353324C018573Ef](https://etherscan.io/address/0x297b43aE44660cA7826ef92D8353324C018573Ef) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |

## Arbitrum One

### Core

| Contract               | Address                                                                                                              | Deployment                                                                          |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0x197D655F3be03903fD25e7828c3534504bfe525e](https://arbiscan.io/address/0x197D655F3be03903fD25e7828c3534504bfe525e) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2LockupDynamic | [0xA9EfBEf1A35fF80041F567391bdc9813b2D50197](https://arbiscan.io/address/0xA9EfBEf1A35fF80041F567391bdc9813b2D50197) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2NFTDescriptor | [0xc245d6C9608769CeF91C3858e4d2a74802B9f1bB](https://arbiscan.io/address/0xc245d6C9608769CeF91C3858e4d2a74802B9f1bB) | [core-v1.0.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.1) |
| SablierV2Comptroller   | [0x17Ec73692F0aDf7E7C554822FBEAACB4BE781762](https://arbiscan.io/address/0x17Ec73692F0aDf7E7C554822FBEAACB4BE781762) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract             | Address                                                                                                              | Deployment                                                                                    |
| :------------------- | :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Archive     | [0xDFa4512d07AbD4eb8Be570Cd79e2e6Fe21ff15C9](https://arbiscan.io/address/0xDFa4512d07AbD4eb8Be570Cd79e2e6Fe21ff15C9) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyPlugin | [0x9aB73CA73c89AF0bdc69642aCeb23CC6A55A514C](https://arbiscan.io/address/0x9aB73CA73c89AF0bdc69642aCeb23CC6A55A514C) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyTarget | [0xB7185AcAF42C4966fFA3c81486d9ED9633aa4c13](https://arbiscan.io/address/0xB7185AcAF42C4966fFA3c81486d9ED9633aa4c13) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |

## Avalanche

### Core

| Contract               | Address                                                                                                               | Deployment                                                                          |
| :--------------------- | :-------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0x610346E9088AFA70D6B03e96A800B3267E75cA19](https://snowtrace.io/address/0x610346E9088AFA70D6B03e96A800B3267E75cA19) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2LockupDynamic | [0x665d1C8337F1035cfBe13DD94bB669110b975f5F](https://snowtrace.io/address/0x665d1C8337F1035cfBe13DD94bB669110b975f5F) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2NFTDescriptor | [0xFd050AFA2e04aA0596947DaD3Ec5690162aDc77F](https://snowtrace.io/address/0xFd050AFA2e04aA0596947DaD3Ec5690162aDc77F) | [core-v1.0.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.1) |
| SablierV2Comptroller   | [0x66F5431B0765D984f82A4fc4551b2c9ccF7eAC9C](https://snowtrace.io/address/0x66F5431B0765D984f82A4fc4551b2c9ccF7eAC9C) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract             | Address                                                                                                               | Deployment                                                                                    |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Archive     | [0x7b1ef644ce9a625537e9e0c3d7fef3be667e6159](https://snowtrace.io/address/0x7b1ef644ce9a625537e9e0c3d7fef3be667e6159) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyPlugin | [0x17167A7e2763121e263B4331B700a1BF9113b387](https://snowtrace.io/address/0x17167A7e2763121e263B4331B700a1BF9113b387) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyTarget | [0x48B4889cf5d6f8360050f9d7606505F1433120BC](https://snowtrace.io/address/0x48B4889cf5d6f8360050f9d7606505F1433120BC) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |

## Base

### Core

| Contract               | Address                                                                                                               | Deployment                                                                          |
| :--------------------- | :-------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0x6b9a46C8377f21517E65fa3899b3A9Fab19D17f5](https://basescan.org/address/0x6b9a46C8377f21517E65fa3899b3A9Fab19D17f5) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2LockupDynamic | [0x645B00960Dc352e699F89a81Fc845C0C645231cf](https://basescan.org/address/0x645B00960Dc352e699F89a81Fc845C0C645231cf) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2NFTDescriptor | [0xEFc2896c29F70bc23e82892Df827d4e2259028Fd](https://basescan.org/address/0xEFc2896c29F70bc23e82892Df827d4e2259028Fd) | [core-v1.0.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.1) |
| SablierV2Comptroller   | [0x7Faaedd40B1385C118cA7432952D9DC6b5CbC49e](https://basescan.org/address/0x7Faaedd40B1385C118cA7432952D9DC6b5CbC49e) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract             | Address                                                                                                               | Deployment                                                                                    |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Archive     | [0x1C5Ac71dd48c7ff291743e5E6e3689ba92F73cC6](https://basescan.org/address/0x1C5Ac71dd48c7ff291743e5E6e3689ba92F73cC6) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyPlugin | [0x50E8B9dC7F28e5cA9253759455C1077e497c4232](https://basescan.org/address/0x50E8B9dC7F28e5cA9253759455C1077e497c4232) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyTarget | [0x0648C80b969501c7778b6ff3ba47aBb78fEeDF39](https://basescan.org/address/0x0648C80b969501c7778b6ff3ba47aBb78fEeDF39) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |

## BNB Smart Chain

### Core

| Contract               | Address                                                                                                              | Deployment                                                                          |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0x3FE4333f62A75c2a85C8211c6AeFd1b9Bfde6e51](https://bscscan.com/address/0x3FE4333f62A75c2a85C8211c6AeFd1b9Bfde6e51) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2LockupDynamic | [0xF2f3feF2454DcA59ECA929D2D8cD2a8669Cc6214](https://bscscan.com/address/0xF2f3feF2454DcA59ECA929D2D8cD2a8669Cc6214) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2NFTDescriptor | [0x3daD1bF57edCFF979Fb68a802AC54c5AAfB78F4c](https://bscscan.com/address/0x3daD1bF57edCFF979Fb68a802AC54c5AAfB78F4c) | [core-v1.0.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.1) |
| SablierV2Comptroller   | [0x33511f69A784Fd958E6713aCaC7c9dCF1A5578E8](https://bscscan.com/address/0x33511f69A784Fd958E6713aCaC7c9dCF1A5578E8) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract             | Address                                                                                                              | Deployment                                                                                    |
| :------------------- | :------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Archive     | [0xeDe48EB173A869c0b27Cb98CC56d00BC391e5887](https://bscscan.com/address/0xeDe48EB173A869c0b27Cb98CC56d00BC391e5887) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyPlugin | [0xC43b2d8CedB71df30F45dFd9a21eC1E50A813bD6](https://bscscan.com/address/0xC43b2d8CedB71df30F45dFd9a21eC1E50A813bD6) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyTarget | [0x135e78B8E17B1d189Af75FcfCC018ab2E6c7b879](https://bscscan.com/address/0x135e78B8E17B1d189Af75FcfCC018ab2E6c7b879) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |

## Gnosis

### Core

| Contract               | Address                                                                                                                | Deployment                                                                          |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0x685E92c9cA2bB23f1B596d0a7D749c0603e88585](https://gnosisscan.io/address/0x685E92c9cA2bB23f1B596d0a7D749c0603e88585) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2LockupDynamic | [0xeb148E4ec13aaA65328c0BA089a278138E9E53F9](https://gnosisscan.io/address/0xeb148E4ec13aaA65328c0BA089a278138E9E53F9) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2NFTDescriptor | [0x8CE9Cd651e03325Cf6D4Ce9cfa74BE79CDf6d530](https://gnosisscan.io/address/0x8CE9Cd651e03325Cf6D4Ce9cfa74BE79CDf6d530) | [core-v1.0.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.1) |
| SablierV2Comptroller   | [0x73962c44c0fB4cC5e4545FB91732a5c5e87F55C2](https://gnosisscan.io/address/0x73962c44c0fB4cC5e4545FB91732a5c5e87F55C2) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract             | Address                                                                                                                | Deployment                                                                                    |
| :------------------- | :--------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Archive     | [0xF4A6F47Da7c6b26b6Dd774671aABA48fb4bFE309](https://gnosisscan.io/address/0xF4A6F47Da7c6b26b6Dd774671aABA48fb4bFE309) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyPlugin | [0xc84f0e95815A576171A19EB9E0fA55a217Ab1536](https://gnosisscan.io/address/0xc84f0e95815A576171A19EB9E0fA55a217Ab1536) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyTarget | [0x5B144C3B9C8cfd48297Aeb59B90a024Ef3fCcE92](https://gnosisscan.io/address/0x5B144C3B9C8cfd48297Aeb59B90a024Ef3fCcE92) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |

## Optimism

### Core

| Contract               | Address                                                                                                                          | Deployment                                                                          |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0xB923aBdCA17Aed90EB5EC5E407bd37164f632bFD](https://optimistic.etherscan.io/address/0xB923aBdCA17Aed90EB5EC5E407bd37164f632bFD) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2LockupDynamic | [0x6f68516c21E248cdDfaf4898e66b2b0Adee0e0d6](https://optimistic.etherscan.io/address/0x6f68516c21E248cdDfaf4898e66b2b0Adee0e0d6) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2NFTDescriptor | [0xe0138C596939CC0D2382046795bC163ad5755e0E](https://optimistic.etherscan.io/address/0xe0138C596939CC0D2382046795bC163ad5755e0E) | [core-v1.0.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.1) |
| SablierV2Comptroller   | [0x1EECb6e6EaE6a1eD1CCB4323F3a146A7C5443A10](https://optimistic.etherscan.io/address/0x1EECb6e6EaE6a1eD1CCB4323F3a146A7C5443A10) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract             | Address                                                                                                                          | Deployment                                                                                    |
| :------------------- | :------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Archive     | [0x9A09eC6f991386718854aDDCEe68647776Befd5b](https://optimistic.etherscan.io/address/0x9A09eC6f991386718854aDDCEe68647776Befd5b) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyPlugin | [0x77C8516B1F327890C956bb38F93Ac2d6B24795Ea](https://optimistic.etherscan.io/address/0x77C8516B1F327890C956bb38F93Ac2d6B24795Ea) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyTarget | [0x194ed7D6005C8ba4084A948406545DF299ad37cD](https://optimistic.etherscan.io/address/0x194ed7D6005C8ba4084A948406545DF299ad37cD) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |

## Polygon

### Core

| Contract               | Address                                                                                                                  | Deployment                                                                          |
| :--------------------- | :----------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0x67422C3E36A908D5C3237e9cFfEB40bDE7060f6E](https://polygonscan.com/address/0x67422C3E36A908D5C3237e9cFfEB40bDE7060f6E) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2LockupDynamic | [0x7313AdDb53f96a4f710D3b91645c62B434190725](https://polygonscan.com/address/0x7313AdDb53f96a4f710D3b91645c62B434190725) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2NFTDescriptor | [0xA820946EaAceB2a85aF123f706f23192c28bC6B9](https://polygonscan.com/address/0xA820946EaAceB2a85aF123f706f23192c28bC6B9) | [core-v1.0.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.1) |
| SablierV2Comptroller   | [0x9761692EDf10F5F2A69f0150e2fd50dcecf05F2E](https://polygonscan.com/address/0x9761692EDf10F5F2A69f0150e2fd50dcecf05F2E) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract             | Address                                                                                                                  | Deployment                                                                                    |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Archive     | [0xA2f5B2e798e7ADd59d85d9b76645E6AC13fC4e1f](https://polygonscan.com/address/0xA2f5B2e798e7ADd59d85d9b76645E6AC13fC4e1f) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyPlugin | [0xBe4cad0e99865CC62787Ecf029aD9DD4815d3d2e](https://polygonscan.com/address/0xBe4cad0e99865CC62787Ecf029aD9DD4815d3d2e) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyTarget | [0x576743075fc5F771bbC1376c3267A6185Af9D62B](https://polygonscan.com/address/0x576743075fc5F771bbC1376c3267A6185Af9D62B) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |

## Arbitrum Goerli

### Core

| Contract               | Address                                                                                                                     | Deployment                                                                          |
| :--------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0x323B629635b6cFfe2453Aa2869c5957AfF55F445](https://goerli.arbiscan.io/address/0x323B629635b6cFfe2453Aa2869c5957AfF55F445) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2LockupDynamic | [0xdc0a619fF975de6a08c7615ea383533fd265f2e3](https://goerli.arbiscan.io/address/0xdc0a619fF975de6a08c7615ea383533fd265f2e3) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2NFTDescriptor | [0x740509d893BC15a31EAE8542683Ed32085c559cB](https://goerli.arbiscan.io/address/0x740509d893BC15a31EAE8542683Ed32085c559cB) | [core-v1.0.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.1) |
| SablierV2Comptroller   | [0xECF737BDb9BB094489beCa39f0b9Ae66E0C14ba8](https://goerli.arbiscan.io/address/0xECF737BDb9BB094489beCa39f0b9Ae66E0C14ba8) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract             | Address                                                                                                                     | Deployment                                                                                    |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Archive     | [0x4371d767Cd7991248D20eD61d425e1e70c6CEEab](https://goerli.arbiscan.io/address/0x4371d767Cd7991248D20eD61d425e1e70c6CEEab) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyPlugin | [0xD37832B8993bEe6F41A8183967a7488C6e2a3551](https://goerli.arbiscan.io/address/0xD37832B8993bEe6F41A8183967a7488C6e2a3551) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyTarget | [0x2Ebd987e12432Ee3a74Fe0A55Afe5D866096e354](https://goerli.arbiscan.io/address/0x2Ebd987e12432Ee3a74Fe0A55Afe5D866096e354) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |

## Goerli

### Core

| Contract               | Address                                                                                                                      | Deployment                                                                          |
| :--------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| SablierV2LockupLinear  | [0x6E3678c005815Ab34986D8d66A353Cd3699103DE](https://goerli.etherscan.io/address/0x6E3678c005815Ab34986D8d66A353Cd3699103DE) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2LockupDynamic | [0x4BE70EDe968e9dBA12DB42b9869Bec66bEDC17d7](https://goerli.etherscan.io/address/0x4BE70EDe968e9dBA12DB42b9869Bec66bEDC17d7) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |
| SablierV2NFTDescriptor | [0x1D83CDd66BCf0ea8c99E745cC868478d6C3633f0](https://goerli.etherscan.io/address/0x1D83CDd66BCf0ea8c99E745cC868478d6C3633f0) | [core-v1.0.1](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.1) |
| SablierV2Comptroller   | [0x9B75F65bCCd05545C400145Cca29dA52DA57AC2b](https://goerli.etherscan.io/address/0x9B75F65bCCd05545C400145Cca29dA52DA57AC2b) | [core-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/core/v1.0.0) |

### Periphery

| Contract             | Address                                                                                                                      | Deployment                                                                                    |
| :------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------- |
| SablierV2Archive     | [0xFd14E62e6fe4d96F033cf972556ae56D09Bd49cA](https://goerli.etherscan.io/address/0xFd14E62e6fe4d96F033cf972556ae56D09Bd49cA) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyPlugin | [0x9CA1dFFC744318198bE9Cf92283A803CE16b698a](https://goerli.etherscan.io/address/0x9CA1dFFC744318198bE9Cf92283A803CE16b698a) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
| SablierV2ProxyTarget | [0x0eE01680645c361B740ab4dCDdF238988eB20411](https://goerli.etherscan.io/address/0x0eE01680645c361B740ab4dCDdF238988eB20411) | [periphery-v1.0.0](https://github.com/sablier-labs/v2-deployments/tree/main/periphery/v1.0.0) |
