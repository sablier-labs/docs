# IERC3156FlashBorrower

[Git Source](https://github.com/sablier-labs/v2-core/blob/bca1d9ea0485b065544486bb01f4148d44289644/docs/contracts/v2/reference/core/interfaces/erc3156)

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
