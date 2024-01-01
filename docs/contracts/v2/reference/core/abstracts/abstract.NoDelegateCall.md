# NoDelegateCall

[Git Source](https://github.com/sablier-labs/v2-core/blob/a4bf69cf7024006b9a324eef433f20b74597eaaf/src/abstracts/NoDelegateCall.sol)

This contract implements logic to prevent delegate calls.

## State Variables

### ORIGINAL

_The address of the original contract that was deployed._

```solidity
address private immutable ORIGINAL;
```

## Functions

### constructor

_Sets the original contract address._

```solidity
constructor();
```

### noDelegateCall

Prevents delegate calls.

```solidity
modifier noDelegateCall();
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
