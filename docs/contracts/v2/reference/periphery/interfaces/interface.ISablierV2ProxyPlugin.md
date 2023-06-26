# ISablierV2ProxyPlugin

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/453a35ef662183654138bfe8cab2b523f340fa5b/docs/contracts/v2/reference/periphery/interfaces)

**Inherits:** ISablierV2LockupSender, IPRBProxyPlugin

Proxy plugin for forwarding the refunded assets to the proxy owner when the recipient cancels a stream whose sender is
the proxy contract.

Requirements:

- The call must not be a standard call.
- The caller must be Sablier.

## Functions

### archive

Retrieves the address of the archive contract.

```solidity
function archive() external view returns (ISablierV2Archive);
```
