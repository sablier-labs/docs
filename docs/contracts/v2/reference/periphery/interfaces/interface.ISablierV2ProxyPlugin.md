# ISablierV2ProxyPlugin

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/0c389e73d0b3467ccfab52e98140aad7c099aacf/docs/contracts/v2/reference/periphery/interfaces)

**Inherits:** ISablierV2LockupSender, IPRBProxyPlugin

Proxy plugin that forwards the refunded assets to the proxy owner when the recipient cancels a stream whose sender is
the proxy contract.

Requirements:

- The call must be a delegate call.
- The caller must be Sablier.

## Functions

### archive

Retrieves the address of the archive contract.

```solidity
function archive() external view returns (ISablierV2Archive);
```
