# NoDelegateCall

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/8b6823c019ff7556ac9ad24cbb5ac62821854d2f/src/NoDelegateCall.sol)

**Title:** NoDelegateCall

This contract implements logic to prevent delegate calls.

## Constants

### ORIGINAL

The address of the original contract that was deployed.

```solidity
address private immutable ORIGINAL
```

## Functions

### noDelegateCall

Prevents delegate calls.

```solidity
modifier noDelegateCall() ;
```

### constructor

Sets the original contract address.

```solidity
constructor() ;
```

### \_preventDelegateCall

This function checks whether the current call is a delegate call, and reverts if it is.

- A private function is used instead of inlining this logic in a modifier because Solidity copies modifiers into every
  function that uses them. The `ORIGINAL` address would get copied in every place the modifier is used, which would
  increase the contract size. By using a function instead, we can avoid this duplication of code and reduce the overall
  size of the contract.

```solidity
function _preventDelegateCall() private view;
```
