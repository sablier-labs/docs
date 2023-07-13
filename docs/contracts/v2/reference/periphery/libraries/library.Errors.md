# Errors

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/561f49f77dc855cb4c3a7a449a43613e8f71d655/src/libraries/Errors.sol)

Library containing all custom errors the protocol may revert with.

## Errors

### CallNotDelegateCall

Thrown when trying to perform a standard call to a function that allows only delegate calls.

```solidity
error CallNotDelegateCall();
```

### SablierV2ProxyPlugin_UnknownCaller

Thrown when the caller is an unknown address, which is not listed in the archive.

```solidity
error SablierV2ProxyPlugin_UnknownCaller(address caller);
```

### SablierV2ProxyTarget_BatchSizeZero

Thrown when trying to perform an action that requires the batch size to not be zero.

```solidity
error SablierV2ProxyTarget_BatchSizeZero();
```

### SablierV2ProxyTarget_CreditAmountMismatch

Thrown when trying to wrap and create a stream and the credit amount is not equal to `msg.value`.

```solidity
error SablierV2ProxyTarget_CreditAmountMismatch(uint256 msgValue, uint256 creditAmount);
```
