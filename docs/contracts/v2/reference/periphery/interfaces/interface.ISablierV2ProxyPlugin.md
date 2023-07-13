# ISablierV2ProxyPlugin

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/561f49f77dc855cb4c3a7a449a43613e8f71d655/docs/contracts/v2/reference/periphery/interfaces)

**Inherits:** ISablierV2LockupSender, IPRBProxyPlugin

Proxy plugin that forwards the refunded assets to the proxy owner when the recipient cancels a stream whose sender is
the proxy contract. The plugin works by implementing the hook interface defined in V2 Core.

## Functions

### archive

Retrieves the address of the archive contract.

```solidity
function archive() external view returns (ISablierV2Archive);
```
