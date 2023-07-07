# IERC3156FlashLender

[Git Source](https://github.com/sablier-labs/v2-core/blob/412ec3d3998a766507de96afdb26c797d2ae491d/docs/contracts/v2/reference/core/interfaces/erc3156)

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
