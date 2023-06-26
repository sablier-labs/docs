---
sidebar_position: 2
---

# SablierV2ProxyPlugin

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/453a35ef662183654138bfe8cab2b523f340fa5b/docs/contracts/v2/reference/periphery)

**Inherits:** [OnlyDelegateCall](/docs/contracts/v2/reference/periphery/abstracts/abstract.OnlyDelegateCall.md),
[ISablierV2ProxyPlugin](/docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2ProxyPlugin.md),
PRBProxyPlugin

See the documentation in
[ISablierV2ProxyPlugin](docs/contracts/v2/reference/periphery/interfaces/interface.ISablierV2ProxyPlugin.md).

## State Variables

### archive

Retrieves the address of the archive contract.

```solidity
ISablierV2Archive public immutable override archive;
```

## Functions

### constructor

```solidity
constructor(ISablierV2Archive archive_);
```

### methodList

```solidity
function methodList() external pure returns (bytes4[] memory methods);
```

### onStreamCanceled

Forwards the refunded assets to the proxy owner when the recipient cancel a stream whose sender is the proxy contract.

Requirements:

- Must be delegate called.
- The caller must be an address listed in the archive.

```solidity
function onStreamCanceled(uint256 streamId, address, uint128 senderAmount, uint128) external onlyDelegateCall;
```
