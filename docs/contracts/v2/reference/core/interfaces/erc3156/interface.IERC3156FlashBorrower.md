# IERC3156FlashBorrower

[Git Source](https://github.com/sablier-labs/v2-core/blob/release/src/interfaces/erc3156/IERC3156FlashBorrower.sol)

Interface for ERC-3156 flash borrowers.

_See https://eips.ethereum.org/EIPS/eip-3156._

## Functions

### onFlashLoan

```solidity
function onFlashLoan(
    address initiator,
    address asset,
    uint256 amount,
    uint256 fee,
    bytes calldata data
)
    external
    returns (bytes32);
```
