# ISablierV2Sender

[Git Source](https://github.com/sablier-labs/v2-core/blob/63113dc3fbe43438eb305663e0d6b74eefc15857/src/interfaces/hooks/ISablierV2Sender.sol)

Interface for sender contracts capable of reacting to withdrawals.

_Implementation of this interface is optional. If a sender contract doesn't implement this interface or implements it
partially, function execution will not revert._

## Functions

### onLockupStreamWithdrawn

Responds to withdrawals triggered by any address except the contract implementing this interface.

Notes:

- This function may revert, but the Sablier contract will ignore the revert.

```solidity
function onLockupStreamWithdrawn(uint256 streamId, address caller, address to, uint128 amount) external;
```

**Parameters**

| Name       | Type      | Description                                                               |
| ---------- | --------- | ------------------------------------------------------------------------- |
| `streamId` | `uint256` | The id of the stream being withdrawn from.                                |
| `caller`   | `address` | The original `msg.sender` address that triggered the withdrawal.          |
| `to`       | `address` | The address receiving the withdrawn assets.                               |
| `amount`   | `uint128` | The amount of assets withdrawn, denoted in units of the asset's decimals. |
