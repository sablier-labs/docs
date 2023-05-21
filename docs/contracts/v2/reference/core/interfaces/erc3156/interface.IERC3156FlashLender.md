# IERC3156FlashLender

[Git Source](https://github.com/sablier-labs/v2-core/blob/b048c0e28a5120b396c3eb3cdd0bc4e8784dc155/docs/contracts/v2/reference/core/interfaces)

Interface for ERC-3156 flash lenders.

_See https://eips.ethereum.org/EIPS/eip-3156._

## Functions

### maxFlashLoan

```solidity
function maxFlashLoan(address asset) external view returns (uint256);
```

### flashFee

```solidity
function flashFee(address asset, uint256 amount) external view returns (uint256);
```

### flashLoan

```solidity
function flashLoan(
    IERC3156FlashBorrower receiver,
    address asset,
    uint256 amount,
    bytes calldata data
)
    external
    returns (bool);
```
