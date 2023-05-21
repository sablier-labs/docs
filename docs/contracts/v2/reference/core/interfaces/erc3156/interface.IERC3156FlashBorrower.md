# IERC3156FlashBorrower

[Git Source](https://github.com/sablier-labs/v2-core/blob/b048c0e28a5120b396c3eb3cdd0bc4e8784dc155/docs/contracts/v2/reference/core/interfaces)

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
