# IWrappedNativeAsset

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/a17edc8e290789f96ef9ddaf0e4d1c99d8ce1acf/docs/contracts/v2/reference/periphery/interfaces)

**Inherits:** IERC20

An interface for contracts that wrap native assets in ERC-20 form, such as WETH.

_A generic name is used instead of "WETH" to accommodate chains with different native assets._

## Functions

### deposit

Deposits native assets to receive ERC-20 wrapped assets.

```solidity
function deposit() external payable;
```

### withdraw

Withdraws ERC-20 wrapped assets to obtain native assets.

```solidity
function withdraw(uint256 amount) external;
```

**Parameters**

| Name     | Type      | Description                                      |
| -------- | --------- | ------------------------------------------------ |
| `amount` | `uint256` | The amount of ERC-20 wrapped assets to withdraw. |
